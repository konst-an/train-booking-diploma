import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './FilterSidebar.css';

import formCalendarIcon from '../../../assets/form-calendar-icon.svg'; 
import sidebarCoupe from '../../../assets/sidebar-coupe.svg';
import sidebarReserved from '../../../assets/sidebar-reserved.svg';
import sidebarSedentary from '../../../assets/sidebar-sedentary.svg';
import sidebarLuxury from '../../../assets/sidebar-luxury.svg';
import sidebarWifi from '../../../assets/sidebar-wifi.svg';
import sidebarExpress from '../../../assets/sidebar-express.svg';
import sidebarArrowTo from '../../../assets/sidebar-arrow-to.svg';
import sidebarArrowFrom from '../../../assets/sidebar-arrow-from.svg';
import sidebarPlus from '../../../assets/sidebar-plus.svg';
import sidebarMinus from '../../../assets/sidebar-minus.svg';

import ticketFeatures from '../../../assets/ticket-features.svg'; 

function FilterSidebar() {
  const [sidebarDateStart, setSidebarDateStart] = useState<Date | null>(new Date('2018-08-30'));
  const [sidebarDateEnd, setSidebarDateEnd] = useState<Date | null>(new Date('2018-09-09'));

  const [isToExpanded, setIsToExpanded] = useState<boolean>(true);
  const [isFromExpanded, setIsFromExpanded] = useState<boolean>(true);

  return (
     <div className="sidebar-left">
        {/* 1. ОСНОВНОЙ БЛОК ФИЛЬТРОВ */}
        <aside className="sidebar">

            <div className="sidebar__section filter-date">
                <h4 className="sidebar__title">Дата поездки</h4>
                <div className="sidebar__input-wrapper">
                    <DatePicker
                        selected={sidebarDateStart}
                        onChange={(date: Date | null) => setSidebarDateStart(date)}
                        dateFormat="dd.MM.yyyy"
                        className="sidebar__datepicker-input"
                        onChangeRaw={(e) => { if (e) e.preventDefault(); }}
                        locale="ru"/>
                    <img src={formCalendarIcon} alt="" className="sidebar__input-icon" />
                </div>
                
                <h4 className="sidebar__title sidebar__title--return">Дата возвращения</h4>
                <div className="sidebar__input-wrapper">
                    <DatePicker
                        selected={sidebarDateEnd}
                        onChange={(date: Date | null) => setSidebarDateEnd(date)}
                        dateFormat="dd.MM.yyyy"
                        className="sidebar__datepicker-input"
                        onChangeRaw={(e) => { if (e) e.preventDefault(); }}
                        locale="ru"/>
                    <img src={formCalendarIcon} alt="" className="sidebar__input-icon" />
                </div>
            </div>

            <div className="sidebar__section filter-options">
                <div className="sidebar__option-item">
                    <img src={sidebarCoupe} alt="" className="sidebar__option-img" />
                    <span className="sidebar__option-label">Купе</span>
                    <label className="sidebar__switch">
                        <input type="checkbox" defaultChecked />
                        <span className="sidebar__slider"></span>
                    </label>
                </div>
                <div className="sidebar__option-item">
                    <img src={sidebarReserved} alt="" className="sidebar__option-img" />
                    <span className="sidebar__option-label">Плацкарт</span>
                    <label className="sidebar__switch">
                        <input type="checkbox" />
                        <span className="sidebar__slider"></span>
                    </label>
                </div>
                    <div className="sidebar__option-item">
                    <img src={sidebarSedentary} alt="" className="sidebar__option-img" />
                    <span className="sidebar__option-label">Сидячий</span>
                    <label className="sidebar__switch">
                        <input type="checkbox" />
                        <span className="sidebar__slider"></span>
                    </label>
                </div>
                <div className="sidebar__option-item">
                    <img src={sidebarLuxury} alt="" className="sidebar__option-img" />
                    <span className="sidebar__option-label">Люкс</span>
                    <label className="sidebar__switch">
                        <input type="checkbox" />
                        <span className="sidebar__slider"></span>
                    </label>
                </div>
                <div className="sidebar__option-item">
                    <img src={sidebarWifi} alt="" className="sidebar__option-img" />
                    <span className="sidebar__option-label">Wi-Fi</span>
                    <label className="sidebar__switch">
                        <input type="checkbox" defaultChecked />
                        <span className="sidebar__slider"></span>
                    </label>
                </div>
                    <div className="sidebar__option-item">
                    <img src={sidebarExpress} alt="" className="sidebar__option-img" />
                    <span className="sidebar__option-label">Экспресс</span>
                    <label className="sidebar__switch">
                        <input type="checkbox" />
                        <span className="sidebar__slider"></span>
                    </label>
                </div>
            </div>

            <div className="sidebar__section filter-price">
                <h4 className="sidebar__title">Стоимость</h4>
                <div className="sidebar__price-labels">
                    <span>от</span>
                    <span>до</span>
                </div>
                <div className="sidebar__slider-container">
                    <div className="sidebar__price-track">
                        <div className="sidebar__price-range"></div>
                    </div>
                    <div className="sidebar__price-handle sidebar__price-handle--min"></div>
                    <div className="sidebar__price-handle sidebar__price-handle--max"></div>
                </div>
                <div className="sidebar__price-values">
                    <span>1920</span>
                    <span>4500</span>
                    <span>7000</span>
                </div>
            </div>


            {/* ==========================================
                БЛОК НАПРАВЛЕНИЯ: ТУДА
                ========================================== */}
        
            <div className="sidebar__section filter-direction">
                <div className="sidebar__direction-header">
                    <img src={sidebarArrowTo} alt="" className="sidebar__direction-arrow" />
                    <span className="sidebar__direction-title">Туда</span>
                    
                    {/* Кнопка меняет состояние при клике */}
                    <button 
                        type="button" 
                        className="sidebar__direction-toggle"
                        onClick={() => setIsToExpanded(!isToExpanded)}>
            
                        <img 
                            src={isToExpanded ? sidebarMinus : sidebarPlus} 
                            alt={isToExpanded ? "Свернуть" : "Развернуть"} 
                        />
                    </button>
                </div>

                {isToExpanded && (
                    <div className="sidebar__direction-content">
                        {/* 1. Время отбытия */}
                        <div className="sidebar__time-block">
                            <h4 className="sidebar__time-title">Время отбытия</h4>
                            <div className="sidebar__time-slider-container">
                                <div className="sidebar__time-slider">
                                    <div className="sidebar__time-track">
                                        <div className="sidebar__time-range" style={{ left: '0%', width: '46%' }}></div>
                                        <div className="sidebar__time-handle" style={{ left: '0%' }}></div>
                                        <div className="sidebar__time-handle" style={{ left: '46%' }}></div>
                                    </div>
                                </div>
                                <div className="sidebar__time-labels">
                                    <span className="sidebar__time-val sidebar__time-val--current" style={{ left: '0%' }}>0:00</span>
                                    <span className="sidebar__time-val sidebar__time-val--current" style={{ left: '46%' }}>11:00</span>
                                    <span className="sidebar__time-val sidebar__time-val--end">24:00</span>
                                </div>
                            </div>
                        </div>

                        {/* 2. Время прибытия */}
                        <div className="sidebar__time-block">
                            <h4 className="sidebar__time-title sidebar__time-title--arrival">Время прибытия</h4>
                            <div className="sidebar__time-slider-container">
                                <div className="sidebar__time-slider">
                                    <div className="sidebar__time-track">
                                        <div className="sidebar__time-range" style={{ left: '20%', width: '26%' }}></div>
                                        <div className="sidebar__time-handle" style={{ left: '20%' }}></div>
                                        <div className="sidebar__time-handle" style={{ left: '46%' }}></div>
                                    </div>
                                </div>
                                <div className="sidebar__time-labels">
                                    <span className="sidebar__time-val sidebar__time-val--current" style={{ left: '20%' }}>5:00</span>
                                    <span className="sidebar__time-val sidebar__time-val--current" style={{ left: '46%' }}>11:00</span>
                                    <span className="sidebar__time-val sidebar__time-val--end">24:00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            
            {/* ==========================================================================
                БЛОК НАПРАВЛЕНИЯ: ОБРАТНО
            ========================================================================== */}

            <div className="sidebar__section filter-direction">
                <div className="sidebar__direction-header">
                    <img src={sidebarArrowFrom} alt="" className="sidebar__direction-arrow" />
                    <span className="sidebar__direction-title">Обратно</span>
                    
                    <button 
                        type="button" 
                        className="sidebar__direction-toggle"
                        onClick={() => setIsFromExpanded(!isFromExpanded)}>
                    
                        <img 
                            src={isFromExpanded ? sidebarMinus : sidebarPlus} 
                            alt={isFromExpanded ? "Свернуть" : "Развернуть"} 
                        />
                    </button>
                </div>

                {isFromExpanded && (
                    <div className="sidebar__direction-content">
                        {/* 1. Время отбытия */}
                        <div className="sidebar__time-block">
                            <h4 className="sidebar__time-title">Время отбытия</h4>
                            <div className="sidebar__time-slider-container">
                                <div className="sidebar__time-slider">
                                    <div className="sidebar__time-track">
                                        <div className="sidebar__time-range" style={{ left: '0%', width: '46%' }}></div>
                                        <div className="sidebar__time-handle" style={{ left: '0%' }}></div>
                                        <div className="sidebar__time-handle" style={{ left: '46%' }}></div>
                                    </div>
                                </div>
                                <div className="sidebar__time-labels">
                                    <span className="sidebar__time-val sidebar__time-val--current" style={{ left: '0%' }}>0:00</span>
                                    <span className="sidebar__time-val sidebar__time-val--current" style={{ left: '46%' }}>11:00</span>
                                    <span className="sidebar__time-val sidebar__time-val--end">24:00</span>
                                </div>
                            </div>
                        </div>

                        {/* 2. Время прибытия */}
                        <div className="sidebar__time-block">
                            <h4 className="sidebar__time-title sidebar__time-title--arrival">Время прибытия</h4>
                            <div className="sidebar__time-slider-container">
                                <div className="sidebar__time-slider">
                                    <div className="sidebar__time-track">
                                        <div className="sidebar__time-range" style={{ left: '20%', width: '26%' }}></div>
                                        <div className="sidebar__time-handle" style={{ left: '20%' }}></div>
                                        <div className="sidebar__time-handle" style={{ left: '46%' }}></div>
                                    </div>
                                </div>
                                <div className="sidebar__time-labels">
                                    <span className="sidebar__time-val sidebar__time-val--current" style={{ left: '20%' }}>5:00</span>
                                    <span className="sidebar__time-val sidebar__time-val--current" style={{ left: '46%' }}>11:00</span>
                                    <span className="sidebar__time-val sidebar__time-val--end">24:00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </aside>

        {/* 2. БЛОК ПОСЛЕДНИХ БИЛЕТОВ */}
        <div className="sidebar-left__last-tickets last-tickets">
            <h3 className="last-tickets__main-title">Последние билеты</h3>
            <div className="last-tickets__list">
                {/* Карточка 1: Санкт-Петербург — Самара */}
                <div className="last-tickets__card ticket-card">
                    <div className="ticket-card__row">
                        <div className="ticket-card__city-block">
                            <span className="ticket-card__city-name">Санкт-Петербург</span>
                            <span className="ticket-card__station">Курский  <br /> вокзал</span>
                        </div>
                        <div className="ticket-card__city-block ticket-card__city-block--right">
                            <span className="ticket-card__city-name">Самара</span>
                            <span className="ticket-card__station">Московский  <br /> вокзал</span>
                        </div>
                    </div>
                    <div className="ticket-card__footer">
                        <img src={ticketFeatures} alt="" className="ticket-card__features" />
                        <div className="ticket-card__price">
                            <span className="ticket-card__price-from">от</span>
                            <span className="ticket-card__price-value">2 500</span>
                            <span className="ticket-card__price-currency">₽</span>
                        </div>
                    </div>
                </div>

                    {/* Карточка 2: Москва — Казань */}
                <div className="last-tickets__card ticket-card">
                    <div className="ticket-card__row">
                        <div className="ticket-card__city-block">
                            <span className="ticket-card__city-name">Москва</span>
                            <span className="ticket-card__station">Курский <br /> вокзал</span>
                        </div>
                        <div className="ticket-card__city-block ticket-card__city-block--right">
                            <span className="ticket-card__city-name">Казань</span>
                            <span className="ticket-card__station">Московский  <br /> вокзал</span>
                        </div>
                    </div>
                    <div className="ticket-card__footer">
                        <img src={ticketFeatures} alt="" className="ticket-card__features" />
                        <div className="ticket-card__price">
                            <span className="ticket-card__price-from">от</span>
                            <span className="ticket-card__price-value">3 500</span>
                            <span className="ticket-card__price-currency">₽</span>
                        </div>
                    </div>
                </div>

                {/* Карточка 3: Казань — Нижний Новгород */}
                <div className="last-tickets__card ticket-card">
                    <div className="ticket-card__row">
                        <div className="ticket-card__city-block">
                            <span className="ticket-card__city-name">Казань</span>
                            <span className="ticket-card__station">Курский  <br /> вокзал</span>
                        </div>
                        <div className="ticket-card__city-block ticket-card__city-block--right">
                            <span className="ticket-card__city-name">Нижний Новгород</span>
                            <span className="ticket-card__station">Московский  <br /> вокзал</span>
                        </div>
                    </div>
                    <div className="ticket-card__footer">
                        <img src={ticketFeatures} alt="" className="ticket-card__features" />
                        <div className="ticket-card__price">
                            <span className="ticket-card__price-from">от</span>
                            <span className="ticket-card__price-value">3 800</span>
                            <span className="ticket-card__price-currency">₽</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>   
  );
}

export default FilterSidebar;