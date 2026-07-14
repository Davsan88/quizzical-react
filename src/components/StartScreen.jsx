const StartScreen = ({ onStartQuiz }) => {


    return (
        <section className="start-screen-section">
            <h1 className="start-screen-header">
                Quizzical
            </h1>
            <p className="start-screen-text">
                What do you know?
            </p>
            <button 
                className="start-screen-btn"
                onClick={onStartQuiz}   
            >
                Start quiz
            </button>
        </section>
    )
}

export default StartScreen