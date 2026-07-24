import { useState } from 'react';

import 'react-datepicker/dist/react-datepicker.css';
import FilterSidebar from '../Sidebars/FilterSidebar/FilterSidebar'; 
import './TrainSelection.css';

import ticketFeatures from '../../assets/ticket-features.svg';

import arrowPagePrev from '../../assets/arrow-page-prev.svg';
import arrowPageNext from '../../assets/arrow-page-next.svg';

function TrainSelection() {
  const [activeSort, setActiveSort] = useState('time');
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [activeLimit, setActiveLimit] = useState(5);

  const [activePage, setActivePage] = useState(1);

  return (
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
                                <span className="train-card__duration-time">8 : 39</span>
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
                                <span className="train-card__duration-time">8 : 39</span>
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
                                <span className="train-card__duration-time">8 : 32</span>
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
                                <span className="train-card__duration-time">8 : 32</span>
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
                                <span className="train-card__duration-time">9 : 42</span>
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
                                <span className="train-card__duration-time">9 : 42</span>
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
  );
}

export default TrainSelection;
