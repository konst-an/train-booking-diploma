import React from 'react';
import FilterSidebar from '../Sidebars/FilterSidebar/FilterSidebar'; // Подключаем общий сайдбар
import './SeatSelection.css';

function SeatSelection() {
    return (
        <div className="seat-selection__container">
            
            {/* ЛЕВАЯ КОЛОНКА: (Фильтры + Последние билеты) */}
            <FilterSidebar />

            {/* ПРАВАЯ КОЛОНКА: Основная информация выбора мест */}
            <main className="seat-selection__main">
                <h2 className="seat-selection__title">Выбор мест</h2>
            
            </main>
        </div>
    );
}

export default SeatSelection;
