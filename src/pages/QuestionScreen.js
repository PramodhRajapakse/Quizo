import React, { useState, useEffect } from 'react';
import '../assets/styles/QuestionScreen.css';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import he from 'he';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Set the root element for screen readers


const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState({});
  const [questions, setQuestions] = useState([]);
  const [noQuestions, setNoQuestions] = useState(false);
  let [score, setScore] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  let [ansCount, setAnsCount] = useState(0);
  const location = useLocation();
  const category = location.state;
  const navigate = useNavigate();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(`http://localhost:8080/questions/category/${category.category._id}`);
  //       if (response.data.length === 0) {
  //         setNoQuestions(true);
  //       } else {
  //         const processedQuestionsArray = response.data.map((question) => ({
  //           ...question,
  //           options: [question.correctAnswer, ...question.incorrectAnswers]
  //         }));
  //         setQuestions(processedQuestionsArray);
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchData();
  // }, [category]);

  const closeModal = () => {
    setModalOpen(false);
  };

  const customStyles = {
    content: {
      maxWidth: '400px',
      maxHeight: '200px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Add shadow for a card-like appearance
      borderRadius: '10px', // Add border-radius for rounded corners
      padding: '20px', // Add padding for content spacing
      margin: 'auto',
      textAlign: 'center',
    },
  };

  const handleAnswerSelect = (questionId, selectedAnswer) => {
    calculateScore(questionId, selectedAnswer);
    setUserAnswers({
      ...userAnswers,
      [questionId]: selectedAnswer,
    });
  };

  const calculateScore = (id, selected) => {
    ansCount++;
    setAnsCount(ansCount);
    if (ansCount === 10) {
      setModalOpen(true);
    } else {
      questions.forEach((question) => {
        if (question._id === id)
          if (question.correctAnswer === selected) {
            score++;
            setScore(score);
          }
      })
    }

  };

  return (
    <div className="quiz-container">
      {noQuestions ? (
        <div className='text-center p-4'>
          <h1>No questions for this category yet.</h1>
        </div>
      ) : (
        <>
          <h1>Quiz Time!</h1>
          <div className="score-container">
          </div>
          <Modal
            isOpen={modalOpen}
            onRequestClose={closeModal}
            contentLabel="Quiz Results"
            style={customStyles}
            onAfterClose={() => navigate("/categories")}
          >
            <h2>Your Score</h2>
            <p>Your score: {score} out of {questions.length}</p>
            <button className='bg-dark text-light text-center mt-3' onClick={closeModal}>Continue</button>
          </Modal>
          {questions.map((question) => (
            <div key={question._id} className="question-container">
              <p className="question-text">{he.decode(question.question)}</p>
              {question.type === 'multiple' ? (
                <ul className="answer-options">
                  {question.options.map((option) => (
                    <li key={option}>
                      <button
                        className={userAnswers[question._id] === option ? 'selected' : ''}
                        onClick={() => handleAnswerSelect(question._id, option)}
                        disabled={userAnswers[question._id] !== undefined}
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
                      onClick={() => handleAnswerSelect(question._id, option)}
                      disabled={userAnswers[question._id] !== undefined}
                      className={userAnswers[question._id] === option ? 'selected' : ''}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Quiz;
