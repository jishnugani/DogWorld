// src/App.jsx
import React from 'react';
import './App.css';
import Header from './components/Header';
import Facts from './components/Facts';
import CuteDogs from './components/CuteDogs';
import DogNameGenerator from './components/DogNameGenerator';
import DogPersonalityTest from './components/DogPersonalityTest';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Facts />
      <CuteDogs />
      <DogNameGenerator />
      <DogPersonalityTest />
      <Footer />
    </div>
  );
}

export default App;
