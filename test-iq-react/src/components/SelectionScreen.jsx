import { useState } from 'react'
import { TEMAS } from '../data'
import './SelectionScreen.css'

function SelectionScreen({ onStart }) {
  const [selectedTema, setSelectedTema] = useState('matematicas')
  const [cantidad, setCantidad] = useState(10)

  const handleStart = () => {
    onStart(selectedTema, parseInt(cantidad))
  }

  return (
    <div className="container selection-screen">
      <h1>Test IQ - Múltiples Temas</h1>
      <p>Bienvenido al test de inteligencia con preguntas de varios temas.</p>
      
      <div className="form-group">
        <label htmlFor="tema"><strong>Selecciona un tema:</strong></label>
        <select 
          id="tema"
          value={selectedTema} 
          onChange={(e) => setSelectedTema(e.target.value)}
        >
          {TEMAS.map(t => (
            <option key={t.clave} value={t.clave}>
              {t.nombre}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="cantidad"><strong>Número de preguntas:</strong></label>
        <input 
          id="cantidad"
          type="number" 
          min="1" 
          max="10"
          value={cantidad}
          onChange={(e) => setCantidad(e.target.value)}
        />
      </div>

      <button className="primary" onClick={handleStart}>
        Comenzar Test
      </button>
    </div>
  )
}

export default SelectionScreen
