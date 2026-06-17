import { buildFactQuestions } from './common.js'

const facts = [
  ['¿Cuál es el símbolo químico del oro?', 'Au', 'El oro usa el símbolo Au, del latín aurum.'],
  ['¿Cuál es el símbolo del carbono?', 'C', 'El carbono tiene símbolo C.'],
  ['¿Cuántos electrones tiene el oxígeno neutro?', '8', 'El oxígeno tiene número atómico 8.'],
  ['¿Qué tipo de enlace hay entre H y Cl en HCl?', 'covalente', 'HCl presenta enlace covalente polar.'],
  ['¿Cuál es el pH de una solución neutra?', '7', 'Una solución neutra tiene pH 7.'],
  ['¿Cuántos átomos de oxígeno hay en H2SO4?', '4', 'H2SO4 contiene cuatro átomos de oxígeno.'],
  ['¿Cuál es el símbolo del sodio?', 'Na', 'El sodio usa Na, del latín natrium.'],
  ['¿Cuál es el símbolo del hierro?', 'Fe', 'El hierro usa Fe, del latín ferrum.'],
  ['¿Cuál es la fórmula del dióxido de carbono?', 'CO2', 'El dióxido de carbono contiene un carbono y dos oxígenos.'],
  ['¿Cuál es la carga de un protón?', 'positiva', 'El protón tiene carga eléctrica positiva.'],
  ['¿Cuál es la carga de un electrón?', 'negativa', 'El electrón tiene carga eléctrica negativa.'],
  ['¿Qué partícula no tiene carga eléctrica?', 'neutrón', 'El neutrón es eléctricamente neutro.'],
  ['¿Qué escala mide acidez o basicidad?', 'pH', 'La escala de pH mide acidez y basicidad.'],
  ['¿Cuál es el símbolo del cloro?', 'Cl', 'El cloro tiene símbolo Cl.'],
  ['¿Cuál es el símbolo del potasio?', 'K', 'El potasio usa K, del latín kalium.'],
  ['¿Cuántos hidrógenos tiene CH4?', '4', 'El metano CH4 tiene cuatro hidrógenos.'],
  ['¿Qué tipo de mezcla tiene composición uniforme?', 'homogénea', 'Una mezcla homogénea es uniforme.'],
  ['¿Qué tipo de mezcla no es uniforme?', 'heterogénea', 'Una mezcla heterogénea no es uniforme.'],
  ['¿Cuál es el número atómico del hidrógeno?', '1', 'El hidrógeno tiene número atómico 1.'],
  ['¿Cuál es la fórmula de la sal común?', 'NaCl', 'La sal común es cloruro de sodio, NaCl.']
]

const variants = [
  ([pregunta, respuestaCorrecta, explicacion]) => ({ pregunta, respuestaCorrecta, explicacion }),
  ([pregunta, respuestaCorrecta, explicacion]) => ({ pregunta: `Química básica: ${pregunta}`, respuestaCorrecta, explicacion }),
  ([pregunta, respuestaCorrecta, explicacion]) => ({ pregunta: `${pregunta} Escribe la respuesta exacta.`, respuestaCorrecta, explicacion }),
  ([pregunta, respuestaCorrecta, explicacion]) => ({ pregunta: `Identifica: ${pregunta}`, respuestaCorrecta, explicacion }),
  ([pregunta, respuestaCorrecta, explicacion]) => ({ pregunta: `Pregunta de laboratorio: ${pregunta}`, respuestaCorrecta, explicacion })
]

export const quimica = buildFactQuestions(facts, variants)
