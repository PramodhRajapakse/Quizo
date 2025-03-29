import React from 'react';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

const ResultModal = ({ isOpen, score, totalQuestions, onClose, onRetry }) => {
  const navigate = useNavigate();

  // Calculate percentage score
  const percentage = Math.round((score / totalQuestions) * 100);

  // Determine feedback based on percentage
  const getFeedback = () => {
    if (percentage >= 90) return "Excellent! You're a master!";
    if (percentage >= 70) return "Great job! You know your stuff!";
    if (percentage >= 50) return "Good effort! Room for improvement.";
    return "Keep practicing! You'll get better.";
  };

  const handleHomeClick = () => {
    onClose();
    navigate('/');
  };

  return (
    <MDBModal show={isOpen} tabIndex='-1' staticBackdrop>
      <MDBModalDialog centered>
        <MDBModalContent>
          <MDBModalHeader className="bg-light">
            <MDBModalTitle>Quiz Results</MDBModalTitle>
          </MDBModalHeader>

          <MDBModalBody className="text-center">
            <h2 className="mb-4">Your Score</h2>

            <div className="score-display mb-3">
              <div className="score-circle" style={{
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                backgroundColor: 'var(--dark)',
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '0 auto'
              }}>
                <h1>{score}</h1>
                <p className="mb-0">out of {totalQuestions}</p>
              </div>
            </div>

            <div className="percentage-bar mb-3">
              <div className="progress" style={{ height: '25px' }}>
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{
                    width: `${percentage}%`,
                    backgroundColor: 'var(--success)'
                  }}
                  aria-valuenow={percentage}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {percentage}%
                </div>
              </div>
            </div>

            <p className="feedback-text mt-4">{getFeedback()}</p>
          </MDBModalBody>

          <MDBModalFooter>
            <MDBBtn
              color="secondary"
              onClick={onRetry}
              style={{ backgroundColor: 'var(--dark)' }}
            >
              Try Again
            </MDBBtn>
            <MDBBtn
              onClick={handleHomeClick}
              style={{ backgroundColor: 'var(--dark)' }}
            >
              Back to Home
            </MDBBtn>
          </MDBModalFooter>
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
  );
};

export default ResultModal;