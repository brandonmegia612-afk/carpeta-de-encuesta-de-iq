// Datos de preguntas por tema

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
];

export const PREGUNTAS_POR_TEMA = {
  matematicas: [
    { pregunta: '¿Cuánto es 15 + 27?', respuestaCorrecta: '42', explicacion: 'Suma: 15 + 27 = 42' },
    { pregunta: '¿Cuánto es 100 - 35?', respuestaCorrecta: '65', explicacion: 'Resta: 100 - 35 = 65' },
    { pregunta: '¿Cuánto es 12 * 8?', respuestaCorrecta: '96', explicacion: 'Multiplicación: 12 * 8 = 96' },
    { pregunta: '¿Cuánto es 144 / 12?', respuestaCorrecta: '12', explicacion: 'División: 144 / 12 = 12' },
    { pregunta: '¿Cuánto es 7² (7 al cuadrado)?', respuestaCorrecta: '49', explicacion: 'Potencia: 7² = 7 * 7 = 49' },
    { pregunta: '¿Cuánto es √64?', respuestaCorrecta: '8', explicacion: 'Raíz cuadrada: √64 = 8 porque 8 * 8 = 64' },
    { pregunta: '¿Cuánto es 30% de 200?', respuestaCorrecta: '60', explicacion: 'Porcentaje: 30% de 200 = 0.30 * 200 = 60' },
    { pregunta: '¿Cuánto es 5 + 5 * 2?', respuestaCorrecta: '15', explicacion: 'Jerarquía: primero multiplicación (5*2=10), luego suma (5+10=15)' }
  ],
  fisica: [
    { pregunta: '¿Cuál es la fuerza si m=50 kg y a=2 m/s² (F=ma)?', respuestaCorrecta: '100', explicacion: 'Ley de Newton: F = m · a = 50 · 2 = 100 N' },
    { pregunta: '¿Cuál es la velocidad si se recorren 150 m en 5 s?', respuestaCorrecta: '30', explicacion: 'Velocidad: v = d/t = 150/5 = 30 m/s' },
    { pregunta: '¿Cuál es la energía potencial (mgh) si m=10 kg, g=10 m/s² y h=5 m?', respuestaCorrecta: '500', explicacion: 'Energía potencial: E = m·g·h = 10·10·5 = 500 J' },
    { pregunta: '¿Cuál es la aceleración si v inicial=0, v final=20 m/s en 5 s?', respuestaCorrecta: '4', explicacion: 'Aceleración: a = (vf - vi) / t = (20 - 0) / 5 = 4 m/s²' },
    { pregunta: '¿Cuál es la densidad de un objeto de 200 g con volumen de 40 cm³?', respuestaCorrecta: '5', explicacion: 'Densidad: ρ = m/V = 200/40 = 5 g/cm³' },
    { pregunta: '¿A cuántos Kelvin equivale 25°C?', respuestaCorrecta: '298', explicacion: 'Conversión: K = °C + 273 = 25 + 273 = 298 K' }
  ],
  ciencias: [
    { pregunta: '¿Cuántos planetas tiene el sistema solar?', respuestaCorrecta: '8', explicacion: 'El sistema solar tiene 8 planetas: Mercurio, Venus, Tierra, Marte, Júpiter, Saturno, Urano y Neptuno.' },
    { pregunta: '¿Cuál es la fórmula química del agua?', respuestaCorrecta: 'H2O', explicacion: 'El agua está compuesta por 2 átomos de hidrógeno y 1 de oxígeno.' },
    { pregunta: '¿A qué temperatura hierve el agua en °C?', respuestaCorrecta: '100', explicacion: 'A nivel del mar, el agua hierve a 100°C bajo presión atmosférica estándar.' },
    { pregunta: '¿Cuál es el órgano que bombea la sangre?', respuestaCorrecta: 'corazón', explicacion: 'El corazón es el órgano principal del sistema circulatorio.' },
    { pregunta: '¿Cuál es el gas que respiramos?', respuestaCorrecta: 'oxígeno', explicacion: 'El oxígeno es esencial para la respiración celular en los seres vivos.' },
    { pregunta: '¿Cuál es la unidad básica de la vida?', respuestaCorrecta: 'célula', explicacion: 'La célula es la unidad estructural y funcional más pequeña de los organismos vivos.' }
  ],
  quimica: [
    { pregunta: '¿Cuál es el símbolo químico del oro?', respuestaCorrecta: 'Au', explicacion: 'El símbolo del oro en la tabla periódica es Au (del latín "Aurum").' },
    { pregunta: '¿Cuál es el símbolo del carbono?', respuestaCorrecta: 'C', explicacion: 'El carbono es el elemento con símbolo C y número atómico 6.' },
    { pregunta: '¿Cuántos electrones tiene el oxígeno?', respuestaCorrecta: '8', explicacion: 'El oxígeno tiene número atómico 8, por lo que posee 8 electrones.' },
    { pregunta: '¿Qué tipo de enlace hay entre H y Cl en HCl?', respuestaCorrecta: 'covalente', explicacion: 'HCl tiene un enlace covalente polar entre el hidrógeno y el cloro.' },
    { pregunta: '¿Cuál es el pH de una solución neutra?', respuestaCorrecta: '7', explicacion: 'Una solución neutra tiene pH = 7 (ni ácida ni básica).' },
    { pregunta: '¿Cuántos átomos de oxígeno hay en H2SO4?', respuestaCorrecta: '4', explicacion: 'El ácido sulfúrico (H2SO4) contiene 2 H, 1 S y 4 O = 7 átomos totales, 4 de oxígeno.' }
  ],
  estadistica: [
    { pregunta: '¿Cuál es la media de 5, 10, 15?', respuestaCorrecta: '10', explicacion: 'Media: (5 + 10 + 15) / 3 = 30 / 3 = 10' },
    { pregunta: '¿Cuál es la mediana de 3, 7, 5, 9, 1?', respuestaCorrecta: '5', explicacion: 'Mediana: ordenar (1, 3, 5, 7, 9) y tomar el valor central = 5' },
    { pregunta: '¿Cuál es la moda de 2, 5, 5, 8, 5, 3?', respuestaCorrecta: '5', explicacion: 'Moda: el valor que más se repite. El 5 aparece 3 veces.' },
    { pregunta: '¿Cuál es la probabilidad de sacar cara en una moneda?', respuestaCorrecta: '0.5', explicacion: 'Probabilidad: hay 1 cara y 2 resultados posibles = 1/2 = 0.5' },
    { pregunta: '¿Cuál es el rango de 3, 15, 7, 20, 5?', respuestaCorrecta: '17', explicacion: 'Rango: valor máximo - valor mínimo = 20 - 3 = 17' },
    { pregunta: '¿Si lanzas dos dados, cuál es la probabilidad de obtener 7?', respuestaCorrecta: '1/6', explicacion: 'Hay 6 combinaciones que suman 7 de 36 totales = 6/36 = 1/6' }
  ],
  programacion: [
    { pregunta: '¿Cuál es la etiqueta para un enlace en HTML?', respuestaCorrecta: 'a', explicacion: 'En HTML, la etiqueta <a> se usa para crear enlaces hipertext.' },
    { pregunta: '¿Cómo se declara una variable en JavaScript (ES6)?', respuestaCorrecta: 'let', explicacion: 'ES6 introdujo "let" y "const" para declarar variables con alcance de bloque.' },
    { pregunta: '¿En React, qué método renderiza JSX en el DOM?', respuestaCorrecta: 'ReactDOM.render', explicacion: 'ReactDOM.render monta componentes React en el DOM (o createRoot en versiones nuevas).' },
    { pregunta: '¿Qué es un contenedor liviano para aplicaciones?', respuestaCorrecta: 'Docker', explicacion: 'Docker empaqueta aplicaciones y dependencias en contenedores ligeros y portables.' },
    { pregunta: '¿Cuál es la consulta SQL para obtener todas las filas de "users"?', respuestaCorrecta: 'SELECT * FROM users;', explicacion: 'La sentencia SELECT * devuelve todas las columnas y filas de la tabla especificada.' },
    { pregunta: '¿Cuál es el lenguaje principal en .NET?', respuestaCorrecta: 'C#', explicacion: 'C# es el lenguaje más usado en la plataforma .NET de Microsoft.' }
  ],
  medicina: [
    { pregunta: '¿Cuál es la unidad funcional del riñón?', respuestaCorrecta: 'nefrona', explicacion: 'La nefrona es la unidad funcional responsable de filtrar la sangre y formar orina.' },
    { pregunta: '¿Cuántas cámaras tiene el corazón?', respuestaCorrecta: '4', explicacion: 'El corazón tiene 4 cámaras: 2 aurículas y 2 ventrículos.' },
    { pregunta: '¿Cuántos huesos tiene el cuerpo humano adulto?', respuestaCorrecta: '206', explicacion: 'Un adulto típicamente tiene 206 huesos en su esqueleto.' },
    { pregunta: '¿Cuál es el gas principal en la hemoglobina que transporta oxígeno?', respuestaCorrecta: 'oxígeno', explicacion: 'La hemoglobina transporta O2 desde los pulmones hacia los tejidos.' },
    { pregunta: '¿Cuál es la presión arterial normal (sistólica/diastólica)?', respuestaCorrecta: '120/80', explicacion: 'La presión normal es aproximadamente 120 mmHg sistólica y 80 mmHg diastólica.' },
    { pregunta: '¿Cuántos cromosomas tiene una célula humana?', respuestaCorrecta: '46', explicacion: 'Las células humanas diploides tienen 46 cromosomas (23 pares).' }
  ],
  ingenieria_civil: [
    { pregunta: '¿Qué es una viga de carga?', respuestaCorrecta: 'Elemento que soporta y distribuye cargas', explicacion: 'Una viga transmite fuerzas entre soportes evitando deformación excesiva.' },
    { pregunta: '¿Qué es un muro de carga?', respuestaCorrecta: 'Muro que soporta peso estructural', explicacion: 'Un muro de carga transmite el peso de elementos superiores a la cimentación.' },
    { pregunta: '¿Cuál es el propósito de los refuerzos en hormigón?', respuestaCorrecta: 'Aumentar resistencia a tracción', explicacion: 'El acero proporciona resistencia a tracción que el hormigón no posee.' },
    { pregunta: '¿Qué es una losa de hormigón?', respuestaCorrecta: 'Elemento estructural plano', explicacion: 'Una losa distribuye cargas uniformemente en pisos y techos.' },
    { pregunta: '¿Cuál es la función de una zapata en cimentación?', respuestaCorrecta: 'Distribuir cargas al terreno', explicacion: 'Una zapata dispersa el peso de la estructura en el suelo.' },
    { pregunta: '¿Qué es un pórtico en estructuras?', respuestaCorrecta: 'Marco de columnas y vigas', explicacion: 'Un pórtico es una estructura formada por columnas verticales conectadas por vigas horizontales.' }
  ],
  arquitectura: [
    { pregunta: '¿Qué es la escala en dibujos arquitectónicos?', respuestaCorrecta: 'Proporción de medidas', explicacion: 'La escala relaciona las dimensiones del dibujo con las reales.' },
    { pregunta: '¿Qué es un plano de planta?', respuestaCorrecta: 'Vista superior de un edificio', explicacion: 'Es la proyección ortogonal del edificio desde arriba, mostrando distribución.' },
    { pregunta: '¿Cuál es la función de una fachada?', respuestaCorrecta: 'Dar forma externa y estética', explicacion: 'La fachada es el exterior visible y contribuye a la identidad arquitectónica.' },
    { pregunta: '¿Qué es un alzado en arquitectura?', respuestaCorrecta: 'Vista frontal o lateral del edificio', explicacion: 'El alzado muestra la elevación vertical de un edificio desde un ángulo frontal.' },
    { pregunta: '¿Qué es un corte o sección en planos?', respuestaCorrecta: 'Vista interior vertical del edificio', explicacion: 'Un corte muestra lo que se vería si se "cortara" verticalmente el edificio.' },
    { pregunta: '¿Cuál es el propósito del respeto por el contexto urbano?', respuestaCorrecta: 'Armonía con el entorno', explicacion: 'La arquitectura debe considerar y complementar el contexto existente.' }
  ],
  devops: [
    { pregunta: '¿Qué comando inicia un contenedor en Docker?', respuestaCorrecta: 'docker run', explicacion: 'El comando "docker run" crea e inicia un contenedor a partir de una imagen.' },
    { pregunta: '¿Qué es docker-compose?', respuestaCorrecta: 'Herramienta para orquestar múltiples contenedores', explicacion: 'docker-compose permite definir y ejecutar aplicaciones multi-contenedor.' },
    { pregunta: '¿Cuál es la diferencia entre imagen y contenedor?', respuestaCorrecta: 'Imagen es plantilla, contenedor es instancia en ejecución', explicacion: 'Una imagen es la plantilla (template), un contenedor es una instancia corriendo.' },
    { pregunta: '¿Qué es Kubernetes?', respuestaCorrecta: 'Orquestación de contenedores', explicacion: 'Kubernetes automatiza el despliegue y gestión de contenedores a escala.' },
    { pregunta: '¿Qué es un pipeline CI/CD?', respuestaCorrecta: 'Proceso de integración y despliegue contínuo', explicacion: 'CI/CD automatiza compilación, pruebas y despliegue de software.' },
    { pregunta: '¿Qué es una API REST?', respuestaCorrecta: 'Arquitectura de comunicación web', explicacion: 'REST es un estilo arquitectónico para servicios web con métodos HTTP estándar.' }
  ]
};

export const generarPreguntas = (tema, cantidad) => {
  const preguntas = PREGUNTAS_POR_TEMA[tema] || [];
  return preguntas.slice(0, cantidad);
};
