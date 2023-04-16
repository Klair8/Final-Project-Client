import React, { useState } from 'react';

const AlphabetGameBoard = () => {

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  
  const [currentLetter, setCurrentLetter] = useState('');
  
  // Function to handle letter click
  const handleLetterClick = (letter) => {
    setCurrentLetter(letter);
  
  };
  
  return (
    <div>
      <h1>Alphabet Game</h1>
      <div className="alphabet-board">
        {alphabet.map((letter) => (
          <div
            key={letter}
            className={`letter ${currentLetter === letter ? 'selected' : ''}`}
            onClick={() => handleLetterClick(letter)}
          >
            {letter}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlphabetGameBoard;
