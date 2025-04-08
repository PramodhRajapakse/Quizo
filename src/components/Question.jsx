import React from "react";
import { MDBCardBody, MDBBtn } from "mdb-react-ui-kit";

const Question = ({ question, selectedAnswer, onSelectAnswer }) => {
  if (!question) return null; // Prevent rendering if no question is provided

  return (
    <div>
      <MDBCardBody className="text-center">
        <h4 className="mb-3">{question.question}</h4>
        {question.description && <p className="text-muted">{question.description}</p>}

        {/* Answer options */}
        <div className="d-flex flex-column gap-2">
          {Object.entries(question.answers).map(([key, value]) =>
            value ? ( // Only render non-null answers
              <MDBBtn
                key={key}
                style={{ backgroundColor: selectedAnswer === key ? "#a7c957" : "#F1F6F9" }}
                className="w-100 border-0 text-black"
                onClick={() => onSelectAnswer(key, question.correct_answers[`${key}_correct`] === "true")}
              >
                {value}
              </MDBBtn>
            ) : null
          )}
        </div>
      </MDBCardBody>
    </div>
  );
};

export default Question;

