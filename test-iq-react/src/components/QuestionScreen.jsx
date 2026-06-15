import { useState, useEffect } from 'react'
import { generarPreguntas, TEMAS } from '../data'
import './QuestionScreen.css'

function QuestionScreen({ tema, cantidad, onComplete }) {
  const [preguntas, setPreguntas] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [respuestas, setRespuestas] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [showExplanation, setShowExplanation] = useState(false)
  const [isAnswered, setIsAnswered] = useState(false)

  useEffect(() => {
    const preguntasGeneradas = generarPreguntas(tema, cantidad)
    setPreguntas(preguntasGeneradas)
  }, [tema, cantidad])

  const currentPregunta = preguntas[currentIndex]
  const temaNombre = TEMAS.find(t => t.clave === tema)?.nombre || tema

  const handleAnswer = () => {
    if (!inputValue.trim()) {
      alert('Por favor ingresa una respuesta')
      return
    }

    const esCorrecta = inputValue.trim().toLowerCase() === 
                       currentPregunta.respuestaCorrecta.toLowerCase()
    
    setRespuestas([
      ...respuestas,
      {
        pregunta: currentPregunta.pregunta,
        respuestaUsuario: inputValue,
        respuestaCorrecta: currentPregunta.respuestaCorrecta,
        esCorrecta,
        explicacion: currentPregunta.explicacion
      }
    ])
    
    setIsAnswered(true)
  }

  const handleNext = () => {
    if (currentIndex < preguntas.length - 1) {
      setCurrentIndex(currentIndex + 1)
      setInputValue('')
      setShowExplanation(false)
      setIsAnswered(false)
    } else {
      // Completar test
      const aciertos = respuestas.filter(r => r.esCorrecta).length
      const porcentaje = (aciertos / respuestas.length) * 100
      const iqEstimado = Math.round(70 + (porcentaje / 100) * 60)
      
      onComplete({
        aciertos,
        total: respuestas.length,
        porcentaje: porcentaje.toFixed(2),
        iqEstimado,
        respuestas
      })
    }
  }

  if (preguntas.length === 0) return <div className="container"><p>Cargando preguntas...</p></div>

  const progreso = ((currentIndex + 1) / preguntas.length) * 100

  return (
    <div className="container question-screen">
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progreso}%` }}></div>
      </div>
      
      <div className="question-header">
        <span className="tema-badge">{temaNombre}</span>
        <span className="counter">Pregunta {currentIndex + 1} de {preguntas.length}</span>
      </div>

      <h2 className="question-text">{currentPregunta.pregunta}</h2>

      {!isAnswered ? (
        <div className="answer-form">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Escribe tu respuesta..."
            onKeyPress={(e) => e.key === 'Enter' && handleAnswer()}
            autoFocus
          />
          <button className="primary" onClick={handleAnswer}>
            Responder
          </button>
        </div>
      ) : (
        <div className="answer-feedback">
          {respuestas[respuestas.length - 1].esCorrecta ? (
            <div className="correct">
              ✓ ¡Respuesta correcta!
            </div>
          ) : (
            <div>
              <div className="incorrect">
                ✗ Respuesta incorrecta
              </div>
              <div className="correct">
                Respuesta correcta: {respuestas[respuestas.length - 1].respuestaCorrecta}
              </div>
              <div className="explanation">
                <strong>Explicación:</strong> {respuestas[respuestas.length - 1].explicacion}
              </div>
            </div>
          )}
          
          <button className="primary" onClick={handleNext}>
            {currentIndex < preguntas.length - 1 ? 'Siguiente' : 'Ver Resultados'}
          </button>
        </div>
      )}
    </div>
  )
}

export default QuestionScreen
