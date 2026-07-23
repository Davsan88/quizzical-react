import { useState } from "react"
import Question from "./Question"

const Quiz = ({ questions }) => {

    const [selectedAnswers, setSelectedAnswers] = useState([])

    const handleSelectedAnswer = (answer, questionIndex) => {
        setSelectedAnswers(prevAnswers => {
            const updatedAnswers = [...prevAnswers]
            updatedAnswers[questionIndex] = answer
            return updatedAnswers
    })
    }

    const questionCards = questions.map((question, index) => {
        return (
            <Question
                key={index}
                questionIndex={index}
                question={question}
                selectedAnswers={selectedAnswers}
                handleSelectedAnswer={handleSelectedAnswer}
            />
        )
    })

    return (
        <section className="quiz-section">
            {questionCards}
            <button className="check-btn">
                Check answers
            </button>
        </section>
    )
}

export default Quiz