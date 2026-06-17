import { buildFactQuestions } from './common.js'

const facts = [
  ['¿Qué elemento estructural soporta y distribuye cargas horizontales?', 'viga', 'La viga transmite cargas hacia apoyos o columnas.'],
  ['¿Qué elemento vertical transmite cargas a la cimentación?', 'columna', 'La columna lleva cargas verticales hacia la base.'],
  ['¿Cuál es la función de una zapata?', 'distribuir cargas al terreno', 'La zapata reparte cargas de la estructura en el suelo.'],
  ['¿Qué material aumenta la resistencia a tracción en el hormigón armado?', 'acero', 'El acero refuerza al hormigón frente a tracción.'],
  ['¿Qué ensayo estima la resistencia del concreto con cilindros?', 'compresión', 'El ensayo de compresión mide resistencia del concreto.'],
  ['¿Qué estructura retiene masas de suelo?', 'muro de contención', 'El muro de contención resiste empujes laterales del terreno.'],
  ['¿Qué propiedad describe deformación ante carga?', 'elasticidad', 'La elasticidad relaciona esfuerzo y deformación recuperable.'],
  ['¿Qué estudio analiza características del suelo?', 'geotecnia', 'La geotecnia estudia suelos y rocas para obras.'],
  ['¿Qué pendiente facilita evacuación de agua en cubiertas?', 'pendiente de drenaje', 'La pendiente evita acumulación de agua.'],
  ['¿Qué plano muestra dimensiones y ubicación de elementos?', 'plano estructural', 'El plano estructural guía la construcción de elementos resistentes.'],
  ['¿Qué carga proviene del peso propio de la estructura?', 'carga muerta', 'La carga muerta es permanente.'],
  ['¿Qué carga proviene de uso, personas o mobiliario?', 'carga viva', 'La carga viva cambia durante el uso.'],
  ['¿Qué fenómeno causa falla por compresión lateral en columnas esbeltas?', 'pandeo', 'El pandeo es inestabilidad por compresión.'],
  ['¿Qué material se obtiene mezclando cemento, agua y agregados?', 'concreto', 'El concreto combina cemento, agua, arena y grava.'],
  ['¿Qué red transporta aguas residuales?', 'alcantarillado', 'El alcantarillado conduce aguas residuales.'],
  ['¿Qué obra permite cruzar ríos o desniveles?', 'puente', 'Un puente salva obstáculos naturales o artificiales.'],
  ['¿Qué documento estima costos de obra?', 'presupuesto', 'El presupuesto calcula cantidades y costos.'],
  ['¿Qué proceso compacta suelo para mejorar capacidad?', 'compactación', 'La compactación reduce vacíos y aumenta estabilidad.'],
  ['¿Qué prueba mide asentamiento del concreto fresco?', 'slump', 'El slump evalúa consistencia del concreto fresco.'],
  ['¿Qué sistema recoge agua de lluvia en vías?', 'drenaje pluvial', 'El drenaje pluvial evacua escorrentía.']
]

const variants = [
  ([pregunta, respuestaCorrecta, explicacion]) => ({ pregunta, respuestaCorrecta, explicacion }),
  ([pregunta, respuestaCorrecta, explicacion]) => ({ pregunta: `Ingeniería civil: ${pregunta}`, respuestaCorrecta, explicacion }),
  ([pregunta, respuestaCorrecta, explicacion]) => ({ pregunta: `${pregunta} Responde con el concepto.`, respuestaCorrecta, explicacion }),
  ([pregunta, respuestaCorrecta, explicacion]) => ({ pregunta: `Estructuras y obra: ${pregunta}`, respuestaCorrecta, explicacion }),
  ([pregunta, respuestaCorrecta, explicacion]) => ({ pregunta: `Repaso de construcción: ${pregunta}`, respuestaCorrecta, explicacion })
]

export const ingenieriaCivil = buildFactQuestions(facts, variants)
