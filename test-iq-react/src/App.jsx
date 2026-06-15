import { useState } from 'react'
import SelectionScreen from './components/SelectionScreen'
import QuestionScreen from './components/QuestionScreen'
import ResultScreen from './components/ResultScreen'
import './App.css'

function App() {
  const [screen, setScreen] = useState('selection') // selection, questions, results
  const [tema, setTema] = useState(null)
  const [cantidad, setCantidad] = useState(10)
  const [results, setResults] = useState(null)

  const handleStartTest = (selectedTema, selectedCantidad) => {
    setTema(selectedTema)
    setCantidad(selectedCantidad)
    setScreen('questions')
  }

  const handleTestComplete = (resultsData) => {
    setResults(resultsData)
    setScreen('results')
  }

  const handleRestart = () => {
    setScreen('selection')
    setTema(null)
    setResults(null)
  }

  return (
    <div className="app">
      {screen === 'selection' && (
        <SelectionScreen onStart={handleStartTest} />
      )}
      {screen === 'questions' && (
        <QuestionScreen 
          tema={tema} 
          cantidad={cantidad}
          onComplete={handleTestComplete}
        />
      )}
      {screen === 'results' && (
        <ResultScreen 
          results={results}
          tema={tema}
          onRestart={handleRestart}
        />
      )}
    </div>
  )
}

export default App
