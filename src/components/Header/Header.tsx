import './Header.css';

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

    </header>
  );
}

export default Header;
