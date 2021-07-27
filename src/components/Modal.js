import React from 'react'
import './Modal.css'

export default function Modal({ name, toggleModal, details }) {
    return (
        <div id={`modal-${name}`} className="modal" style={{"display": "none"}}>
            <div className="modal-content">
                <span id={`btn-${name}`} className="close" onClick={toggleModal}>&times;</span>
                <p>{details}</p>
            </div>
        </div>
    )
}