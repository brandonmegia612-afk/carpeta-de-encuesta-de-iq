import { buildQuestions } from './common.js'

const generators = [
  (round) => {
    const a = 15 + round * 3
    const b = 27 + round * 2
    return { pregunta: `¿Cuánto es ${a} + ${b}?`, respuestaCorrecta: `${a + b}`, explicacion: `Suma: ${a} + ${b} = ${a + b}.` }
  },
  (round) => {
    const a = 100 + round * 8
    const b = 35 + round
    return { pregunta: `¿Cuánto es ${a} - ${b}?`, respuestaCorrecta: `${a - b}`, explicacion: `Resta: ${a} - ${b} = ${a - b}.` }
  },
  (round) => {
    const a = 12 + round
    const b = 8
    return { pregunta: `¿Cuánto es ${a} * ${b}?`, respuestaCorrecta: `${a * b}`, explicacion: `Multiplicación: ${a} * ${b} = ${a * b}.` }
  },
  (round) => {
    const divisor = 6 + round
    const cociente = 12
    const dividendo = divisor * cociente
    return { pregunta: `¿Cuánto es ${dividendo} / ${divisor}?`, respuestaCorrecta: `${cociente}`, explicacion: `División: ${dividendo} / ${divisor} = ${cociente}.` }
  },
  (round) => {
    const n = 7 + round
    return { pregunta: `¿Cuánto es ${n}²?`, respuestaCorrecta: `${n * n}`, explicacion: `Potencia: ${n}² = ${n} * ${n} = ${n * n}.` }
  },
  (round) => {
    const root = 8 + round
    return { pregunta: `¿Cuánto es √${root * root}?`, respuestaCorrecta: `${root}`, explicacion: `Raíz cuadrada: √${root * root} = ${root}.` }
  },
  (round) => {
    const percent = 10 + round * 5
    const base = 200
    const result = (percent * base) / 100
    return { pregunta: `¿Cuánto es ${percent}% de ${base}?`, respuestaCorrecta: `${result}`, explicacion: `Porcentaje: ${percent}% de ${base} = ${result}.` }
  },
  (round) => {
    const x = 5 + round
    const result = x + x * 2
    return { pregunta: `¿Cuánto es ${x} + ${x} * 2?`, respuestaCorrecta: `${result}`, explicacion: `Jerarquía: primero ${x} * 2 = ${x * 2}; luego ${x} + ${x * 2} = ${result}.` }
  },
  (round) => {
    const result = 4 + round
    const b = 9 + round
    const total = result + b
    return { pregunta: `Si x + ${b} = ${total}, ¿cuánto vale x?`, respuestaCorrecta: `${result}`, explicacion: `Despeje: x = ${total} - ${b} = ${result}.` }
  },
  (round) => {
    const base = 6 + round
    const altura = 4 + round
    const area = (base * altura) / 2
    return { pregunta: `¿Cuál es el área de un triángulo con base ${base} y altura ${altura}?`, respuestaCorrecta: `${area}`, explicacion: `Área: (${base} * ${altura}) / 2 = ${area}.` }
  }
]

export const matematicas = buildQuestions(generators)
