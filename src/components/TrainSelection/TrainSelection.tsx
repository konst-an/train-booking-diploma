import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import 'react-datepicker/dist/react-datepicker.css';
import FilterSidebar from '../Sidebars/FilterSidebar/FilterSidebar'; 
import './TrainSelection.css';

import ticketFeatures from '../../assets/ticket-features.svg';

import trainIcon from '../../assets/icon-train.svg';

import arrowForward from '../../assets/arrow-forward.svg';
import arrowBackward from '../../assets/arrow-backward.svg';

import arrowPagePrev from '../../assets/arrow-page-prev.svg';
import arrowPageNext from '../../assets/arrow-page-next.svg';

const MOCK_TRAINS_DATA = [
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
  }
];

function TrainSelection() {
    const navigate = useNavigate();
    
    const [activeSort, setActiveSort] = useState('time');
    const [isSortOpen, setIsSortOpen] = useState(false);
    const [activeLimit, setActiveLimit] = useState(5);
    const [activePage, setActivePage] = useState(1);

    const handleSelectSeats = () => {
        navigate('/seats');
    };
  
  return (
    <div className="train-selection__wrapper">
        <div className="train-selection__container">
            {/* ПОДКЛЮЧАЕМ ОБЩУЮ БОКОВУЮ ПАНЕЛЬ */}
            <FilterSidebar />

            {/* ПРАВАЯ КОЛОНКА */}
            <main className="train-selection__main">
                <div className="train-selection__topbar">
                    <span className="train-selection__count">найдено 20</span>
                    
                    <div className="train-selection__controls">
                    {/* Сортировка */}
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
                        
                        {/* Показывать по */}
                        <div className="train-selection__limit">
                            <span className="train-selection__limit-label">показывать по:</span>{[5, 10, 20].map((num) => (<button key={num} className={`train-selection__limit-btn ${activeLimit === num ? 'train-selection__limit-btn--active' : ''}`}
                            onClick={() => setActiveLimit(num)}>{num}</button>))}
                        </div>
                    </div>
                </div>

                {/* СПИСОК КАРТОЧЕК ПОЕЗДОВ */}
                <div className="train-selection__list">
                    {MOCK_TRAINS_DATA.map((train) => (
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
                                        onClick={handleSelectSeats}
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
            <button className="train-selection__page-arrow train-selection__page-arrow--prev">
                <img src={arrowPagePrev} alt="Назад" className="train-selection__page-arrow-img" />
            </button>
            
            {[1, 2, 3].map((num) => (
                <button 
                key={num} 
                className={`train-selection__page-num ${activePage === num ? 'train-selection__page-num--active' : ''}`}
                onClick={() => setActivePage(num)}>
                    {num}
                </button>
            ))}
            
            <button className="train-selection__page-arrow train-selection__page-arrow--next">
                <img src={arrowPageNext} alt="Вперед" className="train-selection__page-arrow-img" />
            </button>
        </div>        

    </div>
    
    
  );
}

export default TrainSelection;
