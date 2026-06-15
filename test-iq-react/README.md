# Test IQ - React

Test de inteligencia con preguntas de múltiples temas: Matemáticas, Física, Ciencias, Química, Estadística, Programación, Medicina, Ingeniería Civil, Arquitectura y DevOps/Contenedores.

## Características

- ✅ Más de 60 preguntas distribuidas en 10 temas
- ✅ Selección de tema y cantidad de preguntas
- ✅ Explicaciones detalladas para respuestas incorrectas
- ✅ Cálculo de IQ estimado
- ✅ Exportación de resultados en JSON y CSV
- ✅ Interfaz moderna con React
- ✅ Colores personalizados (fondo blanco, texto negro, respuestas en rojo)

## Instalación

1. **Clonar o navegar al directorio del proyecto:**
```bash
cd aplicaciones/test-iq-react
```

2. **Instalar dependencias:**
```bash
npm install
```

## Uso

### Desarrollo

Para iniciar el servidor de desarrollo:
```bash
npm run dev
```

El servidor estará disponible en `http://localhost:3000`

### Build para producción

```bash
npm run build
```

Esto generará una carpeta `dist/` con los archivos listos para desplegar.

## Temas Disponibles

1. **Matemáticas** - Operaciones básicas, potencias, raíces, porcentajes
2. **Física** - Leyes de Newton, velocidad, energía
3. **Ciencias** - Astronomía, biología, química básica
4. **Química** - Tabla periódica, fórmulas, estructura atómica
5. **Estadística** - Media, mediana, moda, probabilidad
6. **Programación** - HTML, JavaScript, React, SQL, Docker
7. **Medicina** - Anatomía, fisiología, sistemas corporales
8. **Ingeniería Civil** - Estructuras, vigas, muros
9. **Arquitectura** - Planos, diseño, espacios
10. **DevOps** - Docker, Kubernetes, CI/CD

## Exportación de Datos

Al finalizar el test, puedes descargar los resultados en:
- **JSON**: Formato completo con todas las respuestas y explicaciones
- **CSV**: Formato de hoja de cálculo para análisis

## Estructura del Proyecto

```
test-iq-react/
├── src/
│   ├── components/
│   │   ├── SelectionScreen.jsx
│   │   ├── SelectionScreen.css
│   │   ├── QuestionScreen.jsx
│   │   ├── QuestionScreen.css
│   │   ├── ResultScreen.jsx
│   │   └── ResultScreen.css
│   ├── App.jsx
│   ├── App.css
│   ├── data.js
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── .gitignore
```

## Notas

- El test genera respuestas aleatorias dinámicamente
- Las preguntas son verificadas sin distinción de mayúsculas/minúsculas
- El IQ estimado se calcula: 70 + (porcentaje_aciertos * 60)

## Autor

Brandon Santiago Suria Mejía

## Licencia

MIT
