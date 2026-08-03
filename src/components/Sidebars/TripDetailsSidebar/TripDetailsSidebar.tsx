import { useState } from 'react';

import './TripDetailsSidebar.css';

import sidebarArrowTo from '../../../assets/sidebar-arrow-to.svg';
import sidebarArrowFrom from '../../../assets/sidebar-arrow-from.svg';
import iconPassengerOrange from '../../../assets/icon-passenger-orange.svg';
import sidebarMinus from '../../../assets/sidebar-minus.svg';
import sidebarPlus from '../../../assets/sidebar-plus.svg';
import arrowForward from '../../../assets/arrow-forward.svg';
import sidebarArrowBackward from '../../../assets/arrow-backward.svg';

interface TripDetailsSidebarProps {
    selectedTrain: any;
    adultCount: number;
    childCount: number;
}

function TripDetailsSidebar({ 
    selectedTrain, 
    adultCount, 
    childCount
}: TripDetailsSidebarProps) {

    const [isToExpanded, setIsToExpanded] = useState<boolean>(true);
    const [isFromExpanded, setIsFromExpanded] = useState<boolean>(true);
    const [isPassengersExpanded, setIsPassengersExpanded] = useState<boolean>(true);

    const train = selectedTrain || {
        number: '116С',
        routeSummary: ['Москва', 'Адлер', 'Санкт-Петербург'],
        seats: [{ type: 'Купе', price: '3 530' }],
        forward: { timeOut: '00:10', cityOut: 'Москва', stationOut: 'Курский вокзал', timeIn: '09:52', cityIn: 'Санкт-Петербург', stationIn: 'Ладожский вокзал', duration: '09:42', date: '30.08.2018' },
        backward: null
    };

    const singleSeatPrice = parseInt(train.seats?.[0]?.price?.replace(/\s/g, '') || '3530', 10);
    
    const totalAdultPrice = adultCount * singleSeatPrice;
    const totalChildPrice = childCount * Math.round(singleSeatPrice * 0.5);
    const totalPriceSum = totalAdultPrice + totalChildPrice;

    return (
        <aside className="trip-details">
            
            {/* ГЛАВНЫЙ ЗАГОЛОВОК СЕКЦИИ */}
            <div className="trip-details__main-header">
                <h2 className="trip-details__main-title">Детали поездки</h2>
            </div>

            {/* БЛОК 1: ТУДА */}
            <section className="trip-details__section">
                
                {/* ШАПКА СЕКЦИИ "ТУДА" */}
                <div className="trip-details__section-header">
                    <div className="trip-details__section-title-group">
                        <img src={sidebarArrowTo} alt="" className="trip-details__direction-icon" />
                        <h3 className="trip-details__section-title">Туда</h3>
                        <span className="trip-details__section-date">30.08.2018</span>
                    </div>
                    
                    <button 
                        type="button" 
                        className="trip-details__btn-toggle" 
                        aria-label="Свернуть секцию Туда"
                        onClick={() => setIsToExpanded(!isToExpanded)}
                    >
                        <img 
                            src={isToExpanded ? sidebarMinus : sidebarPlus} 
                            alt={isToExpanded ? "Свернуть" : "Развернуть"} 
                            className="trip-details__toggle-img" 
                        />
                    </button>
                </div>

                {isToExpanded && train.forward && (
                    <div className="trip-details__section-body">
                        <div className="trip-details__info-row">
                            <span className="trip-details__info-label">№ Поезда</span>
                            <span className="trip-details__info-value trip-details__info-value--bold">
                                {train.number}
                            </span>
                        </div>
                        <div className="trip-details__info-row">
                            <span className="trip-details__info-label">Название</span>
                            <span className="trip-details__info-value trip-details__info-value--right">
                                {train.routeSummary?.[0]}<br />{train.routeSummary?.[train.routeSummary.length - 1]}
                            </span>
                        </div>

                        {/* СЕТКА РАСПИСАНИЯ И МАРШРУТА */}
                        <div className="trip-details__route-schedule">
                            
                            {/* Левая колонка — Отправление */}
                            <div className="trip-details__time-block">
                                <div className="trip-details__time">{train.forward.timeOut}</div>
                                <div className="trip-details__date">{train.forward.date || '30.08.2018'}</div>
                                <div className="trip-details__station">{train.forward.cityOut}</div>
                                <div className="trip-details__vokzal">
                                    {train.forward.stationOut.replace(' вокзал', '')}<br />вокзал
                                </div>
                            </div>

                            {/* Центр — Стрелка и время в пути */}
                            <div className="trip-details__arrow-block">
                                <span className="trip-details__duration-time">
                                    {train.forward.duration.split(':').join(' : ')}
                                </span>
                                <img src={arrowForward} alt="" className="trip-details__route-arrow" />
                            </div>

                            {/* Правая колонка — Прибытие (выравнивание вправо) */}
                            <div className="trip-details__time-block trip-details__time-block--right">
                                <div className="trip-details__time">{train.forward.timeIn}</div>
                                <div className="trip-details__date">
                                    {train.forward.date || '31.08.2018'}
                                </div>
                                <div className="trip-details__station">{train.forward.cityIn}</div>
                                <div className="trip-details__vokzal">
                                    {train.forward.stationIn.replace(' вокзал', '')}<br />вокзал
                                </div>
                            </div>

                        </div>
                    </div>
                )}
            </section>

            {/* БЛОК 2: ОБРАТНО */}
            <section className="trip-details__section">
        
                <div className="trip-details__section-header">
                    <div className="trip-details__section-title-group">
                        <img src={sidebarArrowFrom} alt="" className="trip-details__direction-icon" />
                        <h3 className="trip-details__section-title">Обратно</h3>
                        <span className="trip-details__section-date">09.09.2018</span>
                    </div>
                
                    <button 
                        type="button" 
                        className="trip-details__btn-toggle" 
                        aria-label="Свернуть секцию Обратно"
                        onClick={() => setIsFromExpanded(!isFromExpanded)}
                    >
                        <img 
                            src={isFromExpanded ? sidebarMinus : sidebarPlus} 
                            alt={isFromExpanded ? "Свернуть" : "Развернуть"} 
                            className="trip-details__toggle-img" 
                        />
                    </button>
                </div>

                 {train.backward && isFromExpanded && (
                    <div className="trip-details__section-body">
                        <div className="trip-details__info-row">
                            <span className="trip-details__info-label">№ Поезда</span>
                            <span className="trip-details__info-value trip-details__info-value--bold">
                                {train.backward.number || train.number}
                            </span>
                        </div>
                        <div className="trip-details__info-row">
                            <span className="trip-details__info-label">Название</span>
                            <span className="trip-details__info-value trip-details__info-value--right">
                                {train.backward.routeSummary?.[0] || train.routeSummary?.[train.routeSummary.length - 1]}<br />
                                {train.backward.routeSummary?.[train.backward.routeSummary.length - 1] || train.routeSummary?.[0]}
                            </span>
                        </div>

                        <div className="trip-details__route-schedule">
                            
                            {/* Левая колонка — Отправление */}
                            <div className="trip-details__time-block">
                                <div className="trip-details__time">{train.backward.timeOut}</div>
                                <div className="trip-details__date">{train.backward.date || '09.09.2018'}</div>
                                <div className="trip-details__station">{train.backward.cityOut}</div>
                                <div className="trip-details__vokzal">
                                    {train.backward.stationOut?.replace(' вокзал', '') || 'Курский'}<br />вокзал
                                </div>
                            </div>

                            {/* Центр — Обратная стрелочка и длительность */}
                            <div className="trip-details__arrow-block">
                                <span className="trip-details__duration-time">
                                    {train.backward.duration?.split(':').join(' : ') || '9 : 42'}
                                </span>
                                <img src={sidebarArrowBackward} alt="" className="trip-details__route-arrow" />
                            </div>

                            {/* Правая колонка — Прибытие */}
                            <div className="trip-details__time-block trip-details__time-block--right">
                                <div className="trip-details__time">{train.backward.timeIn}</div>
                                <div className="trip-details__date">{train.backward.dateArrival || '08.09.2018'}</div>
                                <div className="trip-details__station">{train.backward.cityIn}</div>
                                <div className="trip-details__vokzal">
                                    {train.backward.stationIn?.replace(' вокзал', '') || 'Ладожский'}<br />вокзал
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </section>
            

            {/* БЛОК 3: ПАССАЖИРЫ */}
            <section className="trip-details__section">
                
                <div className="trip-details__section-header">
                    <div className="trip-details__section-title-group">
                        <img src={iconPassengerOrange} alt="" className="trip-details__passengers-img" />
                        <h3 className="trip-details__section-title">Пассажиры</h3>
                    </div>
                    
                    <button 
                        type="button" 
                        className="trip-details__btn-toggle" 
                        aria-label="Свернуть секцию Пассажиры"
                        onClick={() => setIsPassengersExpanded(!isPassengersExpanded)}
                    >
                        <img 
                            src={isPassengersExpanded ? sidebarMinus : sidebarPlus} 
                            alt={isPassengersExpanded ? "Свернуть" : "Развернуть"} 
                            className="trip-details__toggle-img" 
                        />
                    </button>
                </div>

                {isPassengersExpanded && (
                    <div className="trip-details__section-body trip-details__section-body--passengers">
                     
                        <div className="trip-details__passenger-row">
                            <span className="trip-details__passenger-type">
                                {adultCount} {adultCount === 1 ? 'Взрослый' : 'Взрослых'}
                            </span>
                            <div className="trip-details__passenger-price">
                                <span className="trip-details__price-num">
                                    {totalAdultPrice.toLocaleString('ru-RU')}
                                </span>
                                <span className="trip-details__currency">₽</span>
                            </div>
                        </div>
                        
                        {childCount > 0 && (
                            <div className="trip-details__passenger-row">
                                <span className="trip-details__passenger-type">
                                    {childCount} {childCount === 1 ? 'Ребенок' : childCount < 5 ? 'Ребенка' : 'Детей'}
                                </span>
                                <div className="trip-details__passenger-price">
                                    <span className="trip-details__price-num">
                                        {totalChildPrice.toLocaleString('ru-RU')}
                                    </span>
                                    <span className="trip-details__currency">₽</span>
                                </div>
                            </div>
                        )}

                    </div>
                )}
            </section>
            
            {/* ИТОГОВАЯ СТРОКА СТОИМОСТИ (ФУТЕР САЙДБАРА) */}
            <footer className="trip-details__total-footer">
                <span className="trip-details__total-label">Итог</span>
                <div className="trip-details__total-price-group">
                    
                    <span className="trip-details__total-price-number">
                        {totalPriceSum.toLocaleString('ru-RU')}
                    </span>
                    <span className="trip-details__total-currency"> ₽</span>
                </div>
            </footer>
        </aside>
    );
}

export default TripDetailsSidebar;

