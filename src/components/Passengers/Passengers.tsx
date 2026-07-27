import React from 'react';
import './Passengers.css'; // Подключаем стили страницы
import TripDetailsSidebar from '../Sidebars/TripDetailsSidebar/TripDetailsSidebar';

function Passengers() {
    return (
        <div className="passengers__container">
            
            {/* БЛОК ДЛЯ НОВОГО САЙДБАРА */}
            <TripDetailsSidebar />

            {/* ОСНОВНОЙ КОНТЕНТ СТРАНИЦЫ */}
            <main className="passengers__main">
                <div className="passengers__content-placeholder">
                    Заглушка страницы пассажиров
                </div>
            </main>

        </div>
    );
}

export default Passengers;
