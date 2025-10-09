import type { LessonBook } from "./types"

export const GENESIS_BOOK_4: LessonBook = {
  id: "genesis",
  religion: "cristianismo",
  title: "Génesis",
  description: "El libro de los comienzos",
  icon: "🌅",
  testament: "antiguo",
  category: "Pentateuco",
  sections: [
    {
      id: "genesis-final",
      bookId: "genesis",
      title: "El Final de Génesis",
      description: "Las bendiciones finales y el legado de fe",
      order: 4,
      lessons: [
        {
          id: "lesson-genesis-19",
          sectionId: "genesis-final",
          title: "Jacob Bendice a sus Hijos",
          description: "Las profecías sobre las doce tribus de Israel",
          scripture: "Génesis 49:1-28",
          estimatedMinutes: 18,
          order: 19,
          locked: true,
          content: {
            introduction: {
              id: "intro-19",
              type: "narration",
              text: "Jacob está al final de su vida. Ha vivido 147 años llenos de alegrías y tristezas, engaños y redención. Ahora reúne a sus doce hijos para bendecirlos y profetizar sobre su futuro. ¿Alguna vez has pensado en el legado que dejarás?",
              options: [
                {
                  id: "opt-1",
                  text: "¿Qué es un legado?",
                  response:
                    "Un legado es lo que dejas atrás: tu influencia, tus valores, tu fe. Jacob dejó un legado de fe que formó las doce tribus de Israel. Tú también estás construyendo un legado.",
                },
                {
                  id: "opt-2",
                  text: "Quiero dejar un buen legado",
                  response:
                    "Hermoso deseo! El mejor legado es una fe viva transmitida a la siguiente generación. Jacob, a pesar de sus fallas, dejó un legado de fe en Dios.",
                },
                {
                  id: "opt-3",
                  text: "No sé mucho sobre las bendiciones de Jacob",
                  response:
                    "Perfecto! Hoy descubrirás cómo Jacob bendijo a cada hijo según su carácter y cómo Dios usaría a cada tribu en Su plan.",
                },
              ],
            },
            teaching: [
              {
                id: "teach-19-1",
                type: "scripture",
                text: "Jacob llamó a sus hijos:",
                scripture: "Juntaos, y os declararé lo que os ha de acontecer en los días venideros. - Génesis 49:1",
              },
              {
                id: "teach-19-2",
                type: "narration",
                text: "Jacob bendijo a cada hijo, pero sus bendiciones no fueron iguales. Algunas fueron duras, otras fueron gloriosas. Cada una reflejaba el carácter del hijo y el futuro de su tribu.",
              },
              {
                id: "teach-19-3",
                type: "question",
                text: "¿Por qué las bendiciones fueron diferentes?",
                options: [
                  {
                    id: "opt-1",
                    text: "Porque cada hijo había vivido diferente",
                    response:
                      "Exacto! Nuestras decisiones tienen consecuencias. Rubén perdió su primogenitura por su pecado. Judá fue exaltado por su cambio. Nuestras acciones importan.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Porque Dios tenía planes diferentes para cada tribu",
                    response:
                      "Muy bien! Dios tiene un propósito único para cada persona. No todos tenemos el mismo llamado, pero todos somos importantes en el plan de Dios.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Porque Jacob era honesto sobre sus hijos",
                    response:
                      "Correcto! Jacob no endulzó la verdad. Fue honesto sobre las fallas y las virtudes de cada hijo. La honestidad es parte de un legado saludable.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-19-4",
                type: "scripture",
                text: "Jacob habló duramente a Rubén, su primogénito:",
                scripture:
                  "Rubén, tú eres mi primogénito... Impetuoso como las aguas, no serás el principal, por cuanto subiste al lecho de tu padre. - Génesis 49:3-4",
              },
              {
                id: "teach-19-5",
                type: "narration",
                text: "Rubén había pecado con la concubina de su padre años atrás. Ese pecado le costó su primogenitura. La tribu de Rubén nunca produjo líderes prominentes en Israel.",
              },
              {
                id: "teach-19-6",
                type: "question",
                text: "¿Qué nos enseña la bendición de Rubén?",
                options: [
                  {
                    id: "opt-1",
                    text: "Que el pecado tiene consecuencias duraderas",
                    response:
                      "Exacto! Un momento de pecado puede afectar toda una vida. Rubén perdió su herencia por su impulsividad. El pecado siempre cuesta más de lo que pensamos.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Que la posición no garantiza el liderazgo",
                    response:
                      "Muy bien! Rubén era el primogénito, pero perdió su lugar. El liderazgo no es solo por posición, sino por carácter. Dios busca corazones fieles.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Que debemos controlar nuestros impulsos",
                    response:
                      "Correcto! Rubén fue descrito como impetuoso como las aguas. La falta de autocontrol destruye el potencial. El dominio propio es esencial.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-19-7",
                type: "scripture",
                text: "Pero a Judá le dio una bendición gloriosa:",
                scripture:
                  "No será quitado el cetro de Judá, ni el legislador de entre sus pies, hasta que venga Siloh; y a él se congregarán los pueblos. - Génesis 49:10",
              },
              {
                id: "teach-19-8",
                type: "narration",
                text: "Judá, quien había sugerido vender a José pero luego se ofreció como esclavo por Benjamín, recibió la bendición del liderazgo. De Judá vendría el rey David, y eventualmente, el Mesías: Jesucristo.",
              },
              {
                id: "teach-19-9",
                type: "question",
                text: "¿Por qué Judá recibió la bendición del liderazgo?",
                options: [
                  {
                    id: "opt-1",
                    text: "Porque se arrepintió y cambió",
                    response:
                      "Exacto! Judá no era perfecto, pero se arrepintió. Dios honra el arrepentimiento genuino. No importa tu pasado, Dios puede usarte si te arrepientes.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Porque mostró sacrificio por su hermano",
                    response:
                      "Muy bien! Judá estuvo dispuesto a ser esclavo por Benjamín. Ese sacrificio mostró su transformación. El verdadero liderazgo es servicio sacrificial.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Porque Dios tenía un plan para su linaje",
                    response:
                      "Correcto! Dios eligió a Judá para ser el linaje del Mesías. Jesús es llamado el León de la tribu de Judá. Dios cumple Sus propósitos a través de personas imperfectas.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-19-10",
                type: "scripture",
                text: "A José le dio una bendición especial:",
                scripture:
                  "José es rama fructífera, rama fructífera junto a una fuente... Mas su arco se mantuvo poderoso, y los brazos de sus manos se fortalecieron por las manos del Fuerte de Jacob. - Génesis 49:22-24",
              },
              {
                id: "teach-19-11",
                type: "narration",
                text: "Jacob reconoció todo lo que José había sufrido y cómo Dios lo había bendecido. José recibió una doble porción: sus dos hijos, Efraín y Manasés, se convirtieron en tribus de Israel.",
              },
              {
                id: "teach-19-12",
                type: "question",
                text: "¿Qué nos enseña la bendición de José?",
                options: [
                  {
                    id: "opt-1",
                    text: "Que Dios recompensa la fidelidad",
                    response:
                      "Exacto! José fue fiel en el sufrimiento, y Dios lo bendijo abundantemente. La fidelidad en las pruebas lleva a bendición.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Que el sufrimiento produce fruto",
                    response:
                      "Muy bien! José fue llamado rama fructífera. Su sufrimiento no fue en vano, produjo fruto abundante. Dios usa nuestro dolor para hacernos fructíferos.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Que Dios es nuestra fortaleza",
                    response:
                      "Correcto! Jacob dijo que José fue fortalecido por el Fuerte de Jacob. Nuestra fuerza viene de Dios, no de nosotros mismos.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-19-13",
                type: "narration",
                text: "Jacob bendijo a todos sus hijos, cada uno según su carácter y el plan de Dios. Luego les dio instrucciones sobre su entierro: quería ser sepultado con Abraham e Isaac en la cueva de Macpela.",
              },
            ],
            application: {
              id: "app-19",
              type: "reflection",
              text: "Jacob dejó un legado de fe. Sus bendiciones mostraron que nuestras decisiones importan y que Dios honra el arrepentimiento y la fidelidad. ¿Qué legado estás construyendo?",
              options: [
                {
                  id: "opt-1",
                  text: "¿Cómo construyo un buen legado?",
                  response:
                    "Vive con integridad. Arrepiéntete cuando falles. Sé fiel a Dios. Transmite tu fe a otros. Tu legado no es lo que acumulas, sino la fe y los valores que dejas.",
                },
                {
                  id: "opt-2",
                  text: "¿Puedo cambiar mi legado si he fallado?",
                  response:
                    "Sí! Judá falló terriblemente pero se arrepintió y cambió. Dios puede redimir tu pasado. Nunca es tarde para empezar a construir un legado de fe.",
                },
                {
                  id: "opt-3",
                  text: "¿Qué pasa si he pecado como Rubén?",
                  response:
                    "El arrepentimiento genuino trae restauración. Aunque el pecado tiene consecuencias, Dios perdona y puede usar tu historia para advertir y ayudar a otros.",
                },
              ],
            },
            reflection: {
              id: "refl-19",
              type: "reflection",
              text: "Jacob bendijo a sus hijos según su carácter y el plan de Dios. Nuestras decisiones importan. El arrepentimiento trae restauración. La fidelidad trae bendición. ¿Qué legado dejarás?",
              options: [
                {
                  id: "opt-1",
                  text: "Quiero dejar un legado de fe",
                  response:
                    "Hermosa decisión! Vive tu fe auténticamente. Transmítela a la siguiente generación. Tu legado de fe impactará por generaciones.",
                },
                {
                  id: "opt-2",
                  text: "Quiero arrepentirme y cambiar como Judá",
                  response:
                    "Excelente! Dios honra el arrepentimiento genuino. Confiesa tu pecado, cambia tu camino, y Dios te usará poderosamente.",
                },
                {
                  id: "opt-3",
                  text: "Quiero ser fiel como José",
                  response:
                    "Hermoso deseo! La fidelidad en las pruebas produce fruto abundante. Confía en Dios, y Él te hará fructífero.",
                },
              ],
            },
          },
        },
        {
          id: "lesson-genesis-20",
          sectionId: "genesis-final",
          title: "La Muerte de Jacob",
          description: "El patriarca regresa a la tierra prometida",
          scripture: "Génesis 49:29-50:14",
          estimatedMinutes: 12,
          order: 20,
          locked: true,
          content: {
            introduction: {
              id: "intro-20",
              type: "narration",
              text: "Jacob ha bendecido a sus hijos y dado sus últimas instrucciones. Ahora está listo para reunirse con sus padres. La muerte de un patriarca marca el fin de una era. ¿Alguna vez has pensado en cómo quieres ser recordado?",
              options: [
                {
                  id: "opt-1",
                  text: "La muerte me da miedo",
                  response:
                    "Es natural sentir temor. Pero para quienes confían en Dios, la muerte no es el fin, sino el comienzo de la eternidad con Él. Jacob murió en paz porque confiaba en Dios.",
                },
                {
                  id: "opt-2",
                  text: "¿Por qué Jacob quería ser enterrado en Canaán?",
                  response:
                    "Excelente pregunta! Jacob quería ser enterrado en la tierra que Dios prometió a Abraham. Era una declaración de fe: creía que Dios cumpliría Su promesa.",
                },
                {
                  id: "opt-3",
                  text: "Quiero morir en paz como Jacob",
                  response:
                    "Hermoso deseo! La paz al morir viene de una vida vivida en fe. Jacob tuvo luchas, pero terminó confiando en Dios. Esa es la clave.",
                },
              ],
            },
            teaching: [
              {
                id: "teach-20-1",
                type: "scripture",
                text: "Jacob dio sus últimas instrucciones:",
                scripture:
                  "Yo voy a ser reunido con mi pueblo. Sepultadme con mis padres en la cueva que está en el campo de Efrón heteo. - Génesis 49:29",
              },
              {
                id: "teach-20-2",
                type: "narration",
                text: "Jacob quería ser enterrado en la cueva de Macpela, donde estaban sepultados Abraham y Sara, Isaac y Rebeca, y Lea. Esta cueva estaba en Canaán, la tierra prometida.",
              },
              {
                id: "teach-20-3",
                type: "question",
                text: "¿Qué significaba para Jacob ser enterrado en Canaán?",
                options: [
                  {
                    id: "opt-1",
                    text: "Era una declaración de fe en la promesa de Dios",
                    response:
                      "Exacto! Aunque Jacob murió en Egipto, quería descansar en la tierra prometida. Creía que Dios cumpliría Su promesa a Abraham. La fe mira más allá de las circunstancias presentes.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Quería estar con su familia",
                    response:
                      "Muy bien! Jacob quería reunirse con sus padres. La familia es importante, pero más importante es la familia de fe. Todos estaban unidos por su fe en Dios.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "No quería que Egipto fuera su hogar final",
                    response:
                      "Correcto! Aunque Jacob vivió en Egipto, su corazón estaba en Canaán. Este mundo no es nuestro hogar final. Somos peregrinos esperando la ciudad celestial.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-20-4",
                type: "scripture",
                text: "Después de dar sus instrucciones:",
                scripture:
                  "Y cuando acabó Jacob de dar mandamientos a sus hijos, encogió sus pies en la cama, y expiró, y fue reunido con sus padres. - Génesis 49:33",
              },
              {
                id: "teach-20-5",
                type: "narration",
                text: "Jacob murió en paz, rodeado de sus hijos. Había vivido 147 años. Su vida estuvo llena de luchas, pero terminó confiando en Dios y viendo el cumplimiento de muchas promesas.",
              },
              {
                id: "teach-20-6",
                type: "question",
                text: "¿Qué nos enseña la muerte pacífica de Jacob?",
                options: [
                  {
                    id: "opt-1",
                    text: "Que la fe trae paz al final de la vida",
                    response:
                      "Exacto! Jacob luchó con Dios y con los hombres, pero terminó en paz. La fe en Dios nos da paz, incluso frente a la muerte.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Que podemos morir bien aunque hayamos fallado",
                    response:
                      "Muy bien! Jacob no fue perfecto. Engañó, mintió, tuvo favoritos. Pero se arrepintió y confió en Dios. Dios redime nuestras vidas imperfectas.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Que la muerte no es el fin para los creyentes",
                    response:
                      "Correcto! Jacob fue reunido con sus padres. La muerte es una transición, no un final. Los que mueren en fe van a estar con Dios.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-20-7",
                type: "scripture",
                text: "José lloró profundamente:",
                scripture:
                  "Entonces se echó José sobre el rostro de su padre, y lloró sobre él, y lo besó. - Génesis 50:1",
              },
              {
                id: "teach-20-8",
                type: "narration",
                text: "José ordenó a los médicos que embalsamaran a su padre, un proceso que tomó 40 días. Luego los egipcios lo lloraron por 70 días, un honor reservado para la realeza.",
              },
              {
                id: "teach-20-9",
                type: "narration",
                text: "José pidió permiso al faraón para ir a Canaán a enterrar a su padre. El faraón accedió, y una gran procesión acompañó a José: sus hermanos, oficiales de Egipto, carros y jinetes. Fue un cortejo fúnebre impresionante.",
              },
              {
                id: "teach-20-10",
                type: "question",
                text: "¿Por qué los egipcios honraron tanto a Jacob?",
                options: [
                  {
                    id: "opt-1",
                    text: "Por respeto a José",
                    response:
                      "Exacto! José había salvado a Egipto del hambre. Los egipcios honraron a Jacob porque amaban y respetaban a José. Nuestra vida impacta cómo otros ven a nuestra familia.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Porque Dios honra a quienes le honran",
                    response:
                      "Muy bien! Jacob honró a Dios toda su vida. Dios prometió bendecir a Abraham y su descendencia, y cumplió esa promesa incluso en la muerte de Jacob.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Porque Jacob era el padre de un gran líder",
                    response:
                      "Correcto! Jacob era el patriarca de una familia que Dios estaba usando. Los egipcios reconocieron la importancia de Jacob en el plan de Dios.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-20-11",
                type: "narration",
                text: "Llevaron a Jacob a Canaán y lo sepultaron en la cueva de Macpela, como él había pedido. Después del entierro, José y sus hermanos regresaron a Egipto.",
              },
            ],
            application: {
              id: "app-20",
              type: "reflection",
              text: "Jacob murió en paz porque vivió por fe. Aunque tuvo luchas y fallas, confió en Dios hasta el final. La forma en que vivimos determina cómo morimos. ¿Estás viviendo de manera que puedas morir en paz?",
              options: [
                {
                  id: "opt-1",
                  text: "¿Cómo puedo morir en paz?",
                  response:
                    "Vive por fe. Arrepiéntete de tus pecados. Confía en Jesús como tu Salvador. Vive con propósito. La paz al morir viene de una vida vivida para Dios.",
                },
                {
                  id: "opt-2",
                  text: "¿Qué pasa después de la muerte?",
                  response:
                    "Para quienes confían en Dios, la muerte es el comienzo de la vida eterna con Él. Jacob fue reunido con sus padres. Los creyentes van a estar con Dios para siempre.",
                },
                {
                  id: "opt-3",
                  text: "¿Cómo enfrento el miedo a la muerte?",
                  response:
                    "Confía en Jesús, quien venció la muerte. Él dijo: Yo soy la resurrección y la vida. El que cree en mí, aunque muera, vivirá. La fe vence el miedo.",
                },
              ],
            },
            reflection: {
              id: "refl-20",
              type: "reflection",
              text: "Jacob murió en paz y fue honrado incluso por los egipcios. Su fe en la promesa de Dios lo sostuvo hasta el final. La muerte no es el fin para quienes confían en Dios.",
              options: [
                {
                  id: "opt-1",
                  text: "Quiero vivir por fe como Jacob",
                  response:
                    "Hermosa decisión! La fe no significa perfección, sino confianza en Dios a pesar de nuestras fallas. Vive confiando en Dios cada día.",
                },
                {
                  id: "opt-2",
                  text: "Quiero morir en paz",
                  response:
                    "Esa paz viene de vivir para Dios. Arrepiéntete, confía en Jesús, y vive con propósito. Entonces podrás morir en paz como Jacob.",
                },
                {
                  id: "opt-3",
                  text: "Confío en que la muerte no es el fin",
                  response:
                    "Exacto! Para los creyentes, la muerte es una puerta a la eternidad con Dios. Jacob fue reunido con sus padres, y tú también serás reunido con los tuyos en Cristo.",
                },
              ],
            },
          },
        },
        {
          id: "lesson-genesis-21",
          sectionId: "genesis-final",
          title: "José Perdona Definitivamente",
          description: "El perdón que libera el corazón",
          scripture: "Génesis 50:15-21",
          estimatedMinutes: 12,
          order: 21,
          locked: true,
          content: {
            introduction: {
              id: "intro-21",
              type: "narration",
              text: "Jacob ha muerto. Los hermanos de José temen que ahora que su padre no está, José se vengue de ellos. Pero José les dará una lección final sobre el perdón verdadero. ¿Alguna vez has dudado del perdón de alguien?",
              options: [
                {
                  id: "opt-1",
                  text: "Sí, he dudado si alguien me perdonó realmente",
                  response:
                    "Es natural dudar. La culpa puede hacernos cuestionar el perdón. Pero el perdón verdadero, como el de José, es completo y no guarda rencor.",
                },
                {
                  id: "opt-2",
                  text: "He perdonado pero la otra persona sigue dudando",
                  response:
                    "Eso es frustrante. A veces debemos reafirmar nuestro perdón, como José lo hizo. El perdón genuino se demuestra con acciones consistentes.",
                },
                {
                  id: "opt-3",
                  text: "Quiero aprender sobre el perdón verdadero",
                  response:
                    "Perfecto! Hoy verás el perdón en su forma más pura. José nos enseñará cómo perdonar completamente y ver la mano de Dios en nuestro dolor.",
                },
              ],
            },
            teaching: [
              {
                id: "teach-21-1",
                type: "scripture",
                text: "Después de la muerte de Jacob, los hermanos temieron:",
                scripture:
                  "Viendo los hermanos de José que su padre era muerto, dijeron: Quizá nos aborrecerá José, y nos dará el pago de todo el mal que le hicimos. - Génesis 50:15",
              },
              {
                id: "teach-21-2",
                type: "narration",
                text: "Los hermanos enviaron un mensaje a José diciendo que Jacob, antes de morir, había pedido que José los perdonara. Luego fueron personalmente y se postraron ante él, ofreciéndose como sus siervos.",
              },
              {
                id: "teach-21-3",
                type: "question",
                text: "¿Por qué los hermanos dudaron del perdón de José?",
                options: [
                  {
                    id: "opt-1",
                    text: "Porque la culpa los atormentaba",
                    response:
                      "Exacto! Habían vivido con esa culpa por décadas. La culpa no resuelta nos hace dudar del perdón. Por eso necesitamos aceptar el perdón de Dios y de otros.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Porque no podían creer que alguien perdonara tanto",
                    response:
                      "Muy bien! Lo que hicieron fue terrible. Les costaba creer que José realmente los había perdonado. El perdón verdadero es difícil de comprender porque es sobrenatural.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Porque pensaban que José solo perdonó por Jacob",
                    response:
                      "Correcto! Temían que José solo los había tratado bien por respeto a su padre. Pero el perdón de José era genuino, no condicional.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-21-4",
                type: "scripture",
                text: "La respuesta de José fue conmovedora:",
                scripture: "Y José lloró mientras hablaban. - Génesis 50:17",
              },
              {
                id: "teach-21-5",
                type: "narration",
                text: "José lloró porque le dolía que sus hermanos aún dudaran de su perdón. Después de todo lo que había hecho por ellos, todavía temían su venganza.",
              },
              {
                id: "teach-21-6",
                type: "question",
                text: "¿Por qué lloró José?",
                options: [
                  {
                    id: "opt-1",
                    text: "Porque le dolía que dudaran de su perdón",
                    response:
                      "Exacto! José había perdonado genuinamente, pero sus hermanos no lo creían. Duele cuando alguien duda de nuestro perdón sincero.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Porque amaba a sus hermanos",
                    response:
                      "Muy bien! El amor de José era genuino. No guardaba rencor. Sus lágrimas mostraban su corazón compasivo hacia sus hermanos.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Porque vio cuánto sufrían por la culpa",
                    response:
                      "Correcto! José vio el tormento de sus hermanos. La culpa los había atormentado por años. José quería liberarlos de ese peso.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-21-7",
                type: "scripture",
                text: "José les dio una de las declaraciones más profundas de toda la Biblia:",
                scripture:
                  "No temáis; ¿acaso estoy yo en lugar de Dios? Vosotros pensasteis mal contra mí, mas Dios lo encaminó a bien, para hacer lo que vemos hoy, para mantener en vida a mucho pueblo. - Génesis 50:19-20",
              },
              {
                id: "teach-21-8",
                type: "question",
                text: "¿Qué nos enseña esta declaración de José?",
                options: [
                  {
                    id: "opt-1",
                    text: "Que solo Dios tiene derecho a juzgar",
                    response:
                      "Exacto! José dijo: ¿Estoy yo en lugar de Dios? Reconoció que la venganza pertenece a Dios, no a nosotros. Debemos dejar el juicio a Dios.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Que Dios puede usar el mal para bien",
                    response:
                      "Muy bien! Lo que los hermanos hicieron para mal, Dios lo usó para salvar vidas. Dios es experto en transformar tragedias en triunfos.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Que el perdón ve el plan de Dios",
                    response:
                      "Correcto! José pudo perdonar porque vio la mano de Dios en todo. Cuando vemos el propósito de Dios en nuestro dolor, el perdón se hace más fácil.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-21-9",
                type: "scripture",
                text: "José les aseguró su perdón:",
                scripture:
                  "Ahora, pues, no tengáis miedo; yo os sustentaré a vosotros y a vuestros hijos. Así los consoló, y les habló al corazón. - Génesis 50:21",
              },
              {
                id: "teach-21-10",
                type: "narration",
                text: "José no solo perdonó con palabras, sino con acciones. Prometió cuidar de ellos y de sus familias. Les habló al corazón, consolándolos y liberándolos de su culpa.",
              },
              {
                id: "teach-21-11",
                type: "question",
                text: "¿Qué caracteriza al perdón verdadero según esta historia?",
                options: [
                  {
                    id: "opt-1",
                    text: "No guarda rencor ni busca venganza",
                    response:
                      "Exacto! José pudo haberse vengado, pero eligió perdonar. El perdón verdadero suelta el derecho a la venganza.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Se demuestra con acciones, no solo palabras",
                    response:
                      "Muy bien! José prometió cuidar de sus hermanos. El perdón genuino se muestra en cómo tratamos a quien nos hirió.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Ve la mano de Dios en el dolor",
                    response:
                      "Correcto! José vio cómo Dios usó su sufrimiento para bien. Cuando vemos el propósito de Dios, el perdón fluye más naturalmente.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
            ],
            application: {
              id: "app-21",
              type: "reflection",
              text: "José perdonó completamente a sus hermanos y vio la mano de Dios en su sufrimiento. El perdón verdadero libera tanto al ofensor como al ofendido. ¿Hay alguien a quien necesitas perdonar completamente?",
              options: [
                {
                  id: "opt-1",
                  text: "¿Cómo perdono cuando el dolor es tan profundo?",
                  response:
                    "Reconoce el dolor, pero elige perdonar. Busca ver cómo Dios puede usar esa situación para bien. Pídele a Dios que te dé Su gracia para perdonar. El perdón es un proceso.",
                },
                {
                  id: "opt-2",
                  text: "¿Cómo sé si he perdonado realmente?",
                  response:
                    "El perdón verdadero no guarda rencor, no busca venganza, y desea el bien del otro. Si puedes orar por quien te hirió y desear su bien, has perdonado.",
                },
                {
                  id: "opt-3",
                  text: "¿Cómo veo la mano de Dios en mi dolor?",
                  response:
                    "Pídele a Dios que te muestre Su propósito. Confía en Romanos 8:28: Dios hace que todas las cosas ayuden para bien. Él puede usar tu dolor para bendecir a otros.",
                },
              ],
            },
            reflection: {
              id: "refl-21",
              type: "reflection",
              text: "José nos enseñó que el perdón verdadero es completo, se demuestra con acciones, y ve la mano de Dios en el sufrimiento. El perdón libera nuestro corazón y permite que Dios obre.",
              options: [
                {
                  id: "opt-1",
                  text: "Quiero perdonar completamente como José",
                  response:
                    "Hermosa decisión! El perdón es un regalo que te das a ti mismo. Libera tu corazón y permite que Dios sane tus heridas. Él te dará la gracia.",
                },
                {
                  id: "opt-2",
                  text: "Confío en que Dios usa mi dolor para bien",
                  response:
                    "Esa confianza te dará paz! Dios es experto en transformar tragedias en triunfos. Lo que otros hicieron para mal, Él lo usa para bien.",
                },
                {
                  id: "opt-3",
                  text: "Quiero dejar el juicio a Dios",
                  response:
                    "Muy sabio! La venganza pertenece a Dios, no a nosotros. Cuando soltamos el derecho a juzgar, encontramos libertad y paz.",
                },
              ],
            },
          },
        },
        {
          id: "lesson-genesis-22",
          sectionId: "genesis-final",
          title: "La Muerte de José",
          description: "El final de Génesis y la esperanza futura",
          scripture: "Génesis 50:22-26",
          estimatedMinutes: 15,
          order: 22,
          locked: true,
          content: {
            introduction: {
              id: "intro-22",
              type: "narration",
              text: "Llegamos al final de Génesis. José, quien fue vendido como esclavo y llegó a ser gobernador de Egipto, está al final de su vida. Sus últimas palabras revelan una fe profunda en las promesas de Dios. ¿Cómo quieres terminar tu historia?",
              options: [
                {
                  id: "opt-1",
                  text: "Quiero terminar bien como José",
                  response:
                    "Hermoso deseo! José terminó su vida con fe, perdón y esperanza. Esas son las marcas de una vida bien vivida. Hoy verás cómo lograrlo.",
                },
                {
                  id: "opt-2",
                  text: "¿Qué pasó después de Génesis?",
                  response:
                    "Excelente pregunta! Después de Génesis viene Éxodo, donde los descendientes de José se multiplican pero son esclavizados. Pero Dios los liberará, cumpliendo Su promesa.",
                },
                {
                  id: "opt-3",
                  text: "Estoy triste de que termine Génesis",
                  response:
                    "Es comprensible! Génesis es un libro hermoso. Pero la historia de Dios con Su pueblo apenas comienza. Lo mejor está por venir.",
                },
              ],
            },
            teaching: [
              {
                id: "teach-22-1",
                type: "scripture",
                text: "José vivió muchos años en Egipto:",
                scripture:
                  "Y habitó José en Egipto, él y la casa de su padre; y vivió José ciento diez años. - Génesis 50:22",
              },
              {
                id: "teach-22-2",
                type: "narration",
                text: "José vivió 110 años, considerada una vida completa y bendecida en la cultura egipcia. Vio a sus bisnietos. Pasó sus últimos años rodeado de familia, viendo el cumplimiento de las promesas de Dios.",
              },
              {
                id: "teach-22-3",
                type: "question",
                text: "¿Qué nos enseña la larga vida de José?",
                options: [
                  {
                    id: "opt-1",
                    text: "Que Dios bendice la fidelidad",
                    response:
                      "Exacto! José fue fiel en el sufrimiento y en la prosperidad. Dios lo bendijo con una vida larga y fructífera. La fidelidad trae bendición.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Que el sufrimiento no duró para siempre",
                    response:
                      "Muy bien! José sufrió de los 17 a los 30 años, pero vivió 80 años más en bendición. El sufrimiento es temporal, pero la fidelidad de Dios es eterna.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Que Dios cumple Sus promesas",
                    response:
                      "Correcto! Dios prometió multiplicar la descendencia de Abraham. José vio a sus bisnietos, viendo el cumplimiento de esa promesa.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-22-4",
                type: "scripture",
                text: "Cuando José estaba por morir, dio una profecía:",
                scripture:
                  "Yo voy a morir; mas Dios ciertamente os visitará, y os hará subir de esta tierra a la tierra que juró a Abraham, a Isaac y a Jacob. - Génesis 50:24",
              },
              {
                id: "teach-22-5",
                type: "narration",
                text: "José sabía que Egipto no era el hogar final de su pueblo. Profetizó que Dios los sacaría de Egipto y los llevaría a Canaán, la tierra prometida. Esta profecía se cumpliría 400 años después en el Éxodo.",
              },
              {
                id: "teach-22-6",
                type: "question",
                text: "¿Qué nos enseña la profecía de José?",
                options: [
                  {
                    id: "opt-1",
                    text: "Que José confiaba en las promesas de Dios",
                    response:
                      "Exacto! Aunque José nunca vería el Éxodo, creyó que Dios cumpliría Su promesa. La fe verdadera confía en Dios incluso para lo que no veremos.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Que este mundo no es nuestro hogar final",
                    response:
                      "Muy bien! José vivió bien en Egipto, pero sabía que no era su hogar final. Nosotros también somos peregrinos esperando nuestra patria celestial.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Que Dios tiene un plan a largo plazo",
                    response:
                      "Correcto! El plan de Dios abarca generaciones. José vio más allá de su vida. Dios está obrando un plan eterno, no solo para nosotros, sino para generaciones futuras.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-22-7",
                type: "scripture",
                text: "José hizo jurar a sus hermanos:",
                scripture: "Dios ciertamente os visitará, y haréis llevar de aquí mis huesos. - Génesis 50:25",
              },
              {
                id: "teach-22-8",
                type: "narration",
                text: "José pidió que cuando Dios sacara a Israel de Egipto, llevaran sus huesos con ellos a Canaán. No quería descansar en Egipto, sino en la tierra prometida. Esta petición se cumplió 400 años después cuando Moisés llevó los huesos de José en el Éxodo.",
              },
              {
                id: "teach-22-9",
                type: "question",
                text: "¿Por qué José quería que sus huesos fueran llevados a Canaán?",
                options: [
                  {
                    id: "opt-1",
                    text: "Era una declaración de fe en la promesa",
                    response:
                      "Exacto! José creía que Dios cumpliría Su promesa. Quería que incluso sus huesos testificaran de esa fe. La fe se demuestra en nuestras acciones, incluso después de la muerte.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Quería estar en la tierra prometida",
                    response:
                      "Muy bien! Aunque José vivió y murió en Egipto, su corazón estaba en Canaán. Nuestro corazón debe estar donde está nuestro tesoro: en las promesas de Dios.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Quería recordarles la promesa de Dios",
                    response:
                      "Correcto! Los huesos de José serían un recordatorio constante de que Dios los sacaría de Egipto. Necesitamos recordatorios de las promesas de Dios.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-22-10",
                type: "scripture",
                text: "Así termina Génesis:",
                scripture:
                  "Y murió José a la edad de ciento diez años; y lo embalsamaron, y fue puesto en un ataúd en Egipto. - Génesis 50:26",
              },
              {
                id: "teach-22-11",
                type: "narration",
                text: "José murió, pero su historia no terminó. Sus huesos esperaron 400 años en Egipto hasta que Moisés los llevó a Canaán. La fe de José trascendió su muerte.",
              },
              {
                id: "teach-22-12",
                type: "question",
                text: "¿Qué lecciones nos deja la vida completa de José?",
                options: [
                  {
                    id: "opt-1",
                    text: "Que Dios está con nosotros en todo",
                    response:
                      "Exacto! Dios estuvo con José en la cisterna, en la esclavitud, en la prisión y en el palacio. Dios está contigo en cada temporada de tu vida.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Que el perdón libera nuestro corazón",
                    response:
                      "Muy bien! José perdonó a quienes lo hirieron y vivió en paz. El perdón no es para el ofensor, es para liberarnos a nosotros mismos.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Que Dios usa el mal para bien",
                    response:
                      "Correcto! Lo que los hermanos hicieron para mal, Dios lo usó para salvar vidas. Dios puede transformar cualquier tragedia en triunfo.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-22-13",
                type: "narration",
                text: "Génesis comenzó con la creación del mundo y termina con un ataúd en Egipto. Pero no es un final triste, es un final lleno de esperanza. Dios cumplirá Sus promesas. La historia continúa.",
              },
            ],
            application: {
              id: "app-22",
              type: "reflection",
              text: "José terminó su vida con fe, perdón y esperanza en las promesas de Dios. Esas son las marcas de una vida bien vivida. ¿Cómo quieres terminar tu historia?",
              options: [
                {
                  id: "opt-1",
                  text: "Quiero vivir con fe como José",
                  response:
                    "Hermosa decisión! La fe confía en Dios en cada circunstancia. Vive cada día confiando en que Dios está obrando, incluso cuando no lo veas.",
                },
                {
                  id: "opt-2",
                  text: "Quiero perdonar y vivir en paz",
                  response:
                    "Excelente! El perdón libera tu corazón. Suelta el rencor, perdona como Dios te ha perdonado, y vivirás en paz.",
                },
                {
                  id: "opt-3",
                  text: "Quiero confiar en las promesas de Dios",
                  response:
                    "Muy sabio! Las promesas de Dios son seguras. Aunque no veas el cumplimiento inmediato, confía en que Dios es fiel. Él cumplirá lo que ha prometido.",
                },
              ],
            },
            reflection: {
              id: "refl-22",
              type: "reflection",
              text: "Hemos completado Génesis. Vimos la creación, la caída, el diluvio, los patriarcas, y la historia de José. A través de todo, vimos que Dios es fiel, que usa el mal para bien, y que Sus promesas son seguras. Que tu vida refleje la fe de José.",
              options: [
                {
                  id: "opt-1",
                  text: "Gracias por este viaje por Génesis",
                  response:
                    "Ha sido un honor acompañarte! Génesis es solo el comienzo de la historia de Dios con la humanidad. Continúa estudiando Su Palabra y creciendo en fe.",
                },
                {
                  id: "opt-2",
                  text: "Quiero seguir aprendiendo la Biblia",
                  response:
                    "Excelente! La Biblia es un tesoro inagotable. Continúa con Éxodo para ver cómo Dios libera a Su pueblo. Cada libro revela más del carácter de Dios.",
                },
                {
                  id: "opt-3",
                  text: "Estas lecciones han transformado mi vida",
                  response:
                    "Qué bendición! Ese es el poder de la Palabra de Dios. Ahora vive lo que has aprendido. Comparte estas verdades con otros. Sé un José en tu generación.",
                },
              ],
            },
          },
        },
      ],
    },
  ],
}
