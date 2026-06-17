import { matematicas } from './questionData/matematicas.js'
import { fisica } from './questionData/fisica.js'
import { ciencias } from './questionData/ciencias.js'
import { quimica } from './questionData/quimica.js'
import { estadistica } from './questionData/estadistica.js'
import { programacion } from './questionData/programacion.js'
import { medicina } from './questionData/medicina.js'
import { ingenieriaCivil } from './questionData/ingenieriaCivil.js'
import { arquitectura } from './questionData/arquitectura.js'
import { devops } from './questionData/devops.js'

export const TEMAS = [
  { id: 1, nombre: 'Matemáticas', clave: 'matematicas' },
  { id: 2, nombre: 'Física', clave: 'fisica' },
  { id: 3, nombre: 'Ciencias', clave: 'ciencias' },
  { id: 4, nombre: 'Química', clave: 'quimica' },
  { id: 5, nombre: 'Estadística', clave: 'estadistica' },
  { id: 6, nombre: 'Programación', clave: 'programacion' },
  { id: 7, nombre: 'Medicina', clave: 'medicina' },
  { id: 8, nombre: 'Ingeniería Civil', clave: 'ingenieria_civil' },
  { id: 9, nombre: 'Arquitectura', clave: 'arquitectura' },
  { id: 10, nombre: 'Contenedores/DevOps', clave: 'devops' }
]

export const PREGUNTAS_POR_TEMA = {
  matematicas,
  fisica,
  ciencias,
  quimica,
  estadistica,
  programacion,
  medicina,
  ingenieria_civil: ingenieriaCivil,
  arquitectura,
  devops
}

export const generarPreguntas = (tema, cantidad) => {
  const preguntas = PREGUNTAS_POR_TEMA[tema] || []
  const limite = Math.max(1, Math.min(Number(cantidad) || 1, preguntas.length))
  return preguntas.slice(0, limite)
}
