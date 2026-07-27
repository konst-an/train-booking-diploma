import { useNavigate } from 'react-router-dom';
import './Verification.css';
import TripDetailsSidebar from '../Sidebars/TripDetailsSidebar/TripDetailsSidebar';

import ticketFeatures from '../../assets/ticket-features.svg'; 
import iconPassengerCircleOrange from '../../assets/icon-passenger-circle-orange.svg'; // Новая иконка пассажира в оранжевом кружке


export default function Verification() {
    const navigate = useNavigate();

    const handleEditTrain = () => {
        navigate('/trains');
    };

    const handleConfirmOrder = () => {
        navigate('/success');
    };

    return (
        <div className="verification__container">
            <TripDetailsSidebar />

            <main className="verification__main">
                
                {/* БЛОК 1: ПОЕЗД */}
                <div className="verification__card">
                    
                    {/* СЕРАЯ ШАПКА КАРТОЧКИ */}
                    <div className="verification__card-header">
                        <h3 className="verification__card-title">Поезд</h3>
                    </div>

                    {/* ТЕЛО КАРТОЧКИ */}
                    <div className="verification__card-body">
                        
                        {/* Карточка поезда */}
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

                            {/* ПРАВАЯ СЕКЦИЯ: Места и цены */}
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
                                    {/* ЗАДАЛИ НОВЫЙ КЛАСС КНОПКЕ */}
                                    <button 
                                        type="button" 
                                        className="verification__card-btn-edit"
                                        onClick={handleEditTrain}
                                    >
                                        Изменить
                                    </button>
                                </div>
                            </div>
                        </article>

                    </div>
                </div>

                {/* БЛОК 2: ПАССАЖИРЫ */}
                <div className="verification__card verification-passengers">
                    
                    {/* ШАПКА КАРТОЧКИ */}
                    <div className="verification__card-header">
                        <h3 className="verification__card-title">Пассажиры</h3>
                    </div>

                    {/* ТЕЛО КАРТОЧКИ (Две колонки) */}
                    <div className="verification__card-body verification-passengers__body">
                        
                        {/* ЛЕВАЯ КОЛОНКА: Список людей */}
                        <div className="verification-passengers__list">
                            
                            {/* Пассажир 1 */}
                            <div className="verification-passengers__item">
                                <div className="verification-passengers__avatar-group">
                                    <div className="verification-passengers__avatar">
                                        <img src={iconPassengerCircleOrange} alt="Пассажир" className="verification-passengers__avatar-img" />
                                    </div>
                                    <span className="verification-passengers__type">Взрослый</span>
                                </div>
                                <div className="verification-passengers__info">
                                    <h4 className="verification-passengers__name">Мартынюк Ирина Эдуардовна</h4>
                                    <p className="verification-passengers__meta">Пол женский</p>
                                    <p className="verification-passengers__meta">Дата рождения 17.02.1985</p>
                                    <p className="verification-passengers__meta">Паспорт РФ 4204 380694</p>
                                </div>
                            </div>

                            {/* Пассажир 2 */}
                            <div className="verification-passengers__item">
                                <div className="verification-passengers__avatar-group">
                                    <div className="verification-passengers__avatar">
                                        <img src={iconPassengerCircleOrange} alt="Пассажир" className="verification-passengers__avatar-img" />
                                    </div>
                                    <span className="verification-passengers__type">Детский</span>
                                </div>
                                <div className="verification-passengers__info">
                                    <h4 className="verification-passengers__name">Мартынюк Кирилл Сергеевич</h4>
                                    <p className="verification-passengers__meta">Пол мужской</p>
                                    <p className="verification-passengers__meta">Дата рождения 25.01.2006</p>
                                    <p className="verification-passengers__meta">Свидетельство о рождении VIII УН 256319</p>
                                </div>
                            </div>

                            {/* Пассажир 3 */}
                            <div className="verification-passengers__item">
                                <div className="verification-passengers__avatar-group">
                                    <div className="verification-passengers__avatar">
                                        <img src={iconPassengerCircleOrange} alt="Пассажир" className="verification-passengers__avatar-img" />
                                    </div>
                                    <span className="verification-passengers__type">Взрослый</span>
                                </div>
                                <div className="verification-passengers__info">
                                    <h4 className="verification-passengers__name">Мартынюк Сергей Петрович</h4>
                                    <p className="verification-passengers__meta">Пол мужской</p>
                                    <p className="verification-passengers__meta">Дата рождения 19.06.1982</p>
                                    <p className="verification-passengers__meta">Паспорт РФ 4204 380694</p>
                                </div>
                            </div>

                        </div>

                        {/* ПРАВАЯ КОЛОНКА: Итог и кнопка */}
                        <div className="verification-passengers__sidebar">
                            <div className="verification-passengers__total-box">
                                <span className="verification-passengers__total-label">Всего</span>
                                <span className="verification-passengers__total-price">
                                    7 760 <span className="verification-passengers__currency">₽</span>
                                </span>
                            </div>
                            <button 
                                type="button" 
                                className="verification__card-btn-edit"
                                onClick={() => navigate('/passengers')} // Возвращает на шаг заполнения пассажиров
                            >
                                Изменить
                            </button>
                        </div>

                    </div>
                </div>

                {/* БЛОК 3: СПОСОБ ОПЛАТЫ */}
                <div className="verification__card verification-payment">
                    <div className="verification-payment__header">
                        <h3 className="verification-payment__title">Способ оплаты</h3>
                    </div>

                    <div className="verification-payment__body">
                        <div className="verification-payment__left-col">
                            <span className="verification-payment__method-text">Наличными</span>
                        </div>

                        <div className="verification-payment__sidebar">
                            <button 
                                type="button" 
                                className="verification__card-btn-edit"
                                onClick={() => navigate('/payment')}
                            >
                                Изменить
                            </button>
                        </div>
                    </div>
                </div>

         
                <div className="verification__submit-block">
                    <button 
                        type="button" 
                        className="verification__btn-submit"
                        onClick={handleConfirmOrder}>
                        ПОДТВЕРДИТЬ
                    </button>
                </div>

            </main>
        </div>
    );
}
