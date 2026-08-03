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
  
  // Время "Туда"
  timeDepartureMin: number;
  setTimeDepartureMin: (val: number) => void;
  timeDepartureMax: number;
  setTimeDepartureMax: (val: number) => void;
  timeArrivalMin: number;
  setTimeArrivalMin: (val: number) => void;
  timeArrivalMax: number;
  setTimeArrivalMax: (val: number) => void;

  // Время "Обратно"
  timeReturnDepartureMin: number;
  setTimeReturnDepartureMin: (val: number) => void;
  timeReturnDepartureMax: number;
  setTimeReturnDepartureMax: (val: number) => void;
  timeReturnArrivalMin: number;
  setTimeReturnArrivalMin: (val: number) => void;
  timeReturnArrivalMax: number;
  setTimeReturnArrivalMax: (val: number) => void;
}

function FilterSidebar({ 
  dateStart, setDateStart, 
  dateEnd, setDateEnd, 
  wagonFilters, onToggle,
  priceMin, setPriceMin,
  priceMax, setPriceMax,
  absoluteMinPrice,
  absoluteMaxPrice,
  
  timeDepartureMin, setTimeDepartureMin,
  timeDepartureMax, setTimeDepartureMax,
  timeArrivalMin, setTimeArrivalMin,
  timeArrivalMax, setTimeArrivalMax,

  timeReturnDepartureMin, setTimeReturnDepartureMin,
  timeReturnDepartureMax, setTimeReturnDepartureMax,
  timeReturnArrivalMin, setTimeReturnArrivalMin,
  timeReturnArrivalMax, setTimeReturnArrivalMax
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
                        selected={dateEnd} 
                        onChange={(date: Date | null) => setDateEnd(date)}
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
                    
                    <button 
                        type="button" 
                        className="sidebar__direction-toggle"
                        onClick={() => setIsToExpanded(!isToExpanded)}
                    >
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
                                        <div 
                                            className="sidebar__time-range" 
                                            style={{ 
                                                left: `${(timeDepartureMin / 24) * 100}%`, 
                                                width: `${((timeDepartureMax - timeDepartureMin) / 24) * 100}%` 
                                            }}
                                        ></div>
                                    </div>

                                    <div 
                                        className="sidebar__time-handle" 
                                        style={{ left: `${(timeDepartureMin / 24) * 100}%` }}
                                    ></div>
                                    <div 
                                        className="sidebar__time-handle" 
                                        style={{ left: `${(timeDepartureMax / 24) * 100}%` }}
                                    ></div>

                                    <input 
                                        type="range" min={0} max={24} value={timeDepartureMin}
                                        className="sidebar__range-input"
                                        onChange={(e) => setTimeDepartureMin(Math.min(parseInt(e.target.value), timeDepartureMax - 1))}
                                    />
                                    <input 
                                        type="range" min={0} max={24} value={timeDepartureMax}
                                        className="sidebar__range-input"
                                        onChange={(e) => setTimeDepartureMax(Math.max(parseInt(e.target.value), timeDepartureMin + 1))}
                                    />
                                </div>

                                <div className="sidebar__time-labels">
                                    <span className="sidebar__time-val sidebar__time-val--current" style={{ left: `${(timeDepartureMin / 24) * 100}%` }}>{timeDepartureMin}:00</span>
                                    <span className="sidebar__time-val sidebar__time-val--current" style={{ left: `${(timeDepartureMax / 24) * 100}%` }}>{timeDepartureMax}:00</span>
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
                                        <div 
                                            className="sidebar__time-range" 
                                            style={{ 
                                                left: `${(timeArrivalMin / 24) * 100}%`, 
                                                width: `${((timeArrivalMax - timeArrivalMin) / 24) * 100}%` 
                                            }}
                                        ></div>
                                    </div>

                                    <div 
                                        className="sidebar__time-handle" 
                                        style={{ left: `${(timeArrivalMin / 24) * 100}%` }}
                                    ></div>
                                    <div 
                                        className="sidebar__time-handle" 
                                        style={{ left: `${(timeArrivalMax / 24) * 100}%` }}
                                    ></div>

                                    <input 
                                        type="range" min={0} max={24} value={timeArrivalMin}
                                        className="sidebar__range-input"
                                        onChange={(e) => setTimeArrivalMin(Math.min(parseInt(e.target.value), timeArrivalMax - 1))}
                                    />
                                    <input 
                                        type="range" min={0} max={24} value={timeArrivalMax}
                                        className="sidebar__range-input"
                                        onChange={(e) => setTimeArrivalMax(Math.max(parseInt(e.target.value), timeArrivalMin + 1))}
                                    />
                                </div>

                                <div className="sidebar__time-labels">
                                    <span className="sidebar__time-val sidebar__time-val--current" style={{ left: `${(timeArrivalMin / 24) * 100}%` }}>{timeArrivalMin}:00</span>
                                    <span className="sidebar__time-val sidebar__time-val--current" style={{ left: `${(timeArrivalMax / 24) * 100}%` }}>{timeArrivalMax}:00</span>
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
                        onClick={() => setIsFromExpanded(!isFromExpanded)}
                    >
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
                                        {/* Динамическая оранжевая линия времени обратного пути */}
                                        <div 
                                            className="sidebar__time-range" 
                                            style={{ 
                                                left: `${(timeReturnDepartureMin / 24) * 100}%`, 
                                                width: `${((timeReturnDepartureMax - timeReturnDepartureMin) / 24) * 100}%` 
                                            }}
                                        ></div>
                                    </div>

                                    {/* Оригинальные кругляшки-ручки, бегущие по процентам */}
                                    <div 
                                        className="sidebar__time-handle" 
                                        style={{ left: `${(timeReturnDepartureMin / 24) * 100}%` }}
                                    ></div>
                                    <div 
                                        className="sidebar__time-handle" 
                                        style={{ left: `${(timeReturnDepartureMax / 24) * 100}%` }}
                                    ></div>

                                    {/* Прозрачные инпуты управления временем отбытия */}
                                    <input 
                                        type="range" min={0} max={24} value={timeReturnDepartureMin}
                                        className="sidebar__range-input"
                                        onChange={(e) => setTimeReturnDepartureMin(Math.min(parseInt(e.target.value), timeReturnDepartureMax - 1))}
                                    />
                                    <input 
                                        type="range" min={0} max={24} value={timeReturnDepartureMax}
                                        className="sidebar__range-input"
                                        onChange={(e) => setTimeReturnDepartureMax(Math.max(parseInt(e.target.value), timeReturnDepartureMin + 1))}
                                    />
                                </div>

                                {/* Подписи часов меняются на месте и никогда не столкнутся с 24:00 */}
                                <div className="sidebar__time-labels">
                                    <span className="sidebar__time-val sidebar__time-val--current" style={{ left: `${(timeReturnDepartureMin / 24) * 100}%` }}>{timeReturnDepartureMin}:00</span>
                                    <span className="sidebar__time-val sidebar__time-val--current" style={{ left: `${(timeReturnDepartureMax / 24) * 100}%` }}>{timeReturnDepartureMax}:00</span>
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
                                        {/* Динамическая оранжевая линия времени обратного пути */}
                                        <div 
                                            className="sidebar__time-range" 
                                            style={{ 
                                                left: `${(timeReturnArrivalMin / 24) * 100}%`, 
                                                width: `${((timeReturnArrivalMax - timeReturnArrivalMin) / 24) * 100}%` 
                                            }}
                                        ></div>
                                    </div>

                                    <div 
                                        className="sidebar__time-handle" 
                                        style={{ left: `${(timeReturnArrivalMin / 24) * 100}%` }}
                                    ></div>
                                    <div 
                                        className="sidebar__time-handle" 
                                        style={{ left: `${(timeReturnArrivalMax / 24) * 100}%` }}
                                    ></div>

                                    {/* Прозрачные инпуты управления временем прибытия */}
                                    <input 
                                        type="range" min={0} max={24} value={timeReturnArrivalMin}
                                        className="sidebar__range-input"
                                        onChange={(e) => setTimeReturnArrivalMin(Math.min(parseInt(e.target.value), timeReturnArrivalMax - 1))}
                                    />
                                    <input 
                                        type="range" min={0} max={24} value={timeReturnArrivalMax}
                                        className="sidebar__range-input"
                                        onChange={(e) => setTimeReturnArrivalMax(Math.max(parseInt(e.target.value), timeReturnArrivalMin + 1))}
                                    />
                                </div>

                                {/* Подписи часов меняются на месте и никогда не столкнутся с 24:00 */}
                                <div className="sidebar__time-labels">
                                    <span className="sidebar__time-val sidebar__time-val--current" style={{ left: `${(timeReturnArrivalMin / 24) * 100}%` }}>{timeReturnArrivalMin}:00</span>
                                    <span className="sidebar__time-val sidebar__time-val--current" style={{ left: `${(timeReturnArrivalMax / 24) * 100}%` }}>{timeReturnArrivalMax}:00</span>
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