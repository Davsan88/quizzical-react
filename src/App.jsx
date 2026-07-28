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


  const insertAnswerAtRandomIndex = (arr, x) => {
    const randomIndex = Math.floor(Math.random() * (arr.length + 1))
    const shuffledArr = [...arr.slice(0, randomIndex), x, ...arr.slice(randomIndex)]
    return shuffledArr
  }


  const curateQuestions = (questions) => {

    return (
      questions.map(({ question, correct_answer, incorrect_answers }) => {
        const decodedCorrectAnswer = decode(correct_answer)

        return {
          question: decode(question),
          correctAnswer: decodedCorrectAnswer,
          answers: insertAnswerAtRandomIndex(incorrect_answers.map(answer => decode(answer)), decodedCorrectAnswer) 
        }
      })
    )
  }


  const quizQuestions = curateQuestions(questions)


  const handleStartQuiz = () => {
    setScreenStatus('loading')
    fetchQuestions()
  }

  console.log(quizQuestions)


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
              questions={quizQuestions}
              handleStartQuiz={handleStartQuiz}
            /> :
            screenStatus
      }
    </main>
  )
}
export default App
