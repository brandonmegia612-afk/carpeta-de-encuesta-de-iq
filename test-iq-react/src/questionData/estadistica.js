import { buildQuestions } from './common.js'

const generators = [
  (round) => {
    const a = 5 + round
    const b = 10 + round
    const c = 15 + round
    return { pregunta: `¿Cuál es la media de ${a}, ${b}, ${c}?`, respuestaCorrecta: `${(a + b + c) / 3}`, explicacion: `Media: (${a}+${b}+${c})/3 = ${(a + b + c) / 3}.` }
  },
  (round) => {
    const values = [1 + round, 3 + round, 5 + round, 7 + round, 9 + round]
    return { pregunta: `¿Cuál es la mediana de ${values.join(', ')}?`, respuestaCorrecta: `${5 + round}`, explicacion: `La mediana es el valor central: ${5 + round}.` }
  },
  (round) => {
    const mode = 5 + round
    return { pregunta: `¿Cuál es la moda de ${mode}, 2, ${mode}, 8, ${mode}, 3?`, respuestaCorrecta: `${mode}`, explicacion: `La moda es el valor que más se repite: ${mode}.` }
  },
  () => ({ pregunta: '¿Cuál es la probabilidad de sacar cara en una moneda?', respuestaCorrecta: '0.5', explicacion: 'Hay 1 resultado favorable de 2 posibles: 1/2 = 0.5.' }),
  (round) => {
    const min = 3 + round
    const max = 20 + round * 2
    return { pregunta: `¿Cuál es el rango de ${min}, 15, 7, ${max}, 5?`, respuestaCorrecta: `${max - min}`, explicacion: `Rango: máximo - mínimo = ${max} - ${min} = ${max - min}.` }
  },
  () => ({ pregunta: '¿Si lanzas dos dados, cuál es la probabilidad de obtener 7?', respuestaCorrecta: '1/6', explicacion: 'Hay 6 combinaciones favorables de 36: 6/36 = 1/6.' }),
  (round) => {
    const n = 10 + round
    const successes = 2 + round
    return { pregunta: `En ${n} casos hay ${successes} éxitos. ¿Cuál es la frecuencia relativa?`, respuestaCorrecta: `${successes / n}`, explicacion: `Frecuencia relativa: ${successes}/${n} = ${successes / n}.` }
  },
  (round) => {
    const total = 50 + round * 10
    const part = 10 + round * 2
    return { pregunta: `¿Qué porcentaje representa ${part} de ${total}?`, respuestaCorrecta: `${(part / total) * 100}`, explicacion: `Porcentaje: (${part}/${total})*100 = ${(part / total) * 100}%.` }
  },
  (round) => {
    const values = [2 + round, 4 + round, 6 + round, 8 + round]
    return { pregunta: `¿Cuál es la suma total de frecuencias ${values.join(', ')}?`, respuestaCorrecta: `${values.reduce((a, b) => a + b, 0)}`, explicacion: `Total: ${values.join(' + ')} = ${values.reduce((a, b) => a + b, 0)}.` }
  },
  (round) => {
    const a = 6 + round
    const b = 10 + round
    return { pregunta: `¿Cuál es el punto medio entre ${a} y ${b}?`, respuestaCorrecta: `${(a + b) / 2}`, explicacion: `Punto medio: (${a}+${b})/2 = ${(a + b) / 2}.` }
  }
]

export const estadistica = buildQuestions(generators)
