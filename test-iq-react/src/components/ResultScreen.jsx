import { useState } from 'react'
import './ResultScreen.css'

function ResultScreen({ results, tema, onRestart }) {
  const [exported, setExported] = useState(false)

  const exportToJSON = () => {
    const data = {
      tema,
      timestamp: new Date().toISOString(),
      resumen: {
        aciertos: results.aciertos,
        total: results.total,
        porcentaje: results.porcentaje,
        iqEstimado: results.iqEstimado
      },
      respuestas: results.respuestas
    }

    const jsonString = JSON.stringify(data, null, 2)
    const blob = new Blob([jsonString], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `test-iq-${tema}-${Date.now()}.json`
    a.click()
    setExported(true)
    setTimeout(() => setExported(false), 2000)
  }

  const exportToCSV = () => {
    const headers = ['Pregunta', 'Respuesta Usuario', 'Respuesta Correcta', 'Correcto', 'Explicación']
    const rows = results.respuestas.map(r => [
      `"${r.pregunta}"`,
      `"${r.respuestaUsuario}"`,
      `"${r.respuestaCorrecta}"`,
      r.esCorrecta ? 'Sí' : 'No',
      `"${r.explicacion}"`
    ])

    let csv = headers.join(',') + '\n'
    rows.forEach(row => {
      csv += row.join(',') + '\n'
    })

    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `test-iq-${tema}-${Date.now()}.csv`
    a.click()
    setExported(true)
    setTimeout(() => setExported(false), 2000)
  }

  const calcularNivel = (iq) => {
    if (iq >= 130) return 'Muy superior'
    if (iq >= 120) return 'Superior'
    if (iq >= 110) return 'Muy alto'
    if (iq >= 90) return 'Promedio'
    if (iq >= 80) return 'Por debajo del promedio'
    return 'Bajo'
  }

  return (
    <div className="container result-screen">
      <h1>Resultados del Test</h1>

      <div className="results-summary">
        <div className="result-item">
          <span className="label">Aciertos:</span>
          <span className="value">{results.aciertos} de {results.total}</span>
        </div>
        <div className="result-item">
          <span className="label">Porcentaje:</span>
          <span className="value">{results.porcentaje}%</span>
        </div>
        <div className="result-item">
          <span className="label">IQ Estimado:</span>
          <span className="value iq">{results.iqEstimado}</span>
        </div>
        <div className="result-item">
          <span className="label">Nivel:</span>
          <span className="value">{calcularNivel(results.iqEstimado)}</span>
        </div>
      </div>

      <div className="export-section">
        <h3>Exportar Resultados</h3>
        <div className="export-buttons">
          <button className="primary" onClick={exportToJSON}>
            📄 Descargar JSON
          </button>
          <button className="primary" onClick={exportToCSV}>
            📊 Descargar CSV
          </button>
        </div>
        {exported && <p className="export-message">✓ Archivo descargado exitosamente</p>}
      </div>

      <div className="detailed-results">
        <h3>Respuestas Detalladas</h3>
        {results.respuestas.map((r, idx) => (
          <div key={idx} className={`answer-item ${r.esCorrecta ? 'correct' : 'incorrect'}`}>
            <div className="answer-number">Pregunta {idx + 1}</div>
            <div className="answer-question">{r.pregunta}</div>
            <div className="answer-details">
              <div>Tu respuesta: <strong>{r.respuestaUsuario}</strong></div>
              <div>Respuesta correcta: <strong>{r.respuestaCorrecta}</strong></div>
              {!r.esCorrecta && (
                <div className="explanation-detail">
                  <strong>Explicación:</strong> {r.explicacion}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="action-buttons">
        <button className="primary" onClick={onRestart}>
          Hacer Otro Test
        </button>
      </div>
    </div>
  )
}

export default ResultScreen
