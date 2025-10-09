import type { LessonBook } from "./types"

export const EXODUS_BOOK_PART2: LessonBook = {
  id: "exodus-part2",
  religion: "cristianismo", 
  title: "Éxodo - Parte 2",
  description: "De la liberación a la presencia de Dios",
  icon: "🌊",
  testament: "antiguo",
  category: "Pentateuco",
  sections: [
    {
      id: "exodus-mar-desierto",
      bookId: "exodus",
      title: "El Mar Rojo y el Desierto", 
      description: "Milagros y pruebas en el camino",
      order: 2,
      lessons: [
        {
          id: "lesson-exodus-7",
          sectionId: "exodus-mar-desierto",
          title: "El Cruce del Mar Rojo",
          description: "Dios abre un camino donde no lo hay",
          scripture: "Éxodo 13:17-14:31",
          estimatedMinutes: 12,
          order: 7,
          locked: true,
          content: {
            introduction: {
              id: "intro-7",
              type: "narration",
              text: "Israel salió libre de Egipto, pero pronto enfrentaron un obstáculo imposible: el Mar Rojo delante y el ejército de Faraón detrás. Hoy veremos el milagro más espectacular del Antiguo Testamento. ¿Estás listo?",
              options: [
                {
                  id: "opt-1",
                  text: "Sí, conozco la historia",
                  response: "Excelente! Pero hoy veremos detalles profundos sobre la fe en medio del miedo.",
                },
                {
                  id: "opt-2", 
                  text: "He visto representaciones",
                  response: "Las películas muestran el espectáculo, pero hoy veremos el corazón de la historia: confiar en Dios cuando todo parece perdido.",
                },
                {
                  id: "opt-3",
                  text: "No, cuéntame",
                  response: "Perfecto! Estás a punto de ver uno de los mayores milagros de la Biblia.",
                },
              ],
            },
            teaching: [
              {
                id: "teach-1",
                type: "scripture",
                text: "Dios no los llevó por el camino directo:",
                scripture: '"Y luego que Faraón dejó ir al pueblo, Dios no los llevó por el camino de la tierra de los filisteos... para que no se arrepintiese el pueblo al ver la guerra, y volviesen a Egipto." - Éxodo 13:17',
              },
              {
                id: "teach-2",
                type: "question", 
                text: "Dios eligió el camino más largo. ¿Por qué?",
                options: [
                  {
                    id: "opt-1",
                    text: "Para proteger su fe débil",
                    response: "Exacto! Dios conoce nuestras limitaciones. A veces nos lleva por caminos más largos para protegernos de lo que no podemos manejar.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Para mostrar su gloria",
                    response: "Muy bien! El camino más difícil a menudo lleva a la mayor revelación de Dios. Él tenía un plan mayor.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Para enseñarles dependencia",
                    response: "Correcto! En el desierto, aprenderían a depender completamente de Dios, no de sus propias fuerzas.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-3",
                type: "scripture",
                text: "Pero Faraón se arrepintió de haberlos dejado ir:",
                scripture: '"Y se endureció el corazón de Faraón... y dijo: ¿Por qué hemos hecho esto de haber dejado ir a Israel, para que no nos sirva?" - Éxodo 14:5',
              },
              {
                id: "teach-4",
                type: "narration",
                text: "Faraón reunió todo su ejército: 600 carros escogidos y todos los carros de Egipto. Era la fuerza militar más poderosa del mundo persiguiendo a un grupo de esclavos recién liberados.",
              },
              {
                id: "teach-5", 
                type: "scripture",
                text: "Israel vio el peligro y tuvo miedo:",
                scripture: '"Y cuando Faraón se hubo acercado, los hijos de Israel alzaron sus ojos, y he aquí que los egipcios venían tras ellos; por lo que temieron en gran manera, y clamaron los hijos de Israel a Jehová." - Éxodo 14:10',
              },
              {
                id: "teach-6",
                type: "question",
                text: "El pueblo clamó a Jehová, pero luego se quejaron con Moisés. ¿Qué nos enseña esto?",
                options: [
                  {
                    id: "opt-1",
                    text: "La fe vacila bajo presión",
                    response: "Exacto! Es fácil creer cuando todo va bien, pero la verdadera fe se prueba en la crisis.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2", 
                    text: "Tendemos a culpar a otros",
                    response: "Muy bien! En vez de confiar en Dios, culparon a Moisés. Cuando tenemos miedo, often buscamos chivos expiatorios.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "La oración y la queja pueden coexistir",
                    response: "Interesante observación! Clamaron a Dios pero luego dudaron. Nuestra humanidad a menudo mezcla fe y miedo.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-7",
                type: "scripture", 
                text: "Moisés respondió con fe:",
                scripture: '"Y Moisés dijo al pueblo: No temáis; estad firmes, y ved la salvación que Jehová hará hoy con vosotros... Jehová peleará por vosotros, y vosotros estaréis tranquilos." - Éxodo 14:13-14',
              },
              {
                id: "teach-8",
                type: "narration",
                text: "Moisés no tenía un plan humano. Su confianza estaba completamente en Dios. 'Estad firmes' - a veces la mayor acción es la fe quieta.",
              },
              {
                id: "teach-9",
                type: "scripture",
                text: "Dios respondió:",
                scripture: '"Y Jehová dijo a Moisés: ¿Por qué clamas a mí? Di a los hijos de Israel que marchen. Y tú alza tu vara, y extiende tu mano sobre el mar, y divídelo." - Éxodo 14:15-16',
              },
              {
                id: "teach-10",
                type: "question",
                text: "Dios dijo '¿Por qué clamas a mí?' y luego 'marchen'. ¿Qué significa?",
                options: [
                  {
                    id: "opt-1", 
                    text: "La fe requiere acción",
                    response: "Exactamente! No bastaba con orar; debían actuar. La fe se demuestra en obediencia.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Dios ya había dado la solución",
                    response: "Muy bien! A veces oramos pidiendo dirección cuando Dios ya nos ha dicho qué hacer.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "La oración y la acción van juntas",
                    response: "Correcto! Oramos, pero luego obedecemos. La fe sin obras está muerta.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-11",
                type: "scripture",
                text: "El milagro sucedió:",
                scripture: '"E extendió Moisés su mano sobre el mar; e Jehová hizo que el mar se retirase por recio viento oriental toda aquella noche; y volvió el mar en seco, y las aguas quedaron divididas." - Éxodo 14:21',
              },
              {
                id: "teach-12",
                type: "narration", 
                text: "Imagina la escena: un muro de agua a cada lado, el suelo seco en medio. Todo un pueblo caminando por donde antes había mar. ¡Qué Dios tan poderoso!",
              },
              {
                id: "teach-13",
                type: "scripture",
                text: "Los egipcios los persiguieron:",
                scripture: '"Y los egipcios siguieron y entraron tras ellos... toda la caballería de Faraón, sus carros y su gente de a caballo. Y aconteció a la vigilia de la mañana, que Jehová... trastornó el ejército de los egipcios." - Éxodo 14:23-24',
              },
              {
                id: "teach-14",
                type: "scripture",
                text: "Las aguas volvieron:",
                scripture: '"Y las aguas volvieron y cubrieron los carros y la caballería, y todo el ejército de Faraón que había entrado tras ellos en el mar; no quedó de ellos ni uno." - Éxodo 14:28',
              },
              {
                id: "teach-15",
                type: "question",
                text: "Israel vio a sus opresores muertos en la orilla. ¿Qué significado tenía esto?",
                options: [
                  {
                    id: "opt-1",
                    text: "Liberación completa",
                    response: "Exacto! No solo salieron de Egipto, sino que su opresor fue destruido. Cristo nos libera completamente del pecado.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Confirmación del poder de Dios", 
                    response: "Muy bien! Vieron con sus ojos que Dios era más poderoso que el ejército más fuerte del mundo.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Fin de la esclavitud mental",
                    response: "Correcto! Ver a sus opresores muertos los liberó del miedo. A veces necesitamos ver 'muerto' lo que nos esclavizaba.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
            ],
            application: {
              id: "app-7",
              type: "reflection", 
              text: "Israel enfrentó un mar delante y enemigos detrás. ¿Qué 'mares imposibles' enfrentas tú?",
              options: [
                {
                  id: "opt-1",
                  text: "Una situación sin salida",
                  response: "Dios especializa en abrir caminos donde no los hay. Confía que Él puede hacer lo imposible.",
                },
                {
                  id: "opt-2",
                  text: "Presiones que me persiguen",
                  response: "Como Israel, a veces sentimos que los problemas nos alcanzan. Pero Dios pelea nuestras batallas.",
                },
                {
                  id: "opt-3",
                  text: "Miedo al futuro",
                  response: "El mar representaba lo desconocido. Dios nos llama a caminar por fe, no por vista.",
                },
              ],
            },
            reflection: {
              id: "refl-7",
              type: "reflection",
              text: "Dios dijo 'Jehová peleará por vosotros'. ¿En qué áreas necesitas dejar de luchar y dejar que Dios pelee por ti?",
              options: [
                {
                  id: "opt-1",
                  text: "En mis relaciones",
                  response: "A veces queremos 'arreglar' a otros. Deja que Dios obre en sus corazones mientras tú oras.",
                },
                {
                  id: "opt-2",
                  text: "En mi trabajo o estudios",
                  response: "El estrés viene cuando cargamos solos las cargas. Entrega tus preocupaciones a Dios.",
                },
                {
                  id: "opt-3", 
                  text: "En mis luchas personales",
                  response: "Las batallas más profundas a menudo requieren la fuerza de Dios, no la nuestra. Descansa en Él.",
                },
              ],
            },
          },
        },
        {
          id: "lesson-exodus-8",
          sectionId: "exodus-mar-desierto", 
          title: "El Cántico de Moisés",
          description: "La primera alabanza registrada",
          scripture: "Éxodo 15:1-21",
          estimatedMinutes: 10,
          order: 8,
          locked: true,
          content: {
            introduction: {
              id: "intro-8",
              type: "narration", 
              text: "Después del milagro del Mar Rojo, Israel no podía guardar silencio. Brotó de sus corazones el primer cántico de alabanza registrado en la Biblia. Hoy exploraremos el poder de la alabanza.",
              options: [
                {
                  id: "opt-1",
                  text: "Sé que cantaron",
                  response: "Correcto! Pero este cántico es más que música; es una declaración teológica profunda.",
                },
                {
                  id: "opt-2",
                  text: "No conozco este pasaje",
                  response: "Perfecto! Descubrirás cómo la alabanza transforma nuestra perspectiva de Dios.",
                },
                {
                  id: "opt-3", 
                  text: "Me encanta la alabanza",
                  response: "Excelente! Este cántico nos enseña qué significa alabar a Dios de verdad.",
                },
              ],
            },
            teaching: [
              {
                id: "teach-1",
                type: "scripture",
                text: "El cántico comienza con una declaración poderosa:",
                scripture: '"Entonces cantó Moisés y los hijos de Israel este cántico a Jehová, y dijeron: Cantaré yo a Jehová porque se ha magnificado grandemente; ha echado en el mar al caballo y al jinete." - Éxodo 15:1',
              },
              {
                id: "teach-2",
                type: "question",
                text: "Nota que cantaron 'porque se ha magnificado'. ¿Qué significa esto?",
                options: [
                  {
                    id: "opt-1",
                    text: "Dios mostró su grandeza",
                    response: "Exacto! La alabanza nace de ver a Dios actuar poderosamente. Cuando vemos quién es Él, no podemos evitar alabarle.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Reconocieron su pequeñez",
                    response: "Muy bien! Al ver a Dios actuar, entendieron que Él es grande y ellos pequeños. La verdadera alabanza nos humilla.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Proclamaron su fe",
                    response: "Correcto! El cántico era una declaración pública de lo que Dios había hecho. La alabanza testifica a otros.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-3",
                type: "scripture",
                text: "Declararon quién es Dios:",
                scripture: '"Mi fortaleza y mi cántico es JAH, y él me ha sido por salvación; él es mi Dios, y le prepararé alabanza; Dios de mi padre, y le enalteceré." - Éxodo 15:2',
              },
              {
                id: "teach-4",
                type: "narration",
                text: "No solo alabaron lo que Dios hizo, sino quién es Él: su fortaleza, su salvación, su Dios. La verdadera alabanza se centra en el carácter de Dios, no solo en sus acciones.",
              },
              {
                id: "teach-5",
                type: "scripture",
                text: "Proclamaron su poder único:",
                scripture: '"¿Quién como tú, oh Jehová, entre los dioses? ¿Quién como tú, magnífico en santidad, terrible en maravillosas hazañas, hacedor de prodigios?" - Éxodo 15:11',
              },
              {
                id: "teach-6",
                type: "question",
                text: "Preguntaron '¿Quién como tú?' ¿Por qué esta pregunta retórica?",
                options: [
                  {
                    id: "opt-1",
                    text: "Enfatiza la singularidad de Dios",
                    response: "Exactamente! No hay nadie como nuestro Dios. Él es incomparable en poder, santidad y amor.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Humilla a los dioses falsos",
                    response: "Muy bien! Los dioses de Egipto fueron humillados. Solo el Dios verdadero hace maravillas.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Expresa asombro y admiración",
                    response: "Correcto! Cuando vemos las obras de Dios, nos quedamos sin palabras excepto para declarar su incomparabilidad.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-7",
                type: "scripture",
                text: "Miraron hacia el futuro con fe:",
                scripture: '"Tú los introducirás y los plantarás en el monte de tu heredad... el santuario que tus manos, oh Jehová, han afirmado." - Éxodo 15:17',
              },
              {
                id: "teach-8",
                type: "narration",
                text: "Increíblemente, cantaron sobre la tierra prometida ANTES de llegar allí. La alabanza llena de fe puede 'ver' el cumplimiento de las promesas antes de que sucedan.",
              },
              {
                id: "teach-9",
                type: "scripture",
                text: "María y las mujeres se unieron:",
                scripture: '"Y María la profetisa, hermana de Aarón, tomó un pandero en su mano, y todas las mujeres salieron en pos de ella con panderos y danzas. Y María les respondía: Cantad a Jehová, porque en extremo se ha engrandecido." - Éxodo 15:20-21',
              },
              {
                id: "teach-10",
                type: "question",
                text: "La alabanza fue inclusiva: hombres, mujeres, líderes y pueblo. ¿Qué nos enseña?",
                options: [
                  {
                    id: "opt-1",
                    text: "Todos debemos alabar a Dios",
                    response: "Exacto! La alabanza no es solo para algunos; es para todo el pueblo de Dios.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "La alabanza es contagiosa",
                    response: "Muy bien! Cuando unos comienzan a alabar, otros se unen. La alabanza genuina se extiende.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Diferentes expresiones de alabanza",
                    response: "Correcto! Moisés cantó, María danzó. Dios recibe diversas formas de alabanza sincera.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
            ],
            application: {
              id: "app-8",
              type: "reflection",
              text: "Israel alabó a Dios DESPUÉS de ver su poder. ¿Puedes alabar a Dios ANTES de ver la respuesta?",
              options: [
                {
                  id: "opt-1",
                  text: "Me cuesta alabar en la dificultad",
                  response: "Es humano! Pero la alabanza por fe, antes del milagro, honra mucho a Dios. Practica alabarle por quién es Él.",
                },
                {
                  id: "opt-2",
                  text: "Sí, he aprendido a alabar en fe",
                  response: "Qué testimonio tan hermoso! La alabanza anticipada demuestra una fe madura.",
                },
                {
                  id: "opt-3",
                  text: "Quiero aprender",
                  response: "Comienza alabando a Dios por su carácter: su fidelidad, poder, amor. La alabanza cambia nuestra perspectiva.",
                },
              ],
            },
            reflection: {
              id: "refl-8",
              type: "reflection", 
              text: "El cántico declaraba 'Jehová es mi fortaleza'. ¿En qué áreas necesitas experimentar a Dios como tu fortaleza?",
              options: [
                {
                  id: "opt-1",
                  text: "En mi debilidad emocional",
                  response: "Dios se fortalece en nuestra debilidad. Su poder se perfecciona cuando reconocemos nuestra necesidad.",
                },
                {
                  id: "opt-2",
                  text: "En mis luchas diarias",
                  response: "No solo para grandes crisis; Él es nuestra fortaleza para cada día, cada momento.",
                },
                {
                  id: "opt-3",
                  text: "Para enfrentar mis temores",
                  response: "Como Israel ante el mar, nuestros temores se disipan cuando vemos la fortaleza de Dios.",
                },
              ],
            },
          },
        },
        {
          id: "lesson-exodus-9",
          sectionId: "exodus-mar-desierto",
          title: "El Maná y las Codornices",
          description: "Dios provee en el desierto", 
          scripture: "Éxodo 16:1-36",
          estimatedMinutes: 11,
          order: 9,
          locked: true,
          content: {
            introduction: {
              id: "intro-9",
              type: "narration",
              text: "La emoción del Mar Rojo pasó, y llegó la realidad del desierto: sed, hambre y cansancio. Pero Dios tenía lecciones importantes que enseñar sobre su provisión. ¿Listo para descubrirlas?",
              options: [
                {
                  id: "opt-1",
                  text: "Sé sobre el maná",
                  response: "Excelente! Pero hoy veremos principios profundos sobre cómo Dios provee y por qué.",
                },
                {
                  id: "opt-2",
                  text: "Conozco las codornices", 
                  response: "Correcto! Pero hay mucho más en esta historia que comida milagrosa.",
                },
                {
                  id: "opt-3",
                  text: "No, cuéntame",
                  response: "Perfecto! Descubrirás cómo Dios cuida de su pueblo de maneras sorprendentes.",
                },
              ],
            },
            teaching: [
              {
                id: "teach-1",
                type: "scripture",
                text: "El pueblo comenzó a quejarse:",
                scripture: '"Y partiendo de Elim, toda la congregación de los hijos de Israel llegó al desierto de Sin... y murmuraron contra Moisés y Aarón... Ojalá hubiéramos muerto por mano de Jehová en la tierra de Egipto, cuando nos sentábamos a las ollas de carne." - Éxodo 16:1-3',
              },
              {
                id: "teach-2",
                type: "question",
                text: "Murmuraron y recordaron Egipto con nostalgia. ¿Qué nos enseña esto?",
                options: [
                  {
                    id: "opt-1",
                    text: "El miedo distorsiona la memoria",
                    response: "Exacto! Recordaban 'ollas de carne' pero olvidaban los látigos y la esclavitud. El presente difícil hace que idealicemos el pasado.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "La fe se prueba en la incomodidad",
                    response: "Muy bien! Es fácil confiar cuando vemos milagros, pero la fe verdadera se muestra cuando no tenemos lo que queremos.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Tendemos a quejarnos en vez de orar",
                    response: "Correcto! En vez de clamar a Dios, murmuraron contra sus líderes. La queja divide, la oración une.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-3",
                type: "scripture",
                text: "Dios respondió con gracia:",
                scripture: '"Y Jehová dijo a Moisés: He aquí yo os haré llover pan del cielo; y el pueblo saldrá, y recogerá diariamente la porción de un día." - Éxodo 16:4',
              },
              {
                id: "teach-4",
                type: "narration",
                text: "Dios no los castigó por quejarse (aunque podía). En su misericordia, les dio exactamente lo que necesitaban: pan del cielo.",
              },
              {
                id: "teach-5",
                type: "scripture",
                text: "Dios dio instrucciones específicas:",
                scripture: '"Mas en el sexto día prepararán para guardar el doble de lo que suelen recoger cada día... Seis días lo recogeréis; mas el séptimo día es día de reposo; en él no se hallará." - Éxodo 16:5, 26',
              },
              {
                id: "teach-6",
                type: "question",
                text: "Dios les dio maná con reglas. ¿Por qué?",
                options: [
                  {
                    id: "opt-1",
                    text: "Para enseñar obediencia",
                    response: "Exactamente! La provisión venía con instrucciones. La bendición sigue a la obediencia.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Para enseñar dependencia diaria",
                    response: "Muy bien! Recoger solo para un día les enseñaba a depender de Dios cada mañana, no solo una vez.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Para prepararlos para el sábado",
                    response: "Correcto! El doble el sexto día les enseñaba a confiar que Dios proveería para el día de reposo.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-7",
                type: "scripture",
                text: "El maná apareció:",
                scripture: '"Y cuando el rocío cesó de descender, he aquí sobre la faz del desierto una cosa menuda, redonda, menuda como una escarcha sobre la tierra... Y Moisés les dijo: Es el pan que Jehová os da para comer." - Éxodo 16:14-15',
              },
              {
                id: "teach-8",
                type: "narration",
                text: "'Maná' significa '¿Qué es esto?'. Era algo completamente nuevo, que no conocían. A veces la provisión de Dios viene en formas que no reconocemos inmediatamente.",
              },
              {
                id: "teach-9",
                type: "scripture",
                text: "Algunos desobedecieron:",
                scripture: '"Pero ellos no obedecieron a Moisés, sino que algunos dejaron de ello para otro día, y crió gusanos, y hedió." - Éxodo 16:20',
              },
              {
                id: "teach-10",
                type: "question",
                text: "El maná se echaba a perder si lo guardaban. ¿Qué principio espiritual enseña?",
                options: [
                  {
                    id: "opt-1",
                    text: "La provisión de Dios es fresca cada día",
                    response: "Exacto! Como el maná, necesitamos encuentros frescos con Dios cada día. No podemos vivir de experiencias pasadas.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Dios quiere nuestra confianza diaria",
                    response: "Muy bien! Al proveer solo para un día, Dios los enseñaba a confiar en Él constantemente.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "La desobediencia arruina la bendición",
                    response: "Correcto! Cuando tomamos lo que Dios da y lo usamos a nuestra manera, se corrompe.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-11",
                type: "scripture",
                text: "Jesús se identificó con el maná:",
                scripture: '"Jesús les dijo: De cierto, de cierto os digo: No os dio Moisés el pan del cielo, mas mi Padre os da el verdadero pan del cielo. Porque el pan de Dios es aquel que descendió del cielo y da vida al mundo... Yo soy el pan de vida." - Juan 6:32-33, 35',
              },
              {
                id: "teach-12",
                type: "narration",
                text: "El maná era una sombra de Jesús, el verdadero pan del cielo. Así como el maná sustentaba físicamente, Jesús sustenta espiritualmente.",
              },
            ],
            application: {
              id: "app-9",
              type: "reflection",
              text: "Dios proveía maná fresco cada mañana. ¿Estás buscando a Dios diariamente o viviendo de experiencias pasadas?",
              options: [
                {
                  id: "opt-1",
                  text: "Necesito buscar a Dios cada día",
                  response: "Es una decisión sabia! Como el maná, la presencia de Dios debe ser buscada fresca cada mañana.",
                },
                {
                  id: "opt-2",
                  text: "A veces vivo del pasado",
                  response: "Es común! Pero Dios tiene algo nuevo para ti hoy. Abre tu Biblia y ora; Él tiene maná fresco para tu alma.",
                },
                {
                  id: "opt-3",
                  text: "Sí, busco a Dios diariamente",
                  response: "Qué bendición! Esa dependencia diaria mantiene tu relación con Dios viva y creciente.",
                },
              ],
            },
            reflection: {
              id: "refl-9",
              type: "reflection",
              text: "Jesús es el verdadero pan del cielo. ¿Estás alimentándote de Él a través de su Palabra y comunión?",
              options: [
                {
                  id: "opt-1",
                  text: "Sí, pero quiero más",
                  response: "Hermoso anhelo! Dios satisface al que tiene hambre y sed de justicia. Sigue buscándole.",
                },
                {
                  id: "opt-2",
                  text: "Necesito alimentarme más",
                  response: "Hoy es un buen día para empezar! Tiempo en la Palabra y oración es alimento para el alma.",
                },
                {
                  id: "opt-3",
                  text: "A veces me distraigo",
                  response: "Todos luchamos con distracciones. Pide a Dios hambre por Él; Él responde esa oración.",
                },
              ],
            },
          },
        },
        {
          id: "lesson-exodus-10",
          sectionId: "exodus-mar-desierto",
          title: "Agua de la Roca",
          description: "Dios satisface nuestra sed espiritual", 
          scripture: "Éxodo 17:1-7",
          estimatedMinutes: 10,
          order: 10,
          locked: true,
          content: {
            introduction: {
              id: "intro-10",
              type: "narration",
              text: "Después del hambre, llegó la sed. En un lugar sin agua, el pueblo enfrentó otra crisis. Pero Dios tenía otra lección que enseñar sobre su provisión. ¿Listo para beber de esta historia?",
              options: [
                {
                  id: "opt-1",
                  text: "Sé que Moisés golpeó la roca",
                  response: "Correcto! Pero hoy veremos el significado más profundo de este milagro.",
                },
                {
                  id: "opt-2",
                  text: "Conozco esta historia",
                  response: "Excelente! Profundizaremos en lo que esta roca representa para nosotros hoy.",
                },
                {
                  id: "opt-3",
                  text: "No, cuéntame",
                  response: "Perfecto! Esta historia tiene aplicación poderosa para nuestras vidas.",
                },
              ],
            },
            teaching: [
              {
                id: "teach-1",
                type: "scripture",
                text: "La crisis de sed:",
                scripture: '"Y no había agua para que el pueblo bebiese. Por lo que el pueblo altercó con Moisés, y dijeron: Danos agua para que bebamos." - Éxodo 17:1-2',
              },
              {
                id: "teach-2",
                type: "question",
                text: "El pueblo 'altercó' con Moisés. ¿Qué significa esto?",
                options: [
                  {
                    id: "opt-1",
                    text: "Discutieron acaloradamente",
                    response: "Exacto! La palabra implica conflicto serio. La sed los llevó a la desesperación y el conflicto.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Cuestionaron el liderazgo de Moisés",
                    response: "Muy bien! En vez de confiar en Dios, culparon a Moisés por su situación.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Probaban a Dios",
                    response: "Correcto! Más adelante dice que tentaron a Jehová. La queja constante es una forma de probar a Dios.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-3",
                type: "scripture",
                text: "Moisés clamó a Dios:",
                scripture: '"Entonces clamó Moisés a Jehová, diciendo: ¿Qué haré con este pueblo? De aquí a un poco me apedrearán." - Éxodo 17:4',
              },
              {
                id: "teach-4",
                type: "narration",
                text: "Moisés entendió la gravedad: no era solo descontento, sino rebelión potencial. En su desesperación, acudió al lugar correcto: Dios.",
              },
              {
                id: "teach-5",
                type: "scripture",
                text: "Dios dio instrucciones:",
                scripture: '"Y Jehová dijo a Moisés: Pasa delante del pueblo, y toma contigo de los ancianos de Israel; y toma también en tu mano tu vara... y hiere la peña, y saldrán de ella aguas, y beberá el pueblo." - Éxodo 17:5-6',
              },
              {
                id: "teach-6",
                type: "question",
                text: "Dios dijo 'hiere la peña'. ¿Por qué golpear la roca?",
                options: [
                  {
                    id: "opt-1",
                    text: "Representaba a Cristo herido",
                    response: "Exactamente! Pablo dice que 'aquella roca era Cristo'. El golpe representa la crucifixión.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Mostraba que la provisión requiere fe",
                    response: "Muy bien! Golpear una roca para obtener agua no tiene sentido humano. Requería obediencia por fe.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Demostraba el poder de Dios",
                    response: "Correcto! Solo Dios puede hacer brotar agua de una roca. Mostraba que Él controla toda la creación.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-7",
                type: "scripture",
                text: "El milagro sucedió:",
                scripture: '"E hizo así Moisés... y sacó de ella aguas. Entonces llamó el nombre de aquel lugar Masah y Meriba, por la rencilla de los hijos de Israel, y porque tentaron a Jehová." - Éxodo 17:6-7',
              },
              {
                id: "teach-8",
                type: "narration",
                text: "'Masah' significa 'prueba' y 'Meriba' significa 'contienda'. El lugar quedó como recordatorio de su falta de fe.",
              },
              {
                id: "teach-9",
                type: "scripture",
                text: "Pablo explica el significado:",
                scripture: '"Y todos bebieron la misma bebida espiritual; porque bebían de la roca espiritual que los seguía, y la roca era Cristo." - 1 Corintios 10:4',
              },
              {
                id: "teach-10",
                type: "question",
                text: "Pablo dice que la roca 'era Cristo'. ¿Qué significa?",
                options: [
                  {
                    id: "opt-1",
                    text: "Cristo es nuestra provisión",
                    response: "Exacto! Como el agua de la roca sustentó a Israel, Cristo sustenta nuestra vida espiritual.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Cristo fue herido por nosotros",
                    response: "Muy bien! Como la roca fue golpeada, Cristo fue 'herido por nuestras rebeliones' para darnos vida.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Cristo satisface nuestra sed",
                    response: "Correcto! Jesús dijo 'el que beba del agua que yo le daré, no tendrá sed jamás'. Él satisface completamente.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-11",
                type: "narration",
                text: "Increíblemente, Pablo dice que la roca 'los seguía'. La provisión de Dios no era estática; era móvil, acompañándolos en todo el desierto.",
              },
            ],
            application: {
              id: "app-10",
              type: "reflection",
              text: "Jesús es el agua viva. ¿De qué o de quién estás tratando de saciar tu sed espiritual?",
              options: [
                {
                  id: "opt-1",
                  text: "De logros o posesiones",
                  response: "Esas cosas nunca satisfacen completamente. Solo Jesús puede llenar el vacío en nuestro corazón.",
                },
                {
                  id: "opt-2",
                  text: "De relaciones humanas",
                  response: "Las relaciones son bendición, pero no pueden ser nuestra fuente última. Solo Cristo satisface completamente.",
                },
                {
                  id: "opt-3",
                  text: "Estoy aprendiendo a beber de Cristo",
                  response: "Qué hermoso proceso! Mientras más bebemos de Él, más descubrimos que Él es suficiente.",
                },
              ],
            },
            reflection: {
              id: "refl-10",
              type: "reflection",
              text: "La roca fue golpeada para dar vida. Cristo fue golpeado por ti. ¿Cómo respondes a este amor?",
              options: [
                {
                  id: "opt-1",
                  text: "Con gratitud y adoración",
                  response: "Hermosa respuesta! La gratitud es la respuesta apropiada a tan gran salvación.",
                },
                {
                  id: "opt-2",
                  text: "Queriendo conocerle más",
                  response: "Él se revela a los que le buscan. Sigue profundizando en relación con Él.",
                },
                {
                  id: "opt-3",
                  text: "Sirviéndole con mi vida",
                  response: "El amor genuino se demuestra en obediencia y servicio. Él merece todo lo que somos.",
                },
              ],
            },
          },
        },
        {
          id: "lesson-exodus-11",
          sectionId: "exodus-mar-desierto", 
          title: "La Batalla con Amalec",
          description: "La guerra espiritual y la intercesión",
          scripture: "Éxodo 17:8-16",
          estimatedMinutes: 10,
          order: 11,
          locked: true,
          content: {
            introduction: {
              id: "intro-11",
              type: "narration",
              text: "Justo después de experimentar la provisión milagrosa de Dios, Israel enfrentó su primer ataque militar. Hoy veremos una batalla que se ganó de una manera muy inusual. ¿Listo para la guerra?",
              options: [
                {
                  id: "opt-1",
                  text: "Sé que Aarón y Hur ayudaron",
                  response: "Correcto! Pero hoy veremos principios profundos sobre guerra espiritual e intercesión.",
                },
                {
                  id: "opt-2",
                  text: "Conozco esta batalla",
                  response: "Excelente! Profundizaremos en lo que significa levantar manos en oración.",
                },
                {
                  id: "opt-3",
                  text: "No, cuéntame", 
                  response: "Perfecto! Esta historia tiene aplicación poderosa para nuestras batallas espirituales.",
                },
              ],
            },
            teaching: [
              {
                id: "teach-1",
                type: "scripture",
                text: "El ataque sorpresa:",
                scripture: '"Entonces vino Amalec y peleó contra Israel en Refidim." - Éxodo 17:8',
              },
              {
                id: "teach-2",
                type: "question",
                text: "Amalec atacó en Refidim, justo después del milagro del agua. ¿Por qué aquí?",
                options: [
                  {
                    id: "opt-1",
                    text: "Atacaron cuando Israel estaba vulnerable",
                    response: "Exacto! Amalec sabía que Israel era un pueblo no entrenado militarmente, cansado del viaje.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Querían impedir que llegaran a Sinaí",
                    response: "Muy bien! Refidim estaba en el camino al monte de Dios. El enemigo quiere impedir nuestro encuentro con Dios.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Probaban la protección de Dios",
                    response: "Correcto! Amalec representaba la oposición a los propósitos de Dios. Esta batalla era espiritual, no solo física.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-3",
                type: "scripture",
                text: "Moisés dio instrucciones inusuales:",
                scripture: '"Y dijo Moisés a Josué: Escógenos varones, y sal a pelear contra Amalec; y yo mañana estaré sobre la cumbre del collado, y la vara de Dios en mi mano." - Éxodo 17:9',
              },
              {
                id: "teach-4",
                type: "narration",
                text: "Nota la estrategia: Josué pelea en el valle, Moisés ora en el monte. La batalla se ganaría en dos frentes: el físico y el espiritual.",
              },
              {
                id: "teach-5",
                type: "scripture",
                text: "La conexión sorprendente:",
                scripture: '"Y sucedía que cuando alzaba Moisés sus manos, Israel prevalecía; mas cuando él bajaba sus manos, prevalecía Amalec." - Éxodo 17:11',
              },
              {
                id: "teach-6",
                type: "question",
                text: "Las manos alzadas de Moisés afectaban la batalla. ¿Qué representaban?",
                options: [
                  {
                    id: "opt-1",
                    text: "Intercesión y dependencia de Dios",
                    response: "Exactamente! Las manos alzadas simbolizaban oración, rendición y dependencia total de Dios.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "La autoridad de Dios",
                    response: "Muy bien! La vara en su mano representaba el poder de Dios. La batalla era del Señor, no de ellos.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Bendición sobre el pueblo",
                    response: "Correcto! Como un sacerdote intercediendo, Moisés bendecía al pueblo con su postura de oración.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-7",
                type: "scripture",
                text: "Moisés se cansó:",
                scripture: '"Y las manos de Moisés estaban pesadas; por lo que tomaron una piedra, y la pusieron debajo de él, y se sentó sobre ella; y Aarón y Hur sostenían sus manos, el uno de un lado y el otro de otro." - Éxodo 17:12',
              },
              {
                id: "teach-8",
                type: "narration",
                text: "Moisés era humano. Se cansó. Pero Dios proveyó ayuda: Aarón (el sacerdote) y Hur (que significa 'luz' o 'nobleza') lo sostuvieron.",
              },
              {
                id: "teach-9",
                type: "scripture",
                text: "La victoria llegó:",
                scripture: '"Y Josué deshizo a Amalec y a su pueblo a filo de espada." - Éxodo 17:13',
              },
              {
                id: "teach-10",
                type: "question",
                text: "La victoria vino cuando las manos de Moisés se mantuvieron levantadas. ¿Qué nos enseña sobre la intercesión?",
                options: [
                  {
                    id: "opt-1",
                    text: "La intercesión es esencial",
                    response: "Exacto! Mientras Josué peleaba abajo, Moisés oraba arriba. Ambas eran necesarias para la victoria.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Necesitamos comunidad",
                    response: "Muy bien! Moisés no podía solo. Aarón y Hur lo sostuvieron. En la batalla espiritual, necesitamos unos a otros.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "La oración persevera",
                    response: "Correcto! No fue una oración rápida, sino sostenida. La intercesión efectiva a menudo requiere perseverancia.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-11",
                type: "scripture",
                text: "Dios declaró guerra permanente:",
                scripture: '"Y Jehová dijo a Moisés: Escribe esto para memoria en un libro, y di a Josué que raeré del todo la memoria de Amalec de debajo del cielo... Jehová tendrá guerra con Amalec de generación en generación." - Éxodo 17:14, 16',
              },
              {
                id: "teach-12",
                type: "narration",
                text: "Amalec llegó a representar el enemigo espiritual que se opone al pueblo de Dios. La batalla contra este enemigo continúa a través de las generaciones.",
              },
            ],
            application: {
              id: "app-11",
              type: "reflection",
              text: "Como Moisés, ¿estás en el 'monte' intercediendo por otros? ¿O necesitas 'Aarón y Hur' que te sostengan?",
              options: [
                {
                  id: "opt-1",
                  text: "Necesito interceder más",
                  response: "La intercesión es un ministerio poderoso. Tu oración puede cambiar batallas que otros están librando.",
                },
                {
                  id: "opt-2",
                  text: "Necesito que me sostengan",
                  response: "Es sabio reconocerlo! Busca comunidad cristiana fiel. No estamos diseñados para luchar solos.",
                },
                {
                  id: "opt-3",
                  text: "Quiero ser Aarón o Hur para alguien",
                  response: "Qué bendición ser apoyo para otros! Pide a Dios que te muestre a quién puedes sostener en oración.",
                },
              ],
            },
            reflection: {
              id: "refl-11",
              type: "reflection",
              text: "La batalla se ganó con manos alzadas en oración. ¿Qué batallas estás librando que necesitan más intercesión?",
              options: [
                {
                  id: "opt-1",
                  text: "Batallas personales",
                  response: "No subestimes el poder de tu propia oración. Clama a Dios; Él pelea por ti.",
                },
                {
                  id: "opt-2",
                  text: "Batallas familiares",
                  response: "La familia es blanco especial del enemigo. Cubre a tu familia en oración constante.",
                },
                {
                  id: "opt-3",
                  text: "Batallas por otros",
                  response: "Tu intercesión puede ser el apoyo que otros necesitan. Sé fiel en orar por los que luchan.",
                },
              ],
            },
          },
        },
        {
          id: "lesson-exodus-12",
          sectionId: "exodus-mar-desierto",
          title: "La Visita de Jetro",
          description: "Sabiduría para el liderazgo y la organización",
          scripture: "Éxodo 18:1-27", 
          estimatedMinutes: 11,
          order: 12,
          locked: true,
          content: {
            introduction: {
              id: "intro-12",
              type: "narration",
              text: "Después de las batallas y milagros, llegó un visitante inesperado: Jetro, el suegro de Moisés. Su visita traería sabiduría práctica que transformaría el liderazgo de Israel. ¿Listo para aprender administración bíblica?",
              options: [
                {
                  id: "opt-1",
                  text: "Sé que Jetro dio consejos",
                  response: "Correcto! Pero hoy veremos principios eternos sobre liderazgo sabio.",
                },
                {
                  id: "opt-2",
                  text: "Conozco esta historia",
                  response: "Excelente! Profundizaremos en cómo aplicar esta sabiduría hoy.",
                },
                {
                  id: "opt-3",
                  text: "No, cuéntame",
                  response: "Perfecto! Esta historia es sorprendentemente relevante para nosotros hoy.",
                },
              ],
            },
            teaching: [
              {
                id: "teach-1",
                type: "scripture",
                text: "Jetro llegó con la familia de Moisés:",
                scripture: '"Y oyó Jetro... todo lo que Dios había hecho con Moisés y con Israel su pueblo... Entonces Jetro... tomó a Séfora, mujer de Moisés... y a sus dos hijos." - Éxodo 18:1-3',
              },
              {
                id: "teach-2",
                type: "question",
                text: "Jetro 'oyó' lo que Dios había hecho. ¿Por qué es importante esto?",
                options: [
                  {
                    id: "opt-1",
                    text: "La fama de Dios se extendía",
                    response: "Exacto! Las noticias de los milagros de Dios llegaban lejos. Su nombre se hacía conocido.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Preparó a Jetro para creer",
                    response: "Muy bien! Al oír lo que Dios hizo, Jetro vino con fe y admiración, no con escepticismo.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Mostraba que Moisés era fiel",
                    response: "Correcto! Moisés había testificado de Dios a su familia política. Nuestro testimonio afecta a los que nos conocen.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-3",
                type: "scripture",
                text: "Jetro alabó a Dios:",
                scripture: '"Y Jetro dijo: Bendito sea Jehová, que os libró de mano de los egipcios... Ahora conozco que Jehová es más grande que todos los dioses." - Éxodo 18:10-11',
              },
              {
                id: "teach-4",
                type: "narration",
                text: "Jetro no era israelita, pero reconoció al Dios verdadero. A veces quienes están 'afuera' ven la obra de Dios más claramente que nosotros.",
              },
              {
                id: "teach-5",
                type: "scripture",
                text: "Jetro observó un problema:",
                scripture: '"Y aconteció que al día siguiente se sentó Moisés a juzgar al pueblo; y el pueblo estuvo delante de Moisés desde la mañana hasta la tarde." - Éxodo 18:13',
              },
              {
                id: "teach-6",
                type: "question",
                text: "Moisés juzgaba solo todo el día. ¿Qué problema veías en esto?",
                options: [
                  {
                    id: "opt-1",
                    text: "Ineficiencia",
                    response: "Exacto! Un hombre no puede manejar las necesidades de millones. El sistema no era sostenible.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Agotamiento del líder",
                    response: "Muy bien! Moisés se cansaba y el pueblo esperaba mucho. Liderazgo insostenible agota a todos.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Falta de desarrollo de otros",
                    response: "Correcto! Al hacerlo todo solo, Moisés impedía que otros crecieran en liderazgo.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-7",
                type: "scripture",
                text: "Jetro confrontó con sabiduría:",
                scripture: '"Y dijo el suegro de Moisés: No está bien lo que haces. Desfallecerás del todo, tú y también este pueblo... porque el trabajo es demasiado pesado para ti; no podrás hacerlo tú solo." - Éxodo 18:17-18',
              },
              {
                id: "teach-8",
                type: "narration",
                text: "Jetro fue directo pero respetuoso. La corrección sabia se da con amor y preocupación genuina.",
              },
              {
                id: "teach-9",
                type: "scripture",
                text: "Jetro dio consejo práctico:",
                scripture: '"Además, escoge tú de entre todo el pueblo varones de virtud, temerosos de Dios, varones de verdad, que aborrezcan la avaricia; y ponlos sobre el pueblo por jefes... Ellos juzgarán al pueblo." - Éxodo 18:21-22',
              },
              {
                id: "teach-10",
                type: "question",
                text: "Jetro describió las cualidades de los líderes. ¿Por qué estas específicamente?",
                options: [
                  {
                    id: "opt-1",
                    text: "Carácter sobre capacidad",
                    response: "Exactamente! Primero mencionó virtud y temor de Dios. El carácter es fundamental en el liderazgo.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Integridad esencial",
                    response: "Muy bien! 'Varones de verdad' y que 'aborrezcan la avaricia' aseguran justicia e imparcialidad.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Liderazgo multiplicado",
                    response: "Correcto! En vez de un líder sobrecarregado, muchos líderes capacitados. La multiplicación es principio divino.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-11",
                type: "scripture",
                text: "Moisés escuchó y obedeció:",
                scripture: '"Y oyó Moisés la voz de su suegro, e hizo todo lo que dijo. Y escogió Moisés varones de virtud... y los puso por jefes... y juzgaban al pueblo." - Éxodo 18:24-26',
              },
              {
                id: "teach-12",
                type: "narration",
                text: "Moisés, el gran líder, fue lo suficientemente humilde para recibir corrección y cambiar. La verdadera grandeza incluye la habilidad de aprender de otros.",
              },
              {
                id: "teach-13",
                type: "scripture",
                text: "El resultado fue excelente:",
                scripture: '"Todo asunto grave lo traían a Moisés, y ellos juzgaban todo asunto pequeño." - Éxodo 18:26',
              },
              {
                id: "teach-14",
                type: "question",
                text: "El nuevo sistema liberó a Moisés para lo más importante. ¿Qué nos enseña?",
                options: [
                  {
                    id: "opt-1",
                    text: "Delegar es sabio",
                    response: "Exacto! Moisés pudo enfocarse en lo que solo él podía hacer. La delegación efectiva multiplica el impacto.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Dios usa medios prácticos",
                    response: "Muy bien! Dios podía haber dado energía sobrenatural a Moisés, pero usó sabiduría práctica. Dios valora la sabiduría.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "La humildad trae bendición",
                    response: "Correcto! La humildad de Moisés para recibir consejo trajo bendición a todo el pueblo.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
            ],
            application: {
              id: "app-12",
              type: "reflection",
              text: "Como Moisés, ¿estás tratando de hacerlo todo solo? ¿Necesitas delegar o desarrollar a otros?",
              options: [
                {
                  id: "opt-1",
                  text: "Sí, hago demasiado solo",
                  response: "Es común! Pero el agotamiento no es la voluntad de Dios. Pídele sabiduría para delegar.",
                },
                {
                  id: "opt-2",
                  text: "Necesito desarrollar líderes",
                  response: "Qué visión tan importante! Invertir en otros multiplica tu impacto y cumple el propósito de Dios.",
                },
                {
                  id: "opt-3",
                  text: "Necesito ser más humilde para recibir consejo",
                  response: "Reconocerlo es el primer paso! Dios da gracia a los humildes. Ábrete a la corrección sabia.",
                },
              ],
            },
            reflection: {
              id: "refl-12",
              type: "reflection",
              text: "Jetro vio lo que Moisés no veía. ¿Tienes 'Jetros' en tu vida que te dan sabiduría?",
              options: [
                {
                  id: "opt-1",
                  text: "Sí, doy gracias por ellos",
                  response: "Qué bendición! Valora esas relaciones. La sabiduría viene a través de la comunidad.",
                },
                {
                  id: "opt-2",
                  text: "Necesito buscar mentores",
                  response: "Es una búsqueda sabia! Ora pidiendo que Dios traiga personas sabias a tu vida.",
                },
                {
                  id: "opt-3",
                  text: "Quiero ser Jetro para otros",
                  response: "Hermoso deseo! Pide a Dios sabiduría para ver necesidades en otros y hablar con amor.",
                },
              ],
            },
          },
        },
      ],
    },
  ],
}
