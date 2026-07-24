import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './TrainSelection.css';


import formCalendarIcon from '../../assets/form-calendar-icon.svg'; 
import sidebarCoupe from '../../assets/sidebar-coupe.svg';
import sidebarReserved from '../../assets/sidebar-reserved.svg';
import sidebarSedentary from '../../assets/sidebar-sedentary.svg';
import sidebarLuxury from '../../assets/sidebar-luxury.svg';
import sidebarWifi from '../../assets/sidebar-wifi.svg';
import sidebarExpress from '../../assets/sidebar-express.svg';

import sidebarArrowTo from '../../assets/sidebar-arrow-to.svg';
import sidebarArrowFrom from '../../assets/sidebar-arrow-from.svg';
import sidebarPlus from '../../assets/sidebar-plus.svg';

import ticketFeatures from '../../assets/ticket-features.svg';

import arrowPagePrev from '../../assets/arrow-page-prev.svg';
import arrowPageNext from '../../assets/arrow-page-next.svg';

function TrainSelection() {
  const [sidebarDateStart, setSidebarDateStart] = useState<Date | null>(new Date('2018-08-30'));
  const [sidebarDateEnd, setSidebarDateEnd] = useState<Date | null>(new Date('2018-09-09'));
  
  const [activeSort, setActiveSort] = useState('time');
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [activeLimit, setActiveLimit] = useState(5);

  const [activePage, setActivePage] = useState(1);

  return (
    <div className="train-selection">
      <div className="train-selection__container">

        <div className="train-selection__sidebar-wrapper">
            <aside className="train-selection__sidebar sidebar">
            
            <div className="sidebar__section filter-date">
                <h4 className="sidebar__title">Дата поездки</h4>
                <div className="sidebar__input-wrapper">
                <DatePicker
                    selected={sidebarDateStart}
                    onChange={(date: Date | null) => setSidebarDateStart(date)}
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
                    selected={sidebarDateEnd}
                    onChange={(date: Date | null) => setSidebarDateEnd(date)}
                    dateFormat="dd.MM.yyyy"
                    className="sidebar__datepicker-input"
                    onChangeRaw={(e) => { if (e) e.preventDefault(); }}
                    locale="ru"
                />
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
                    <div className="sidebar__price-range" style={{ left: '0%', width: '55%' }}></div>
                </div>
                <div className="sidebar__price-handle" style={{ left: '0%' }}></div>
                <div className="sidebar__price-handle" style={{ left: '55%' }}></div>
                </div>
                <div className="sidebar__price-values">
                <span>1920</span>
                <span>4500</span>
                <span>7000</span>
                </div>
            </div>

            <div className="sidebar__section filter-direction">
                <div className="sidebar__direction-header">
                <img src={sidebarArrowTo} alt="" className="sidebar__direction-arrow" />
                <span className="sidebar__direction-title">Туда</span>
                <button type="button" className="sidebar__direction-toggle">
                    <img src={sidebarPlus} alt="Развернуть" />
                </button>
                </div>
            </div>


            <div className="sidebar__section filter-direction">
                <div className="sidebar__direction-header">
                <img src={sidebarArrowFrom} alt="" className="sidebar__direction-arrow" />
                <span className="sidebar__direction-title">Обратно</span>
                <button type="button" className="sidebar__direction-toggle">
                    <img src={sidebarPlus} alt="Развернуть" />
                </button>
                </div>
            </div>
                
            </aside>

            {/* БЛОК: ПОСЛЕДНИЕ БИЛЕТЫ  */}
            <div className="last-tickets">
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
                <article className="train-card">
                    {/* ЛЕВАЯ СЕКЦИЯ: Поезд и Иконка */}
                    <div className="train-card__info">
                        <div className="train-card__icon-box">
                            <img src="/src/assets/icon-train.svg" alt="Поезд" className="train-card__icon-img" />
                        </div>
                        <h3 className="train-card__number">116С</h3>
                        <div className="train-card__route-summary">
                            <span className="train-card__summary-city train-card__summary-city--highlight">Адлер →</span>
                            <span className="train-card__summary-city">Москва →</span>
                            <span className="train-card__summary-city">Санкт-Петербург</span>
                        </div>
                    </div>

                    {/* СРЕДНЯЯ СЕКЦИЯ: Маршруты туда и обратно */}
                    <div className="train-card__route-details">
                        {/* Маршрут ТУДА */}
                        <div className="train-card__route train-card__route--forward">
                            <div className="train-card__time-block">
                                <span className="train-card__time">00:10</span>
                                <span className="train-card__city">Москва</span>
                                <span className="train-card__station">Курский вокзал</span>
                            </div>
                            
                            <div className="train-card__duration-block">
                                <span className="train-card__duration-time">9 : 42</span>
                                <img src="/src/assets/arrow-forward.svg" alt="" className="train-card__arrow-img" />
                            </div>

                            <div className="train-card__time-block">
                                <span className="train-card__time">09 : 52</span>
                                <span className="train-card__city">Санкт-Петербург</span>
                                <span className="train-card__station">Ладожский вокзал</span>
                            </div>
                        </div>

                        {/* Маршрут ОБРАТНО */}
                        <div className="train-card__route train-card__route--backward">
                            <div className="train-card__time-block">
                                <span className="train-card__time">00:10</span>
                                <span className="train-card__city">Москва</span>
                                <span className="train-card__station">Курский вокзал</span>
                            </div>
                            
                            <div className="train-card__duration-block">
                                <span className="train-card__duration-time">9 : 42</span>
                                <img src="/src/assets/arrow-backward.svg" alt="" className="train-card__arrow-img" />
                            </div>

                            <div className="train-card__time-block">
                                <span className="train-card__time">09:52</span>
                                <span className="train-card__city">Санкт-Петербург</span>
                                <span className="train-card__station">Ладожский вокзал</span>
                            </div>
                        </div>
                    </div>

                    <div className="train-card__pricing">
                        <ul className="train-card__seats-list">
                            <li className="train-card__seat-item">
                                <span className="train-card__seat-type">Сидячий</span>
                                <span className="train-card__seat-count">88</span>
                                <span className="train-card__seat-price">от <strong className="train-card__price-num">1 920</strong> <span className="train-card__currency">₽</span></span>
                            </li>
                            <li className="train-card__seat-item">
                                <span className="train-card__seat-type">Плацкарт</span>
                                <span className="train-card__seat-count">52</span>
                                <span className="train-card__seat-price">от <strong className="train-card__price-num">2 530</strong> <span className="train-card__currency">₽</span></span>
                            </li>
                            <li className="train-card__seat-item">
                                <span className="train-card__seat-type">Купе</span>
                                <span className="train-card__seat-count">24</span>
                                <span className="train-card__seat-price">от <strong className="train-card__price-num">3 820</strong> <span className="train-card__currency">₽</span></span>
                            </li>
                            <li className="train-card__seat-item">
                                <span className="train-card__seat-type">Люкс</span>
                                <span className="train-card__seat-count">15</span>
                                <span className="train-card__seat-price">от <strong className="train-card__price-num">4 950</strong> <span className="train-card__currency">₽</span></span>
                            </li>
                        </ul>
                
                        <div className="train-card__pricing-bottom">
                            <div className="train-card__features">
                                <img src={ticketFeatures} alt="Удобства" className="train-card__features-img" />
                            </div>
                            <button className="train-card__btn">Выбрать места</button>
                        </div>
                    </div>
                </article>

                {/* ВТОРАЯ КАРТОЧКА: Поезд 020У «Мегаполис» */}
                <article className="train-card">
                    {/* ЛЕВАЯ СЕКЦИЯ: Поезд и Иконка */}
                    <div className="train-card__info">
                        <div className="train-card__icon-box">
                            <img src="/src/assets/icon-train.svg" alt="Поезд" className="train-card__icon-img" />
                        </div>
                        <h3 className="train-card__number">020У</h3>
                        <div className="train-card__route-summary">
                            <span>Москва →</span>
                            <span>Санкт-Петербург</span>
                            <span>«Мегаполис»</span>
                        </div>
                    </div>

                    {/* СРЕДНЯЯ СЕКЦИЯ: Маршруты туда и обратно */}
                    <div className="train-card__route-details">
                        {/* Маршрут ТУДА */}
                        <div className="train-card__route train-card__route--forward">
                            <div className="train-card__time-block">
                                <span className="train-card__time">00:20</span>
                                <span className="train-card__city">Москва</span>
                                <span className="train-card__station">Ленинградский вокзал</span>
                            </div>
                            
                            <div className="train-card__duration-block">
                                <span className="train-card__duration-time">8:39</span>
                                <img src="/src/assets/arrow-forward.svg" alt="" className="train-card__arrow-img" />
                            </div>

                            <div className="train-card__time-block">
                                <span className="train-card__time">08:59</span>
                                <span className="train-card__city">Санкт-Петербург</span>
                                <span className="train-card__station">Московский вокзал</span>
                            </div>
                        </div>

                        {/* Маршрут ОБРАТНО */}
                        <div className="train-card__route train-card__route--backward">
                            <div className="train-card__time-block">
                                <span className="train-card__time">00:20</span>
                                <span className="train-card__city">Москва</span>
                                <span className="train-card__station">Ленинградский вокзал</span>
                            </div>
                            
                            <div className="train-card__duration-block">
                                <span className="train-card__duration-time">8:39</span>
                                <img src="/src/assets/arrow-backward.svg" alt="" className="train-card__arrow-img" />
                            </div>

                            <div className="train-card__time-block">
                                <span className="train-card__time">08:59</span>
                                <span className="train-card__city">Санкт-Петербург</span>
                                <span className="train-card__station">Московский вокзал</span>
                            </div>
                        </div>
                    </div>

                    {/* ПРАВАЯ СЕКЦИЯ: Места, стоимости и кнопка */}
                    <div className="train-card__pricing">
                        <ul className="train-card__seats-list">
                            <li className="train-card__seat-item">
                                <span className="train-card__seat-type">Купе</span>
                                <span className="train-card__seat-count">90</span>
                                <span className="train-card__seat-price">от <strong className="train-card__price-num">3 950</strong> <span className="train-card__currency">₽</span></span>
                            </li>
                            <li className="train-card__seat-item">
                                <span className="train-card__seat-type">Люкс</span>
                                <span className="train-card__seat-count">31</span>
                                <span className="train-card__seat-price">от <strong className="train-card__price-num">4 950</strong> <span className="train-card__currency">₽</span></span>
                            </li>
                        </ul>
                    
                        <div className="train-card__pricing-bottom">
                            <div className="train-card__features">
                                <img src={ticketFeatures} alt="Удобства" className="train-card__features-img" />
                            </div>
                            <button className="train-card__btn">Выбрать места</button>
                        </div>
                    </div>
                </article>

                {/* ТРЕТЬЯ КАРТОЧКА: Поезд 116С «Волга» */}
                <article className="train-card">
                    {/* ЛЕВАЯ СЕКЦИЯ: Поезд и Иконка */}
                    <div className="train-card__info">
                        <div className="train-card__icon-box">
                            <img src="/src/assets/icon-train.svg" alt="Поезд" className="train-card__icon-img" />
                        </div>
                        <h3 className="train-card__number">116С</h3>
                        <div className="train-card__route-summary">
                            <span className="train-card__summary-city--highlight">Нижний Новгород →</span>
                            <span>Москва →</span>
                            <span>Санкт-Петербург</span>
                            <span>«Волга»</span>
                        </div>
                    </div>

                    {/* СРЕДНЯЯ СЕКЦИЯ: Маршруты туда и обратно */}
                    <div className="train-card__route-details">
                        {/* Маршрут ТУДА */}
                        <div className="train-card__route train-card__route--forward">
                            <div className="train-card__time-block">
                                <span className="train-card__time">00:41</span>
                                <span className="train-card__city">Москва</span>
                                <span className="train-card__station">Ленинградский вокзал</span>
                            </div>
                            
                            <div className="train-card__duration-block">
                                <span className="train-card__duration-time">8:32</span>
                                <img src="/src/assets/arrow-forward.svg" alt="" className="train-card__arrow-img" />
                            </div>

                            <div className="train-card__time-block">
                                <span className="train-card__time">09:13</span>
                                <span className="train-card__city">Санкт-Петербург</span>
                                <span className="train-card__station">Ладожский вокзал</span>
                            </div>
                        </div>

                        {/* Маршрут ОБРАТНО */}
                        <div className="train-card__route train-card__route--backward">
                            <div className="train-card__time-block">
                                <span className="train-card__time">00:41</span>
                                <span className="train-card__city">Москва</span>
                                <span className="train-card__station">Ленинградский вокзал</span>
                            </div>
                            
                            <div className="train-card__duration-block">
                                <span className="train-card__duration-time">8:32</span>
                                <img src="/src/assets/arrow-backward.svg" alt="" className="train-card__arrow-img" />
                            </div>

                            <div className="train-card__time-block">
                                <span className="train-card__time">09:13</span>
                                <span className="train-card__city">Санкт-Петербург</span>
                                <span className="train-card__station">Ладожский вокзал</span>
                            </div>
                        </div>
                    </div>

                    {/* ПРАВАЯ СЕКЦИЯ: Места, стоимости и кнопка */}
                    <div className="train-card__pricing">
                        <ul className="train-card__seats-list">
                            <li className="train-card__seat-item">
                                <span className="train-card__seat-type">Плацкарт</span>
                                <span className="train-card__seat-count">52</span>
                                <span className="train-card__seat-price">от <strong className="train-card__price-num">2 530</strong> <span className="train-card__currency">₽</span></span>
                            </li>
                            <li className="train-card__seat-item">
                                <span className="train-card__seat-type">Купе</span>
                                <span className="train-card__seat-count">24</span>
                                <span className="train-card__seat-price">от <strong className="train-card__price-num">3 820</strong> <span className="train-card__currency">₽</span></span>
                            </li>
                            <li className="train-card__seat-item">
                                <span className="train-card__seat-type">Люкс</span>
                                <span className="train-card__seat-count">15</span>
                                <span className="train-card__seat-price">от <strong className="train-card__price-num">4 950</strong> <span className="train-card__currency">₽</span></span>
                            </li>
                        </ul>
                    
                        <div className="train-card__pricing-bottom">
                            <div className="train-card__features">
                                <img src={ticketFeatures} alt="Удобства" className="train-card__features-img" />
                            </div>
                            <button className="train-card__btn">Выбрать места</button>
                        </div>
                    </div>
                </article>

                {/* ЧЕТВЕРТАЯ КАРТОЧКА: Поезд 116С (Адлер — Санкт-Петербург, купе закрыто) */}
                <article className="train-card">
                    {/* ЛЕВАЯ СЕКЦИЯ: Поезд и Иконка */}
                    <div className="train-card__info">
                        <div className="train-card__icon-box">
                            <img src="/src/assets/icon-train.svg" alt="Поезд" className="train-card__icon-img" />
                        </div>
                        <h3 className="train-card__number">116С</h3>
                        <div className="train-card__route-summary">
                            <span className="train-card__summary-city--highlight">Адлер →</span>
                            <span>Москва →</span>
                            <span>Санкт-Петербург</span>
                        </div>
                    </div>

                    {/* СРЕДНЯЯ СЕКЦИЯ: Маршруты туда и обратно */}
                    <div className="train-card__route-details">
                        {/* Маршрут ТУДА */}
                        <div className="train-card__route train-card__route--forward">
                            <div className="train-card__time-block">
                                <span className="train-card__time">00:10</span>
                                <span className="train-card__city">Москва</span>
                                <span className="train-card__station">Курский вокзал</span>
                            </div>
                            
                            <div className="train-card__duration-block">
                                <span className="train-card__duration-time">9:42</span>
                                <img src="/src/assets/arrow-forward.svg" alt="" className="train-card__arrow-img" />
                            </div>

                            <div className="train-card__time-block">
                                <span className="train-card__time">09:52</span>
                                <span className="train-card__city">Санкт-Петербург</span>
                                <span className="train-card__station">Ладожский вокзал</span>
                            </div>
                        </div>

                        {/* Маршрут ОБРАТНО */}
                        <div className="train-card__route train-card__route--backward">
                            <div className="train-card__time-block">
                                <span className="train-card__time">00:10</span>
                                <span className="train-card__city">Москва</span>
                                <span className="train-card__station">Курский вокзал</span>
                            </div>
                            
                            <div className="train-card__duration-block">
                                <span className="train-card__duration-time">9:42</span>
                                <img src="/src/assets/arrow-backward.svg" alt="" className="train-card__arrow-img" />
                            </div>

                            <div className="train-card__time-block">
                                <span className="train-card__time">09:52</span>
                                <span className="train-card__city">Санкт-Петербург</span>
                                <span className="train-card__station">Ладожский вокзал</span>
                            </div>
                        </div>
                    </div>

                    {/* ПРАВАЯ СЕКЦИЯ: Места, стоимости и кнопка */}
                    <div className="train-card__pricing">
                        <ul className="train-card__seats-list">
                            <li className="train-card__seat-item">
                                <span className="train-card__seat-type">Сидячий</span>
                                <span className="train-card__seat-count">88</span>
                                <span className="train-card__seat-price">от <strong className="train-card__price-num">1 920</strong> <span className="train-card__currency">₽</span></span>
                            </li>
                            <li className="train-card__seat-item">
                                <span className="train-card__seat-type">Плацкарт</span>
                                <span className="train-card__seat-count">52</span>
                                <span className="train-card__seat-price">от <strong className="train-card__price-num">2 530</strong> <span className="train-card__currency">₽</span></span>
                            </li>
                            <li className="train-card__seat-item">
                                <span className="train-card__seat-type">Купе</span>
                                <span className="train-card__seat-count">24</span>
                                <span className="train-card__seat-price">от <strong className="train-card__price-num">3 820</strong> <span className="train-card__currency">₽</span></span>
                            </li>
                            <li className="train-card__seat-item">
                                <span className="train-card__seat-type">Люкс</span>
                                <span className="train-card__seat-count">15</span>
                                <span className="train-card__seat-price">от <strong className="train-card__price-num">4 950</strong> <span className="train-card__currency">₽</span></span>
                            </li>
                        </ul>
                    
                        <div className="train-card__pricing-bottom">
                            <div className="train-card__features">
                                <img src={ticketFeatures} alt="Удобства" className="train-card__features-img" />
                            </div>
                            <button className="train-card__btn">Выбрать места</button>
                        </div>
                    </div>
                </article>

                {/* ПЯТАЯ КАРТОЧКА: Поезд 116С (Адлер — Санкт-Петербург) */}
                <article className="train-card">
                    {/* ЛЕВАЯ СЕКЦИЯ */}
                    <div className="train-card__info">
                        <div className="train-card__icon-box">
                            <img src="/src/assets/icon-train.svg" alt="Поезд" className="train-card__icon-img" />
                        </div>
                        <h3 className="train-card__number">116С</h3>
                        <div className="train-card__route-summary">
                            <span className="train-card__summary-city--highlight">Адлер →</span>
                            <span>Москва →</span>
                            <span>Санкт-Петербург</span>
                        </div>
                    </div>

                    {/* СРЕДНЯЯ СЕКЦИЯ */}
                    <div className="train-card__route-details">
                        <div className="train-card__route train-card__route--forward">
                            <div className="train-card__time-block">
                                <span className="train-card__time">00:10</span>
                                <span className="train-card__city">Москва</span>
                                <span className="train-card__station">Курский вокзал</span>
                            </div>
                            <div className="train-card__duration-block">
                                <span className="train-card__duration-time">9:42</span>
                                <img src="/src/assets/arrow-forward.svg" alt="" className="train-card__arrow-img" />
                            </div>
                            <div className="train-card__time-block">
                                <span className="train-card__time">09:52</span>
                                <span className="train-card__city">Санкт-Петербург</span>
                                <span className="train-card__station">Ладожский вокзал</span>
                            </div>
                        </div>

                        <div className="train-card__route train-card__route--backward">
                            <div className="train-card__time-block">
                                <span className="train-card__time">00:10</span>
                                <span className="train-card__city">Москва</span>
                                <span className="train-card__station">Курский вокзал</span>
                            </div>
                            <div className="train-card__duration-block">
                                <span className="train-card__duration-time">9:42</span>
                                <img src="/src/assets/arrow-backward.svg" alt="" className="train-card__arrow-img" />
                            </div>
                            <div className="train-card__time-block">
                                <span className="train-card__time">09:52</span>
                                <span className="train-card__city">Санкт-Петербург</span>
                                <span className="train-card__station">Ладожский вокзал</span>
                            </div>
                        </div>
                    </div>

                    {/* ПРАВАЯ СЕКЦИЯ */}
                    <div className="train-card__pricing">
                        <ul className="train-card__seats-list">
                            <li className="train-card__seat-item">
                                <span className="train-card__seat-type">Сидячий</span>
                                <span className="train-card__seat-count">88</span>
                                <span className="train-card__seat-price">от <strong className="train-card__price-num">1 920</strong> <span className="train-card__currency">₽</span></span>
                            </li>
                            <li className="train-card__seat-item">
                                <span className="train-card__seat-type">Плацкарт</span>
                                <span className="train-card__seat-count">52</span>
                                <span className="train-card__seat-price">от <strong className="train-card__price-num">2 530</strong> <span className="train-card__currency">₽</span></span>
                            </li>
                            <li className="train-card__seat-item">
                                <span className="train-card__seat-type">Купе</span>
                                <span className="train-card__seat-count">24</span>
                                <span className="train-card__seat-price">от <strong className="train-card__price-num">3 820</strong> <span className="train-card__currency">₽</span></span>
                            </li>
                            <li className="train-card__seat-item">
                                <span className="train-card__seat-type">Люкс</span>
                                <span className="train-card__seat-count">15</span>
                                <span className="train-card__seat-price">от <strong className="train-card__price-num">4 950</strong> <span className="train-card__currency">₽</span></span>
                            </li>
                        </ul>
                    
                        <div className="train-card__pricing-bottom">
                            <div className="train-card__features">
                                <img src={ticketFeatures} alt="Удобства" className="train-card__features-img" />
                            </div>
                            <button className="train-card__btn">Выбрать места</button>
                        </div>
                    </div>
                </article>

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
        </main>

      </div>
    </div>
  );
}

export default TrainSelection;
