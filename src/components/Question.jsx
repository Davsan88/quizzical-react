import { clsx } from "clsx"

const Question = ({ question, questionIndex, selectedAnswers, handleSelectedAnswer }) => {

    const answerButtons = question.answers.map((answer) => {
        
        const isSelected = selectedAnswers[questionIndex] === answer

        return (
            <button 
                className={clsx(
                    'answer-btn',
                    isSelected && 'selected-answer',
                )} 
                key={answer}
                onClick={() => {handleSelectedAnswer(answer, questionIndex)}}
            >
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