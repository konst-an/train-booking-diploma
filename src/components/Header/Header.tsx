import './Header.css';

import formGeoIcon from '../../assets/form-geo-icon.svg';
import formSwapIcon from '../../assets/form-swap-icon.svg';
import formCalendarIcon from '../../assets/form-calendar-icon.svg';


function Header() {
  return (
    <header className="header">
      
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
        <h1 className="header__slogan">Вся жизнь - <br/><span>путешествие!</span></h1>

        <form className="header__search-form">
          
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
                  <input type="text" placeholder="ДД/ММ/ГГ" className="header__form-input" />
                  <img src={formCalendarIcon} alt="" className="header__input-icon" />
                </div>
                <div className="header__input-wrapper">
                  <input type="text" placeholder="ДД/ММ/ГГ" className="header__form-input" />
                  <img src={formCalendarIcon} alt="" className="header__input-icon" />
                </div>
              </div>
            </div>

          </div>

          <button type="submit" className="header__form-submit">Найти билеты</button>

        </form>
         
      </div>

      <div className="header__border"></div>
    </header>
  );
}

export default Header;
