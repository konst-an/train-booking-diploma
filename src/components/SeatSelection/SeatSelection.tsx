import { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

import FilterSidebar from '../Sidebars/FilterSidebar/FilterSidebar'; 
import './SeatSelection.css';

import arrowBackOrange from '../../assets/arrow-back-orange.svg';

import iconTrainMini from '../../assets/icon-train-mini.svg';
import iconClockMini from '../../assets/icon-clock-mini.svg';
import arrowForward from '../../assets/arrow-forward.svg';

import sidebarSedentary from '../../assets/sidebar-sedentary.svg'; 
import sidebarReserved from '../../assets/sidebar-reserved.svg';   
import sidebarCoupe from '../../assets/sidebar-coupe.svg';         
import sidebarLuxury from '../../assets/sidebar-luxury.svg';       

import iconServiceAir from '../../assets/icon-service-air.svg';     
import iconWifi from '../../assets/icon-wifi.svg';           
import iconServiceLinen from '../../assets/icon-service-linen.svg'; 
import iconServiceFood from '../../assets/icon-service-food.svg';

import { MOCK_TRAINS_DATA } from '../TrainSelection/TrainSelection';

const WAGONS_PRICES_DATA: Record<string, { total: number; topQty: number; bottomQty: number; topPrice: string; bottomPrice: string }> = {
  "07": { total: 11, topQty: 3, bottomQty: 8, topPrice: "2 920", bottomPrice: "3 530" },
  "09": { total: 16, topQty: 6, bottomQty: 10, topPrice: "3 100", bottomPrice: "3 850" }
};

function SeatSelection() {
    const navigate = useNavigate();
    const location = useLocation();

    const train = location.state?.selectedTrain || MOCK_TRAINS_DATA[0];

    const [adultCount, setAdultCount] = useState<number>(2);
    const [childCount, setChildCount] = useState<number>(1);
    const [babyCount, setBabyCount] = useState<number>(0);

    const maxAdults = 5; 
    const maxChildren = 4;

    const [activeWagonType, setActiveWagonType] = useState<string>('coupe');
    const [activeWagonNum, setActiveWagonNum] = useState<string>('07');

    const [hasAir, setHasAir] = useState<boolean>(false);
    const [hasWifi, setHasWifi] = useState<boolean>(false);
    const [hasLinen, setHasLinen] = useState<boolean>(true);
    const [hasFood, setHasFood] = useState<boolean>(true);

    const wagonInfo = WAGONS_PRICES_DATA[activeWagonNum] || WAGONS_PRICES_DATA["07"];

    const allPrices = MOCK_TRAINS_DATA.flatMap(train => 
        train.seats.map(seat => parseInt(seat.price.replace(/\s/g, '')))
    );
    const absoluteMinPrice = Math.min(...allPrices) || 1920;
    const absoluteMaxPrice = Math.max(...allPrices) || 7000;

    const [priceMin, setPriceMin] = useState<number>(absoluteMinPrice);
    const [priceMax, setPriceMax] = useState<number>(absoluteMaxPrice);

    const [timeDepartureMin, setTimeDepartureMin] = useState<number>(0);
    const [timeDepartureMax, setTimeDepartureMax] = useState<number>(11);
    
    const [timeArrivalMin, setTimeArrivalMin] = useState<number>(0);
    const [timeArrivalMax, setTimeArrivalMax] = useState<number>(11);

    const [timeReturnDepartureMin, setTimeReturnDepartureMin] = useState<number>(0);
    const [timeReturnDepartureMax, setTimeReturnDepartureMax] = useState<number>(11);
    
    const [timeReturnArrivalMin, setTimeReturnArrivalMin] = useState<number>(5);
    const [timeReturnArrivalMax, setTimeReturnArrivalMax] = useState<number>(11);

    const [liveUsers] = useState(() => Math.floor(Math.random() * (15 - 5 + 1)) + 5);

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

    const handleFilterToggle = (name: string) => {
        setWagonFilters(prev => ({ 
            ...prev, 
            [name]: !prev[name as keyof typeof wagonFilters] 
        }));
    };

    return (
        <div className="seat-selection__container">
            
            {/* ЛЕВАЯ КОЛОНКА: (Фильтры + Последние билеты) */}
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
               
                // ВРЕМЯ НАПРАВЛЕНИЯ "ТУДА"
                timeDepartureMin={timeDepartureMin}
                setTimeDepartureMin={setTimeDepartureMin}
                timeDepartureMax={timeDepartureMax}
                setTimeDepartureMax={setTimeDepartureMax}
                timeArrivalMin={timeArrivalMin}
                setTimeArrivalMin={setTimeArrivalMin}
                timeArrivalMax={timeArrivalMax}
                setTimeArrivalMax={setTimeArrivalMax}

                // ВРЕМЯ НАПРАВЛЕНИЯ "ОБРАТНО" 
                timeReturnDepartureMin={timeReturnDepartureMin}
                setTimeReturnDepartureMin={setTimeReturnDepartureMin}
                timeReturnDepartureMax={timeReturnDepartureMax}
                setTimeReturnDepartureMax={setTimeReturnDepartureMax}
                timeReturnArrivalMin={timeReturnArrivalMin}
                setTimeReturnArrivalMin={setTimeReturnArrivalMin}
                timeReturnArrivalMax={timeReturnArrivalMax}
                setTimeReturnArrivalMax={setTimeReturnArrivalMax}
            />

            {/* ПРАВАЯ КОЛОНКА: Основная информация выбора мест */}
            <main className="seat-selection__main">
                <h2 className="seat-selection__title">Выбор мест</h2>
                <div className="seat-selection__content">

                    {/* ПЕРВЫЙ КОНТЕЙНЕР: АКТИВНЫЙ/РАЗВЕРНУТЫЙ БЛОК ВЫБОРА МЕСТ */}
                    <div className="seat-selection__train-block seat-selection__train-block--active">

                        {/* БЛОК НАВИГАЦИИ (КНОПКА НАЗАД И СТРЕЛКА) */}
                        <div className="seat-selection__navigation">
                            <img src={arrowBackOrange} alt="" className="seat-selection__back-arrow-img" />
                            <button 
                                className="seat-selection__btn-back"
                                onClick={() => navigate(-1)} 
                            >
                                Выбрать другой поезд
                            </button>
                        </div>

                        {/* МИНИ-КАРТОЧКА ВЫБРАННОГО ПОЕЗДА */}
                        <div className="seat-selection__train-mini-card">

                            {/* ЛЕВАЯ СЕКЦИЯ: Номер поезда и маршрут */}
                            <div className="seat-selection__mini-info">
                                <img src={iconTrainMini} alt="" className="seat-selection__mini-train-icon" />
                                <div className="seat-selection__mini-text-block">
                                    <div className="seat-selection__mini-train-num">
                                        <span>{train.number}</span>
                                    </div>
                                    <div className="seat-selection__mini-cities">
                                        {train.routeSummary.map((city: string, idx: number) => (
                                            <span 
                                                key={idx} 
                                                className={idx === train.routeSummary.length - 1 ? 'seat-selection__mini-city-last' : ''}
                                            >
                                                {city}{idx < train.routeSummary.length - 1 ? ' ' : ''}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* СРЕДНЯЯ СЕКЦИЯ */}
                            <div className="seat-selection__mini-route">
                                {/* Отправление */}
                                <div className="seat-selection__mini-time-block">
                                    <div className="seat-selection__mini-time">{train.forward.timeOut}</div>
                                    <div className="seat-selection__mini-station">{train.forward.cityOut}</div>
                                    <div className="seat-selection__mini-vokzal">{train.forward.stationOut}</div>
                                </div>

                                {/* Стрелочка направления */}
                                <img src={arrowForward} alt="" className="seat-selection__mini-route-arrow" />

                                {/* Прибытие */}
                                <div className="seat-selection__mini-time-block">
                                    <div className="seat-selection__mini-time">{train.forward.timeIn}</div>
                                    <div className="seat-selection__mini-station">{train.forward.cityIn}</div>
                                    <div className="seat-selection__mini-vokzal">{train.forward.stationIn}</div>
                                </div>
                            </div>

                            {/* ПРАВАЯ СЕКЦИЯ */}
                            <div className="seat-selection__mini-duration">
                                <img src={iconClockMini} alt="" className="seat-selection__mini-clock-icon" />
                                <div className="seat-selection__mini-duration-text">
                                    <span>{train.forward.duration.split(':')[0].trim()} часов</span>
                                    <span>{train.forward.duration.split(':')[1].trim()} минуты</span>
                                </div>
                            </div>
                        </div>

                        {/* СЕКЦИЯ КОЛИЧЕСТВА БИЛЕТОВ */}
                        <div className="seat-selection__tickets-section">
                            <h3 className="seat-selection__tickets-title">Количество билетов</h3>

                            <div className="seat-selection__tickets-grid">

                                 {/* Карточка 1: Взрослых */}
                                <div className={`seat-selection__ticket-card ${adultCount > 0 ? 'seat-selection__ticket-card--filled' : ''}`}>
                                    <div className="seat-selection__ticket-field">
                                        <span>Взрослых — </span>
                                        <input 
                                            type="text"
                                            value={adultCount}
                                            className="seat-selection__ticket-input-clean"
                                            style={{ marginLeft: '6px' }}
                                            onChange={(e) => {
                                                // Разрешаем только цифры, убираем ведущие нули
                                                let valStr = e.target.value.replace(/\D/g, '').replace(/^0+/, '');
                                                let val = parseInt(valStr, 10);
                                                
                                                if (isNaN(val) || val < 1) val = 1; // Если всё стёрли, возвращаем 1
                                                if (val > maxAdults) val = maxAdults;
                                                
                                                setAdultCount(val);
                                                if (babyCount > val) setBabyCount(val);
                                            }}
                                        />
                                    </div>
                                    <p className="seat-selection__ticket-hint">
                                        Можно добавить еще<br />{maxAdults - adultCount} пассажиров
                                    </p>
                                </div>

                                {/* Карточка 2: Детских */}
                                <div className={`seat-selection__ticket-card ${childCount > 0 ? 'seat-selection__ticket-card--active' : ''}`}>
                                    <div className="seat-selection__ticket-field">
                                        <span>Детских — </span>
                                        <input 
                                            type="text"
                                            value={childCount}
                                            className="seat-selection__ticket-input-clean"
                                            style={{ marginLeft: '6px' }}
                                            onChange={(e) => {
                                                let valStr = e.target.value.replace(/\D/g, '');
                                                
                                                if (valStr.length > 1 && valStr.startsWith('0')) {
                                                    valStr = valStr.replace(/^0+/, '');
                                                }
                                                let val = parseInt(valStr, 10);
                                                
                                                if (isNaN(val) || val < 0) val = 0;
                                                if (val > maxChildren) val = maxChildren;
                                                
                                                setChildCount(val);
                                            }}
                                        />
                                    </div>
                                    <p className="seat-selection__ticket-hint">
                                        Можно добавить еще {maxChildren - childCount} детей до 10 лет. Свое место в вагоне, как у взрослых, но дешевле в среднем на 50-65%
                                    </p>
                                </div>

                                {/* Карточка 3: Детских без места */}
                                <div className="seat-selection__ticket-card">
                                    <div className="seat-selection__ticket-field">
                                        <span>Детских «без места» — </span>
                                        <input 
                                            type="text"
                                            value={babyCount}
                                            className="seat-selection__ticket-input-clean"
                                            style={{ marginLeft: '6px' }}
                                            onChange={(e) => {
                                                let valStr = e.target.value.replace(/\D/g, '');
                                                if (valStr.length > 1 && valStr.startsWith('0')) {
                                                    valStr = valStr.replace(/^0+/, '');
                                                }
                                                let val = parseInt(valStr, 10);
                                                
                                                if (isNaN(val) || val < 0) val = 0;
                                                if (val > adultCount) val = adultCount; // Ограничение по взрослым
                                                
                                                setBabyCount(val);
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                         
                        {/* ПУНКТИРНАЯ ЛИНИЯ-РАЗДЕЛИТЕЛЬ */}
                        <div className="seat-selection__dashed-divider"></div>

                        {/* СЕКЦИЯ: ТИП ВАГОНА */}
                        <div className="seat-selection__wagon-type-section">
                            <h3 className="seat-selection__wagon-type-title">Тип вагона</h3>
                            
                            <div className="seat-selection__wagon-type-list">
                                
                                {/* Сидячий */}
                                <button 
                                    type="button"
                                    className={`seat-selection__wagon-type-item ${activeWagonType === 'sedentary' ? 'seat-selection__wagon-type-item--active' : ''}`}
                                    onClick={() => setActiveWagonType('sedentary')}
                                >
                                    <img src={sidebarSedentary} alt="Сидячий" className="seat-selection__wagon-icon seat-selection__wagon-icon--sedentary" />
                                    <span className="seat-selection__wagon-text">Сидячий</span>
                                </button>

                                {/* Плацкарт */}
                                <button 
                                    type="button"
                                    className={`seat-selection__wagon-type-item ${activeWagonType === 'reserved' ? 'seat-selection__wagon-type-item--active' : ''}`}
                                    onClick={() => setActiveWagonType('reserved')}
                                >
                                    <img src={sidebarReserved} alt="Плацкарт" className="seat-selection__wagon-icon seat-selection__wagon-icon--reserved" />
                                    <span className="seat-selection__wagon-text">Плацкарт</span>
                                </button>

                                {/* Купе */}
                                <button 
                                    type="button"
                                    className={`seat-selection__wagon-type-item ${activeWagonType === 'coupe' ? 'seat-selection__wagon-type-item--active' : ''}`}
                                    onClick={() => setActiveWagonType('coupe')}
                                >
                                    <img src={sidebarCoupe} alt="Купе" className="seat-selection__wagon-icon seat-selection__wagon-icon--coupe" />
                                    <span className="seat-selection__wagon-text">Купе</span>
                                </button>

                                {/* Люкс */}
                                <button 
                                    type="button"
                                    className={`seat-selection__wagon-type-item ${activeWagonType === 'luxury' ? 'seat-selection__wagon-type-item--active' : ''}`}
                                    onClick={() => setActiveWagonType('luxury')}
                                >
                                    <img src={sidebarLuxury} alt="Люкс" className="seat-selection__wagon-icon seat-selection__wagon-icon--luxury" />
                                    <span className="seat-selection__wagon-text">Люкс</span>
                                </button>

                            </div>
                        </div>

                        {/* СТРОКА ВЫБОРА НОМЕРА ВАГОНА */}
                        <div className="seat-selection__wagons-nav-bar">
                            <div className="seat-selection__wagons-left-group">
                                <span className="seat-selection__wagons-title-label">Вагоны</span>
                                <div className="seat-selection__wagons-buttons-list">
                                    <button 
                                        type="button"
                                        className={`seat-selection__wagon-btn ${activeWagonNum === '07' ? 'seat-selection__wagon-btn--active' : ''}`}
                                        onClick={() => setActiveWagonNum('07')}
                                    >
                                        07
                                    </button>

                                    <button 
                                        type="button"
                                        className={`seat-selection__wagon-btn ${activeWagonNum === '09' ? 'seat-selection__wagon-btn--active' : ''}`}
                                        onClick={() => setActiveWagonNum('09')}
                                    >
                                        09
                                    </button>
                                </div>
                            </div>
                            <span className="seat-selection__wagons-direction-hint">
                                Нумерация вагонов начинается с головы поезда
                            </span>
                        </div>

                        {/* КАРТОЧКА ДЕТАЛЕЙ ВАГОНА */}
                        <div className="seat-selection__wagon-card">
                            
                            {/* ЛЕВАЯ ЧАСТЬ: Номер вагона меняется динамически в зависимости от стейта */}
                            <div className="seat-selection__wagon-badge">
                                <div className="seat-selection__wagon-badge-num">{activeWagonNum}</div>
                                <div className="seat-selection__wagon-badge-text">вагон</div>
                            </div>

                            {/* ПРАВАЯ ЧАСТЬ: Ряд из 3-х равномерных колонок */}
                            <div className="seat-selection__wagon-info-content">
                                
                                {/* КОЛОНКА 1: МЕСТА */}
                                <div className="seat-selection__wagon-col-seats">
                                    <div className="seat-selection__wagon-col-title">
                                        Места <span className="seat-selection__total-seats-count">{wagonInfo.total}</span>
                                    </div>
                                    <div className="seat-selection__wagon-col-item">
                                        <span className="seat-selection__seat-name">Верхние</span>
                                        <span className="seat-selection__seat-qty">{wagonInfo.topQty}</span>
                                    </div>
                                    <div className="seat-selection__wagon-col-item">
                                        <span className="seat-selection__seat-name">Нижние</span>
                                        <span className="seat-selection__seat-qty">{wagonInfo.bottomQty}</span>
                                    </div>
                                </div>

                                {/* КОЛОНКА 2: СТОИМОСТЬ */}
                                <div className="seat-selection__wagon-col-prices">
                                    <div className="seat-selection__wagon-col-title">Стоимость</div>
                                    <div className="seat-selection__wagon-col-item">
                                        <span className="seat-selection__price-num">{wagonInfo.topPrice}</span>
                                        <span className="seat-selection__price-rub">₽</span>
                                    </div>
                                    <div className="seat-selection__wagon-col-item">
                                        <span className="seat-selection__price-num">{wagonInfo.bottomPrice}</span>
                                        <span className="seat-selection__price-rub">₽</span>
                                    </div>
                                </div>

                                {/* КОЛОНКА 3: ОБСЛУЖИВАНИЕ */}
                                <div className="seat-selection__wagon-col-services">
                                    <div className="seat-selection__wagon-col-title">
                                        Обслуживание <span className="seat-selection__company-name">ФПК</span>
                                    </div>
                                    
                                    <div className="seat-selection__services-icons-list">
                                        
                                        {/* Иконка: Кондиционер */}
                                        <div className="seat-selection__service-item">
                                            <button 
                                                type="button"
                                                className={`seat-selection__service-btn ${hasAir ? 'seat-selection__service-btn--active' : ''}`} 
                                                aria-label="Кондиционер"
                                                onClick={() => setHasAir(!hasAir)}
                                            >
                                                <img src={iconServiceAir} alt="" className="seat-selection__service-img" />
                                            </button>
                                            <div className="seat-selection__service-tooltip">кондиционер</div>
                                        </div>

                                        {/* Иконка: Wi-Fi */}
                                        <div className="seat-selection__service-item">
                                            <button 
                                                type="button"
                                                className={`seat-selection__service-btn ${hasWifi ? 'seat-selection__service-btn--active' : ''}`} 
                                                aria-label="Wi-Fi"
                                                onClick={() => setHasWifi(!hasWifi)} 
                                            >
                                                <img src={iconWifi} alt="" className="seat-selection__service-img" />
                                            </button>
                                            <div className="seat-selection__service-tooltip">wi-fi</div>
                                        </div>

                                        {/* Иконка: Белье */}
                                        <div className="seat-selection__service-item">
                                            <button 
                                                type="button"
                                                className={`seat-selection__service-btn ${hasLinen ? 'seat-selection__service-btn--active' : ''}`} 
                                                aria-label="Постельное белье"
                                                onClick={() => setHasLinen(!hasLinen)}
                                            >
                                                <img src={iconServiceLinen} alt="" className="seat-selection__service-img" />
                                            </button>
                                            <div className="seat-selection__service-tooltip">постельное белье</div>
                                        </div>

                                        {/* Иконка: Питание */}
                                        <div className="seat-selection__service-item">
                                            <button 
                                                type="button"
                                                className={`seat-selection__service-btn ${hasFood ? 'seat-selection__service-btn--active' : ''}`} 
                                                aria-label="Питание"
                                                onClick={() => setHasFood(!hasFood)}
                                            >
                                                <img src={iconServiceFood} alt="" className="seat-selection__service-img" />
                                            </button>
                                            <div className="seat-selection__service-tooltip">питание</div>
                                        </div>

                                    </div>
                                </div>
                               
                            </div>

                            {/* ЖИВОЙ СЧЕТЧИК (В правом нижнем углу карточки) */}
                            <div className="seat-selection__live-users-panel">
                                <span className="seat-selection__live-users-text">
                                    {liveUsers} человек выбирают места в этом поезде
                                </span>
                            </div>
                        </div>
                    </div>  

                    {/* ВТОРОЙ КОНТЕЙНЕР: СВЕРНУТЫЙ БЛОК ВЫБОРА МЕСТ */}
                    <div className="seat-selection__train-block seat-selection__train-block--collapsed">
                        {/* БЛОК НАВИГАЦИИ (ДОБАВИЛИ КЛАСС МОДИФИКАТОРА) */}
                         <div className="seat-selection__navigation seat-selection__navigation--collapsed">
                            <img src={arrowBackOrange} alt="" className="seat-selection__back-arrow-img" />
                            <button 
                                className="seat-selection__btn-back"
                                onClick={() => navigate('/trains')} // Теперь кнопка работает и здесь!
                            >
                                Выбрать другой поезд
                            </button>
                        </div>

                        {/* 2. МИНИ-КАРТОЧКА ВЫБРАННОГО ПОЕЗДА (Серая полоса) */}
                        <div className="seat-selection__train-mini-card">

                            {/* Левая секция: Номер поезда и маршрут */}
                            <div className="seat-selection__mini-info">
                                <img src={iconTrainMini} alt="" className="seat-selection__mini-train-icon" />
                                <div className="seat-selection__mini-text-block">
                                    <div className="seat-selection__mini-train-num">
                                        <span>{train.number}</span>
                                    </div>
                                    <div className="seat-selection__mini-cities">
                                        {train.routeSummary.map((city: string, idx: number) => (
                                            <span 
                                                key={idx} 
                                                className={idx === train.routeSummary.length - 1 ? 'seat-selection__mini-city-last' : ''}
                                            >
                                                {city}{idx < train.routeSummary.length - 1 ? ' ' : ''}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Средняя секция: Расписание */}
                            <div className="seat-selection__mini-route">
                                {/* Отправление */}
                                <div className="seat-selection__mini-time-block">
                                    <div className="seat-selection__mini-time">{train.forward.timeOut}</div>
                                    <div className="seat-selection__mini-station">{train.forward.cityOut}</div>
                                    <div className="seat-selection__mini-vokzal">{train.forward.stationOut}</div>
                                </div>
                                
                                <img src={arrowForward} alt="" className="seat-selection__mini-route-arrow" />
                                
                                {/* Прибытие */}
                                <div className="seat-selection__mini-time-block">
                                    <div className="seat-selection__mini-time">{train.forward.timeIn}</div>
                                    <div className="seat-selection__mini-station">{train.forward.cityIn}</div>
                                    <div className="seat-selection__mini-vokzal">{train.forward.stationIn}</div>
                                </div>
                            </div>

                            {/* Правая секция: Время в пути */}
                            <div className="seat-selection__mini-duration">
                                <img src={iconClockMini} alt="" className="seat-selection__mini-clock-icon" />
                                <div className="seat-selection__mini-duration-text">
                                    {/* Безопасное деление вашей строки "9 : 42" на часы и минуты через массив */}
                                    <span>{train.forward.duration.split(':')[0].trim()} часов</span>
                                    <span>{train.forward.duration.split(':')[1].trim()} минуты</span>
                                </div>
                            </div>
                        </div>

                        {/* 3. СЕКЦИЯ КОЛИЧЕСТВА БИЛЕТОВ */}
                        <div className="seat-selection__tickets-section">
                            <h3 className="seat-selection__tickets-title">Количество билетов</h3>
                            
                            <div className="seat-selection__tickets-grid">
                                {/* Карточка 1: Взрослых */}
                                <div className={`seat-selection__ticket-card ${adultCount > 0 ? 'seat-selection__ticket-card--filled' : ''}`}>
                                    <div className="seat-selection__ticket-field">
                                        <span>Взрослых — {adultCount}</span>
                                    </div>
                                    <p className="seat-selection__ticket-hint">
                                        Можно добавить еще<br />{maxAdults - adultCount} пассажиров
                                    </p>
                                </div>

                                {/* Карточка 2: Детских */}
                                <div className={`seat-selection__ticket-card ${childCount > 0 ? 'seat-selection__ticket-card--filled' : ''}`}>
                                    <div className="seat-selection__ticket-field">
                                        <span>Детских — {childCount}</span>
                                    </div>
                                    {childCount > 0 && (
                                        <p className="seat-selection__ticket-hint">
                                            Можно добавить еще {maxChildren - childCount} детей до 10 лет. Свое место в вагоне, как у взрослых, но дешевле в среднем на 50-65%
                                        </p>
                                    )}
                                </div>

                                {/* Карточка 3: Детских без места */}
                                <div className={`seat-selection__ticket-card ${babyCount > 0 ? 'seat-selection__ticket-card--filled' : ''}`}>
                                    <div className="seat-selection__ticket-field">
                                        <span>Детских «без места» — {babyCount}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ПУНКТИРНАЯ ЛИНИЯ-РАЗДЕЛИТЕЛЬ ДЛЯ ВТОРОГО БЛОКА */}
                        <div className="seat-selection__dashed-divider"></div>

                        {/* СЕКЦИЯ: ТИП ВАГОНА ДЛЯ ВТОРОГО БЛОКА */}
                        <div className="seat-selection__wagon-type-section">
                            <h3 className="seat-selection__wagon-type-title">Тип вагона</h3>
                            
                            <div className="seat-selection__wagon-type-list">
                                
                                {/* Тип 1: Сидячий */}
                                <button 
                                    type="button"
                                    className={`seat-selection__wagon-type-item ${activeWagonType === 'sedentary' ? 'seat-selection__wagon-type-item--active' : ''}`}
                                    onClick={() => setActiveWagonType('sedentary')}
                                >
                                    <img src={sidebarSedentary} alt="Сидячий" className="seat-selection__wagon-icon seat-selection__wagon-icon--sedentary" />
                                    <span className="seat-selection__wagon-text">Сидячий</span>
                                </button>

                                {/* Тип 2: Плацкарт */}
                                <button 
                                    type="button"
                                    className={`seat-selection__wagon-type-item ${activeWagonType === 'reserved' ? 'seat-selection__wagon-type-item--active' : ''}`}
                                    onClick={() => setActiveWagonType('reserved')}
                                >
                                    <img src={sidebarReserved} alt="Плацкарт" className="seat-selection__wagon-icon seat-selection__wagon-icon--reserved" />
                                    <span className="seat-selection__wagon-text">Плацкарт</span>
                                </button>

                                {/* Тип 3: Купе */}
                                <button 
                                    type="button"
                                    className={`seat-selection__wagon-type-item ${activeWagonType === 'coupe' ? 'seat-selection__wagon-type-item--active' : ''}`}
                                    onClick={() => setActiveWagonType('coupe')}
                                >
                                    <img src={sidebarCoupe} alt="Купе" className="seat-selection__wagon-icon seat-selection__wagon-icon--coupe" />
                                    <span className="seat-selection__wagon-text">Купе</span>
                                </button>

                                {/* Тип 4: Люкс */}
                                <button 
                                    type="button"
                                    className={`seat-selection__wagon-type-item ${activeWagonType === 'luxury' ? 'seat-selection__wagon-type-item--active' : ''}`}
                                    onClick={() => setActiveWagonType('luxury')}
                                >
                                    <img src={sidebarLuxury} alt="Люкс" className="seat-selection__wagon-icon seat-selection__wagon-icon--luxury" />
                                    <span className="seat-selection__wagon-text">Люкс</span>
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
                
                {/* КНОПКА ДАЛЕЕ ДЛЯ ПЕРЕХОДА К ПАССАЖИРАМ */}
                <Link to="/passengers" style={{ textDecoration: 'none' }}>
                    <button className="seat-selection__btn-next">Далее</button>
                </Link>
            </main>
        </div>
    );
}

export default SeatSelection;
