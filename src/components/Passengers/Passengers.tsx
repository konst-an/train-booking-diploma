import { useState } from 'react';
import './Passengers.css'; 
import TripDetailsSidebar from '../Sidebars/TripDetailsSidebar/TripDetailsSidebar';

import iconMinusCircle from '../../assets/icon-minus-circle.svg';
import iconClose from '../../assets/icon-close.svg';
import iconArrowDownGray from '../../assets/icon-arrow-down-gray.svg';
import iconPlusCircle from '../../assets/icon-plus-circle.svg';
import iconPlusOrange from '../../assets/icon-plus-orange.svg';

function Passengers() {

    const [isExpanded, setIsExpanded] = useState(true);
    
    const [isOpen, setIsOpen] = useState(false);
    const [ticketType, setTicketType] = useState('Взрослый');
    const handleSelectType = (type: string) => {
        setTicketType(type); 
        setIsOpen(false);   
    };

    const [isDocOpen, setIsDocOpen] = useState(false);
    const [docType, setDocType] = useState('Паспорт РФ');
    
    return (
        <div className="passengers__container">
            <TripDetailsSidebar />

            {/* ОСНОВНОЙ КОНТЕНТ СТРАНИЦЫ */}
            <main className="passengers__main">
        
                <form className="passengers__form" onSubmit={(e) => e.preventDefault()}>
                    
                    {/* КАРТОЧКА ПАССАЖИРА №1 */}
                    <div className="passengers__card">
                        
                        {/* ШАПКА КАРТОЧКИ */}
                        <div className="passengers__card-header">
                            <div className="passengers__card-title-group">
                                <button 
                                    type="button" 
                                    className="passengers__btn-toggle"
                                    onClick={() => setIsExpanded(!isExpanded)}
                                >
                                    {/* Динамически меняем иконку: если открыта — минус, если свернута — плюс */}
                                    <img 
                                        src={isExpanded ? iconMinusCircle : iconPlusCircle} 
                                        alt={isExpanded ? "Свернуть" : "Развернуть"} 
                                        className="passengers__toggle-img" 
                                    />
                                </button>
                                <h3 className="passengers__card-title">Пассажир 1</h3>
                            </div>
                            
                            <button type="button" className="passengers__btn-close" aria-label="Удалить пассажира">
                                <img src={iconClose} alt="Удалить" className="passengers__close-img" />
                            </button>
                        </div>

                         {/* ТЕЛО КАРТОЧКИ */}
                         {isExpanded && (<div className="passengers__card-body">

                            {/* СТРОКА 1: ВЫПАДАЮЩИЙ СПИСОК ТИПА ПАССАЖИРА */}
                            <div className="passengers__form-row passengers__form-row--type-select">
                                <div className="passengers__dropdown">
                                    <button 
                                        type="button" 
                                        className={`passengers__dropdown-toggle ${isOpen ? 'passengers__dropdown-toggle--active' : ''}`}
                                        onClick={() => setIsOpen(!isOpen)}
                                    >
                                        {/* Текст меняется динамически из стейта */}
                                        <span className="passengers__dropdown-current">{ticketType}</span>
                                        <img src={iconArrowDownGray} alt="Открыть" className="passengers__dropdown-arrow" />
                                    </button>

                                    {isOpen && (
                                        <ul className="passengers__dropdown-menu">
                                            <li 
                                                className={`passengers__dropdown-item ${ticketType === 'Взрослый' ? 'passengers__dropdown-item--selected' : ''}`}
                                                onClick={() => handleSelectType('Взрослый')}
                                            >
                                                Взрослый
                                            </li>
                                            <li 
                                                className={`passengers__dropdown-item ${ticketType === 'Детский' ? 'passengers__dropdown-item--selected' : ''}`}
                                                onClick={() => handleSelectType('Детский')}
                                            >
                                                Детский
                                            </li>
                                        </ul>
                                    )}
                                </div>
                            </div>

                             {/* СТРОКА 2: ФИО */}
                            <div className="passengers__form-row passengers__form-row--fio">
                                <div className="passengers__field-group">
                                    <label className="passengers__label">Фамилия</label>
                                    <input type="text" className="passengers__input" defaultValue="Мартынюк" />
                                </div>
                                <div className="passengers__field-group">
                                    <label className="passengers__label">Имя</label>
                                    <input type="text" className="passengers__input" defaultValue="Ирина" />
                                </div>
                                <div className="passengers__field-group">
                                    <label className="passengers__label">Отчество</label>
                                    <input type="text" className="passengers__input" defaultValue="Эдуардовна" />
                                </div>
                            </div>

                            {/* СТРОКА 3: ПОЛ И ДАТА РОЖДЕНИЯ */}
                            <div className="passengers__form-row passengers__form-row--personal">
                                {/* Выбор Пола через скрытые радиокнопки */}
                                <div className="passengers__field-group">
                                    <label className="passengers__label">Пол</label>
                                    <div className="passengers__gender-group">
                                        <label className="passengers__gender-label">
                                            <input type="radio" name="gender-1" value="M" className="passengers__gender-radio" />
                                            <span className="passengers__gender-btn">М</span>
                                        </label>
                                        <label className="passengers__gender-label">
                                            <input type="radio" name="gender-1" value="W" className="passengers__gender-radio" defaultChecked />
                                            <span className="passengers__gender-btn">Ж</span>
                                        </label>
                                    </div>
                                </div>

                                <div className="passengers__field-group">
                                    <label className="passengers__label">Дата рождения</label>
                                    <input type="text" className="passengers__input passengers__input--date" placeholder="ДД/ММ/ГГ" />
                                </div>
                            </div>

                            {/* СТРОКА 4: ЧЕКБОКС (ОГРАНИЧЕННАЯ ПОДВИЖНОСТЬ) */}
                            <div className="passengers__form-row passengers__form-row--checkbox">
                                <label className="passengers__checkbox-label">
                                    <input type="checkbox" className="passengers__checkbox-input" />
                                    <span className="passengers__checkbox-custom"></span>
                                    <span className="passengers__checkbox-text">ограниченная подвижность</span>
                                </label>
                            </div>

                            {/* СТРОКА 5: ДОКУМЕНТЫ */}
                            <div className="passengers__form-row passengers__form-row--docs">
                                
                                {/* Тип документа */}
                                <div className="passengers__field-group">
                                    <label className="passengers__label">Тип документа</label>
                                    {/* Если выбрано свидетельство, добавляется класс passengers__dropdown--wide */}
                                    <div className={`passengers__dropdown ${docType === 'Свидетельство о рождении' ? 'passengers__dropdown--wide' : ''}`}>
                                        <button 
                                            type="button" 
                                            className={`passengers__dropdown-toggle ${isDocOpen ? 'passengers__dropdown-toggle--active' : ''}`}
                                            onClick={() => setIsDocOpen(!isDocOpen)}
                                        >
                                            <span className="passengers__dropdown-current">{docType}</span>
                                            <img src={iconArrowDownGray} alt="Открыть" className="passengers__dropdown-arrow" />
                                        </button>

                                        {isDocOpen && (
                                            <ul className="passengers__dropdown-menu">
                                                <li 
                                                    className={`passengers__dropdown-item ${docType === 'Паспорт РФ' ? 'passengers__dropdown-item--selected' : ''}`}
                                                    onClick={() => { setDocType('Паспорт РФ'); setIsDocOpen(false); }}
                                                >
                                                    Паспорт РФ
                                                </li>
                                                <li 
                                                    className={`passengers__dropdown-item ${docType === 'Свидетельство о рождении' ? 'passengers__dropdown-item--selected' : ''}`}
                                                    onClick={() => { setDocType('Свидетельство о рождении'); setIsDocOpen(false); }}
                                                >
                                                    Свидетельство о рождении
                                                </li>
                                            </ul>
                                        )}
                                    </div>
                                </div>

                                {/* СЕРИЯ: Рендерится только если выбран Паспорт РФ */}
                                {docType === 'Паспорт РФ' && (
                                    <div className="passengers__field-group">
                                        <label className="passengers__label">Серия</label>
                                        <input type="text" className="passengers__input passengers__input--series" placeholder="_ _ _ _" />
                                    </div>
                                )}

                                {/* НОМЕР */}
                                <div className="passengers__field-group">
                                    <label className="passengers__label">Номер</label>
                                    <input
                                        className="passengers__input passengers__input--number" 
                                        placeholder={'_ _ _ _ _ _'} 
                                    />
                                </div>
                            </div>                
                           
                            {/* КНОПКА СЛЕДУЮЩИЙ ПАССАЖИР */}
                            <div className="passengers__card-footer">
                                <button type="button" className="passengers__btn-next">Следующий пассажир</button>
                            </div>
                         </div>)}
                    </div>

                    {/* КНОПКА: ДОБАВИТЬ ПАССАЖИРА */}
                    <div className="passengers__add-container">
                        <button type="button" className="passengers__btn-add">
                            <span className="passengers__add-title">Добавить пассажира</span>
                            {/* Вместо текста теперь выводим правильную SVG-иконку */}
                            <img src={iconPlusOrange} alt="Добавить" className="passengers__add-img" />
                        </button>
                    </div>

                    <div className="passengers__submit-block">
                        <button type="submit" className="passengers__btn-submit">
                            ДАЛЕЕ
                        </button>
                    </div>
                </form>
            </main>
        </div>
    );
}

export default Passengers;

