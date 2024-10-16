// src/components/DogPersonalityTest.jsx
import React, { useState } from 'react';
import './DogPersonalityTest.css';

const DogPersonalityTest = () => {
  const questions = [
    {
      question: "What's your favorite activity?",
      answers: [
        { text: 'Going for a run', breed: 'Border Collie' },
        { text: 'Snuggling on the couch', breed: 'Bulldog' },
        { text: 'Playing fetch', breed: 'Golden Retriever' },
        { text: 'Exploring the outdoors', breed: 'Siberian Husky' },
      ],
    },
    {
      question: 'What best describes your personality?',
      answers: [
        { text: 'Energetic and active', breed: 'Border Collie' },
        { text: 'Laid-back and relaxed', breed: 'Bulldog' },
        { text: 'Friendly and outgoing', breed: 'Golden Retriever' },
        { text: 'Independent and adventurous', breed: 'Siberian Husky' },
      ],
    },
    {
      question: 'How do you spend your weekends?',
      answers: [
        { text: 'Going on a hike', breed: 'Siberian Husky' },
        { text: 'Chilling at home', breed: 'Bulldog' },
        { text: 'Meeting friends', breed: 'Golden Retriever' },
        { text: 'Playing sports', breed: 'Border Collie' },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedBreed, setSelectedBreed] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (breed) => {
    setSelectedBreed((prev) => ({
      ...prev,
      [breed]: (prev[breed] || 0) + 1,
    }));

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResults(true);
    }
  };

  const getMostFrequentBreed = () => {
    return Object.keys(selectedBreed).reduce((a, b) =>
      selectedBreed[a] > selectedBreed[b] ? a : b
    );
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedBreed({});
    setShowResults(false);
  };

  return (
    <div className="dog-personality-test">
      {showResults ? (
        <div className="result">
          <h2>Your Dog Breed Match is:</h2>
          <p>{getMostFrequentBreed()}</p>
          <button onClick={restartQuiz} className="play-again-btn">
            Play Again
          </button>
        </div>
      ) : (
        <div className="quiz">
          <h2>{questions[currentQuestion].question}</h2>
          <div className="answers">
            {questions[currentQuestion].answers.map((answer, index) => (
              <button key={index} onClick={() => handleAnswer(answer.breed)}>
                {answer.text}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DogPersonalityTest;
