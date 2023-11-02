const Answer = ({ onChange, index, choice, selectedAnswer }) => {
    // Convert index to alphabet character to show ABCD before question
    const label = String.fromCharCode(65 + index)
    return (
      <div key={index}>
        <div className="d-flex">
          <p>{label}.</p>
          <input
            name={choice}
            // radio is for checked one option and checkbox is for checked multiple options
            type="radio"
            //checked={choice}
            onChange={onChange}
          />
          {choice}
        </div>
      </div>
    )
  }
  
  export default Answer;