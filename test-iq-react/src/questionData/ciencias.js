import { buildFactQuestions } from './common.js'

const facts = [
  ['¿Cuántos planetas tiene el sistema solar?', '8', 'El sistema solar tiene 8 planetas reconocidos.'],
  ['¿Cuál es la fórmula química del agua?', 'H2O', 'El agua contiene 2 átomos de hidrógeno y 1 de oxígeno.'],
  ['¿A qué temperatura hierve el agua en °C a nivel del mar?', '100', 'A presión atmosférica estándar hierve a 100°C.'],
  ['¿Cuál es el órgano que bombea la sangre?', 'corazón', 'El corazón impulsa la sangre por el sistema circulatorio.'],
  ['¿Cuál es el gas esencial que respiramos para obtener energía?', 'oxígeno', 'El oxígeno participa en la respiración celular.'],
  ['¿Cuál es la unidad básica de la vida?', 'célula', 'La célula es la unidad estructural y funcional de los seres vivos.'],
  ['¿Qué planeta es conocido como el planeta rojo?', 'Marte', 'Marte se ve rojizo por óxidos de hierro en su superficie.'],
  ['¿Qué estrella está en el centro del sistema solar?', 'Sol', 'El Sol es la estrella central del sistema solar.'],
  ['¿Qué gas absorben las plantas en la fotosíntesis?', 'dióxido de carbono', 'Las plantas usan CO2, agua y luz para producir glucosa.'],
  ['¿Qué molécula almacena información genética?', 'ADN', 'El ADN contiene instrucciones hereditarias.'],
  ['¿Cuál es el satélite natural de la Tierra?', 'Luna', 'La Luna orbita alrededor de la Tierra.'],
  ['¿Qué fuerza mantiene los planetas en órbita?', 'gravedad', 'La gravedad atrae los cuerpos con masa.'],
  ['¿Qué órgano permite principalmente el intercambio de oxígeno?', 'pulmones', 'Los pulmones intercambian gases con la sangre.'],
  ['¿Qué parte de la planta absorbe agua del suelo?', 'raíz', 'La raíz absorbe agua y minerales.'],
  ['¿Cómo se llama el cambio de líquido a gas?', 'evaporación', 'La evaporación ocurre cuando un líquido pasa a gas.'],
  ['¿Qué tipo de sangre es donante universal?', 'O-', 'O negativo suele considerarse donante universal de glóbulos rojos.'],
  ['¿Qué instrumento mide la temperatura?', 'termómetro', 'El termómetro mide temperatura.'],
  ['¿Qué capa protege la Tierra de radiación ultravioleta?', 'ozono', 'La capa de ozono filtra parte de la radiación UV.'],
  ['¿Qué proceso divide una célula en dos células iguales?', 'mitosis', 'La mitosis produce células hijas genéticamente iguales.'],
  ['¿Qué sistema del cuerpo controla respuestas rápidas?', 'nervioso', 'El sistema nervioso coordina respuestas rápidas mediante señales.']
]

const variants = [
  ([pregunta, respuestaCorrecta, explicacion]) => ({ pregunta, respuestaCorrecta, explicacion }),
  ([pregunta, respuestaCorrecta, explicacion]) => ({ pregunta: `${pregunta} Responde solo el término o número.`, respuestaCorrecta, explicacion }),
  ([pregunta, respuestaCorrecta, explicacion]) => ({ pregunta: `Ciencias: ${pregunta}`, respuestaCorrecta, explicacion }),
  ([pregunta, respuestaCorrecta, explicacion]) => ({ pregunta: `Completa correctamente: ${pregunta}`, respuestaCorrecta, explicacion }),
  ([pregunta, respuestaCorrecta, explicacion]) => ({ pregunta: `Pregunta de repaso: ${pregunta}`, respuestaCorrecta, explicacion })
]

export const ciencias = buildFactQuestions(facts, variants)
