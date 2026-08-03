import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import 'react-datepicker/dist/react-datepicker.css';
import FilterSidebar from '../Sidebars/FilterSidebar/FilterSidebar'; 
import './TrainSelection.css';

import ticketFeatures from '../../assets/ticket-features.svg';
import trainIcon from '../../assets/icon-train.svg';
import arrowForward from '../../assets/arrow-forward.svg';
import arrowBackward from '../../assets/arrow-backward.svg';
import arrowPagePrev from '../../assets/arrow-page-prev.svg';
import arrowPageNext from '../../assets/arrow-page-next.svg';

export const MOCK_TRAINS_DATA = [
  {
    id: 1,
    number: "116С",
    routeSummary: ["Адлер →", "Москва →", "Санкт-Петербург"],
    forward: {
      timeOut: "00:10",
      cityOut: "Москва",
      stationOut: "Курский вокзал",
      duration: "9 : 42",
      timeIn: "09:52",
      cityIn: "Санкт-Петербург",
      stationIn: "Ладожский вокзал"
    },
    backward: {
      timeOut: "00:10",
      cityOut: "Москва",
      stationOut: "Курский вокзал",
      duration: "9 : 42",
      timeIn: "09:52",
      cityIn: "Санкт-Петербург",
      stationIn: "Ладожский вокзал"
    },
    seats: [
      { type: "Сидячий", count: 88, price: "1 920" },
      { type: "Плацкарт", count: 52, price: "2 530" },
      { type: "Купе", count: 24, price: "3 820" },
      { type: "Люкс", count: 15, price: "4 950" }
    ]
  },
  {
    id: 2,
    number: "020У",
    routeSummary: ["Москва →", "Санкт-Петербург", "«Мегаполис»"],
    forward: {
      timeOut: "00:20",
      cityOut: "Москва",
      stationOut: "Ленинградский вокзал",
      duration: "8 : 39",
      timeIn: "08:59",
      cityIn: "Санкт-Петербург",
      stationIn: "Московский вокзал"
    },
    backward: {
      timeOut: "00:20",
      cityOut: "Москва",
      stationOut: "Ленинградский вокзал",
      duration: "8 : 39",
      timeIn: "08:59",
      cityIn: "Санкт-Петербург",
      stationIn: "Московский вокзал"
    },
    seats: [
      { type: "Купе", count: 90, price: "3 950" },
      { type: "Люкс", count: 31, price: "4 950" }
    ]
  }
];

interface LocationState {
    searchParams?: {
        fromCity: string;
        toCity: string;
        startDate: string | null;
        endDate: string | null;
    }
}

