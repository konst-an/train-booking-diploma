import React from 'react';
import { Link } from 'react-router-dom';
import FilterSidebar from '../Sidebars/FilterSidebar/FilterSidebar'; // Подключаем общий сайдбар
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

function SeatSelection() {
    return (
        <div className="seat-selection__container">
            
            {/* ЛЕВАЯ КОЛОНКА: (Фильтры + Последние билеты) */}
            <FilterSidebar />

            {/* ПРАВАЯ КОЛОНКА: Основная информация выбора мест */}
            <main className="seat-selection__main">
                <h2 className="seat-selection__title">Выбор мест</h2>
                <div className="seat-selection__content">

                    {/* ПЕРВЫЙ КОНТЕЙНЕР: АКТИВНЫЙ/РАЗВЕРНУТЫЙ БЛОК ВЫБОРА МЕСТ */}
                    <div className="seat-selection__train-block seat-selection__train-block--active">
                        {/* БЛОК НАВИГАЦИИ (КНОПКА НАЗАД И СТРЕЛКА) */}
                        <div className="seat-selection__navigation">
                            <img src={arrowBackOrange} alt="" className="seat-selection__back-arrow-img" />
                            <button className="seat-selection__btn-back">Выбрать другой поезд</button>
                        </div>

                        {/* МИНИ-КАРТОЧКА ВЫБРАННОГО ПОЕЗДА */}
                        <div className="seat-selection__train-mini-card">
                            {/* ЛЕВАЯ СЕКЦИЯ: Номер поезда и маршрут */}
                            <div className="seat-selection__mini-info">
                                <img src={iconTrainMini} alt="" className="seat-selection__mini-train-icon" />
                                <div className="seat-selection__mini-text-block">
                                    <div className="seat-selection__mini-train-num">
                                        <span>116С</span>
                                    </div>
                                    <div className="seat-selection__mini-cities">
                                        <span>Адлер →</span>
                                        <span>Москва →</span>
                                        <span className="seat-selection__mini-city-last">Санкт-Петербург</span>
                                    </div>
                                </div>
                            </div>

                            {/* СРЕДНЯЯ СЕКЦИЯ: Расписание (от 240px до 720px) */}
                            <div className="seat-selection__mini-route">
                                {/* Отправление */}
                                <div className="seat-selection__mini-time-block">
                                    <div className="seat-selection__mini-time">00:10</div>
                                    <div className="seat-selection__mini-station">Москва</div>
                                    <div className="seat-selection__mini-vokzal">Курский вокзал</div>
                                </div>

                                {/* Стрелочка направления */}
                                <img src={arrowForward} alt="" className="seat-selection__mini-route-arrow" />

                                {/* Прибытие */}
                                <div className="seat-selection__mini-time-block">
                                    <div className="seat-selection__mini-time">09:52</div>
                                    <div className="seat-selection__mini-station">Санкт-Петербург</div>
                                    <div className="seat-selection__mini-vokzal">Ладожский вокзал</div>
                                </div>
                            </div>

                            {/* ПРАВАЯ СЕКЦИЯ: Время в пути (после 720px) */}
                            <div className="seat-selection__mini-duration">
                                <img src={iconClockMini} alt="" className="seat-selection__mini-clock-icon" />
                                <div className="seat-selection__mini-duration-text">
                                    <span>9 часов</span>
                                    <span>42 минуты</span>
                                </div>
                            </div>
                        </div>

                        {/* СЕКЦИЯ КОЛИЧЕСТВА БИЛЕТОВ */}
                        <div className="seat-selection__tickets-section">
                            <h3 className="seat-selection__tickets-title">Количество билетов</h3>
                            
                            <div className="seat-selection__tickets-grid">
                                {/* Карточка 1: Взрослых */}
                                <div className="seat-selection__ticket-card seat-selection__ticket-card--filled">
                                    <div className="seat-selection__ticket-field">
                                        <span>Взрослых — 2</span>
                                    </div>
                                    <p className="seat-selection__ticket-hint">
                                        Можно добавить еще<br />3 пассажиров
                                    </p>
                                </div>

                                {/* Карточка 2: Детских */}
                                <div className="seat-selection__ticket-card seat-selection__ticket-card--active">
                                    <div className="seat-selection__ticket-field">
                                        <span>Детских — 1</span>
                                    </div>
                                    <p className="seat-selection__ticket-hint">
                                        Можно добавить еще 3 детей до 10 лет. Свое место в вагоне, как у взрослых, но дешевле в среднем на 50-65%
                                    </p>
                                </div>

                                {/* Карточка 3: Детских без места */}
                                <div className="seat-selection__ticket-card">
                                    <div className="seat-selection__ticket-field">
                                        <span>Детских «без места» — 0</span>
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
                                <button className="seat-selection__wagon-type-item">
                                    <img src={sidebarSedentary} alt="Сидячий" className="seat-selection__wagon-icon seat-selection__wagon-icon--sedentary" />
                                    <span className="seat-selection__wagon-text">Сидячий</span>
                                </button>

                                {/* Плацкарт */}
                                <button className="seat-selection__wagon-type-item">
                                    <img src={sidebarReserved} alt="Плацкарт" className="seat-selection__wagon-icon seat-selection__wagon-icon--reserved" />
                                    <span className="seat-selection__wagon-text">Плацкарт</span>
                                </button>

                                {/* Купе (Активный вариант) */}
                                <button className="seat-selection__wagon-type-item seat-selection__wagon-type-item--active">
                                    <img src={sidebarCoupe} alt="Купе" className="seat-selection__wagon-icon seat-selection__wagon-icon--coupe" />
                                    <span className="seat-selection__wagon-text">Купе</span>
                                </button>

                                {/* Люкс */}
                                <button className="seat-selection__wagon-type-item">
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
                                    <button className="seat-selection__wagon-btn seat-selection__wagon-btn--active">07</button>
                                    <button className="seat-selection__wagon-btn">09</button>
                                </div>
                            </div>
                            <span className="seat-selection__wagons-direction-hint">
                                Нумерация вагонов начинается с головы поезда
                            </span>
                        </div>

                        {/* КАРТОЧКА ДЕТАЛЕЙ ВАГОНА */}
                        <div className="seat-selection__wagon-card">
                            
                            {/* ЛЕВАЯ ЧАСТЬ: Номер вагона */}
                            <div className="seat-selection__wagon-badge">
                                <div className="seat-selection__wagon-badge-num">07</div>
                                <div className="seat-selection__wagon-badge-text">вагон</div>
                            </div>

                            {/* ПРАВАЯ ЧАСТЬ: Ряд из 3-х равномерных колонок */}
                            <div className="seat-selection__wagon-info-content">
                                
                                {/* КОЛОНКА 1: МЕСТА */}
                                <div className="seat-selection__wagon-col-seats">
                                    <div className="seat-selection__wagon-col-title">
                                        Места <span className="seat-selection__total-seats-count">11</span>
                                    </div>
                                    <div className="seat-selection__wagon-col-item">
                                        <span className="seat-selection__seat-name">Верхние</span>
                                        <span className="seat-selection__seat-qty">3</span>
                                    </div>
                                    <div className="seat-selection__wagon-col-item">
                                        <span className="seat-selection__seat-name">Нижние</span>
                                        <span className="seat-selection__seat-qty">8</span>
                                    </div>
                                </div>

                                {/* КОЛОНКА 2: СТОИМОСТЬ */}
                                <div className="seat-selection__wagon-col-prices">
                                    <div className="seat-selection__wagon-col-title">Стоимость</div>
                                    <div className="seat-selection__wagon-col-item">
                                        <span className="seat-selection__price-num">2 920</span>
                                        <span className="seat-selection__price-rub">₽</span>
                                    </div>
                                    <div className="seat-selection__wagon-col-item">
                                        <span className="seat-selection__price-num">3 530</span>
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
                                            <button className="seat-selection__service-btn" aria-label="Кондиционер">
                                                <img src={iconServiceAir} alt="" className="seat-selection__service-img" />
                                            </button>
                                            <div className="seat-selection__service-tooltip">кондиционер</div>
                                        </div>

                                        {/* Иконка: Wi-Fi */}
                                        <div className="seat-selection__service-item">
                                            <button className="seat-selection__service-btn" aria-label="Wi-Fi">
                                                <img src={iconWifi} alt="" className="seat-selection__service-img" />
                                            </button>
                                            <div className="seat-selection__service-tooltip">wi-fi</div>
                                        </div>

                                        {/* Иконка: Белье (Активная оранжевая) */}
                                        <div className="seat-selection__service-item">
                                            <button className="seat-selection__service-btn seat-selection__service-btn--active" aria-label="Постельное белье">
                                                <img src={iconServiceLinen} alt="" className="seat-selection__service-img" />
                                            </button>
                                            <div className="seat-selection__service-tooltip">постельное белье</div>
                                        </div>

                                        {/* Иконка: Питание (Активная оранжевая) */}
                                        <div className="seat-selection__service-item">
                                            <button className="seat-selection__service-btn seat-selection__service-btn--active" aria-label="Питание">
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
                                    11 человек выбирают места в этом поезде
                                </span>
                            </div>
                        </div>
                    </div>  

                    {/* ВТОРОЙ КОНТЕЙНЕР: СВЕРНУТЫЙ БЛОК ВЫБОРА МЕСТ */}
                    <div className="seat-selection__train-block seat-selection__train-block--collapsed">
                        {/* БЛОК НАВИГАЦИИ (ДОБАВИЛИ КЛАСС МОДИФИКАТОРА) */}
                        <div className="seat-selection__navigation seat-selection__navigation--collapsed">
                            <img src={arrowBackOrange} alt="" className="seat-selection__back-arrow-img" />
                            <button className="seat-selection__btn-back">Выбрать другой поезд</button>
                        </div>

                        {/* 2. МИНИ-КАРТОЧКА ВЫБРАННОГО ПОЕЗДА (Серая полоса) */}
                        <div className="seat-selection__train-mini-card">
                            {/* Левая секция: Номер поезда и маршрут */}
                            <div className="seat-selection__mini-info">
                                <img src={iconTrainMini} alt="" className="seat-selection__mini-train-icon" />
                                <div className="seat-selection__mini-text-block">
                                    <div className="seat-selection__mini-train-num">
                                        <span>116С</span>
                                    </div>
                                    <div className="seat-selection__mini-cities">
                                        <span>Адлер →</span>
                                        <span>Москва →</span>
                                        <span className="seat-selection__mini-city-last">Санкт-Петербург</span>
                                    </div>
                                </div>
                            </div>

                            {/* Средняя секция: Расписание */}
                            <div className="seat-selection__mini-route">
                                <div className="seat-selection__mini-time-block">
                                    <div className="seat-selection__mini-time">00:10</div>
                                    <div className="seat-selection__mini-station">Москва</div>
                                    <div className="seat-selection__mini-vokzal">Курский вокзал</div>
                                </div>
                                <img src={arrowForward} alt="" className="seat-selection__mini-route-arrow" />
                                <div className="seat-selection__mini-time-block">
                                    <div className="seat-selection__mini-time">09:52</div>
                                    <div className="seat-selection__mini-station">Санкт-Петербург</div>
                                    <div className="seat-selection__mini-vokzal">Ладожский вокзал</div>
                                </div>
                            </div>

                            {/* Правая секция: Время в пути */}
                            <div className="seat-selection__mini-duration">
                                <img src={iconClockMini} alt="" className="seat-selection__mini-clock-icon" />
                                <div className="seat-selection__mini-duration-text">
                                    <span>9 часов</span>
                                    <span>42 минуты</span>
                                </div>
                            </div>
                        </div>

                        {/* 3. СЕКЦИЯ КОЛИЧЕСТВА БИЛЕТОВ */}
                        <div className="seat-selection__tickets-section">
                            <h3 className="seat-selection__tickets-title">Количество билетов</h3>
                            
                            <div className="seat-selection__tickets-grid">
                                {/* Карточка 1: Взрослых */}
                                <div className="seat-selection__ticket-card seat-selection__ticket-card--filled">
                                    <div className="seat-selection__ticket-field">
                                        <span>Взрослых — 2</span>
                                    </div>
                                    <p className="seat-selection__ticket-hint">
                                        Можно добавить еще<br />3 пассажиров
                                    </p>
                                </div>

                                {/* Карточка 2: Детских (В свернутом блоке по умолчанию 0) */}
                                <div className="seat-selection__ticket-card">
                                    <div className="seat-selection__ticket-field">
                                        <span>Детских — 0</span>
                                    </div>
                                    <p className="seat-selection__ticket-hint">
                                        
                                    </p>
                                </div>

                                {/* Карточка 3: Детских без места */}
                                <div className="seat-selection__ticket-card">
                                    <div className="seat-selection__ticket-field">
                                        <span>Детских «без места» — 0</span>
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
                                <button className="seat-selection__wagon-type-item">
                                    <img src={sidebarSedentary} alt="Сидячий" className="seat-selection__wagon-icon seat-selection__wagon-icon--sedentary" />
                                    <span className="seat-selection__wagon-text">Сидячий</span>
                                </button>

                                {/* Тип 2: Плацкарт */}
                                <button className="seat-selection__wagon-type-item">
                                    <img src={sidebarReserved} alt="Плацкарт" className="seat-selection__wagon-icon seat-selection__wagon-icon--reserved" />
                                    <span className="seat-selection__wagon-text">Плацкарт</span>
                                </button>

                                {/* Тип 3: Купе (В этом блоке без класса --active, так как вагон еще не выбран) */}
                                <button className="seat-selection__wagon-type-item">
                                    <img src={sidebarCoupe} alt="Купе" className="seat-selection__wagon-icon seat-selection__wagon-icon--coupe" />
                                    <span className="seat-selection__wagon-text">Купе</span>
                                </button>

                                {/* Тип 4: Люкс */}
                                <button className="seat-selection__wagon-type-item">
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
