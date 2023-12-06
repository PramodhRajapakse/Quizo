import React, { useState, useEffect, Children } from 'react';
import '../assets/styles/QuestionScreen.css';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import he from 'he';

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState({});
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const category = location.state;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/questions/category/${category.category._id}`);
        const processedQuestionsArray = response.data.map((question) => ({
          ...question,
          options: [question.correctAnswer, ...question.incorrectAnswers]
        }));
        setQuestions(processedQuestionsArray);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [category])


  const handleAnswerSelect = (questionId, selectedAnswer) => {
    setUserAnswers({
      ...userAnswers,
      [questionId]: selectedAnswer,
    });
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((question) => {
      const userAnswer = userAnswers[question.id];
      if (userAnswer === question.correctAnswer) {
        score += 1;
      }
    });
    return score;
  };

  return (
    <div className="quiz-container">
      {loading ? (
        <div className='loader'>
          Loading...
        </div>
      ) : (
        <>
          <h1>Quiz Time!</h1>
          {questions?.map((question) => (
            <div key={question._id} className="question-container">
              <p className="question-text">{he.decode(question.question)}</p>
              {question.type === 'multiple' ? (
                <ul className="answer-options">
                  {question.options.map((option) => (
                    <li key={option} className={userAnswers[question.id] === option ? 'selected' : ''}>
                      <button
                        onClick={() => handleAnswerSelect(question.id, option)}
                        disabled={userAnswers[question.id] !== undefined}
                      >
                        {option}
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="answer-options">
                  {question.options.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleAnswerSelect(question.id, option)}
                      disabled={userAnswers[question.id] !== undefined}
                      className={userAnswers[question.id] === option ? 'selected' : ''}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="score-container">
            {Object.keys(userAnswers).length === questions.length && (
              <p>Your score: {calculateScore()} out of {questions.length}</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
