import { useState } from 'react'
import { TEMAS } from '../data'
import './SelectionScreen.css'

function Icon({ type, className = '' }) {
  const commonProps = {
    className: `selection-icon ${className}`,
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': 'true'
  }

  const icons = {
    brain: (
      <svg {...commonProps}>
        <path d="M9.4 4.2c-2.2 0-4 1.7-4 3.9v.4a3.4 3.4 0 0 0-1.5 5.7 3.4 3.4 0 0 0 3.4 4.9c.8 1 1.8 1.6 3 1.6 1 0 1.7-.8 1.7-1.8V6c0-1-.8-1.8-1.8-1.8h-.8Z" />
        <path d="M14.6 4.2c2.2 0 4 1.7 4 3.9v.4a3.4 3.4 0 0 1 1.5 5.7 3.4 3.4 0 0 1-3.4 4.9c-.8 1-1.8 1.6-3 1.6-1 0-1.7-.8-1.7-1.8V6c0-1 .8-1.8 1.8-1.8h.8Z" />
        <path d="M7.2 9.3c1.1.1 1.9.8 2.2 1.8M7.2 15.2c1.2 0 2.1-.7 2.6-1.7M16.8 9.3c-1.1.1-1.9.8-2.2 1.8M16.8 15.2c-1.2 0-2.1-.7-2.6-1.7M4.1 3.6l1.1 1.1M19.9 3.6l-1.1 1.1M4.1 20.4l1.1-1.1M19.9 20.4l-1.1-1.1" />
      </svg>
    ),
    book: (
      <svg {...commonProps}>
        <path d="M5 4.5h5.2c1 0 1.8.8 1.8 1.8v13.2c0-1-.8-1.8-1.8-1.8H5V4.5Z" />
        <path d="M19 4.5h-5.2c-1 0-1.8.8-1.8 1.8v13.2c0-1 .8-1.8 1.8-1.8H19V4.5Z" />
        <path d="M7.5 8h2.2M14.3 8h2.2" />
      </svg>
    ),
    grid: (
      <svg {...commonProps}>
        <path d="M5 5h5v5H5V5ZM14 5h5v5h-5V5ZM5 14h5v5H5v-5ZM14 14h5v5h-5v-5Z" />
      </svg>
    ),
    hash: (
      <svg {...commonProps}>
        <path d="M9.5 4 8.3 20M15.7 4l-1.2 16M5 9h15M4 15h15" />
      </svg>
    ),
    shield: (
      <svg {...commonProps}>
        <path d="M12 21s7-3.5 7-9.7V5.8L12 3 5 5.8v5.5C5 17.5 12 21 12 21Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    target: (
      <svg {...commonProps}>
        <path d="M12 21a9 9 0 1 0-8.4-5.8" />
        <path d="M12 17a5 5 0 1 0-4.6-3.1" />
        <path d="M12 13a1 1 0 1 0-1-1" />
        <path d="m13 11 6-6M16 5h3v3" />
      </svg>
    ),
    chart: (
      <svg {...commonProps}>
        <path d="M4 19h16" />
        <path d="M6 16v-4h3v4H6ZM11 16V8h3v8h-3ZM16 16V5h3v11h-3Z" />
        <path d="m6 9 4-3 3 2 5-5" />
      </svg>
    ),
    trophy: (
      <svg {...commonProps}>
        <path d="M8 4h8v4.5a4 4 0 0 1-8 0V4Z" />
        <path d="M8 6H5v2a3 3 0 0 0 3 3M16 6h3v2a3 3 0 0 1-3 3M12 13v4M9 20h6M10 17h4" />
      </svg>
    )
  }

  return icons[type]
}

function SelectionScreen({ onStart }) {
  const [selectedTema, setSelectedTema] = useState('matematicas')
  const [cantidad, setCantidad] = useState(10)

  const handleStart = () => {
    onStart(selectedTema, parseInt(cantidad, 10))
  }

  return (
    <main className="selection-page">
      <div className="selection-dots" aria-hidden="true" />
      <div className="selection-arc selection-arc-top" aria-hidden="true" />
      <div className="selection-arc selection-arc-bottom" aria-hidden="true" />
      <div className="selection-lines selection-lines-left" aria-hidden="true" />
      <div className="selection-lines selection-lines-right" aria-hidden="true" />

      <section className="selection-panel">
        <div className="selection-hero">
          <div className="brain-badge">
            <Icon type="brain" />
          </div>

          <h1>Test IQ</h1>
          <div className="title-rule" />
          <h2>¡Pon a prueba tu inteligencia!</h2>
          <p>
            Responde preguntas de diferentes temas y descubre que tan lejos
            puede llegar tu mente.
          </p>
        </div>

        <div className="selection-form">
          <div className="section-heading">
            <span className="heading-icon">
              <Icon type="book" />
            </span>
            <h3>Configura tu test</h3>
          </div>

          <label className="option-card">
            <span className="option-icon">
              <Icon type="grid" />
            </span>
            <span className="option-content">
              <span className="option-label">Selecciona un tema</span>
              <select
                value={selectedTema}
                onChange={(e) => setSelectedTema(e.target.value)}
              >
                {TEMAS.map((t) => (
                  <option key={t.clave} value={t.clave}>
                    {t.nombre}
                  </option>
                ))}
              </select>
            </span>
          </label>

          <label className="option-card">
            <span className="option-icon">
              <Icon type="hash" />
            </span>
            <span className="option-content">
              <span className="option-label">Numero de preguntas</span>
              <input
                type="number"
                min="1"
                max="100"
                value={cantidad}
                onChange={(e) => setCantidad(e.target.value)}
              />
            </span>
          </label>

          <button className="start-button" onClick={handleStart}>
            <span>Comenzar Test</span>
            <span className="button-arrow">-&gt;</span>
          </button>

          <p className="privacy-note">
            <Icon type="shield" />
            Tus resultados son privados y se guardan de forma segura.
          </p>
        </div>

        <div className="selection-features">
          <article className="feature-item">
            <span className="feature-icon">
              <Icon type="target" />
            </span>
            <span>
              <strong>Variedad de temas</strong>
              <small>Preguntas de multiples categorias.</small>
            </span>
          </article>
          <article className="feature-item">
            <span className="feature-icon">
              <Icon type="chart" />
            </span>
            <span>
              <strong>Desafia tu mente</strong>
              <small>Mide tu conocimiento y mejora cada dia.</small>
            </span>
          </article>
          <article className="feature-item">
            <span className="feature-icon">
              <Icon type="trophy" />
            </span>
            <span>
              <strong>Supera tus limites</strong>
              <small>Compite contigo mismo y alcanza tu mejor puntaje.</small>
            </span>
          </article>
        </div>
      </section>
    </main>
  )
}

export default SelectionScreen
