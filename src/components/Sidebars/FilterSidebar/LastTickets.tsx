import { useState } from 'react';
import './LastTickets.css';

import ticketFeatures from '../../../assets/ticket-features.svg'; 

const MOCK_LAST_TICKETS = [
  {
    id: 1,
    fromCity: "Санкт-Петербург",
    toCity: "Самара",
    stationFrom: "Курский",
    stationTo: "Московский",
    price: "2 500"
  },
  {
    id: 2,
    fromCity: "Москва",
    toCity: "Казань",
    stationFrom: "Курский",
    stationTo: "Московский",
    price: "3 500"
  },
  {
    id: 3,
    fromCity: "Казань",
    toCity: "Нижний Новгород",
    stationFrom: "Курский",
    stationTo: "Московский",
    price: "3 800"
  }
];

export default function LastTickets() {
  return (
    <div className="sidebar-left__last-tickets last-tickets">
      <h3 className="last-tickets__main-title">Последние билеты</h3>
      
      {MOCK_LAST_TICKETS.map((ticket) => (
        <div className="last-tickets__card ticket-card" key={ticket.id}>
          <div className="ticket-card__row">
            
            {/* Блок ОТКУДА */}
            <div className="ticket-card__city-block">
              <span className="ticket-card__city-name">{ticket.fromCity}</span>
              <span className="ticket-card__station">
                {ticket.stationFrom} <br /> вокзал
              </span>
            </div>
            
            {/* Блок КУДА */}
            <div className="ticket-card__city-block ticket-card__city-block--right">
              <span className="ticket-card__city-name">{ticket.toCity}</span>
              <span className="ticket-card__station">
                {ticket.stationTo} <br /> вокзал
              </span>
            </div>

          </div>

          <div className="ticket-card__footer">
            <img src={ticketFeatures} alt="" className="ticket-card__features" />
            <div className="ticket-card__price">
              <span className="ticket-card__price-from">от</span>
              <span className="ticket-card__price-value">{ticket.price}</span>
              <span className="ticket-card__price-currency">₽</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
