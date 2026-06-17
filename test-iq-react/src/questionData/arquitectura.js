import { buildFactQuestions } from './common.js'

const facts = [
  ['¿Qué es la escala en dibujos arquitectónicos?', 'proporción de medidas', 'La escala relaciona medidas del dibujo con las reales.'],
  ['¿Qué es un plano de planta?', 'vista superior de un edificio', 'La planta muestra la distribución vista desde arriba.'],
  ['¿Cuál es la función de una fachada?', 'dar forma externa y estética', 'La fachada define el exterior visible del edificio.'],
  ['¿Qué es un alzado?', 'vista frontal o lateral del edificio', 'El alzado muestra una elevación vertical.'],
  ['¿Qué es un corte o sección?', 'vista interior vertical del edificio', 'El corte muestra el interior como si se seccionara.'],
  ['¿Qué busca el respeto por el contexto urbano?', 'armonía con el entorno', 'El proyecto debe dialogar con su entorno.'],
  ['¿Qué elemento conecta niveles verticalmente con peldaños?', 'escalera', 'La escalera permite circulación vertical.'],
  ['¿Qué representación tridimensional muestra volumen?', 'maqueta', 'La maqueta representa el proyecto en tres dimensiones.'],
  ['¿Qué área recibe y distribuye usuarios al entrar?', 'vestíbulo', 'El vestíbulo organiza el acceso inicial.'],
  ['¿Qué principio organiza espacios según uso?', 'funcionalidad', 'La funcionalidad relaciona forma y uso.'],
  ['¿Qué entrada de luz proviene del techo?', 'lucernario', 'El lucernario permite iluminación cenital.'],
  ['¿Qué dibujo muestra el techo desde arriba?', 'plano de cubierta', 'El plano de cubierta representa techos y pendientes.'],
  ['¿Qué documento describe materiales y acabados?', 'especificaciones', 'Las especificaciones detallan materiales y criterios.'],
  ['¿Qué espacio abierto interior ilumina y ventila?', 'patio', 'El patio aporta luz y ventilación.'],
  ['¿Qué medida mejora accesibilidad entre niveles?', 'rampa', 'La rampa facilita circulación sin escalones.'],
  ['¿Qué orientación aprovecha recorrido solar?', 'orientación solar', 'La orientación solar mejora iluminación y confort térmico.'],
  ['¿Qué técnica representa sombras y profundidad?', 'perspectiva', 'La perspectiva simula profundidad visual.'],
  ['¿Qué sistema ordena columnas y muros en planta?', 'retícula', 'La retícula organiza ejes y proporciones.'],
  ['¿Qué concepto evita barreras para usuarios?', 'accesibilidad', 'La accesibilidad permite uso por más personas.'],
  ['¿Qué etapa convierte ideas iniciales en propuesta?', 'anteproyecto', 'El anteproyecto desarrolla la idea arquitectónica.']
]

const variants = [
  ([pregunta, respuestaCorrecta, explicacion]) => ({ pregunta, respuestaCorrecta, explicacion }),
  ([pregunta, respuestaCorrecta, explicacion]) => ({ pregunta: `Arquitectura: ${pregunta}`, respuestaCorrecta, explicacion }),
  ([pregunta, respuestaCorrecta, explicacion]) => ({ pregunta: `${pregunta} Responde con el concepto clave.`, respuestaCorrecta, explicacion }),
  ([pregunta, respuestaCorrecta, explicacion]) => ({ pregunta: `Diseño arquitectónico: ${pregunta}`, respuestaCorrecta, explicacion }),
  ([pregunta, respuestaCorrecta, explicacion]) => ({ pregunta: `Lectura de planos: ${pregunta}`, respuestaCorrecta, explicacion })
]

export const arquitectura = buildFactQuestions(facts, variants)
