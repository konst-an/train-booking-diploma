import { useState } from 'react';
import iconMinusCircle from '../../assets/icon-minus-circle.svg';
import iconPlusCircle from '../../assets/icon-plus-circle.svg';
import iconClose from '../../assets/icon-close.svg';
import iconArrowDownGray from '../../assets/icon-arrow-down-gray.svg';

interface PassengerCardProps {
    number: number;
    onRemove: () => void;
    onErrorChange: (hasError: boolean) => void; 
}

export default function PassengerCard({ number, onRemove, onErrorChange }: PassengerCardProps) {
    const [isExpanded, setIsExpanded] = useState(true);
    const [isTypeOpen, setIsTypeOpen] = useState(false);
    const [ticketType, setTicketType] = useState('Взрослый');

    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');

    const [gender, setGender] = useState<string>('W');
    const [birthDate, setBirthDate] = useState<string>('');

    const [passportSeries, setPassportSeries] = useState('');
    const [docNumber, setDocNumber] = useState('');  

    const [isDocOpen, setIsDocOpen] = useState(false);
    const [docType, setDocType] = useState('Паспорт РФ');

    const [docError, setDocError] = useState<string>('');
    const [isDocValid, setIsDocValid] = useState(false);

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
                            <input 
                                type="text" 
                                className="passengers__input" 
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                required 
                                pattern="^[А-Яа-яЁёA-Za-z\-]+$" 
                            />
                        </div>

                        <div className="passengers__field-group">
                            <label className="passengers__label">Имя</label>
                            <input 
                                type="text" 
                                className="passengers__input" 
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required 
                                pattern="^[А-Яа-яЁёA-Za-z\-]+$" 
                            />
                        </div>

                        <div className="passengers__field-group">
                            <label className="passengers__label">Отчество</label>
                            <input 
                                type="text" 
                                className="passengers__input" 
                                value={middleName}
                                onChange={(e) => setMiddleName(e.target.value)}
        
                                pattern="^[А-Яа-яЁёA-Za-z\-]+$" 
                            />
                        </div>
                    </div>

                    {/* СТРОКА 3: ПОЛ И ДАТА РОЖДЕНИЯ */}
                    <div className="passengers__form-row passengers__form-row--personal">
                        
                        {/* Выбор Пола */}
                        <div className="passengers__field-group">
                            <label className="passengers__label">Пол</label>
                            <div className="passengers__gender-group">
                                
                                {/* Мужской */}
                                <label className="passengers__gender-label">
                                    <input 
                                        type="radio" 
                                        name={`gender-${number}`} 
                                        value="M" 
                                        className="passengers__gender-radio" 
                                        checked={gender === 'M'}
                                        onChange={() => setGender('M')}
                                    />
                                    <span className="passengers__gender-btn">М</span>
                                </label>
                                
                                {/* Женский */}
                                <label className="passengers__gender-label">
                                    <input 
                                        type="radio" 
                                        name={`gender-${number}`} 
                                        value="W" 
                                        className="passengers__gender-radio" 
                                        checked={gender === 'W'}
                                        onChange={() => setGender('W')}
                                    />
                                    <span className="passengers__gender-btn">Ж</span>
                                </label>
                            </div>
                        </div>
                        
                        {/* Дата рождения */}
                        <div className="passengers__field-group">
                            <label className="passengers__label">Дата рождения</label>
                            <input 
                                type="text" 
                                className="passengers__input passengers__input--date" 
                                placeholder="ДД.ММ.ГГГГ" 
                                value={birthDate}
                                required
                                pattern="^([0-2][0-9]|3[0-1])\.(0[1-9]|1[0-2])\.(19[0-9][0-9]|20[0-9][0-9])$"
                                maxLength={10} 
                                onChange={(e) => {
                                    
                                    let value = e.target.value.replace(/\D/g, '');
                                    
                                    if (value.length > 2) {
                                        value = value.slice(0, 2) + '.' + value.slice(2);
                                    }
                                    
                                    if (value.length > 5) {
                                        value = value.slice(0, 5) + '.' + value.slice(5, 9);
                                    }
                                    
                                    setBirthDate(value);
                                }}
                            />
                        </div>
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
                                        <li className={`passengers__dropdown-item ${docType === 'Паспорт РФ' ? 'passengers__dropdown-item--selected' : ''}`} onClick={() => { setDocType('Паспорт РФ'); setIsDocOpen(false); setDocError(''); }}>Паспорт РФ</li>
                                        <li className={`passengers__dropdown-item ${docType === 'Свидетельство о рождении' ? 'passengers__dropdown-item--selected' : ''}`} onClick={() => { setDocType('Свидетельство о рождении'); setIsDocOpen(false); setDocError(''); }}>Свидетельство о рождении</li>
                                    </ul>
                                )}
                            </div>
                        </div>
                        
                        {/* Серия (показывается только для Паспорта РФ) */}
                        {docType === 'Паспорт РФ' && (
                            <div className="passengers__field-group">
                                <label className="passengers__label">Серия</label>
                                <input 
                                    type="text" 
                                    className="passengers__input passengers__input--series" 
                                    placeholder="_ _ _ _" 
                                    value={passportSeries}
                                    onChange={(e) => setPassportSeries(e.target.value)}
                                    maxLength={4}
                                    required /* <-- Добавили. Браузер потребует заполнить, если блок виден на экране */
                                />
                            </div>
                        )}
                        
                        {/* Номер (есть у любого документа) */}
                        <div className="passengers__field-group">
                            <label className="passengers__label">Номер</label>
                            <input 
                                type="text" 
                                required /* <-- ДОБАВИЛИ ОБЯЗАТЕЛЬНОСТЬ ДЛЯ HTML5 */
                                className={`passengers__input passengers__input--number ${docError ? 'passengers__input--error' : ''}`} 
                                placeholder={docType === 'Паспорт РФ' ? '_ _ _ _ _ _' : 'VIII-ЫП-123456'} 
                                value={docNumber}
                                onChange={(e) => {
                                    setDocNumber(e.target.value);
                                    setDocError('');
                                    setIsDocValid(false); 
                                }}
                                onBlur={() => {
                                    if (!docNumber) {
                                        setDocError('');
                                        setIsDocValid(false);
                                        return;
                                    }

                                    if (docType === 'Свидетельство о рождении') {
                                        const svidPattern = /^[I|V|X|L|C|D|M]+[\s\-][А-ЯЁ]{2}[\s\-]\d{6}$/i;
                                        if (!svidPattern.test(docNumber)) {
                                            setDocError('Номер свидетельства о рождении указан некорректно. Пример: VIII-ЫП-123456');
                                            setIsDocValid(false);
                                        } else {
                                            setDocError('');
                                            setIsDocValid(true); 
                                        }
                                    } else {
                                        setDocError('');
                                        setIsDocValid(false);
                                    }
                                }}
                            />
                        </div>
                    </div>

                    {/* 1. БЛОК ОШИБКИ */}
                    {docError && (
                        <div className="passengers__error-banner">
                            <div className="passengers__error-icon-box">
                                <span className="passengers__error-close-icon">×</span>
                            </div>
                            <p className="passengers__error-text">
                                Номер свидетельства о рождении указан некорректно<br />
                                Пример: <span className="passengers__error-example">VIII-ЫП-123456</span>
                            </p>
                        </div>
                    )}

                    {/* 2. БЛОК УСПЕШНОГО ВВОДА */}
                    {isDocValid && !docError && (
                        <div className="passengers__success-banner">
                            <div className="passengers__success-info">
                                <div className="passengers__success-icon-box">
                                    <span className="passengers__success-check-icon">✓</span>
                                </div>
                                <span className="passengers__success-text">Готово</span>
                            </div>
                            <button type="button" className="passengers__btn-next passengers__btn-next--success">
                                Следующий пассажир
                            </button>
                        </div>
                    )}

                    {/* КНОПКА СЛЕДУЮЩИЙ ПАССАЖИР — Скроется автоматически, если есть ошибка */}
                    {!docError && !isDocValid && (
                        <div className="passengers__card-footer">
                            <button type="button" className="passengers__btn-next">Следующий пассажир</button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
