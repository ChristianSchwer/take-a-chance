import React from 'react';
import './ProductCard.css';

export default function ProductCard({ name, image, description, price, available, time }) {
    console.log(name)
    return (
        <div className="card">
            <figure className='card-head' data-category={name}>
                <button className="card-button-buy"><i className="fas fa-shopping-cart"></i></button>
                <img className="card-img" alt={name} src={image}></img>
                <button className="card-button-details">Details</button>
            </figure>
            <div className="card-body">
                <p>{description}</p>
                <div className="card-body-details">
                    <p className="card-body-price">{price}</p>
                    <p className="card-body-available">{available}</p>
                </div>
                <p>{time}</p>
            {/* <p>+</p> */}
            </div>
        </div>
    )
}