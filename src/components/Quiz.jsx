import { useState } from "react"
import Question from "./Question"

const Quiz = ({ questions }) => {

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
                        <p className="quiz-results-para">
                            {`You scored ${quizScore}/5 correct answers`}
                        </p>
                        <button className="play-again-btn">
                            Play again
                        </button>
                    </> :
                    <>

                        <button
                            className="check-btn"
                            onClick={handleCheckAnswers}
                        >
                            Check answers
                        </button>
                    </>
                }
            </div>
        </section>
    )
}

export default Quiz