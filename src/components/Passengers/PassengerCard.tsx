import { useState } from 'react';
import iconMinusCircle from '../../assets/icon-minus-circle.svg';
import iconPlusCircle from '../../assets/icon-plus-circle.svg';
import iconClose from '../../assets/icon-close.svg';
import iconArrowDownGray from '../../assets/icon-arrow-down-gray.svg';

interface PassengerCardProps {
    number: number;
    onRemove: () => void;
}

export default function PassengerCard({ number, onRemove }: PassengerCardProps) {
    const [isExpanded, setIsExpanded] = useState(true);
    const [isTypeOpen, setIsTypeOpen] = useState(false);
    const [ticketType, setTicketType] = useState('Взрослый');
    const [isDocOpen, setIsDocOpen] = useState(false);
    const [docType, setDocType] = useState('Паспорт РФ');

    const [numberValue, setNumberValue] = useState('');

    return (
        <div className="passengers__card">
            {/* ШАПКА КАРТОЧКИ */}
            <div className="passengers__card-header">
                <div className="passengers__card-title-group">
                    <button type="button" className="passengers__btn-toggle" onClick={() => setIsExpanded(!isExpanded)}>
                        <img src={isExpanded ? iconMinusCircle : iconPlusCircle} alt="Свернуть" className="passengers__toggle-img" />
                    </button>
                    <h3 className="passengers__card-title">Пассажир {number}</h3>
                </div>
                <button type="button" className="passengers__btn-close" aria-label="Удалить" onClick={onRemove}>
                    <img src={iconClose} alt="Удалить" className="passengers__close-img" />
                </button>
            </div>

            {/* ТЕЛО КАРТОЧКИ */}
            {isExpanded && (
                <div className="passengers__card-body">
                    {/* СТРОКА 1: ТИП БИЛЕТА */}
                    <div className="passengers__form-row passengers__form-row--type-select">
                        <div className="passengers__dropdown">
                            <button type="button" className={`passengers__dropdown-toggle ${isTypeOpen ? 'passengers__dropdown-toggle--active' : ''}`} onClick={() => setIsTypeOpen(!isTypeOpen)}>
                                <span className="passengers__dropdown-current">{ticketType}</span>
                                <img src={iconArrowDownGray} alt="Открыть" className="passengers__dropdown-arrow" />
                            </button>
                            {isTypeOpen && (
                                <ul className="passengers__dropdown-menu">
                                    <li className={`passengers__dropdown-item ${ticketType === 'Взрослый' ? 'passengers__dropdown-item--selected' : ''}`} onClick={() => { setTicketType('Взрослый'); setIsTypeOpen(false); }}>Взрослый</li>
                                    <li className={`passengers__dropdown-item ${ticketType === 'Детский' ? 'passengers__dropdown-item--selected' : ''}`} onClick={() => { setTicketType('Детский'); setIsTypeOpen(false); }}>Детский</li>
                                </ul>
                            )}
                        </div>
                    </div>

                    {/* СТРОКА 2: РЯД ФИО */}
                    <div className="passengers__form-row passengers__form-row--fio">
                        <div className="passengers__field-group">
                            <label className="passengers__label">Фамилия</label>
                            <input type="text" className="passengers__input" />
                        </div>
                        <div className="passengers__field-group">
                            <label className="passengers__label">Имя</label>
                            <input type="text" className="passengers__input" />
                        </div>
                        <div className="passengers__field-group">
                            <label className="passengers__label">Отчество</label>
                            <input type="text" className="passengers__input" />
                        </div>
                    </div>

                    {/* СТРОКА 3: ПОЛ И ДАТА РОЖДЕНИЯ */}
                    <div className="passengers__form-row passengers__form-row--personal">
                        <div className="passengers__field-group">
                            <label className="passengers__label">Пол</label>
                            <div className="passengers__gender-group">
                                <label className="passengers__gender-label"><input type="radio" name={`gender-${number}`} value="M" className="passengers__gender-radio" /><span className="passengers__gender-btn">М</span></label>
                                <label className="passengers__gender-label"><input type="radio" name={`gender-${number}`} value="W" className="passengers__gender-radio" defaultChecked /><span className="passengers__gender-btn">Ж</span></label>
                            </div>
                        </div>
                        <div className="passengers__field-group"><label className="passengers__label">Дата рождения</label><input type="text" className="passengers__input passengers__input--date" placeholder="ДД/ММ/ГГ" /></div>
                    </div>

                    {/* СТРОКА 4: ЧЕКБОКС */}
                    <div className="passengers__form-row passengers__form-row--checkbox">
                        <label className="passengers__checkbox-label"><input type="checkbox" className="passengers__checkbox-input" /><span className="passengers__checkbox-custom"></span><span className="passengers__checkbox-text">ограниченная подвижность</span></label>
                    </div>

                   {/* СТРОКА 5: ДОКУМЕНТЫ */}
                    <div className="passengers__form-row passengers__form-row--docs">
                        <div className="passengers__field-group">
                            <label className="passengers__label">Тип документа</label>
                            <div className={`passengers__dropdown ${docType === 'Свидетельство о рождении' ? 'passengers__dropdown--wide' : ''}`}>
                                <button type="button" className={`passengers__dropdown-toggle ${isDocOpen ? 'passengers__dropdown-toggle--active' : ''}`} onClick={() => setIsDocOpen(!isDocOpen)}>
                                    <span className="passengers__dropdown-current">{docType}</span>
                                    <img src={iconArrowDownGray} alt="Открыть" className="passengers__dropdown-arrow" />
                                </button>
                                {isDocOpen && (
                                    <ul className="passengers__dropdown-menu">
                                        <li className={`passengers__dropdown-item ${docType === 'Паспорт РФ' ? 'passengers__dropdown-item--selected' : ''}`} onClick={() => { setDocType('Паспорт РФ'); setIsDocOpen(false); }}>Паспорт РФ</li>
                                        <li className={`passengers__dropdown-item ${docType === 'Свидетельство о рождении' ? 'passengers__dropdown-item--selected' : ''}`} onClick={() => { setDocType('Свидетельство о рождении'); setIsDocOpen(false); }}>Свидетельство о рождении</li>
                                    </ul>
                                )}
                            </div>
                        </div>
                        {docType === 'Паспорт РФ' && (
                            <div className="passengers__field-group">
                                <label className="passengers__label">Серия</label>
                                <input type="text" className="passengers__input passengers__input--series" placeholder="_ _ _ _" />
                            </div>
                        )}
                        <div className="passengers__field-group">
                            <label className="passengers__label">Номер</label>
                            <input 
                                type="text" 
                                className="passengers__input passengers__input--number" 
                                placeholder="_ _ _ _ _ _" 
                            />
                        </div>
                    </div>

                    {/* КНОПКА СЛЕДУЮЩИЙ ПАССАЖИР */}
                    <div className="passengers__card-footer">
                        <button type="button" className="passengers__btn-next">Следующий пассажир</button>
                    </div>
                </div>
            )}
        </div>
    );
}
