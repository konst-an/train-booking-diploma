import { useState } from 'react';
import LastTickets from './LastTickets';
import DatePicker, { registerLocale } from 'react-datepicker';
import { ru } from 'date-fns/locale/ru';
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

registerLocale('ru', ru);

export interface WagonFilters {
  coupe: boolean;
  platscart: boolean;
  sitting: boolean;
  lux: boolean;
  wifi: boolean;
  express: boolean;
}

// Расширяем интерфейс пропсов динамическими границами цен
interface FilterSidebarProps {
  dateStart: Date | null;
  setDateStart: (date: Date | null) => void;
  dateEnd: Date | null;
  setDateEnd: (date: Date | null) => void;
  wagonFilters: WagonFilters;
  onToggle: (name: keyof WagonFilters) => void;
  priceMin: number;
  setPriceMin: (val: number) => void;
  priceMax: number;
  setPriceMax: (val: number) => void;
  absoluteMinPrice: number; 
  absoluteMaxPrice: number; 
}

function FilterSidebar({ 
  dateStart, setDateStart, 
  dateEnd, setDateEnd, 
  wagonFilters, onToggle,
  priceMin, setPriceMin,
  priceMax, setPriceMax,
  absoluteMinPrice,  
  absoluteMaxPrice
}: FilterSidebarProps) {

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
                        selected={dateStart} // Изменили с sidebarDateStart
                        onChange={(date: Date | null) => setDateStart(date)} // Изменили с setSidebarDateStart
                        dateFormat="dd.MM.yyyy"
                        className="sidebar__datepicker-input"
                        onChangeRaw={(e) => { if (e) e.preventDefault(); }}
                        locale="ru"
                    />
                    <img src={formCalendarIcon} alt="" className="sidebar__input-icon" />
                </div>
                
                <h4 className="sidebar__title sidebar__title--return">Дата возвращения</h4>
                <div className="sidebar__input-wrapper">
                    <DatePicker
                        selected={dateEnd} // Изменили с sidebarDateEnd
                        onChange={(date: Date | null) => setDateEnd(date)} // Изменили с setSidebarDateEnd
                        dateFormat="dd.MM.yyyy"
                        className="sidebar__datepicker-input"
                        onChangeRaw={(e) => { if (e) e.preventDefault(); }}
                        locale="ru"
                    />
                    <img src={formCalendarIcon} alt="" className="sidebar__input-icon" />
                </div>
            </div>

            <div className="sidebar__section filter-options">

                {/* КУПЕ */}
                <div className="sidebar__option-item">
                    <img src={sidebarCoupe} alt="" className="sidebar__option-img" />
                    <span className="sidebar__option-label">Купе</span>
                    <label className="sidebar__switch">
                    <input 
                        type="checkbox" 
                        checked={wagonFilters.coupe} 
                        onChange={() => onToggle('coupe')} 
                    />
                    <span className="sidebar__slider"></span>
                    </label>
                </div>

                {/* ПЛАЦКАРТ */}
                <div className="sidebar__option-item">
                    <img src={sidebarReserved} alt="" className="sidebar__option-img" />
                    <span className="sidebar__option-label">Плацкарт</span>
                    <label className="sidebar__switch">
                    <input 
                        type="checkbox" 
                        checked={wagonFilters.platscart} 
                        onChange={() => onToggle('platscart')} 
                    />
                    <span className="sidebar__slider"></span>
                    </label>
                </div>

                {/* СИДЯЧИЙ */}
                <div className="sidebar__option-item">
                    <img src={sidebarSedentary} alt="" className="sidebar__option-img" />
                    <span className="sidebar__option-label">Сидячий</span>
                    <label className="sidebar__switch">
                        <input 
                            type="checkbox" 
                            checked={wagonFilters.sitting}
                            onChange={() => onToggle('sitting')}
                        />
                        <span className="sidebar__slider"></span>
                    </label>
                </div>

                {/* ЛЮКС */}
                <div className="sidebar__option-item">
                    <img src={sidebarLuxury} alt="" className="sidebar__option-img" />
                    <span className="sidebar__option-label">Люкс</span>
                    <label className="sidebar__switch">
                        <input 
                            type="checkbox" 
                            checked={wagonFilters.lux}
                            onChange={() => onToggle('lux')}
                        />
                        <span className="sidebar__slider"></span>
                    </label>
                </div>

                {/* WI-FI */}
                <div className="sidebar__option-item">
                    <img src={sidebarWifi} alt="" className="sidebar__option-img" />
                    <span className="sidebar__option-label">Wi-Fi</span>
                    <label className="sidebar__switch">
                        <input 
                            type="checkbox" 
                            checked={wagonFilters.wifi}
                            onChange={() => onToggle('wifi')}
                        />
                        <span className="sidebar__slider"></span>
                    </label>
                </div>

                {/* ЭКСПРЕСС */}
                <div className="sidebar__option-item">
                    <img src={sidebarExpress} alt="" className="sidebar__option-img" />
                    <span className="sidebar__option-label">Экспресс</span>
                    <label className="sidebar__switch">
                        <input 
                            type="checkbox" 
                            checked={wagonFilters.express}
                            onChange={() => onToggle('express')}
                        />
                        <span className="sidebar__slider"></span>
                    </label>
                </div>
            </div>

             {/* ==========================================
                БЛОК СТОИМОСТЬ
                ========================================== */}

            <div className="sidebar__section filter-price">
                <h4 className="sidebar__title">Стоимость</h4>
                <div className="sidebar__price-labels">
                    <span>от</span>
                    <span>до</span>
                </div>
                
                <div className="sidebar__slider-container" style={{ position: 'relative' }}>
                    {/* Базовый трек */}
                    <div className="sidebar__price-track">
                        <div 
                            className="sidebar__price-range"
                            style={{
                                left: `${((priceMin - absoluteMinPrice) / (absoluteMaxPrice - absoluteMinPrice)) * 100}%`,
                                width: `${((priceMax - priceMin) / (absoluteMaxPrice - absoluteMinPrice)) * 100}%`
                            }}
                        ></div>
                    </div>
                    
                    <div 
                        className="sidebar__price-handle sidebar__price-handle--min"
                        style={{ left: `${((priceMin - absoluteMinPrice) / (absoluteMaxPrice - absoluteMinPrice)) * 100}%` }}
                    >
                        <span className="sidebar__price-tooltip">{priceMin}</span>
                    </div>

                    <div 
                        className="sidebar__price-handle sidebar__price-handle--max"
                        style={{ left: `${((priceMax - absoluteMinPrice) / (absoluteMaxPrice - absoluteMinPrice)) * 100}%` }}
                    >
                        <span className="sidebar__price-tooltip">{priceMax}</span>
                    </div>

                    <input 
                        type="range"
                        min={absoluteMinPrice}
                        max={absoluteMaxPrice}
                        step={10}
                        value={priceMin}
                        className="sidebar__range-input"
                        onChange={(e) => {
                            const val = Math.min(parseInt(e.target.value), priceMax - 100);
                            setPriceMin(val);
                        }}
                    />

                    <input 
                        type="range"
                        min={absoluteMinPrice}
                        max={absoluteMaxPrice}
                        step={10}
                        value={priceMax}
                        className="sidebar__range-input"
                        onChange={(e) => {
                            const val = Math.max(parseInt(e.target.value), priceMin + 100);
                            setPriceMax(val);
                        }}
                    />
                </div>
                
                <div className="sidebar__price-values" style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: '10px' }}>
                    <span style={{ position: 'static' }}>{absoluteMinPrice}</span>
                    <span style={{ position: 'static', left: 'auto', transform: 'none' }}>
                        {Math.round((absoluteMinPrice + absoluteMaxPrice) / 2)}
                    </span>
                    <span style={{ position: 'static' }}>{absoluteMaxPrice}</span>
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
        <LastTickets />
        
    </div>   
  );
}

export default FilterSidebar;