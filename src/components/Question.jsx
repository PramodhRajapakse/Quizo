import React, { useState } from 'react';
import Answer from './Answer';

const Question = ({ questions }) => {
  const [selectedAnswers, setSelectedAnswers] = useState({}); // Track selected answers for all questions

  const handleAnswerSelection = (questionId, answerKey) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: answerKey,
    }));
  };

  return (
    <div>
      {questions.map((questionObj) => (
        <div key={questionObj.id} style={{ marginBottom: '30px' }}>
          {/* Display the question */}
          <h3>{questionObj.question}</h3>
          <p>{questionObj.description}</p>

          {/* Render the Answer component */}
          <Answer
            answers={questionObj.answers}
            onSelectAnswer={(answerKey) =>
              handleAnswerSelection(questionObj.id, answerKey)
            }
          />

          {/* Show the selected answer */}
          {selectedAnswers[questionObj.id] && (
            <p>
              <strong>Selected Answer:</strong>{' '}
              {questionObj.answers[selectedAnswers[questionObj.id]]}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Question;
