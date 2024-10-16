// src/components/DogModal.jsx
import React from 'react';
import './DogModal.css';

const DogModal = ({ dog, onClose }) => {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <span className="close-button" onClick={onClose}>&times;</span>
                <h2>{dog.name}</h2>
                <img src={dog.image} alt={dog.name} className="modal-image" />
                <p>{dog.description}</p>
            </div>
        </div>
    );
};

export default DogModal;
