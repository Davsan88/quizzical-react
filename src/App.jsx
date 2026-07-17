import { useState } from 'react'
import './App.css'
import StartScreen from './components/StartScreen'
import Quiz from './components/Quiz'

function App() {

  const [screenStatus, setScreenStatus] = useState('intro')
  const [questions, setQuestions] = useState([])

  const intro = screenStatus === 'intro'
  const loading = screenStatus === 'loading'
  const playing = screenStatus === 'playing'

  const fetchQuestions = async () => {
      const questionsRes = await fetch('https://opentdb.com/api.php?amount=5&type=multiple')
      const data = await questionsRes.json()

      setQuestions(data.results)
      setScreenStatus('playing')
  }

  const handleStartQuiz = () => {
    setScreenStatus('loading')
    fetchQuestions()
  }

  const curateQuestions = (questions) => {
      return questions.map(({
          question, 
          correct_answer, 
          incorrect_answers
      }) => ({
          question,
          correct_answer, 
          incorrect_answers
      }))
  }

  const curatedQuestions = curateQuestions(questions)


  console.log(questions)

  return (
    <main className='container'>
      {intro ?
        <StartScreen
          onStartQuiz={handleStartQuiz}
        /> :
          loading ?
            <h1 className="start-screen-header container">
              LOADING QUESTIONS...
            </h1> : 
              playing ? 
                <Quiz 
                  questions={curatedQuestions}
                /> :
                  screenStatus
      }
    </main>
  )
}

export default App
