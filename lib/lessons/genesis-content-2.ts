import type { LessonBook } from "./types"

export const GENESIS_BOOK_2: LessonBook = {
  id: "genesis",
  religion: "cristianismo",
  title: "Génesis",
  description: "El libro de los comienzos",
  icon: "🌅",
  testament: "antiguo",
  category: "Pentateuco",
  sections: [
    {
      id: "genesis-patriarcas",
      bookId: "genesis",
      title: "Los Patriarcas",
      description: "Las historias de Abraham, Isaac y Jacob",
      order: 2,
      lessons: [
        {
          id: "lesson-genesis-7",
          sectionId: "genesis-patriarcas",
          title: "El Llamado de Abraham",
          description: "Dios llama a Abraham a dejar su tierra",
          scripture: "Génesis 12:1-9",
          estimatedMinutes: 15,
          order: 7,
          locked: true,
          content: {
            introduction: {
              id: "intro-7",
              type: "narration",
              text: "Hoy comenzamos una nueva etapa en Génesis: la historia de los patriarcas. Conoceremos a Abraham, un hombre que cambió la historia por su fe en Dios. ¿Conoces esta historia?",
              options: [
                {
                  id: "opt-1",
                  text: "Conozco la historia de Abraham",
                  response:
                    "Excelente! Abraham es llamado el padre de la fe. Hoy profundizaremos en su llamado y lo que significa para nosotros hoy.",
                },
                {
                  id: "opt-2",
                  text: "He escuchado su nombre pero no sé mucho",
                  response:
                    "Perfecto! Abraham es una de las figuras más importantes de la Biblia. Descubrirás por qué Dios lo eligió y cómo su historia nos inspira.",
                },
                {
                  id: "opt-3",
                  text: "No sé quién es Abraham",
                  response:
                    "Genial! Estás a punto de conocer al padre de la fe, un hombre que confió en Dios de manera extraordinaria.",
                },
              ],
            },
            teaching: [
              {
                id: "teach-7-1",
                type: "scripture",
                text: "Dios le habló a Abraham con un llamado radical:",
                scripture:
                  '"Pero Jehová había dicho a Abram: Vete de tu tierra y de tu parentela, y de la casa de tu padre, a la tierra que te mostraré." - Génesis 12:1',
              },
              {
                id: "teach-7-2",
                type: "question",
                text: "Dios le pidió a Abraham que dejara todo lo que conocía, sin decirle exactamente a dónde iba. ¿Por qué crees que Dios le pidió esto?",
                options: [
                  {
                    id: "opt-1",
                    text: "Para probar su fe",
                    response:
                      "Exacto! Dios quería que Abraham confiara completamente en Él, no en su familia o su ciudad. La fe verdadera a veces requiere dejar atrás lo familiar.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Para alejarlo de la idolatría",
                    response:
                      "Muy bien! Ur era una ciudad llena de ídolos. Dios quería separar a Abraham de esas influencias para formar un pueblo que lo adorara solo a Él.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Para comenzar algo nuevo",
                    response:
                      "Correcto! Dios estaba iniciando un plan nuevo: formar una nación que bendeciría a todas las familias de la tierra. Abraham sería el comienzo.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-7-3",
                type: "scripture",
                text: "Pero Dios no solo le pidió que dejara todo, también le hizo promesas increíbles:",
                scripture:
                  '"Y haré de ti una nación grande, y te bendeciré, y engrandeceré tu nombre, y serás bendición." - Génesis 12:2',
              },
              {
                id: "teach-7-4",
                type: "question",
                text: "Dios prometió hacer de Abraham una gran nación y que sería bendición para otros. ¿Qué te llama más la atención de esta promesa?",
                options: [
                  {
                    id: "opt-1",
                    text: "Que sería una nación grande",
                    response:
                      "Sí! Es notable porque Abraham y Sara no tenían hijos en ese momento. Dios prometió descendencia cuando parecía imposible.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Que sería bendición para otros",
                    response:
                      "Excelente observación! Dios no bendice solo para nuestro beneficio, sino para que seamos bendición a otros. Este es un principio clave del Reino de Dios.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Que Dios lo bendeciría",
                    response:
                      "Así es! Dios promete estar con Abraham y bendecirlo. Cuando obedecemos a Dios, Él nos acompaña y nos bendice en el camino.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-7-5",
                type: "narration",
                text: "Abraham tenía 75 años cuando Dios lo llamó. No era joven, pero tampoco era demasiado viejo para Dios. Dios puede usarnos a cualquier edad.",
              },
              {
                id: "teach-7-6",
                type: "scripture",
                text: "Y la respuesta de Abraham fue inmediata:",
                scripture: '"Y se fue Abram, como Jehová le dijo." - Génesis 12:4',
              },
              {
                id: "teach-7-7",
                type: "question",
                text: "Abraham no cuestionó, no pidió más detalles, simplemente obedeció. ¿Qué te parece su respuesta?",
                options: [
                  {
                    id: "opt-1",
                    text: "Es admirable su obediencia",
                    response:
                      "Sí! Abraham es ejemplo de fe obediente. No esperó tener todas las respuestas antes de obedecer. Confió en que Dios sabía lo que hacía.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Yo tendría miedo de hacer eso",
                    response:
                      "Es comprensible! Dejar todo lo conocido da miedo. Pero Abraham confió en que Dios era más grande que sus temores. La fe no es ausencia de miedo, sino confianza en Dios a pesar del miedo.",
                  },
                  {
                    id: "opt-3",
                    text: "Me pregunto cómo supo que era Dios",
                    response:
                      "Buena pregunta! La Biblia no detalla cómo Dios le habló, pero Abraham reconoció Su voz. Cuando Dios nos habla, hay una certeza interna que viene del Espíritu Santo.",
                  },
                ],
                helpAvailable: true,
              },
            ],
            application: {
              id: "app-7",
              type: "reflection",
              text: "Abraham dejó su zona de confort para seguir a Dios. A veces Dios nos llama a dejar cosas atrás: malos hábitos, relaciones tóxicas, o incluso lugares familiares. ¿Hay algo que Dios te está llamando a dejar?",
              options: [
                {
                  id: "opt-1",
                  text: "Sí, siento que Dios me está llamando a algo nuevo",
                  response:
                    "Qué emocionante! Pídele a Dios claridad y valentía. Si Él te está llamando, también te equipará para lo que viene.",
                },
                {
                  id: "opt-2",
                  text: "Tengo miedo de obedecer",
                  response:
                    "El miedo es normal! Pero recuerda: Dios no nos llama a algo sin equiparnos para ello. Pídele valentía y da un paso a la vez. Él estará contigo.",
                },
                {
                  id: "opt-3",
                  text: "No estoy seguro de qué quiere Dios",
                  response:
                    "Está bien! Pídele a Dios que te lo muestre claramente. Él habla a través de Su Palabra, la oración, y las circunstancias. Mantente atento.",
                },
              ],
            },
            reflection: {
              id: "refl-7",
              type: "reflection",
              text: "Abraham es llamado el padre de la fe porque confió en Dios sin ver el resultado final. Su historia nos enseña que la fe verdadera es obediencia, incluso cuando no entendemos todo el plan de Dios.",
              options: [
                {
                  id: "opt-1",
                  text: "Quiero tener fe como Abraham",
                  response:
                    "Hermoso deseo! La fe crece con la práctica. Empieza obedeciendo a Dios en las cosas pequeñas, y verás cómo tu confianza en Él aumenta.",
                },
                {
                  id: "opt-2",
                  text: "Me cuesta confiar sin ver",
                  response:
                    "Es honesto reconocerlo. La fe es precisamente eso: confiar sin ver todo el camino. Pídele a Dios que fortalezca tu fe. Él es paciente con nuestras dudas.",
                },
                {
                  id: "opt-3",
                  text: "Estoy listo para seguir a Dios",
                  response:
                    "Qué decisión poderosa! Dios honra a quienes lo buscan de todo corazón. Él tiene planes maravillosos para ti, así como los tuvo para Abraham.",
                },
              ],
            },
          },
        },
        {
          id: "lesson-genesis-8",
          sectionId: "genesis-patriarcas",
          title: "La Promesa a Abraham",
          description: "Dios promete descendencia y tierra",
          scripture: "Génesis 15:1-21",
          estimatedMinutes: 15,
          order: 8,
          locked: true,
          content: {
            introduction: {
              id: "intro-8",
              type: "narration",
              text: "Abraham ha obedecido a Dios y ha llegado a Canaán. Pero hay un problema: Abraham y Sara no tienen hijos, y él está envejeciendo. ¿Cómo cumplirá Dios Su promesa de hacer de él una gran nación?",
              options: [
                {
                  id: "opt-1",
                  text: "Dios puede hacer lo imposible",
                  response:
                    "Exacto! Hoy veremos cómo Dios confirma Su promesa de una manera poderosa, mostrando que nada es imposible para Él.",
                },
                {
                  id: "opt-2",
                  text: "Abraham debe estar preocupado",
                  response:
                    "Así es! Abraham tiene dudas humanas. Pero Dios es paciente y le da una señal para fortalecer su fe.",
                },
                {
                  id: "opt-3",
                  text: "No sé cómo resolverá Dios esto",
                  response:
                    "Descubrirás que Dios tiene formas sorprendentes de cumplir Sus promesas, incluso cuando parecen imposibles.",
                },
              ],
            },
            teaching: [
              {
                id: "teach-8-1",
                type: "scripture",
                text: "Dios le dice a Abraham palabras de consuelo:",
                scripture: '"No temas, Abram; yo soy tu escudo, y tu galardón será sobremanera grande." - Génesis 15:1',
              },
              {
                id: "teach-8-2",
                type: "narration",
                text: "Pero Abraham responde con honestidad: 'Señor Jehová, ¿qué me darás, siendo así que ando sin hijo?' (Génesis 15:2). Abraham está expresando sus dudas a Dios.",
              },
              {
                id: "teach-8-3",
                type: "question",
                text: "¿Qué te parece que Abraham exprese sus dudas a Dios?",
                options: [
                  {
                    id: "opt-1",
                    text: "Es honesto y real",
                    response:
                      "Exacto! Dios valora nuestra honestidad. No tenemos que fingir que todo está bien. Podemos llevarle nuestras dudas y preguntas.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Muestra falta de fe",
                    response:
                      "Podría parecer así, pero Dios no lo reprende. En cambio, le da una respuesta. Tener preguntas no es falta de fe, es parte del proceso de confiar.",
                  },
                  {
                    id: "opt-3",
                    text: "Es valiente al cuestionar",
                    response:
                      "Sí! Abraham tiene una relación cercana con Dios donde puede ser vulnerable. Dios quiere esa cercanía con nosotros también.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-8-4",
                type: "scripture",
                text: "Dios lleva a Abraham afuera y le muestra las estrellas:",
                scripture:
                  '"Mira ahora los cielos, y cuenta las estrellas, si las puedes contar. Y le dijo: Así será tu descendencia." - Génesis 15:5',
              },
              {
                id: "teach-8-5",
                type: "question",
                text: "¿Por qué crees que Dios usó las estrellas para ilustrar Su promesa?",
                options: [
                  {
                    id: "opt-1",
                    text: "Para mostrar que sería una descendencia innumerable",
                    response:
                      "Correcto! Las estrellas son incontables, así como los descendientes de Abraham. Hoy, millones de personas en el mundo son hijos espirituales de Abraham por la fe.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Para que Abraham recordara la promesa cada noche",
                    response:
                      "Hermosa reflexión! Cada vez que Abraham miraba el cielo nocturno, recordaba la promesa de Dios. Dios nos da recordatorios visuales de Sus promesas.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Para mostrar Su poder creador",
                    response:
                      "Exacto! El Dios que creó las estrellas puede cumplir Su promesa. Si Él hizo el universo, puede darle un hijo a Abraham.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-8-6",
                type: "scripture",
                text: "Y algo hermoso sucede:",
                scripture: '"Y creyó a Jehová, y le fue contado por justicia." - Génesis 15:6',
              },
              {
                id: "teach-8-7",
                type: "narration",
                text: "Dios hace un pacto formal con Abraham. Le promete la tierra de Canaán para sus descendientes. En la cultura antigua, los pactos se sellaban con sacrificios. Dios mismo pasa entre los animales sacrificados en forma de fuego, mostrando que Él garantiza el cumplimiento del pacto.",
              },
              {
                id: "teach-8-8",
                type: "question",
                text: "¿Qué significa que Dios mismo garantice el pacto?",
                options: [
                  {
                    id: "opt-1",
                    text: "Que Dios es fiel a Sus promesas",
                    response:
                      "Exacto! Dios no solo promete, sino que se compromete personalmente. Él es fiel incluso cuando nosotros fallamos.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Que no depende de Abraham",
                    response:
                      "Muy bien! En los pactos normales, ambas partes tenían responsabilidades. Pero aquí, Dios asume toda la responsabilidad. La salvación es obra de Dios, no nuestra.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Que es un pacto eterno",
                    response:
                      "Correcto! Este pacto no se puede romper porque Dios lo garantiza. Sus promesas son eternas y seguras.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
            ],
            application: {
              id: "app-8",
              type: "reflection",
              text: "Abraham creyó a Dios y le fue contado por justicia. La fe no es solo creer que Dios existe, sino confiar en Sus promesas incluso cuando parecen imposibles.",
              options: [
                {
                  id: "opt-1",
                  text: "¿Cómo puedo fortalecer mi fe?",
                  response:
                    "Recordando las promesas de Dios en Su Palabra y cómo las ha cumplido en el pasado. Cada vez que Dios cumple algo, tu fe crece.",
                },
                {
                  id: "opt-2",
                  text: "¿Qué promesas de Dios puedo reclamar?",
                  response:
                    "Dios promete estar contigo siempre, suplir tus necesidades, darte paz, y preparar un lugar eterno para ti. Lee la Biblia y descubre Sus promesas.",
                },
                {
                  id: "opt-3",
                  text: "¿Qué hago cuando dudo de las promesas de Dios?",
                  response:
                    "Sé honesto con Dios como Abraham. Pídele que fortalezca tu fe. Recuerda que Dios es paciente con nuestras dudas y nos ayuda a creer.",
                },
              ],
            },
            reflection: {
              id: "refl-8",
              type: "reflection",
              text: "Dios hizo un pacto eterno con Abraham, garantizando Sus promesas. Hoy, a través de Cristo, nosotros también somos parte de ese pacto. Dios es fiel y cumple lo que promete.",
              options: [
                {
                  id: "opt-1",
                  text: "Confío en las promesas de Dios",
                  response:
                    "Hermoso! Esa confianza te sostendrá en los momentos difíciles. Dios es fiel y no te defraudará.",
                },
                {
                  id: "opt-2",
                  text: "Quiero aprender a confiar más",
                  response: "Ese deseo agrada a Dios. Pídele cada día que aumente tu fe. Él responde a esa oración.",
                },
                {
                  id: "opt-3",
                  text: "Me cuesta esperar en Dios",
                  response:
                    "La espera es difícil, pero Dios usa ese tiempo para prepararnos. Abraham esperó 25 años por Isaac. Dios cumplió en Su tiempo perfecto.",
                },
              ],
            },
          },
        },
        {
          id: "lesson-genesis-9",
          sectionId: "genesis-patriarcas",
          title: "El Nacimiento de Isaac",
          description: "La promesa cumplida",
          scripture: "Génesis 21:1-7",
          estimatedMinutes: 12,
          order: 9,
          locked: true,
          content: {
            introduction: {
              id: "intro-9",
              type: "narration",
              text: "Han pasado 25 años desde que Dios prometió a Abraham un hijo. Abraham tiene ahora 100 años y Sara 90. Humanamente hablando, es imposible. Pero Dios está a punto de cumplir Su promesa de manera milagrosa.",
              options: [
                {
                  id: "opt-1",
                  text: "Dios cumple Sus promesas",
                  response:
                    "Así es! Aunque tarde desde nuestra perspectiva, Dios siempre cumple en Su tiempo perfecto.",
                },
                {
                  id: "opt-2",
                  text: "25 años es mucho tiempo",
                  response:
                    "Sí, es una espera larga. Pero Dios usó ese tiempo para fortalecer la fe de Abraham y prepararlo para ser padre de naciones.",
                },
                {
                  id: "opt-3",
                  text: "¿Cómo es posible a esa edad?",
                  response:
                    "Es un milagro! Dios muestra que nada es imposible para Él. Lo que es imposible para los humanos, es posible para Dios.",
                },
              ],
            },
            teaching: [
              {
                id: "teach-9-1",
                type: "scripture",
                text: "La Biblia registra el cumplimiento de la promesa:",
                scripture:
                  '"Visitó Jehová a Sara, como había dicho, e hizo Jehová con Sara como había hablado. Y Sara concibió y dio a Abraham un hijo en su vejez, en el tiempo que Dios le había dicho." - Génesis 21:1-2',
              },
              {
                id: "teach-9-2",
                type: "question",
                text: "¿Qué te llama la atención de este versículo?",
                options: [
                  {
                    id: "opt-1",
                    text: "Que Dios cumplió exactamente como prometió",
                    response:
                      "Exacto! Dios no solo cumple, sino que cumple exactamente como dijo. Sus promesas son precisas y confiables.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Que fue en el tiempo de Dios",
                    response:
                      "Muy bien! No fue cuando Abraham quería, sino cuando Dios sabía que era el momento perfecto. El tiempo de Dios es siempre el mejor.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Que fue un milagro",
                    response:
                      "Sí! Sara estaba más allá de la edad de tener hijos. Esto fue un acto sobrenatural de Dios, mostrando Su poder.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-9-3",
                type: "narration",
                text: "Abraham llamó a su hijo Isaac, que significa 'risa'. Sara había reído cuando escuchó que tendría un hijo a su edad.",
              },
              {
                id: "teach-9-4",
                type: "scripture",
                text: "Sara expresa su gozo:",
                scripture: '"Dios me ha hecho reír, y cualquiera que lo oyere, se reirá conmigo." - Génesis 21:6',
              },
              {
                id: "teach-9-5",
                type: "question",
                text: "¿Por qué crees que Dios convirtió la risa de duda en risa de gozo?",
                options: [
                  {
                    id: "opt-1",
                    text: "Para mostrar Su sentido del humor",
                    response:
                      "Interesante! Dios tiene sentido del humor. Convirtió la duda de Sara en un recordatorio permanente de Su fidelidad.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Para recordarles Su fidelidad",
                    response:
                      "Exacto! Cada vez que llamaban a Isaac, recordaban que Dios cumple lo imposible. El nombre era un testimonio viviente.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Para mostrar que Dios perdona nuestras dudas",
                    response:
                      "Hermoso! Dios no castigó a Sara por dudar. En cambio, transformó su duda en gozo. Él es paciente con nuestras debilidades.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-9-6",
                type: "narration",
                text: "Abraham esperó 25 años por Isaac. Durante ese tiempo, su fe fue probada muchas veces. Pero al final, vio el cumplimiento de la promesa de Dios.",
              },
              {
                id: "teach-9-7",
                type: "question",
                text: "¿Qué aprendemos de la larga espera de Abraham?",
                options: [
                  {
                    id: "opt-1",
                    text: "Que Dios tiene Su propio tiempo",
                    response:
                      "Correcto! Dios no se apresura ni se retrasa. Su tiempo es perfecto, aunque no coincida con nuestras expectativas.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Que la espera fortalece la fe",
                    response:
                      "Exacto! La espera no es tiempo perdido. Dios usa ese tiempo para madurar nuestra fe y prepararnos para la bendición.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Que Dios siempre cumple",
                    response:
                      "Sí! Aunque tarde, Dios cumple. Su fidelidad no depende de nuestro tiempo, sino de Su carácter inmutable.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
            ],
            application: {
              id: "app-9",
              type: "reflection",
              text: "Tal vez estás esperando que Dios cumpla una promesa en tu vida. La historia de Isaac nos enseña que Dios es fiel, incluso cuando la espera es larga.",
              options: [
                {
                  id: "opt-1",
                  text: "¿Cómo mantengo la fe mientras espero?",
                  response:
                    "Recuerda las promesas de Dios en Su Palabra. Ora constantemente. Rodéate de personas de fe. Y confía en que Dios está obrando, aunque no lo veas.",
                },
                {
                  id: "opt-2",
                  text: "¿Qué hago si pierdo la esperanza?",
                  response:
                    "Es normal sentirse desanimado. Pero recuerda: Sara rió por incredulidad, y Dios transformó esa risa en gozo. Dios puede restaurar tu esperanza.",
                },
                {
                  id: "opt-3",
                  text: "¿Por qué Dios tarda tanto?",
                  response:
                    "Dios usa el tiempo de espera para prepararnos, para que cuando llegue la bendición, estemos listos para recibirla y administrarla bien.",
                },
              ],
            },
            reflection: {
              id: "refl-9",
              type: "reflection",
              text: "Isaac es la prueba viviente de que Dios cumple Sus promesas. Lo que parece imposible para nosotros, es posible para Dios. Él es fiel.",
              options: [
                {
                  id: "opt-1",
                  text: "Confío en el tiempo de Dios",
                  response:
                    "Hermosa declaración de fe! Esa confianza te dará paz mientras esperas. Dios honra a quienes confían en Él.",
                },
                {
                  id: "opt-2",
                  text: "Quiero aprender a esperar con paciencia",
                  response:
                    "Ese es un deseo sabio. La paciencia es un fruto del Espíritu. Pídele a Dios que te ayude a desarrollarla.",
                },
                {
                  id: "opt-3",
                  text: "Me cuesta esperar",
                  response:
                    "Es comprensible. Vivimos en una cultura de inmediatez. Pero las mejores cosas de Dios valen la espera. Él nunca llega tarde.",
                },
              ],
            },
          },
        },
        {
          id: "lesson-genesis-10",
          sectionId: "genesis-patriarcas",
          title: "El Sacrificio de Isaac",
          description: "La prueba de fe de Abraham",
          scripture: "Génesis 22:1-19",
          estimatedMinutes: 18,
          order: 10,
          locked: true,
          content: {
            introduction: {
              id: "intro-10",
              type: "narration",
              text: "Esta es una de las historias más impactantes de la Biblia. Dios le pide a Abraham algo inimaginable: que sacrifique a Isaac, el hijo de la promesa. Es una prueba extrema de fe.",
              options: [
                {
                  id: "opt-1",
                  text: "Esta historia me confunde",
                  response:
                    "Es comprensible. Parece contradictorio que Dios pida esto. Pero descubrirás que hay lecciones profundas sobre fe, obediencia y provisión.",
                },
                {
                  id: "opt-2",
                  text: "¿Por qué Dios haría esto?",
                  response:
                    "Buena pregunta. Dios no quería que Abraham sacrificara a Isaac. Era una prueba para revelar la profundidad de la fe de Abraham y enseñarnos sobre el sacrificio de Cristo.",
                },
                {
                  id: "opt-3",
                  text: "Conozco esta historia",
                  response:
                    "Excelente! Hoy profundizaremos en su significado y lo que nos enseña sobre confiar en Dios incluso en lo más difícil.",
                },
              ],
            },
            teaching: [
              {
                id: "teach-10-1",
                type: "scripture",
                text: "Dios le da a Abraham una orden impactante:",
                scripture:
                  '"Toma ahora tu hijo, tu único, Isaac, a quien amas, y vete a tierra de Moriah, y ofrécelo allí en holocausto." - Génesis 22:2',
              },
              {
                id: "teach-10-2",
                type: "narration",
                text: "Imagina el dolor de Abraham al escuchar esto. Isaac era el hijo de la promesa, el hijo que esperó 25 años.",
              },
              {
                id: "teach-10-3",
                type: "question",
                text: "¿Por qué crees que Dios probó a Abraham de esta manera?",
                options: [
                  {
                    id: "opt-1",
                    text: "Para ver si amaba más a Dios que a Isaac",
                    response:
                      "Exacto! Dios quería saber si Abraham lo pondría a Él primero, incluso por encima del hijo que tanto amaba. Dios debe ser lo primero en nuestras vidas.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Para fortalecer su fe",
                    response:
                      "Sí! Las pruebas no son para destruirnos, sino para fortalecer nuestra fe. Abraham saldría de esta experiencia con una fe más profunda.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Para enseñarnos sobre el sacrificio de Cristo",
                    response:
                      "Muy bien! Esta historia es una prefiguración de cómo Dios Padre entregaría a Su Hijo Jesús. Es una lección profética.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-10-4",
                type: "scripture",
                text: "La respuesta de Abraham fue inmediata:",
                scripture: '"Abraham se levantó muy de mañana." - Génesis 22:3',
              },
              {
                id: "teach-10-5",
                type: "narration",
                text: "No discutió con Dios, no buscó excusas. Obedeció inmediatamente, aunque su corazón debía estar destrozado.",
              },
              {
                id: "teach-10-6",
                type: "question",
                text: "¿Qué te impresiona de la respuesta de Abraham?",
                options: [
                  {
                    id: "opt-1",
                    text: "Su obediencia inmediata",
                    response:
                      "Sí! Abraham no esperó, no dudó. La obediencia rápida muestra confianza profunda en Dios. Él sabía que Dios era bueno, incluso cuando no entendía.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Su fe en que Dios tenía un plan",
                    response:
                      "Exacto! Hebreos 11:19 dice que Abraham creyó que Dios podía resucitar a Isaac. Confiaba en que Dios cumpliría Su promesa de alguna manera.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Su disposición a dar lo más preciado",
                    response:
                      "Hermoso! Abraham estaba dispuesto a dar a Dios lo que más amaba. Eso es adoración verdadera: poner a Dios por encima de todo.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-10-7",
                type: "scripture",
                text: "En el momento crucial, Dios interviene:",
                scripture:
                  '"No extiendas tu mano sobre el muchacho, ni le hagas nada; porque ya conozco que temes a Dios." - Génesis 22:12',
              },
              {
                id: "teach-10-8",
                type: "narration",
                text: "Entonces Abraham ve un carnero trabado en un zarzal. Dios proveyó el sacrificio.",
              },
              {
                id: "teach-10-9",
                type: "question",
                text: "¿Qué nos enseña esto sobre Dios?",
                options: [
                  {
                    id: "opt-1",
                    text: "Que Dios provee en el momento justo",
                    response:
                      "Exacto! Abraham llamó a ese lugar 'Jehová proveerá'. Dios siempre provee, aunque sea en el último momento. Su tiempo es perfecto.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Que Dios no quería que Isaac muriera",
                    response:
                      "Correcto! Era una prueba, no un deseo real de sacrificio humano. Dios detesta los sacrificios humanos. Él quería probar la fe de Abraham.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Que apunta al sacrificio de Jesús",
                    response:
                      "Muy bien! El carnero sustituyó a Isaac, así como Jesús nos sustituyó en la cruz. Dios proveyó el sacrificio perfecto por nuestros pecados.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-10-10",
                type: "narration",
                text: "Esta historia ocurrió en el monte Moriah, el mismo lugar donde siglos después se construiría el templo de Jerusalén, y cerca de donde Jesús sería crucificado. Dios Padre entregó a Su Hijo, pero no hubo sustituto para Jesús.",
              },
              {
                id: "teach-10-11",
                type: "question",
                text: "¿Cómo te hace sentir saber que Dios entregó a Su Hijo por ti?",
                options: [
                  {
                    id: "opt-1",
                    text: "Agradecido por Su amor",
                    response:
                      "Hermoso! El amor de Dios es tan grande que dio lo más precioso que tenía: Su Hijo. Ese es el amor más grande que existe.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Asombrado por Su sacrificio",
                    response:
                      "Sí! Dios detuvo a Abraham, pero no se detuvo a Sí mismo. Permitió que Jesús muriera por nosotros. Ese es el amor sacrificial de Dios.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Motivado a vivir para Él",
                    response:
                      "Excelente respuesta! Cuando entendemos el sacrificio de Cristo, nuestra respuesta natural es vivir para Él. Él lo dio todo por nosotros.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
            ],
            application: {
              id: "app-10",
              type: "reflection",
              text: "Dios puede pedirnos que le entreguemos lo que más amamos, no para quitárnoslo, sino para ver si Él es lo primero en nuestras vidas. Cuando ponemos a Dios primero, Él cuida de todo lo demás.",
              options: [
                {
                  id: "opt-1",
                  text: "¿Hay algo que amo más que a Dios?",
                  response:
                    "Reflexiona honestamente. Puede ser una relación, un sueño, o incluso tu reputación. Pídele a Dios que te ayude a ponerlo a Él primero.",
                },
                {
                  id: "opt-2",
                  text: "¿Cómo puedo confiar cuando Dios pide algo difícil?",
                  response:
                    "Recuerda Su carácter: Dios es bueno, fiel y amoroso. Aunque no entiendas Sus caminos, puedes confiar en Su corazón. Él siempre tiene lo mejor para ti.",
                },
                {
                  id: "opt-3",
                  text: "¿Qué significa poner a Dios primero?",
                  response:
                    "Significa que Él tiene la última palabra en tus decisiones, que Su voluntad es más importante que tus deseos, y que confías en Él por encima de todo.",
                },
              ],
            },
            reflection: {
              id: "refl-10",
              type: "reflection",
              text: "Abraham estuvo dispuesto a dar a Dios lo más preciado. Dios proveyó un sustituto para Isaac, y siglos después, proveyó a Jesús como sustituto por nosotros. Ese es el amor de Dios.",
              options: [
                {
                  id: "opt-1",
                  text: "Quiero poner a Dios primero en mi vida",
                  response:
                    "Hermosa decisión! Cuando Dios es lo primero, todo lo demás encuentra su lugar correcto. Él bendice a quienes lo honran.",
                },
                {
                  id: "opt-2",
                  text: "Estoy agradecido por el sacrificio de Jesús",
                  response:
                    "Ese agradecimiento es el comienzo de una vida transformada. Jesús dio todo por ti. Ahora puedes vivir para Él.",
                },
                {
                  id: "opt-3",
                  text: "Me cuesta confiar completamente",
                  response:
                    "Es honesto reconocerlo. Pídele a Dios que aumente tu fe. Él es paciente y te ayudará a confiar más cada día.",
                },
              ],
            },
          },
        },
        {
          id: "lesson-genesis-11",
          sectionId: "genesis-patriarcas",
          title: "Jacob y Esaú",
          description: "Los hermanos gemelos y la primogenitura",
          scripture: "Génesis 25:19-34",
          estimatedMinutes: 15,
          order: 11,
          locked: true,
          content: {
            introduction: {
              id: "intro-11",
              type: "narration",
              text: "Isaac tuvo dos hijos gemelos: Esaú y Jacob. Aunque eran hermanos, eran muy diferentes. Su historia nos enseña sobre las consecuencias de nuestras decisiones y cómo Dios obra a pesar de nuestras imperfecciones.",
              options: [
                {
                  id: "opt-1",
                  text: "Conozco la historia de Jacob y Esaú",
                  response:
                    "Excelente! Hoy profundizaremos en las lecciones que esta historia nos enseña sobre prioridades y consecuencias.",
                },
                {
                  id: "opt-2",
                  text: "He escuchado algo sobre ellos",
                  response:
                    "Perfecto! Descubrirás una historia fascinante sobre dos hermanos con destinos muy diferentes.",
                },
                {
                  id: "opt-3",
                  text: "No sé quiénes son",
                  response: "Genial! Estás a punto de conocer una de las historias más dramáticas de Génesis.",
                },
              ],
            },
            teaching: [
              {
                id: "teach-11-1",
                type: "narration",
                text: "Esaú nació primero, cubierto de vello rojizo. Jacob nació después, agarrando el talón de Esaú. Esaú se convirtió en un hábil cazador, mientras que Jacob era tranquilo y prefería quedarse en las tiendas. Isaac amaba a Esaú, pero Rebeca amaba a Jacob.",
              },
              {
                id: "teach-11-2",
                type: "question",
                text: "¿Qué problema ves en que los padres tengan favoritos?",
                options: [
                  {
                    id: "opt-1",
                    text: "Crea rivalidad entre hermanos",
                    response:
                      "Exacto! El favoritismo de Isaac y Rebeca alimentó la rivalidad entre Esaú y Jacob. Los padres deben amar a todos sus hijos por igual.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Daña la autoestima del menos favorecido",
                    response:
                      "Muy bien! El favoritismo hiere profundamente. Cada hijo necesita sentirse amado y valorado por sus padres.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Causa división familiar",
                    response:
                      "Correcto! El favoritismo divide a las familias. Vemos esto en la familia de Isaac, donde hubo engaño y separación.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-11-3",
                type: "narration",
                text: "Un día, Esaú llegó del campo cansado y hambriento. Jacob estaba cocinando un guisado.",
              },
              {
                id: "teach-11-4",
                type: "scripture",
                text: "Jacob le hace una propuesta a Esaú:",
                scripture: '"Véndeme en este día tu primogenitura." - Génesis 25:31',
              },
              {
                id: "teach-11-5",
                type: "narration",
                text: "Esaú respondió: '¿Para qué, pues, me servirá la primogenitura?' y la vendió por un plato de lentejas.",
              },
              {
                id: "teach-11-6",
                type: "question",
                text: "¿Qué error cometió Esaú?",
                options: [
                  {
                    id: "opt-1",
                    text: "Valoró lo temporal sobre lo eterno",
                    response:
                      "Exacto! Esaú cambió una bendición eterna por satisfacción momentánea. Muchos hacen lo mismo hoy: sacrifican su futuro por placeres inmediatos.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "No pensó en las consecuencias",
                    response:
                      "Muy bien! Esaú actuó impulsivamente sin considerar el futuro. Las decisiones tomadas en momentos de debilidad pueden tener consecuencias duraderas.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Menospreció lo espiritual",
                    response:
                      "Correcto! La primogenitura incluía bendiciones espirituales. Esaú no valoró las cosas de Dios. Hebreos 12:16 lo llama 'profano' por esto.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-11-7",
                type: "scripture",
                text: "La Biblia concluye con una declaración seria:",
                scripture: '"Así menospreció Esaú la primogenitura." - Génesis 25:34',
              },
              {
                id: "teach-11-8",
                type: "narration",
                text: "Años después, cuando quiso recuperar la bendición, ya era tarde. Lloró amargamente, pero no pudo cambiar lo que había hecho.",
              },
              {
                id: "teach-11-9",
                type: "question",
                text: "¿Qué nos enseña esto sobre nuestras decisiones?",
                options: [
                  {
                    id: "opt-1",
                    text: "Que las decisiones tienen consecuencias permanentes",
                    response:
                      "Exacto! Algunas decisiones no se pueden deshacer. Por eso debemos pensar cuidadosamente antes de actuar, especialmente en cosas importantes.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Que no debemos menospreciar las bendiciones de Dios",
                    response:
                      "Muy bien! Dios nos da bendiciones espirituales que son más valiosas que cualquier cosa material. Debemos valorarlas y protegerlas.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Que el arrepentimiento no siempre restaura lo perdido",
                    response:
                      "Correcto! Dios perdona, pero las consecuencias a veces permanecen. Esaú se arrepintió, pero no pudo recuperar la primogenitura.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-11-10",
                type: "narration",
                text: "Jacob también actuó mal. Aprovechó la debilidad de su hermano para obtener la primogenitura. Aunque Dios había dicho que Jacob sería mayor, Jacob intentó lograrlo por sus propios medios.",
              },
              {
                id: "teach-11-11",
                type: "question",
                text: "¿Qué aprendemos del error de Jacob?",
                options: [
                  {
                    id: "opt-1",
                    text: "Que no debemos manipular para obtener lo que Dios promete",
                    response:
                      "Exacto! Si Dios promete algo, Él lo cumplirá. No necesitamos engañar o manipular. Debemos confiar en Su tiempo y Sus métodos.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Que el fin no justifica los medios",
                    response:
                      "Muy bien! Aunque Jacob obtuvo la primogenitura, lo hizo de manera incorrecta. Dios valora cómo hacemos las cosas, no solo los resultados.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Que Dios puede usar personas imperfectas",
                    response:
                      "Correcto! Jacob era manipulador, pero Dios lo transformó. Dios no busca personas perfectas, sino corazones dispuestos a cambiar.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
            ],
            application: {
              id: "app-11",
              type: "reflection",
              text: "La historia de Esaú y Jacob nos enseña a valorar las cosas espirituales por encima de las temporales, y a confiar en Dios en lugar de manipular las circunstancias.",
              options: [
                {
                  id: "opt-1",
                  text: "¿Estoy valorando lo correcto en mi vida?",
                  response:
                    "Reflexiona: ¿Qué es más importante para ti? ¿Las cosas materiales o tu relación con Dios? ¿El placer inmediato o las bendiciones eternas?",
                },
                {
                  id: "opt-2",
                  text: "¿He tomado decisiones impulsivas que lamento?",
                  response:
                    "Todos lo hemos hecho. Aprende de Esaú: no sacrifiques tu futuro por satisfacción momentánea. Busca la sabiduría de Dios antes de decidir.",
                },
                {
                  id: "opt-3",
                  text: "¿Estoy intentando manipular para obtener lo que quiero?",
                  response:
                    "Si Dios ha prometido algo, confía en que Él lo cumplirá. No necesitas engañar o forzar las cosas. Espera en Su tiempo perfecto.",
                },
              ],
            },
            reflection: {
              id: "refl-11",
              type: "reflection",
              text: "Esaú menospreció su primogenitura y la perdió. Jacob manipuló para obtenerla. Ambos cometieron errores, pero Dios obró a pesar de sus fallas. Dios puede transformar nuestros errores en lecciones.",
              options: [
                {
                  id: "opt-1",
                  text: "Quiero valorar las cosas de Dios",
                  response:
                    "Hermosa decisión! Cuando valoras lo espiritual, tus prioridades cambian. Busca primero el Reino de Dios, y todo lo demás vendrá.",
                },
                {
                  id: "opt-2",
                  text: "Quiero confiar en Dios en lugar de manipular",
                  response:
                    "Excelente! La confianza en Dios trae paz. No necesitas forzar las cosas. Dios tiene el control y hará lo mejor para ti.",
                },
                {
                  id: "opt-3",
                  text: "He cometido errores como Esaú o Jacob",
                  response:
                    "Todos hemos fallado. Pero Dios es un Dios de segundas oportunidades. Él transformó a Jacob, y puede transformarte a ti también.",
                },
              ],
            },
          },
        },
        {
          id: "lesson-genesis-12",
          sectionId: "genesis-patriarcas",
          title: "La Escalera de Jacob",
          description: "El sueño de Jacob y el pacto de Dios",
          scripture: "Génesis 28:10-22",
          estimatedMinutes: 12,
          order: 12,
          locked: true,
          content: {
            introduction: {
              id: "intro-12",
              type: "narration",
              text: "Jacob ha huido de su casa después de engañar a su padre y robar la bendición de Esaú. Está solo, asustado y lejos de todo lo que conoce. Pero en medio de su soledad, Dios se le aparece de una manera extraordinaria.",
              options: [
                {
                  id: "opt-1",
                  text: "Conozco el sueño de la escalera",
                  response:
                    "Excelente! Hoy profundizaremos en el significado de este encuentro y lo que nos enseña sobre la gracia de Dios.",
                },
                {
                  id: "opt-2",
                  text: "He escuchado algo sobre una escalera",
                  response:
                    "Perfecto! Descubrirás que este sueño tiene un significado profundo sobre cómo Dios se relaciona con nosotros.",
                },
                {
                  id: "opt-3",
                  text: "No sé de qué trata",
                  response:
                    "Genial! Estás a punto de conocer uno de los encuentros más hermosos entre Dios y el hombre en toda la Biblia.",
                },
              ],
            },
            teaching: [
              {
                id: "teach-12-1",
                type: "narration",
                text: "Jacob está huyendo de Esaú, quien quiere matarlo por haberle robado la bendición. Jacob está solo, sin nada, durmiendo en el desierto con una piedra como almohada. Ha perdido todo: su familia, su hogar, su seguridad.",
              },
              {
                id: "teach-12-2",
                type: "question",
                text: "¿Cómo crees que se sentía Jacob en ese momento?",
                options: [
                  {
                    id: "opt-1",
                    text: "Asustado y arrepentido",
                    response:
                      "Probablemente sí. Jacob estaba cosechando las consecuencias de su engaño. A veces, nuestras malas decisiones nos llevan a lugares oscuros.",
                  },
                  {
                    id: "opt-2",
                    text: "Solo y abandonado",
                    response:
                      "Exacto! Jacob debía sentirse completamente solo. Pero estaba a punto de descubrir que Dios nunca lo había abandonado.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Sin esperanza",
                    response:
                      "Muy posible. Su futuro parecía incierto. Pero Dios estaba a punto de darle esperanza y un nuevo comienzo.",
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-12-3",
                type: "narration",
                text: "Jacob soñó con una escalera que llegaba al cielo, y ángeles de Dios subían y bajaban por ella. En lo alto estaba Jehová.",
              },
              {
                id: "teach-12-4",
                type: "scripture",
                text: "Dios le habla a Jacob:",
                scripture: '"La tierra en que estás acostado te la daré a ti y a tu descendencia." - Génesis 28:13',
              },
              {
                id: "teach-12-5",
                type: "question",
                text: "¿Qué crees que representa la escalera?",
                options: [
                  {
                    id: "opt-1",
                    text: "La conexión entre el cielo y la tierra",
                    response:
                      "Exacto! La escalera muestra que Dios quiere conectarse con nosotros. Él no está distante, sino que busca relacionarse con la humanidad.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Que Dios está presente incluso en el desierto",
                    response:
                      "Muy bien! Jacob pensaba que estaba solo, pero Dios estaba allí. Dios está presente incluso en nuestros momentos más oscuros.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Una prefiguración de Cristo",
                    response:
                      "Excelente! Jesús mismo dijo en Juan 1:51 que Él es la escalera entre el cielo y la tierra. Él es el camino que conecta a Dios con nosotros.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-12-6",
                type: "scripture",
                text: "Dios le hace una promesa poderosa:",
                scripture:
                  '"He aquí, yo estoy contigo, y te guardaré por dondequiera que fueres, y volveré a traerte a esta tierra; porque no te dejaré hasta que haya hecho lo que te he dicho." - Génesis 28:15',
              },
              {
                id: "teach-12-7",
                type: "question",
                text: "¿Qué te llama la atención de esta promesa?",
                options: [
                  {
                    id: "opt-1",
                    text: "Que Dios promete estar con Jacob",
                    response:
                      "Sí! A pesar de los errores de Jacob, Dios promete no abandonarlo. La presencia de Dios es la mayor bendición que podemos recibir.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Que Dios lo guardará dondequiera que vaya",
                    response:
                      "Exacto! Dios promete protección. No importa dónde estemos, Dios está con nosotros y nos cuida.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Que Dios cumplirá lo que prometió",
                    response:
                      "Muy bien! Dios es fiel a Sus promesas. Lo que Él dice, lo cumple. Podemos confiar completamente en Su palabra.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-12-8",
                type: "scripture",
                text: "Jacob despertó asombrado:",
                scripture: '"Ciertamente Jehová está en este lugar, y yo no lo sabía." - Génesis 28:16',
              },
              {
                id: "teach-12-9",
                type: "narration",
                text: "Llamó a ese lugar Betel, que significa 'Casa de Dios'. Tomó la piedra que había usado como almohada y la puso como memorial.",
              },
              {
                id: "teach-12-10",
                type: "question",
                text: "¿Qué aprendemos de la respuesta de Jacob?",
                options: [
                  {
                    id: "opt-1",
                    text: "Que Dios está presente incluso cuando no lo percibimos",
                    response:
                      "Exacto! Jacob no sabía que Dios estaba allí, pero Él siempre estuvo. A veces no sentimos a Dios, pero Él nunca nos deja.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Que debemos recordar los encuentros con Dios",
                    response:
                      "Muy bien! Jacob puso una piedra memorial. Es importante recordar cómo Dios nos ha hablado y ayudado en el pasado.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Que cualquier lugar puede ser santo",
                    response:
                      "Correcto! No necesitamos estar en un templo para encontrarnos con Dios. Él puede revelarse en cualquier lugar, incluso en un desierto.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
            ],
            application: {
              id: "app-12",
              type: "reflection",
              text: "Jacob estaba en su peor momento cuando Dios se le apareció. Dios no espera a que seamos perfectos para acercarse a nosotros. Él viene a nosotros en medio de nuestras crisis.",
              options: [
                {
                  id: "opt-1",
                  text: "¿Dios está conmigo incluso cuando me siento solo?",
                  response:
                    "Sí! Dios prometió a Jacob: 'Yo estoy contigo'. Esa misma promesa es para ti. Nunca estás solo, aunque así lo sientas.",
                },
                {
                  id: "opt-2",
                  text: "¿Cómo puedo reconocer la presencia de Dios?",
                  response:
                    "A través de la oración, la lectura de la Biblia, y estando atento a cómo Él obra en tu vida. Pídele que abra tus ojos espirituales.",
                },
                {
                  id: "opt-3",
                  text: "¿Qué hago cuando estoy en mi 'desierto'?",
                  response:
                    "Recuerda que Dios está contigo. Los desiertos son temporales, pero la presencia de Dios es eterna. Confía en que Él te sacará de allí.",
                },
              ],
            },
            reflection: {
              id: "refl-12",
              type: "reflection",
              text: "La escalera de Jacob nos muestra que Dios busca conectarse con nosotros. Jesús es esa escalera: el camino entre Dios y la humanidad. A través de Él, tenemos acceso al Padre.",
              options: [
                {
                  id: "opt-1",
                  text: "Agradezco que Dios busca relacionarse conmigo",
                  response:
                    "Hermoso! Dios no está distante. Él desea una relación cercana contigo. Responde a Su amor acercándote a Él cada día.",
                },
                {
                  id: "opt-2",
                  text: "Quiero experimentar la presencia de Dios",
                  response:
                    "Ese deseo agrada a Dios! Búscalo en oración, en Su Palabra, y en adoración. Él promete revelarse a quienes lo buscan de corazón.",
                },
                {
                  id: "opt-3",
                  text: "Me consuela saber que Dios está conmigo",
                  response:
                    "Esa es una verdad poderosa! No importa por lo que pases, Dios está contigo. Él nunca te dejará ni te desamparará.",
                },
              ],
            },
          },
        },
      ],
    },
  ],
}
