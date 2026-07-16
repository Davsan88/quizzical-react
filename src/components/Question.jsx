const Question = ({ question }) => {



    return (
        <div className="question-div">
            <h2 className="question-header">
                {question.question}
            </h2>

        </div>
    )
}

export default Question