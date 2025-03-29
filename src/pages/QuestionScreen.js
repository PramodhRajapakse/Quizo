import React, { useState, useEffect } from 'react';
import '../assets/styles/QuestionScreen.css';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Modal from 'react-modal';
import Question from '../components/Question';
import ResultModal from '../components/ResultModal';
import { MDBCard, MDBCardBody, MDBBtn, MDBSpinner } from 'mdb-react-ui-kit';

Modal.setAppElement('#root');

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [noQuestions, setNoQuestions] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResultModal, setShowResultModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const location = useLocation();
  const category = location.state;
  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    setIsLoading(true);
    // Fetch questions from the API
    const fetchData = async () => {
      try {
        const response = await axios.get('https://quizapi.io/api/v1/questions/', {
          headers: {
            'X-Api-Key': apiKey,
          },
          params: {
            'category': category.category.name
          }
        });
        if (response.data.length === 0) {
          setNoQuestions(true);
        } else {
          setQuestions(response.data);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [category]);

  // Handle answer selection
  const handleAnswerSelection = (answerKey, isCorrect) => {
    setSelectedAnswer(answerKey);
    if (isCorrect) setScore(prevScore => prevScore + 1);
  };

  // Handle next question
  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      setSelectedAnswer(null); // Reset selected answer for new question
    } else {
      // Show the result modal instead of an alert
      setShowResultModal(true);
    }
  };

  // Handle retry quiz
  const handleRetryQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResultModal(false);
  };

  // Handle close modal
  const handleCloseModal = () => {
    setShowResultModal(false);
  };

  return (
    <div className="quiz-container">
      {noQuestions ? (
        <div className='text-center p-4'>
          <h1>No questions for this category yet.</h1>
        </div>
      ) : (
        <>
          <MDBCard className="p-4 text-center">
            <MDBCardBody>
              <h2>Quiz Time!</h2>

              {isLoading ? (
                // Loading spinner
                <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "200px" }}>
                  <MDBSpinner size='lg' output='status' style={{ width: "5rem", height: "5rem"}}>
                    <span className='visually-hidden'>Loading...</span>
                  </MDBSpinner>
                </div>
              ) : (
                // Render questions once loaded
                questions.length > 0 && (
                  <Question
                    question={questions[currentQuestionIndex]}
                    selectedAnswer={selectedAnswer}
                    onSelectAnswer={handleAnswerSelection}
                  />
                )
              )}

              {/* Navigation Controls - only show when not loading */}
              {!isLoading && (
                <div className="mt-3">
                  <p>Question {currentQuestionIndex + 1} of {questions.length}</p>
                  <MDBBtn
                    style={{ backgroundColor: 'var(--dark)' }}
                    onClick={handleNextQuestion}
                    className='btn w-50 border-0'
                    disabled={!selectedAnswer}
                  >
                    {currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next'}
                  </MDBBtn>
                </div>
              )}
            </MDBCardBody>
          </MDBCard>

          {/* Result Modal */}
          <ResultModal
            isOpen={showResultModal}
            score={score}
            totalQuestions={questions.length}
            onClose={handleCloseModal}
            onRetry={handleRetryQuiz}
          />
        </>
      )}
    </div>
  );
};

export default Quiz;