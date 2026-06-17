import { buildQuestions } from './common.js'

const generators = [
  (round) => {
    const m = 50 + round * 5
    const a = 2 + round
    return { pregunta: `¿Cuál es la fuerza si m=${m} kg y a=${a} m/s² (F=ma)?`, respuestaCorrecta: `${m * a}`, explicacion: `F = m * a = ${m} * ${a} = ${m * a} N.` }
  },
  (round) => {
    const t = 5 + round
    const v = 30 + round * 2
    return { pregunta: `¿Cuál es la velocidad si se recorren ${v * t} m en ${t} s?`, respuestaCorrecta: `${v}`, explicacion: `v = d/t = ${v * t}/${t} = ${v} m/s.` }
  },
  (round) => {
    const m = 10 + round
    const h = 5 + round
    const g = 10
    return { pregunta: `¿Cuál es la energía potencial si m=${m} kg, g=${g} m/s² y h=${h} m?`, respuestaCorrecta: `${m * g * h}`, explicacion: `E = m*g*h = ${m}*${g}*${h} = ${m * g * h} J.` }
  },
  (round) => {
    const vf = 20 + round * 5
    const t = 5
    return { pregunta: `¿Cuál es la aceleración si vi=0, vf=${vf} m/s y t=${t} s?`, respuestaCorrecta: `${vf / t}`, explicacion: `a = (vf - vi) / t = (${vf} - 0) / ${t} = ${vf / t} m/s².` }
  },
  (round) => {
    const v = 40 + round * 5
    const d = 5 + round
    return { pregunta: `¿Cuál es la densidad de un objeto de ${d * v} g con volumen de ${v} cm³?`, respuestaCorrecta: `${d}`, explicacion: `Densidad: ρ = m/V = ${d * v}/${v} = ${d} g/cm³.` }
  },
  (round) => {
    const c = 25 + round
    return { pregunta: `¿A cuántos Kelvin equivale ${c}°C?`, respuestaCorrecta: `${c + 273}`, explicacion: `K = °C + 273 = ${c} + 273 = ${c + 273} K.` }
  },
  (round) => {
    const f = 100 + round * 20
    const d = 3 + round
    return { pregunta: `¿Cuál es el trabajo si una fuerza de ${f} N mueve un objeto ${d} m?`, respuestaCorrecta: `${f * d}`, explicacion: `Trabajo: W = F*d = ${f}*${d} = ${f * d} J.` }
  },
  (round) => {
    const w = 200 + round * 40
    const t = 4 + round
    return { pregunta: `¿Cuál es la potencia si se realizan ${w} J en ${t} s?`, respuestaCorrecta: `${w / t}`, explicacion: `Potencia: P = W/t = ${w}/${t} = ${w / t} W.` }
  },
  (round) => {
    const r = 5 + round
    const i = 2 + round
    return { pregunta: `Según V=I*R, ¿cuál es el voltaje si I=${i} A y R=${r} Ω?`, respuestaCorrecta: `${i * r}`, explicacion: `V = I*R = ${i}*${r} = ${i * r} V.` }
  },
  (round) => {
    const f = 60 + round * 10
    const area = 3 + round
    return { pregunta: `¿Cuál es la presión si F=${f} N y A=${area} m²?`, respuestaCorrecta: `${f / area}`, explicacion: `Presión: P = F/A = ${f}/${area} = ${f / area} Pa.` }
  }
]

export const fisica = buildQuestions(generators)
