import React, { useState, useEffect } from "react";
import { MDBCard, MDBCardBody, MDBBtn } from "mdb-react-ui-kit";

const QuestionCard = ({ questionData, currentQuestion, totalQuestions, onNext }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [timeLeft, setTimeLeft] = useState(30);

  useEffect(() => {
    setTimeLeft(30);
    setSelectedAnswer(null);
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [questionData]);

  const handleAnswerClick = (answerKey) => {
    if (!selectedAnswer) {
      setSelectedAnswer(answerKey);
    }
  };

  return (
    <div className="quiz-container d-flex justify-content-center align-items-center">
      <MDBCard className="question-card">
        <MDBCardBody>
          <div className="d-flex justify-content-between align-items-center">
            <h3 className="quiz-title">Quiz</h3>
            <div className="timer-box">
              <span className="time-label">Time:</span>
              <span className="time-value">{timeLeft}</span>
            </div>
          </div>
          <hr />
          <h4 className="question-text">{questionData.question}</h4>
          <div className="answers-container">
            {Object.entries(questionData.answers).map(([key, value]) => (
              value && (
                <button
                  key={key}
                  className={`answer-btn ${selectedAnswer === key ? (questionData.correct_answers[`${key}_correct`] === "true" ? "correct" : "incorrect") : ""}`}
                  onClick={() => handleAnswerClick(key)}
                >
                  {value}
                </button>
              )
            ))}
          </div>
          <div className="navigation">
            <span className="question-progress">
              {currentQuestion} of {totalQuestions} Questions
            </span>
            <MDBBtn color="danger" onClick={onNext} disabled={!selectedAnswer}>
              Next
            </MDBBtn>
          </div>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
};

export default QuestionCard;
