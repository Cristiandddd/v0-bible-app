import type { LessonBook } from "./types"

export const GENESIS_BOOK: LessonBook = {
  id: "genesis",
  religion: "cristianismo",
  title: "Génesis",
  description: "El libro de los comienzos",
  icon: "🌅",
  testament: "antiguo",
  category: "Pentateuco",
  sections: [
    {
      id: "genesis-primordial",
      bookId: "genesis",
      title: "Historia Primordial",
      description: "Los orígenes del mundo y la humanidad",
      order: 1,
      lessons: [
        {
          id: "lesson-genesis-1",
          sectionId: "genesis-primordial",
          title: "La Creación",
          description: "Descubre cómo Dios creó el universo en seis días",
          scripture: "Génesis 1:1-31",
          estimatedMinutes: 10,
          order: 1,
          locked: false,
          content: {
            introduction: {
              id: "intro-1",
              type: "narration",
              text: "Hola! Hoy vamos a explorar uno de los relatos más hermosos y profundos de la Biblia: la Creación. Antes de comenzar, me gustaría saber...",
              options: [
                {
                  id: "opt-1",
                  text: "Conozco la historia de la Creación",
                  response:
                    "Excelente! Entonces este será un buen momento para profundizar en su significado. Hay mucho más de lo que parece a simple vista.",
                },
                {
                  id: "opt-2",
                  text: "He escuchado algo, pero no mucho",
                  response:
                    "Perfecto! Vamos a explorar juntos esta historia fascinante. Te prometo que descubrirás cosas que nunca imaginaste.",
                },
                {
                  id: "opt-3",
                  text: "Es mi primera vez aprendiendo sobre esto",
                  response:
                    "Qué emocionante! Estás a punto de descubrir uno de los relatos más importantes de la fe cristiana. Vamos paso a paso.",
                },
              ],
            },
            teaching: [
              {
                id: "teach-1",
                type: "scripture",
                text: "Leamos juntos las primeras palabras de la Biblia:",
                scripture: '"En el principio creó Dios los cielos y la tierra." - Génesis 1:1',
              },
              {
                id: "teach-2",
                type: "question",
                text: "Esta frase tan simple contiene una verdad profunda. ¿Qué crees que significa 'En el principio'?",
                options: [
                  {
                    id: "opt-1",
                    text: "El comienzo del tiempo mismo",
                    response:
                      "Exactamente! Antes de este momento, no existía el tiempo como lo conocemos. Dios existía antes del tiempo, y con su palabra, dio inicio a todo.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "El inicio de la historia humana",
                    response:
                      "Es una buena reflexión, pero va más allá. 'En el principio' se refiere al comienzo del tiempo mismo, antes incluso de que existiera la humanidad.",
                  },
                  {
                    id: "opt-3",
                    text: "No estoy seguro, explícame más",
                    response:
                      "'En el principio' significa el comienzo absoluto de todo. Antes de este momento, solo existía Dios. Con estas palabras, Dios da inicio al tiempo, al espacio y a toda la creación.",
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-3",
                type: "narration",
                text: "Ahora veamos cómo Dios creó todo en seis días. Cada día, Dios habló y las cosas cobraron existencia. Esto nos enseña algo poderoso sobre la Palabra de Dios.",
              },
              {
                id: "teach-4",
                type: "question",
                text: "Dios creó todo con su Palabra. ¿Qué nos dice esto sobre el poder de Dios?",
                options: [
                  {
                    id: "opt-1",
                    text: "Que Dios es todopoderoso",
                    response:
                      "Exacto! Dios no necesita herramientas ni esfuerzo. Su palabra es suficiente para crear universos enteros. Esto nos muestra su poder absoluto.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Que las palabras son importantes",
                    response:
                      "Muy cierto! Y va más allá: si Dios creó todo con su palabra, esto nos muestra que Él es todopoderoso. No necesita nada más que hablar para que las cosas existan.",
                  },
                  {
                    id: "opt-3",
                    text: "No estoy seguro",
                    response:
                      "Piénsalo así: tú y yo necesitamos herramientas para crear algo. Pero Dios solo necesita hablar. Esto nos muestra que su poder es infinito y absoluto.",
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-5",
                type: "scripture",
                text: "Ahora llegamos a un momento muy especial:",
                scripture:
                  '"Y creó Dios al hombre a su imagen, a imagen de Dios lo creó; varón y hembra los creó." - Génesis 1:27',
              },
              {
                id: "teach-6",
                type: "question",
                text: "Fuiste creado 'a imagen de Dios'. ¿Qué crees que significa esto?",
                options: [
                  {
                    id: "opt-1",
                    text: "Que nos parecemos físicamente a Dios",
                    response:
                      "Es una idea interesante, pero Dios es espíritu. 'A su imagen' significa que tenemos capacidades que reflejan a Dios: podemos amar, crear, razonar, y tener relación con Él.",
                  },
                  {
                    id: "opt-2",
                    text: "Que tenemos valor y propósito especial",
                    response:
                      "Exactamente! Ser creados a imagen de Dios significa que tienes un valor único y un propósito divino. No eres un accidente, fuiste diseñado con intención.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Que podemos conocer a Dios",
                    response:
                      "Muy bien! Ser creados a imagen de Dios significa que podemos tener una relación con Él. Fuimos diseñados para conocerlo y caminar con Él.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-7",
                type: "narration",
                text: "Después de crear todo, la Biblia dice que 'vio Dios todo lo que había hecho, y he aquí que era bueno en gran manera'. Y el séptimo día, Dios descansó.",
              },
              {
                id: "teach-8",
                type: "question",
                text: "¿Por qué crees que Dios descansó el séptimo día?",
                options: [
                  {
                    id: "opt-1",
                    text: "Porque estaba cansado",
                    response:
                      "Dios es todopoderoso y no se cansa. Descansó para establecer un patrón para nosotros: el trabajo es bueno, pero también necesitamos descanso.",
                  },
                  {
                    id: "opt-2",
                    text: "Para darnos un ejemplo a seguir",
                    response:
                      "Exacto! Dios estableció el patrón del descanso. Nos enseña que el descanso no es pereza, sino parte del diseño divino para nuestras vidas.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Para contemplar su creación",
                    response:
                      "Hermosa reflexión! Dios descansó para contemplar y disfrutar de lo que había creado. Esto nos enseña a valorar y agradecer por lo que tenemos.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
            ],
            application: {
              id: "app-1",
              type: "reflection",
              text: "Ahora que entendemos que fuiste creado a imagen de Dios, con propósito y valor único, ¿cómo cambia esto tu perspectiva sobre ti mismo?",
              options: [
                {
                  id: "opt-1",
                  text: "Me ayuda a valorarme más",
                  response:
                    "Hermoso! Reconocer que fuiste creado con propósito divino puede transformar cómo te ves a ti mismo. No eres un accidente, eres una creación intencional de Dios.",
                },
                {
                  id: "opt-2",
                  text: "Me recuerda que tengo un propósito",
                  response:
                    "Exactamente! Dios te creó con un propósito específico. Tu vida tiene significado y dirección porque fuiste diseñado por el Creador del universo.",
                },
                {
                  id: "opt-3",
                  text: "Me hace querer conocer más a Dios",
                  response:
                    "Qué hermoso deseo! Si fuiste creado a imagen de Dios, entonces conocerlo a Él es conocer tu verdadera identidad y propósito.",
                },
              ],
            },
            reflection: {
              id: "refl-1",
              type: "reflection",
              text: "Para cerrar, reflexionemos: Dios descansó el séptimo día. ¿Cómo podrías aplicar este principio del descanso en tu vida esta semana?",
              options: [
                {
                  id: "opt-1",
                  text: "Dedicar un día a descansar y reflexionar",
                  response:
                    "Excelente! El descanso no es pereza, es parte del diseño de Dios para nosotros. Tomar tiempo para descansar y reflexionar te ayudará a reconectar con tu Creador.",
                },
                {
                  id: "opt-2",
                  text: "Hacer pausas durante mi día para agradecer",
                  response:
                    "Hermoso! Pequeñas pausas para agradecer a Dios por su creación pueden transformar tu día. Es una forma práctica de recordar que todo viene de Él.",
                },
                {
                  id: "opt-3",
                  text: "Pasar tiempo en la naturaleza contemplando la creación",
                  response:
                    "Qué idea tan hermosa! La naturaleza es un testimonio del poder y la creatividad de Dios. Contemplarla puede acercarte más a Él.",
                },
              ],
            },
          },
        },
        {
          id: "lesson-genesis-2",
          sectionId: "genesis-primordial",
          title: "Adán y Eva en el Edén",
          description: "La vida en el paraíso y el propósito original de la humanidad",
          scripture: "Génesis 2:4-25",
          estimatedMinutes: 12,
          order: 2,
          locked: true,
          content: {
            introduction: {
              id: "intro-2",
              type: "narration",
              text: "Bienvenido de nuevo! En la lección anterior vimos cómo Dios creó todo. Ahora vamos a profundizar en la creación del ser humano y la vida en el Edén. ¿Qué sabes sobre Adán y Eva?",
              options: [
                {
                  id: "opt-1",
                  text: "Sé que fueron los primeros humanos",
                  response:
                    "Correcto! Fueron los primeros seres humanos creados por Dios. Hoy descubriremos cómo era su vida en el paraíso y qué podemos aprender de ello.",
                },
                {
                  id: "opt-2",
                  text: "Sé que vivían en un jardín",
                  response:
                    "Exacto! El Jardín del Edén era un lugar perfecto. Hoy exploraremos qué hacía tan especial ese lugar y qué significaba para la humanidad.",
                },
                {
                  id: "opt-3",
                  text: "No sé mucho, cuéntame",
                  response:
                    "Perfecto! Estás a punto de descubrir una historia hermosa sobre el propósito original de la humanidad y la relación íntima que Dios quería tener con nosotros.",
                },
              ],
            },
            teaching: [
              {
                id: "teach-1",
                type: "scripture",
                text: "Génesis 2 nos da más detalles sobre la creación del ser humano:",
                scripture:
                  '"Entonces Jehová Dios formó al hombre del polvo de la tierra, y sopló en su nariz aliento de vida, y fue el hombre un ser viviente." - Génesis 2:7',
              },
              {
                id: "teach-2",
                type: "question",
                text: "Dios 'sopló' vida en Adán. ¿Qué nos dice esto sobre nuestra relación con Dios?",
                options: [
                  {
                    id: "opt-1",
                    text: "Que nuestra vida viene directamente de Dios",
                    response:
                      "Exactamente! El aliento de Dios en nosotros significa que nuestra vida es un regalo directo de Él. Dependemos de Dios para existir.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Que somos especiales para Dios",
                    response:
                      "Muy cierto! Dios no solo habló para crear al ser humano, sino que lo formó con sus manos y le dio su propio aliento. Esto muestra cuán especiales somos para Él.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "No estoy seguro",
                    response:
                      "Piénsalo así: Dios formó al ser humano personalmente y le dio su propio aliento. Esto nos muestra que tenemos una conexión íntima y especial con nuestro Creador.",
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-3",
                type: "narration",
                text: "Luego, Dios plantó un jardín en Edén y puso allí al hombre. Este jardín era un lugar perfecto, lleno de árboles hermosos y frutos deliciosos.",
              },
              {
                id: "teach-4",
                type: "scripture",
                text: "Dios le dio a Adán una responsabilidad importante:",
                scripture:
                  '"Tomó, pues, Jehová Dios al hombre, y lo puso en el huerto de Edén, para que lo labrara y lo guardase." - Génesis 2:15',
              },
              {
                id: "teach-5",
                type: "question",
                text: "Dios le dio a Adán la tarea de cuidar el jardín. ¿Qué nos enseña esto sobre el trabajo?",
                options: [
                  {
                    id: "opt-1",
                    text: "Que el trabajo es un castigo",
                    response:
                      "Interesante, pero no. El trabajo existía ANTES del pecado. Dios diseñó al ser humano para trabajar y cuidar la creación. El trabajo es parte del propósito divino, no un castigo.",
                  },
                  {
                    id: "opt-2",
                    text: "Que fuimos creados para tener propósito",
                    response:
                      "Exacto! Dios nos creó con un propósito: cuidar de su creación. El trabajo significativo es parte del diseño de Dios para nuestras vidas.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Que debemos cuidar la creación de Dios",
                    response:
                      "Muy bien! Desde el principio, Dios nos dio la responsabilidad de cuidar su creación. Esto incluye la naturaleza, los animales y todo lo que Él hizo.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-6",
                type: "narration",
                text: "Pero Dios vio que no era bueno que el hombre estuviera solo. Así que creó a los animales y se los presentó a Adán para que les pusiera nombre. Sin embargo, ninguno era una compañía adecuada para él.",
              },
              {
                id: "teach-7",
                type: "scripture",
                text: "Entonces Dios hizo algo hermoso:",
                scripture:
                  '"Entonces Jehová Dios hizo caer sueño profundo sobre Adán, y mientras éste dormía, tomó una de sus costillas... Y de la costilla que Jehová Dios tomó del hombre, hizo una mujer, y la trajo al hombre." - Génesis 2:21-22',
              },
              {
                id: "teach-8",
                type: "question",
                text: "Dios creó a Eva de la costilla de Adán. ¿Qué simboliza esto?",
                options: [
                  {
                    id: "opt-1",
                    text: "Que el hombre y la mujer son iguales",
                    response:
                      "Exacto! Eva no fue creada de los pies de Adán (para ser pisoteada) ni de su cabeza (para dominarlo), sino de su costilla, cerca del corazón. Esto simboliza igualdad y compañerismo.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Que fueron diseñados para estar juntos",
                    response:
                      "Hermoso! Dios diseñó al hombre y la mujer para complementarse mutuamente. La unión entre ambos refleja el diseño perfecto de Dios para las relaciones humanas.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "No estoy seguro",
                    response:
                      "Piénsalo así: Eva vino del costado de Adán, cerca de su corazón. Esto nos enseña que fueron creados como iguales, para caminar juntos lado a lado.",
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-9",
                type: "narration",
                text: "Cuando Adán vio a Eva, exclamó con alegría: 'Esto es ahora hueso de mis huesos y carne de mi carne'. Era la compañía perfecta que necesitaba.",
              },
              {
                id: "teach-10",
                type: "scripture",
                text: "Y la Biblia termina este capítulo con una hermosa declaración:",
                scripture: '"Y estaban ambos desnudos, Adán y su mujer, y no se avergonzaban." - Génesis 2:25',
              },
              {
                id: "teach-11",
                type: "question",
                text: "¿Qué significa que 'no se avergonzaban'?",
                options: [
                  {
                    id: "opt-1",
                    text: "Que vivían en inocencia perfecta",
                    response:
                      "Exactamente! Antes del pecado, no había vergüenza, culpa ni miedo. Vivían en perfecta armonía con Dios, entre ellos y con la creación.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Que tenían una relación transparente",
                    response:
                      "Muy bien! No había nada que ocultar. Su relación era completamente abierta y honesta, sin secretos ni barreras. Así diseñó Dios las relaciones.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Que todo era perfecto",
                    response:
                      "Correcto! La ausencia de vergüenza muestra que todo estaba en perfecta armonía. No había pecado, dolor ni separación de Dios.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
            ],
            application: {
              id: "app-2",
              type: "reflection",
              text: "Dios creó al ser humano con un propósito: cuidar su creación y tener comunión con Él. ¿Cómo puedes vivir tu propósito esta semana?",
              options: [
                {
                  id: "opt-1",
                  text: "Cuidar mejor del medio ambiente",
                  response:
                    "Excelente! Cuidar la creación de Dios es parte de nuestro propósito original. Pequeñas acciones como reciclar o cuidar plantas honran a Dios.",
                },
                {
                  id: "opt-2",
                  text: "Dedicar tiempo a estar con Dios",
                  response:
                    "Hermoso! La comunión con Dios era el centro de la vida en el Edén. Dedicar tiempo a orar y leer la Biblia te acerca a ese propósito original.",
                },
                {
                  id: "opt-3",
                  text: "Valorar mis relaciones",
                  response:
                    "Muy bien! Dios diseñó las relaciones para que fueran transparentes y amorosas. Invertir en tus relaciones refleja el diseño de Dios para la humanidad.",
                },
              ],
            },
            reflection: {
              id: "refl-2",
              type: "reflection",
              text: "Adán y Eva vivían en perfecta armonía con Dios, sin vergüenza ni miedo. ¿Qué te impide tener esa misma cercanía con Dios hoy?",
              options: [
                {
                  id: "opt-1",
                  text: "Mis errores y pecados",
                  response:
                    "Es una reflexión honesta. La buena noticia es que Jesús vino para restaurar esa relación. A través de Él, podemos acercarnos a Dios sin vergüenza.",
                },
                {
                  id: "opt-2",
                  text: "Las distracciones de la vida",
                  response:
                    "Muy cierto. El mundo moderno está lleno de distracciones. Pero Dios sigue invitándote a tener comunión con Él. Solo necesitas hacer espacio para Él.",
                },
                {
                  id: "opt-3",
                  text: "No siento que Dios esté cerca",
                  response:
                    "Entiendo esa sensación. Pero la verdad es que Dios nunca se aleja de nosotros. A veces solo necesitamos abrir nuestro corazón y buscarlo en oración.",
                },
              ],
            },
          },
        },
        {
          id: "lesson-genesis-3",
          sectionId: "genesis-primordial",
          title: "La Caída y el Pecado",
          description: "Cómo entró el pecado al mundo y sus consecuencias",
          scripture: "Génesis 3:1-24",
          estimatedMinutes: 15,
          order: 3,
          locked: true,
          content: {
            introduction: {
              id: "intro-3",
              type: "narration",
              text: "Hoy abordaremos uno de los momentos más tristes pero importantes de la Biblia: la entrada del pecado al mundo. Es una historia difícil, pero esencial para entender por qué necesitamos a Jesús. ¿Estás listo?",
              options: [
                {
                  id: "opt-1",
                  text: "Sí, conozco la historia",
                  response:
                    "Bien! Aunque la conozcas, hoy profundizaremos en su significado y en cómo nos afecta personalmente.",
                },
                {
                  id: "opt-2",
                  text: "He escuchado algo sobre la manzana",
                  response:
                    "Interesante! Aunque la Biblia no menciona específicamente una manzana, sí habla de un fruto prohibido. Descubramos juntos qué pasó realmente.",
                },
                {
                  id: "opt-3",
                  text: "No sé de qué trata, explícame",
                  response:
                    "Perfecto! Esta historia explica por qué el mundo tiene dolor, sufrimiento y muerte. Es fundamental para entender el plan de salvación de Dios.",
                },
              ],
            },
            teaching: [
              {
                id: "teach-1",
                type: "narration",
                text: "En el Edén, Dios había dado a Adán y Eva libertad total, con una sola restricción: no comer del árbol del conocimiento del bien y del mal. Esta era una prueba de confianza y obediencia.",
              },
              {
                id: "teach-2",
                type: "scripture",
                text: "Pero entonces apareció la serpiente (Satanás):",
                scripture:
                  '"Pero la serpiente era astuta, más que todos los animales del campo que Jehová Dios había hecho; la cual dijo a la mujer: ¿Conque Dios os ha dicho: No comáis de todo árbol del huerto?" - Génesis 3:1',
              },
              {
                id: "teach-3",
                type: "question",
                text: "La serpiente distorsionó las palabras de Dios. ¿Por qué crees que empezó así?",
                options: [
                  {
                    id: "opt-1",
                    text: "Para hacer dudar a Eva de Dios",
                    response:
                      "Exacto! La estrategia de Satanás fue sembrar duda sobre la bondad de Dios. Hizo parecer que Dios era restrictivo, cuando en realidad les había dado todo excepto un árbol.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Para confundirla",
                    response:
                      "Sí! Satanás torció las palabras de Dios para hacer que Eva cuestionara sus intenciones. Esta sigue siendo su táctica hoy: hacernos dudar de la bondad de Dios.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "No estoy seguro",
                    response:
                      "Piénsalo así: Dios había dicho 'puedes comer de todos los árboles excepto uno'. Pero la serpiente lo presentó como 'no pueden comer de ninguno'. Distorsionó la verdad para sembrar duda.",
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-4",
                type: "scripture",
                text: "Eva respondió correctamente al principio, pero la serpiente continuó:",
                scripture:
                  '"Entonces la serpiente dijo a la mujer: No moriréis; sino que sabe Dios que el día que comáis de él, serán abiertos vuestros ojos, y seréis como Dios, sabiendo el bien y el mal." - Génesis 3:4-5',
              },
              {
                id: "teach-5",
                type: "question",
                text: "La serpiente prometió que serían 'como Dios'. ¿Cuál era la verdadera tentación aquí?",
                options: [
                  {
                    id: "opt-1",
                    text: "El orgullo de ser como Dios",
                    response:
                      "Exactamente! La raíz del pecado fue el orgullo: querer ser como Dios, independientes de Él. Este sigue siendo el pecado fundamental de la humanidad.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "La curiosidad por conocer más",
                    response:
                      "Hay algo de eso, pero va más profundo. La tentación real era la independencia de Dios, el deseo de decidir por sí mismos qué es bueno y malo, sin necesitar a Dios.",
                  },
                  {
                    id: "opt-3",
                    text: "El deseo de sabiduría",
                    response:
                      "Parcialmente cierto, pero la verdadera tentación era más oscura: querer ser como Dios, tomar su lugar, decidir por sí mismos sin necesitarlo a Él.",
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-6",
                type: "narration",
                text: "Eva vio que el fruto era bueno para comer, agradable a los ojos y deseable para alcanzar sabiduría. Tomó del fruto, comió, y le dio también a Adán, quien estaba con ella. Y él también comió.",
              },
              {
                id: "teach-7",
                type: "scripture",
                text: "Las consecuencias fueron inmediatas:",
                scripture:
                  '"Entonces fueron abiertos los ojos de ambos, y conocieron que estaban desnudos; entonces cosieron hojas de higuera, y se hicieron delantales." - Génesis 3:7',
              },
              {
                id: "teach-8",
                type: "question",
                text: "¿Qué significa que 'conocieron que estaban desnudos'?",
                options: [
                  {
                    id: "opt-1",
                    text: "Que apareció la vergüenza",
                    response:
                      "Exacto! Antes no había vergüenza. Ahora, por primera vez, sintieron culpa y quisieron esconderse. El pecado trajo vergüenza y separación.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Que perdieron su inocencia",
                    response:
                      "Correcto! La inocencia perfecta se perdió. Ahora conocían el mal por experiencia, no solo por advertencia. Y eso cambió todo.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Que su relación con Dios cambió",
                    response:
                      "Muy bien! La vergüenza los llevó a esconderse de Dios. Por primera vez, había una barrera entre ellos y su Creador. El pecado siempre separa.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-9",
                type: "narration",
                text: "Cuando Dios vino a caminar con ellos en el jardín, como solía hacer, Adán y Eva se escondieron. Dios los llamó: '¿Dónde estás?' No porque no supiera, sino para darles oportunidad de confesar.",
              },
              {
                id: "teach-10",
                type: "scripture",
                text: "Pero en lugar de confesar, comenzaron a culparse:",
                scripture:
                  '"Y el hombre respondió: La mujer que me diste por compañera me dio del árbol, y yo comí. Entonces Jehová Dios dijo a la mujer: ¿Qué es lo que has hecho? Y dijo la mujer: La serpiente me engañó, y comí." - Génesis 3:12-13',
              },
              {
                id: "teach-11",
                type: "question",
                text: "Adán culpó a Eva (y a Dios), Eva culpó a la serpiente. ¿Qué nos enseña esto sobre el pecado?",
                options: [
                  {
                    id: "opt-1",
                    text: "Que el pecado nos hace evadir responsabilidad",
                    response:
                      "Exactamente! El pecado no solo nos separa de Dios, sino que nos hace negar nuestra responsabilidad. Adán y Eva no pudieron simplemente decir 'lo siento'.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Que el pecado daña las relaciones",
                    response:
                      "Muy cierto! Antes eran uno. Ahora Adán culpa a Eva. El pecado destruye la unidad y la confianza en las relaciones.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Que todos somos pecadores",
                    response:
                      "Correcto! Todos tendemos a culpar a otros en lugar de asumir responsabilidad. Esta tendencia viene desde el primer pecado.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-12",
                type: "narration",
                text: "Dios pronunció consecuencias para cada uno: la serpiente sería maldita, Eva tendría dolor en el parto y conflicto en su matrimonio, Adán trabajaría con sudor y la tierra produciría espinos. Y finalmente, todos morirían.",
              },
              {
                id: "teach-13",
                type: "scripture",
                text: "Pero en medio del juicio, Dios dio una promesa de esperanza:",
                scripture:
                  '"Y pondré enemistad entre ti y la mujer, y entre tu simiente y la simiente suya; ésta te herirá en la cabeza, y tú le herirás en el calcañar." - Génesis 3:15',
              },
              {
                id: "teach-14",
                type: "question",
                text: "Esta es la primera promesa del Mesías (Jesús). ¿Qué significa que 'herirá tu cabeza'?",
                options: [
                  {
                    id: "opt-1",
                    text: "Que Jesús derrotaría a Satanás",
                    response:
                      "Exacto! Herir la cabeza es un golpe mortal. Dios prometió que vendría alguien (Jesús) que derrotaría completamente al enemigo. Esta es la primera promesa del evangelio!",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Que habría esperanza de salvación",
                    response:
                      "Correcto! Incluso en el momento del juicio, Dios prometió un Salvador. El pecado no tendría la última palabra. Jesús vendría a restaurar lo que se perdió.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "No estoy seguro",
                    response:
                      "Esta profecía apunta a Jesús. Aunque Satanás 'heriría su calcañar' (la crucifixión), Jesús le 'heriría la cabeza' (victoria total sobre el pecado y la muerte).",
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-15",
                type: "narration",
                text: "Finalmente, Dios hizo túnicas de pieles para Adán y Eva, cubriendo su desnudez. Esto requirió el sacrificio de un animal, prefigurando el sacrificio de Jesús que cubriría nuestro pecado.",
              },
            ],
            application: {
              id: "app-3",
              type: "reflection",
              text: "El pecado de Adán y Eva fue querer ser independientes de Dios. ¿En qué áreas de tu vida intentas ser independiente de Dios?",
              options: [
                {
                  id: "opt-1",
                  text: "En mis decisiones importantes",
                  response:
                    "Es honesto reconocerlo. Todos tendemos a confiar en nuestra propia sabiduría. Pero Dios nos invita a depender de Él en todo, especialmente en las decisiones importantes.",
                },
                {
                  id: "opt-2",
                  text: "En mi vida diaria, olvidándome de orar",
                  response:
                    "Muy cierto! Es fácil vivir como si no necesitáramos a Dios. Pero Él quiere estar involucrado en cada aspecto de tu vida, no solo en las crisis.",
                },
                {
                  id: "opt-3",
                  text: "En mi orgullo y autosuficiencia",
                  response:
                    "Qué reflexión tan profunda! El orgullo fue la raíz del primer pecado. Reconocer nuestra necesidad de Dios es el primer paso hacia la humildad verdadera.",
                },
              ],
            },
            reflection: {
              id: "refl-3",
              type: "reflection",
              text: "Dios prometió un Salvador incluso en el momento del juicio. ¿Cómo te hace sentir saber que Dios ya tenía un plan de rescate desde el principio?",
              options: [
                {
                  id: "opt-1",
                  text: "Me da esperanza y paz",
                  response:
                    "Hermoso! Dios nunca nos abandonó. Desde el primer pecado, ya tenía planeado enviarnos a Jesús. Su amor por ti es eterno e inquebrantable.",
                },
                {
                  id: "opt-2",
                  text: "Me muestra cuánto me ama Dios",
                  response:
                    "Exactamente! Dios no nos dejó en nuestro pecado. Inmediatamente prometió un Salvador. Eso es amor verdadero: rescatarnos cuando no lo merecíamos.",
                },
                {
                  id: "opt-3",
                  text: "Me hace querer conocer más a Jesús",
                  response:
                    "Qué deseo tan hermoso! Jesús es el cumplimiento de esa promesa antigua. Conocerlo es descubrir el amor de Dios en su máxima expresión.",
                },
              ],
            },
          },
        },
        {
          id: "lesson-genesis-4",
          sectionId: "genesis-primordial",
          title: "Caín y Abel",
          description: "La primera familia y el primer asesinato",
          scripture: "Génesis 4:1-16",
          estimatedMinutes: 12,
          order: 4,
          locked: true,
          content: {
            introduction: {
              id: "intro-4",
              type: "narration",
              text: "Hoy veremos una historia trágica: la de los primeros hermanos, Caín y Abel. Es una historia sobre celos, ira y las consecuencias del pecado. ¿Conoces esta historia?",
              options: [
                {
                  id: "opt-1",
                  text: "Sí, sé que Caín mató a Abel",
                  response:
                    "Correcto. Pero hoy profundizaremos en por qué sucedió y qué podemos aprender sobre el corazón humano y la gracia de Dios.",
                },
                {
                  id: "opt-2",
                  text: "He escuchado algo, pero no los detalles",
                  response:
                    "Perfecto! Es una historia que nos enseña mucho sobre la naturaleza del pecado y cómo Dios responde incluso a los peores errores.",
                },
                {
                  id: "opt-3",
                  text: "No, cuéntame",
                  response:
                    "Bien! Esta es una historia difícil pero importante. Nos muestra cómo el pecado se extendió rápidamente después de la Caída.",
                },
              ],
            },
            teaching: [
              {
                id: "teach-1",
                type: "narration",
                text: "Después de ser expulsados del Edén, Adán y Eva tuvieron dos hijos: Caín, que se dedicó a la agricultura, y Abel, que fue pastor de ovejas.",
              },
              {
                id: "teach-2",
                type: "scripture",
                text: "Ambos hermanos trajeron ofrendas a Dios:",
                scripture:
                  '"Y Abel trajo también de los primogénitos de sus ovejas, de lo más gordo de ellas. Y miró Jehová con agrado a Abel y a su ofrenda; pero no miró con agrado a Caín y a la ofrenda suya." - Génesis 4:4-5',
              },
              {
                id: "teach-3",
                type: "question",
                text: "¿Por qué crees que Dios aceptó la ofrenda de Abel pero no la de Caín?",
                options: [
                  {
                    id: "opt-1",
                    text: "Por la actitud del corazón",
                    response:
                      "Exacto! Hebreos 11:4 nos dice que Abel ofreció su sacrificio 'por fe'. No era solo lo que ofrecía, sino cómo lo ofrecía. Dios mira el corazón.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Porque Abel dio lo mejor",
                    response:
                      "Muy bien! Abel trajo 'de los primogénitos' y 'de lo más gordo'. Dio lo mejor que tenía. Caín simplemente trajo 'del fruto de la tierra', sin especificar que fuera lo mejor.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "No lo sé",
                    response:
                      "La diferencia estaba en el corazón. Abel adoró con fe y dio lo mejor. Caín dio una ofrenda, pero su corazón no estaba en ella. Dios siempre mira más allá de lo externo.",
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-4",
                type: "narration",
                text: "Caín se enojó mucho y su semblante decayó. Estaba furioso porque su ofrenda fue rechazada.",
              },
              {
                id: "teach-5",
                type: "scripture",
                text: "Pero Dios, en su misericordia, le advirtió:",
                scripture:
                  '"Entonces Jehová dijo a Caín: ¿Por qué te has ensañado, y por qué ha decaído tu semblante? Si bien hicieres, ¿no serás enaltecido? y si no hicieres bien, el pecado está a la puerta; con todo esto, a ti será su deseo, y tú te enseñorearás de él." - Génesis 4:6-7',
              },
              {
                id: "teach-6",
                type: "question",
                text: "Dios le dijo a Caín que 'el pecado está a la puerta'. ¿Qué significa esto?",
                options: [
                  {
                    id: "opt-1",
                    text: "Que el pecado estaba esperando para dominarlo",
                    response:
                      "Exactamente! El pecado es como una bestia agachada, lista para atacar. Dios advirtió a Caín que debía dominarlo antes de que lo dominara a él.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Que Caín tenía una elección",
                    response:
                      "Muy bien! Dios le estaba dando una oportunidad de arrepentirse. Caín podía elegir hacer lo correcto o dejar que el pecado lo controlara.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "No estoy seguro",
                    response:
                      "Dios estaba advirtiendo a Caín: 'Estás a punto de hacer algo terrible. Detente ahora. Puedes vencer esta tentación si eliges hacerlo.' Pero Caín no escuchó.",
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-7",
                type: "narration",
                text: "Pero Caín no escuchó la advertencia. En lugar de arrepentirse, dejó que los celos y la ira lo consumieran.",
              },
              {
                id: "teach-8",
                type: "scripture",
                text: "Y entonces sucedió lo impensable:",
                scripture:
                  '"Y dijo Caín a su hermano Abel: Salgamos al campo. Y aconteció que estando ellos en el campo, Caín se levantó contra su hermano Abel, y lo mató." - Génesis 4:8',
              },
              {
                id: "teach-9",
                type: "question",
                text: "Este es el primer asesinato en la historia humana. ¿Qué nos enseña sobre el pecado?",
                options: [
                  {
                    id: "opt-1",
                    text: "Que el pecado escala rápidamente",
                    response:
                      "Exacto! Comenzó con celos, luego ira, y terminó en asesinato. El pecado nunca se queda quieto; siempre crece si no lo detenemos.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Que debemos controlar nuestras emociones",
                    response:
                      "Muy cierto! Caín dejó que sus emociones lo controlaran. Si hubiera dominado su ira cuando Dios le advirtió, nada de esto habría pasado.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Que todos somos capaces de pecar gravemente",
                    response:
                      "Correcto! Caín no era un 'monstruo'. Era un hombre que dejó que el pecado lo dominara. Esto nos advierte que todos somos capaces de caer si no vigilamos nuestro corazón.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-10",
                type: "scripture",
                text: "Después del asesinato, Dios confrontó a Caín:",
                scripture:
                  '"Y Jehová dijo a Caín: ¿Dónde está Abel tu hermano? Y él respondió: No sé. ¿Soy yo acaso guarda de mi hermano?" - Génesis 4:9',
              },
              {
                id: "teach-11",
                type: "question",
                text: "Caín mintió a Dios y respondió con sarcasmo. ¿Qué nos dice esto?",
                options: [
                  {
                    id: "opt-1",
                    text: "Que el pecado endurece el corazón",
                    response:
                      "Exactamente! Caín no mostró remordimiento. El pecado había endurecido tanto su corazón que incluso se atrevió a mentirle a Dios con sarcasmo.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Que intentó evadir responsabilidad",
                    response:
                      "Correcto! Como sus padres antes que él, Caín no quiso asumir responsabilidad. El pecado siempre nos hace huir de la verdad.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Que no valoraba a su hermano",
                    response:
                      "Muy cierto! Su pregunta '¿Soy yo guarda de mi hermano?' muestra desprecio. Pero la respuesta es sí: somos responsables de cuidar y amar a nuestros hermanos.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-12",
                type: "narration",
                text: "Dios pronunció juicio sobre Caín: la tierra no le daría más su fuerza, y sería errante y extranjero. Caín se lamentó de que su castigo era demasiado grande.",
              },
              {
                id: "teach-13",
                type: "scripture",
                text: "Pero incluso en el juicio, Dios mostró misericordia:",
                scripture:
                  '"Y le respondió Jehová: Ciertamente cualquiera que matare a Caín, siete veces será castigado. Entonces Jehová puso señal en Caín, para que no lo matase cualquiera que le hallara." - Génesis 4:15',
              },
              {
                id: "teach-14",
                type: "question",
                text: "Dios protegió a Caín incluso después de su terrible pecado. ¿Qué nos enseña esto sobre Dios?",
                options: [
                  {
                    id: "opt-1",
                    text: "Que Dios es misericordioso incluso con los peores pecadores",
                    response:
                      "Exacto! Caín merecía la muerte, pero Dios le dio vida. Esto nos muestra que la misericordia de Dios se extiende incluso a los que menos la merecen.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Que siempre hay esperanza de redención",
                    response:
                      "Hermoso! Si Dios pudo mostrar misericordia a Caín, entonces nadie está más allá de su gracia. No importa qué hayas hecho, Dios puede perdonarte.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Que Dios valora la vida humana",
                    response:
                      "Correcto! Incluso la vida de un asesino es valiosa para Dios. Él protegió a Caín porque cada ser humano lleva su imagen.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
            ],
            application: {
              id: "app-4",
              type: "reflection",
              text: "Dios advirtió a Caín que 'el pecado está a la puerta'. ¿Hay algún pecado 'a tu puerta' que necesitas dominar antes de que te domine?",
              options: [
                {
                  id: "opt-1",
                  text: "Sí, lucho con la ira",
                  response:
                    "Es valiente reconocerlo. La ira no controlada destruyó a Caín. Pero tú puedes elegir diferente. Pídele a Dios que te ayude a dominarla antes de que te domine.",
                },
                {
                  id: "opt-2",
                  text: "Sí, lucho con los celos",
                  response:
                    "Gracias por tu honestidad. Los celos destruyeron la relación de Caín con su hermano. Pero puedes elegir la gratitud en lugar de la envidia. Dios te ayudará.",
                },
                {
                  id: "opt-3",
                  text: "Sí, hay algo que necesito confesar",
                  response:
                    "Qué bueno que lo reconoces! El primer paso para vencer el pecado es admitirlo. Dios está listo para perdonarte y ayudarte a cambiar.",
                },
              ],
            },
            reflection: {
              id: "refl-4",
              type: "reflection",
              text: "Caín preguntó '¿Soy yo guarda de mi hermano?' La respuesta es sí. ¿Cómo puedes ser 'guarda' de tus hermanos esta semana?",
              options: [
                {
                  id: "opt-1",
                  text: "Cuidar de alguien que está pasando por dificultades",
                  response:
                    "Hermoso! Ser guarda de nuestros hermanos significa estar atentos a sus necesidades y ayudarlos. Eso es amor en acción.",
                },
                {
                  id: "opt-2",
                  text: "Reconciliarme con alguien con quien tengo conflicto",
                  response:
                    "Qué decisión tan valiente! Caín dejó que el conflicto se convirtiera en tragedia. Tú puedes elegir la reconciliación. Dios te dará la fuerza.",
                },
                {
                  id: "opt-3",
                  text: "Orar por mis hermanos en la fe",
                  response:
                    "Excelente! Ser guarda también significa interceder en oración. Tus oraciones pueden hacer una diferencia real en la vida de otros.",
                },
              ],
            },
          },
        },
        {
          id: "lesson-genesis-5",
          sectionId: "genesis-primordial",
          title: "Noé y el Diluvio",
          description: "El juicio de Dios y su pacto de gracia",
          scripture: "Génesis 6-9",
          estimatedMinutes: 15,
          order: 5,
          locked: true,
          content: {
            introduction: {
              id: "intro-5",
              type: "narration",
              text: "Hoy exploraremos una de las historias más conocidas de la Biblia: Noé y el diluvio. Es una historia sobre el juicio de Dios, pero también sobre su gracia y fidelidad. ¿Qué sabes sobre Noé?",
              options: [
                {
                  id: "opt-1",
                  text: "Sé que construyó un arca",
                  response:
                    "Correcto! Pero hay mucho más en esta historia. Hoy descubriremos por qué Dios envió el diluvio y qué nos enseña sobre su carácter.",
                },
                {
                  id: "opt-2",
                  text: "Sé que salvó a los animales",
                  response:
                    "Sí! Pero la historia va más allá de los animales. Es sobre cómo Dios juzga el pecado pero siempre provee un camino de salvación.",
                },
                {
                  id: "opt-3",
                  text: "No sé mucho, cuéntame",
                  response:
                    "Perfecto! Esta es una historia poderosa sobre el juicio y la gracia de Dios. Nos enseña que Dios toma el pecado en serio, pero nunca abandona a los justos.",
                },
              ],
            },
            teaching: [
              {
                id: "teach-1",
                type: "scripture",
                text: "La historia comienza con una descripción triste del estado de la humanidad:",
                scripture:
                  '"Y vio Jehová que la maldad de los hombres era mucha en la tierra, y que todo designio de los pensamientos del corazón de ellos era de continuo solamente el mal." - Génesis 6:5',
              },
              {
                id: "teach-2",
                type: "question",
                text: "La maldad era tan grande que 'todo designio' era 'de continuo solamente el mal'. ¿Qué tan grave era la situación?",
                options: [
                  {
                    id: "opt-1",
                    text: "Extremadamente grave",
                    response:
                      "Exacto! No era solo que pecaban ocasionalmente. TODOS sus pensamientos eran SIEMPRE malos. La humanidad se había corrompido completamente.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Peor de lo que imaginaba",
                    response:
                      "Sí! La Biblia usa palabras muy fuertes: 'todo', 'de continuo', 'solamente'. No quedaba nada bueno en la humanidad excepto Noé.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "No tan grave",
                    response:
                      "En realidad era peor de lo que parece. La palabra 'todo' significa que no había excepciones. 'De continuo' significa que nunca paraban. 'Solamente el mal' significa que no había nada bueno. Era una situación desesperada.",
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-3",
                type: "scripture",
                text: "La respuesta de Dios fue de profundo dolor:",
                scripture:
                  '"Y se arrepintió Jehová de haber hecho hombre en la tierra, y le dolió en su corazón." - Génesis 6:6',
              },
              {
                id: "teach-4",
                type: "question",
                text: "Dice que 'le dolió en su corazón'. ¿Qué nos enseña esto sobre Dios?",
                options: [
                  {
                    id: "opt-1",
                    text: "Que Dios tiene emociones",
                    response:
                      "Exacto! Dios no es una fuerza impersonal. Él siente dolor cuando sus hijos se alejan. El pecado no solo rompe sus leyes, rompe su corazón.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Que el pecado entristece a Dios",
                    response:
                      "Muy cierto! Dios creó a la humanidad para tener comunión con Él. Ver cómo se corrompieron le causó un dolor profundo. Nuestro pecado no es solo 'romper reglas', es herir a quien nos ama.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "No estoy seguro",
                    response:
                      "Piénsalo así: imagina crear algo hermoso con amor, solo para verlo destruirse. Así se sintió Dios. El diluvio no fue un acto de ira caprichosa, sino de dolor profundo.",
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-5",
                type: "scripture",
                text: "Pero en medio de toda esa maldad, había una excepción:",
                scripture: '"Pero Noé halló gracia ante los ojos de Jehová." - Génesis 6:8',
              },
              {
                id: "teach-6",
                type: "narration",
                text: "Noé era 'varón justo, perfecto en sus generaciones; con Dios caminó Noé'. En un mundo completamente corrupto, Noé eligió seguir a Dios.",
              },
              {
                id: "teach-7",
                type: "question",
                text: "Noé 'halló gracia' ante Dios. ¿Qué significa esto?",
                options: [
                  {
                    id: "opt-1",
                    text: "Que Dios lo favoreció sin merecerlo",
                    response:
                      "Exacto! La gracia es favor inmerecido. Aunque Noé era justo, su salvación vino por la gracia de Dios, no por sus propios méritos.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Que Dios siempre preserva un remanente",
                    response:
                      "Muy bien! Incluso en el peor momento de la historia, Dios preservó a alguien fiel. Esto nos enseña que Dios nunca abandona completamente a la humanidad.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Que vale la pena ser fiel a Dios",
                    response:
                      "Correcto! Mientras todos seguían la corriente del mal, Noé nadó contra ella. Su fidelidad fue recompensada. Dios siempre ve y recompensa a los que le son fieles.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-8",
                type: "narration",
                text: "Dios le dijo a Noé que construyera un arca enorme: 135 metros de largo, 22 metros de ancho y 13 metros de alto. Le dio instrucciones específicas sobre cómo construirla.",
              },
              {
                id: "teach-9",
                type: "question",
                text: "Noé construyó el arca durante aproximadamente 120 años. ¿Qué nos enseña esto?",
                options: [
                  {
                    id: "opt-1",
                    text: "Que Dios es paciente",
                    response:
                      "Exacto! Durante 120 años, Dios esperó. Cada día que Noé construía era una advertencia para el mundo. Dios siempre da tiempo para el arrepentimiento.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Que la obediencia requiere perseverancia",
                    response:
                      "Muy bien! Noé obedeció durante décadas, probablemente siendo ridiculizado. La verdadera obediencia no es solo hacer lo correcto una vez, sino perseverar.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Que Noé tenía fe increíble",
                    response:
                      "Correcto! Nunca había llovido antes. Noé construyó un barco gigante en tierra seca porque confió en la palabra de Dios. Eso es fe verdadera.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-10",
                type: "narration",
                text: "Finalmente, Noé, su familia y los animales entraron al arca. Y entonces comenzó a llover. Llovió durante 40 días y 40 noches, y las aguas cubrieron toda la tierra.",
              },
              {
                id: "teach-11",
                type: "scripture",
                text: "Después de muchos meses, las aguas bajaron y el arca reposó sobre el monte Ararat. Finalmente, Noé y su familia salieron:",
                scripture:
                  '"Y edificó Noé un altar a Jehová, y tomó de todo animal limpio y de toda ave limpia, y ofreció holocausto en el altar." - Génesis 8:20',
              },
              {
                id: "teach-12",
                type: "question",
                text: "Lo primero que hizo Noé al salir fue adorar a Dios. ¿Qué nos enseña esto?",
                options: [
                  {
                    id: "opt-1",
                    text: "Que la adoración debe ser nuestra prioridad",
                    response:
                      "Exacto! Antes de reconstruir su vida, Noé adoró. Esto nos enseña que Dios debe ser siempre lo primero, especialmente después de una liberación.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Que Noé era agradecido",
                    response:
                      "Muy bien! Noé reconoció que su salvación vino de Dios. La gratitud genuina siempre lleva a la adoración.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Que necesitamos sacrificio para acercarnos a Dios",
                    response:
                      "Correcto! El sacrificio de Noé apuntaba hacia el sacrificio final de Jesús. Solo a través del sacrificio podemos acercarnos a un Dios santo.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-13",
                type: "scripture",
                text: "Entonces Dios hizo un pacto con Noé:",
                scripture:
                  '"Y estableceré mi pacto con vosotros, y no exterminaré ya más toda carne con aguas de diluvio, ni habrá más diluvio para destruir la tierra." - Génesis 9:11',
              },
              {
                id: "teach-14",
                type: "narration",
                text: "Como señal de este pacto, Dios puso el arcoíris en las nubes. Cada vez que vemos un arcoíris, es un recordatorio de la promesa de Dios de nunca destruir la tierra con un diluvio otra vez.",
              },
              {
                id: "teach-15",
                type: "question",
                text: "El arcoíris es una señal del pacto de Dios. ¿Qué nos enseña sobre Dios?",
                options: [
                  {
                    id: "opt-1",
                    text: "Que Dios cumple sus promesas",
                    response:
                      "Exacto! Miles de años después, Dios sigue cumpliendo su promesa. Si Él es fiel en esto, podemos confiar en todas sus promesas.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Que Dios es misericordioso",
                    response:
                      "Muy cierto! Aunque la humanidad merecía juicio, Dios prometió misericordia. El arcoíris es un símbolo de su gracia continua.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Que Dios nos da señales visibles de su amor",
                    response:
                      "Hermoso! Dios sabía que necesitaríamos recordatorios tangibles de su amor. El arcoíris es un regalo visual de su fidelidad.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
            ],
            application: {
              id: "app-5",
              type: "reflection",
              text: "Noé 'caminó con Dios' en medio de una generación corrupta. ¿Cómo puedes caminar con Dios en tu contexto actual?",
              options: [
                {
                  id: "opt-1",
                  text: "Manteniéndome fiel aunque otros no lo hagan",
                  response:
                    "Excelente! Como Noé, puedes elegir seguir a Dios incluso cuando nadie más lo hace. Tu fidelidad puede inspirar a otros.",
                },
                {
                  id: "opt-2",
                  text: "Obedeciendo a Dios incluso cuando no tenga sentido",
                  response:
                    "Muy bien! Noé construyó un barco en tierra seca. A veces Dios nos pide cosas que no tienen sentido para otros, pero la obediencia siempre vale la pena.",
                },
                {
                  id: "opt-3",
                  text: "Siendo luz en medio de la oscuridad",
                  response:
                    "Hermoso! Noé fue luz en un mundo oscuro. Tú también puedes ser esa luz en tu familia, trabajo o escuela. Dios te usará para impactar a otros.",
                },
              ],
            },
            reflection: {
              id: "refl-5",
              type: "reflection",
              text: "El arcoíris nos recuerda que Dios cumple sus promesas. ¿Qué promesa de Dios necesitas recordar hoy?",
              options: [
                {
                  id: "opt-1",
                  text: "Que nunca me dejará ni me abandonará",
                  response:
                    "Hermosa promesa! Así como Dios fue fiel con Noé, Él es fiel contigo. Nunca estás solo, Él siempre está contigo.",
                },
                {
                  id: "opt-2",
                  text: "Que todas las cosas ayudan a bien",
                  response:
                    "Qué promesa tan poderosa! Incluso en medio de las tormentas de la vida, Dios está obrando para tu bien. Confía en su plan.",
                },
                {
                  id: "opt-3",
                  text: "Que Él tiene un propósito para mi vida",
                  response:
                    "Exacto! Así como Dios tenía un propósito para Noé, Él tiene uno para ti. Tu vida no es un accidente, es parte de su plan perfecto.",
                },
              ],
            },
          },
        },
        {
          id: "lesson-genesis-6",
          sectionId: "genesis-primordial",
          title: "La Torre de Babel",
          description: "El orgullo humano y la diversidad de lenguas",
          scripture: "Génesis 11:1-9",
          estimatedMinutes: 10,
          order: 6,
          locked: true,
          content: {
            introduction: {
              id: "intro-6",
              type: "narration",
              text: "Hoy exploraremos la historia de la Torre de Babel, donde la humanidad intentó alcanzar el cielo por su propia cuenta. Es una historia sobre orgullo, unidad mal dirigida y cómo Dios responde. ¿Conoces esta historia?",
              options: [
                {
                  id: "opt-1",
                  text: "Sí, sé que construyeron una torre",
                  response:
                    "Correcto! Pero hay mucho más detrás de esa torre. Hoy descubriremos qué motivó su construcción y qué nos enseña sobre el corazón humano.",
                },
                {
                  id: "opt-2",
                  text: "Sé que Dios confundió sus lenguas",
                  response:
                    "Exacto! Pero ¿por qué lo hizo? Hoy exploraremos las razones detrás de la intervención de Dios y qué podemos aprender de ello.",
                },
                {
                  id: "opt-3",
                  text: "No, cuéntame",
                  response:
                    "Perfecto! Esta es una historia fascinante sobre cómo el orgullo humano lleva a la confusión, pero también sobre cómo Dios tiene planes mejores para nosotros.",
                },
              ],
            },
            teaching: [
              {
                id: "teach-1",
                type: "scripture",
                text: "La historia comienza así:",
                scripture: '"Tenía entonces toda la tierra una sola lengua y unas mismas palabras." - Génesis 11:1',
              },
              {
                id: "teach-2",
                type: "narration",
                text: "Después del diluvio, la humanidad se multiplicó nuevamente. Todos hablaban el mismo idioma y se establecieron en una llanura en la tierra de Sinar (Babilonia).",
              },
              {
                id: "teach-3",
                type: "scripture",
                text: "Entonces tuvieron una idea:",
                scripture:
                  '"Y dijeron: Vamos, edifiquémonos una ciudad y una torre, cuya cúspide llegue al cielo; y hagámonos un nombre, por si fuéremos esparcidos sobre la faz de toda la tierra." - Génesis 11:4',
              },
              {
                id: "teach-4",
                type: "question",
                text: "Querían 'hacerse un nombre' y evitar ser esparcidos. ¿Cuál era el problema con esto?",
                options: [
                  {
                    id: "opt-1",
                    text: "Estaban actuando con orgullo",
                    response:
                      "Exacto! 'Hacerse un nombre' significa buscar gloria para sí mismos, no para Dios. El orgullo siempre nos lleva a poner nuestra gloria por encima de la de Dios.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Estaban desobedeciendo a Dios",
                    response:
                      "Muy bien! Dios les había dicho 'fructificad y multiplicaos, y llenad la tierra' (Génesis 9:1). Pero ellos querían quedarse juntos en un solo lugar. Estaban rechazando el plan de Dios.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Querían ser como Dios",
                    response:
                      "Correcto! Una torre 'cuya cúspide llegue al cielo' era un intento de alcanzar a Dios por sus propios medios. Es el mismo pecado de Adán y Eva: querer ser como Dios.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-5",
                type: "narration",
                text: "La torre de Babel era más que un edificio. Era un símbolo de la rebelión humana: el intento de alcanzar el cielo sin Dios, de hacer un nombre para sí mismos en lugar de glorificar a Dios.",
              },
              {
                id: "teach-6",
                type: "scripture",
                text: "Entonces Dios intervino:",
                scripture:
                  '"Y descendió Jehová para ver la ciudad y la torre que edificaban los hijos de los hombres." - Génesis 11:5',
              },
              {
                id: "teach-7",
                type: "question",
                text: "Dice que Dios 'descendió para ver'. ¿Qué nos enseña esto?",
                options: [
                  {
                    id: "opt-1",
                    text: "Que Dios está atento a lo que hacemos",
                    response:
                      "Exacto! Nada escapa a la vista de Dios. Él ve nuestras acciones y conoce nuestras motivaciones. No podemos esconder nada de Él.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Que la torre no era tan alta como pensaban",
                    response:
                      "Muy bien! Es casi irónico: querían 'llegar al cielo', pero Dios tuvo que 'descender' para verla. Esto muestra cuán insignificantes son nuestros esfuerzos sin Dios.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Que Dios se involucra en los asuntos humanos",
                    response:
                      "Correcto! Dios no es un observador distante. Él se involucra activamente cuando la humanidad se desvía de su propósito.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-8",
                type: "scripture",
                text: "Dios evaluó la situación:",
                scripture:
                  '"Y dijo Jehová: He aquí el pueblo es uno, y todos éstos tienen un solo lenguaje; y han comenzado la obra, y nada les hará desistir ahora de lo que han pensado hacer." - Génesis 11:6',
              },
              {
                id: "teach-9",
                type: "question",
                text: "Dios dijo que 'nada les hará desistir'. ¿Por qué era esto un problema?",
                options: [
                  {
                    id: "opt-1",
                    text: "Porque usarían su unidad para el mal",
                    response:
                      "Exacto! La unidad es poderosa, pero cuando se usa para rebelarse contra Dios, se vuelve peligrosa. Dios vio que sin límites, la maldad humana no tendría fin.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Porque se volverían más orgullosos",
                    response:
                      "Muy bien! Si lograban esto, su orgullo crecería aún más. Dios, en su misericordia, los detuvo antes de que se hundieran más en la rebelión.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "No estoy seguro",
                    response:
                      "Piénsalo así: imagina un grupo de niños decididos a hacer algo peligroso. Un padre amoroso los detiene, no para arruinar su diversión, sino para protegerlos. Así actuó Dios.",
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-10",
                type: "scripture",
                text: "Entonces Dios actuó:",
                scripture:
                  '"Ahora, pues, descendamos, y confundamos allí su lengua, para que ninguno entienda el habla de su compañero." - Génesis 11:7',
              },
              {
                id: "teach-11",
                type: "narration",
                text: "De repente, las personas que habían trabajado juntas ya no podían entenderse. La confusión los obligó a detenerse. Se separaron en grupos según su idioma y se esparcieron por toda la tierra.",
              },
              {
                id: "teach-12",
                type: "question",
                text: "¿Fue la confusión de lenguas un castigo o una misericordia?",
                options: [
                  {
                    id: "opt-1",
                    text: "Ambas cosas",
                    response:
                      "Exactamente! Fue un juicio por su orgullo, pero también una misericordia. Dios los detuvo antes de que su rebelión los llevara a algo peor. A veces Dios nos detiene para protegernos.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Una misericordia",
                    response:
                      "Muy bien! Aunque parecía un castigo, Dios estaba protegiendo a la humanidad de sí misma. Si hubieran continuado, su maldad no habría tenido límites.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Un castigo",
                    response:
                      "Es cierto que fue un juicio, pero también fue misericordioso. Dios los dispersó para cumplir su propósito original: llenar la tierra. A veces lo que parece castigo es en realidad redirección.",
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-13",
                type: "scripture",
                text: "Y así terminó el proyecto:",
                scripture:
                  '"Así los esparció Jehová desde allí sobre la faz de toda la tierra, y dejaron de edificar la ciudad. Por esto fue llamado el nombre de ella Babel, porque allí confundió Jehová el lenguaje de toda la tierra." - Génesis 11:8-9',
              },
              {
                id: "teach-14",
                type: "narration",
                text: "'Babel' significa 'confusión'. Lo que comenzó como un proyecto de unidad orgullosa terminó en confusión y dispersión. Pero esta dispersión cumplió el plan original de Dios: que la humanidad llenara la tierra.",
              },
              {
                id: "teach-15",
                type: "question",
                text: "Interesante: en Pentecostés (Hechos 2), el Espíritu Santo permitió que personas de diferentes idiomas se entendieran. ¿Qué nos dice esto?",
                options: [
                  {
                    id: "opt-1",
                    text: "Que Dios puede revertir la división",
                    response:
                      "Exacto! Babel trajo división por el orgullo. Pentecostés trajo unidad por el Espíritu. Dios puede unir lo que el pecado dividió.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Que la verdadera unidad viene de Dios",
                    response:
                      "Muy bien! En Babel, buscaron unidad sin Dios y terminó en confusión. En Pentecostés, Dios trajo unidad verdadera a través del Espíritu Santo.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Que Dios tiene un plan de redención",
                    response:
                      "Hermoso! Lo que se perdió en Babel se restaura en Cristo. Dios siempre tiene un plan para redimir lo que el pecado destruyó.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
            ],
            application: {
              id: "app-6",
              type: "reflection",
              text: "La gente de Babel quería 'hacerse un nombre'. ¿En qué áreas de tu vida buscas tu propia gloria en lugar de la de Dios?",
              options: [
                {
                  id: "opt-1",
                  text: "En mi trabajo o estudios",
                  response:
                    "Es honesto reconocerlo. Es fácil buscar reconocimiento humano. Pero cuando trabajamos para la gloria de Dios, encontramos propósito verdadero.",
                },
                {
                  id: "opt-2",
                  text: "En las redes sociales",
                  response:
                    "Muy cierto! Las redes sociales pueden ser una 'torre de Babel' moderna: construyendo una imagen para impresionar a otros. Pero la aprobación de Dios es lo único que realmente importa.",
                },
                {
                  id: "opt-3",
                  text: "En mis logros personales",
                  response:
                    "Gracias por tu honestidad! Los logros son buenos, pero cuando se vuelven sobre nosotros en lugar de glorificar a Dios, se convierten en ídolos. Dios quiere que lo glorifiquemos a Él en todo.",
                },
              ],
            },
            reflection: {
              id: "refl-6",
              type: "reflection",
              text: "Dios dispersó a la humanidad para cumplir su propósito de llenar la tierra. ¿Hay algo que Dios está 'dispersando' en tu vida para cumplir su propósito?",
              options: [
                {
                  id: "opt-1",
                  text: "Sí, está cambiando mis planes",
                  response:
                    "A veces Dios desarma nuestros planes para cumplir los suyos. Confía en que Él sabe lo que hace. Sus planes son siempre mejores que los nuestros.",
                },
                {
                  id: "opt-2",
                  text: "Sí, está sacándome de mi zona de confort",
                  response:
                    "Eso puede ser incómodo, pero es donde ocurre el crecimiento. Dios te está preparando para algo mayor. Confía en el proceso.",
                },
                {
                  id: "opt-3",
                  text: "No estoy seguro",
                  response:
                    "Está bien! Pídele a Dios que te muestre su propósito. A veces lo que parece confusión es en realidad Dios redirigiendo tu camino hacia algo mejor.",
                },
              ],
            },
          },
        },
      ],
    },
  ],
}
