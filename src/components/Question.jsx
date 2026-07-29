import { clsx } from "clsx"

const Question = ({ question, questionIndex, selectedAnswers, handleSelectedAnswer, isQuizChecked }) => {

    const answerButtons = question.answers.map((answer) => {

        const isSelected = selectedAnswers[questionIndex] === answer
        const isCorrect = answer === question.correctAnswer
        const isWrong = isSelected && !isCorrect


        return (
            <button
                className={clsx(
                    'answer-btn',
                    {
                        'correct-answer': isQuizChecked && isCorrect,
                        'wrong-answer': isQuizChecked && isWrong,
                        'selected-answer': !isQuizChecked && isSelected,
                    }
                )}
                key = { answer }
                onClick={() => handleSelectedAnswer(answer, questionIndex)}
                disabled={isQuizChecked && !isCorrect}
            >
                { answer }
            </button >
        )
    })

return (
    <div className="question-div">
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