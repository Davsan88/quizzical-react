import { useState } from "react"
import Question from "./Question"

const Quiz = ({ questions, handleStartQuiz }) => {

    const [selectedAnswers, setSelectedAnswers] = useState([])
    const [isQuizChecked, setIsQuizChecked] = useState(false)

    let quizScore = 0

    questions.forEach((question, index) => {
        if (question.correctAnswer === selectedAnswers[index]) {
            quizScore++
        }
    })

    const handleSelectedAnswer = (answer, questionIndex) => {
        setSelectedAnswers(prevAnswers => {
            const updatedAnswers = [...prevAnswers]
            updatedAnswers[questionIndex] = answer
            return updatedAnswers
        })
    }

    const handleCheckAnswers = () => {
        setIsQuizChecked(true)
    }

    const handlePlayAgain = () => {
        setIsQuizChecked(false)
        handleStartQuiz()
    }



    const questionCards = questions.map((question, index) => {
        return (
            <Question
                key={index}
                questionIndex={index}
                question={question}
                selectedAnswers={selectedAnswers}
                handleSelectedAnswer={handleSelectedAnswer}
                isQuizChecked={isQuizChecked}
            />
        )
    })

    return (
        <section className="quiz-section container">
            {questionCards}
            <div className="quiz-btn-div container">
                {isQuizChecked ?
                    <>
                        <div className="quiz-results">
                            <p>Quiz complete</p>
                            <span>{quizScore} / 5</span>
                            <p>Correct answers</p>
                        </div>
                        <button className="play-again-btn"
                            onClick={handlePlayAgain}
                        >
                            Play again
                        </button>
                    </> :
                    <button
                        className="check-btn"
                        onClick={handleCheckAnswers}
                    >
                        Check answers
                    </button>

                }
            </div>
        </section>
    )
}

export default Quiz