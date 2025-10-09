import type { LessonBook } from "./types"

export const EXODUS_BOOK_PART4: LessonBook = {
  id: "exodus-part4",
  religion: "cristianismo",
  title: "Éxodo - Parte 4",
  description: "El Tabernáculo y la Adoración",
  icon: "⛺",
  testament: "antiguo",
  category: "Pentateuco",
  sections: [
    {
      id: "exodus-tabernaculo-adoracion",
      bookId: "exodus",
      title: "El Tabernáculo y la Adoración",
      description: "Diseño, construcción y significado del lugar santo",
      order: 4,
      lessons: [
        {
          id: "lesson-exodus-19",
          sectionId: "exodus-tabernaculo-adoracion",
          title: "Instrucciones para el Tabernáculo",
          description: "El diseño del lugar santo",
          scripture: "Éxodo 25:1-40",
          estimatedMinutes: 12,
          order: 19,
          locked: true,
          content: {
            introduction: {
              id: "intro-19",
              type: "narration",
              text: "Después de establecer el pacto, Dios dio a Moisés instrucciones detalladas para construir un santuario donde Él habitaría entre su pueblo. Hoy exploraremos el significado profundo del Tabernáculo. ¿Estás listo?",
              options: [
                {
                  id: "opt-1",
                  text: "Sé sobre el Tabernáculo",
                  response: "Excelente! Pero hoy veremos cómo cada detalle apunta a Cristo y nuestra relación con Dios.",
                },
                {
                  id: "opt-2",
                  text: "Conozco algunas partes",
                  response: "Perfecto! Profundizaremos en el significado espiritual de cada elemento.",
                },
                {
                  id: "opt-3",
                  text: "No conozco bien el Tabernáculo",
                  response: "Qué privilegio descubrirlo! El Tabernáculo es una de las imágenes más ricas de Cristo en el AT.",
                },
              ],
            },
            teaching: [
              {
                id: "teach-1",
                type: "scripture",
                text: "La ofrenda voluntaria:",
                scripture: '"Jehová habló a Moisés, diciendo: Di a los hijos de Israel que tomen para mí ofrenda; de todo varón que la diere de su voluntad, de corazón, tomaréis mi ofrenda." - Éxodo 25:1-2',
              },
              {
                id: "teach-2",
                type: "question",
                text: "Dios pidió ofrendas 'de voluntad, de corazón'. ¿Qué principio establece?",
                options: [
                  {
                    id: "opt-1",
                    text: "La adoración debe ser voluntaria",
                    response: "Exactamente! Dios no fuerza la adoración; quiere corazones que le den libremente.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "La motivación del corazón importa",
                    response: "Muy bien! No es la cantidad lo que importa, sino la actitud del corazón que da.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Prepara para la ofrenda de Cristo",
                    response: "Correcto! Así como Israel dio voluntariamente, Cristo se ofreció voluntariamente por nosotros.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-3",
                type: "scripture",
                text: "El propósito del Tabernáculo:",
                scripture: '"Y harán un santuario para mí, y habitaré en medio de ellos." - Éxodo 25:8',
              },
              {
                id: "teach-4",
                type: "narration",
                text: "El Dios infinito y todopoderoso quiso habitar entre un pueblo finito. Esto muestra su deseo de relación íntima con su creación.",
              },
              {
                id: "teach-5",
                type: "scripture",
                text: "El Arca del Pacto:",
                scripture: '"Harán también un arca de madera de acacia... Y la cubrirás de oro puro por dentro y por fuera." - Éxodo 25:10-11',
              },
              {
                id: "teach-6",
                type: "question",
                text: "El Arca era de madera cubierta de oro. ¿Qué podría simbolizar?",
                options: [
                  {
                    id: "opt-1",
                    text: "La humanidad y divinidad de Cristo",
                    response: "Exactamente! La madera representa su humanidad; el oro, su divinidad.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "La gloria de Dios en vasos humanos",
                    response: "Muy bien! Como nosotros somos 'vasos de barro' que contienen el tesoro del evangelio.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "La naturaleza humana redimida",
                    response: "Correcto! La humanidad (madera) cubierta por la justicia de Cristo (oro).",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-7",
                type: "scripture",
                text: "El Propiciatorio:",
                scripture: '"Harás además un propiciatorio de oro puro... De un extremo del propiciatorio harás un querubín, y del otro extremo harás otro querubín." - Éxodo 25:17-18',
              },
              {
                id: "teach-8",
                type: "narration",
                text: "El propiciatorio era la 'tapa' del Arca, donde la sangre era asperjada en el día de la expiación. Representa el trono de gracia donde Dios se encuentra con el pecador.",
              },
              {
                id: "teach-9",
                type: "scripture",
                text: "La Mesa del Pan de la Proposición:",
                scripture: '"Harás además una mesa de madera de acacia... y harás sus platos, sus cucharas, sus cubiertas y sus tazones, con que se libará; de oro puro los harás." - Éxodo 25:23-24, 29',
              },
              {
                id: "teach-10",
                type: "question",
                text: "El pan constante sobre la mesa. ¿Qué representa?",
                options: [
                  {
                    id: "opt-1",
                    text: "Cristo, el pan de vida",
                    response: "Exactamente! Jesús dijo 'Yo soy el pan de vida'. Él sustenta espiritualmente.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Comunión constante con Dios",
                    response: "Muy bien! El pan siempre presente muestra que Dios siempre está disponible para comunión.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "La Palabra de Dios como alimento",
                    response: "Correcto! Como el pan alimenta el cuerpo, la Palabra alimenta el alma.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-11",
                type: "scripture",
                text: "El Candelero de Oro:",
                scripture: '"Harás además un candelero de oro puro... sus seis brazos saldrán de sus lados... y harás sus siete lámparas." - Éxodo 25:31, 37',
              },
              {
                id: "teach-12",
                type: "narration",
                text: "El candelero de siete brazos iluminaba el Lugar Santo. Representa a Cristo como luz del mundo y al Espíritu Santo iluminando a la iglesia.",
              },
              {
                id: "teach-13",
                type: "scripture",
                text: "El Nuevo Testamento explica:",
                scripture: '"Y aquel Verbo fue hecho carne, y habitó entre nosotros (y vimos su gloria, gloria como del unigénito del Padre)." - Juan 1:14',
              },
              {
                id: "teach-14",
                type: "narration",
                text: "Juan usa la palabra 'tabernaculizó' - Jesús es el verdadero Tabernáculo donde Dios habita entre los hombres.",
              },
            ],
            application: {
              id: "app-19",
              type: "reflection",
              text: "Dios quería habitar entre su pueblo. ¿Estás consciente de que Dios quiere habitar en tu vida mediante el Espíritu Santo?",
              options: [
                {
                  id: "opt-1",
                  text: "Sí, pero a veces lo olvido",
                  response: "Es común! Pide al Espíritu recordarte diariamente que Él habita en ti.",
                },
                {
                  id: "opt-2",
                  text: "Sí, vivo consciente de su presencia",
                  response: "Qué bendición! Esa conciencia transforma cada área de la vida.",
                },
                {
                  id: "opt-3",
                  text: "Necesito cultivarlo más",
                  response: "Todos podemos crecer! La oración y meditación en la Palabra ayudan a desarrollar esta conciencia.",
                },
              ],
            },
            reflection: {
              id: "refl-19",
              type: "reflection",
              text: "Cada elemento del Tabernáculo apunta a Cristo. ¿Cómo te ayuda esto a apreciar más a Jesús?",
              options: [
                {
                  id: "opt-1",
                  text: "Me muestra la riqueza de quién es Él",
                  response: "Hermoso! Cuanto más conocemos de Cristo, más podemos amarle y adorarle.",
                },
                {
                  id: "opt-2",
                  text: "Me ayuda a entender el plan de salvación",
                  response: "Exacto! El AT está lleno de imágenes que preparaban para la venida de Cristo.",
                },
                {
                  id: "opt-3",
                  text: "Profundiza mi adoración",
                  response: "Qué maravilloso! La adoración informada por las Escrituras es más rica y significativa.",
                },
              ],
            },
          },
        },
        {
          id: "lesson-exodus-20",
          sectionId: "exodus-tabernaculo-adoracion",
          title: "El Atrio y el Altar",
          description: "El acceso a la presencia de Dios",
          scripture: "Éxodo 27:1-21",
          estimatedMinutes: 11,
          order: 20,
          locked: true,
          content: {
            introduction: {
              id: "intro-20",
              type: "narration",
              text: "Continuamos explorando el Tabernáculo, hoy enfocándonos en el atrio exterior y el altar de bronce. Veremos cómo estos elementos enseñan sobre el acceso a Dios y la necesidad de sacrificio. ¿Listo?",
              options: [
                {
                  id: "opt-1",
                  text: "Sé sobre el altar de bronce",
                  response: "Excelente! Pero hoy veremos su significado profundo en el plan de redención.",
                },
                {
                  id: "opt-2",
                  text: "Conozco el atrio exterior",
                  response: "Perfecto! Profundizaremos en lo que representa para nuestro acceso a Dios hoy.",
                },
                {
                  id: "opt-3",
                  text: "No conozco estas partes",
                  response: "Qué bien descubrirlas! Estos elementos son cruciales para entender cómo nos acercamos a Dios.",
                },
              ],
            },
            teaching: [
              {
                id: "teach-1",
                type: "scripture",
                text: "El Altar de Bronce:",
                scripture: '"Harás también un altar de madera de acacia... Y lo cubrirás de bronce." - Éxodo 27:1-2',
              },
              {
                id: "teach-2",
                type: "question",
                text: "El primer objeto en el atrio era el altar de bronce. ¿Qué enseña esto?",
                options: [
                  {
                    id: "opt-1",
                    text: "El sacrificio precede a la adoración",
                    response: "Exactamente! No podemos acercarnos a Dios sin primero tratar el problema del pecado.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "La cruz es fundamental",
                    response: "Muy bien! Así como el altar era primero, la cruz de Cristo es fundamental para nuestra fe.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "La justicia demanda expiación",
                    response: "Correcto! El bronce representa juicio. El pecado debe ser juzgado antes de la comunión.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-3",
                type: "scripture",
                text: "El fuego perpetuo:",
                scripture: '"El fuego arderá continuamente en el altar; no se apagará." - Éxodo 27:20',
              },
              {
                id: "teach-4",
                type: "narration",
                text: "El fuego nunca se apagaba, simbolizando que la necesidad de expiación es constante y que la obra de Cristo es eficaz para siempre.",
              },
              {
                id: "teach-5",
                type: "scripture",
                text: "El Atrio exterior:",
                scripture: '"Harás también el atrio del tabernáculo... de cortinas de lino torcido." - Éxodo 27:9',
              },
              {
                id: "teach-6",
                type: "question",
                text: "El atrio separaba lo santo de lo común. ¿Qué principio enseña?",
                options: [
                  {
                    id: "opt-1",
                    text: "Dios es santo y diferente",
                    response: "Exactamente! La separación enseñaba que Dios es santo y no puede ser tratado casualmente.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Acceso limitado a Dios",
                    response: "Muy bien! En el AT, el acceso era restringido. Cristo abrió un camino nuevo y vivo.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Preparación para acercarse",
                    response: "Correcto! El atrio enseñaba que acercarse a Dios requiere preparación y reverencia.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-7",
                type: "scripture",
                text: "La única entrada:",
                scripture: '"Y para la entrada del atrio habrá una cortina... de obra de recamador." - Éxodo 27:16',
              },
              {
                id: "teach-8",
                type: "narration",
                text: "Solo había una entrada al atrio, prefigurando que Jesús es el único camino al Padre.",
              },
              {
                id: "teach-9",
                type: "scripture",
                text: "Jesús como cumplimiento:",
                scripture: '"Jesús le dijo: Yo soy el camino, y la verdad, y la vida; nadie viene al Padre, sino por mí." - Juan 14:6',
              },
              {
                id: "teach-10",
                type: "narration",
                text: "Cristo es el verdadero altar, el sacrificio perfecto, y el camino de acceso al Padre.",
              },
            ],
            application: {
              id: "app-20",
              type: "reflection",
              text: "El altar nos recuerda que el pecado debe ser tratado antes de acercarnos a Dios. ¿Estás viviendo en la realidad del perdón de Cristo?",
              options: [
                {
                  id: "opt-1",
                  text: "Sí, confío en su sacrificio completo",
                  response: "Aleluya! Vive en la libertad que viene de saber que eres completamente perdonado.",
                },
                {
                  id: "opt-2",
                  text: "A veces lucho con culpa",
                  response: "El enemigo usa la culpa para paralizarnos. Recuerda: en Cristo no hay condenación.",
                },
                {
                  id: "opt-3",
                  text: "Necesito apropiarme más de su perdón",
                  response: "Pídele al Espíritu que te ayude a recibir plenamente el perdón que Cristo compró.",
                },
              ],
            },
            reflection: {
              id: "refl-20",
              type: "reflection",
              text: "Cristo es nuestro acceso al Padre. ¿Cómo afecta esto tu vida de oración y comunión con Dios?",
              options: [
                {
                  id: "opt-1",
                  text: "Me da confianza para acercarme",
                  response: "Qué precioso! Podemos venir con boldad al trono de la gracia gracias a Jesús.",
                },
                {
                  id: "opt-2",
                  text: "Me recuerda el costo de mi acceso",
                  response: "Sí, nuestro acceso costó la vida de Cristo. Que nunca lo demos por sentado.",
                },
                {
                  id: "opt-3",
                  text: "Transforma cómo me relaciono con Dios",
                  response: "Exacto! Ya no venimos como esclavos temerosos, sino como hijos amados.",
                },
              ],
            },
          },
        },
        {
          id: "lesson-exodus-21",
          sectionId: "exodus-tabernaculo-adoracion",
          title: "Las Vestiduras Sacerdotales",
          description: "La consagración para el servicio sagrado",
          scripture: "Éxodo 28:1-43",
          estimatedMinutes: 12,
          order: 21,
          locked: true,
          content: {
            introduction: {
              id: "intro-21",
              type: "narration",
              text: "Dios no solo diseñó un lugar santo, sino que también preparó vestiduras especiales para aquellos que ministrarían en su presencia. Hoy exploraremos el significado de las vestiduras sacerdotales. ¿Listo?",
              options: [
                {
                  id: "opt-1",
                  text: "Sé sobre las vestiduras",
                  response: "Excelente! Pero hoy veremos cómo cada pieza apunta a Cristo y nuestro sacerdocio.",
                },
                {
                  id: "opt-2",
                  text: "Conozco el efod y el pectoral",
                  response: "Perfecto! Profundizaremos en su significado espiritual y aplicación hoy.",
                },
                {
                  id: "opt-3",
                  text: "No conozco estas vestiduras",
                  response: "Qué bien descubrirlas! Son imágenes ricas de nuestra posición en Cristo.",
                },
              ],
            },
            teaching: [
              {
                id: "teach-1",
                type: "scripture",
                text: "El llamado al sacerdocio:",
                scripture: '"Harás llegar delante de ti a Aarón tu hermano, y a sus hijos consigo, de entre los hijos de Israel, para que sean mis sacerdotes." - Éxodo 28:1',
              },
              {
                id: "teach-2",
                type: "question",
                text: "Dios escogió específicamente a Aarón y sus hijos. ¿Qué enseña sobre el sacerdocio?",
                options: [
                  {
                    id: "opt-1",
                    text: "Dios designa quién le sirve",
                    response: "Exactamente! El sacerdocio no era por elección humana, sino por designación divina.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Prepara para Cristo como Sumo Sacerdote",
                    response: "Muy bien! Así como Aarón fue escogido, Cristo fue designado por Dios como nuestro Sumo Sacerdote.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Enseña sobre el sacerdocio de creyentes",
                    response: "Correcto! En el NT, todos los creyentes somos sacerdotes, escogidos por Dios.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-3",
                type: "scripture",
                text: "Las vestiduras para gloria y hermosura:",
                scripture: '"Y harás las vestiduras sagradas para Aarón tu hermano, para honra y hermosura." - Éxodo 28:2',
              },
              {
                id: "teach-4",
                type: "narration",
                text: "Las vestiduras no eran funcionales sino simbólicas, representando la justicia y gloria que cubren al que sirve a Dios.",
              },
              {
                id: "teach-5",
                type: "scripture",
                text: "El Efod:",
                scripture: '"Harán el efod de oro, de azul, púrpura, carmesí y lino torcido, de obra primorosa." - Éxodo 28:6',
              },
              {
                id: "teach-6",
                type: "question",
                text: "El efod era una vestidura elaborada. ¿Qué podría representar?",
                options: [
                  {
                    id: "opt-1",
                    text: "La naturaleza divino-humana de Cristo",
                    response: "Exactamente! Los materiales preciosos y humanos combinados apuntan a Cristo.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "La obra completa de redención",
                    response: "Muy bien! Los colores representan diferentes aspectos del carácter y obra de Cristo.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "La justicia del creyente",
                    response: "Correcto! En Cristo, estamos vestidos de justicia para servir a Dios.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-7",
                type: "scripture",
                text: "El Pectoral del Juicio:",
                scripture: '"Y harás el pectoral del juicio de obra primorosa... Y lo llenarás de pedrería con cuatro hileras de piedras." - Éxodo 28:15, 17',
              },
              {
                id: "teach-8",
                type: "narration",
                text: "El pectoral tenía doce piedras con los nombres de las tribus, mostrando que el sacerdote llevaba al pueblo delante de Dios.",
              },
              {
                id: "teach-9",
                type: "scripture",
                text: "Las piedras memoriales:",
                scripture: '"Y Aarón llevará los nombres de los hijos de Israel en el pectoral del juicio sobre su corazón, cuando entre en el santuario, por memorial delante de Jehová continuamente." - Éxodo 28:29',
              },
              {
                id: "teach-10",
                type: "question",
                text: "Aarón llevaba los nombres 'sobre su corazón'. ¿Qué significa?",
                options: [
                  {
                    id: "opt-1",
                    text: "Intercesión amorosa",
                    response: "Exactamente! Llevar sobre el corazón representa amor y cuidado en la intercesión.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Cristo nos lleva en su corazón",
                    response: "Muy bien! Jesús, nuestro Sumo Sacerdote, nos lleva continuamente delante del Padre.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Representación ante Dios",
                    response: "Correcto! El sacerdote representaba al pueblo, como Cristo nos representa ante el Padre.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-11",
                type: "scripture",
                text: "El Urim y el Tumim:",
                scripture: '"Y pondrás en el pectoral del juicio el Urim y el Tumim, para que estén sobre el corazón de Aarón cuando entrare delante de Jehová." - Éxodo 28:30',
              },
              {
                id: "teach-12",
                type: "narration",
                text: "El Urim y Tumim eran medios para discernir la voluntad de Dios. Hoy tenemos la Palabra completa y el Espíritu Santo para guiarnos.",
              },
              {
                id: "teach-13",
                type: "scripture",
                text: "La Diadema Santa:",
                scripture: '"Y pondrás esta diadema sobre la mitra... y estará sobre la frente de Aarón... para que Aarón lleve las iniquidades." - Éxodo 28:37-38',
              },
              {
                id: "teach-14",
                type: "narration",
                text: "La diadema decía 'Santidad a Jehová', mostrando que el sacerdote era consagrado completamente a Dios.",
              },
              {
                id: "teach-15",
                type: "scripture",
                text: "El Nuevo Testamento aplica:",
                scripture: '"Mas vosotros sois linaje escogido, real sacerdocio, nación santa, pueblo adquirido por Dios." - 1 Pedro 2:9',
              },
              {
                id: "teach-16",
                type: "narration",
                text: "Todos los creyentes somos sacerdotes bajo Cristo, nuestro Sumo Sacerdote, llamados a servir a Dios y representarle ante el mundo.",
              },
            ],
            application: {
              id: "app-21",
              type: "reflection",
              text: "Como sacerdotes bajo Cristo, ¿estás consciente de tu llamado a servir a Dios y representarle?",
              options: [
                {
                  id: "opt-1",
                  text: "Sí, pero quiero servir mejor",
                  response: "Hermoso deseo! Pide a Dios mostrarte cómo servirle más fielmente en tu contexto.",
                },
                {
                  id: "opt-2",
                  text: "Estoy aprendiendo lo que significa",
                  response: "Es un proceso! Estudia 1 Pedro 2:9-10 para entender tu identidad sacerdotal.",
                },
                {
                  id: "opt-3",
                  text: "Sí, vivo consciente de este llamado",
                  response: "Qué bendición! Que tu vida refleje siempre que perteneces y sirves al Rey.",
                },
              ],
            },
            reflection: {
              id: "refl-21",
              type: "reflection",
              text: "Cristo es nuestro Sumo Sacerdote que nos representa perfectamente. ¿Cómo te afecta saber que Él te lleva sobre su corazón?",
              options: [
                {
                  id: "opt-1",
                  text: "Me da seguridad y confianza",
                  response: "Qué preciosa seguridad! Podemos descansar en su intercesión perfecta.",
                },
                {
                  id: "opt-2",
                  text: "Me motiva a acercarme a Dios",
                  response: "Exacto! Saber que tenemos un Sumo Sacerdote comprensivo nos anima a venir con confianza.",
                },
                {
                  id: "opt-3",
                  text: "Profundiza mi gratitud",
                  response: "Hermosa respuesta! Cuanto más entendemos su obra, más crece nuestra gratitud.",
                },
              ],
            },
          },
        },
        {
          id: "lesson-exodus-22",
          sectionId: "exodus-tabernaculo-adoracion",
          title: "El Becerro de Oro",
          description: "La idolatría y la intercesión",
          scripture: "Éxodo 32:1-35",
          estimatedMinutes: 13,
          order: 22,
          locked: true,
          content: {
            introduction: {
              id: "intro-22",
              type: "narration",
              text: "Mientras Moisés estaba en el monte con Dios, el pueblo cayó en una grave idolatría. Hoy veremos la triste historia del becerro de oro y las poderosas lecciones sobre pecado y gracia. ¿Listo?",
              options: [
                {
                  id: "opt-1",
                  text: "Sé sobre el becerro de oro",
                  response: "Excelente! Pero hoy veremos principios profundos sobre idolatría e intercesión.",
                },
                {
                  id: "opt-2",
                  text: "Conozco esta historia triste",
                  response: "Perfecto! Profundizaremos en lo que nos enseña sobre el corazón humano y la misericordia divina.",
                },
                {
                  id: "opt-3",
                  text: "No conozco bien esta historia",
                  response: "Es una historia crucial que revela mucho sobre la naturaleza humana y la gracia de Dios.",
                },
              ],
            },
            teaching: [
              {
                id: "teach-1",
                type: "scripture",
                text: "La impaciencia del pueblo:",
                scripture: '"Y viendo el pueblo que Moisés tardaba en descender del monte, se acercaron entonces a Aarón y le dijeron: Levántate, haznos dioses que vayan delante de nosotros." - Éxodo 32:1',
              },
              {
                id: "teach-2",
                type: "question",
                text: "El pueblo se impacientó cuando Moisés 'tardaba'. ¿Qué nos enseña?",
                options: [
                  {
                    id: "opt-1",
                    text: "La impaciencia lleva al pecado",
                    response: "Exactamente! Cuando Dios parece 'tardar', somos tentados a tomar atajos pecaminosos.",
                    isCorrect: true,
                  },
                                    {
                    id: "opt-2",
                    text: "Queremos dios a nuestra medida",
                    response: "Muy bien! Preferimos dioses visibles y controlables antes que esperar al Dios verdadero.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "La fe se prueba en la espera",
                    response: "Correcto! Los tiempos de espera prueban si realmente confiamos en Dios o en nuestros planes.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-3",
                type: "scripture",
                text: "La respuesta de Aarón:",
                scripture: '"Y Aarón les dijo: Apartad los zarcillos de oro que están en las orejas de vuestras mujeres, de vuestros hijos y de vuestras hijas, y traédmelos." - Éxodo 32:2',
              },
              {
                id: "teach-4",
                type: "narration",
                text: "Aarón, el sumo sacerdote designado, cedió a la presión del pueblo en vez de defender la verdad. El liderazgo débil abre puertas al pecado.",
              },
              {
                id: "teach-5",
                type: "scripture",
                text: "La idolatría declarada:",
                scripture: '"Y él los tomó de las manos de ellos, y le dio forma con buril, e hizo de ello un becerro de fundición. Entonces dijeron: Israel, estos son tus dioses, que te sacaron de la tierra de Egipto." - Éxodo 32:4',
              },
              {
                id: "teach-6",
                type: "question",
                text: "Atribuyeron a un ídolo lo que solo Dios había hecho. ¿Por qué esto es tan grave?",
                options: [
                  {
                    id: "opt-1",
                    text: "Robar la gloria de Dios",
                    response: "Exactamente! Atribuir a ídolos la obra de Dios es el colmo de la ingratitud y rebelión.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Distorsionar la historia de salvación",
                    response: "Muy bien! Re-escribieron la historia para justificar su idolatría, como hacemos hoy.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Violar el primer mandamiento",
                    response: "Correcto! Directamente desobedecieron 'No tendrás dioses ajenos delante de mí'.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-7",
                type: "scripture",
                text: "Dios revela el pecado a Moisés:",
                scripture: '"Entonces Jehová dijo a Moisés: Anda, desciende, porque tu pueblo que sacaste de la tierra de Egipto se ha corrompido." - Éxodo 32:7',
              },
              {
                id: "teach-8",
                type: "narration",
                text: "Dios dice 'tu pueblo', mostrando cómo el pecado rompe la relación. Pero nota que Moisés intercederá para restaurarla.",
              },
              {
                id: "teach-9",
                type: "scripture",
                text: "La intercesión de Moisés:",
                scripture: '"Entonces Moisés oró a Jehová su Dios... Oh Jehová... Conviértete del ardor de tu ira." - Éxodo 32:11-12',
              },
              {
                id: "teach-10",
                type: "question",
                text: "Moisés intercede basado en el carácter de Dios. ¿Qué argumentos usa?",
                options: [
                  {
                    id: "opt-1",
                    text: "La reputación de Dios entre las naciones",
                    response: "Exactamente! '¿Por qué dirán los egipcios...?' Moisés apela al nombre de Dios.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Las promesas a los patriarcas",
                    response: "Muy bien! Recuerda a Dios sus pactos irrevocables con Abraham, Isaac e Israel.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "La misericordia de Dios",
                    response: "Correcto! Apela al carácter compasivo de Dios, pidiendo que se convierta de su ira.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-11",
                type: "scripture",
                text: "La ira de Moisés:",
                scripture: '"Y aconteció que cuando él llegó al campamento, y vio el becerro y las danzas, ardió la ira de Moisés, y arrojó las tablas de sus manos, y las quebró al pie del monte." - Éxodo 32:19',
              },
              {
                id: "teach-12",
                type: "narration",
                text: "Moisés quebró las tablas de la ley, mostrando simbólicamente cómo el pueblo ya había quebrantado el pacto.",
              },
              {
                id: "teach-13",
                type: "scripture",
                text: "El juicio y la intercesión continua:",
                scripture: '"Y él les respondió: Así ha dicho Jehová... Matad cada uno a su hermano... Y cayó del pueblo en aquel día como tres mil hombres... Ahora te ruego que perdones su pecado." - Éxodo 32:27, 28, 32',
              },
              {
                id: "teach-14",
                type: "narration",
                text: "Aunque hubo juicio, Moisés continuó intercediendo, incluso ofreciendo ser borrado del libro de Dios por su pueblo.",
              },
              {
                id: "teach-15",
                type: "scripture",
                text: "Cristo, el intercesor perfecto:",
                scripture: '"Por lo cual puede también salvar perpetuamente a los que por él se acercan a Dios, viviendo siempre para interceder por ellos." - Hebreos 7:25',
              },
              {
                id: "teach-16",
                type: "narration",
                text: "Moisés prefiguraba a Cristo, pero Jesús es el intercesor perfecto que realmente tomó nuestro lugar y nos reconcilia con Dios.",
              },
            ],
            application: {
              id: "app-22",
              type: "reflection",
              text: "¿Hay 'becerros de oro' en tu vida - cosas que compiten con Dios por tu adoración y lealtad?",
              options: [
                {
                  id: "opt-1",
                  text: "Sí, necesito examinar mi corazón",
                  response: "Es sabio examinarnos! Pide al Espíritu revelar cualquier ídolo sutil en tu vida.",
                },
                {
                  id: "opt-2",
                  text: "Lucho con la impaciencia como ellos",
                  response: "Es una lucha común! Pide a Dios paciencia para esperar en Sus tiempos perfectos.",
                },
                {
                  id: "opt-3",
                  text: "Quiero adorar solo a Dios",
                  response: "Hermoso deseo! La adoración pura viene de un corazón que conoce el valor de Dios.",
                },
              ],
            },
            reflection: {
              id: "refl-22",
              type: "reflection",
              text: "Moisés intercedió por el pueblo pecador. Cristo intercede por ti. ¿Cómo responde tu corazón a esta verdad?",
              options: [
                {
                  id: "opt-1",
                  text: "Con profunda gratitud",
                  response: "Qué respuesta apropiada! La intercesión de Cristo es don inmerecido que merece toda gratitud.",
                },
                {
                  id: "opt-2",
                  text: "Con confianza para acercarme a Dios",
                  response: "Exacto! Saber que Cristo intercede por nosotros nos da boldad para venir al trono de gracia.",
                },
                {
                  id: "opt-3",
                  text: "Queriendo interceder por otros",
                  response: "Hermoso! La intercesión recibida nos motiva a interceder por otros.",
                },
              ],
            },
          },
        },
        {
          id: "lesson-exodus-23",
          sectionId: "exodus-tabernaculo-adoracion",
          title: "Las Tablas Renovadas",
          description: "La gracia del segundo pacto",
          scripture: "Éxodo 34:1-35",
          estimatedMinutes: 12,
          order: 23,
          locked: true,
          content: {
            introduction: {
              id: "intro-23",
              type: "narration",
              text: "Después del pecado del becerro de oro, Dios en su gracia renovó el pacto con Israel. Hoy veremos la revelación del carácter de Dios y el nuevo comienzo que ofrece. ¿Listo para descubrir la profundidad de su misericordia?",
              options: [
                {
                  id: "opt-1",
                  text: "Sé que Dios dio segundas tablas",
                  response: "Excelente! Pero hoy veremos la revelación gloriosa del carácter de Dios en este momento.",
                },
                {
                  id: "opt-2",
                  text: "Conozco este nuevo comienzo",
                  response: "Perfecto! Profundizaremos en lo que significa que Dios sea 'misericordioso y clemente'.",
                },
                {
                  id: "opt-3",
                  text: "No conozco esta parte",
                  response: "Qué bien descubrirla! Este pasaje contiene una de las declaraciones más bellas sobre el carácter de Dios.",
                },
              ],
            },
            teaching: [
              {
                id: "teach-1",
                type: "scripture",
                text: "El llamado a subir nuevamente:",
                scripture: '"Y Jehová dijo a Moisés: Alísate dos tablas de piedra como las primeras, y escribiré sobre esas tablas las palabras que estaban en las tablas primeras que quebraste." - Éxodo 34:1',
              },
              {
                id: "teach-2",
                type: "question",
                text: "Dios mandó hacer nuevas tablas. ¿Qué muestra esto sobre su carácter?",
                options: [
                  {
                    id: "opt-1",
                    text: "Su gracia ofrece nuevos comienzos",
                    response: "Exactamente! Aunque el pueblo quebró el pacto, Dios ofrece restauración.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Su palabra permanece",
                    response: "Muy bien! Las mismas palabras serían escritas. Su estándar no cambia, pero su gracia sí obra.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Prepara para el nuevo pacto",
                    response: "Correcto! Así como hubo segundas tablas, habría un nuevo pacto en Cristo.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-3",
                type: "scripture",
                text: "La proclamación del nombre de Dios:",
                scripture: '"Y Jehová pasó por delante de él, y proclamó: ¡Jehová! ¡Jehová! fuerte, misericordioso y piadoso; tardo para la ira, y grande en misericordia y verdad." - Éxodo 34:6',
              },
              {
                id: "teach-4",
                type: "narration",
                text: "Esta es una de las declaraciones más completas del carácter de Dios en toda la Biblia. Revela su naturaleza santa y compasiva.",
              },
              {
                id: "teach-5",
                type: "scripture",
                text: "Misericordia y justicia:",
                scripture: '"Que guarda misericordia a millares, que perdona la iniquidad, la rebelión y el pecado, y que de ningún modo tendrá por inocente al malvado." - Éxodo 34:7',
              },
              {
                id: "teach-6",
                type: "question",
                text: "Dios une misericordia y justicia. ¿Por qué ambas son esenciales?",
                options: [
                  {
                    id: "opt-1",
                    text: "Misericordia sin justicia es permisividad",
                    response: "Exactamente! El perdón verdadero no ignora el pecado, sino que lo trata adecuadamente.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Justicia sin misericordia es crueldad",
                    response: "Muy bien! La justicia divina está temperada con compasión infinita.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Ambas encuentran su cumbre en la cruz",
                    response: "Correcto! En la cruz, Dios es justo y justificador del que cree en Jesús.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-7",
                type: "scripture",
                text: "La respuesta de Moisés:",
                scripture: '"Entonces Moisés, apresurándose, bajó la cabeza hacia el suelo y adoró." - Éxodo 34:8',
              },
              {
                id: "teach-8",
                type: "narration",
                text: "La revelación del carácter de Dios provoca adoración espontánea. Conocer quién es Él naturalmente nos lleva a postrarnos ante Él.",
              },
              {
                id: "teach-9",
                type: "scripture",
                text: "El pacto renovado:",
                scripture: '"Y él dijo: He aquí, yo hago pacto delante de todo tu pueblo; haré maravillas que no han sido hechas en toda la tierra." - Éxodo 34:10',
              },
              {
                id: "teach-10",
                type: "question",
                text: "Dios renueva el pacto después del pecado. ¿Qué nos enseña sobre su fidelidad?",
                options: [
                  {
                    id: "opt-1",
                    text: "Su fidelidad no depende de la nuestra",
                    response: "Exactamente! Aunque nosotros somos infieles, Él permanece fiel.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Su gracia supera nuestro pecado",
                    response: "Muy bien! Donde el pecado abundó, sobreabundó la gracia.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Su propósito no puede ser frustrado",
                    response: "Correcto! Nuestra infidelidad no anula los planes fieles de Dios.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-11",
                type: "scripture",
                text: "El rostro resplandeciente de Moisés:",
                scripture: '"Y aconteció que descendió Moisés del monte Sinaí con las dos tablas del testimonio... y no sabía Moisés que la piel de su rostro resplandecía." - Éxodo 34:29',
              },
              {
                id: "teach-12",
                type: "narration",
                text: "El tiempo en la presencia de Dios transformó a Moisés visiblemente. La comunión con Dios siempre nos cambia.",
              },
              {
                id: "teach-13",
                type: "scripture",
                text: "El velo de Moisés:",
                scripture: '"Y cuando Moisés acababa de hablar con ellos, ponía un velo sobre su rostro." - Éxodo 34:33',
              },
              {
                id: "teach-14",
                type: "narration",
                text: "Moisés usaba velo porque el resplandor se desvanecía, mostrando la gloria temporera del antiguo pacto. En Cristo, tenemos acceso directo a la gloria permanente.",
              },
              {
                id: "teach-15",
                type: "scripture",
                text: "El contraste con el nuevo pacto:",
                scripture: '"Y no como Moisés, que ponía un velo sobre su rostro... Pero cuando se conviertan al Señor, el velo se quitará." - 2 Corintios 3:13, 16',
              },
              {
                id: "teach-16",
                type: "narration",
                text: "En Cristo, el velo es quitado y podemos contemplar la gloria del Señor con rostros descubiertos, siendo transformados de gloria en gloria.",
              },
            ],
            application: {
              id: "app-23",
              type: "reflection",
              text: "Dios se reveló como 'misericordioso y clemente'. ¿Cómo afecta esta verdad tu relación con Él, especialmente cuando fallas?",
              options: [
                {
                  id: "opt-1",
                  text: "Me da confianza para acercarme",
                  response: "Qué precioso! Podemos venir a Él sabiendo que es misericordioso, no condenador.",
                },
                {
                  id: "opt-2",
                  text: "Me motiva al arrepentimiento",
                  response: "Exacto! La bondad de Dios nos guía al arrepentimiento, no el temor al castigo.",
                },
                {
                  id: "opt-3",
                  text: "Transforma cómo veo a Dios",
                  response: "Hermoso! Conocer Su carácter verdadero sana nuestras percepciones distorsionadas.",
                },
              ],
            },
            reflection: {
              id: "refl-23",
              type: "reflection",
              text: "Moisés brillaba por estar con Dios. ¿Tu tiempo con Dios te está transformando visiblemente?",
              options: [
                {
                  id: "opt-1",
                  text: "Sí, pero quiero más transformación",
                  response: "Hermoso anhelo! Pide a Dios profundizar Su obra transformadora en tu vida.",
                },
                {
                  id: "opt-2",
                  text: "Estoy en proceso de crecimiento",
                  response: "Todos lo estamos! La transformación es progresiva. Sé fiel en buscar Su rostro.",
                },
                {
                  id: "opt-3",
                  text: "Veo cambios gracias a Su Espíritu",
                  response: "Aleluya! Da gracias por la obra del Espíritu y pide que continúe transformándote.",
                },
              ],
            },
          },
        },
        {
          id: "lesson-exodus-24",
          sectionId: "exodus-tabernaculo-adoracion",
          title: "La Construcción del Tabernáculo",
          description: "La obediencia en los detalles",
          scripture: "Éxodo 35:1-40:38",
          estimatedMinutes: 14,
          order: 24,
          locked: true,
          content: {
            introduction: {
              id: "intro-24",
              type: "narration",
              text: "Llegamos al final de Éxodo, donde vemos la obediencia del pueblo al construir exactamente lo que Dios había mandado. Hoy veremos el cumplimiento del plan divino y la gloria que llenó el Tabernáculo. ¿Listo para este final glorioso?",
              options: [
                {
                  id: "opt-1",
                  text: "Sé que construyeron el Tabernáculo",
                  response: "Excelente! Pero hoy veremos los principios de obediencia y la gloriosa culminación.",
                },
                {
                  id: "opt-2",
                  text: "Conozco el final de Éxodo",
                  response: "Perfecto! Profundizaremos en el significado de la gloria que llenó el Tabernáculo.",
                },
                {
                  id: "opt-3",
                  text: "No conozco este final",
                  response: "Qué privilegio descubrirlo! El final de Éxodo es uno de los momentos más gloriosos del AT.",
                },
              ],
            },
            teaching: [
              {
                id: "teach-1",
                type: "scripture",
                text: "El llamado a la ofrenda:",
                scripture: '"Y habló Moisés a toda la congregación de los hijos de Israel... Tomad de entre vosotros ofrenda para Jehová; todo generoso de corazón la traerá a Jehová." - Éxodo 35:1, 5',
              },
              {
                id: "teach-2",
                type: "question",
                text: "El pueblo dio voluntariamente. ¿Qué muestra sobre su corazón restaurado?",
                options: [
                  {
                    id: "opt-1",
                    text: "Un corazón transformado",
                    response: "Exactamente! Del becerro de oro a ofrendas generosas - ¡qué cambio!",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "La gracia produce generosidad",
                    response: "Muy bien! Experimentar el perdón de Dios los hizo generosos hacia su obra.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Obediencia gozosa",
                    response: "Correcto! No dieron por obligación, sino con corazones dispuestos.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-3",
                type: "scripture",
                text: "La sobreabundancia de ofrendas:",
                scripture: '"Y dijeron a Moisés: El pueblo trae mucho más de lo que se necesita para la obra... Entonces Moisés mandó pregonar... Ningún hombre ni mujer haga más para la ofrenda." - Éxodo 36:5-6',
              },
              {
                id: "teach-4",
                type: "narration",
                text: "¡Tuvieron que detener las ofrendas porque el pueblo daba demasiado! Qué contraste con la mezquindad que a menudo vemos hoy.",
              },
              {
                id: "teach-5",
                type: "scripture",
                text: "La habilidad dada por Dios:",
                scripture: '"Y dijo Moisés a los hijos de Israel: Mirad, Jehová ha nombrado a Bezaleel... y lo ha llenado del Espíritu de Dios, en sabiduría, en inteligencia, en ciencia y en todo arte." - Éxodo 35:30-31',
              },
              {
                id: "teach-6",
                type: "question",
                text: "Dios llenó a los artesanos con su Espíritu para trabajos manuales. ¿Qué nos enseña?",
                options: [
                  {
                    id: "opt-1",
                    text: "Toda habilidad viene de Dios",
                    response: "Exactamente! Habilidades artísticas y técnicas son dones de Dios para su gloria.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "El Espíritu capacita para el servicio",
                    response: "Muy bien! No solo para 'ministerios espirituales' sino para toda obra que glorifica a Dios.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Excelencia para Dios",
                    response: "Correcto! Dios merece lo mejor de nuestras habilidades, no lo mediocre.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-7",
                type: "scripture",
                text: "La obediencia exacta:",
                scripture: '"Y hizo Bezaleel... conforme a todo lo que Jehová había mandado a Moisés." - Éxodo 38:22',
              },
              {
                id: "teach-8",
                type: "narration",
                text: "Once veces en Éxodo 39-40 se repite 'conforme a todo lo que Jehová había mandado a Moisés'. La obediencia exacta honra a Dios.",
              },
              {
                id: "teach-9",
                type: "scripture",
                text: "La inspección final:",
                scripture: '"Y vio Moisés toda la obra, y he aquí que la habían hecho como Jehová había mandado; y los bendijo." - Éxodo 39:43',
              },
              {
                id: "teach-10",
                type: "question",
                text: "Moisés inspeccionó todo y luego bendijo al pueblo. ¿Qué significado tiene?",
                options: [
                  {
                    id: "opt-1",
                    text: "La obediencia trae bendición",
                    response: "Exactamente! Cuando hacemos las cosas a la manera de Dios, experimentamos su bendición.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Liderazgo que afirma",
                    response: "Muy bien! Moisés reconoció y bendijo el trabajo fiel del pueblo.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Aprobación divina",
                    response: "Correcto! Moisés actuaba como representante de Dios, aprobando su obra.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-11",
                type: "scripture",
                text: "La gloria llena el Tabernáculo:",
                scripture: '"Entonces una nube cubrió el tabernáculo de reunión, y la gloria de Jehová llenó el tabernáculo." - Éxodo 40:34',
              },
              {
                id: "teach-12",
                type: "narration",
                text: "El Dios que había descendido en fuego en Sinaí ahora viene a habitar tiernamente entre su pueblo. ¡Qué momento glorioso!",
              },
              {
                id: "teach-13",
                type: "scripture",
                text: "La guía divina:",
                scripture: '"Y cuando la nube se alzaba del tabernáculo, los hijos de Israel se movían... y si la nube no se alzaba, no se movían." - Éxodo 40:36-37',
              },
              {
                id: "teach-14",
                type: "narration",
                text: "La presencia visible de Dios los guiaba en cada paso. Hoy tenemos al Espíritu Santo que nos guía desde dentro.",
              },
              {
                id: "teach-15",
                type: "scripture",
                text: "El cumplimiento en Cristo:",
                scripture: '"Y aquel Verbo fue hecho carne, y habitó [tabernaculizó] entre nosotros (y vimos su gloria, gloria como del unigénito del Padre)." - Juan 1:14',
              },
              {
                id: "teach-16",
                type: "narration",
                text: "Jesús es el verdadero Tabernáculo donde Dios habita entre los hombres. En Él vemos la gloria de Dios perfectamente revelada.",
              },
            ],
            application: {
              id: "app-24",
              type: "reflection",
              text: "El pueblo obedeció exactamente lo que Dios mandó. ¿Hay áreas donde necesitas ajustar tu obediencia a lo que Dios ha dicho?",
              options: [
                {
                  id: "opt-1",
                  text: "Sí, en mi vida personal",
                  response: "Es valiente reconocerlo! Pide a Dios gracia para obedecer completamente.",
                },
                {
                  id: "opt-2",
                  text: "En cómo sirvo a Dios",
                  response: "Que busquemos siempre hacer las cosas a Su manera, no la nuestra.",
                },
                {
                  id: "opt-3",
                  text: "En mis relaciones",
                  response: "Las relaciones son área importante de obediencia. Pide sabiduría para amar como Cristo.",
                },
              ],
            },
            reflection: {
              id: "refl-24",
              type: "reflection",
              text: "Éxodo termina con la gloria de Dios habitando entre su pueblo. ¿Estás experimentando la presencia de Dios habitando en tu vida?",
              options: [
                {
                  id: "opt-1",
                  text: "Sí, por su Espíritu",
                  response: "Aleluya! Vive consciente de esta realidad transformadora cada día.",
                },
                {
                  id: "opt-2",
                  text: "Quiero experimentarla más",
                  response: "Hermoso deseo! Pide al Espíritu que te llene y te haga más consciente de Su presencia.",
                },
                {
                  id: "opt-3",
                  text: "Estoy aprendiendo lo que significa",
                  response: "Es un viaje maravilloso! Sigue buscando a Dios y Él se revelará a ti.",
                },
              ],
            },
          },
        },
      ],
    },
  ],
}
