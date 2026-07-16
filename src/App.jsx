import { useState } from 'react'
import './App.css'
import StartScreen from './components/StartScreen'

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
          </h1>
          :
          screenStatus
      }
    </main>
  )
}

export default App
