import React from 'react';
import './TicketCard.css';

export default function TicketCard({ name, image, description, price, available, time }) {
    function buyTickets(name){
        let id = name.split("e")[0];
        console.log(id);
    }

    return (
        <div className="card">
            <figure className='card-head' data-category={name}>
                <button id={`btn-${name}`} className="card-button-buy" onClick={buyTickets.bind(this, name)}><i className="fas fa-shopping-cart"></i></button>
                <img className="card-img" alt={name} src={image}></img>
            </figure>
            <div className="card-body">
                <p>{description}</p>
                <p>{price}</p>
                <p>{available}</p><p>{time}</p>
            </div>
        </div>
    )
}
