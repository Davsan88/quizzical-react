import { useState } from "react"
import Question from "./Question"

const Quiz = ({ questions }) => {

    const [selectedAnswers, setSelectedAnswers] = useState([])

    let isQuizChecked = false
    

    const handleSelectedAnswer = (answer, questionIndex) => {
        setSelectedAnswers(prevAnswers => {
            const updatedAnswers = [...prevAnswers]
            updatedAnswers[questionIndex] = answer
            return updatedAnswers
        })
    }

    const handleCheckAnswers = () => {
        isQuizChecked = !isQuizChecked
        let quizScore = 0

        questions.forEach((question, index) => {
            if(question.correctAnswer === selectedAnswers[index]) {
                quizScore ++
            }
        })

        console.log(quizScore)
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
            <button 
                className="check-btn"
                onClick={handleCheckAnswers}
            >
                Check answers
            </button>
        </section>
    )
}

export default Quiz