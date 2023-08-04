function Question({ questionObj: { question, options } }) {
  return (
    <div>
      <h4>{question}</h4>
      <div className="options">
        {options.map((option, i) => (
          <button className="btn btn-option" key={`${option}_${i}`}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;
