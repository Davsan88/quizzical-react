const StartScreen = ({ onStartQuiz }) => {


    return (
        <section>
            <h1 className="start-screen-header">
                Quizzical
            </h1>
            <p className="start-screen-text">
                What do you know?
            </p>
            <button 
                className="start-screen-button"
                onClick={onStartQuiz}   
            >
                Start quiz
            </button>
        </section>
    )
}

export default StartScreen