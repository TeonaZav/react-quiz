function Question({
  dispatch,
  answer,
  questionObj: { question, options, correctOption },
}) {
  const hasAnswerd = answer !== null;
  return (
    <div>
      <h4>{question}</h4>
      <div className="options">
        {options.map((option, i) => (
          <button
            key={`${option}_${i}`}
            disabled={hasAnswerd ? true : false}
            className={`btn btn-option ${i === answer ? "answer" : ""} ${
              hasAnswerd ? (i === correctOption ? "correct" : "wrong") : ""
            }`}
            onClick={() => dispatch({ type: "newAnswer", payload: i })}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;
