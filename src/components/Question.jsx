
const Question = ({ question }) => {

    const correctAnswer = question.correctAnswer
    const answers = question.answers

    const answerButtons = answers.map((answer) => {
        return (
            <button className="answer-btn" key={answer}>
                {answer}
            </button>
        )
    })

    return (
        <div className="question-div container">
            <h2 className="question-header">
                {question.question}
            </h2>
            <div className="answers-div">
                {answerButtons}
            </div>

        </div>
    )
}

export default Question