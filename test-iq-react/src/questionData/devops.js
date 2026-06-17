import { buildFactQuestions } from './common.js'

const facts = [
  ['¿Qué comando inicia un contenedor en Docker?', 'docker run', 'docker run crea e inicia un contenedor desde una imagen.'],
  ['¿Qué herramienta define múltiples contenedores con YAML?', 'docker-compose', 'docker-compose orquesta servicios definidos en un archivo YAML.'],
  ['¿Qué es una imagen en Docker?', 'plantilla', 'Una imagen es una plantilla para crear contenedores.'],
  ['¿Qué es un contenedor?', 'instancia en ejecución', 'Un contenedor es una instancia ejecutándose desde una imagen.'],
  ['¿Qué plataforma orquesta contenedores a escala?', 'Kubernetes', 'Kubernetes automatiza despliegue y operación de contenedores.'],
  ['¿Qué significa CI?', 'integración continua', 'CI integra y prueba cambios frecuentemente.'],
  ['¿Qué significa CD?', 'despliegue continuo', 'CD automatiza entrega o despliegue de software.'],
  ['¿Qué archivo suele definir una imagen Docker?', 'Dockerfile', 'Dockerfile contiene instrucciones para construir una imagen.'],
  ['¿Qué comando lista contenedores en ejecución?', 'docker ps', 'docker ps muestra contenedores activos.'],
  ['¿Qué comando descarga una imagen Docker?', 'docker pull', 'docker pull obtiene una imagen del registry.'],
  ['¿Qué comando construye una imagen Docker?', 'docker build', 'docker build crea una imagen desde un Dockerfile.'],
  ['¿Qué objeto de Kubernetes ejecuta contenedores?', 'pod', 'Un pod agrupa uno o más contenedores.'],
  ['¿Qué objeto de Kubernetes expone una aplicación?', 'service', 'Un service da acceso estable a pods.'],
  ['¿Qué objeto gestiona réplicas de pods?', 'deployment', 'Un deployment administra versiones y réplicas.'],
  ['¿Qué práctica guarda infraestructura como código?', 'IaC', 'IaC define infraestructura mediante archivos versionables.'],
  ['¿Qué herramienta es común para IaC?', 'Terraform', 'Terraform provisiona infraestructura declarativa.'],
  ['¿Qué sistema registra métricas y alertas?', 'monitoreo', 'El monitoreo observa salud y rendimiento.'],
  ['¿Qué archivo ignora archivos en Git?', '.gitignore', '.gitignore evita versionar archivos indicados.'],
  ['¿Qué formato se usa mucho en pipelines?', 'YAML', 'YAML se usa en configuraciones de CI/CD.'],
  ['¿Qué arquitectura usa métodos HTTP y recursos?', 'REST', 'REST organiza comunicación web mediante recursos y métodos HTTP.']
]

const variants = [
  ([pregunta, respuestaCorrecta, explicacion]) => ({ pregunta, respuestaCorrecta, explicacion }),
  ([pregunta, respuestaCorrecta, explicacion]) => ({ pregunta: `DevOps: ${pregunta}`, respuestaCorrecta, explicacion }),
  ([pregunta, respuestaCorrecta, explicacion]) => ({ pregunta: `${pregunta} Responde con el comando o concepto.`, respuestaCorrecta, explicacion }),
  ([pregunta, respuestaCorrecta, explicacion]) => ({ pregunta: `Contenedores y CI/CD: ${pregunta}`, respuestaCorrecta, explicacion }),
  ([pregunta, respuestaCorrecta, explicacion]) => ({ pregunta: `Operaciones modernas: ${pregunta}`, respuestaCorrecta, explicacion })
]

export const devops = buildFactQuestions(facts, variants)
