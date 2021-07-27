import React from 'react';
import Modal from '../Modal';
import './ProductCard.css';

export default function ProductCard({ name, image, description, price, available, time, details }) {
    function toggleModal(event){
        let id = event.target.id.split("-");
        var element = document.getElementById(`modal-${id[1]}`);
        element.style.display === "none" ? element.style.display = "block" : element.style.display = "none";
    }

    return (
        <div className="card">
            <figure className='card-head' data-category={name}>
                <button className="card-button-buy"><i className="fas fa-shopping-cart"></i></button>
                <img className="card-img" alt={name} src={image}></img>
                <button id={`btn-${name}`} className="card-button-details" onClick={toggleModal}>Details</button>
            </figure>
            <div className="card-body">
                <p>{description}</p>
                <div className="card-body-details">
                    <p className="card-body-price">{price}</p>
                    <p className="card-body-available">{available}</p>
                </div>
                <p>{time}</p>
            </div>
            <Modal name={name} toggleModal={toggleModal} details={details}/>
        </div>
    )
}