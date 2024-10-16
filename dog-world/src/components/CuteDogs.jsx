// src/components/CuteDogs.jsx
import React, { useState } from 'react';
import DogModal from './DogModal';
import './CuteDogs.css';

const dogData = [
    {
        id: 1,
        name: 'Buddy',
        image: '/dog1.jpg',
        description: 'Buddy is a playful dog who loves fetching sticks and swimming.'
    },
    {
        id: 2,
        name: 'Luna',
        image: '/dog2.jpg',
        description: 'Luna is a gentle dog who enjoys long walks and cuddling.'
    },
    {
        id: 3,
        name: 'Max',
        image: '/dog3.jpg',
        description: 'Max is an energetic dog with a knack for agility training.'
    }
];

const CuteDogs = () => {
    const [selectedDog, setSelectedDog] = useState(null);

    const handleImageClick = (dog) => {
        setSelectedDog(dog);
    };

    const closeModal = () => {
        setSelectedDog(null);
    };

    return (
        <section className="cute-dogs-section">
            <h2 className="cute-dogs-title">MEET SOME CUTE DOGS</h2>
            <div className="cute-dogs-images">
                {dogData.map(dog => (
                    <img
                        key={dog.id}
                        src={dog.image}
                        alt={dog.name}
                        onClick={() => handleImageClick(dog)}
                        className="dog-image"
                    />
                ))}
            </div>
            {selectedDog && <DogModal dog={selectedDog} onClose={closeModal} />}
        </section>
    );
};

export default CuteDogs;
