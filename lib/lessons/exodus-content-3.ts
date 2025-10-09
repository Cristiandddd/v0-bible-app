import type { LessonBook } from "./types"

export const EXODUS_BOOK_PART3: LessonBook = {
  id: "exodus-part3",
  religion: "cristianismo",
  title: "Éxodo - Parte 3", 
  description: "El pacto en Sinaí y la ley de Dios",
  icon: "⛰️",
  testament: "antiguo",
  category: "Pentateuco",
  sections: [
    {
      id: "exodus-sinai-pacto",
      bookId: "exodus",
      title: "Monte Sinaí y el Pacto",
      description: "Dios establece su pacto con Israel",
      order: 3,
      lessons: [
        {
          id: "lesson-exodus-13",
          sectionId: "exodus-sinai-pacto",
          title: "Llegada al Monte Sinaí",
          description: "Preparación para encontrarse con Dios",
          scripture: "Éxodo 19:1-25",
          estimatedMinutes: 12,
          order: 13,
          locked: true,
          content: {
            introduction: {
              id: "intro-13",
              type: "narration",
              text: "Después de tres meses de viaje, Israel llegó al pie del Monte Sinaí. Este sería el lugar donde Dios establecería formalmente su pacto con ellos. Hoy veremos cómo prepararse para encontrarse con Dios. ¿Estás listo?",
              options: [
                {
                  id: "opt-1",
                  text: "Sí, conozco esta historia",
                  response: "Excelente! Pero hoy veremos principios profundos sobre la preparación para el encuentro con Dios.",
                },
                {
                  id: "opt-2",
                  text: "Sé que Dios dio los mandamientos aquí",
                  response: "Correcto! Pero antes de la ley, hubo preparación. Hoy veremos ese proceso importante.",
                },
                {
                  id: "opt-3",
                  text: "No, cuéntame",
                  response: "Perfecto! Estás a punto de descubrir uno de los momentos más sagrados de la Biblia.",
                },
              ],
            },
            teaching: [
              {
                id: "teach-1",
                type: "scripture",
                text: "Israel acampó frente al monte:",
                scripture: '"Al tercer mes de la salida de los hijos de Israel de la tierra de Egipto, en ese mismo día llegaron al desierto de Sinaí... y acamparon allí delante del monte." - Éxodo 19:1-2',
              },
              {
                id: "teach-2",
                type: "question",
                text: "Llegaron al 'tercer mes'. ¿Qué significado tiene este tiempo?",
                options: [
                  {
                    id: "opt-1",
                    text: "Tiempo suficiente para prepararse",
                    response: "Exacto! Tres meses les dio tiempo para procesar el Éxodo y prepararse espiritualment.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Dios tiene tiempos específicos",
                    response: "Muy bien! Como la Pascua en el primer mes, Dios obra en tiempos designados para sus propósitos.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Preparación para Pentecostés",
                    response: "Interesante! Más tarde, Pentecostés sería en el tercer mes. Dios establece patrones en su calendario.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-3",
                type: "scripture",
                text: "Dios hizo una propuesta de pacto:",
                scripture: '"Y Moisés subió a Dios; y Jehová lo llamó desde el monte, diciendo: Así dirás a la casa de Jacob, y anunciarás a los hijos de Israel: Vosotros visteis lo que hice a los egipcios... Ahora, pues, si diereis oído a mi voz, y guardareis mi pacto, seréis mi especial tesoro sobre todos los pueblos." - Éxodo 19:3-5',
              },
              {
                id: "teach-4",
                type: "narration",
                text: "Dios no impuso el pacto; lo propuso. 'Si diereis oído...' - la relación con Dios siempre requiere respuesta humana.",
              },
              {
                id: "teach-5",
                type: "scripture",
                text: "La promesa de Dios:",
                scripture: '"Y seréis para mí un reino de sacerdotes, y gente santa." - Éxodo 19:6',
              },
              {
                id: "teach-6",
                type: "question",
                text: "'Reino de sacerdotes y gente santa'. ¿Qué significa esto?",
                options: [
                  {
                    id: "opt-1",
                    text: "Acceso directo a Dios",
                    response: "Exactamente! En un reino de sacerdotes, todos pueden acercarse a Dios, no solo una clase especial.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Representantes de Dios en la tierra",
                    response: "Muy bien! Los sacerdotes representan a Dios ante el pueblo y al pueblo ante Dios. Israel tendría este rol.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Separados para Dios",
                    response: "Correcto! 'Santo' significa apartado. Serían un pueblo diferente, dedicado a Dios.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-7",
                type: "scripture",
                text: "El pueblo respondió:",
                scripture: '"Y todo el pueblo respondió a una, y dijeron: Todo lo que Jehová ha dicho, haremos." - Éxodo 19:8',
              },
              {
                id: "teach-8",
                type: "narration",
                text: "El pueblo aceptó el pacto sin saber completamente lo que implicaba. A veces decimos 'sí' a Dios sin entender el costo.",
              },
              {
                id: "teach-9",
                type: "scripture",
                text: "Dios dio instrucciones de preparación:",
                scripture: '"Y Jehová dijo a Moisés: Ve al pueblo, y santifícalos hoy y mañana; y laven sus vestidos, y estén preparados para el día tercero." - Éxodo 19:10-11',
              },
              {
                id: "teach-10",
                type: "question",
                text: "Dios mandó 'santificarlos' y 'lavar sus vestidos'. ¿Por qué esta preparación física?",
                options: [
                  {
                    id: "opt-1",
                    text: "Lo externo refleja lo interno",
                    response: "Exacto! La limpieza física simbolizaba pureza espiritual. Las acciones externas preparan el corazón.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Enseñaba reverencia",
                    response: "Muy bien! Prepararse físicamente creaba expectativa y reverencia por el encuentro con Dios.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Dios merece nuestra mejor preparación",
                    response: "Correcto! Cuando nos acercamos a Dios, debemos dar lo mejor, no lo que sobra.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-11",
                type: "scripture",
                text: "Límites establecidos:",
                scripture: '"Y señalarás término al pueblo en derredor, diciendo: Guardaos, no subáis al monte, ni toquéis sus límites; cualquiera que tocare el monte, de seguro morirá." - Éxodo 19:12',
              },
              {
                id: "teach-12",
                type: "narration",
                text: "Dios es santo y accesible, pero no casual. Los límites enseñaban respeto por la santidad de Dios.",
              },
              {
                id: "teach-13",
                type: "scripture",
                text: "La manifestación de Dios:",
                scripture: '"Y todo el monte Sinaí humeaba, porque Jehová había descendido sobre él en fuego; y el humo subía como el humo de un horno, y todo el monte se estremecía en gran manera." - Éxodo 19:18',
              },
              {
                id: "teach-14",
                type: "question",
                text: "Dios se manifestó con truenos, relámpagos y humo. ¿Por qué de esta manera?",
                options: [
                  {
                    id: "opt-1",
                    text: "Para inspirar temor reverente",
                    response: "Exactamente! El pueblo necesitaba entender la majestad y poder de Dios.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Para mostrar su santidad",
                    response: "Muy bien! La santidad de Dios no es algo ligero. Merece reverencia y asombro.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Para establecer su autoridad",
                    response: "Correcto! Antes de dar la ley, Dios mostró que tenía autoridad para exigir obediencia.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-15",
                type: "scripture",
                text: "Moisés como mediador:",
                scripture: '"Y Moisés habló, y Dios le respondió con voz tronante." - Éxodo 19:19',
              },
              {
                id: "teach-16",
                type: "narration",
                text: "Moisés subió y bajó varias veces entre Dios y el pueblo. Él prefiguraba a Cristo, el mediador perfecto entre Dios y la humanidad.",
              },
            ],
            application: {
              id: "app-13",
              type: "reflection",
              text: "Israel se preparó tres días para encontrarse con Dios. ¿Cómo te preparas tú para tu tiempo con Dios?",
              options: [
                {
                  id: "opt-1",
                  text: "Necesito ser más intencional",
                  response: "Es un buen comienzo reconocerlo! Pequeños pasos como apagar distracciones pueden ayudar.",
                },
                {
                  id: "opt-2",
                  text: "Tengo un ritual de preparación",
                  response: "Qué bendición! La preparación intencional honra a Dios y enriquece nuestro encuentro con Él.",
                },
                {
                  id: "opt-3",
                  text: "A veces voy con prisa",
                  response: "Es común en nuestro mundo acelerado. Pero Dios merece nuestro tiempo y atención plena.",
                },
              ],
            },
            reflection: {
              id: "refl-13",
              type: "reflection",
              text: "Dios dijo 'seréis mi especial tesoro'. ¿Vives como tesoro de Dios o buscas valor en otras cosas?",
              options: [
                {
                  id: "opt-1",
                  text: "A veces busco valor en logros",
                  response: "Es una lucha común! Recuerda: tu valor viene de ser hijo de Dios, no de lo que logras.",
                },
                {
                  id: "opt-2",
                  text: "Estoy aprendiendo a recibir mi valor de Dios",
                  response: "Hermoso proceso! Mientras más recibas tu identidad de Dios, más libre serás.",
                },
                {
                  id: "opt-3",
                  text: "Sí, me sé tesoro de Dios",
                  response: "Qué seguridad tan preciosa! Vive desde esa identidad, no hacia ella.",
                },
              ],
            },
          },
        },
        {
          id: "lesson-exodus-14",
          sectionId: "exodus-sinai-pacto",
          title: "Los Diez Mandamientos",
          description: "La ley moral de Dios",
          scripture: "Éxodo 20:1-21",
          estimatedMinutes: 15,
          order: 14,
          locked: true,
          content: {
            introduction: {
              id: "intro-14",
              type: "narration",
              text: "En medio de truenos y relámpagos, Dios pronunció las palabras que formarían el fundamento moral de la civilización occidental. Hoy exploraremos los Diez Mandamientos. ¿Listo para descubrir su relevancia eterna?",
              options: [
                {
                  id: "opt-1",
                  text: "Sé los mandamientos",
                  response: "Excelente! Pero hoy veremos su profundidad teológica y aplicación práctica.",
                },
                {
                  id: "opt-2",
                  text: "Conozco algunos",
                  response: "Perfecto! Descubrirás cómo estos diez principios abarcan toda nuestra relación con Dios y el prójimo.",
                },
                {
                  id: "opt-3",
                  text: "No los conozco bien",
                  response: "Qué privilegio descubrirlos por primera vez! Estos mandamientos transformaron el mundo.",
                },
              ],
            },
            teaching: [
              {
                id: "teach-1",
                type: "scripture",
                text: "Dios se presenta:",
                scripture: '"Y habló Dios todas estas palabras, diciendo: Yo soy Jehová tu Dios, que te saqué de la tierra de Egipto, de casa de servidumbre." - Éxodo 20:1-2',
              },
              {
                id: "teach-2",
                type: "question",
                text: "Dios comienza recordando quién es y qué ha hecho. ¿Por qué?",
                options: [
                  {
                    id: "opt-1",
                    text: "La gracia precede a la ley",
                    response: "Exactamente! Dios los salvó primero, luego les dio la ley. La obediencia responde a la gracia, no la merece.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Establece la relación",
                    response: "Muy bien! 'Yo soy tu Dios' establece la base relacional. La ley viene en contexto de relación.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Da autoridad para exigir",
                    response: "Correcto! Como libertador, Dios tenía derecho a establecer cómo vivirían en libertad.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-3",
                type: "scripture",
                text: "Primer mandamiento:",
                scripture: '"No tendrás dioses ajenos delante de mí." - Éxodo 20:3',
              },
              {
                id: "teach-4",
                type: "narration",
                text: "El fundamento de todos los mandamientos: la exclusividad de Dios. Todo lo demás fluye de este primer principio.",
              },
              {
                id: "teach-5",
                type: "scripture",
                text: "Segundo mandamiento:",
                scripture: '"No te harás imagen... no te inclinarás a ellas, ni las honrarás." - Éxodo 20:4-5',
              },
              {
                id: "teach-6",
                type: "question",
                text: "¿Por qué prohibir imágenes si Dios es invisible?",
                options: [
                  {
                    id: "opt-1",
                    text: "Dios trasciende toda representación",
                    response: "Exacto! Ninguna imagen creada puede captar la gloria del Creador. Lo limitaría.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Evita la idolatría",
                    response: "Muy bien! Las imágenes fácilmente se convierten en ídolos que desplazan a Dios.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Enseña adoración en espíritu",
                    response: "Correcto! Dios busca adoradores que le adoren en espíritu y en verdad, no mediante objetos.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-7",
                type: "scripture",
                text: "Tercer mandamiento:",
                scripture: '"No tomarás el nombre de Jehová tu Dios en vano." - Éxodo 20:7',
              },
              {
                id: "teach-8",
                type: "narration",
                text: "Más que maldecir, esto incluye usar el nombre de Dios livianamente, en juramentos falsos, o representarlo mal.",
              },
              {
                id: "teach-9",
                type: "scripture",
                text: "Cuarto mandamiento:",
                scripture: '"Acuérdate del día de reposo para santificarlo." - Éxodo 20:8',
              },
              {
                id: "teach-10",
                type: "question",
                text: "Es el único mandamiento que dice 'acuérdate'. ¿Por qué?",
                options: [
                  {
                    id: "opt-1",
                    text: "Es fácil olvidar el descanso",
                    response: "Exactamente! En un mundo de trabajo constante, necesitamos recordatorios para descansar en Dios.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Imita el patrón de Dios",
                    response: "Muy bien! Dios trabajó seis días y descansó el séptimo. Seguimos su ejemplo.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Para nuestro bien",
                    response: "Correcto! El sábado fue hecho para el hombre, no el hombre para el sábado. Es don, no carga.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-11",
                type: "scripture",
                text: "Quinto mandamiento:",
                scripture: '"Honra a tu padre y a tu madre, para que tus días se alarguen en la tierra que Jehová tu Dios te da." - Éxodo 20:12',
              },
              {
                id: "teach-12",
                type: "narration",
                text: "El primer mandamiento con promesa. La familia es el fundamento de la sociedad estable.",
              },
              {
                id: "teach-13",
                type: "scripture",
                text: "Sexto mandamiento:",
                scripture: '"No matarás." - Éxodo 20:13',
              },
              {
                id: "teach-14",
                type: "scripture",
                text: "Séptimo mandamiento:",
                scripture: '"No cometerás adulterio." - Éxodo 20:14',
              },
              {
                id: "teach-15",
                type: "scripture",
                text: "Octavo mandamiento:",
                scripture: '"No hurtarás." - Éxodo 20:15',
              },
              {
                id: "teach-16",
                type: "scripture",
                text: "Noveno mandamiento:",
                scripture: '"No hablarás contra tu prójimo falso testimonio." - Éxodo 20:16',
              },
              {
                id: "teach-17",
                type: "scripture",
                text: "Décimo mandamiento:",
                scripture: '"No codiciarás... nada que sea de tu prójimo." - Éxodo 20:17',
              },
              {
                id: "teach-18",
                type: "question",
                text: "El décimo mandamiento es sobre pensamientos, no acciones. ¿Por qué?",
                options: [
                  {
                    id: "opt-1",
                    text: "Dios juzga el corazón",
                    response: "Exactamente! La codicia es un pecado del corazón que precede a los pecados externos.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "La verdadera justicia es interna",
                    response: "Muy bien! Jesús luego explicaría que el adulterio y asesinato comienzan en el corazón.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "La ley alcanza lo más íntimo",
                    response: "Correcto! Ningún área de la vida escapa a la soberanía de Dios, ni siquiera nuestros pensamientos.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-19",
                type: "scripture",
                text: "La reacción del pueblo:",
                scripture: '"Y todo el pueblo observaba el trueno y el relámpago, y el sonido de la bocina, y el monte que humeaba; y viéndolo el pueblo, temblaron, y se pusieron de lejos." - Éxodo 20:18',
              },
              {
                id: "teach-20",
                type: "narration",
                text: "La ley los confrontó con su pecado e incapacidad. Esto los prepararía para entender su necesidad de gracia.",
              },
              {
                id: "teach-21",
                type: "scripture",
                text: "Jesús resumió la ley:",
                scripture: '"Jesús le dijo: Amarás al Señor tu Dios con todo tu corazón, y con toda tu alma, y con toda tu mente. Este es el primero y grande mandamiento. Y el segundo es semejante: Amarás a tu prójimo como a ti mismo. De estos dos mandamientos depende toda la ley y los profetas." - Mateo 22:37-40',
              },
              {
                id: "teach-22",
                type: "narration",
                text: "Los primeros cuatro mandamientos tratan de amar a Dios; los últimos seis de amar al prójimo. Toda la ley se resume en amor.",
              },
            ],
            application: {
              id: "app-14",
              type: "reflection",
              text: "Los mandamientos revelan el carácter de Dios y nuestro pecado. ¿Cuál mandamiento te confronta más hoy?",
              options: [
                {
                  id: "opt-1",
                  text: "No tener otros dioses",
                  response: "Es el fundamento! Pregúntate: ¿hay algo o alguien que ocupe el lugar de Dios en mi vida?",
                },
                {
                  id: "opt-2",
                  text: "No codiciar",
                  response: "Es tan relevante hoy! En un mundo de consumo, la codicia nos rodea. Contentamiento es antidoto.",
                },
                {
                  id: "opt-3",
                  text: "Honrar a padres",
                  response: "Las relaciones familiares son profundas. Honrar no siempre es fácil, pero trae bendición.",
                },
              ],
            },
            reflection: {
              id: "refl-14",
              type: "reflection",
              text: "Jesús cumplió la ley perfectamente por nosotros. ¿Cómo afecta esto tu relación con los mandamientos?",
              options: [
                {
                  id: "opt-1",
                  text: "Me libera del legalismo",
                  response: "Sí! Ya no obedecemos para ser salvos, sino porque somos salvos. La motivación cambia.",
                },
                {
                  id: "opt-2",
                  text: "Me da poder para obedecer",
                  response: "Exacto! El Espíritu Santo nos capacita para vivir según la voluntad de Dios.",
                },
                {
                  id: "opt-3",
                  text: "Me muestra mi necesidad de Cristo",
                  response: "La ley es nuestro ayo para llevarnos a Cristo. Nos muestra cuánto necesitamos su gracia.",
                },
              ],
            },
          },
        },
        {
          id: "lesson-exodus-15",
          sectionId: "exodus-sinai-pacto",
          title: "Leyes sobre Siervos y Violencia",
          description: "Justicia y misericordia en la ley",
          scripture: "Éxodo 21:1-36",
          estimatedMinutes: 12,
          order: 15,
          locked: true,
          content: {
            introduction: {
              id: "intro-15",
              type: "narration",
              text: "Después de los Diez Mandamientos, Dios dio leyes específicas para gobernar la vida en comunidad. Hoy veremos leyes sobre esclavitud y violencia que, aunque parezcan extrañas, contenían principios revolucionarios para su tiempo. ¿Listo?",
              options: [
                {
                  id: "opt-1",
                  text: "Sé que hay leyes detalladas",
                  response: "Correcto! Pero hoy descubriremos la misericordia y justicia detrás de estas leyes.",
                },
                {
                  id: "opt-2",
                  text: "Algunas leyes me confunden",
                  response: "Es común! Veremos cómo entenderlas en su contexto histórico y ver principios eternos.",
                },
                {
                  id: "opt-3",
                  text: "No conozco estas leyes",
                  response: "Perfecto! Descubrirás cómo Dios estableció justicia en una sociedad antigua.",
                },
              ],
            },
            teaching: [
              {
                id: "teach-1",
                type: "scripture",
                text: "Leyes sobre siervos hebreos:",
                scripture: '"Si comprares siervo hebreo, seis años servirá; mas al séptimo saldrá libre, de balde." - Éxodo 21:2',
              },
              {
                id: "teach-2",
                type: "question",
                text: "La esclavitud por deudas duraba solo seis años. ¿Por qué este límite?",
                options: [
                  {
                    id: "opt-1",
                    text: "Evitaba esclavitud perpetua",
                    response: "Exactamente! En contraste con otras naciones, Israel limitaba la esclavitud. Mostraba valor de la libertad.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Reconocía dignidad humana",
                    response: "Muy bien! Aunque permitía esclavitud por deudas, la limitaba, reconociendo que todos son imagen de Dios.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Enseñaba principio de gracia",
                    response: "Correcto! Como Dios los liberó de Egipto, debían liberar a otros. La gracia recibida debe extenderse.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-3",
                type: "scripture",
                text: "Protección para mujeres siervas:",
                scripture: '"Si su señor le hubiere desposado con su hija... según se acostumbra con las hijas, hará con ella." - Éxodo 21:9',
              },
              {
                id: "teach-4",
                type: "narration",
                text: "Las mujeres siervas tenían protecciones especiales. Si eran tomadas como esposas, no podían ser tratadas como esclavas comunes.",
              },
              {
                id: "teach-5",
                type: "scripture",
                text: "Ley del talión:",
                scripture: '"Mas si hubiere muerte, entonces pagarás vida por vida, ojo por ojo, diente por diente..." - Éxodo 21:23-25',
              },
              {
                id: "teach-6",
                type: "question",
                text: "'Ojo por ojo' parece severo. ¿Cuál era su propósito?",
                options: [
                  {
                    id: "opt-1",
                    text: "Limitar la venganza",
                    response: "Exactamente! En una cultura de venganza ilimitada, esto limitaba la retribución al daño causado.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Establecer justicia proporcional",
                    response: "Muy bien! El castigo debía corresponder al crimen, no excederlo. Era principio de justicia, no crueldad.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Proteger a los débiles",
                    response: "Correcto! Los poderosos no podían infligir castigos excesivos a los débiles. Todos igual ante la ley.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-7",
                type: "scripture",
                text: "Distinción entre intencional y accidental:",
                scripture: '"Mas si no hubiere acechanza, sino que Dios lo pusiera en sus manos, entonces yo te señalaré lugar al cual ha de huir." - Éxodo 21:13',
              },
              {
                id: "teach-8",
                type: "narration",
                text: "Dios distinguía entre homicidio premeditado y accidental. La intención del corazón importaba en la aplicación de la justicia.",
              },
              {
                id: "teach-9",
                type: "scripture",
                text: "Protección para esclavos:",
                scripture: '"Y si hiriere alguno a su siervo o a su sierva... y muriere, será castigado." - Éxodo 21:20',
              },
              {
                id: "teach-10",
                type: "question",
                text: "Los amos eran castigados por matar esclavos. ¿Qué nos enseña?",
                options: [
                  {
                    id: "opt-1",
                    text: "Valor de toda vida humana",
                    response: "Exacto! Aunque esclavos, su vida tenía valor. No eran propiedad desechable.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Límites al poder de amos",
                    response: "Muy bien! El poder de los amos no era absoluto. Estaban bajo la ley de Dios.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Dios defiende al vulnerable",
                    response: "Correcto! En una sociedad donde los esclavos no tenían derechos, Dios les daba protección.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-11",
                type: "scripture",
                text: "Responsabilidad por negligencia:",
                scripture: '"Si alguno abriere un pozo... y cayere en él buey o asno, el dueño del pozo pagará el dinero." - Éxodo 21:33-34',
              },
              {
                id: "teach-12",
                type: "narration",
                text: "Las leyes incluían responsabilidad civil. La negligencia tenía consecuencias, enseñando cuidado por la seguridad pública.",
              },
              {
                id: "teach-13",
                type: "scripture",
                text: "Jesús y la ley:",
                scripture: '"No penséis que he venido para abrogar la ley o los profetas; no he venido para abrogar, sino para cumplir." - Mateo 5:17',
              },
              {
                id: "teach-14",
                type: "narration",
                text: "Jesús no eliminó la ley, sino que la cumplió perfectamente y nos dio su Espíritu para vivir según sus principios eternos.",
              },
            ],
            application: {
              id: "app-15",
              type: "reflection",
              text: "Dios estableció justicia para proteger a los vulnerables. ¿Cómo puedes defender la justicia en tu contexto?",
              options: [
                {
                  id: "opt-1",
                  text: "Abogando por los que no tienen voz",
                  response: "Hermosa aplicación! Como Dios defendió a esclavos, nosotros podemos defender a los marginados.",
                },
                {
                  id: "opt-2",
                  text: "Viviendo con integridad",
                  response: "La justicia comienza con nosotros. Ser honestos en lo pequeño prepara para lo grande.",
                },
                {
                  id: "opt-3",
                  text: "Enseñando principios bíblicos",
                  response: "La sociedad necesita fundamentos bíblicos de justicia. Comparte estos principios con sabiduría.",
                },
              ],
            },
            reflection: {
              id: "refl-15",
              type: "reflection",
              text: "Dios se preocupa por detalles de la vida diaria. ¿Incluyes a Dios en todas las áreas de tu vida?",
              options: [
                {
                  id: "opt-1",
                  text: "En algunas áreas más que otras",
                  response: "Es un proceso! Pide a Dios que te muestre áreas donde necesitas invitarlo más.",
                },
                {
                  id: "opt-2",
                  text: "Sí, trato de incluirle en todo",
                  response: "Qué bendición! La vida integrada honra a Dios y trae coherencia a nuestro caminar.",
                },
                {
                  id: "opt-3",
                  text: "Necesito crecer en esto",
                  response: "Todos lo necesitamos! Comienza con una área específica y pide a Dios guiarte.",
                },
              ],
            },
          },
        },
        {
          id: "lesson-exodus-16",
          sectionId: "exodus-sinai-pacto",
          title: "Leyes sobre Propiedad y Moralidad",
          description: "Principios para la vida comunitaria",
          scripture: "Éxodo 22:1-31",
          estimatedMinutes: 11,
          order: 16,
          locked: true,
          content: {
            introduction: {
              id: "intro-16",
              type: "narration",
              text: "Continuamos explorando las leyes que Dios dio para gobernar la vida en Israel. Hoy veremos principios sobre propiedad, moralidad y cuidado del vulnerable que revelan el corazón compasivo de Dios. ¿Listo para descubrirlos?",
              options: [
                {
                  id: "opt-1",
                  text: "Sé que hay leyes sobre propiedad",
                  response: "Excelente! Pero hoy veremos cómo estas leyes reflejan el carácter de Dios.",
                },
                {
                  id: "opt-2",
                  text: "Algunas leyes me parecen extrañas",
                  response: "Es común! Veremos el contexto cultural y los principios eternos detrás de ellas.",
                },
                {
                  id: "opt-3",
                  text: "No conozco estas leyes",
                  response: "Perfecto! Descubrirás la sabiduría práctica que Dios dio a su pueblo.",
                },
              ],
            },
            teaching: [
              {
                id: "teach-1",
                type: "scripture",
                text: "Restitución por robo:",
                scripture: '"Si el ladrón fuere hallado forzando una casa, y fuere herido y muriere, el que le hirió no será culpado de su muerte." - Éxodo 22:2',
              },
              {
                id: "teach-2",
                type: "question",
                text: "Matar a un ladrón de noche no era castigado. ¿Por qué?",
                options: [
                  {
                    id: "opt-1",
                    text: "Defensa propia legítima",
                    response: "Exactamente! De noche, no se podía identificar al intruso ni sus intenciones. La defensa era razonable.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Protección del hogar",
                    response: "Muy bien! El hogar es espacio sagrado. La ley protegía el derecho a defender la familia y propiedad.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Distinción día/noche",
                    response: "Correcto! De día, con luz, había menos justificación para violencia letal. Mostraba sabiduría contextual.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-3",
                type: "scripture",
                text: "Restitución múltiple:",
                scripture: '"Si el sol hubiere salido sobre él, será reo de muerte... Si fuere hallado con el hurto en su mano... pagará el doble." - Éxodo 22:3-4',
              },
              {
                id: "teach-4",
                type: "narration",
                text: "La restitución doble o cuádruple no solo compensaba a la víctima, sino que desincentivaba el robo.",
              },
              {
                id: "teach-5",
                type: "scripture",
                text: "Responsabilidad por propiedad prestada:",
                scripture: '"Si alguno diere a su prójimo plata o alhajas a guardar, y fuere hurtado... si el ladrón fuere hallado, pagará el doble." - Éxodo 22:7',
              },
              {
                id: "teach-6",
                type: "question",
                text: "Las leyes regulaban préstamos y depósitos. ¿Qué principio enseñan?",
                options: [
                  {
                    id: "opt-1",
                    text: "Responsabilidad en relaciones económicas",
                    response: "Exacto! Las transacciones económicas requerían integridad y responsabilidad.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Confianza comunitaria",
                    response: "Muy bien! La capacidad de prestar y guardar propiedad ajena construye confianza social.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Justicia restaurativa",
                    response: "Correcto! El enfoque no era solo castigar, sino restaurar lo perdido y más.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-7",
                type: "scripture",
                text: "Protección para vulnerables:",
                scripture: '"Y a la viuda y al huérfano no afligiréis. Si los afligieres... y ellos clamaren a mí, ciertamente oiré yo su clamor." - Éxodo 22:22-23',
              },
              {
                id: "teach-8",
                type: "narration",
                text: "Dios se identifica especialmente con viudas y huérfanos. Su protección era mandato divino, no opción.",
              },
              {
                id: "teach-9",
                type: "scripture",
                text: "Préstamos sin interés:",
                scripture: '"Cuando dieres dinero a mi pueblo... no le impondrás usura." - Éxodo 22:25',
              },
              {
                id: "teach-10",
                type: "question",
                text: "Prohibir usura a los pobres. ¿Por qué?",
                options: [
                  {
                    id: "opt-1",
                    text: "Compasión por los necesitados",
                    response: "Exactamente! Explotar la necesidad ajena con intereses altos viola la compasión.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Evitar esclavitud por deudas",
                    response: "Muy bien! Los intereses excesivos podían llevar a pobreza perpetua. Dios protege contra esto.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Confianza en la provisión divina",
                    response: "Correcto! En vez de ganar mediante usura, debían confiar que Dios bendeciría su generosidad.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-11",
                type: "scripture",
                text: "Respeto a autoridades:",
                scripture: '"No injuriarás a los jueces, ni maldecirás al príncipe de tu pueblo." - Éxodo 22:28',
              },
              {
                id: "teach-12",
                type: "narration",
                text: "El respeto a las autoridades establecidas promovía orden social, aunque luego veremos que la desobediencia civil tiene lugar cuando autoridades contradicen a Dios.",
              },
              {
                id: "teach-13",
                type: "scripture",
                text: "Consagración a Dios:",
                scripture: '"Y me seréis varones santos." - Éxodo 22:31',
              },
              {
                id: "teach-14",
                type: "narration",
                text: "Todas estas leyes prácticas fluían del llamado fundamental: ser pueblo santo, apartado para Dios.",
              },
            ],
            application: {
              id: "app-16",
              type: "reflection",
              text: "Dios protege especialmente a vulnerables. ¿Cómo puedes practicar esta compasión en tu vida?",
              options: [
                {
                  id: "opt-1",
                  text: "Ayudando a necesitados en mi comunidad",
                  response: "Hermosa aplicación! Pequeños actos de bondad reflejan el corazón de Dios.",
                },
                {
                  id: "opt-2",
                  text: "Defendiendo a los que no pueden defenderse",
                  response: "Qué importante! Usar nuestra voz para los sin voz es ministerio poderoso.",
                },
                {
                  id: "opt-3",
                  text: "Siendo generoso con mi tiempo y recursos",
                  response: "La generosidad rompe el egoísmo y abre puertas para Dios obrar.",
                },
              ],
            },
            reflection: {
              id: "refl-16",
              type: "reflection",
              text: "'Me seréis varones santos'. La santidad afecta todas las áreas de la vida. ¿Hay áreas que necesitan consagración?",
              options: [
                {
                  id: "opt-1",
                  text: "Mis finanzas",
                  response: "Las decisiones económicas revelan prioridades. Pide a Dios sabiduría para manejar recursos con integridad.",
                },
                {
                  id: "opt-2",
                  text: "Mis relaciones",
                  response: "Las relaciones santas honran a Dios. Pídele guía para amar como Él ama.",
                },
                {
                  id: "opt-3",
                  text: "Mi tiempo",
                  response: "El tiempo es don de Dios. Busca usar tu tiempo de manera que glorifique a Él.",
                },
              ],
            },
          },
        },
        {
          id: "lesson-exodus-17",
          sectionId: "exodus-sinai-pacto",
          title: "Leyes de Justicia y Festividades",
          description: "Orden social y adoración comunitaria",
          scripture: "Éxodo 23:1-33",
          estimatedMinutes: 12,
          order: 17,
          locked: true,
          content: {
            introduction: {
              id: "intro-17",
              type: "narration",
              text: "Continuamos con leyes que establecen justicia en los tribunales y celebraciones que marcan el ritmo de la vida religiosa. Hoy veremos cómo Dios quería que su pueblo viviera en justicia y recordara su fidelidad. ¿Listo?",
              options: [
                {
                  id: "opt-1",
                  text: "Sé sobre las festividades",
                  response: "Excelente! Pero hoy veremos su significado profundo y aplicación práctica.",
                },
                {
                  id: "opt-2",
                  text: "Conozco algunas leyes judiciales",
                  response: "Perfecto! Descubriremos cómo estos principios de justicia son relevantes hoy.",
                },
                {
                  id: "opt-3",
                  text: "No conozco este pasaje",
                  response: "Qué privilegio descubrirlo! Estas leyes moldearon la conciencia occidental.",
                },
              ],
            },
            teaching: [
              {
                id: "teach-1",
                type: "scripture",
                text: "Justicia en testimonios:",
                scripture: '"No admitirás falso rumor. No te concertarás con el impío para ser testigo fraudulento." - Éxodo 23:1',
              },
              {
                id: "teach-2",
                type: "question",
                text: "Prohibir 'falso rumor' y 'testigo fraudulento'. ¿Por qué el énfasis en testimonios?",
                options: [
                  {
                    id: "opt-1",
                    text: "La justicia depende de la verdad",
                    response: "Exactamente! Sin testimonios veraces, no puede haber justicia real.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Las palabras tienen poder",
                    response: "Muy bien! Los testimonios falsos pueden destruir vidas inocentes. Dios valora la integridad verbal.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Protección contra corrupción",
                    response: "Correcto! Concertarse con impíos para testimonios falsos es corrupción judicial. Dios la aborrece.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-3",
                type: "scripture",
                text: "Imparcialidad judicial:",
                scripture: '"No seguirás a los muchos para hacer mal, ni responderás en litigio inclinándote a los más para hacer agravios." - Éxodo 23:2',
              },
              {
                id: "teach-4",
                type: "narration",
                text: "La justicia no debe seguir a la multitud ni favorecer a los poderosos. Debe ser imparcial, basada en verdad, no en popularidad.",
              },
              {
                id: "teach-5",
                type: "scripture",
                text: "Ayuda al enemigo:",
                scripture: '"Si encontrares el buey de tu enemigo o su asno extraviado, vuelve a llevárselo." - Éxodo 23:4',
              },
              {
                id: "teach-6",
                type: "question",
                text: "Ayudar al enemigo. ¿Qué principio revolucionario enseña?",
                options: [
                  {
                    id: "opt-1",
                    text: "El bien sobrepasa relaciones rotas",
                    response: "Exactamente! Hacer el bien no depende de cómo otros nos traten.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "La justicia trasciende enemistades",
                    response: "Muy bien! El bien común y la justicia son más importantes que conflictos personales.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Prepara para el amor al enemigo",
                    response: "Correcto! Jesús llevaría este principio a su plenitud con 'amad a vuestros enemigos'.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-7",
                type: "scripture",
                text: "El año sabático:",
                scripture: '"Seis años sembrarás tu tierra, y recogerás su cosecha; mas el séptimo año la dejarás libre." - Éxodo 23:10-11',
              },
              {
                id: "teach-8",
                type: "narration",
                text: "Cada séptimo año, la tierra descansaba y lo que crecía espontáneamente era para pobres y animales. Enseñaba dependencia de Dios y compasión.",
              },
              {
                id: "teach-9",
                type: "scripture",
                text: "Las tres fiestas anuales:",
                scripture: '"Tres veces en el año me celebraréis fiesta... la fiesta de los panes sin levadura... la fiesta de la siega... la fiesta de la cosecha." - Éxodo 23:14-16',
              },
              {
                id: "teach-10",
                type: "question",
                text: "Tres veces al año todos los varones debían presentarse ante Dios. ¿Qué propósito tenía?",
                options: [
                  {
                    id: "opt-1",
                    text: "Renovación espiritual regular",
                    response: "Exacto! Las festividades mantenían viva la fe y renovaban el pacto regularmente.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Unidad nacional",
                    response: "Muy bien! Reunirse de todas partes creaba identidad nacional y unidad espiritual.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Recordatorio de la fidelidad de Dios",
                    response: "Correcto! Cada fiesta commemoraba algo que Dios había hecho por ellos.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-11",
                type: "scripture",
                text: "Promesa de protección divina:",
                scripture: '"He aquí yo envío mi Angel delante de ti para que te guarde en el camino." - Éxodo 23:20',
              },
              {
                id: "teach-12",
                type: "narration",
                text: "La obediencia a la ley venía con promesas de protección y bendición. Dios se comprometía a cuidar a su pueblo obediente.",
              },
              {
                id: "teach-13",
                type: "scripture",
                text: "Advertencia sobre idolatría:",
                scripture: '"No te inclinarás a sus dioses, ni los servirás, ni harás como ellos hacen." - Éxodo 23:24',
              },
              {
                id: "teach-14",
                type: "narration",
                text: "La separación de prácticas paganas era esencial para mantener la pureza del culto a Dios.",
              },
            ],
            application: {
              id: "app-17",
              type: "reflection",
              text: "Dios mandó ayudar incluso al enemigo. ¿Hay alguien con quien necesites practicar esta bondad?",
              options: [
                {
                  id: "opt-1",
                  text: "Sí, con alguien que me ha hecho daño",
                  response: "Es difícil pero transformador! La bondad puede romper ciclos de enemistad.",
                },
                {
                  id: "opt-2",
                  text: "Con alguien con quien tengo conflicto",
                  response: "Los conflictos son oportunidades para mostrar el carácter de Cristo.",
                },
                {
                  id: "opt-3",
                  text: "Quiero prepararme para cuando surja",
                  response: "Sabia preparación! Pide a Dios un corazón dispuesto a hacer el bien a todos.",
                },
              ],
            },
            reflection: {
              id: "refl-17",
              type: "reflection",
              text: "Las festividades recordaban la fidelidad de Dios. ¿Qué prácticas tienes para recordar lo que Dios ha hecho?",
              options: [
                {
                  id: "opt-1",
                  text: "Tiempo devocional regular",
                  response: "Qué importante! La disciplina devocional mantiene viva nuestra memoria de Dios.",
                },
                {
                  id: "opt-2",
                  text: "Celebro hitos espirituales",
                  response: "Hermosa práctica! Celebrar lo que Dios ha hecho fortalece nuestra fe.",
                },
                {
                  id: "opt-3",
                  text: "Necesito ser más intencional",
                  response: "Comienza pequeño! Un diario de gratitud o recordar respuestas a oración.",
                },
              ],
            },
          },
        },
        {
          id: "lesson-exodus-18",
          sectionId: "exodus-sinai-pacto",
          title: "Ratificación del Pacto",
          description: "El pueblo confirma su compromiso con Dios",
          scripture: "Éxodo 24:1-18",
          estimatedMinutes: 11,
          order: 18,
          locked: true,
          content: {
            introduction: {
              id: "intro-18",
              type: "narration",
              text: "Después de recibir las leyes, llegó el momento de confirmar formalmente el pacto entre Dios e Israel. Hoy veremos una ceremonia sagrada que sellaría esta relación especial. ¿Listo para este momento histórico?",
              options: [
                {
                  id: "opt-1",
                  text: "Sé que hicieron un pacto",
                  response: "Excelente! Pero hoy veremos los detalles ricos de esta ceremonia y su significado.",
                },
                {
                  id: "opt-2",
                  text: "Conozco que Moisés subió al monte",
                  response: "Correcto! Pero antes de subir, hubo una ceremonia importante que veremos hoy.",
                },
                {
                  id: "opt-3",
                  text: "No conozco esta historia",
                  response: "Perfecto! Estás a punto de presenciar uno de los momentos cumbres del Antiguo Testamento.",
                },
              ],
            },
            teaching: [
              {
                id: "teach-1",
                type: "scripture",
                text: "La invitación especial:",
                scripture: '"Y a Moisés dijo: Sube a Jehová, tú, y Aarón, Nadab, y Abiú, y setenta de los ancianos de Israel; y os inclinaréis desde lejos." - Éxodo 24:1',
              },
              {
                id: "teach-2",
                type: "question",
                text: "Dios invitó a líderes específicos a acercarse. ¿Qué significado tiene?",
                options: [
                  {
                    id: "opt-1",
                    text: "Representación del pueblo",
                    response: "Exactamente! Los líderes representaban a todo Israel en la ceremonia del pacto.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Grados de cercanía a Dios",
                    response: "Muy bien! Moisés se acercaba más, luego los líderes, luego el pueblo. Hay niveles en la relación con Dios.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Responsabilidad de liderazgo",
                    response: "Correcto! Los líderes tenían mayor responsabilidad en mantener el pacto.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-3",
                type: "scripture",
                text: "Moisés comunica el pacto:",
                scripture: '"Y Moisés vino y contó al pueblo todas las palabras de Jehová, y todas las leyes; y todo el pueblo respondió a una voz, y dijo: Haremos todas las palabras que Jehová ha dicho." - Éxodo 24:3',
              },
              {
                id: "teach-4",
                type: "narration",
                text: "Por segunda vez, el pueblo se compromete a obedecer, ahora con mayor entendimiento después de escuchar las leyes específicas.",
              },
              {
                id: "teach-5",
                type: "scripture",
                text: "El altar y las doce columnas:",
                scripture: '"Y Moisés escribió todas las palabras de Jehová, y levantándose de mañana edificó un altar al pie del monte, y doce columnas, según las doce tribus de Israel." - Éxodo 24:4',
              },
              {
                id: "teach-6",
                type: "question",
                text: "Doce columnas para doce tribus. ¿Qué simbolizaba?",
                options: [
                  {
                    id: "opt-1",
                    text: "Representación de todo el pueblo",
                    response: "Exacto! Cada tribu estaba representada en el pacto. Nadie quedaba excluido.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Unidad en la diversidad",
                    response: "Muy bien! Doce tribus distintas, pero un solo pueblo en pacto con Dios.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Testimonio permanente",
                    response: "Correcto! Las columnas servirían como recordatorio físico del compromiso.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-7",
                type: "scripture",
                text: "El sacrificio y la sangre:",
                scripture: '"Y envió jóvenes de los hijos de Israel, los cuales ofrecieron holocaustos y sacrificaron becerros... Y Moisés tomó la mitad de la sangre, y la puso en tazones, y esparció la otra mitad de la sangre sobre el altar." - Éxodo 24:5-6',
              },
              {
                id: "teach-8",
                type: "narration",
                text: "La sangre era esencial en los pactos antiguos. Simbolizaba la vida y la seriedad del compromiso: la ruptura del pacto merecía muerte.",
              },
              {
                id: "teach-9",
                type: "scripture",
                text: "La lectura del libro del pacto:",
                scripture: '"Y tomó el libro del pacto y lo leyó a oídos del pueblo, el cual dijo: Haremos todas las cosas que Jehová ha dicho, y obedeceremos." - Éxodo 24:7',
              },
              {
                id: "teach-10",
                type: "question",
                text: "Moisés leyó el 'libro del pacto'. ¿Qué contenía?",
                options: [
                  {
                    id: "opt-1",
                    text: "Los términos del pacto",
                    response: "Exactamente! Contenía las leyes que Dios había dado, los términos de la relación.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Compromiso mutuo",
                    response: "Muy bien! Dios se comprometía a ser su Dios y protegerlos; ellos a obedecerle.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Base para la relación",
                    response: "Correcto! Como contrato matrimonial, establecía los términos de la relación pactada.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-11",
                type: "scripture",
                text: "La aspersión de la sangre:",
                scripture: '"Entonces Moisés tomó la sangre y roció sobre el pueblo, y dijo: He aquí la sangre del pacto que Jehová ha hecho con vosotros sobre todas estas cosas." - Éxodo 24:8',
              },
              {
                id: "teach-12",
                type: "narration",
                text: "Esta sangre prefiguraba la sangre de Cristo que establecería el nuevo pacto. Jesús mismo citaría estas palabras en la última cena.",
              },
              {
                id: "teach-13",
                type: "scripture",
                text: "La visión de Dios:",
                scripture: '"Y subieron Moisés y Aarón, Nadab y Abiú, y setenta de los ancianos de Israel; y vieron al Dios de Israel... y comieron y bebieron." - Éxodo 24:9-11',
              },
              {
                id: "teach-14",
                type: "question",
                text: "Los líderes vieron a Dios y comieron en su presencia. ¿Qué significa?",
                options: [
                  {
                    id: "opt-1",
                    text: "Comunión con Dios",
                    response: "Exactamente! Compartir comida simbolizaba paz y comunión. El pacto restauraba relación.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Confirmación del pacto",
                    response: "Muy bien! Como banquetes que sellaban acuerdos, esta comida confirmaba el pacto.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Privilegio de la relación",
                    response: "Correcto! Acceder a la presencia de Dios era privilegio del pacto.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-15",
                type: "scripture",
                text: "Moisés en la nube:",
                scripture: '"Y la apariencia de la gloria de Jehová era como un fuego abrasador en la cumbre del monte, a los ojos de los hijos de Israel. Y entró Moisés en medio de la nube, y subió al monte." - Éxodo 24:17-18',
              },
              {
                id: "teach-16",
                type: "narration",
                text: "Moisés pasó 40 días en la presencia de Dios. Este tiempo transformaría su vida y le daría las instrucciones para el tabernáculo.",
              },
            ],
            application: {
              id: "app-18",
              type: "reflection",
              text: "Israel se comprometió solemnemente con Dios. ¿Hay áreas donde necesitas renovar tu compromiso con Él?",
              options: [
                {
                  id: "opt-1",
                  text: "Mi obediencia diaria",
                  response: "El compromiso se vive en lo cotidiano. Pequeñas obediencias preparan para las grandes.",
                },
                {
                  id: "opt-2",
                  text: "Mi tiempo con Dios",
                  response: "La relación requiere tiempo intencional. Renueva tu compromiso de buscar a Dios cada día.",
                },
                {
                  id: "opt-3",
                  text: "Mi servicio a otros",
                  response: "El pacto con Dios siempre incluye amor al prójimo. Renueva tu compromiso de servir.",
                },
              ],
            },
            reflection: {
              id: "refl-18",
              type: "reflection",
              text: "La sangre selló el pacto antiguo; la sangre de Cristo sella el nuevo. ¿Valoras adecuadamente el costo de tu salvación?",
              options: [
                {
                  id: "opt-1",
                  text: "A veces lo doy por sentado",
                  response: "Es humano! Pide a Dios renovar tu asombro por la gracia que costó tan caro.",
                },
                {
                  id: "opt-2",
                  text: "Me conmueve profundamente",
                  response: "Qué bendición! Que ese asombro siempre impulse tu gratitud y obediencia.",
                },
                {
                  id: "opt-3",
                  text: "Quiero entenderlo más",
                  response: "Búsqueda hermosa! Pide al Espíritu revelarte las profundidades del amor de Cristo.",
                },
              ],
            },
          },
        },
      ],
    },
  ],
}
