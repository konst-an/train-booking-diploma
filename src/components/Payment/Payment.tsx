import { useNavigate } from 'react-router-dom';
import './Payment.css';
import TripDetailsSidebar from '../Sidebars/TripDetailsSidebar/TripDetailsSidebar';

function Payment() {
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // Предотвращаем перезагрузку страницы браузером
        
        // В будущем здесь будет сбор данных оплаты и отправка запроса
        
        navigate('/verification'); // Перенаправляем на страницу проверки
    };

    return (
        <div className="payment__container">
            <TripDetailsSidebar />

            {/* Обернули правую колонку в тег формы с обработчиком отправки */}
            <form className="payment__main" onSubmit={handleSubmit}>
                
                {/* 1. БЕЛАЯ КАРТОЧКА С ПОЛЯМИ */}
                <div className="payment__card">
                    
                    {/* СЕКЦИЯ 1: ПЕРСОНАЛЬНЫЕ ДАННЫЕ */}
                    <div className="payment__section">
                        <div className="payment__section-header">
                            <h3 className="payment__section-title">Персональные данные</h3>
                        </div>

                        <div className="payment__section-body">
                            <div className="payment__form-row payment__form-row--fio">
                                <div className="payment__field-group">
                                    <label className="payment__label">Фамилия</label>
                                    <input type="text" className="payment__input" placeholder="Мартынюк" />
                                </div>
                                <div className="payment__field-group">
                                    <label className="payment__label">Имя</label>
                                    <input type="text" className="payment__input" placeholder="Ирина" />
                                </div>
                                <div className="payment__field-group">
                                    <label className="payment__label">Отчество</label>
                                    <input type="text" className="payment__input" placeholder="Эдуардовна" />
                                </div>
                            </div>

                            <div className="payment__form-row">
                                <div className="payment__field-group">
                                    <label className="payment__label">Контактный телефон</label>
                                    <input type="tel" className="payment__input payment__input--phone" placeholder="+7 953 322 18 18" />
                                </div>
                            </div>

                            <div className="payment__form-row">
                                <div className="payment__field-group">
                                    <label className="payment__label">E-mail</label>
                                    <input type="email" className="payment__input payment__input--email" placeholder="inbox@gmail.ru" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* СЕКЦИЯ 2: СПОСОБ ОПЛАТЫ */}
                    <div className="payment__section payment__section--methods">
                        <div className="payment__section-header">
                            <h3 className="payment__section-title">Способ оплаты</h3>
                        </div>

                        <div className="payment__section-body">
                            <div className="payment__method-group">
                                <label className="payment__checkbox-label">
                                    <input type="radio" name="payment-method" value="online" className="payment__checkbox-input" defaultChecked />
                                    <span className="payment__checkbox-custom"></span>
                                    <span className="payment__checkbox-text">Онлайн</span>
                                </label>

                                <div className="payment__sub-methods">
                                    <span className="payment__sub-text">Банковской картой</span>
                                    <span className="payment__sub-text">PayPal</span>
                                    <span className="payment__sub-text">Visa QIWI Wallet</span>
                                </div>
                            </div>

                            <div className="payment__method-group payment__method-group--cash">
                                <label className="payment__checkbox-label">
                                    <input type="radio" name="payment-method" value="cash" className="payment__checkbox-input" />
                                    <span className="payment__checkbox-custom"></span>
                                    <span className="payment__checkbox-text">Наличными</span>
                                </label>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="payment__submit-block">
                    <button type="submit" className="payment__btn-submit">
                        КУПИТЬ БИЛЕТЫ
                    </button>
                </div>

            </form>
        </div>
    );
}

export default Payment;
