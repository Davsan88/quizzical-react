import { useState } from 'react'
import './App.css'
import StartScreen from './components/StartScreen'
import Quiz from './components/Quiz'
import { decode } from 'html-entities'

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
          question:
          decode(question),
          correctAnswer:
          decode(correct_answer),
          incorrectAnswers:
          incorrect_answers.map(answer => decode(answer))
      }))
  }

  var arr = [1,2,3,4,5]

  const insertAnswerAtRandomIndex = (arr, x) => {
    const randomIndex = Math.floor(Math.random() * (arr.length + 1))
    const shuffledArr = [...arr.slice(0, randomIndex), x, ...arr.slice(randomIndex)]
    return shuffledArr  
  }

  console.log(insertAnswerAtRandomIndex(arr, 9))

  const curatedQuestions = curateQuestions(questions)


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
