import { buildFactQuestions } from './common.js'

const facts = [
  ['¿Cuál es la etiqueta para un enlace en HTML?', 'a', 'La etiqueta <a> crea enlaces en HTML.'],
  ['¿Cómo se declara una variable mutable en JavaScript moderno?', 'let', 'let declara variables con alcance de bloque.'],
  ['¿Qué palabra declara una constante en JavaScript?', 'const', 'const declara una referencia que no se reasigna.'],
  ['¿Qué método convierte JSON texto a objeto en JavaScript?', 'JSON.parse', 'JSON.parse interpreta una cadena JSON.'],
  ['¿Qué método convierte un objeto a JSON texto?', 'JSON.stringify', 'JSON.stringify serializa datos a texto JSON.'],
  ['¿Qué hook de React maneja estado local?', 'useState', 'useState crea y actualiza estado en componentes funcionales.'],
  ['¿Qué hook de React ejecuta efectos secundarios?', 'useEffect', 'useEffect ejecuta lógica después del renderizado.'],
  ['¿Qué comando instala dependencias npm?', 'npm install', 'npm install descarga las dependencias del proyecto.'],
  ['¿Qué consulta SQL obtiene todas las filas de users?', 'SELECT * FROM users;', 'SELECT * devuelve todas las columnas y filas de la tabla.'],
  ['¿Qué lenguaje es principal en .NET?', 'C#', 'C# es el lenguaje más usado en .NET.'],
  ['¿Qué propiedad CSS cambia el color del texto?', 'color', 'color define el color del texto.'],
  ['¿Qué propiedad CSS cambia el color de fondo?', 'background-color', 'background-color define el fondo.'],
  ['¿Qué método HTTP se usa normalmente para leer datos?', 'GET', 'GET solicita información.'],
  ['¿Qué método HTTP se usa normalmente para crear datos?', 'POST', 'POST envía datos para crear recursos.'],
  ['¿Qué comando de Git guarda cambios en el historial local?', 'git commit', 'git commit crea un registro de cambios.'],
  ['¿Qué comando de Git descarga cambios remotos?', 'git pull', 'git pull trae e integra cambios remotos.'],
  ['¿Qué comando de Git sube commits al remoto?', 'git push', 'git push envía commits al repositorio remoto.'],
  ['¿Qué estructura usa clave y valor en JavaScript?', 'objeto', 'Un objeto almacena pares clave-valor.'],
  ['¿Qué estructura ordenada almacena múltiples valores en JavaScript?', 'array', 'Un array guarda elementos en orden.'],
  ['¿Qué operador compara valor y tipo en JavaScript?', '===', '=== compara igualdad estricta.']
]

const variants = [
  ([pregunta, respuestaCorrecta, explicacion]) => ({ pregunta, respuestaCorrecta, explicacion }),
  ([pregunta, respuestaCorrecta, explicacion]) => ({ pregunta: `Programación web: ${pregunta}`, respuestaCorrecta, explicacion }),
  ([pregunta, respuestaCorrecta, explicacion]) => ({ pregunta: `${pregunta} Responde con el término exacto.`, respuestaCorrecta, explicacion }),
  ([pregunta, respuestaCorrecta, explicacion]) => ({ pregunta: `Código y herramientas: ${pregunta}`, respuestaCorrecta, explicacion }),
  ([pregunta, respuestaCorrecta, explicacion]) => ({ pregunta: `Repaso técnico: ${pregunta}`, respuestaCorrecta, explicacion })
]

export const programacion = buildFactQuestions(facts, variants)
