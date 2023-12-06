const Answer = ({ onChange, index, choice, type, selectedAnswer }) => {
	// Convert index to alphabet character to show ABCD before question
	const label = String.fromCharCode(65 + index);
	console.log(selectedAnswer);
	return (
		<div
			className="answerContainer"
			key={index}
			highlightAnswer={selectedAnswer.includes(choice)}
		>
			<label className="answerLabel">
				<span>{label}.</span>
				<input
					name={choice}
					// radio is for checked one option and checkbox is for checked multiple options
					type={type === "MAQs" ? "checkbox" : "radio"}
					checked={selectedAnswer.includes(choice)}
					onChange={onChange}
				/>
				{choice}
			</label>
		</div>
	);
};

export default Answer;
