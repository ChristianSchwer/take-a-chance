import React from 'react';
import './TicketCard.css';

export default function TicketCard({ name, image, description, price, available, time }) {
    console.log(name)
    return (
        <div className="card">
            <figure className='card-head' data-category={name}>
                <button className="card-button-buy"><i className="fas fa-shopping-cart"></i></button>
                <img className="card-img" alt={name} src={image}></img>
            </figure>
            <div className="card-body">
                <p>{description}</p>
                <p>{price}</p>
                <p>{available}</p><p>{time}</p>
            {/* <p>+</p> */}
            </div>
        </div>
    )
}
