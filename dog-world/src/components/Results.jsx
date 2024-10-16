// src/components/Results.jsx
import React from 'react';

const Results = ({ breed }) => {
  return (
    <div className="results">
      <h2>Congratulations!</h2>
      <p>Your ideal dog breed is a {breed}.</p>
    </div>
  );
};

export default Results;
