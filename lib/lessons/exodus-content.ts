import type { LessonBook } from "./types"

export const EXODUS_BOOK: LessonBook = {
  id: "exodus",
  religion: "cristianismo",
  title: "Éxodo",
  description: "La liberación del pueblo de Dios",
  icon: "🔥",
  testament: "antiguo",
  category: "Pentateuco",
  sections: [
    {
      id: "exodus-esclavitud-liberacion",
      bookId: "exodus",
      title: "Esclavitud y Liberación",
      description: "Moisés y las primeras plagas",
      order: 1,
      lessons: [
        {
          id: "lesson-exodus-1",
          sectionId: "exodus-esclavitud-liberacion",
          title: "Israel en Egipto",
          description: "La opresión del pueblo de Dios",
          scripture: "Éxodo 1:1-22",
          estimatedMinutes: 10,
          order: 1,
          locked: false, // Primera lección de Éxodo siempre desbloqueada
          content: {
            introduction: {
              id: "intro-1",
              type: "narration",
              text: "Bienvenido a Éxodo! Este libro cuenta la historia más grande de liberación en el Antiguo Testamento. Hoy veremos cómo el pueblo de Dios cayó en esclavitud. ¿Estás listo?",
              options: [
                {
                  id: "opt-1",
                  text: "Sí, conozco algo de la historia",
                  response:
                    "Excelente! Entonces profundizaremos en los detalles y el significado de esta historia poderosa.",
                },
                {
                  id: "opt-2",
                  text: "He visto la película",
                  response:
                    "Las películas son entretenidas, pero hoy descubriremos lo que realmente dice la Biblia. Hay mucho más de lo que Hollywood muestra!",
                },
                {
                  id: "opt-3",
                  text: "No sé nada, cuéntame",
                  response:
                    "Perfecto! Estás a punto de descubrir una de las historias más emocionantes de la Biblia: cómo Dios liberó a su pueblo de la esclavitud.",
                },
              ],
            },
            teaching: [
              {
                id: "teach-1",
                type: "scripture",
                text: "La historia comienza recordando cómo llegó Israel a Egipto:",
                scripture:
                  '"Estos son los nombres de los hijos de Israel que entraron en Egipto con Jacob... Y José estaba en Egipto." - Éxodo 1:1, 5',
              },
              {
                id: "teach-2",
                type: "narration",
                text: "Recordarás de Génesis que José fue vendido como esclavo a Egipto, pero Dios lo exaltó hasta ser el segundo al mando. Durante una hambruna, toda la familia de Jacob (Israel) se mudó a Egipto, donde fueron bien recibidos.",
              },
              {
                id: "teach-3",
                type: "scripture",
                text: "Pero entonces algo cambió:",
                scripture: '"Entretanto, se levantó sobre Egipto un nuevo rey que no conocía a José." - Éxodo 1:8',
              },
              {
                id: "teach-4",
                type: "question",
                text: "Un nuevo rey 'que no conocía a José'. ¿Qué significa esto?",
                options: [
                  {
                    id: "opt-1",
                    text: "Que olvidaron lo que José hizo por Egipto",
                    response:
                      "Exacto! José había salvado a Egipto del hambre, pero las nuevas generaciones olvidaron. Esto nos enseña que la gratitud humana es frágil.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Que la situación de Israel cambiaría",
                    response:
                      "Muy bien! Sin la protección que venía de la memoria de José, Israel se volvió vulnerable. A veces Dios permite cambios para cumplir sus propósitos mayores.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "No estoy seguro",
                    response:
                      "Piénsalo así: imagina que tu familia ayudó mucho a un país, pero años después nadie lo recuerda. Así le pasó a Israel. El favor humano es temporal.",
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-5",
                type: "scripture",
                text: "El nuevo faraón vio a Israel como una amenaza:",
                scripture:
                  '"Y dijo a su pueblo: He aquí, el pueblo de los hijos de Israel es mayor y más fuerte que nosotros. Ahora, pues, seamos sabios para con él, para que no se multiplique." - Éxodo 1:9-10',
              },
              {
                id: "teach-6",
                type: "question",
                text: "Faraón tenía miedo de que Israel se multiplicara. ¿Por qué?",
                options: [
                  {
                    id: "opt-1",
                    text: "Temía perder el control",
                    response:
                      "Exacto! El miedo al poder de otros lleva a la opresión. Faraón vio a Israel como una amenaza a su autoridad.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Temía que se rebelaran",
                    response:
                      "Correcto! Faraón imaginó escenarios donde Israel se aliara con enemigos de Egipto. El miedo irracional lleva a decisiones crueles.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Porque eran diferentes",
                    response:
                      "Muy cierto! Israel mantenía su identidad separada. A menudo, el miedo a lo diferente lleva a la discriminación y la opresión.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-7",
                type: "narration",
                text: "Entonces Faraón puso a Israel en esclavitud. Les impusieron trabajos forzados: construir ciudades, hacer ladrillos, trabajar en los campos. La vida se volvió amarga.",
              },
              {
                id: "teach-8",
                type: "scripture",
                text: "Pero algo sorprendente sucedió:",
                scripture:
                  '"Pero cuanto más los oprimían, tanto más se multiplicaban y crecían, de manera que los egipcios temían a los hijos de Israel." - Éxodo 1:12',
              },
              {
                id: "teach-9",
                type: "question",
                text: "Mientras más los oprimían, más se multiplicaban. ¿Qué nos enseña esto?",
                options: [
                  {
                    id: "opt-1",
                    text: "Que Dios bendice a su pueblo incluso en la opresión",
                    response:
                      "Exactamente! Faraón intentó destruirlos, pero Dios los multiplicó. Ningún plan humano puede frustrar los propósitos de Dios.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Que la persecución no detiene el plan de Dios",
                    response:
                      "Muy bien! A lo largo de la historia, la iglesia ha crecido más en tiempos de persecución. Dios usa incluso la oposición para cumplir sus planes.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Que Dios estaba con Israel",
                    response:
                      "Correcto! Aunque parecía que Dios estaba ausente, Él estaba obrando. Su presencia se manifestaba en el crecimiento de su pueblo.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-10",
                type: "narration",
                text: "Desesperado, Faraón tomó medidas más drásticas. Ordenó a las parteras hebreas que mataran a todos los bebés varones al nacer.",
              },
              {
                id: "teach-11",
                type: "scripture",
                text: "Pero las parteras temían a Dios:",
                scripture:
                  '"Pero las parteras temieron a Dios, y no hicieron como les mandó el rey de Egipto, sino que preservaron la vida a los niños." - Éxodo 1:17',
              },
              {
                id: "teach-12",
                type: "question",
                text: "Las parteras desobedecieron al faraón porque temían a Dios. ¿Qué nos enseña esto?",
                options: [
                  {
                    id: "opt-1",
                    text: "Que debemos obedecer a Dios antes que a los hombres",
                    response:
                      "Exacto! Cuando las leyes humanas contradicen las de Dios, debemos elegir a Dios. Las parteras arriesgaron sus vidas por hacer lo correcto.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Que el temor de Dios es mayor que el temor al hombre",
                    response:
                      "Muy bien! Faraón era poderoso, pero Dios es más poderoso. Las parteras entendieron esto y eligieron temer a Dios.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Que Dios honra a los que lo honran",
                    response:
                      "Correcto! La Biblia dice que Dios bendijo a las parteras por su valentía. Cuando honramos a Dios, Él nos honra.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-13",
                type: "scripture",
                text: "Finalmente, Faraón dio una orden terrible:",
                scripture:
                  '"Entonces Faraón mandó a todo su pueblo, diciendo: Echad al río a todo hijo que nazca, y a toda hija preservad la vida." - Éxodo 1:22',
              },
              {
                id: "teach-14",
                type: "narration",
                text: "Esta era una orden de genocidio. Faraón quería exterminar a la próxima generación de varones israelitas. La situación parecía desesperada.",
              },
            ],
            application: {
              id: "app-1",
              type: "reflection",
              text: "Las parteras eligieron obedecer a Dios aunque les costara. ¿Hay alguna área donde necesitas elegir obedecer a Dios sobre las presiones del mundo?",
              options: [
                {
                  id: "opt-1",
                  text: "En mi trabajo o estudios",
                  response:
                    "Es valiente reconocerlo. A veces obedecer a Dios significa ir contra la corriente. Pero Él siempre honra a los que lo honran.",
                },
                {
                  id: "opt-2",
                  text: "En mis relaciones",
                  response:
                    "Exacto! Las relaciones pueden presionarnos a comprometer nuestros valores. Pero como las parteras, debemos temer a Dios más que al hombre.",
                },
                {
                  id: "opt-3",
                  text: "En mi vida diaria",
                  response:
                    "Exacto! Cada día enfrentamos decisiones entre agradar a Dios o al mundo. Elige a Dios, y Él te dará la fuerza para mantenerte firme.",
                },
              ],
            },
            reflection: {
              id: "refl-1",
              type: "reflection",
              text: "Israel se multiplicó incluso en la opresión. ¿Cómo has visto a Dios obrar en medio de tus dificultades?",
              options: [
                {
                  id: "opt-1",
                  text: "Me ha dado fuerza cuando pensé que no podía más",
                  response:
                    "Hermoso! Así como Dios fortaleció a Israel en Egipto, Él te fortalece en tus luchas. Su gracia es suficiente.",
                },
                {
                  id: "opt-2",
                  text: "Ha usado mis pruebas para hacerme crecer",
                  response:
                    "Qué testimonio tan poderoso! Dios no desperdicia nuestro dolor. Lo usa para moldearnos y hacernos más como Jesús.",
                },
                {
                  id: "opt-3",
                  text: "Aún estoy esperando ver su obra",
                  response:
                    "Está bien! A veces Dios obra en formas que no vemos inmediatamente. Pero Él está ahí, trabajando incluso cuando no lo sientes. Confía en su tiempo.",
                },
              ],
            },
          },
        },
        {
          id: "lesson-exodus-2",
          sectionId: "exodus-esclavitud-liberacion",
          title: "El Nacimiento de Moisés",
          description: "Dios prepara a su libertador",
          scripture: "Éxodo 2:1-10",
          estimatedMinutes: 10,
          order: 2,
          locked: true,
          content: {
            introduction: {
              id: "intro-2",
              type: "narration",
              text: "En medio de la orden genocida de Faraón, nació un bebé que cambiaría la historia. Hoy veremos cómo Dios protegió y preparó a Moisés. ¿Conoces su historia?",
              options: [
                {
                  id: "opt-1",
                  text: "Sí, sé que lo pusieron en una canasta",
                  response:
                    "Correcto! Pero hay mucho más en esta historia. Veremos cómo Dios orquestó cada detalle para salvar a su libertador.",
                },
                {
                  id: "opt-2",
                  text: "Sé que fue criado en el palacio",
                  response:
                    "Exacto! Dios usó incluso al enemigo para preparar a su siervo. Hoy veremos la providencia divina en acción.",
                },
                {
                  id: "opt-3",
                  text: "No, cuéntame",
                  response:
                    "Perfecto! Esta es una historia hermosa sobre cómo Dios protege y prepara a los que Él llama.",
                },
              ],
            },
            teaching: [
              {
                id: "teach-1",
                type: "scripture",
                text: "En medio de la crisis, nació un bebé especial:",
                scripture:
                  '"Un varón de la familia de Leví fue y tomó por mujer a una hija de Leví, la que concibió, y dio a luz un hijo; y viéndole que era hermoso, le tuvo escondido tres meses." - Éxodo 2:1-2',
              },
              {
                id: "teach-2",
                type: "question",
                text: "Sus padres vieron que era 'hermoso' y lo escondieron. ¿Qué significa esto?",
                options: [
                  {
                    id: "opt-1",
                    text: "Que vieron algo especial en él",
                    response:
                      "Exacto! Hebreos 11:23 dice que lo hicieron 'por fe'. Vieron que Dios tenía un propósito especial para este niño.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Que amaban a su hijo",
                    response:
                      "Por supuesto! Pero fue más que amor de padres. Tuvieron fe para creer que Dios protegería a su hijo a pesar de la orden de Faraón.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Que desobedecieron a Faraón",
                    response:
                      "Correcto! Como las parteras antes que ellos, eligieron obedecer a Dios antes que al hombre. Su fe los llevó a arriesgar sus vidas.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-3",
                type: "narration",
                text: "Pero después de tres meses, ya no podían esconderlo más. El bebé crecía y era más difícil mantenerlo en secreto. Necesitaban un plan.",
              },
              {
                id: "teach-4",
                type: "scripture",
                text: "Entonces su madre tuvo una idea audaz:",
                scripture:
                  '"Pero no pudiendo ocultarle más tiempo, tomó una arquilla de juncos y la calafateó con asfalto y brea, y colocó en ella al niño y lo puso en un carrizal a la orilla del río." - Éxodo 2:3',
              },
              {
                id: "teach-5",
                type: "question",
                text: "Puso al bebé en una canasta en el río. ¿Fue esto fe o desesperación?",
                options: [
                  {
                    id: "opt-1",
                    text: "Fe",
                    response:
                      "Exacto! No lo lanzó a la corriente, sino que lo colocó estratégicamente donde sabía que la hija de Faraón se bañaba. Confió en que Dios lo protegería.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Ambas cosas",
                    response:
                      "Muy bien! A veces la fe nace de la desesperación. Cuando no tenemos más opciones, aprendemos a confiar completamente en Dios.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Un plan inteligente",
                    response:
                      "Correcto! Fue estratégico: lo puso donde la princesa se bañaba, y su hermana vigilaba. La fe no es ciega; a menudo incluye sabiduría práctica.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-6",
                type: "scripture",
                text: "Y el plan funcionó perfectamente:",
                scripture:
                  '"Y la hija de Faraón descendió a lavarse al río... y viendo la arquilla en el carrizal, envió una criada suya a que la tomase. Y cuando la abrió, vio al niño; y he aquí que el niño lloraba." - Éxodo 2:5-6',
              },
              {
                id: "teach-7",
                type: "narration",
                text: "El llanto del bebé tocó el corazón de la princesa. Aunque sabía que era un niño hebreo, tuvo compasión de él.",
              },
              {
                id: "teach-8",
                type: "scripture",
                text: "Entonces la hermana de Moisés actuó con valentía:",
                scripture:
                  '"Entonces su hermana dijo a la hija de Faraón: ¿Iré a llamarte una nodriza de las hebreas, para que te críe este niño? Y la hija de Faraón respondió: Ve. Entonces fue la doncella, y llamó a la madre del niño." - Éxodo 2:7-8',
              },
              {
                id: "teach-9",
                type: "question",
                text: "Mira la providencia de Dios: la madre de Moisés fue contratada para criar a su propio hijo. ¿Qué nos enseña esto?",
                options: [
                  {
                    id: "opt-1",
                    text: "Que Dios orquesta los detalles",
                    response:
                      "Exactamente! Dios no solo salvó a Moisés, sino que permitió que su madre lo criara y le pagaran por ello. Dios cuida cada detalle.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Que Dios tiene sentido del humor",
                    response:
                      "Muy bien! Faraón quería matar a los bebés hebreos, pero terminó pagando para criar al libertador de Israel. Dios puede usar incluso a nuestros enemigos para cumplir sus propósitos.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Que Dios recompensa la fe",
                    response:
                      "Correcto! La madre de Moisés arriesgó todo por fe. Dios no solo salvó a su hijo, sino que le permitió criarlo. La fe siempre vale la pena.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-10",
                type: "scripture",
                text: "Y así Moisés fue adoptado:",
                scripture:
                  '"Y cuando el niño creció, ella lo trajo a la hija de Faraón, la cual lo prohijó, y le puso por nombre Moisés, diciendo: Porque de las aguas lo saqué." - Éxodo 2:10',
              },
              {
                id: "teach-11",
                type: "narration",
                text: "'Moisés' significa 'sacado de las aguas'. Pero hay un significado más profundo: Dios lo sacó de las aguas para que él sacara a Israel de Egipto.",
              },
              {
                id: "teach-12",
                type: "question",
                text: "Moisés fue criado en el palacio de Faraón. ¿Por qué permitió Dios esto?",
                options: [
                  {
                    id: "opt-1",
                    text: "Para prepararlo para liderar",
                    response:
                      "Exacto! En el palacio, Moisés recibió la mejor educación de Egipto. Dios lo estaba preparando para la tarea que vendría.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Para que conociera el sistema egipcio",
                    response:
                      "Muy bien! Moisés conoció por dentro el poder de Egipto. Esto lo prepararía para enfrentarse a Faraón más adelante.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Para mostrar su soberanía",
                    response:
                      "Correcto! Dios usó al mismo Faraón para criar y educar al hombre que liberaría a Israel. Esto muestra que Dios está en control de todo.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
            ],
            application: {
              id: "app-2",
              type: "reflection",
              text: "La madre de Moisés confió en Dios en una situación imposible. ¿Hay alguna situación en tu vida donde necesitas confiar en Dios completamente?",
              options: [
                {
                  id: "opt-1",
                  text: "Sí, con mi futuro",
                  response:
                    "Es normal sentir incertidumbre. Pero así como Dios tenía un plan para Moisés, Él tiene uno para ti. Confía en que Él orquesta los detalles.",
                },
                {
                  id: "opt-2",
                  text: "Sí, con una situación difícil",
                  response:
                    "Entiendo! A veces, como la madre de Moisés, tenemos que soltar y confiar. Dios puede hacer lo imposible cuando le entregamos nuestras cargas.",
                },
                {
                  id: "opt-3",
                  text: "Sí, con mis seres queridos",
                  response:
                    "Qué difícil es soltar a los que amamos! Pero Dios los ama más que tú. Confía en que Él los cuida mejor de lo que tú podrías.",
                },
              ],
            },
            reflection: {
              id: "refl-2",
              type: "reflection",
              text: "Dios usó incluso al enemigo (Faraón) para preparar a su libertador. ¿Cómo ha usado Dios situaciones difíciles para prepararte?",
              options: [
                {
                  id: "opt-1",
                  text: "Me ha enseñado a depender de Él",
                  response:
                    "Hermoso! A veces Dios permite dificultades para enseñarnos a confiar. Esas lecciones son invaluables.",
                },
                {
                  id: "opt-2",
                  text: "Me ha dado experiencias que ahora uso para ayudar a otros",
                  response:
                    "Qué testimonio tan poderoso! Dios no desperdicia nuestro dolor. Lo usa para equiparnos para ministrar a otros.",
                },
                {
                  id: "opt-3",
                  text: "Aún no veo cómo, pero confío en que lo hará",
                  response:
                    "Esa es fe verdadera! A veces no vemos el propósito inmediatamente. Pero Dios está obrando, preparándote para algo que aún no ves.",
                },
              ],
            },
          },
        },
        {
          id: "lesson-exodus-3",
          sectionId: "exodus-esclavitud-liberacion",
          title: "La Zarza Ardiente",
          description: "El llamado de Moisés",
          scripture: "Éxodo 3:1-4:17",
          estimatedMinutes: 12,
          order: 3,
          locked: true,
          content: {
            introduction: {
              id: "intro-3",
              type: "narration",
              text: "Moisés huyó de Egipto y pasó 40 años en el desierto. Pero Dios no había olvidado a su pueblo ni a Moisés. Hoy veremos uno de los encuentros más extraordinarios de la Biblia. ¿Estás listo?",
              options: [
                {
                  id: "opt-1",
                  text: "Sí, conozco la historia de la zarza",
                  response:
                    "Excelente! Pero hay detalles profundos que quizás no has notado. Hoy veremos cómo Dios se revela a sí mismo.",
                },
                {
                  id: "opt-2",
                  text: "Sé que Dios habló desde un arbusto",
                  response:
                    "Correcto! Pero fue mucho más que eso. Fue el momento donde Dios reveló su nombre y su plan de salvación.",
                },
                {
                  id: "opt-3",
                  text: "No, cuéntame",
                  response: "Perfecto! Prepárate para uno de los momentos más sagrados de toda la Escritura.",
                },
              ],
            },
            teaching: [
              {
                id: "teach-1",
                type: "narration",
                text: "Moisés había huido de Egipto después de matar a un egipcio que golpeaba a un hebreo. Ahora era pastor de ovejas en el desierto, lejos del palacio donde creció.",
              },
              {
                id: "teach-2",
                type: "scripture",
                text: "Un día ordinario se volvió extraordinario:",
                scripture:
                  '"Apacentando Moisés las ovejas de Jetro su suegro... llevó las ovejas a través del desierto, y llegó hasta Horeb, monte de Dios. Y se le apareció el Ángel de Jehová en una llama de fuego en medio de una zarza." - Éxodo 3:1-2',
              },
              {
                id: "teach-3",
                type: "question",
                text: "Dios apareció en una zarza ardiente que no se consumía. ¿Por qué una zarza?",
                options: [
                  {
                    id: "opt-1",
                    text: "Para mostrar su presencia sin destruir",
                    response:
                      "Exacto! Dios es fuego consumidor, pero puede estar presente sin destruir. Esto prefigura cómo Dios habitaría con su pueblo.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Para captar la atención de Moisés",
                    response:
                      "Muy bien! Era algo imposible: fuego que no consume. Dios usa lo extraordinario para llamar nuestra atención.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Para mostrar humildad",
                    response:
                      "Interesante! Dios no eligió un árbol majestuoso sino una zarza humilde. Así como elegiría a Israel, un pueblo pequeño, para mostrar su gloria.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-4",
                type: "scripture",
                text: "Cuando Moisés se acercó, Dios le habló:",
                scripture:
                  '"Y viendo Jehová que él iba a ver, lo llamó Dios de en medio de la zarza, y dijo: Moisés, Moisés! Y él respondió: Heme aquí. Y dijo: No te acerques; quita tu calzado de tus pies, porque el lugar en que tú estás, tierra santa es." - Éxodo 3:4-5',
              },
              {
                id: "teach-5",
                type: "question",
                text: "Dios le dijo que se quitara el calzado porque estaba en tierra santa. ¿Qué significa esto?",
                options: [
                  {
                    id: "opt-1",
                    text: "Que debemos acercarnos a Dios con reverencia",
                    response:
                      "Exactamente! Dios es santo y merece nuestro respeto. No podemos acercarnos a Él casualmente.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Que la presencia de Dios santifica",
                    response:
                      "Muy bien! No era el lugar lo que era santo, sino la presencia de Dios. Donde Dios está, hay santidad.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Que debemos humillarnos ante Dios",
                    response:
                      "Correcto! Quitarse el calzado era un acto de humildad. Ante Dios, reconocemos que somos criaturas ante el Creador.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-6",
                type: "scripture",
                text: "Entonces Dios se identificó:",
                scripture:
                  '"Y dijo: Yo soy el Dios de tu padre, Dios de Abraham, Dios de Isaac, y Dios de Jacob. Entonces Moisés cubrió su rostro, porque tuvo miedo de mirar a Dios." - Éxodo 3:6',
              },
              {
                id: "teach-7",
                type: "narration",
                text: "Dios no era un dios nuevo o desconocido. Era el Dios de sus antepasados, el Dios del pacto. Y Dios había visto el sufrimiento de su pueblo.",
              },
              {
                id: "teach-8",
                type: "scripture",
                text: "Dios reveló su plan:",
                scripture:
                  '"Bien he visto la aflicción de mi pueblo que está en Egipto... y he descendido para librarlos... y para sacarlos de aquella tierra a una tierra buena y ancha, a tierra que fluye leche y miel." - Éxodo 3:7-8',
              },
              {
                id: "teach-9",
                type: "question",
                text: "Dios dijo 'he descendido para librarlos'. ¿Qué nos enseña esto sobre Dios?",
                options: [
                  {
                    id: "opt-1",
                    text: "Que Dios ve nuestro sufrimiento",
                    response: "Exacto! Dios no es indiferente. Él ve, escucha y responde al clamor de su pueblo.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Que Dios actúa para salvar",
                    response:
                      "Muy bien! Dios no solo observa, sino que interviene. Él es un Dios que salva activamente.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Que Dios cumple sus promesas",
                    response:
                      "Correcto! Dios había prometido a Abraham una tierra. Ahora, 400 años después, cumpliría esa promesa.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-10",
                type: "scripture",
                text: "Pero entonces vino la sorpresa:",
                scripture:
                  '"Ven, por tanto, ahora, y te enviaré a Faraón, para que saques de Egipto a mi pueblo, los hijos de Israel." - Éxodo 3:10',
              },
              {
                id: "teach-11",
                type: "narration",
                text: "Moisés no esperaba esto. Había huido de Egipto como fugitivo. Ahora Dios lo enviaba de regreso para enfrentar al hombre más poderoso del mundo.",
              },
              {
                id: "teach-12",
                type: "scripture",
                text: "Moisés respondió con dudas:",
                scripture:
                  '"Entonces Moisés respondió a Dios: ¿Quién soy yo para que vaya a Faraón, y saque de Egipto a los hijos de Israel?" - Éxodo 3:11',
              },
              {
                id: "teach-13",
                type: "question",
                text: "Moisés preguntó '¿Quién soy yo?'. ¿Era esta una pregunta válida?",
                options: [
                  {
                    id: "opt-1",
                    text: "Sí, era humildad genuina",
                    response:
                      "Exacto! Moisés reconocía su insuficiencia. Pero Dios no busca a los capaces, sino a los disponibles.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "No, era falta de fe",
                    response:
                      "Hay algo de verdad en esto. Moisés dudaba, pero Dios pacientemente respondió sus objeciones. A veces nuestras dudas son parte del proceso.",
                  },
                  {
                    id: "opt-3",
                    text: "Era realismo",
                    response:
                      "Cierto! Moisés era un fugitivo sin ejército. Humanamente hablando, era imposible. Pero con Dios, nada es imposible.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-14",
                type: "scripture",
                text: "Dios respondió con una promesa:",
                scripture: '"Y él respondió: Ve, porque yo estaré contigo." - Éxodo 3:12',
              },
              {
                id: "teach-15",
                type: "narration",
                text: "La respuesta de Dios no fue 'porque eres capaz' sino 'porque yo estaré contigo'. No se trataba de Moisés, sino de Dios.",
              },
              {
                id: "teach-16",
                type: "scripture",
                text: "Entonces Moisés hizo otra pregunta crucial:",
                scripture:
                  '"Dijo Moisés a Dios: He aquí que llego yo a los hijos de Israel, y les digo: El Dios de vuestros padres me ha enviado a vosotros. Si ellos me preguntaren: ¿Cuál es su nombre?, ¿qué les responderé?" - Éxodo 3:13',
              },
              {
                id: "teach-17",
                type: "scripture",
                text: "Y Dios reveló su nombre:",
                scripture:
                  '"Y respondió Dios a Moisés: YO SOY EL QUE SOY. Y dijo: Así dirás a los hijos de Israel: YO SOY me envió a vosotros." - Éxodo 3:14',
              },
              {
                id: "teach-18",
                type: "question",
                text: "'YO SOY EL QUE SOY' (YHWH). ¿Qué significa este nombre?",
                options: [
                  {
                    id: "opt-1",
                    text: "Que Dios existe por sí mismo",
                    response:
                      "Exactamente! Dios no depende de nada ni nadie. Él simplemente ES. Es el ser auto-existente.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Que Dios es eterno",
                    response:
                      "Muy bien! Dios no tiene principio ni fin. Él siempre ha sido y siempre será. Es el Dios inmutable.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Que Dios está presente",
                    response:
                      "Correcto! 'YO SOY' implica presencia continua. Dios no es un concepto abstracto, sino una presencia real y activa.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
            ],
            application: {
              id: "app-3",
              type: "reflection",
              text: "Moisés dudó de su capacidad, pero Dios prometió estar con él. ¿Hay algo que Dios te está llamando a hacer pero sientes que no puedes?",
              options: [
                {
                  id: "opt-1",
                  text: "Sí, me siento insuficiente",
                  response:
                    "Eso es exactamente lo que Moisés sintió! Pero recuerda: Dios no te llama porque seas capaz, sino porque Él estará contigo. Su presencia es tu capacitación.",
                },
                {
                  id: "opt-2",
                  text: "Sí, tengo miedo",
                  response:
                    "Es normal! Moisés también tuvo miedo. Pero Dios le dijo 'Yo estaré contigo'. Esa promesa es para ti también. No estás solo.",
                },
                {
                  id: "opt-3",
                  text: "Sí, no sé cómo hacerlo",
                  response:
                    "Perfecto! Moisés tampoco sabía. Pero Dios le mostró paso a paso. Confía en que Dios te guiará en el camino.",
                },
              ],
            },
            reflection: {
              id: "refl-3",
              type: "reflection",
              text: "Dios se reveló como 'YO SOY', el Dios que está presente. ¿Cómo has experimentado la presencia de Dios en tu vida?",
              options: [
                {
                  id: "opt-1",
                  text: "En momentos de necesidad",
                  response:
                    "Hermoso! Dios promete estar cerca de los quebrantados de corazón. Su presencia es más real cuando más la necesitamos.",
                },
                {
                  id: "opt-2",
                  text: "En la adoración",
                  response:
                    "Qué bendición! Dios habita en la alabanza de su pueblo. Cuando adoramos, experimentamos su presencia de manera especial.",
                },
                {
                  id: "opt-3",
                  text: "Aún estoy aprendiendo a reconocerla",
                  response:
                    "Está bien! Reconocer la presencia de Dios es un proceso. Pídele que abra tus ojos espirituales para ver que Él siempre está contigo.",
                },
              ],
            },
          },
        },
        {
          id: "lesson-exodus-4",
          sectionId: "exodus-esclavitud-liberacion",
          title: "Moisés ante Faraón",
          description: "El enfrentamiento con el poder",
          scripture: "Éxodo 5:1-6:13",
          estimatedMinutes: 11,
          order: 4,
          locked: true,
          content: {
            introduction: {
              id: "intro-4",
              type: "narration",
              text: "Moisés regresó a Egipto con un mensaje de Dios para Faraón. Pero las cosas no salieron como esperaba. Hoy veremos qué pasa cuando obedecemos a Dios y todo parece empeorar. ¿Listo?",
              options: [
                {
                  id: "opt-1",
                  text: "Sí, sé que Faraón se negó",
                  response:
                    "Correcto! Pero hay más en esta historia. Veremos cómo Dios usa incluso la resistencia para cumplir sus propósitos.",
                },
                {
                  id: "opt-2",
                  text: "Sé que las cosas empeoraron primero",
                  response:
                    "Exacto! A veces la obediencia trae dificultades antes de la victoria. Hoy veremos por qué Dios permite esto.",
                },
                {
                  id: "opt-3",
                  text: "No, cuéntame",
                  response:
                    "Perfecto! Esta historia nos enseña lecciones importantes sobre la fe cuando las cosas se ponen difíciles.",
                },
              ],
            },
            teaching: [
              {
                id: "teach-1",
                type: "narration",
                text: "Después del encuentro en la zarza ardiente, Moisés regresó a Egipto con su hermano Aarón. Juntos fueron a hablar con Faraón.",
              },
              {
                id: "teach-2",
                type: "scripture",
                text: "Moisés y Aarón entregaron el mensaje de Dios:",
                scripture:
                  '"Después Moisés y Aarón entraron a la presencia de Faraón y le dijeron: Jehová el Dios de Israel dice así: Deja ir a mi pueblo a celebrarme fiesta en el desierto." - Éxodo 5:1',
              },
              {
                id: "teach-3",
                type: "question",
                text: "Nota que dijeron 'Jehová el Dios de Israel dice'. ¿Por qué era importante identificar quién enviaba el mensaje?",
                options: [
                  {
                    id: "opt-1",
                    text: "Para mostrar autoridad divina",
                    response:
                      "Exacto! No era una petición personal de Moisés, sino una orden del Dios Todopoderoso. Esto establecía que era un asunto entre Dios y Faraón.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Para que Faraón supiera con quién trataba",
                    response:
                      "Muy bien! Faraón necesitaba entender que no estaba rechazando a Moisés, sino al Dios de Israel. Las consecuencias serían mayores.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Para dar a Moisés valentía",
                    response:
                      "Interesante! Sí, recordar que hablaba en nombre de Dios le daba a Moisés la confianza para estar ante el hombre más poderoso del mundo.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-4",
                type: "scripture",
                text: "Pero Faraón respondió con arrogancia:",
                scripture:
                  '"Y Faraón respondió: ¿Quién es Jehová, para que yo oiga su voz y deje ir a Israel? Yo no conozco a Jehová, ni tampoco dejaré ir a Israel." - Éxodo 5:2',
              },
              {
                id: "teach-5",
                type: "question",
                text: "Faraón preguntó '¿Quién es Jehová?'. ¿Qué revela esta pregunta?",
                options: [
                  {
                    id: "opt-1",
                    text: "Orgullo y arrogancia",
                    response:
                      "Exactamente! Faraón se consideraba un dios. No reconocía autoridad superior. Este orgullo sería su caída.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Ignorancia espiritual",
                    response:
                      "Muy bien! Faraón no conocía al Dios verdadero. Pero pronto aprendería quién es Jehová a través de las plagas.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Desafío directo a Dios",
                    response:
                      "Correcto! Faraón no solo rechazó la petición, sino que desafió a Dios mismo. Esto desencadenaría un enfrentamiento entre el poder humano y el divino.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-6",
                type: "narration",
                text: "Moisés y Aarón insistieron, pero Faraón no solo se negó, sino que empeoró las cosas para Israel.",
              },
              {
                id: "teach-7",
                type: "scripture",
                text: "Faraón aumentó la carga de trabajo:",
                scripture:
                  '"Y mandó Faraón aquel mismo día a los capataces del pueblo... diciendo: De aquí en adelante no daréis paja al pueblo para hacer ladrillo, como hasta ahora; vayan ellos y recojan por sí mismos la paja. Y les impondréis la misma tarea de ladrillo que hacían antes." - Éxodo 5:6-8',
              },
              {
                id: "teach-8",
                type: "question",
                text: "Después de que Moisés obedeció a Dios, las cosas empeoraron. ¿Por qué permite Dios esto?",
                options: [
                  {
                    id: "opt-1",
                    text: "Para mostrar la maldad de Faraón",
                    response:
                      "Exacto! La opresión aumentada reveló la dureza del corazón de Faraón. A veces Dios permite que el mal se manifieste completamente antes de juzgarlo.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Para que la liberación fuera más gloriosa",
                    response:
                      "Muy bien! Cuanto más oscura la noche, más brillante el amanecer. La liberación sería más impresionante después de esta opresión.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Para probar la fe de Moisés e Israel",
                    response:
                      "Correcto! La fe se prueba en la dificultad. Israel necesitaba aprender a confiar en Dios incluso cuando las circunstancias empeoraban.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-9",
                type: "scripture",
                text: "El pueblo se volvió contra Moisés:",
                scripture:
                  '"Y dijeron: Mire Jehová sobre vosotros, y juzgue; pues nos habéis hecho abominables delante de Faraón y de sus siervos, poniéndoles la espada en la mano para que nos maten." - Éxodo 5:21',
              },
              {
                id: "teach-10",
                type: "narration",
                text: "Imagina cómo se sintió Moisés. Había obedecido a Dios, y ahora su propio pueblo lo culpaba. Las cosas estaban peor que antes.",
              },
              {
                id: "teach-11",
                type: "scripture",
                text: "Moisés llevó su frustración a Dios:",
                scripture:
                  '"Entonces Moisés se volvió a Jehová, y dijo: Señor, ¿por qué afliges a este pueblo? ¿Para qué me enviaste? Porque desde que yo vine a Faraón para hablarle en tu nombre, ha afligido a este pueblo; y tú no has librado a tu pueblo." - Éxodo 5:22-23',
              },
              {
                id: "teach-12",
                type: "question",
                text: "Moisés cuestionó a Dios honestamente. ¿Es correcto hacer esto?",
                options: [
                  {
                    id: "opt-1",
                    text: "Sí, Dios quiere nuestra honestidad",
                    response:
                      "Exactamente! Dios prefiere nuestra honestidad a una religiosidad falsa. Moisés llevó sus dudas directamente a Dios, no a otros.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Sí, pero con respeto",
                    response:
                      "Muy bien! Nota que Moisés cuestionó, pero no acusó. Hay una diferencia entre preguntar honestamente y rebelarse.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Es parte de una relación real",
                    response:
                      "Correcto! Las relaciones genuinas incluyen preguntas difíciles. Dios no se ofende por nuestras dudas honestas.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-13",
                type: "scripture",
                text: "Dios respondió con una promesa renovada:",
                scripture:
                  '"Jehová respondió a Moisés: Ahora verás lo que yo haré a Faraón; porque con mano fuerte los dejará ir, y con mano fuerte los echará de su tierra." - Éxodo 6:1',
              },
              {
                id: "teach-14",
                type: "narration",
                text: "Dios no se molestó por las preguntas de Moisés. En cambio, reafirmó su promesa y reveló que lo que vendría sería tan poderoso que Faraón no solo dejaría ir a Israel, sino que los echaría.",
              },
              {
                id: "teach-15",
                type: "scripture",
                text: "Dios recordó su pacto:",
                scripture:
                  '"Y habló todavía Dios a Moisés, y le dijo: Yo soy JEHOVÁ. Y aparecí a Abraham, a Isaac y a Jacob como Dios Omnipotente, mas en mi nombre JEHOVÁ no me di a conocer a ellos. Y también establecí mi pacto con ellos." - Éxodo 6:2-4',
              },
              {
                id: "teach-16",
                type: "question",
                text: "Dios recordó su pacto con Abraham, Isaac y Jacob. ¿Por qué era importante esto?",
                options: [
                  {
                    id: "opt-1",
                    text: "Para mostrar que Dios cumple sus promesas",
                    response:
                      "Exactamente! Dios había prometido a Abraham una tierra y descendencia. Ahora, generaciones después, cumpliría esa promesa.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Para dar esperanza a Moisés",
                    response:
                      "Muy bien! Cuando las cosas se ven imposibles, recordar la fidelidad pasada de Dios nos da esperanza para el presente.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Para mostrar que Dios no olvida",
                    response:
                      "Correcto! Habían pasado 400 años, pero Dios no había olvidado. Su tiempo no es nuestro tiempo, pero Él siempre cumple.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
            ],
            application: {
              id: "app-4",
              type: "reflection",
              text: "Moisés obedeció a Dios y las cosas empeoraron. ¿Has experimentado algo similar? ¿Cómo respondiste?",
              options: [
                {
                  id: "opt-1",
                  text: "Sí, y dudé si había escuchado bien a Dios",
                  response:
                    "Es normal dudar! Pero como Moisés, lleva esas dudas a Dios. Él puede manejar tus preguntas honestas y reafirmará su llamado.",
                },
                {
                  id: "opt-2",
                  text: "Sí, y me sentí desanimado",
                  response:
                    "Entiendo! Moisés también se desanimó. Pero recuerda: las cosas a menudo empeoran antes de mejorar. No te rindas justo antes del milagro.",
                },
                {
                  id: "opt-3",
                  text: "Sí, pero seguí confiando",
                  response:
                    "Qué fe tan hermosa! Esa es la fe que Dios honra. Confiar cuando no entendemos es la esencia de la fe verdadera.",
                },
              ],
            },
            reflection: {
              id: "refl-4",
              type: "reflection",
              text: "Dios recordó su pacto y prometió cumplirlo. ¿Qué promesas de Dios estás esperando que se cumplan?",
              options: [
                {
                  id: "opt-1",
                  text: "Promesas sobre mi futuro",
                  response:
                    "Sigue esperando! Dios cumple sus promesas, aunque no siempre en nuestro tiempo. Su tiempo es perfecto.",
                },
                {
                  id: "opt-2",
                  text: "Promesas sobre mi familia",
                  response: "No te rindas! Dios es fiel. Sigue orando y confiando. Él obra incluso cuando no lo vemos.",
                },
                {
                  id: "opt-3",
                  text: "Promesas sobre mi propósito",
                  response:
                    "Dios tiene un plan para ti! Como con Moisés, Él te está preparando. Confía en el proceso, incluso cuando no lo entiendas.",
                },
              ],
            },
          },
        },
        {
          id: "lesson-exodus-5",
          sectionId: "exodus-esclavitud-liberacion",
          title: "Las Primeras Plagas",
          description: "Dios demuestra su poder sobre Egipto",
          scripture: "Éxodo 7:14-10:29",
          estimatedMinutes: 13,
          order: 5,
          locked: true,
          content: {
            introduction: {
              id: "intro-5",
              type: "narration",
              text: "Faraón desafió a Dios preguntando '¿Quién es Jehová?'. Ahora Dios le mostraría exactamente quién es Él. Hoy veremos las primeras plagas sobre Egipto. ¿Estás listo?",
              options: [
                {
                  id: "opt-1",
                  text: "Sí, conozco las plagas",
                  response:
                    "Excelente! Pero hoy veremos el significado más profundo: cada plaga era un juicio contra los dioses de Egipto.",
                },
                {
                  id: "opt-2",
                  text: "Sé que fueron 10 plagas",
                  response:
                    "Correcto! Hoy veremos las primeras 7. Cada una demostraba que Jehová es más poderoso que los dioses egipcios.",
                },
                {
                  id: "opt-3",
                  text: "No, cuéntame",
                  response: "Perfecto! Prepárate para ver el poder de Dios manifestado de formas extraordinarias.",
                },
              ],
            },
            teaching: [
              {
                id: "teach-1",
                type: "narration",
                text: "Antes de las plagas, Dios le dijo a Moisés algo importante: 'Yo endureceré el corazón de Faraón'. Esto no significa que Dios forzó a Faraón a pecar, sino que permitió que su corazón ya duro se manifestara completamente.",
              },
              {
                id: "teach-2",
                type: "scripture",
                text: "La primera plaga: el agua se convierte en sangre",
                scripture:
                  '"Y Moisés y Aarón hicieron como Jehová lo mandó; y alzando la vara golpeó las aguas que había en el río... y todas las aguas que había en el río se convirtieron en sangre." - Éxodo 7:20',
              },
              {
                id: "teach-3",
                type: "question",
                text: "El Nilo era adorado como un dios en Egipto. ¿Por qué crees que Dios comenzó con esta plaga?",
                options: [
                  {
                    id: "opt-1",
                    text: "Para mostrar poder sobre sus dioses",
                    response:
                      "Exactamente! El Nilo era la fuente de vida de Egipto. Al convertirlo en sangre, Dios mostró que Él controla lo que ellos adoraban.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Para recordar la sangre de los bebés hebreos",
                    response:
                      "Interesante conexión! Faraón había derramado sangre inocente en el Nilo. Ahora el río se llenaba de sangre como juicio.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Para afectar toda la vida en Egipto",
                    response:
                      "Muy bien! Sin agua potable, toda la vida se veía afectada. Esto mostraba que Jehová controla la vida misma.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-4",
                type: "narration",
                text: "Pero los magos de Faraón imitaron este milagro con sus artes mágicas. Esto endureció más el corazón de Faraón.",
              },
              {
                id: "teach-5",
                type: "scripture",
                text: "La segunda plaga: las ranas",
                scripture:
                  '"Y Aarón extendió su mano sobre las aguas de Egipto, y subieron ranas que cubrieron la tierra de Egipto." - Éxodo 8:6',
              },
              {
                id: "teach-6",
                type: "narration",
                text: "Las ranas estaban por todas partes: en las casas, en las camas, en los hornos. La diosa egipcia Heket tenía cabeza de rana. Dios mostró que Él controla incluso lo que ellos consideraban sagrado.",
              },
              {
                id: "teach-7",
                type: "scripture",
                text: "Por primera vez, Faraón pidió alivio:",
                scripture:
                  '"Entonces Faraón llamó a Moisés y a Aarón, y les dijo: Orad a Jehová para que quite las ranas de mí y de mi pueblo, y dejaré ir a tu pueblo." - Éxodo 8:8',
              },
              {
                id: "teach-8",
                type: "question",
                text: "Faraón prometió dejar ir al pueblo si Dios quitaba las ranas. ¿Cumplió su promesa?",
                options: [
                  {
                    id: "opt-1",
                    text: "No, endureció su corazón de nuevo",
                    response:
                      "Correcto! Tan pronto como el alivio llegó, Faraón rompió su promesa. Esto muestra cómo el pecado endurece el corazón.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "No, porque era orgulloso",
                    response:
                      "Exacto! El orgullo de Faraón no le permitía someterse a Dios. Prefirió sufrir más plagas que humillarse.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "No, y esto trajo más juicio",
                    response:
                      "Muy bien! Cada vez que Faraón endurecía su corazón, las plagas se volvían más severas. El pecado siempre tiene consecuencias crecientes.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-9",
                type: "scripture",
                text: "La tercera plaga: los piojos",
                scripture:
                  '"Entonces Jehová dijo a Moisés: Di a Aarón: Extiende tu vara y golpea el polvo de la tierra, para que se vuelva piojos por todo el país de Egipto." - Éxodo 8:16',
              },
              {
                id: "teach-10",
                type: "narration",
                text: "Esta vez, los magos no pudieron imitar la plaga. Ellos mismos reconocieron: 'Dedo de Dios es este'. Pero Faraón no escuchó.",
              },
              {
                id: "teach-11",
                type: "scripture",
                text: "La cuarta plaga: las moscas",
                scripture:
                  '"Y Jehová lo hizo así, y vino toda clase de moscas molestísimas sobre la casa de Faraón... y la tierra fue corrompida a causa de ellas." - Éxodo 8:24',
              },
              {
                id: "teach-12",
                type: "narration",
                text: "Pero aquí algo cambió: Dios protegió a Israel. Las moscas no entraron en Gosén, donde vivían los hebreos. Esto mostró que Dios hace distinción entre su pueblo y los demás.",
              },
              {
                id: "teach-13",
                type: "scripture",
                text: "La quinta plaga: peste en el ganado",
                scripture:
                  '"Y Jehová hizo aquello al día siguiente, y murió todo el ganado de Egipto; mas del ganado de los hijos de Israel no murió uno." - Éxodo 9:6',
              },
              {
                id: "teach-14",
                type: "question",
                text: "Dios protegió el ganado de Israel mientras el de Egipto moría. ¿Qué nos enseña esto?",
                options: [
                  {
                    id: "opt-1",
                    text: "Que Dios cuida de su pueblo",
                    response:
                      "Exactamente! Incluso en medio del juicio, Dios protege a los suyos. Él hace distinción entre su pueblo y el mundo.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Que el juicio de Dios es específico",
                    response:
                      "Muy bien! Dios no juzga indiscriminadamente. Su juicio es preciso y justo, afectando solo a los culpables.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Que estar con Dios trae protección",
                    response:
                      "Correcto! Hay seguridad en estar del lado de Dios. Incluso cuando el juicio cae alrededor, Él protege a los suyos.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-15",
                type: "scripture",
                text: "La sexta plaga: úlceras",
                scripture:
                  '"Y tomaron ceniza del horno, y se pusieron delante de Faraón, y la esparció Moisés hacia el cielo; y hubo sarpullido que produjo úlceras tanto en los hombres como en las bestias." - Éxodo 9:10',
              },
              {
                id: "teach-16",
                type: "narration",
                text: "Esta plaga fue tan severa que incluso los magos no pudieron presentarse ante Faraón. Pero aún así, Faraón endureció su corazón.",
              },
              {
                id: "teach-17",
                type: "scripture",
                text: "La séptima plaga: granizo",
                scripture:
                  '"Y Jehová hizo llover granizo sobre la tierra de Egipto. Hubo, pues, granizo, y fuego mezclado con el granizo, tan grande, cual nunca hubo en toda la tierra de Egipto desde que fue habitada." - Éxodo 9:23-24',
              },
              {
                id: "teach-18",
                type: "narration",
                text: "Esta fue la plaga más destructiva hasta ahora. Destruyó los cultivos y mató a personas y animales que estaban afuera. Pero Dios dio advertencia: los que temieron la palabra de Jehová pusieron a salvo a sus siervos y ganado.",
              },
            ],
            application: {
              id: "app-5",
              type: "reflection",
              text: "Faraón endureció su corazón repetidamente a pesar de ver el poder de Dios. ¿Hay alguna área donde tu corazón se está endureciendo a la voz de Dios?",
              options: [
                {
                  id: "opt-1",
                  text: "Sí, en algo que sé que debo cambiar",
                  response:
                    "Es valiente reconocerlo! No esperes más plagas. Responde hoy a la voz de Dios. Cuanto más esperamos, más se endurece el corazón.",
                },
                {
                  id: "opt-2",
                  text: "Sí, en mi orgullo",
                  response:
                    "El orgullo fue la caída de Faraón. Humíllate ante Dios hoy. Él da gracia a los humildes pero resiste a los soberbios.",
                },
                {
                  id: "opt-3",
                  text: "Sí, en mi desobediencia",
                  response:
                    "Dios es paciente, pero no espera para siempre. Arrepiéntete hoy. Su misericordia está disponible, pero requiere respuesta.",
                },
              ],
            },
            reflection: {
              id: "refl-5",
              type: "reflection",
              text: "Dios protegió a Israel en medio del juicio sobre Egipto. ¿Cómo has experimentado la protección de Dios?",
              options: [
                {
                  id: "opt-1",
                  text: "Me ha guardado de peligros",
                  response:
                    "Qué bendición! A veces ni siquiera sabemos de qué nos ha protegido Dios. Su cuidado es constante.",
                },
                {
                  id: "opt-2",
                  text: "Me ha librado de consecuencias que merecía",
                  response:
                    "Eso es gracia pura! Dios no nos da lo que merecemos, sino lo que necesitamos. Su misericordia es nueva cada mañana.",
                },
                {
                  id: "opt-3",
                  text: "Me ha sostenido en tiempos difíciles",
                  response:
                    "Hermoso testimonio! Dios no siempre nos libra de las tormentas, pero siempre nos sostiene en ellas. Su presencia es nuestra protección.",
                },
              ],
            },
          },
        },
        {
          id: "lesson-exodus-6",
          sectionId: "exodus-esclavitud-liberacion",
          title: "La Pascua",
          description: "La última plaga y la liberación",
          scripture: "Éxodo 11:1-12:42",
          estimatedMinutes: 14,
          order: 6,
          locked: true,
          content: {
            introduction: {
              id: "intro-6",
              type: "narration",
              text: "Llegamos a la plaga final y más devastadora. Pero también veremos la provisión de Dios para la salvación. Esta noche cambiaría todo para Israel. ¿Estás listo?",
              options: [
                {
                  id: "opt-1",
                  text: "Sí, sé sobre la Pascua",
                  response:
                    "Excelente! Pero hoy veremos cómo la Pascua apunta a algo mucho mayor: la salvación en Cristo.",
                },
                {
                  id: "opt-2",
                  text: "Sé que murieron los primogénitos",
                  response:
                    "Correcto! Pero también veremos cómo Dios proveyó un camino de salvación a través de la sangre del cordero.",
                },
                {
                  id: "opt-3",
                  text: "No, cuéntame",
                  response:
                    "Perfecto! Esta es una de las historias más importantes de toda la Biblia. Presta mucha atención.",
                },
              ],
            },
            teaching: [
              {
                id: "teach-1",
                type: "scripture",
                text: "Dios anunció la plaga final:",
                scripture:
                  '"Y Jehová dijo a Moisés: Una plaga traeré aún sobre Faraón y sobre Egipto, después de la cual él os dejará ir de aquí... A la medianoche yo pasaré por en medio de Egipto, y morirá todo primogénito." - Éxodo 11:1, 4-5',
              },
              {
                id: "teach-2",
                type: "question",
                text: "Esta plaga afectaría a todos los primogénitos, desde el hijo de Faraón hasta el del esclavo. ¿Por qué era tan severa?",
                options: [
                  {
                    id: "opt-1",
                    text: "Porque Faraón había matado a los bebés hebreos",
                    response:
                      "Exacto! Esta era justicia divina. Faraón había ordenado matar a los primogénitos de Israel. Ahora experimentaría el mismo dolor.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Para mostrar que nadie escapa del juicio de Dios",
                    response:
                      "Muy bien! Desde el palacio hasta la prisión, todos enfrentarían las consecuencias. El pecado afecta a todos los niveles de la sociedad.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Para quebrantar finalmente a Faraón",
                    response:
                      "Correcto! Después de 9 plagas, Faraón seguía resistiendo. Esta plaga tocaría su corazón de la manera más personal.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-3",
                type: "narration",
                text: "Pero Dios, en su misericordia, proveyó un camino de salvación. No solo para Israel, sino para cualquiera que creyera y obedeciera.",
              },
              {
                id: "teach-4",
                type: "scripture",
                text: "Dios dio instrucciones específicas:",
                scripture:
                  '"Hablad a toda la congregación de Israel, diciendo: En el diez de este mes tómese cada uno un cordero... El animal será sin defecto, macho de un año... Y tomarán de la sangre, y la pondrán en los dos postes y en el dintel de las casas." - Éxodo 12:3, 5, 7',
              },
              {
                id: "teach-5",
                type: "question",
                text: "El cordero debía ser sin defecto. ¿Por qué era importante esto?",
                options: [
                  {
                    id: "opt-1",
                    text: "Representaba perfección",
                    response:
                      "Exactamente! El cordero sin defecto apuntaba a Cristo, el Cordero perfecto de Dios que quita el pecado del mundo.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Mostraba que el sacrificio debía ser lo mejor",
                    response:
                      "Muy bien! No podían dar a Dios cualquier cosa. El sacrificio requería lo mejor, lo más valioso.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Era un símbolo de Cristo",
                    response:
                      "Correcto! Jesús fue el Cordero sin mancha ni defecto. La Pascua era una sombra de la salvación que vendría en Cristo.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-6",
                type: "scripture",
                text: "La sangre era la clave:",
                scripture:
                  '"Y la sangre os será por señal en las casas donde vosotros estéis; y veré la sangre y pasaré de vosotros, y no habrá en vosotros plaga de mortandad cuando hiera la tierra de Egipto." - Éxodo 12:13',
              },
              {
                id: "teach-7",
                type: "question",
                text: "No era suficiente tener el cordero en la casa. La sangre debía estar en la puerta. ¿Qué nos enseña esto?",
                options: [
                  {
                    id: "opt-1",
                    text: "Que la salvación requiere fe visible",
                    response:
                      "Exacto! No bastaba creer internamente. Debían aplicar la sangre públicamente. La fe verdadera se manifiesta en obediencia.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Que debemos apropiarnos de la salvación",
                    response:
                      "Muy bien! Cristo murió por todos, pero debemos aplicar personalmente su sangre a nuestras vidas. La salvación requiere respuesta.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Que la obediencia es esencial",
                    response:
                      "Correcto! Dios dio instrucciones específicas. La salvación viene por gracia, pero requiere obediencia a la Palabra de Dios.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-8",
                type: "scripture",
                text: "Llegó la medianoche:",
                scripture:
                  '"Y aconteció que a la medianoche Jehová hirió a todo primogénito en la tierra de Egipto, desde el primogénito de Faraón que se sentaba sobre su trono hasta el primogénito del cautivo que estaba en la cárcel, y todo primogénito de los animales." - Éxodo 12:29',
              },
              {
                id: "teach-9",
                type: "narration",
                text: "Fue una noche de gran clamor en Egipto. No había casa donde no hubiera un muerto. Pero en las casas con la sangre en la puerta, todos estaban a salvo.",
              },
              {
                id: "teach-10",
                type: "scripture",
                text: "Finalmente, Faraón cedió:",
                scripture:
                  '"E hizo llamar a Moisés y a Aarón de noche, y les dijo: Salid de en medio de mi pueblo vosotros y los hijos de Israel, e id, servid a Jehová, como habéis dicho." - Éxodo 12:31',
              },
              {
                id: "teach-11",
                type: "question",
                text: "Tomó la muerte de su propio hijo para que Faraón dejara ir a Israel. ¿Qué nos enseña esto sobre el pecado?",
                options: [
                  {
                    id: "opt-1",
                    text: "Que el pecado endurece el corazón",
                    response:
                      "Exactamente! Faraón vio 9 plagas y no se arrepintió. El pecado nos ciega y endurece hasta que experimentamos pérdida personal.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Que el orgullo tiene un precio alto",
                    response:
                      "Muy bien! El orgullo de Faraón le costó todo. Cuánto mejor hubiera sido humillarse desde el principio.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Que resistir a Dios trae consecuencias",
                    response:
                      "Correcto! Dios es paciente, pero no espera para siempre. Resistir a Dios siempre termina en pérdida.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-12",
                type: "scripture",
                text: "Israel salió libre:",
                scripture:
                  '"Y los hijos de Israel hicieron conforme al mandamiento de Moisés... Así despojaron a los egipcios. Y partieron los hijos de Israel... como seiscientos mil hombres de a pie, sin contar los niños." - Éxodo 12:35-37',
              },
              {
                id: "teach-13",
                type: "narration",
                text: "Después de 430 años en Egipto, Israel salió libre. No solo libres, sino con riquezas. Dios no solo los salvó, sino que los bendijo abundantemente.",
              },
              {
                id: "teach-14",
                type: "scripture",
                text: "Dios ordenó recordar este día:",
                scripture:
                  '"Y este día os será en memoria, y lo celebraréis como fiesta solemne para Jehová durante vuestras generaciones; por estatuto perpetuo lo celebraréis." - Éxodo 12:14',
              },
              {
                id: "teach-15",
                type: "question",
                text: "Dios mandó celebrar la Pascua cada año. ¿Por qué es importante recordar?",
                options: [
                  {
                    id: "opt-1",
                    text: "Para no olvidar lo que Dios hizo",
                    response: "Exacto! Es fácil olvidar las obras de Dios. Recordar nos mantiene agradecidos y fieles.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Para enseñar a las próximas generaciones",
                    response:
                      "Muy bien! Cada generación necesita conocer las obras poderosas de Dios. La fe se transmite a través de las historias.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Para apuntar a Cristo",
                    response:
                      "Correcto! La Pascua apuntaba al Cordero de Dios que vendría. Jesús es nuestra Pascua, sacrificado por nosotros.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-16",
                type: "narration",
                text: "La Pascua no era solo un evento histórico. Era una sombra de algo mayor: la salvación en Cristo. Jesús es el Cordero de Dios, sin defecto, cuya sangre nos salva del juicio eterno.",
              },
            ],
            application: {
              id: "app-6",
              type: "reflection",
              text: "La sangre del cordero en la puerta salvó a Israel. La sangre de Cristo en la cruz nos salva a nosotros. ¿Has aplicado la sangre de Cristo a tu vida?",
              options: [
                {
                  id: "opt-1",
                  text: "Sí, he confiado en Cristo",
                  response:
                    "Aleluya! Estás protegido por la sangre del Cordero. El juicio pasó de ti. Vive en gratitud por tan grande salvación.",
                },
                {
                  id: "opt-2",
                  text: "No estoy seguro",
                  response:
                    "Hoy puede ser tu noche de Pascua. Reconoce que eres pecador, cree que Cristo murió por ti, y confía en Él. Su sangre te salvará.",
                },
                {
                  id: "opt-3",
                  text: "Quiero hacerlo ahora",
                  response:
                    "Qué decisión tan hermosa! Ora ahora: 'Señor Jesús, reconozco que soy pecador. Creo que moriste por mí. Aplico tu sangre a mi vida. Sálvame.' Él te salvará!",
                },
              ],
            },
            reflection: {
              id: "refl-6",
              type: "reflection",
              text: "Israel fue liberado de la esclavitud. Cristo nos libera de la esclavitud del pecado. ¿De qué te ha liberado Cristo?",
              options: [
                {
                  id: "opt-1",
                  text: "De mi pasado",
                  response:
                    "Hermoso! En Cristo eres nueva criatura. Las cosas viejas pasaron. No dejes que el pasado te defina. Eres libre!",
                },
                {
                  id: "opt-2",
                  text: "De adicciones o hábitos",
                  response:
                    "Qué testimonio tan poderoso! Cristo rompe cadenas. Sigue caminando en esa libertad. Él te sostiene.",
                },
                {
                  id: "opt-3",
                  text: "De la culpa y la vergüenza",
                  response:
                    "Aleluya! No hay condenación para los que están en Cristo. Camina con la cabeza en alto. Eres hijo de Dios, comprado con sangre preciosa.",
                },
              ],
            },
          },
        },
      ],
    },
  ],
}
