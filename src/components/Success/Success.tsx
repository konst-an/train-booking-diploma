import { useNavigate } from 'react-router-dom';
import './Success.css';
import successIconEmail from '../../assets/success-icon-email.svg';
import successIconPrint from '../../assets/success-icon-print.svg';
import successIconTicket from '../../assets/success-icon-ticket.svg';

import successStar from '../../assets/success-star.svg';

export default function Success() {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/'); // Перенаправляем пользователя на главную страницу при клике
    };

    return (
        <div className="success-page">
            {/* Главный заголовок страницы успеха */}
            <h1 className="success-page__title">Благодарим Вас за заказ!</h1>

            {/* Большая белая карточка с деталями заказа (1404px) */}
            <div className="success-page__card">
                
                {/* Верхняя часть карточки: Номер и сумма */}
                <div className="success-page__card-header">
                    <span className="success-page__order-number">№Заказа 285АА</span>
                    <span className="success-page__order-sum">
                        сумма <strong className="success-page__sum-value">7 760 ₽</strong>
                    </span>
                </div>

                <div className="success-page__steps-block">
                    <div className="success-page__steps-container">
                        
                        {/* Шаг 1 */}
                        <div className="success-page__step">
                            <div className="success-page__step-icon-wrapper">
                                <img src={successIconEmail} alt="Email" className="success-page__step-icon" />
                            </div>
                            <p className="success-page__step-text">
                                билеты будут<br />отправлены<br />на ваш <strong>e-mail</strong>
                            </p>
                        </div>

                        {/* Шаг 2 */}
                        <div className="success-page__step">
                            <div className="success-page__step-icon-wrapper">
                                <img src={successIconPrint} alt="Распечатать" className="success-page__step-icon" />
                            </div>
                            <p className="success-page__step-text">
                                <strong>распечатайте</strong><br />и сохраняйте билеты<br />до даты поездки
                            </p>
                        </div>

                        {/* Шаг 3 */}
                        <div className="success-page__step">
                            <div className="success-page__step-icon-wrapper">
                                <img src={successIconTicket} alt="Проводник" className="success-page__step-icon" />
                            </div>
                            <p className="success-page__step-text">
                                <strong>предъявите</strong><br />распечатанные<br />билеты при посадке
                            </p>
                        </div>

                    </div>
                </div>

                {/* Третий блок: Текстовая информация */}
                <div className="success-page__info-content">
                    <h2 className="success-page__client-name">Ирина Эдуардовна!</h2>
                    
                    <p className="success-page__status-text">
                        Ваш заказ успешно оформлен.<br />
                        В ближайшее время с вами свяжется наш оператор для подтверждения.
                    </p>
                    
                    <p className="success-page__gratitude-text">
                        Благодарим Вас за оказанное доверие и желаем приятного путешествия!
                    </p>
                </div>

                {/* Четвертый блок: Финальная оранжевая панель */}
                <div className="success-page__footer-panel">
                    
                    {/* Блок оценки сервиса */}
                    <div className="success-page__rating-block">
                        <span className="success-page__rating-label">Оценить сервис</span>
                        <div className="success-page__stars-container">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button key={star} type="button" className="success-page__star-btn">
                                    <img src={successStar} alt={`Ставить ${star} звезд`} className="success-page__star-img" />
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="success-page__submit-block">
                        <button 
                            type="button" 
                            className="success-page__btn-submit"
                            onClick={handleGoHome}>
                            ВЕРНУТЬСЯ НА ГЛАВНУЮ
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
