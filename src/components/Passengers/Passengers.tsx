import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Passengers.css'; 
import TripDetailsSidebar from '../Sidebars/TripDetailsSidebar/TripDetailsSidebar';

import iconPlusOrange from '../../assets/icon-plus-orange.svg';

import PassengerCard from './PassengerCard'; 
import type { PassengerData } from './PassengerCard';

interface PassengerWithMeta {
    id: string;
    hasError: boolean;
    data: PassengerData;
}

function Passengers() {
    const navigate = useNavigate();
    const location = useLocation();

    const createEmptyPassengerData = (): PassengerData => ({
        ticketType: 'Взрослый',
        lastName: '',
        firstName: '',
        middleName: '',
        gender: 'W',
        birthDate: '',
        docType: 'Паспорт РФ',
        passportSeries: '',
        docNumber: '',
        isLimitedMobility: false
    });

    const [passengers, setPassengers] = useState<PassengerWithMeta[]>(() => {
        const savedPassengers = location.state?.passengers as PassengerData[] | undefined;
        
        if (savedPassengers && savedPassengers.length > 0) {
            return savedPassengers.map((p, index) => ({
                id: index === 0 ? 'passenger-first' : crypto.randomUUID(),
                hasError: false,
                data: p
            }));
        }
        
        return [{ id: 'passenger-first', hasError: false, data: createEmptyPassengerData() }];
    });

    const handleAddPassenger = () => {
        const nextPassenger = {
            id: crypto.randomUUID(),
            hasError: false,
            data: createEmptyPassengerData()
        };
        setPassengers([...passengers, nextPassenger]);
    };

    const handleRemovePassenger = (idToRemove: string) => {
        if (passengers.length === 1) return; 
        
        setPassengers(passengers.filter(passenger => passenger.id !== idToRemove));
    };

    const handlePassengerDataChange = (idToUpdate: string, updatedData: PassengerData) => {
        setPassengers(prev => 
            prev.map(p => p.id === idToUpdate ? { ...p, data: updatedData } : p)
        );
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        const hasAnyError = passengers.some(passenger => passenger.hasError === true);
        
        if (hasAnyError) {
            return; 
        }

        const cleanPassengersData = passengers.map(p => p.data);
        navigate('/payment', { state: { passengers: cleanPassengersData } });
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
                            data={passenger.data}
                            onRemove={() => handleRemovePassenger(passenger.id)} 
                            onChange={(updatedData) => handlePassengerDataChange(passenger.id, updatedData)}
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
