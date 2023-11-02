import Answer from "./Answer";

const Question = ({
    question,
    choices,
    selectedAnswer,
    handleAnswerSelection
  }) => {
    return (
      <div>
        <p>{question}</p>
        <div>
          {choices.map((choice, index) => (
            <Answer
              choice={choice}
              index={index}
              key={index}
              onChange={e => handleAnswerSelection(e, index)}
              selectedAnswer={selectedAnswer}
            />
          ))}
        </div>
      </div>
    )
  }
  
export default Question;