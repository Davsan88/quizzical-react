import Question from "./Question"

const Quiz = ({ questions }) => {

   
    const questionCards = questions.map((question, index) => {
        return (
            <Question
                key={index}
                question={question}
            />
        )
    })

    return (
        <section className="quiz-section">
            {questionCards}
        </section>
    )
}

export default Quiz