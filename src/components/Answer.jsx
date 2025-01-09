import React, { useState } from 'react';

const Answer = ({ answers, onSelectAnswer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerClick = (key) => {
    setSelectedAnswer(key);
    onSelectAnswer(key); // Pass the selected answer key to the parent component
  };

  return (
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {Object.entries(answers)
        .filter(([key, value]) => value) // Filter out null answers
        .map(([key, value]) => (
          <li
            key={key}
            onClick={() => handleAnswerClick(key)}
            style={{
              padding: '10px',
              margin: '5px 0',
              cursor: 'pointer',
              border: '1px solid #ccc',
              borderRadius: '5px',
              backgroundColor: selectedAnswer === key ? '#d3f9d8' : '#f9f9f9',
              transition: 'background-color 0.3s',
            }}
          >
            {value}
          </li>
        ))}
    </ul>
  );
};

export default Answer;
