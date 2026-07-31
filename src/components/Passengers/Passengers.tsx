import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Passengers.css'; 
import TripDetailsSidebar from '../Sidebars/TripDetailsSidebar/TripDetailsSidebar';
import PassengerCard from './PassengerCard'; 
import iconPlusOrange from '../../assets/icon-plus-orange.svg';

function Passengers() {
    const navigate = useNavigate();
    const [passengers, setPassengers] = useState([
        { id: 'passenger-first', hasError: false } /* Шаг 1: добавили дефолтный статус ошибки */
    ]);

    const handleAddPassenger = () => {
        const nextPassenger = {
            id: crypto.randomUUID(),
            hasError: false /* Шаг 1: новые карточки тоже без ошибок по умолчанию */
        };
        setPassengers([...passengers, nextPassenger]);
    };

    const handleRemovePassenger = (idToRemove: string) => {
        if (passengers.length === 1) return; 
        
        setPassengers(passengers.filter(passenger => passenger.id !== idToRemove));
    };


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        // Шаг 3: Проверяем, есть ли ошибка в номерах свидетельств хоть у одного пассажира
        const hasAnyError = passengers.some(passenger => passenger.hasError === true);
        
        if (hasAnyError) {
            // Если где-то горит ошибка, прерываем выполнение и никуда не переходим
            return; 
        }

        // Если всё верно — пускаем дальше
        navigate('/payment');
    };

    return (
        <div className="passengers__container">
            <TripDetailsSidebar />

            <main className="passengers__main">
                <form className="passengers__form" onSubmit={handleSubmit}>
                    
                    {/* РЕНДЕР КАРТОЧЕК */}
                    {passengers.map((passenger, index) => (
                        <PassengerCard 
                            key={passenger.id}      
                            number={index + 1}
                            onRemove={() => handleRemovePassenger(passenger.id)} 
                            onErrorChange={(hasError) => {
                                setPassengers(prev => 
                                    prev.map(p => p.id === passenger.id ? { ...p, hasError } : p)
                                );
                            }}
                        />
                    ))}

                    {/* КНОПКА: ДОБАВИТЬ ПАССАЖИРА */}
                    <div className="passengers__add-container">
                        <button type="button" className="passengers__btn-add" onClick={handleAddPassenger}>
                            <span className="passengers__add-title">Добавить пассажира</span>
                            <img src={iconPlusOrange} alt="Добавить" className="passengers__add-img" />
                        </button>
                    </div>

                    {/* БЛОК КНОПКИ «ДАЛЕЕ» */}
                    <div className="passengers__submit-block">
                        <button type="submit" className="passengers__btn-submit">ДАЛЕЕ</button>
                    </div>
                </form>
            </main>
        </div>
    );
}

export default Passengers;
