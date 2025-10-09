import type { LessonBook } from "./types"

export const GENESIS_BOOK_3: LessonBook = {
  id: "genesis",
  religion: "cristianismo",
  title: "Génesis",
  description: "El libro de los comienzos",
  icon: "🌅",
  testament: "antiguo",
  category: "Pentateuco",
  sections: [
    {
      id: "genesis-jose",
      bookId: "genesis",
      title: "La Historia de José",
      description: "De esclavo a gobernador: la providencia de Dios",
      order: 3,
      lessons: [
        {
          id: "lesson-genesis-13",
          sectionId: "genesis-jose",
          title: "Los Sueños de José",
          description: "José y sus hermanos: los sueños que causaron envidia",
          scripture: "Génesis 37:1-11",
          estimatedMinutes: 15,
          order: 13,
          locked: true,
          content: {
            introduction: {
              id: "intro-13",
              type: "narration",
              text: "Hoy comenzamos la historia de José, uno de los relatos más hermosos de toda la Biblia. José era el hijo favorito de Jacob, y esto causó problemas en su familia. ¿Alguna vez has sentido celos de alguien?",
              options: [
                {
                  id: "opt-1",
                  text: "Sí, he sentido celos",
                  response:
                    "Es honesto reconocerlo. Los celos son una emoción humana, pero pueden llevarnos a hacer cosas terribles si no los controlamos. Hoy veremos las consecuencias de los celos.",
                },
                {
                  id: "opt-2",
                  text: "He sido víctima de celos de otros",
                  response:
                    "Eso duele profundamente. José también fue víctima de los celos de sus hermanos. Pero verás cómo Dios usó esa situación para bien.",
                },
                {
                  id: "opt-3",
                  text: "No sé mucho sobre José",
                  response:
                    "Perfecto! Estás a punto de conocer una de las historias más inspiradoras de la Biblia sobre perdón, fe y la providencia de Dios.",
                },
              ],
            },
            teaching: [
              {
                id: "teach-13-1",
                type: "narration",
                text: "José tenía 17 años. Jacob lo amaba más que a sus otros hijos porque era el hijo de Raquel, su esposa amada. Jacob le hizo una túnica de colores, lo que provocó la envidia de sus hermanos.",
              },
              {
                id: "teach-13-2",
                type: "scripture",
                text: "La Biblia describe la reacción de los hermanos:",
                scripture:
                  '"Y viendo sus hermanos que su padre lo amaba más que a todos sus hermanos, le aborrecían, y no podían hablarle pacíficamente." - Génesis 37:4',
              },
              {
                id: "teach-13-3",
                type: "question",
                text: "¿Qué problema causó el favoritismo de Jacob?",
                options: [
                  {
                    id: "opt-1",
                    text: "Creó división en la familia",
                    response:
                      "Exacto! El favoritismo siempre divide. Los hermanos de José lo odiaban tanto que ni siquiera podían hablarle en paz. El favoritismo destruye las relaciones.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Provocó celos y resentimiento",
                    response:
                      "Muy bien! Los celos son como veneno en el corazón. Cuando no se tratan, crecen hasta convertirse en odio, como pasó con los hermanos de José.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Hizo que José fuera arrogante",
                    response:
                      "Posiblemente. Ser el favorito puede hacer que alguien se vuelva orgulloso. José aún tenía mucho que aprender sobre humildad.",
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-13-4",
                type: "narration",
                text: "Entonces José tuvo dos sueños. En el primero, las gavillas de sus hermanos se inclinaban ante la suya. En el segundo, el sol, la luna y once estrellas se inclinaban ante él.",
              },
              {
                id: "teach-13-5",
                type: "scripture",
                text: "José compartió sus sueños con su familia:",
                scripture:
                  '"¿Acaso has de reinar sobre nosotros, o señorear sobre nosotros? Y le aborrecieron aún más a causa de sus sueños y sus palabras." - Génesis 37:8',
              },
              {
                id: "teach-13-6",
                type: "question",
                text: "¿Fue sabio que José compartiera sus sueños?",
                options: [
                  {
                    id: "opt-1",
                    text: "No, empeoró la situación",
                    response:
                      "Correcto! A veces Dios nos revela cosas que no debemos compartir inmediatamente. José fue imprudente al contar sus sueños a quienes ya lo envidiaban.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Fue honesto pero ingenuo",
                    response:
                      "Exacto! José era joven e ingenuo. No entendía cómo sus palabras afectarían a sus hermanos. La sabiduría incluye saber cuándo hablar y cuándo callar.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Debió guardar los sueños para sí",
                    response:
                      "Muy bien! Proverbios dice: 'El que guarda su boca guarda su alma'. José aprendería esta lección de manera dolorosa.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-13-7",
                type: "narration",
                text: "Los sueños de José eran proféticos: Dios le estaba mostrando su futuro. Pero José no sabía el camino difícil que tendría que recorrer antes de que esos sueños se cumplieran.",
              },
              {
                id: "teach-13-8",
                type: "question",
                text: "¿Qué nos enseñan los sueños de José sobre los planes de Dios?",
                options: [
                  {
                    id: "opt-1",
                    text: "Que Dios tiene un plan para cada uno",
                    response:
                      "Exacto! Dios tenía un plan para José, y tiene un plan para ti también. Aunque no lo veas ahora, Dios está obrando en tu vida.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Que el camino al destino puede ser difícil",
                    response:
                      "Muy bien! José tendría que pasar por esclavitud y prisión antes de llegar al palacio. Los planes de Dios a menudo incluyen pruebas que nos preparan.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Que Dios cumple lo que promete",
                    response:
                      "Correcto! Aunque tomó años, los sueños de José se cumplieron exactamente. Dios es fiel a Sus promesas, aunque tarde desde nuestra perspectiva.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
            ],
            application: {
              id: "app-13",
              type: "reflection",
              text: "Los celos destruyeron la relación entre José y sus hermanos. Los celos son peligrosos porque nos ciegan y nos llevan a herir a otros. ¿Hay celos en tu corazón hacia alguien?",
              options: [
                {
                  id: "opt-1",
                  text: "Sí, tengo celos de alguien",
                  response:
                    "Reconocerlo es el primer paso. Pídele a Dios que quite esos celos de tu corazón. Los celos solo te harán daño a ti y a tus relaciones.",
                },
                {
                  id: "opt-2",
                  text: "¿Cómo puedo vencer los celos?",
                  response:
                    "Enfócate en las bendiciones que Dios te ha dado a ti, en lugar de compararte con otros. Celebra los éxitos de los demás. Pídele a Dios contentamiento.",
                },
                {
                  id: "opt-3",
                  text: "Alguien tiene celos de mí",
                  response:
                    "Eso es difícil. Ora por esa persona. No presumas ni provoques más celos. Sé humilde y sabio en cómo compartes tus bendiciones.",
                },
              ],
            },
            reflection: {
              id: "refl-13",
              type: "reflection",
              text: "José tenía sueños de Dios, pero también tenía mucho que aprender. Dios usaría las circunstancias difíciles para moldear su carácter y prepararlo para su destino.",
              options: [
                {
                  id: "opt-1",
                  text: "Confío en que Dios tiene un plan para mí",
                  response:
                    "Hermosa declaración de fe! Dios tiene planes buenos para ti. Confía en Él, incluso cuando el camino sea difícil.",
                },
                {
                  id: "opt-2",
                  text: "Quiero vencer los celos en mi vida",
                  response:
                    "Excelente decisión! Los celos solo traen amargura. Pídele a Dios que llene tu corazón de amor y contentamiento.",
                },
                {
                  id: "opt-3",
                  text: "Quiero ser sabio al compartir lo que Dios me muestra",
                  response:
                    "Muy sabio! No todo lo que Dios te revela debe ser compartido inmediatamente. Pídele discernimiento sobre cuándo hablar y cuándo callar.",
                },
              ],
            },
          },
        },
        {
          id: "lesson-genesis-14",
          sectionId: "genesis-jose",
          title: "José es Vendido a Egipto",
          description: "La traición de los hermanos",
          scripture: "Génesis 37:12-36",
          estimatedMinutes: 15,
          order: 14,
          locked: true,
          content: {
            introduction: {
              id: "intro-14",
              type: "narration",
              text: "Los celos de los hermanos de José han crecido tanto que están a punto de hacer algo terrible. José será traicionado por su propia familia. ¿Alguna vez te han traicionado?",
              options: [
                {
                  id: "opt-1",
                  text: "Sí, me han traicionado",
                  response:
                    "La traición duele profundamente, especialmente cuando viene de personas cercanas. José experimentó ese dolor, pero Dios lo usó para bien.",
                },
                {
                  id: "opt-2",
                  text: "No puedo imaginar que mi familia me traicione",
                  response:
                    "Es difícil de imaginar. Pero José vivió esa realidad. Su historia nos enseña cómo responder cuando somos heridos por quienes amamos.",
                },
                {
                  id: "opt-3",
                  text: "Quiero saber qué pasó con José",
                  response:
                    "Prepárate para una historia impactante de traición, pero también de cómo Dios puede transformar el mal en bien.",
                },
              ],
            },
            teaching: [
              {
                id: "teach-14-1",
                type: "narration",
                text: "Jacob envió a José a ver cómo estaban sus hermanos que cuidaban las ovejas. Cuando los hermanos vieron a José venir de lejos, conspiraron para matarlo.",
              },
              {
                id: "teach-14-2",
                type: "scripture",
                text: "Los hermanos planearon el mal:",
                scripture: '"He aquí viene el soñador. Ahora pues, venid, y matémosle." - Génesis 37:19-20',
              },
              {
                id: "teach-14-3",
                type: "question",
                text: "¿Cómo llegaron los hermanos a este punto de querer matar a José?",
                options: [
                  {
                    id: "opt-1",
                    text: "Los celos crecieron hasta convertirse en odio",
                    response:
                      "Exacto! Los celos no tratados se convierten en resentimiento, luego en odio, y finalmente en acciones destructivas. Por eso debemos tratar los celos inmediatamente.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Se alimentaron mutuamente en su envidia",
                    response:
                      "Muy bien! Cuando un grupo comparte sentimientos negativos, estos se amplifican. La influencia de grupo puede llevarnos a hacer cosas que nunca haríamos solos.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Perdieron de vista que José era su hermano",
                    response:
                      "Correcto! El odio deshumaniza. Ya no veían a José como su hermano, sino como un enemigo. El odio ciega nuestra humanidad.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-14-4",
                type: "narration",
                text: "Rubén, el hermano mayor, intentó salvarlo. Sugirió echarlo en la cisterna en lugar de matarlo, planeando rescatarlo después. Los hermanos le quitaron la túnica de colores a José y lo echaron en la cisterna vacía.",
              },
              {
                id: "teach-14-5",
                type: "scripture",
                text: "Entonces apareció una caravana de mercaderes:",
                scripture:
                  '"Judá dijo a sus hermanos: ¿Qué provecho hay en que matemos a nuestro hermano? Venid, y vendámosle a los ismaelitas." - Génesis 37:26-27',
              },
              {
                id: "teach-14-6",
                type: "question",
                text: "¿Fue Judá un héroe al sugerir vender a José en lugar de matarlo?",
                options: [
                  {
                    id: "opt-1",
                    text: "No, seguía siendo una traición terrible",
                    response:
                      "Exacto! Vender a tu hermano como esclavo no es mejor que matarlo. Judá no actuó por amor, sino por conveniencia. Ambas opciones eran malvadas.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Al menos José quedó con vida",
                    response:
                      "Es cierto que José sobrevivió, pero no gracias a la bondad de Judá. Fue la providencia de Dios la que preservó la vida de José.",
                  },
                  {
                    id: "opt-3",
                    text: "Judá solo pensaba en el dinero",
                    response:
                      "Correcto! Judá dijo: '¿Qué provecho hay?' Estaba pensando en ganancia económica, no en el bienestar de su hermano. El amor al dinero endurece el corazón.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-14-7",
                type: "narration",
                text: "Vendieron a José por veinte piezas de plata. Luego tomaron su túnica, la mancharon con sangre de un cabrito, y se la llevaron a Jacob diciendo que un animal salvaje había matado a José.",
              },
              {
                id: "teach-14-8",
                type: "scripture",
                text: "Jacob quedó destrozado:",
                scripture: '"Y Jacob rasgó sus vestidos, y se negó a recibir consuelo." - Génesis 37:34-35',
              },
              {
                id: "teach-14-9",
                type: "question",
                text: "¿Qué nos enseña esta parte de la historia?",
                options: [
                  {
                    id: "opt-1",
                    text: "Que el pecado tiene consecuencias dolorosas",
                    response:
                      "Exacto! Los hermanos causaron un dolor inmenso a su padre. El pecado nunca afecta solo a una persona, sino que hiere a muchos.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Que mentir complica las cosas",
                    response:
                      "Muy bien! Los hermanos tuvieron que vivir con esa mentira por años. Una mentira lleva a otra, y el peso de la culpa es pesado.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Que Dios estaba con José incluso en esto",
                    response:
                      "Correcto! Aunque parecía una tragedia, Dios estaba obrando. Lo que los hermanos hicieron para mal, Dios lo usaría para bien.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-14-10",
                type: "narration",
                text: "José fue llevado a Egipto como esclavo. En un momento, pasó de ser el hijo favorito a ser un esclavo en tierra extranjera. Pero Dios tenía un plan.",
              },
            ],
            application: {
              id: "app-14",
              type: "reflection",
              text: "José fue traicionado por quienes debían protegerlo. Cuando somos heridos por otros, especialmente por familia o amigos cercanos, el dolor es profundo. Pero Dios puede sanar ese dolor y usar esas experiencias para bien.",
              options: [
                {
                  id: "opt-1",
                  text: "¿Cómo perdono a quienes me traicionaron?",
                  response:
                    "El perdón es un proceso. Empieza reconociendo el dolor, luego decide perdonar (aunque no sientas ganas), y pídele a Dios que sane tu corazón. José perdonó, y tú también puedes.",
                },
                {
                  id: "opt-2",
                  text: "¿Dios puede usar mi dolor para bien?",
                  response:
                    "Sí! Romanos 8:28 dice que Dios hace que todas las cosas ayuden para bien. Lo que otros hicieron para mal, Dios puede transformarlo en bendición.",
                },
                {
                  id: "opt-3",
                  text: "¿Cómo evito traicionar a otros?",
                  response:
                    "Trata los celos y el resentimiento inmediatamente. Recuerda que todos somos hermanos en Cristo. Ama a otros como Dios te ama a ti.",
                },
              ],
            },
            reflection: {
              id: "refl-14",
              type: "reflection",
              text: "José fue vendido como esclavo, pero Dios estaba con él. A veces, las peores tragedias son parte del plan de Dios para llevarnos a nuestro destino. Confía en Dios incluso en la traición.",
              options: [
                {
                  id: "opt-1",
                  text: "Confío en que Dios está conmigo en el dolor",
                  response:
                    "Hermosa fe! Dios nunca te abandona, incluso cuando otros lo hagan. Él está contigo en cada momento difícil.",
                },
                {
                  id: "opt-2",
                  text: "Quiero perdonar como José perdonó",
                  response:
                    "Ese es un deseo noble! El perdón libera tu corazón. Pídele a Dios que te dé la gracia para perdonar como Él te ha perdonado.",
                },
                {
                  id: "opt-3",
                  text: "Veo que Dios puede usar el mal para bien",
                  response:
                    "Exacto! Dios es experto en transformar tragedias en triunfos. Confía en que Él está obrando, incluso cuando no lo veas.",
                },
              ],
            },
          },
        },
        {
          id: "lesson-genesis-15",
          sectionId: "genesis-jose",
          title: "José en la Casa de Potifar",
          description: "Integridad en medio de la tentación",
          scripture: "Génesis 39:1-23",
          estimatedMinutes: 18,
          order: 15,
          locked: true,
          content: {
            introduction: {
              id: "intro-15",
              type: "narration",
              text: "José está ahora en Egipto como esclavo. Pero incluso en la esclavitud, Dios está con él. Hoy veremos cómo José mantuvo su integridad incluso cuando fue tentado y falsamente acusado.",
              options: [
                {
                  id: "opt-1",
                  text: "¿Cómo mantuvo José su fe siendo esclavo?",
                  response:
                    "Esa es una gran pregunta. Descubrirás que José confiaba en Dios sin importar sus circunstancias. Su fe no dependía de su situación.",
                },
                {
                  id: "opt-2",
                  text: "Conozco la historia de Potifar",
                  response:
                    "Excelente! Hoy profundizaremos en las lecciones sobre integridad, tentación y cómo Dios está con nosotros incluso en la injusticia.",
                },
                {
                  id: "opt-3",
                  text: "No sé qué pasó en Egipto",
                  response:
                    "Perfecto! Estás a punto de ver cómo Dios bendice a quienes le son fieles, incluso en las circunstancias más difíciles.",
                },
              ],
            },
            teaching: [
              {
                id: "teach-15-1",
                type: "scripture",
                text: "José fue comprado por Potifar, un oficial del faraón:",
                scripture: '"Mas Jehová estaba con José, y fue varón próspero." - Génesis 39:2',
              },
              {
                id: "teach-15-2",
                type: "narration",
                text: "Aunque José era esclavo, Dios lo bendecía. Potifar notó que todo lo que José hacía prosperaba, así que lo puso a cargo de toda su casa.",
              },
              {
                id: "teach-15-3",
                type: "question",
                text: "¿Qué nos enseña que Dios estuviera con José incluso como esclavo?",
                options: [
                  {
                    id: "opt-1",
                    text: "Que Dios no nos abandona en las dificultades",
                    response:
                      "Exacto! José había sido traicionado y vendido, pero Dios seguía con él. Nuestras circunstancias no determinan la presencia de Dios.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Que podemos prosperar donde Dios nos ponga",
                    response:
                      "Muy bien! José no se amargó ni se rindió. Trabajó con excelencia donde estaba. Dios bendice la fidelidad, no importa dónde estemos.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Que Dios tiene un plan incluso en la esclavitud",
                    response:
                      "Correcto! Dios estaba preparando a José para algo mayor. A veces, Dios nos lleva por caminos difíciles para prepararnos para nuestro destino.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-15-4",
                type: "narration",
                text: "José era apuesto y bien parecido. La esposa de Potifar se fijó en él y lo tentó repetidamente para que se acostara con ella.",
              },
              {
                id: "teach-15-5",
                type: "scripture",
                text: "José respondió con integridad:",
                scripture: '"¿Cómo, pues, haría yo este grande mal, y pecaría contra Dios?" - Génesis 39:9',
              },
              {
                id: "teach-15-6",
                type: "question",
                text: "¿Qué te impresiona de la respuesta de José?",
                options: [
                  {
                    id: "opt-1",
                    text: "Que vio el pecado como ofensa contra Dios",
                    response:
                      "Exacto! José no solo pensó en las consecuencias humanas, sino en su relación con Dios. El pecado es principalmente contra Dios, no solo contra las personas.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Que resistió la tentación repetidamente",
                    response:
                      "Muy bien! No fue una sola vez. Ella lo tentaba día tras día, y José resistía cada vez. La integridad es consistente, no ocasional.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Que fue fiel a Potifar",
                    response:
                      "Correcto! Potifar había confiado en José. Traicionar esa confianza habría sido un gran mal. La integridad incluye ser fiel a quienes confían en nosotros.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-15-7",
                type: "narration",
                text: "Un día, cuando no había nadie más en la casa, ella lo agarró por la ropa. José huyó, dejando su manto en las manos de ella.",
              },
              {
                id: "teach-15-8",
                type: "question",
                text: "¿Por qué José huyó en lugar de solo decir que no?",
                options: [
                  {
                    id: "opt-1",
                    text: "Porque a veces debemos huir de la tentación",
                    response:
                      "Exacto! Pablo dice: 'Huye de las pasiones juveniles'. Hay tentaciones que no debemos enfrentar, sino evitar completamente. José fue sabio al huir.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Porque la tentación era muy fuerte",
                    response:
                      "Muy bien! José reconoció su vulnerabilidad. No se quedó a 'probar' su fuerza. La verdadera fortaleza es reconocer nuestras debilidades y evitar situaciones peligrosas.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Porque valoraba más su integridad que su ropa",
                    response:
                      "Correcto! José prefirió perder su manto que perder su pureza. Estaba dispuesto a pagar un precio por mantener su integridad.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-15-9",
                type: "narration",
                text: "Furiosa por el rechazo, la esposa de Potifar acusó falsamente a José de intentar violarla. Potifar, creyendo a su esposa, echó a José en la cárcel.",
              },
              {
                id: "teach-15-10",
                type: "scripture",
                text: "Pero incluso en la prisión:",
                scripture: '"Pero Jehová estaba con José y le extendió su misericordia." - Génesis 39:21',
              },
              {
                id: "teach-15-11",
                type: "question",
                text: "José hizo lo correcto pero terminó en prisión. ¿Qué nos enseña esto?",
                options: [
                  {
                    id: "opt-1",
                    text: "Que hacer lo correcto no siempre evita el sufrimiento",
                    response:
                      "Exacto! José fue íntegro y aun así sufrió injusticia. Pero Dios ve nuestra integridad y nos recompensará, aunque no sea inmediatamente.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Que Dios está con nosotros incluso en la injusticia",
                    response:
                      "Muy bien! José fue falsamente acusado, pero Dios no lo abandonó. Dios está con nosotros en cada injusticia que enfrentamos.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Que la integridad vale la pena a largo plazo",
                    response:
                      "Correcto! Aunque José sufrió temporalmente, su integridad lo llevó eventualmente al palacio. Dios honra a quienes le honran.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
            ],
            application: {
              id: "app-15",
              type: "reflection",
              text: "José enfrentó tentación sexual y la rechazó, aunque le costó su libertad. La integridad a veces tiene un precio, pero siempre vale la pena. ¿Estás dispuesto a pagar el precio de la integridad?",
              options: [
                {
                  id: "opt-1",
                  text: "¿Cómo resisto la tentación sexual?",
                  response:
                    "Huye como José. Evita situaciones comprometedoras. Llena tu mente con la Palabra de Dios. Rinde cuentas a alguien de confianza. Y recuerda: el pecado es contra Dios.",
                },
                {
                  id: "opt-2",
                  text: "¿Qué hago cuando sufro por hacer lo correcto?",
                  response:
                    "Recuerda que Dios ve y recompensará. No te amargues. Confía en que Dios está obrando. Como José, mantén tu integridad sin importar las consecuencias.",
                },
                {
                  id: "opt-3",
                  text: "¿Vale la pena la integridad si me cuesta?",
                  response:
                    "Sí! La integridad es más valiosa que cualquier ganancia temporal. Dios honra a quienes le honran. José perdió su libertad temporalmente, pero ganó el favor de Dios eternamente.",
                },
              ],
            },
            reflection: {
              id: "refl-15",
              type: "reflection",
              text: "José mantuvo su integridad incluso cuando le costó su libertad. Dios estaba con él en la esclavitud y en la prisión. La integridad siempre vale la pena porque Dios está con los íntegros.",
              options: [
                {
                  id: "opt-1",
                  text: "Quiero tener integridad como José",
                  response:
                    "Hermosa decisión! La integridad se construye en las decisiones diarias. Pídele a Dios que te dé fuerza para elegir lo correcto, incluso cuando sea difícil.",
                },
                {
                  id: "opt-2",
                  text: "Confío en que Dios está conmigo en la injusticia",
                  response:
                    "Esa confianza te sostendrá! Dios ve cada injusticia que sufres. Él es justo y recompensará tu fidelidad. No te rindas.",
                },
                {
                  id: "opt-3",
                  text: "Quiero huir de la tentación como José",
                  response:
                    "Muy sabio! No subestimes el poder de la tentación. Huye de situaciones peligrosas. Dios te dará la salida si la buscas.",
                },
              ],
            },
          },
        },
        {
          id: "lesson-genesis-16",
          sectionId: "genesis-jose",
          title: "José Interpreta Sueños en la Cárcel",
          description: "El don de José y la fidelidad de Dios",
          scripture: "Génesis 40:1-23",
          estimatedMinutes: 12,
          order: 16,
          locked: true,
          content: {
            introduction: {
              id: "intro-16",
              type: "narration",
              text: "José lleva años en prisión por un crimen que no cometió. Pero incluso allí, Dios está con él y le da oportunidades para usar sus dones. ¿Alguna vez has sentido que estás 'atrapado' en una situación?",
              options: [
                {
                  id: "opt-1",
                  text: "Sí, me siento atrapado en mi situación",
                  response:
                    "José también se sintió así. Pero descubrirás que Dios puede abrir puertas incluso desde una prisión. Nunca estás tan atrapado que Dios no pueda liberarte.",
                },
                {
                  id: "opt-2",
                  text: "¿Cómo mantuvo José la esperanza?",
                  response:
                    "Esa es una gran pregunta. José confiaba en Dios y seguía sirviendo a otros, incluso en prisión. Su esperanza estaba en Dios, no en sus circunstancias.",
                },
                {
                  id: "opt-3",
                  text: "Quiero saber cómo salió de la cárcel",
                  response:
                    "Hoy veremos el comienzo de su liberación. Dios usó el don de José para interpretar sueños como el primer paso hacia su destino.",
                },
              ],
            },
            teaching: [
              {
                id: "teach-16-1",
                type: "narration",
                text: "En la prisión, José conoció a dos oficiales del faraón: el copero y el panadero. Ambos tuvieron sueños la misma noche y estaban perturbados porque no había quien los interpretara.",
              },
              {
                id: "teach-16-2",
                type: "scripture",
                text: "José les ofreció ayuda:",
                scripture: '"¿No son de Dios las interpretaciones? Contádmelos ahora." - Génesis 40:8',
              },
              {
                id: "teach-16-3",
                type: "question",
                text: "¿Qué nos enseña la actitud de José?",
                options: [
                  {
                    id: "opt-1",
                    text: "Que seguía sirviendo a otros en prisión",
                    response:
                      "Exacto! José no se amargó ni se enfocó solo en sí mismo. Siguió siendo útil y sirviendo a otros. El servicio nos mantiene con propósito incluso en tiempos difíciles.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Que reconocía que su don venía de Dios",
                    response:
                      "Muy bien! José no se atribuyó el mérito. Sabía que la interpretación venía de Dios. La humildad reconoce que nuestros dones son de Dios.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Que usaba sus dones incluso en prisión",
                    response:
                      "Correcto! José no esperó estar libre para usar sus dones. Dios nos da dones para usarlos donde estemos, no solo cuando las circunstancias sean ideales.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-16-4",
                type: "narration",
                text: "El copero contó su sueño: vio una vid con tres ramas que florecieron y produjeron uvas. Él exprimió las uvas en la copa del faraón.",
              },
              {
                id: "teach-16-5",
                type: "scripture",
                text: "José interpretó el sueño:",
                scripture:
                  '"Las tres ramas son tres días. Al cabo de tres días levantará Faraón tu cabeza, y te restituirá a tu puesto." - Génesis 40:12-13',
              },
              {
                id: "teach-16-6",
                type: "narration",
                text: "José le pidió al copero que se acordara de él cuando saliera y hablara al faraón para sacarlo de la cárcel. Luego el panadero contó su sueño: llevaba tres canastillos de pan en su cabeza, y las aves comían del canastillo de arriba.",
              },
              {
                id: "teach-16-7",
                type: "scripture",
                text: "José dio una interpretación difícil:",
                scripture:
                  '"Los tres canastillos tres días son. Al cabo de tres días quitará Faraón tu cabeza de sobre ti, y te hará colgar en la horca." - Génesis 40:18-19',
              },
              {
                id: "teach-16-8",
                type: "question",
                text: "¿Qué te impresiona de que José diera malas noticias al panadero?",
                options: [
                  {
                    id: "opt-1",
                    text: "Que fue honesto aunque fuera difícil",
                    response:
                      "Exacto! José no endulzó el mensaje para agradar. Dijo la verdad, aunque fuera dolorosa. La integridad incluye ser honesto incluso cuando es incómodo.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Que confiaba en que Dios le mostraba la verdad",
                    response:
                      "Muy bien! José no inventó interpretaciones agradables. Confiaba en lo que Dios le revelaba, sin importar si era bueno o malo.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Que no usó su don para manipular",
                    response:
                      "Correcto! José pudo haber mentido para ganar favor, pero no lo hizo. Los dones de Dios no son para manipular, sino para servir con verdad.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-16-9",
                type: "narration",
                text: "Tres días después, en el cumpleaños del faraón, todo sucedió exactamente como José había dicho. El copero fue restaurado a su puesto, y el panadero fue ejecutado.",
              },
              {
                id: "teach-16-10",
                type: "scripture",
                text: "Pero hubo una decepción:",
                scripture: '"Y el jefe de los coperos no se acordó de José, sino que le olvidó." - Génesis 40:23',
              },
              {
                id: "teach-16-11",
                type: "question",
                text: "¿Cómo crees que se sintió José cuando el copero lo olvidó?",
                options: [
                  {
                    id: "opt-1",
                    text: "Decepcionado y olvidado",
                    response:
                      "Probablemente sí. José había ayudado al copero, pero fue olvidado. A veces ayudamos a otros y no recibimos gratitud. Pero Dios ve y recompensará.",
                  },
                  {
                    id: "opt-2",
                    text: "Tentado a perder la esperanza",
                    response:
                      "Es comprensible. Parecía que José seguiría en prisión para siempre. Pero Dios tenía un tiempo perfecto para su liberación.",
                  },
                  {
                    id: "opt-3",
                    text: "Confiando en que Dios tenía un plan",
                    response:
                      "Esa es la actitud correcta! Aunque el copero olvidó, Dios no olvidó a José. El tiempo de Dios es perfecto, aunque no coincida con nuestras expectativas.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
            ],
            application: {
              id: "app-16",
              type: "reflection",
              text: "José usó sus dones para servir a otros, incluso en prisión. Dios nos da dones no para nuestro beneficio, sino para servir a otros y glorificar a Dios. ¿Estás usando tus dones donde estás?",
              options: [
                {
                  id: "opt-1",
                  text: "¿Cuáles son mis dones?",
                  response:
                    "Pídele a Dios que te los revele. Observa qué haces bien y qué disfrutan otros cuando lo haces. Tus dones son para bendecir a otros y glorificar a Dios.",
                },
                {
                  id: "opt-2",
                  text: "¿Cómo sirvo en mi 'prisión'?",
                  response:
                    "Busca oportunidades donde estás. No esperes circunstancias perfectas. Dios puede usarte ahora, en tu situación actual, para bendecir a otros.",
                },
                {
                  id: "opt-3",
                  text: "¿Qué hago cuando me olvidan?",
                  response:
                    "Recuerda que Dios nunca te olvida. Las personas pueden fallar, pero Dios es fiel. Sigue sirviendo y confiando. Dios tiene Su tiempo perfecto.",
                },
              ],
            },
            reflection: {
              id: "refl-16",
              type: "reflection",
              text: "José interpretó los sueños con precisión, pero el copero lo olvidó. A veces servimos y no recibimos reconocimiento. Pero Dios ve todo y nos recompensará en Su tiempo.",
              options: [
                {
                  id: "opt-1",
                  text: "Quiero usar mis dones para servir a otros",
                  response:
                    "Hermosa decisión! Dios te ha dado dones únicos. Úsalos para bendecir a otros y glorificar a Dios, sin importar dónde estés.",
                },
                {
                  id: "opt-2",
                  text: "Confío en el tiempo de Dios",
                  response:
                    "Esa confianza te dará paz! Dios nunca llega tarde. Su tiempo es perfecto, aunque no coincida con nuestras expectativas.",
                },
                {
                  id: "opt-3",
                  text: "Seguiré sirviendo aunque me olviden",
                  response:
                    "Excelente actitud! Sirve para Dios, no para recibir reconocimiento humano. Dios ve y recompensará tu fidelidad.",
                },
              ],
            },
          },
        },
        {
          id: "lesson-genesis-17",
          sectionId: "genesis-jose",
          title: "José Gobernador de Egipto",
          description: "De la prisión al palacio",
          scripture: "Génesis 41:1-57",
          estimatedMinutes: 18,
          order: 17,
          locked: true,
          content: {
            introduction: {
              id: "intro-17",
              type: "narration",
              text: "Han pasado dos años desde que el copero salió de la cárcel. José sigue en prisión, olvidado. Pero Dios no lo ha olvidado. Hoy veremos cómo Dios puede cambiar nuestra situación en un solo día.",
              options: [
                {
                  id: "opt-1",
                  text: "¿Cómo salió José de la prisión?",
                  response:
                    "Descubrirás que Dios usó los sueños del faraón para liberar a José. Lo que parecía imposible, Dios lo hizo posible en un momento.",
                },
                {
                  id: "opt-2",
                  text: "Conozco que José llegó a ser gobernador",
                  response:
                    "Excelente! Hoy profundizaremos en cómo Dios lo llevó de la prisión al palacio, y las lecciones que esto nos enseña sobre Su fidelidad.",
                },
                {
                  id: "opt-3",
                  text: "Esto suena increíble",
                  response:
                    "Lo es! La historia de José es una de las más dramáticas de la Biblia. Verás cómo Dios puede transformar tu vida completamente.",
                },
              ],
            },
            teaching: [
              {
                id: "teach-17-1",
                type: "narration",
                text: "El faraón tuvo dos sueños perturbadores. En el primero, siete vacas gordas eran devoradas por siete vacas flacas. En el segundo, siete espigas llenas eran devoradas por siete espigas marchitas. Ninguno de sus sabios pudo interpretar los sueños.",
              },
              {
                id: "teach-17-2",
                type: "scripture",
                text: "Entonces el copero se acordó de José:",
                scripture:
                  '"Entonces el jefe de los coperos habló a Faraón, diciendo: Me acuerdo hoy de mis faltas." - Génesis 41:9',
              },
              {
                id: "teach-17-3",
                type: "question",
                text: "¿Por qué crees que el copero se acordó de José justo en ese momento?",
                options: [
                  {
                    id: "opt-1",
                    text: "Porque Dios lo hizo recordar",
                    response:
                      "Exacto! Dios controla los tiempos. Dos años antes no era el momento. Ahora sí. Dios orquesta las circunstancias para cumplir Sus propósitos.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Porque era el tiempo perfecto de Dios",
                    response:
                      "Muy bien! Si José hubiera salido antes, no habría interpretado los sueños del faraón. Dios esperó el momento exacto para máximo impacto.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Porque José necesitaba más preparación",
                    response:
                      "Correcto! Los dos años adicionales en prisión maduraron a José. Dios usa los tiempos de espera para prepararnos para lo que viene.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-17-4",
                type: "narration",
                text: "Sacaron rápidamente a José de la cárcel. Se afeitó, se cambió de ropa, y fue llevado ante el faraón.",
              },
              {
                id: "teach-17-5",
                type: "scripture",
                text: "José respondió con humildad:",
                scripture: '"No está en mí; Dios será el que dé respuesta propicia a Faraón." - Génesis 41:16',
              },
              {
                id: "teach-17-6",
                type: "question",
                text: "¿Qué te impresiona de la respuesta de José?",
                options: [
                  {
                    id: "opt-1",
                    text: "Que dio gloria a Dios, no a sí mismo",
                    response:
                      "Exacto! José pudo haberse atribuido el mérito para impresionar al faraón. Pero dio gloria a Dios. La humildad reconoce que todo don viene de Dios.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Que no dejó que la prisión lo amargara",
                    response:
                      "Muy bien! Después de años de injusticia, José pudo haberse amargado. Pero mantuvo su fe y su carácter. La amargura destruye, pero la fe preserva.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Que estaba listo para su momento",
                    response:
                      "Correcto! José no perdió el tiempo en prisión. Se mantuvo fiel y preparado. Cuando llegó su oportunidad, estaba listo.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-17-7",
                type: "narration",
                text: "José interpretó los sueños: vendrían siete años de abundancia seguidos de siete años de hambre severa. Luego aconsejó al faraón que nombrara un administrador sabio para almacenar grano durante los años de abundancia.",
              },
              {
                id: "teach-17-8",
                type: "scripture",
                text: "El faraón quedó impresionado:",
                scripture:
                  '"¿Acaso hallaremos a otro hombre como éste, en quien esté el espíritu de Dios?" - Génesis 41:38',
              },
              {
                id: "teach-17-9",
                type: "narration",
                text: "El faraón nombró a José gobernador de todo Egipto, segundo solo después del faraón. Le dio su anillo, vestiduras finas, y un collar de oro. José tenía 30 años.",
              },
              {
                id: "teach-17-10",
                type: "question",
                text: "José pasó de la prisión al palacio en un día. ¿Qué nos enseña esto?",
                options: [
                  {
                    id: "opt-1",
                    text: "Que Dios puede cambiar nuestra situación rápidamente",
                    response:
                      "Exacto! Lo que parece imposible para nosotros es fácil para Dios. Él puede transformar tu vida en un momento. Nunca pierdas la esperanza.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Que la fidelidad en lo poco lleva a lo mucho",
                    response:
                      "Muy bien! José fue fiel como esclavo y como prisionero. Dios lo promovió porque había demostrado fidelidad en circunstancias difíciles.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Que Dios tenía un plan todo el tiempo",
                    response:
                      "Correcto! Cada experiencia de José (la traición, la esclavitud, la prisión) lo preparó para este momento. Dios usa todo para Su propósito.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-17-11",
                type: "narration",
                text: "Durante los siete años de abundancia, José almacenó tanto grano que dejó de contarlo. Cuando llegó el hambre, Egipto estaba preparado. José abrió los graneros y vendió grano, no solo a Egipto, sino a todas las naciones que venían a comprar.",
              },
            ],
            application: {
              id: "app-17",
              type: "reflection",
              text: "José esperó 13 años desde que fue vendido hasta que fue exaltado. Dios usó ese tiempo para prepararlo. ¿Estás en un tiempo de espera? Dios te está preparando para algo mayor.",
              options: [
                {
                  id: "opt-1",
                  text: "¿Cómo mantengo la fe mientras espero?",
                  response:
                    "Sé fiel donde estás. Sirve con excelencia. Confía en que Dios está obrando. Recuerda: la espera no es tiempo perdido, es tiempo de preparación.",
                },
                {
                  id: "opt-2",
                  text: "¿Dios puede cambiar mi situación?",
                  response:
                    "Sí! Lo que parece imposible para ti es posible para Dios. Él puede abrir puertas que nadie puede cerrar. Confía en Su tiempo y Su poder.",
                },
                {
                  id: "opt-3",
                  text: "¿Cómo me preparo para mi 'palacio'?",
                  response:
                    "Sé fiel en tu 'prisión'. Desarrolla tu carácter. Usa tus dones. Mantén tu integridad. Cuando llegue tu momento, estarás listo.",
                },
              ],
            },
            reflection: {
              id: "refl-17",
              type: "reflection",
              text: "José pasó de la prisión al palacio porque Dios estaba con él. Dios puede transformar tu vida completamente. Confía en Su tiempo y Su plan. Él es fiel.",
              options: [
                {
                  id: "opt-1",
                  text: "Confío en que Dios tiene un plan para mí",
                  response:
                    "Hermosa fe! Dios tiene planes buenos para ti. Aunque no los veas ahora, Él está obrando. Confía en Su tiempo perfecto.",
                },
                {
                  id: "opt-2",
                  text: "Quiero ser fiel en mi tiempo de espera",
                  response:
                    "Excelente decisión! La fidelidad en lo poco lleva a lo mucho. Sé fiel donde estás, y Dios te promoverá en Su tiempo.",
                },
                {
                  id: "opt-3",
                  text: "Veo que Dios usa todo para bien",
                  response:
                    "Exacto! Dios usó la traición, la esclavitud y la prisión para llevar a José a su destino. Él puede usar tus dificultades para bien también.",
                },
              ],
            },
          },
        },
        {
          id: "lesson-genesis-18",
          sectionId: "genesis-jose",
          title: "José se Reencuentra con sus Hermanos",
          description: "El perdón y la restauración familiar",
          scripture: "Génesis 42-45",
          estimatedMinutes: 20,
          order: 18,
          locked: true,
          content: {
            introduction: {
              id: "intro-18",
              type: "narration",
              text: "Han pasado años desde que los hermanos vendieron a José. Ahora, el hambre los obliga a ir a Egipto a comprar grano. No saben que el gobernador de Egipto es su hermano. Hoy veremos una de las historias de perdón más hermosas de la Biblia.",
              options: [
                {
                  id: "opt-1",
                  text: "¿José perdonó a sus hermanos?",
                  response:
                    "Descubrirás que José no solo perdonó, sino que vio la mano de Dios en todo lo que pasó. Su historia nos enseña sobre el perdón verdadero.",
                },
                {
                  id: "opt-2",
                  text: "Conozco esta historia",
                  response:
                    "Excelente! Hoy profundizaremos en las lecciones sobre perdón, restauración y cómo Dios usa el mal para bien.",
                },
                {
                  id: "opt-3",
                  text: "Esto debe ser muy emotivo",
                  response:
                    "Lo es! Es una de las escenas más conmovedoras de toda la Biblia. Prepárate para ver el poder del perdón.",
                },
              ],
            },
            teaching: [
              {
                id: "teach-18-1",
                type: "narration",
                text: "El hambre llegó a Canaán. Jacob envió a sus diez hijos mayores a Egipto a comprar grano, pero no envió a Benjamín, el hermano menor de José. Los hermanos se presentaron ante José y se inclinaron ante él, sin reconocerlo.",
              },
              {
                id: "teach-18-2",
                type: "scripture",
                text: "José recordó sus sueños:",
                scripture: '"Entonces José se acordó de los sueños que había tenido acerca de ellos." - Génesis 42:9',
              },
              {
                id: "teach-18-3",
                type: "question",
                text: "Los sueños de José se cumplieron después de 22 años. ¿Qué nos enseña esto?",
                options: [
                  {
                    id: "opt-1",
                    text: "Que Dios cumple Sus promesas, aunque tarde",
                    response:
                      "Exacto! Pasaron más de dos décadas, pero los sueños se cumplieron. Dios es fiel a Sus promesas, sin importar cuánto tiempo pase.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Que Dios usó el mal para cumplir Su plan",
                    response:
                      "Muy bien! Los hermanos vendieron a José para evitar que los gobernara. Pero esa misma acción lo llevó a ser gobernador. Dios usa incluso el mal para Sus propósitos.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Que debemos confiar en las promesas de Dios",
                    response:
                      "Correcto! Aunque parecía imposible, los sueños se cumplieron. Podemos confiar en que Dios cumplirá lo que ha prometido.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-18-4",
                type: "narration",
                text: "José los probó. Los acusó de ser espías y los encarceló por tres días. Luego les dijo que uno debía quedarse como rehén mientras los demás llevaban grano a casa y traían a Benjamín para probar que decían la verdad.",
              },
              {
                id: "teach-18-5",
                type: "scripture",
                text: "Los hermanos comenzaron a sentir culpa:",
                scripture:
                  '"Verdaderamente hemos pecado contra nuestro hermano, pues vimos la angustia de su alma cuando nos rogaba, y no le escuchamos." - Génesis 42:21',
              },
              {
                id: "teach-18-6",
                type: "question",
                text: "¿Por qué crees que José los probó en lugar de revelarse inmediatamente?",
                options: [
                  {
                    id: "opt-1",
                    text: "Para ver si habían cambiado",
                    response:
                      "Exacto! José quería saber si sus hermanos seguían siendo los mismos que lo vendieron, o si se habían arrepentido. El verdadero perdón busca restauración, no solo venganza.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Para que reconocieran su pecado",
                    response:
                      "Muy bien! Los hermanos necesitaban enfrentar lo que habían hecho. El arrepentimiento genuino requiere reconocer nuestro pecado.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Para proteger a Benjamín",
                    response:
                      "Correcto! José quería asegurarse de que sus hermanos no harían daño a Benjamín como se lo hicieron a él. Quería ver si habían cambiado.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-18-7",
                type: "narration",
                text: "Los hermanos regresaron con Benjamín. José preparó un banquete para ellos. Cuando los vio, especialmente a Benjamín, tuvo que salir para llorar porque se conmovió profundamente.",
              },
              {
                id: "teach-18-8",
                type: "narration",
                text: "José hizo una última prueba: puso su copa de plata en el saco de Benjamín y luego los acusó de robo. Cuando encontraron la copa, José dijo que Benjamín sería su esclavo. Judá, quien años antes había sugerido vender a José, ahora se ofreció como esclavo en lugar de Benjamín.",
              },
              {
                id: "teach-18-9",
                type: "question",
                text: "¿Qué muestra el cambio en Judá?",
                options: [
                  {
                    id: "opt-1",
                    text: "Que había aprendido a sacrificarse por otros",
                    response:
                      "Exacto! Antes, Judá vendió a su hermano. Ahora estaba dispuesto a ser esclavo por su hermano. Eso es arrepentimiento genuino: un cambio de corazón.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Que valoraba a su familia más que su libertad",
                    response:
                      "Muy bien! Judá había cambiado sus prioridades. Ya no era egoísta. El arrepentimiento transforma nuestros valores.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Que Dios había obrado en su corazón",
                    response:
                      "Correcto! Solo Dios puede cambiar un corazón así. Judá no era el mismo hombre que vendió a José. Dios transforma a las personas.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-18-10",
                type: "narration",
                text: "José no pudo contenerse más. Hizo salir a todos los egipcios y se reveló a sus hermanos llorando.",
              },
              {
                id: "teach-18-11",
                type: "scripture",
                text: "José les dijo:",
                scripture:
                  '"Yo soy José vuestro hermano, el que vendisteis para Egipto. Ahora, pues, no os entristezcáis, ni os pese de haberme vendido acá; porque para preservación de vida me envió Dios delante de vosotros." - Génesis 45:4-5',
              },
              {
                id: "teach-18-12",
                type: "question",
                text: "¿Qué te impresiona de las palabras de José?",
                options: [
                  {
                    id: "opt-1",
                    text: "Que perdonó completamente",
                    response:
                      "Exacto! José no guardó rencor ni buscó venganza. Perdonó de corazón. Ese es el perdón que Dios nos llama a dar.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Que vio la mano de Dios en todo",
                    response:
                      "Muy bien! José no negó que sus hermanos pecaron, pero reconoció que Dios usó eso para bien. Dios puede transformar el mal en bendición.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Que consoló a sus hermanos",
                    response:
                      "Correcto! José no solo perdonó, sino que consoló a quienes lo hirieron. Eso es gracia: dar lo opuesto a lo que merecen.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-18-13",
                type: "scripture",
                text: "José explicó el propósito de Dios:",
                scripture:
                  '"Vosotros pensasteis mal contra mí, mas Dios lo encaminó a bien, para hacer lo que vemos hoy, para mantener en vida a mucho pueblo." - Génesis 50:20',
              },
              {
                id: "teach-18-14",
                type: "narration",
                text: "José trajo a toda su familia a Egipto. Jacob se reunió con el hijo que creía muerto. La familia fue restaurada. Dios usó la traición de los hermanos para salvar a muchas naciones del hambre, incluyendo a la familia de Abraham.",
              },
            ],
            application: {
              id: "app-18",
              type: "reflection",
              text: "José perdonó a quienes lo traicionaron porque vio la mano de Dios en todo. El perdón no niega el dolor, pero confía en que Dios puede usar incluso el mal para bien. ¿Hay alguien a quien necesitas perdonar?",
              options: [
                {
                  id: "opt-1",
                  text: "¿Cómo puedo perdonar como José?",
                  response:
                    "Reconoce el dolor, pero elige perdonar. Confía en que Dios puede usar esa situación para bien. Pídele a Dios que te dé gracia para perdonar. El perdón te libera.",
                },
                {
                  id: "opt-2",
                  text: "¿Dios puede usar mi dolor para bien?",
                  response:
                    "Sí! Romanos 8:28 promete que Dios hace que todas las cosas ayuden para bien. Lo que otros hicieron para mal, Dios puede transformarlo en bendición.",
                },
                {
                  id: "opt-3",
                  text: "¿Cómo sé si he perdonado realmente?",
                  response:
                    "El perdón genuino desea el bien de quien te hirió, como José. No significa olvidar, pero sí soltar el rencor. Pídele a Dios que te ayude a perdonar de corazón.",
                },
              ],
            },
            reflection: {
              id: "refl-18",
              type: "reflection",
              text: "La historia de José nos enseña que Dios puede usar incluso las peores traiciones para cumplir Sus propósitos. El perdón libera nuestro corazón y permite que Dios obre. Confía en que Dios está obrando en tu historia.",
              options: [
                {
                  id: "opt-1",
                  text: "Quiero perdonar como José perdonó",
                  response:
                    "Hermosa decisión! El perdón es un regalo que te das a ti mismo. Libera tu corazón y permite que Dios sane tus heridas. Él te dará la gracia para perdonar.",
                },
                {
                  id: "opt-2",
                  text: "Confío en que Dios usa todo para bien",
                  response:
                    "Esa confianza te dará paz! Dios es experto en transformar tragedias en triunfos. Lo que otrositorios hicieron para mal, Él lo usa para bien.",
                },
                {
                  id: "opt-3",
                  text: "Veo que Dios tiene un plan en mi dolor",
                  response:
                    "Exacto! Tu dolor no es en vano. Dios está obrando, incluso cuando no lo veas. Confía en Su plan y en Su tiempo. Él es fiel.",
                },
              ],
            },
          },
        },
      ],
    },
  ],
}
