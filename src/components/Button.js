import React from 'react';
import './Button.css';

export default function Button({ id, className, text, onClick }) {
    return (
        <button id={id} className={className} onClick={onClick}> {text} </button>
    )
}

