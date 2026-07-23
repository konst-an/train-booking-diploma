import './HomeMainContent.css';

import howItWorksBg from '../../assets/how-it-works-bg.png';

// Импортируем иконки для блока "Как это работает"
import iconLaptop from '../../assets/icon-laptop.svg';
import iconOffice from '../../assets/icon-office.svg';
import iconGlobe from '../../assets/icon-globe.svg';

// Импортируем аватарки для блока отзывов
import reviewUser1 from '../../assets/review-user-1.png';
import reviewUser2 from '../../assets/review-user-2.png';

function HomeMainContent() {
  return (
    <main className="home-main">
      
      {/* ==========================================
         БЛОК 1: О НАС
         ========================================== */}

      <section className="home-main__about" id="about">
        <div className="home-main__container">
          <h2 className="home-main__title">О нас</h2>
          <div className="home-main__about-content">
            <div className="home-main__text-block">
              <p>
                Мы рады видеть вас! Мы работаем для Вас с 2003 года. 14 лет мы наблюдаем, как с каждым днем <br />
                все больше людей заказывают жд билеты через интернет.
                <br /><br />
                Сегодня можно заказать железнодорожные билеты онлайн всего в 2 клика, но стоит ли это делать? <br />
                Мы расскажем о преимуществах заказа через интернет.
                <br /><br />
                Покупать жд билеты дешево можно за 90 суток до отправления поезда. <br />
                <strong>Благодаря динамическому ценообразованию цена на билеты в это время самая низкая.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
         БЛОК 2: КАК ЭТО РАБОТАЕТ
         ========================================== */}

      <section 
        className="home-main__how" 
        id="how-it-works"
        style={{ backgroundImage: `url(${howItWorksBg})` }}
      >
        <div className="home-main__container">
          
          <div className="home-main__how-header">
            <h2 className="home-main__how-title">Как это работает</h2>
            <button type="button" className="home-main__more-btn">Узнать больше</button>
          </div>

          {/* Список из трех круглых карточек преимуществ */}
          <div className="home-main__how-list">
            
            {/* Карточка 1: Ноутбук */}
            <div className="home-main__how-item">
              <div className="home-main__icon-wrapper">
                <img src={iconLaptop} alt="Удобный заказ" className="home-main__icon" />
              </div>
              <p className="home-main__how-text">Удобный заказ <br /> на сайте</p>
            </div>

            {/* Карточка 2: Офис */}
            <div className="home-main__how-item">
              <div className="home-main__icon-wrapper">
                <img src={iconOffice} alt="Без поездок" className="home-main__icon" />
              </div>
              <p className="home-main__how-text">Нет необходимости <br /> ехать в офис</p>
            </div>

            {/* Карточка 3: Глобус */}
            <div className="home-main__how-item">
              <div className="home-main__icon-wrapper">
                <img src={iconGlobe} alt="Выбор направлений" className="home-main__icon" />
              </div>
              <p className="home-main__how-text">Огромный выбор <br /> направлений</p>
            </div>

          </div>

        </div>
      </section>

      {/* ==========================================
         БЛОК 3: ОТЗЫВЫ
         ========================================== */}
      <section className="home-main__reviews" id="reviews">
        <div className="home-main__container">
          
          <h2 className="home-main__reviews-title">Отзывы</h2>
          
          <div className="home-main__reviews-list">
            
            {/* Карточка 1: Екатерина */}
            <div className="home-main__reviews-item">
              <img src={reviewUser1} alt="Екатерина Вальнова" className="home-main__reviews-avatar" />
              <div className="home-main__reviews-content">
                <h3 className="home-main__reviews-name">Екатерина Вальнова</h3>
                <p className="home-main__reviews-text">
                  Доброжелательные подсказки на всех этапах помогут правильно заполнить поля и без затруднений купить авиа или ж/д билет, даже если вы заказываете онлайн билет впервые.
                </p>
              </div>
            </div>

            {/* Карточка 2: Евгений */}
            <div className="home-main__reviews-item">
              <img src={reviewUser2} alt="Евгений Стрыкало" className="home-main__reviews-avatar" />
              <div className="home-main__reviews-content">
                <h3 className="home-main__reviews-name">Евгений Стрыкало</h3>
                <p className="home-main__reviews-text">
                  СМС-сопровождение до посадки. Сразу после оплаты ж/д билетов и за 3 часа до отправления мы пришлем вам СМС-напоминание о поездке.
                </p>
              </div>
            </div>

          </div>

          {/* Пагинация под отзывами */}
          <div className="home-main__reviews-pagination">
            <span className="home-main__pagination-dot home-main__pagination-dot--active"></span>
            <span className="home-main__pagination-dot"></span>
            <span className="home-main__pagination-dot"></span>
            <span className="home-main__pagination-dot"></span>
            <span className="home-main__pagination-dot"></span>
          </div>

        </div>
      </section>

    </main>
  );
}

export default HomeMainContent;
