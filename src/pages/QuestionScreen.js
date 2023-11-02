import { useEffect } from "react";
import Question from "../components/Question";
import qData from "../services/questions.json";
import { useState } from "react";

const QuestionScreen = () => {
  const [questions, setQuestions] = useState([]);
  const [activeQuestion, setActiveQuestion]= useState(null);
  const vals = ["Jake", "Sonny", "Jo"];

  useEffect(() => {
    setQuestions(qData.results);
    setActiveQuestion(qData.results[0]);
    console.log(qData.results[0].question)
  }, [])

  const handleAnswerSelect = () => {

  }
  
return (
    <div className="d-flex justify-content-center">
        <Question question={activeQuestion != null ? activeQuestion.question: "Loading"} choices={vals} handleAnswerSelection={handleAnswerSelect}/>
    </div>
)
}

export default QuestionScreen;
