import React, { useState } from 'react';
import './DogNameGenerator.css'; // Link to the styles

const DogNameGenerator = () => {
    const dogNames = [
        'Buddy', 'Bella', 'Charlie', 'Max', 'Daisy', 'Bailey', 
        'Lucy', 'Rocky', 'Molly', 'Duke', 'Milo', 'Luna'
    ];

    const [generatedName, setGeneratedName] = useState('');

    const generateName = () => {
        const randomIndex = Math.floor(Math.random() * dogNames.length);
        setGeneratedName(dogNames[randomIndex]);
    };

    return (
        <div className="dog-name-generator">
            <h2>Dog Name Generator</h2>
            <div className="generated-name">
                {generatedName ? <p>Your dog's name is: <strong>{generatedName}</strong></p> : <p>Click to generate a name!</p>}
            </div>
            <button onClick={generateName} className="generate-button">Generate Dog Name</button>
        </div>
    );
};

export default DogNameGenerator;
