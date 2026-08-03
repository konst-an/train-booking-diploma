import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker'; 
import { ru } from 'date-fns/locale/ru';

import 'react-datepicker/dist/react-datepicker.css';
import './Header.css';

import formGeoIcon from '../../assets/form-geo-icon.svg';
import formSwapIcon from '../../assets/form-swap-icon.svg';
import formCalendarIcon from '../../assets/form-calendar-icon.svg';

import arrowStepDivider from '../../assets/arrow-step-divider.svg';

registerLocale('ru', ru);

const MOCK_CITIES = [
  "МОСКВА", "АНГАРСК", "АРХАНГЕЛЬСК", "АСТРАХАНЬ", 
  "БАРНАУЛ", "БЕЛГОРОД", "БЛАГОВЕЩЕНСК", "БРАТСК", 
  "БРЯНСК", "ВЕЛИКИЙ НОВГОРОД", "СМОЛЕНСК"
];

function Header() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isSuccess = location.pathname === '/success';
  const navigate = useNavigate();

  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');

  const handleSwapCities = () => {
    const temp = fromCity;
    setFromCity(toCity);
    setToCity(temp);
  };

  const [showFromSuggestions, setShowFromSuggestions] = useState(false);
  const [showToSuggestions, setShowToSuggestions] = useState(false);

  const filteredFromCities = fromCity.trim() === "" 
    ? MOCK_CITIES 
    : MOCK_CITIES.filter(city => city.toLowerCase().startsWith(fromCity.toLowerCase()));

  const filteredToCities = toCity.trim() === "" 
    ? MOCK_CITIES 
    : MOCK_CITIES.filter(city => city.toLowerCase().startsWith(toCity.toLowerCase()));
 
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (fromCity.trim().toLowerCase() === toCity.trim().toLowerCase()) {
        alert('Пункт отправления и пункт прибытия не могут совпадать');
        return;
    }

    if (startDate && endDate && endDate < startDate) {
        alert('Дата обратно не может быть раньше даты отправления');
        return;
    }

    navigate('/trains', {
        state: {
            searchParams: {
                fromCity,
                toCity,
                startDate: startDate ? startDate.toISOString() : null,
                endDate: endDate ? endDate.toISOString() : null
            }
        }
    });
  };

  return (

    <header className={`header ${isHome ? 'header--home' : isSuccess ? 'header--success' : 'header--inner'}`}>
      
      <div className="header__logo-wrapper">
        <a href="#" className="header__logo">Лого</a>
      </div>

      <nav className="header__nav">
          <ul className="header__menu">
              <li className="header__menu-item">
                  {/* Относительный путь без жесткого слэша в начале */}
                  <a href="#about" className="header__menu-link">О нас</a>
              </li>
              <li className="header__menu-item">
                  <a href="#how-it-works" className="header__menu-link">Как это работает</a>
              </li>
              <li className="header__menu-item">
                  <a href="#reviews" className="header__menu-link">Отзывы</a>
              </li>
              <li className="header__menu-item">
                  <a href="#contacts" className="header__menu-link">Контакты</a>
              </li>
          </ul>
      </nav>

      <div className="header__content">
       
         {isHome && (
          <h1 className="header__slogan">
            Вся жизнь - <br /><span>путешествие!</span>
          </h1>
        )}

         {!isSuccess && (
        <form 
          className={`header__search-form ${isHome ? 'header__search-form--home' : 'header__search-form--inner'}`} 
          onSubmit={handleSubmit}
        >
          <div className="header__form-content">

            <div className="header__form-section">
              <h3 className="header__form-title">Направление</h3>
              <div className="header__form-row">

                {/* ОТКУДА */}
                <div className="header__input-wrapper" style={{ position: 'relative' }}>
                  <input 
                    type="text" 
                    placeholder="Откуда" 
                    className="header__form-input" 
                    value={fromCity}
                    onChange={(e) => setFromCity(e.target.value)}
                    onFocus={() => setShowFromSuggestions(true)}
                    onBlur={() => setTimeout(() => setShowFromSuggestions(false), 200)}
                    required
                  />
                  <img src={formGeoIcon} alt="" className="header__input-icon" />
                  
                  {/* Выпадающий список "Откуда" */}
                  {showFromSuggestions && filteredFromCities.length > 0 && (
                    <ul className="header__suggestions-menu">
                      {filteredFromCities.map(city => (
                        <li 
                          key={city} 
                          className="header__suggestions-item"
                          onMouseDown={() => setFromCity(city)} // Ипользуем onMouseDown, так как он срабатывает быстрее onBlur
                        >
                          {city}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* КНОПКА СМЕНЫ НАПРАВЛЕНИЙ МЕСТАМИ */}
                <button 
                  type="button" 
                  className="header__form-swap" 
                  onClick={handleSwapCities}
                >
                  <img src={formSwapIcon} alt="Сменить направления" />
                </button>

                {/* КУДА */}
                <div className="header__input-wrapper" style={{ position: 'relative' }}>
                  <input 
                    type="text" 
                    placeholder="Куда" 
                    className="header__form-input" 
                    value={toCity}
                    onChange={(e) => setToCity(e.target.value)}
                    onFocus={() => setShowToSuggestions(true)}
                    onBlur={() => setTimeout(() => setShowToSuggestions(false), 200)}
                    required 
                  />
                  <img src={formGeoIcon} alt="" className="header__input-icon" />
                  
                  {/* Выпадающий список "Куда" */}
                  {showToSuggestions && filteredToCities.length > 0 && (
                    <ul className="header__suggestions-menu">
                      {filteredToCities.map(city => (
                        <li 
                          key={city} 
                          className="header__suggestions-item"
                          onMouseDown={() => setToCity(city)}
                        >
                          {city}
                        </li>
                      ))}
                    </ul>
                  )}
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
          
        </form> )}
         
      </div>

      {/* Полоса шагов для внутренних страниц */}
      {!isHome && !isSuccess && (<div className="header__steps-bar steps-bar">
          
          {/* 1 шаг: Билеты */}
          <div className="steps-bar__step steps-bar__step--active">
            <span className="steps-bar__number">1</span> Билеты
          </div>

          {/* 2 шаг: Пассажиры */}
          <div className={`steps-bar__step ${
            ['/passengers', '/payment', '/verification'].includes(location.pathname) 
              ? 'steps-bar__step--active' 
              : ''
          }`}>
            {/* СТРЕЛКА СТЫКА 1 И 2: Рендерится на пассажирах, оплате и подтверждении */}
            {['/passengers', '/payment', '/verification'].includes(location.pathname) && (
              <img src={arrowStepDivider} alt="" className="steps-bar__divider-img" />
            )}
            <span className="steps-bar__number">2</span> Пассажиры
          </div>

          {/* 3 шаг: Оплата */}
          <div className={`steps-bar__step ${
            ['/payment', '/verification'].includes(location.pathname) 
              ? 'steps-bar__step--active' 
              : ''
          }`}>
            {/* СТРЕЛКА СТЫКА 2 И 3: Появляется на оплате и подтверждении, скрывается на пассажирах */}
            {['/payment', '/verification'].includes(location.pathname) && (
              <img src={arrowStepDivider} alt="" className="steps-bar__divider-img" />
            )}
            <span className="steps-bar__number">3</span> Оплата
          </div>

          {/* 4 шаг: Проверка */}
          <div className={`steps-bar__step ${location.pathname === '/verification' ? 'steps-bar__step--active' : ''}`}>
            {/* СТРЕЛКА СТЫКА 3 И 4: Рендерится ТОЛЬКО на шаге проверки заказа, на оплате она скрыта */}
            {location.pathname === '/verification' && (
              <img src={arrowStepDivider} alt="" className="steps-bar__divider-img" />
            )}
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