function TrainSelection() {

    const navigate = useNavigate();
    const location = useLocation() as { state: LocationState }; 
    
    const [sidebarDateStart, setSidebarDateStart] = useState<Date | null>(new Date('2018-08-30'));
    const [sidebarDateEnd, setSidebarDateEnd] = useState<Date | null>(new Date('2018-09-09'));

    const [wagonFilters, setWagonFilters] = useState({
        coupe: true,       
        platscart: false,  
        sitting: false,    
        lux: false,        
        wifi: true,        
        express: false     
    });

    // Динамический расчет крайних цен на основе доступных билетов
    const allPrices = MOCK_TRAINS_DATA.flatMap(train => 
        train.seats.map(seat => parseInt(seat.price.replace(/\s/g, '')))
    );
    const absoluteMinPrice = Math.min(...allPrices) || 1920; 
    const absoluteMaxPrice = Math.max(...allPrices) || 7000; // Вычислит максимальную из билетов (или 7000 по макету)

    const [priceMin, setPriceMin] = useState<number>(absoluteMinPrice);
    const [priceMax, setPriceMax] = useState<number>(absoluteMaxPrice);

    const handleFilterToggle = (name: string) => {
        setWagonFilters(prev => ({ 
            ...prev, 
            [name]: !prev[name as keyof typeof wagonFilters] 
        }));
    };

    const [activeSort, setActiveSort] = useState('time');
    const [isSortOpen, setIsSortOpen] = useState(false);
    const [activeLimit, setActiveLimit] = useState(5);
    const [activePage, setActivePage] = useState(1);

    const searchParams = location.state?.searchParams;
    const fromCity = searchParams?.fromCity || '';
    const toCity = searchParams?.toCity || '';
    
    const filteredTrains = MOCK_TRAINS_DATA.filter(train => {
        if (fromCity || toCity) {
            const searchFrom = fromCity.toLowerCase().trim();
            const searchTo = toCity.toLowerCase().trim();

            const hasFrom = train.routeSummary.some(city => city.toLowerCase().includes(searchFrom));
            const hasTo = train.routeSummary.some(city => city.toLowerCase().includes(searchTo));

            if (!hasFrom || !hasTo) return false;
        }

        const isAnyWagonFilterActive = wagonFilters.coupe || wagonFilters.platscart || wagonFilters.sitting || wagonFilters.lux;

        if (isAnyWagonFilterActive) {
            const matchCoupe = wagonFilters.coupe && train.seats.some(s => s.type === 'Купе');
            const matchPlatscart = wagonFilters.platscart && train.seats.some(s => s.type === 'Плацкарт');
            const matchSitting = wagonFilters.sitting && train.seats.some(s => s.type === 'Сидячий');
            const matchLux = wagonFilters.lux && train.seats.some(s => s.type === 'Люкс');

            if (!matchCoupe && !matchPlatscart && !matchSitting && !matchLux) {
                return false;
            }
        }

        const hasMatchingPrice = train.seats.some(seat => {
            const seatPriceNum = parseInt(seat.price.replace(/\s/g, '')); 
            return seatPriceNum >= priceMin && seatPriceNum <= priceMax;
        });

        if (!hasMatchingPrice) return false;

        return true; 
    });

    useEffect(() => {
        setActivePage(1);
    }, [fromCity, toCity, wagonFilters, priceMin, priceMax]);

    const sortedTrains = [...filteredTrains].sort((a, b) => {
        if (activeSort === 'price') {
            const minPriceA = Math.min(...a.seats.map(s => parseInt(s.price.replace(/\s/g, ''))));
            const minPriceB = Math.min(...b.seats.map(s => parseInt(s.price.replace(/\s/g, ''))));
            return minPriceA - minPriceB;
        }
        return a.forward.timeOut.localeCompare(b.forward.timeOut);
    });

    const indexOfLastTrain = activePage * activeLimit;
    const indexOfFirstTrain = indexOfLastTrain - activeLimit;
    const currentTrains = sortedTrains.slice(indexOfFirstTrain, indexOfLastTrain);

    const totalPages = Math.ceil(filteredTrains.length / activeLimit) || 1;
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    const handleSelectSeats = (train: any) => {
        navigate('/seats', { state: { selectedTrain: train } });
    };

    return (
    <div className="train-selection__wrapper">
        <div className="train-selection__container">

            {/* ПОДКЛЮЧАЕМ ОБЩУЮ БОКОВУЮ ПАНЕЛЬ */}
            <FilterSidebar 
                dateStart={sidebarDateStart}
                setDateStart={setSidebarDateStart}
                dateEnd={sidebarDateEnd}
                setDateEnd={setSidebarDateEnd}
                wagonFilters={wagonFilters}
                onToggle={handleFilterToggle}
                priceMin={priceMin}
                setPriceMin={setPriceMin}
                priceMax={priceMax}
                setPriceMax={setPriceMax}
                absoluteMinPrice={absoluteMinPrice}
                absoluteMaxPrice={absoluteMaxPrice}
            />

            {/* ПРАВАЯ КОЛОНКА */}
            <main className="train-selection__main">
                <div className="train-selection__topbar">

                    <span className="train-selection__count">найдено {filteredTrains.length}</span>
                    
                    <div className="train-selection__controls">
                    
                        <div className="train-selection__sort">
                            <span className="train-selection__sort-label">сортировать по:</span>
                            <button 
                            className="train-selection__sort-trigger"
                            onClick={() => setIsSortOpen(!isSortOpen)}>
                                {activeSort === 'time' && 'времени'}
                                {activeSort === 'price' && 'стоимости'}
                                {activeSort === 'duration' && 'длительности'}
                            </button>
                            
                            {isSortOpen && (
                                <div className="train-selection__sort-options">
                                    <button 
                                    className={`train-selection__sort-btn ${activeSort === 'time' ? 'train-selection__sort-btn--active' : ''}`}
                                    onClick={() => { setActiveSort('time'); setIsSortOpen(false); }}>времени</button>
                                    
                                    <button 
                                    className={`train-selection__sort-btn ${activeSort === 'price' ? 'train-selection__sort-btn--active' : ''}`}
                                    onClick={() => { setActiveSort('price'); setIsSortOpen(false); }}>стоимости</button>
                                    
                                    <button 
                                    className={`train-selection__sort-btn ${activeSort === 'duration' ? 'train-selection__sort-btn--active' : ''}`}
                                    onClick={() => { setActiveSort('duration'); setIsSortOpen(false); }}>длительности</button>
                                </div>
                            )}
                        </div>
                        
                        <div className="train-selection__limit">
                            <span className="train-selection__limit-label">показывать по:</span>
                            {[5, 10, 20].map((num) => (
                                <button 
                                    key={num} 
                                    type="button"
                                    className={`train-selection__limit-btn ${activeLimit === num ? 'train-selection__limit-btn--active' : ''}`}
                                    onClick={() => { setActiveLimit(num); setActivePage(1); }}
                                >
                                    {num}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* СПИСОК КАРТОЧЕК ПОЕЗДОВ */}
                <div className="train-selection__list">
                    {currentTrains.map((train) => (
                        <article className="train-card" key={train.id}>
                            
                            {/* ЛЕВАЯ СЕКЦИЯ: Поезд и Иконка */}
                            <div className="train-card__info">
                                <div className="train-card__icon-box">
                                    <img src={trainIcon} alt="Поезд" className="train-card__icon-img" />
                                </div>
                                <h3 className="train-card__number">{train.number}</h3>
                                <div className="train-card__route-summary">
                                    {train.routeSummary.map((city, idx) => (
                                        <span 
                                            key={idx} 
                                            className={`train-card__summary-city ${idx === 0 ? 'train-card__summary-city--highlight' : ''}`}
                                        >
                                            {city}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* СРЕДНЯЯ СЕКЦИЯ: Маршруты туда и обратно */}
                            <div className="train-card__route-details">
                                {/* Маршрут ТУДА */}
                                <div className="train-card__route train-card__route--forward">
                                    <div className="train-card__time-block">
                                        <span className="train-card__time">{train.forward.timeOut}</span>
                                        <span className="train-card__city">{train.forward.cityOut}</span>
                                        <span className="train-card__station">{train.forward.stationOut}</span>
                                    </div>
                                    
                                    <div className="train-card__duration-block">
                                        <span className="train-card__duration-time">{train.forward.duration}</span>
                                        <img src={arrowForward} alt="Туда" className="train-card__arrow-img" />
                                    </div>

                                    <div className="train-card__time-block">
                                        <span className="train-card__time">{train.forward.timeIn}</span>
                                        <span className="train-card__city">{train.forward.cityIn}</span>
                                        <span className="train-card__station">{train.forward.stationIn}</span>
                                    </div>
                                </div>

                                {train.backward && (
                                    <div className="train-card__route train-card__route--backward">
                                        <div className="train-card__time-block">
                                            <span className="train-card__time">{train.backward.timeOut}</span>
                                            <span className="train-card__city">{train.backward.cityOut}</span>
                                            <span className="train-card__station">{train.backward.stationOut}</span>
                                        </div>
                                        
                                        <div className="train-card__duration-block">
                                            <span className="train-card__duration-time">{train.backward.duration}</span>
                                            <img src={arrowBackward} alt="Обратно" className="train-card__arrow-img" />
                                        </div>

                                        <div className="train-card__time-block">
                                            <span className="train-card__time">{train.backward.timeIn}</span>
                                            <span className="train-card__city">{train.backward.cityIn}</span>
                                            <span className="train-card__station">{train.backward.stationIn}</span>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* ПРАВАЯ СЕКЦИЯ: Цены и классы мест */}
                            <div className="train-card__pricing">
                                <ul className="train-card__seats-list">
                                    {train.seats.map((seat, index) => (
                                        <li className="train-card__seat-item" key={index}>
                                            <span className="train-card__seat-type">{seat.type}</span>
                                            <span className="train-card__seat-count">{seat.count}</span>
                                            <span className="train-card__seat-price">
                                                от <strong className="train-card__price-num">{seat.price}</strong>{" "}
                                                <span className="train-card__currency">₽</span>
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Нижняя часть правой секции: Удобства и кнопка */}
                                <div className="train-card__pricing-bottom">
                                    <div className="train-card__features">
                                        <img src={ticketFeatures} alt="Удобства" className="train-card__features-img" />
                                    </div>
                                    <button 
                                        type="button" 
                                        className="train-card__btn"
                                        onClick={() => handleSelectSeats(train)}
                                    >
                                        Выбрать места
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </main>
        </div>

        {/* БЛОК СТРАНИЦЫ */}
        <div className="train-selection__pagination">
            {/* Стрелка НАЗАД */}
            <button 
                type="button"
                className="train-selection__page-arrow train-selection__page-arrow--prev"
                onClick={() => setActivePage((prev) => Math.max(prev - 1, 1))}
                disabled={activePage === 1}
            >
                <img src={arrowPagePrev} alt="Назад" className="train-selection__page-arrow-img" />
            </button>
            
            {/* Номера страниц (генерируются динамически) */}
            {pageNumbers.map((num) => (
                <button 
                    key={num} 
                    type="button"
                    className={`train-selection__page-num ${activePage === num ? 'train-selection__page-num--active' : ''}`}
                    onClick={() => setActivePage(num)}
                >
                    {num}
                </button>
            ))}
            
            {/* Стрелка ВПЕРЕД */}
            <button 
                type="button"
                className="train-selection__page-arrow train-selection__page-arrow--next"
                onClick={() => setActivePage((prev) => Math.min(prev + 1, totalPages))}
                disabled={activePage === totalPages}
            >
                <img src={arrowPageNext} alt="Вперед" className="train-selection__page-arrow-img" />
            </button>
        </div>
    </div>
  );
}

export default TrainSelection;
