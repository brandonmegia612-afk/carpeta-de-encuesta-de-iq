import { buildFactQuestions } from './common.js'

const facts = [
  ['¿Cuál es la unidad funcional del riñón?', 'nefrona', 'La nefrona filtra sangre y forma orina.'],
  ['¿Cuántas cámaras tiene el corazón?', '4', 'El corazón tiene dos aurículas y dos ventrículos.'],
  ['¿Cuántos huesos tiene el cuerpo humano adulto?', '206', 'El adulto suele tener 206 huesos.'],
  ['¿Qué molécula transporta oxígeno en la sangre?', 'hemoglobina', 'La hemoglobina transporta oxígeno en los eritrocitos.'],
  ['¿Cuál es la presión arterial normal aproximada?', '120/80', 'Una referencia común es 120/80 mmHg.'],
  ['¿Cuántos cromosomas tiene una célula humana diploide?', '46', 'Las células diploides humanas tienen 46 cromosomas.'],
  ['¿Qué órgano produce insulina?', 'páncreas', 'El páncreas produce insulina en los islotes pancreáticos.'],
  ['¿Qué órgano principal desintoxica la sangre?', 'hígado', 'El hígado metaboliza y detoxifica sustancias.'],
  ['¿Qué células transportan oxígeno?', 'eritrocitos', 'Los eritrocitos contienen hemoglobina.'],
  ['¿Qué células participan en defensa inmunitaria?', 'leucocitos', 'Los leucocitos ayudan a combatir infecciones.'],
  ['¿Qué vitamina se asocia con coagulación?', 'vitamina K', 'La vitamina K participa en factores de coagulación.'],
  ['¿Qué órgano controla muchas hormonas desde la base del cerebro?', 'hipófisis', 'La hipófisis regula múltiples glándulas endocrinas.'],
  ['¿Qué vaso lleva sangre del corazón al cuerpo?', 'arteria', 'Las arterias llevan sangre desde el corazón.'],
  ['¿Qué vaso retorna sangre al corazón?', 'vena', 'Las venas retornan sangre hacia el corazón.'],
  ['¿Qué sistema protege contra patógenos?', 'inmunitario', 'El sistema inmunitario defiende contra agentes infecciosos.'],
  ['¿Qué hueso protege el cerebro?', 'cráneo', 'El cráneo protege el encéfalo.'],
  ['¿Qué músculo principal permite respirar?', 'diafragma', 'El diafragma participa en la ventilación pulmonar.'],
  ['¿Qué órgano produce bilis?', 'hígado', 'El hígado produce bilis para ayudar a digerir grasas.'],
  ['¿Qué estructura conecta músculo con hueso?', 'tendón', 'Los tendones unen músculos a huesos.'],
  ['¿Qué estructura conecta hueso con hueso?', 'ligamento', 'Los ligamentos unen huesos entre sí.']
]

const variants = [
  ([pregunta, respuestaCorrecta, explicacion]) => ({ pregunta, respuestaCorrecta, explicacion }),
  ([pregunta, respuestaCorrecta, explicacion]) => ({ pregunta: `Medicina básica: ${pregunta}`, respuestaCorrecta, explicacion }),
  ([pregunta, respuestaCorrecta, explicacion]) => ({ pregunta: `${pregunta} Responde de forma breve.`, respuestaCorrecta, explicacion }),
  ([pregunta, respuestaCorrecta, explicacion]) => ({ pregunta: `Anatomía y fisiología: ${pregunta}`, respuestaCorrecta, explicacion }),
  ([pregunta, respuestaCorrecta, explicacion]) => ({ pregunta: `Repaso clínico: ${pregunta}`, respuestaCorrecta, explicacion })
]

export const medicina = buildFactQuestions(facts, variants)
