import React, { useState, useEffect } from 'react';
import '../assets/styles/QuestionScreen.css';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import he from 'he';
import Modal from 'react-modal';
import Question from '../components/Question';

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
  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://quizapi.io/api/v1/questions/', {
          headers: {
            'X-Api-Key': apiKey, // Set the API key here
          },
          params: {
            'category': category.category.name
          }
        });
        console.log(response.data)
        if (response.data.length === 0) {
          setNoQuestions(true);
        } else {
          setQuestions(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [category]);


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
            <Question questions={questions} />
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
