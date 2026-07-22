import './Footer.css';

import phoneIcon from '../../assets/phone-icon.svg';
import mailIcon from '../../assets/mail-icon.svg';
import skypeIcon from '../../assets/skype-icon.svg';
import locationIcon from '../../assets/location-icon.svg';

import youtubeIcon from '../../assets/youtube-icon.svg';
import instagramIcon from '../../assets/instagram-icon.svg';
import googleIcon from '../../assets/google-icon.svg';
import facebookIcon from '../../assets/facebook-icon.svg';
import twitterIcon from '../../assets/twitter-icon.svg';

import arrowUpIcon from '../../assets/arrow-up-icon.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main">
        
       
        <div className="footer__column">
          <h3 className="footer__title">Свяжитесь с нами</h3>
          <ul className="footer__contacts">
              <li className="footer__contacts-item">
                <img src={phoneIcon} alt="Телефон" className="footer__contacts-icon"/>
                <span className="footer__contacts-text">8 (800) 000 00 00</span>
              </li>

              <li className="footer__contacts-item footer__contacts-item--mail">
                <img src={mailIcon} alt="Почта" className="footer__contacts-icon" />
                <span className="footer__contacts-text">inbox@mail.ru</span>
              </li>

              <li className="footer__contacts-item footer__contacts-item--skype">
                <img src={skypeIcon} alt="Skype" className="footer__contacts-icon" />
                <span className="footer__contacts-text">tu.train.tickets</span>
              </li>

              <li className="footer__contacts-item footer__contacts-item--location">
                <img src={locationIcon} alt="Адрес" className="footer__contacts-icon" />
                <div className="footer__contacts-text footer__contacts-text--address">
                  <span>г. Москва</span>
                  <span>ул. Московская 27-35</span>
                  <span>555 555</span>
                </div>
              </li>
          </ul>
        </div>

        <div className="footer__column footer__column--subscribe">
          <h3 className="footer__title">Подписка</h3>
          <p className="footer__subscribe-text">Будьте в курсе событий</p>
          <form className="footer__subscribe-form">
            <input type="email" placeholder="e-mail" className="footer__input"/>
            <button type="button" className="footer__button">ОТПРАВИТЬ</button>
          </form>

          <h3 className="footer__socials-title">Подписывайтесь на нас</h3>
          <div className="footer__socials-list">
            <a href="#" className="footer__social-link">
              <img src={youtubeIcon} alt="YouTube" className="footer__social-icon" />
            </a>
            <a href="#" className="footer__social-link">
              <img src={instagramIcon} alt="Instagram" className="footer__social-icon" />
            </a>
            <a href="#" className="footer__social-link">
              <img src={googleIcon} alt="Google+" className="footer__social-icon" />
            </a>
            <a href="#" className="footer__social-link">
              <img src={facebookIcon} alt="Facebook" className="footer__social-icon" />
            </a>
            <a href="#" className="footer__social-link">
              <img src={twitterIcon} alt="Twitter" className="footer__social-icon" />
            </a>
        </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__bottom-container">
          <a href="#" className="footer__logo-link">Лого</a>
        
          <button type="button" className="footer__arrow-up">
            <img src={arrowUpIcon} alt="Наверх" className="footer__arrow-up-icon"/>
          </button>
          
          <p className="footer__copyright">2018 WEB</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
