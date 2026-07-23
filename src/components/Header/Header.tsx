import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker'; 
import { ru } from 'date-fns/locale/ru';

import 'react-datepicker/dist/react-datepicker.css';
import './Header.css';

import formGeoIcon from '../../assets/form-geo-icon.svg';
import formSwapIcon from '../../assets/form-swap-icon.svg';
import formCalendarIcon from '../../assets/form-calendar-icon.svg';


registerLocale('ru', ru);

function Header() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const navigate = useNavigate();

  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();   
    navigate('/trains');  
  };

  return (
    // Динамические классы для всего хедера
    <header className={`header ${isHome ? 'header--home' : 'header--inner'}`}>
      
      <div className="header__logo-wrapper">
        <a href="#" className="header__logo">Лого</a>
      </div>

      <nav className="header__nav">
        <ul className="header__menu">
          <li className="header__menu-item">
            <a href="#" className="header__menu-link">О нас</a>
          </li>
          <li className="header__menu-item">
            <a href="#" className="header__menu-link">Как это работает</a>
          </li>
          <li className="header__menu-item">
            <a href="#" className="header__menu-link">Отзывы</a>
          </li>
          <li className="header__menu-item">
            <a href="#" className="header__menu-link">Контакты</a>
          </li>
        </ul>
      </nav>

      <div className="header__content">
       
        {isHome && (
          <h1 className="header__slogan">Вся жизнь - <br/><span>путешествие!</span></h1>
        )}

        {/* Динамические классы для формы поиска */}
        <form className={`header__search-form ${isHome ? 'header__search-form--home' : 'header__search-form--inner'}`}onSubmit={handleSubmit}>
          
          <div className="header__form-content">
          
            <div className="header__form-section">
              <h3 className="header__form-title">Направление</h3>
              <div className="header__form-row">
                <div className="header__input-wrapper">
                  <input type="text" placeholder="Откуда" className="header__form-input" />
                  <img src={formGeoIcon} alt="" className="header__input-icon" />
                </div>
                
                <button type="button" className="header__form-swap">
                  <img src={formSwapIcon} alt="Сменить направления" />
                </button>
                
                <div className="header__input-wrapper">
                  <input type="text" placeholder="Куда" className="header__form-input" />
                  <img src={formGeoIcon} alt="" className="header__input-icon" />
                </div>
              </div>
            </div>

            <div className="header__form-section">
              <h3 className="header__form-title">Дата</h3>
            
              <div className="header__form-row header__form-row--dates">
                
                
                <div className="header__input-wrapper">
                  <DatePicker
                    selected={startDate}
                    onChange={(date: Date | null) => setStartDate(date)}
                    placeholderText="ДД/ММ/ГГ"
                    dateFormat="dd/MM/yy"
                    className="header__form-input"
                    onChangeRaw={(e) => { if (e) e.preventDefault(); }}
                    locale="ru"
                  />
                  <img src={formCalendarIcon} alt="" className="header__input-icon" />
                </div>
                
               
                <div className="header__input-wrapper">
                  <DatePicker
                    selected={endDate}
                    onChange={(date: Date | null) => setEndDate(date)}
                    placeholderText="ДД/ММ/ГГ"
                    dateFormat="dd/MM/yy"
                    className="header__form-input"
                    onChangeRaw={(e) => { if (e) e.preventDefault(); }}
                    locale="ru"
                  />
                  <img src={formCalendarIcon} alt="" className="header__input-icon" />
                </div>

              </div>
            </div>

          </div>

          <button type="submit" className="header__form-submit">Найти билеты</button>

        </form>
         
      </div>

      {/* Полоса шагов для внутренних страниц */}
      {!isHome && (
        <div className="header__steps-bar steps-bar">
          {/* 1 шаг: Активен всегда на внутренних страницах */}
          <div className="steps-bar__step steps-bar__step--active">
            <span className="steps-bar__number">1</span> Билеты
          </div>

          {/* 2 шаг: Становится активным, если мы на странице пассажиров */}
          <div className={`steps-bar__step ${location.pathname === '/passengers' ? 'steps-bar__step--active' : ''}`}>
            <span className="steps-bar__number">2</span> Пассажиры
          </div>

          {/* 3 шаг: Становится активным, если мы на странице оплаты */}
          <div className={`steps-bar__step ${location.pathname === '/payment' ? 'steps-bar__step--active' : ''}`}>
            <span className="steps-bar__number">3</span> Оплата
          </div>

          {/* 4 шаг: Становится активным, если мы на странице проверки */}
          <div className={`steps-bar__step ${location.pathname === '/verification' ? 'steps-bar__step--active' : ''}`}>
            <span className="steps-bar__number">4</span> Проверка
          </div>
        </div>
      )}

      {/* Оранжевый бордер только для Главной */}
      {isHome && <div className="header__border"></div>}
    </header>
  );
}

export default Header;
