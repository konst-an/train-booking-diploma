import './TripDetailsSidebar.css';

import sidebarArrowTo from '../../../assets/sidebar-arrow-to.svg';
import sidebarArrowFrom from '../../../assets/sidebar-arrow-from.svg';
import iconPassengerOrange from '../../../assets/icon-passenger-orange.svg';
import sidebarPlus from '../../../assets/sidebar-plus.svg';
import sidebarMinus from '../../../assets/sidebar-minus.svg';
import arrowForward from '../../../assets/arrow-forward.svg';
import sidebarArrowBackward from '../../../assets/arrow-backward.svg';

import './TripDetailsSidebar.css';

function TripDetailsSidebar() {
    return (
        <aside className="trip-details">
            
            {/* ГЛАВНЫЙ ЗАГОЛОВОК СЕКЦИИ */}
            <div className="trip-details__main-header">
                <h2 className="trip-details__main-title">Детали поездки</h2>
            </div>

            {/* БЛОК 1: ТУДА */}
            <section className="trip-details__section">
                
                {/* ШАПКА СЕКЦИИ "ТУДА" */}
                <div className="trip-details__section-header">
                    <div className="trip-details__section-title-group">
                        <img src={sidebarArrowTo} alt="" className="trip-details__direction-icon" />
                        <h3 className="trip-details__section-title">Туда</h3>
                        <span className="trip-details__section-date">30.08.2018</span>
                    </div>
                    
                    {/* Кнопка-минус */}
                    <button type="button" className="trip-details__btn-toggle" aria-label="Свернуть секцию Туда">
                        <img src={sidebarMinus} alt="Свернуть" className="trip-details__toggle-img" />
                    </button>
                </div>

                <div className="trip-details__section-body">
                    <div className="trip-details__info-row">
                        <span className="trip-details__info-label">№ Поезда</span>
                        <span className="trip-details__info-value trip-details__info-value--bold">116С</span>
                    </div>
                    <div className="trip-details__info-row">
                        <span className="trip-details__info-label">Название</span>
                        <span className="trip-details__info-value trip-details__info-value--right">
                            Адлер<br />Санкт-Петербург
                        </span>
                    </div>

                    {/* ДОБАВЛЯЕМ СЕТКУ РАСПИСАНИЯ И МАРШРУТА */}
                    <div className="trip-details__route-schedule">
                        
                        {/* Левая колонка — Отправление */}
                        <div className="trip-details__time-block">
                            <div className="trip-details__time">00:10</div>
                            <div className="trip-details__date">30.08.2018</div>
                            <div className="trip-details__station">Москва</div>
                            <div className="trip-details__vokzal">Курский<br />вокзал</div>
                        </div>

                        {/* Центр — Стрелка и время в пути */}
                        <div className="trip-details__arrow-block">
                            <span className="trip-details__duration-time">9 : 42</span>
                            <img src={arrowForward} alt="" className="trip-details__route-arrow" />
                        </div>

                        {/* Правая колонка — Прибытие (выравнивание вправо) */}
                        <div className="trip-details__time-block trip-details__time-block--right">
                            <div className="trip-details__time">09:52</div>
                            <div className="trip-details__date">31.08.2018</div>
                            <div className="trip-details__station">Санкт-Петербург</div>
                            <div className="trip-details__vokzal">Ладожский<br />вокзал</div>
                        </div>

                    </div>
                </div>
            </section>

            {/* БЛОК 2: ОБРАТНО */}
            <section className="trip-details__section">
        
                <div className="trip-details__section-header">
                    <div className="trip-details__section-title-group">
                        <img src={sidebarArrowFrom} alt="" className="trip-details__direction-icon" />
                        <h3 className="trip-details__section-title">Обратно</h3>
                        <span className="trip-details__section-date">09.09.2018</span>
                    </div>
                    <button type="button" className="trip-details__btn-toggle" aria-label="Свернуть секцию Обратно">
                        <img src={sidebarMinus} alt="Свернуть" className="trip-details__toggle-img" />
                    </button>
                </div>

                <div className="trip-details__section-body">
                    <div className="trip-details__info-row">
                        <span className="trip-details__info-label">№ Поезда</span>
                        <span className="trip-details__info-value trip-details__info-value--bold">116С</span>
                    </div>
                    <div className="trip-details__info-row">
                        <span className="trip-details__info-label">Название</span>
                        <span className="trip-details__info-value trip-details__info-value--right">
                            Адлер<br />Санкт-Петербург
                        </span>
                    </div>

                    <div className="trip-details__route-schedule">
                        
                        <div className="trip-details__time-block">
                            <div className="trip-details__time">00:10</div>
                            <div className="trip-details__date">09.09.2018</div>
                            <div className="trip-details__station">Москва</div>
                            <div className="trip-details__vokzal">Курский<br />вокзал</div>
                        </div>

                        <div className="trip-details__arrow-block">
                            <span className="trip-details__duration-time">9 : 42</span>
                            <img src={sidebarArrowBackward} alt="" className="trip-details__route-arrow" />
                        </div>

                        <div className="trip-details__time-block trip-details__time-block--right">
                            <div className="trip-details__time">09:52</div>
                            <div className="trip-details__date">08.09.2018</div>
                            <div className="trip-details__station">Санкт-Петербург</div>
                            <div className="trip-details__vokzal">Ладожский<br />вокзал</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* БЛОК 3: ПАССАЖИРЫ */}
            <section className="trip-details__section">
                
                {/* Шапка секции "Пассажиры" */}
                <div className="trip-details__section-header">
                    <div className="trip-details__section-title-group">
                        <img src={iconPassengerOrange} alt="" className="trip-details__passengers-img" />
                        <h3 className="trip-details__section-title">Пассажиры</h3>
                    </div>
                    <button type="button" className="trip-details__btn-toggle" aria-label="Свернуть секцию Пассажиры">
                        <img src={sidebarMinus} alt="Свернуть" className="trip-details__toggle-img" />
                    </button>
                </div>

                {/* Тело секции "Пассажиры" (используем те же паддинги, что и для Туда/Обратно) */}
                <div className="trip-details__section-body trip-details__section-body--passengers">
                    
                    {/* Строка: Взрослые */}
                    <div className="trip-details__passenger-row">
                        <span className="trip-details__passenger-type">2 Взрослых</span>
                        <div className="trip-details__passenger-price">
                            <span className="trip-details__price-num">5 840</span>
                            <span className="trip-details__currency">₽</span>
                        </div>
                    </div>
                    
                    {/* Строка: Дети */}
                    <div className="trip-details__passenger-row">
                        <span className="trip-details__passenger-type">1 Ребенок</span>
                        <div className="trip-details__passenger-price">
                            <span className="trip-details__price-num">1 920</span>
                            <span className="trip-details__currency">₽</span>
                        </div>
                    </div>

                </div>
            </section>

             {/* ИТОГОВАЯ СТРОКА СТОИМОСТИ (ФУТЕР САЙДБАРА) */}
            <footer className="trip-details__total-footer">
                <span className="trip-details__total-label">Итог</span>
                <div className="trip-details__total-price-group">
                    <span className="trip-details__total-price-number">7 760</span>
                    <span className="trip-details__total-currency">₽</span>
                </div>
            </footer>
        </aside>
    );
}

export default TripDetailsSidebar;

