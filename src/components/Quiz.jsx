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

    console.log(questionCards)
    return (
        <section className="quiz-section">
            {questionCards}
        </section>
    )
}

export default Quiz