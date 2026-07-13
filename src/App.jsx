import { useState } from 'react'
import './App.css'
import StartScreen from './components/StartScreen'

function App() {
  
  const [screenStatus, setScreenStatus] = useState('intro')
  const intro = screenStatus === 'intro'


  const handleStartQuiz = () => {
    setScreenStatus('playing')
  }

  return (
    <main>
      {intro ?
        <StartScreen 
          onStartQuiz={handleStartQuiz}
        /> : screenStatus
      }
    </main>
  )
}

export default App
