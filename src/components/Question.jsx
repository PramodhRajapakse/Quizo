const Question = ({ questions }) => {
  return (
    <div>
      {questions.map((questionObj) => (
        <div key={questionObj.id} style={{ marginBottom: '20px' }}>
          {/* Display the question */}
          <h3>{questionObj.question}</h3>
          <p>{questionObj.description}</p>

          {/* Display the answers */}
          <ul>
            {Object.entries(questionObj.answers)
              .filter(([key, value]) => value) // Filter out null answers
              .map(([key, value]) => (
                <li key={key}>
                  {value}
                </li>
              ))}
          </ul>

          {/* Show the correct answer explanation */}
          {questionObj.explanation && (
            <p>
              <strong>Explanation:</strong> {questionObj.explanation}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Question;