import type { LessonBook } from "./types"

export const GENESIS_LESSONS_13_18: LessonBook = {
  id: "genesis-13-18-perfected",
  religion: "christianity",
  title: "Genesis - The Patriarchs: Abraham",
  description: "From testing to covenant promises",
  icon: "⭐",
  testament: "old",
  category: "Pentateuch",
  sections: [
    {
      id: "genesis-abraham-patriline-perfected",
      bookId: "genesis",
      title: "The Patriarchs: Abraham",
      description: "Testing, covenant, and the birth of the promised son",
      order: 3,
      lessons: [
        {
          id: "lesson-genesis-13-perfected",
          sectionId: "genesis-abraham-patriline-perfected",
          title: "Abram in Egypt",
          description: "Faith put to the test",
          scripture: "Genesis 12:10-20",
          estimatedMinutes: 16,
          order: 13,
          locked: true,
          content: {
            introduction: {
              id: "intro-13-perfected",
              type: "narration",
              text: "Have you ever had a mountain-top spiritual experience followed immediately by a valley of testing? Just when you thought you had faith figured out, reality hits hard? Today we're witnessing Abram's first major test after his glorious calling. What if this failure actually reveals crucial truths about God's grace and our human weakness?",
              options: [
                {
                  id: "opt-1",
                  text: "I'm curious about Abram's failure",
                  response: "This story shows even spiritual giants stumble, and how God responds.",
                },
                {
                  id: "opt-2",
                  text: "I want to understand this difficult story",
                  response: "Perfect! This passage reveals profound truths about fear, faith, and grace.",
                },
                {
                  id: "opt-3",
                  text: "Ready to explore this test of faith!",
                  response: "Excellent! Let's discover what happens when God's chosen one fails.",
                },
              ],
            },
            teaching: [
              {
                id: "teach-1-g13-perfected",
                type: "scripture",
                text: "The test begins with a famine in the promised land:",
                scripture:
                  '"Now there was a famine in the land. So Abram went down to Egypt to sojourn there, for the famine was severe in the land." - Genesis 12:10',
              },
              {
                id: "teach-2-g13-perfected",
                type: "question",
                text: "Abram faces famine in the land God promised. Why would God allow this immediate test?",
                options: [
                  {
                    id: "opt-1",
                    text: "To deepen faith beyond initial obedience",
                    response: "Exactly! Initial faith must be tested to become mature faith.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "To reveal what's really in Abram's heart",
                    response: "Yes! Prosperity doesn't reveal character; testing does.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "To show God's faithfulness despite human failure",
                    response: "Beautiful insight! God's plans aren't derailed by our mistakes.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-3-g13-perfected",
                type: "narration",
                text: "As Abram approaches Egypt, fear overtakes faith...",
              },
              {
                id: "teach-4-g13-perfected",
                type: "scripture",
                text: "The plan born of fear:",
                scripture:
                  '"When he was about to enter Egypt, he said to Sarai his wife, "I know that you are a woman beautiful in appearance, and when the Egyptians see you, they will say, \'This is his wife,\' and they will kill me, but they will let you live. Say you are my sister, that it may go well with me because of you, and that my life may be spared for your sake."" - Genesis 12:11-13',
              },
              {
                id: "teach-5-g13-perfected",
                type: "question",
                text: "Abram's plan contains a half-truth (she was his half-sister). What's the danger in 'technical' truth?",
                options: [
                  {
                    id: "opt-1",
                    text: "It creates the appearance of truth while being deceptive",
                    response: "Exactly! Half-truths can be whole lies in practice.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It shows fear overriding integrity",
                    response: "Yes! When afraid, we rationalize compromising our values.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "It endangers others to protect self",
                    response: "He protects himself at Sarai's potential expense.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-6-g13-perfected",
                type: "narration",
                text: "Exactly what Abram feared comes true, but not as he expected...",
              },
              {
                id: "teach-7-g13-perfected",
                type: "scripture",
                text: "The plan backfires:",
                scripture:
                  '"When Abram entered Egypt, the Egyptians saw that the woman was very beautiful. And when the princes of Pharaoh saw her, they praised her to Pharaoh. And the woman was taken into Pharaoh\'s house." - Genesis 12:14-15',
              },
              {
                id: "teach-8-g13-perfected",
                type: "question",
                text: "Abram's scheme 'works' in getting him safety and wealth, but at what cost?",
                options: [
                  {
                    id: "opt-1",
                    text: "He gains wealth but loses his wife",
                    response: "Exactly! His 'success' creates his worst nightmare.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "He compromises his calling to be a blessing",
                    response: "Yes! He brings trouble rather than blessing to Egypt.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "He endangers the promised offspring",
                    response: "The Messianic line is threatened by his deception.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-9-g13-perfected",
                type: "narration",
                text: "But watch how God intervenes to protect His promise...",
              },
              {
                id: "teach-10-g13-perfected",
                type: "scripture",
                text: "God's unexpected rescue:",
                scripture:
                  '"But the LORD afflicted Pharaoh and his house with great plagues because of Sarai, Abram\'s wife." - Genesis 12:17',
              },
              {
                id: "teach-11-g13-perfected",
                type: "question",
                text: "Why does God rescue Abram when this mess is entirely his fault?",
                options: [
                  {
                    id: "opt-1",
                    text: "God remains faithful to His covenant promises",
                    response: "Exactly! God's faithfulness doesn't depend on our perfection.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "He protects the innocent party (Sarai)",
                    response: "Yes! God defends the vulnerable even when others fail them.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "He demonstrates grace that anticipates repentance",
                    response: "God often rescues us before we even realize we need saving.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-12-g13-perfected",
                type: "narration",
                text: "The confrontation reveals an embarrassing truth...",
              },
              {
                id: "teach-13-g13-perfected",
                type: "scripture",
                text: "Pharaoh's rebuke:",
                scripture:
                  '"Then Pharaoh called Abram and said, "What is this you have done to me? Why did you not tell me that she was your wife? Why did you say, \'She is my sister,\' so that I took her for my wife? Now then, here is your wife; take her, and go."" - Genesis 12:18-19',
              },
              {
                id: "teach-14-g13-perfected",
                type: "question",
                text: "A pagan king rebukes God's chosen one. What's the irony here?",
                options: [
                  {
                    id: "opt-1",
                    text: "The unbeliever acts more righteously than the believer",
                    response: "Exactly! Sometimes God uses outsiders to convict His people.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Abram's witness is destroyed by his deception",
                    response: "Yes! He can't be a blessing when living in fear and deceit.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "God's reputation suffers through His representative's failure",
                    response: "Our failures can misrepresent God's character to others.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-preview-13-perfected",
                type: "narration",
                text: "PATTERN OF GRACE: This won't be Abram's last failure, nor God's last rescue. The entire biblical story is one of faithful God and faithless people. This pattern finds its ultimate resolution in Jesus - the perfectly faithful one who rescues us from our perpetual failures!",
              },
            ],
            application: {
              id: "app-13-perfected",
              type: "reflection",
              text: "If God blessed Abram with wealth even after his failure in Egypt, does this mean God rewards faithlessness? How do we reconcile God's grace with the real consequences of our choices?",
            },
            reflection: {
              id: "refl-13-perfected",
              type: "reflection",
              text: "Where are you tempted to use 'half-truths' or clever schemes to get out of difficult situations rather than trusting God's protection and provision?",
            },
          },
        },
        {
          id: "lesson-genesis-14-perfected",
          sectionId: "genesis-abraham-patriline-perfected",
          title: "Abram and Lot",
          description: "Separation and choices",
          scripture: "Genesis 13:1-18",
          estimatedMinutes: 16,
          order: 14,
          locked: true,
          content: {
            introduction: {
              id: "intro-14-perfected",
              type: "narration",
              text: "Have you ever had to make a decision where every option seemed good, but you knew the choice would define your future? Today we're witnessing a family conflict that becomes a character-defining moment. What if how we handle conflict reveals more about our faith than our creeds?",
              options: [
                {
                  id: "opt-1",
                  text: "I'm curious about this family conflict",
                  response: "This story reveals profound wisdom for handling relationships and resources.",
                },
                {
                  id: "opt-2",
                  text: "I want to understand Abram's generosity",
                  response: "Perfect! This passage shows faith in action through radical generosity.",
                },
                {
                  id: "opt-3",
                  text: "Ready to explore this defining moment!",
                  response: "Excellent! Let's discover how faith transforms how we handle conflict.",
                },
              ],
            },
            teaching: [
              {
                id: "teach-1-g14-perfected",
                type: "scripture",
                text: "The situation develops from material blessing:",
                scripture:
                  '"Now Abram was very rich in livestock, in silver, and in gold... And Lot, who went with Abram, also had flocks and herds and tents, so that the land could not support both of them dwelling together." - Genesis 13:2, 5-6',
              },
              {
                id: "teach-2-g14-perfected",
                type: "question",
                text: "God's blessing creates practical problems. Why would God allow abundance to cause conflict?",
                options: [
                  {
                    id: "opt-1",
                    text: "Blessings test character as much as hardships do",
                    response: "Exactly! Prosperity often reveals our hearts more than poverty.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "God uses conflict to direct His purposes",
                    response: "Yes! This tension will lead to necessary separation.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "It forces growth and decision-making",
                    response: "Comfortable situations don't require faith or wisdom.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-3-g14-perfected",
                type: "narration",
                text: "The conflict escalates to the point where something must change...",
              },
              {
                id: "teach-4-g14-perfected",
                type: "scripture",
                text: "The relational strain:",
                scripture:
                  "\"And there was strife between the herdsmen of Abram's livestock and the herdsmen of Lot's livestock.\" - Genesis 13:7",
              },
              {
                id: "teach-5-g14-perfected",
                type: "question",
                text: "Notice the conflict is between their employees, not Abram and Lot directly. Why does this matter?",
                options: [
                  {
                    id: "opt-1",
                    text: "Leaders are responsible for their people's conflicts",
                    response: "Exactly! Wise leaders address issues before they escalate.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It shows how competition damages relationships",
                    response: "Yes! Scarcity mindset turns allies into competitors.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "It demonstrates the ripple effect of our choices",
                    response: "Our decisions affect everyone under our influence.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-6-g14-perfected",
                type: "narration",
                text: "Abram, as the elder and wealthier party, has the right to choose first. But watch what he does...",
              },
              {
                id: "teach-7-g14-perfected",
                type: "scripture",
                text: "Abram's radical offer:",
                scripture:
                  '"Then Abram said to Lot, "Let there be no strife between you and me... Is not the whole land before you? Separate yourself from me. If you take the left hand, then I will go to the right, or if you take the right hand, then I will go to the left." - Genesis 13:8-9',
              },
              {
                id: "teach-8-g14-perfected",
                type: "question",
                text: "Abram gives the choice to Lot. What does this reveal about his character?",
                options: [
                  {
                    id: "opt-1",
                    text: "He values relationship over advantage",
                    response: "Exactly! Peace is more important than getting the best deal.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "He trusts God rather than his own judgment",
                    response: "Yes! He believes God can bless him anywhere.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "He demonstrates spiritual maturity",
                    response: "The elder serves the younger, reversing cultural expectations.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-9-g14-perfected",
                type: "narration",
                text: "Lot makes his choice based on what he can see...",
              },
              {
                id: "teach-10-g14-perfected",
                type: "scripture",
                text: "Lot's worldly wisdom:",
                scripture:
                  '"And Lot lifted up his eyes and saw that the Jordan Valley was well watered everywhere like the garden of the LORD... So Lot chose for himself all the Jordan Valley." - Genesis 13:10-11',
              },
              {
                id: "teach-11-g14-perfected",
                type: "question",
                text: "Lot's choice seems smart economically. What's the potential spiritual danger?",
                options: [
                  {
                    id: "opt-1",
                    text: "He moves toward Sodom, known for wickedness",
                    response: "Exactly! Prosperity draws him toward spiritual compromise.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "He chooses based on appearance not principle",
                    response: "Yes! What looks good isn't always what is good.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "He prioritizes provision over presence",
                    response: "He chooses the watered valley over staying with God's chosen.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-12-g14-perfected",
                type: "narration",
                text: "After Lot departs, God speaks to Abram again...",
              },
              {
                id: "teach-13-g14-perfected",
                type: "scripture",
                text: "God's reaffirmed promise:",
                scripture:
                  '"The LORD said to Abram, after Lot had separated from him, "Lift up your eyes and look... all the land that you see I will give to you and to your offspring forever." - Genesis 13:14-15',
              },
              {
                id: "teach-14-g14-perfected",
                type: "question",
                text: "Why does God wait until after Lot leaves to reaffirm the promise?",
                options: [
                  {
                    id: "opt-1",
                    text: "Abram needed to empty his hands to receive God's gift",
                    response: "Exactly! We must release what we're clutching to receive God's best.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "God rewards faith-driven generosity",
                    response: "Yes! When we trust God with our rights, He entrusts us with more.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "It confirms Abram made the right choice",
                    response: "God's blessing validates wisdom and selflessness.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-15-g14-perfected",
                type: "narration",
                text: "Abram responds with worship, just as he did when he first arrived...",
              },
              {
                id: "teach-16-g14-perfected",
                type: "scripture",
                text: "Abram's worship:",
                scripture:
                  '"So Abram moved his tent and came and settled by the oaks of Mamre, which are at Hebron, and there he built an altar to the LORD." - Genesis 13:18',
              },
              {
                id: "teach-17-g14-perfected",
                type: "question",
                text: "Why does Abram build another altar? What pattern is developing?",
                options: [
                  {
                    id: "opt-1",
                    text: "Worship is his default response to God's faithfulness",
                    response: "Exactly! Every encounter with God leads to worship.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "He's claiming the land for Yahweh through worship",
                    response: "Yes! Altars establish God's presence in new territories.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "It maintains his spiritual focus amid material blessing",
                    response: "Worship keeps prosperity from corrupting his heart.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-preview-14-perfected",
                type: "narration",
                text: "WISDOM CONFIRMED: Lot's 'smart choice' will soon prove disastrous when Sodom is attacked. Abram's 'foolish generosity' will be rewarded with divine protection and blessing. The way of faith often looks foolish in the moment but proves wise in eternity!",
              },
            ],
            application: {
              id: "app-14-perfected",
              type: "reflection",
              text: "If God blessed Abram's generous choice, does this mean Christians should always let others have the better option? How do we balance wisdom with generosity in practical decisions?",
            },
            reflection: {
              id: "refl-14-perfected",
              type: "reflection",
              text: "Where is God calling you to choose generosity over advantage, trust over control, or relationship over being right in your current conflicts or decisions?",
            },
          },
        },
        {
          id: "lesson-genesis-15-perfected",
          sectionId: "genesis-abraham-patriline-perfected",
          title: "Abram Rescues Lot",
          description: "Courage and faith",
          scripture: "Genesis 14:1-24",
          estimatedMinutes: 17,
          order: 15,
          locked: true,
          content: {
            introduction: {
              id: "intro-15-perfected",
              type: "narration",
              text: "Have you ever had to rescue someone from a mess they created by their own poor choices? The urge to say 'I told you so' battles with compassion? Today we're witnessing Abram's radical intervention for Lot - a powerful story of courage, faith, and unexpected spiritual encounters. What if this rescue mission reveals the heart of true redemption?",
              options: [
                {
                  id: "opt-1",
                  text: "I'm curious about this battle story",
                  response: "This narrative shows faith in action through courage and wisdom.",
                },
                {
                  id: "opt-2",
                  text: "I want to understand Melchizedek",
                  response: "Perfect! This mysterious priest-king is one of Scripture's most fascinating figures.",
                },
                {
                  id: "opt-3",
                  text: "Ready to explore this rescue mission!",
                  response: "Excellent! Let's discover how faith operates in practical warfare.",
                },
              ],
            },
            teaching: [
              {
                id: "teach-1-g15-perfected",
                type: "scripture",
                text: "The story begins with regional warfare:",
                scripture:
                  '"In the days of Amraphel king of Shinar... they made war... against the kings of Sodom, Gomorrah, Admah, Zeboiim, and Bela." - Genesis 14:1-2',
              },
              {
                id: "teach-2-g15-perfected",
                type: "question",
                text: "Why include these detailed names and places? What significance do they have?",
                options: [
                  {
                    id: "opt-1",
                    text: "It establishes the historical reality of the events",
                    response: "Exactly! This isn't myth but actual history with real places.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It shows God at work in world events",
                    response: "Yes! God uses pagan kings and battles to accomplish His purposes.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "It sets the stage for Lot's capture",
                    response: "The political situation creates the crisis requiring rescue.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-3-g15-perfected",
                type: "narration",
                text: "The battle goes badly for Sodom and its allies...",
              },
              {
                id: "teach-4-g15-perfected",
                type: "scripture",
                text: "Lot's capture:",
                scripture:
                  '"They also took Lot, the son of Abram\'s brother, who was dwelling in Sodom, and his possessions, and went away." - Genesis 14:12',
              },
              {
                id: "teach-5-g15-perfected",
                type: "question",
                text: "Lot chose to live in Sodom for its prosperity. Now he loses everything. What spiritual principle is at work?",
                options: [
                  {
                    id: "opt-1",
                    text: "Choices have consequences, even for believers",
                    response: "Exactly! God's grace doesn't remove the natural consequences of poor decisions.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Worldly security is ultimately unreliable",
                    response: "Yes! What the world offers can be taken in a moment.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "God uses crises to rescue us from worse fates",
                    response: "Sometimes being captured is better than continuing in compromise.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-6-g15-perfected",
                type: "narration",
                text: "News reaches Abram, who responds immediately...",
              },
              {
                id: "teach-7-g15-perfected",
                type: "scripture",
                text: "Abram's military response:",
                scripture:
                  '"When Abram heard that his kinsman had been taken captive, he led forth his trained men, born in his house, 318 of them, and went in pursuit as far as Dan." - Genesis 14:14',
              },
              {
                id: "teach-8-g15-perfected",
                type: "question",
                text: "318 trained men suggests significant household. What does this reveal about Abram?",
                options: [
                  {
                    id: "opt-1",
                    text: "He was a powerful chieftain, not just a nomad",
                    response: "Exactly! God's blessing included military and economic strength.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "He prepared for challenges while trusting God",
                    response: "Yes! Faith doesn't mean lack of preparation or skill.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "He took responsibility for family despite their choices",
                    response: "Love intervenes even when problems are self-inflicted.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-9-g15-perfected",
                type: "narration",
                text: "Abram achieves a stunning military victory against overwhelming odds...",
              },
              {
                id: "teach-10-g15-perfected",
                type: "scripture",
                text: "The victory and recovery:",
                scripture:
                  '"And he divided his forces against them by night, he and his servants, and defeated them and pursued them... Then he brought back all the possessions, and also brought back his kinsman Lot with his possessions, and the women and the people." - Genesis 14:15-16',
              },
              {
                id: "teach-11-g15-perfected",
                type: "question",
                text: "Abram defeats four kings with a small militia. What made this victory possible?",
                options: [
                  {
                    id: "opt-1",
                    text: "God's supernatural assistance in the battle",
                    response: "Exactly! The victory demonstrates divine empowerment.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Strategic wisdom combined with courage",
                    response: "Yes! Night attack shows military savvy, not just brute force.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Righteous cause strengthening his men",
                    response: "Rescuing family inspires greater courage than conquest.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-12-g15-perfected",
                type: "narration",
                text: "On his return, Abram has two very different encounters...",
              },
              {
                id: "teach-13-g15-perfected",
                type: "scripture",
                text: "The king of Sodom's offer:",
                scripture:
                  '"And the king of Sodom said to Abram, "Give me the persons, but take the goods for yourself." - Genesis 14:21',
              },
              {
                id: "teach-14-g15-perfected",
                type: "question",
                text: "Why would Abram refuse this generous offer? What's the danger in accepting?",
                options: [
                  {
                    id: "opt-1",
                    text: "It could make him indebted to a wicked king",
                    response: "Exactly! Acceptance might imply alliance with Sodom.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It could allow Sodom to claim credit for his wealth",
                    response: "Yes! 'Abram enriched by Sodom' could misrepresent God's blessing.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "It might compromise his testimony",
                    response: "His witness depends on clear separation from evil.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-15-g15-perfected",
                type: "narration",
                text: "But between the battle and this offer comes a mysterious encounter...",
              },
              {
                id: "teach-16-g15-perfected",
                type: "scripture",
                text: "Melchizedek's blessing:",
                scripture:
                  '"And Melchizedek king of Salem brought out bread and wine. (He was priest of God Most High.) And he blessed him and said, "Blessed be Abram by God Most High, Possessor of heaven and earth." - Genesis 14:18-19',
              },
              {
                id: "teach-17-g15-perfected",
                type: "question",
                text: "Who is this mysterious priest-king who blesses Abram?",
                options: [
                  {
                    id: "opt-1",
                    text: "A pre-incarnation appearance of Christ",
                    response: "Some early church fathers saw him as a Christophany.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "A Canaanite priest who worshiped the true God",
                    response: "Yes! God had witnesses outside Abraham's family line.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "A type of Christ as perfect priest-king",
                    response: "Hebrews 7 develops this theological significance.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-18-g15-perfected",
                type: "narration",
                text: "Abram's response to Melchizedek reveals his spiritual priorities...",
              },
              {
                id: "teach-19-g15-perfected",
                type: "scripture",
                text: "Abram's tithe:",
                scripture: '"And Abram gave him a tenth of everything." - Genesis 14:20',
              },
              {
                id: "teach-20-g15-perfected",
                type: "question",
                text: "Why tithe to Melchizedek? What does this act signify?",
                options: [
                  {
                    id: "opt-1",
                    text: "He acknowledges God's ownership of the spoils",
                    response: "Exactly! The tithe recognizes God as the true source of victory.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "He submits to Melchizedek's priestly authority",
                    response: "Yes! He honors God's representative and his blessing.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "It establishes the principle of firstfruits",
                    response: "God deserves the first and best, not the leftovers.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-21-g15-perfected",
                type: "narration",
                text: "Abram's final declaration makes his allegiance clear...",
              },
              {
                id: "teach-22-g15-perfected",
                type: "scripture",
                text: "Abram's testimony:",
                scripture:
                  '"But Abram said to the king of Sodom, "I have lifted my hand to the LORD, God Most High, Possessor of heaven and earth, that I would not take a thread or a sandal strap or anything that is yours, lest you should say, \'I have made Abram rich.\'" - Genesis 14:22-23',
              },
              {
                id: "teach-23-g15-perfected",
                type: "question",
                text: "Why such absolute refusal? What principle is Abram protecting?",
                options: [
                  {
                    id: "opt-1",
                    text: "God alone gets credit for blessing His people",
                    response: "Exactly! No confusion about the source of Abram's prosperity.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Complete separation from wicked associations",
                    response: "Yes! Even small compromises can lead to big consequences.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "The testimony to God's faithfulness",
                    response: "His life preaches that Yahweh alone provides.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-preview-15-perfected",
                type: "narration",
                text: "MELCHIZEDEK'S SIGNIFICANCE: This mysterious figure becomes incredibly important! Psalm 110 and Hebrews 7 present Jesus as a priest forever in the order of Melchizedek - superior to the Levitical priesthood. Abram's encounter establishes a priesthood that finds its ultimate fulfillment in Christ!",
              },
            ],
            application: {
              id: "app-15-perfected",
              type: "reflection",
              text: "If Abram refused wealth gained through righteous victory to protect his testimony, how should Christians today think about wealth, success, and maintaining a clear witness to God's provision?",
            },
            reflection: {
              id: "refl-15-perfected",
              type: "reflection",
              text: "Where might God be calling you to refuse 'good things' that could compromise your testimony or confuse people about who truly provides and blesses in your life?",
            },
          },
        },
        {
          id: "lesson-genesis-16-perfected",
          sectionId: "genesis-abraham-patriline-perfected",
          title: "The Covenant with Abram",
          description: "God's promises",
          scripture: "Genesis 15:1-21",
          estimatedMinutes: 18,
          order: 16,
          locked: true,
          content: {
            introduction: {
              id: "intro-16-perfected",
              type: "narration",
              text: "Have you ever waited so long for a promise that you started wondering if you heard correctly? When the silence feels louder than the original words? Today we're witnessing one of the most intimate encounters in Scripture - where God meets Abram in his doubt and makes an unbreakable covenant. What if this moment reveals how God responds to our deepest questions of 'how' and 'when'?",
              options: [
                {
                  id: "opt-1",
                  text: "I'm curious about this covenant",
                  response: "This is the foundational covenant that shapes all of redemption history.",
                },
                {
                  id: "opt-2",
                  text: "I want to understand God's response to doubt",
                  response: "Perfect! This passage shows God's patience with human questioning.",
                },
                {
                  id: "opt-3",
                  text: "Ready to explore this divine encounter!",
                  response: "Excellent! Let's witness how God confirms His promises.",
                },
              ],
            },
            teaching: [
              {
                id: "teach-1-g16-perfected",
                type: "scripture",
                text: "The chapter opens with God addressing Abram's fear:",
                scripture:
                  '"After these things the word of the LORD came to Abram in a vision: "Fear not, Abram, I am your shield; your reward shall be very great."" - Genesis 15:1',
              },
              {
                id: "teach-2-g16-perfected",
                type: "question",
                text: "Why would Abram be afraid after his great victory? What might he fear?",
                options: [
                  {
                    id: "opt-1",
                    text: "Retaliation from the defeated kings",
                    response: "Exactly! Military victory can create fear of future attacks.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "The spiritual implications of his encounters",
                    response: "Yes! Meeting Melchizedek and refusing Sodom's wealth was spiritually weighty.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "The ongoing delay of God's promise",
                    response: "Sometimes after spiritual highs, doubt and fear creep in.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-3-g16-perfected",
                type: "narration",
                text: "Abram responds with raw honesty about his deepest disappointment...",
              },
              {
                id: "teach-4-g16-perfected",
                type: "scripture",
                text: "Abram's honest question:",
                scripture:
                  '"But Abram said, "O Lord GOD, what will you give me, for I continue childless, and the heir of my house is Eliezer of Damascus?"" - Genesis 15:2',
              },
              {
                id: "teach-5-g16-perfected",
                type: "question",
                text: "Abram focuses on what he DOESN'T have rather than what God just promised. Why is this so human?",
                options: [
                  {
                    id: "opt-1",
                    text: "Unfulfilled promises can overshadow present blessings",
                    response: "Exactly! The one thing missing dominates our perspective.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "He's proposing a human solution to God's promise",
                    response: "Yes! Eliezer represents settling for second best.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Honest doubt is better than pretended faith",
                    response: "God welcomes our real questions more than fake certainty.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-6-g16-perfected",
                type: "narration",
                text: "God responds not with rebuke but with greater specificity...",
              },
              {
                id: "teach-7-g16-perfected",
                type: "scripture",
                text: "God's specific promise:",
                scripture:
                  '"And behold, the word of the LORD came to him: "This man shall not be your heir; your very own son shall be your heir." And he brought him outside and said, "Look toward heaven, and number the stars, if you are able to number them." Then he said to him, "So shall your offspring be."" - Genesis 15:4-5',
              },
              {
                id: "teach-8-g16-perfected",
                type: "question",
                text: "Why take Abram outside to look at stars? What's significant about this visual aid?",
                options: [
                  {
                    id: "opt-1",
                    text: "It makes an abstract promise concrete and visible",
                    response: "Exactly! Faith needs tangible reminders of invisible promises.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It connects Abram's offspring to God's cosmic purposes",
                    response: "Yes! This isn't just about family but about God's kingdom.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "It demonstrates God's creative power",
                    response: "The God who made stars can certainly give a son.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-9-g16-perfected",
                type: "narration",
                text: "Then comes one of the most important verses about faith in all Scripture...",
              },
              {
                id: "teach-10-g16-perfected",
                type: "scripture",
                text: "Abram's response of faith:",
                scripture: '"And he believed the LORD, and he counted it to him as righteousness." - Genesis 15:6',
              },
              {
                id: "teach-11-g16-perfected",
                type: "question",
                text: "What does it mean that belief was 'counted as righteousness'?",
                options: [
                  {
                    id: "opt-1",
                    text: "Right standing with God comes through faith, not works",
                    response: "Exactly! This becomes the foundation of justification by faith.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "God accepts our trust as righteous when we rely on Him",
                    response: "Yes! Faith is the currency of righteousness in God's economy.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "It establishes the pattern for all salvation",
                    response: "Paul will later use this verse to explain how anyone is saved.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-12-g16-perfected",
                type: "narration",
                text: "But Abram still has practical questions about HOW this will happen...",
              },
              {
                id: "teach-13-g16-perfected",
                type: "scripture",
                text: "Abram's second question:",
                scripture: '"But he said, "O Lord GOD, how am I to know that I shall possess it?"" - Genesis 15:8',
              },
              {
                id: "teach-14-g16-perfected",
                type: "question",
                text: "Is this question doubt or seeking confirmation? What's the difference?",
                options: [
                  {
                    id: "opt-1",
                    text: "Doubt questions God's ability, faith seeks God's method",
                    response: "Exactly! Abram believes God CAN, he wants to know HOW.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Genuine faith asks honest questions",
                    response: "Yes! God isn't threatened by our requests for clarity.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "He's moving from general promise to specific implementation",
                    response: "Faith needs to understand how God's promises work in reality.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-15-g16-perfected",
                type: "narration",
                text: "God responds with a dramatic covenant ceremony...",
              },
              {
                id: "teach-16-g16-perfected",
                type: "scripture",
                text: "The covenant ritual:",
                scripture:
                  '"And he said to him, "Bring me a heifer three years old, a female goat three years old, a ram three years old, a turtledove, and a young pigeon." He brought him all these, cut them in half, and laid each half over against the other." - Genesis 15:9-10',
              },
              {
                id: "teach-17-g16-perfected",
                type: "question",
                text: "This was a standard ancient covenant ritual. What did it signify?",
                options: [
                  {
                    id: "opt-1",
                    text: "The parties would walk between pieces, invoking self-curse",
                    response: "Exactly! 'May what happened to these animals happen to me if I break this covenant.'",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It represented total commitment",
                    response: "Yes! Covenants were serious, life-and-death agreements.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "It established binding legal relationships",
                    response: "This was the most solemn way to make promises in that culture.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-18-g16-perfected",
                type: "narration",
                text: "But then something extraordinary happens in the ceremony...",
              },
              {
                id: "teach-19-g16-perfected",
                type: "scripture",
                text: "God's unilateral covenant:",
                scripture:
                  '"When the sun had gone down and it was dark, behold, a smoking fire pot and a flaming torch passed between these pieces. On that day the LORD made a covenant with Abram." - Genesis 15:17-18',
              },
              {
                id: "teach-20-g16-perfected",
                type: "question",
                text: "Only God passes through the pieces. What does this mean?",
                options: [
                  {
                    id: "opt-1",
                    text: "God alone bears the covenant consequences",
                    response: "Exactly! He takes full responsibility for fulfilling the covenant.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It's a covenant of grace, not mutual obligation",
                    response: "Yes! God binds Himself to bless regardless of human performance.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "It points to Christ bearing our curse",
                    response: "Jesus would later bear the curse of covenant-breaking for us.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-21-g16-perfected",
                type: "narration",
                text: "God also reveals the difficult path to the promise...",
              },
              {
                id: "teach-22-g16-perfected",
                type: "scripture",
                text: "The prophecy of suffering:",
                scripture:
                  '"Then the LORD said to Abram, "Know for certain that your offspring will be sojourners in a land that is not theirs and will be servants there, and they will be afflicted for four hundred years."" - Genesis 15:13',
              },
              {
                id: "teach-23-g16-perfected",
                type: "question",
                text: "Why reveal the suffering ahead? Wouldn't this discourage Abram?",
                options: [
                  {
                    id: "opt-1",
                    text: "It prepares him for the long journey of faith",
                    response: "Exactly! Real faith understands there will be suffering.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It shows God's sovereignty over future difficulties",
                    response: "Yes! Even the hard times are part of God's plan.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "It includes the promise of ultimate deliverance",
                    response: "The suffering has purpose and definite end point.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-preview-16-perfected",
                type: "narration",
                text: "COVENANT FULFILLMENT: This unconditional covenant becomes the foundation for all God's dealings with Israel and ultimately finds its fulfillment in Christ. Galatians 3 will explain that Christ became the curse for us, fulfilling what God alone passed through in this ceremony!",
              },
            ],
            application: {
              id: "app-16-perfected",
              type: "reflection",
              text: "If God made an unconditional covenant with Abram that depended entirely on God's faithfulness, how does this shape our understanding of salvation? Are we saved by our ability to keep promises or God's?",
            },
            reflection: {
              id: "refl-16-perfected",
              type: "reflection",
              text: "Where is God calling you to trust His promises even when you don't see the 'how' or 'when'? How can you cultivate the kind of faith that God counts as righteousness?",
            },
          },
        },
        {
          id: "lesson-genesis-17-perfected",
          sectionId: "genesis-abraham-patriline-perfected",
          title: "The Birth of Ishmael",
          description: "Trying to help God",
          scripture: "Genesis 16:1-16",
          estimatedMinutes: 16,
          order: 17,
          locked: true,
          content: {
            introduction: {
              id: "intro-17-perfected",
              type: "narration",
              text: "Have you ever waited so long for God to act that you decided to 'help Him out'? What starts as good intentions becomes a mess you never anticipated? Today we're witnessing the tragic results of trying to fulfill God's promises through human ingenuity. What if this story reveals why God's timing is as important as His promises?",
              options: [
                {
                  id: "opt-1",
                  text: "I'm curious about the Ishmael story",
                  response: "This passage shows the painful consequences of impatience with God's timing.",
                },
                {
                  id: "opt-2",
                  text: "I want to understand Sarai's perspective",
                  response: "Perfect! This story gives us insight into the human struggle with waiting.",
                },
                {
                  id: "opt-3",
                  text: "Ready to explore this human solution!",
                  response: "Excellent! Let's discover why God's ways are better than our solutions.",
                },
              ],
            },
            teaching: [
              {
                id: "teach-1-g17-perfected",
                type: "scripture",
                text: "The chapter opens with the painful reality of waiting:",
                scripture:
                  '"Now Sarai, Abram\'s wife, had borne him no children. She had a female Egyptian servant whose name was Hagar." - Genesis 16:1',
              },
              {
                id: "teach-2-g17-perfected",
                type: "question",
                text: "Ten years have passed since God's promise. Why does God wait so long?",
                options: [
                  {
                    id: "opt-1",
                    text: "To eliminate any possibility of human explanation",
                    response: "Exactly! When it's humanly impossible, God gets all the glory.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "To develop character and dependence in Abram",
                    response: "Yes! Waiting purifies motives and deepens faith.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "To work all things according to His perfect timing",
                    response: "God's clock is different from ours, but always perfect.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-3-g17-perfected",
                type: "narration",
                text: "Sarai proposes a solution that was culturally acceptable but spiritually disastrous...",
              },
              {
                id: "teach-4-g17-perfected",
                type: "scripture",
                text: "Sarai's proposal:",
                scripture:
                  '"And Sarai said to Abram, "Behold now, the LORD has prevented me from bearing children. Go in to my servant; it may be that I shall obtain children by her." And Abram listened to the voice of Sarai." - Genesis 16:2',
              },
              {
                id: "teach-5-g17-perfected",
                type: "question",
                text: "This was legal in their culture. Why was it still wrong?",
                options: [
                  {
                    id: "opt-1",
                    text: "It sought God's ends through human means",
                    response: "Exactly! Good goals don't justify wrong methods.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It showed lack of trust in God's timing",
                    response: "Yes! Impatience often leads to compromise.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "It treated Hagar as a means to an end",
                    response: "People should never be used as instruments for our plans.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-6-g17-perfected",
                type: "narration",
                text: "The plan 'works' biologically but fails relationally...",
              },
              {
                id: "teach-7-g17-perfected",
                type: "scripture",
                text: "The immediate consequences:",
                scripture:
                  '"And he went in to Hagar, and she conceived. And when she saw that she had conceived, she looked with contempt on her mistress." - Genesis 16:4',
              },
              {
                id: "teach-8-g17-perfected",
                type: "question",
                text: "Why would Hagar despise Sarai? What dynamics does this create?",
                options: [
                  {
                    id: "opt-1",
                    text: "Pregnancy gave Hagar status Sarai lacked",
                    response: "Exactly! In that culture, childbearing elevated a woman's position.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It created competition instead of solution",
                    response: "Yes! Human solutions often create new problems.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "It demonstrated the folly of the arrangement",
                    response: "Using people as instruments dehumanizes everyone involved.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-9-g17-perfected",
                type: "narration",
                text: "Sarai responds with blame rather than taking responsibility...",
              },
              {
                id: "teach-10-g17-perfected",
                type: "scripture",
                text: "Sarai's blame game:",
                scripture:
                  '"And Sarai said to Abram, "May the wrong done to me be on you! I gave my servant to your embrace, and when she saw that she had conceived, she looked on me with contempt. May the LORD judge between you and me!"" - Genesis 16:5',
              },
              {
                id: "teach-11-g17-perfected",
                type: "question",
                text: "Sarai blames Abram for following her plan. What does this reveal?",
                options: [
                  {
                    id: "opt-1",
                    text: "We often blame others for consequences we helped create",
                    response: "Exactly! Taking responsibility is harder than assigning blame.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Sin damages relationships and creates division",
                    response: "Yes! What was meant to help now creates hostility.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "She invokes God's judgment on her own scheme",
                    response: "The irony of asking God to judge what she proposed.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-12-g17-perfected",
                type: "narration",
                text: "Abram's response compounds the problem...",
              },
              {
                id: "teach-13-g17-perfected",
                type: "scripture",
                text: "Abram's abdication:",
                scripture:
                  '"But Abram said to Sarai, "Behold, your servant is in your power; do to her as you please." Then Sarai dealt harshly with her, and she fled from her." - Genesis 16:6',
              },
              {
                id: "teach-14-g17-perfected",
                type: "question",
                text: "Abram avoids conflict rather than leading rightly. What's the cost?",
                options: [
                  {
                    id: "opt-1",
                    text: "He enables abuse rather than providing protection",
                    response: "Exactly! Leadership requires confronting hard situations.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "He fails both women as spiritual head",
                    response: "Yes! Passive leadership creates victims and perpetrators.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "He compounds one sin with another",
                    response: "The original sin now produces injustice and cruelty.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-15-g17-perfected",
                type: "narration",
                text: "But God meets Hagar in her desperate flight...",
              },
              {
                id: "teach-16-g17-perfected",
                type: "scripture",
                text: "God finds Hagar:",
                scripture:
                  '"The angel of the LORD found her by a spring of water in the wilderness, the spring on the way to Shur." - Genesis 16:7',
              },
              {
                id: "teach-17-g17-perfected",
                type: "question",
                text: "Why does God seek out an Egyptian slave girl? What does this reveal?",
                options: [
                  {
                    id: "opt-1",
                    text: "God cares for the marginalized and oppressed",
                    response: "Exactly! No one is insignificant to God.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "He sees our suffering even when others don't",
                    response: "Yes! God notices those the world overlooks.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "He has purposes for Ishmael too",
                    response: "Even our mistakes become part of God's larger story.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-18-g17-perfected",
                type: "narration",
                text: "God gives Hagar promises about her son...",
              },
              {
                id: "teach-19-g17-perfected",
                type: "scripture",
                text: "Ishmael's prophecy:",
                scripture:
                  '"And the angel of the LORD said to her, "Behold, you are pregnant and shall bear a son. You shall call his name Ishmael, because the LORD has listened to your affliction. He shall be a wild donkey of a man, his hand against everyone and everyone\'s hand against him, and he shall dwell over against all his kinsmen."" - Genesis 16:11-12',
              },
              {
                id: "teach-20-g17-perfected",
                type: "question",
                text: "Ishmael means 'God hears.' What's significant about this name?",
                options: [
                  {
                    id: "opt-1",
                    text: "It memorializes God's care in her suffering",
                    response: "Exactly! The name becomes a testimony of divine compassion.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It shows God's faithfulness despite human failure",
                    response: "Yes! God works through messy situations.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "It acknowledges the complexity of the situation",
                    response: "Blessing and difficulty will characterize Ishmael's life.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-21-g17-perfected",
                type: "narration",
                text: "Hagar responds with the first name given to God in Scripture...",
              },
              {
                id: "teach-22-g17-perfected",
                type: "scripture",
                text: "Hagar's testimony:",
                scripture:
                  '"So she called the name of the LORD who spoke to her, "You are a God of seeing," for she said, "Truly here I have seen him who looks after me."" - Genesis 16:13',
              },
              {
                id: "teach-23-g17-perfected",
                type: "question",
                text: "Why is 'God who sees' so significant coming from Hagar?",
                options: [
                  {
                    id: "opt-1",
                    text: "It expresses her experience of God's personal care",
                    response: "Exactly! Theology becomes personal encounter.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It reveals God's character to the oppressed",
                    response: "Yes! The God who sees is hope for the invisible.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "It demonstrates God's self-revelation to outsiders",
                    response: "An Egyptian slave girl contributes to our understanding of God.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-preview-17-perfected",
                type: "narration",
                text: "ISHMAEL'S LEGACY: This moment creates consequences that echo through history. The Arab peoples trace their lineage to Ishmael, and the conflict between Isaac and Ishmael's descendants continues to this day. One moment of impatience creates generational consequences - a sobering lesson about the importance of waiting on God's timing!",
              },
            ],
            application: {
              id: "app-17-perfected",
              type: "reflection",
              text: "If God blessed Ishmael and used this messy situation for good, does this mean God approves of our sinful shortcuts? How do we reconcile God's sovereignty with human responsibility?",
            },
            reflection: {
              id: "refl-17-perfected",
              type: "reflection",
              text: "Where are you tempted to 'help God out' rather than wait for His timing? What areas of your life require patient trust instead of anxious action?",
            },
          },
        },
        {
          id: "lesson-genesis-18-perfected",
          sectionId: "genesis-abraham-patriline-perfected",
          title: "Circumcision and the Promise",
          description: "Sign of the covenant",
          scripture: "Genesis 17:1-27",
          estimatedMinutes: 17,
          order: 18,
          locked: true,
          content: {
            introduction: {
              id: "intro-18-perfected",
              type: "narration",
              text: "Have you ever made such a significant commitment that you created a permanent reminder? A mark that said 'I belong to this person or purpose forever'? Today we're witnessing God establishing circumcision as the sign of His eternal covenant. What if this ancient practice reveals profound truths about identity, belonging, and the cost of covenant relationship?",
              options: [
                {
                  id: "opt-1",
                  text: "I'm curious about circumcision's meaning",
                  response: "This sign carries deep theological significance about covenant identity.",
                },
                {
                  id: "opt-2",
                  text: "I want to understand the name changes",
                  response: "Perfect! The names Abraham and Sarah reveal God's transformative power.",
                },
                {
                  id: "opt-3",
                  text: "Ready to explore this covenant sign!",
                  response: "Excellent! Let's discover what it means to be marked as God's people.",
                },
              ],
            },
            teaching: [
              {
                id: "teach-1-g18-perfected",
                type: "scripture",
                text: "God appears to Abram after 13 years of silence:",
                scripture:
                  '"When Abram was ninety-nine years old the LORD appeared to Abram and said to him, "I am God Almighty; walk before me, and be blameless." - Genesis 17:1',
              },
              {
                id: "teach-2-g18-perfected",
                type: "question",
                text: "Why break 13 years of silence now? And why start with 'God Almighty'?",
                options: [
                  {
                    id: "opt-1",
                    text: "The time for fulfillment is approaching",
                    response: "Exactly! God's silence doesn't mean His absence.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "El Shaddai emphasizes God's power to fulfill",
                    response: "Yes! The All-Sufficient One can do what He promises.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "It calls for renewed commitment after failure",
                    response: "After the Ishmael detour, God reestablishes the relationship.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-3-g18-perfected",
                type: "narration",
                text: "God begins by changing Abram's identity...",
              },
              {
                id: "teach-4-g18-perfected",
                type: "scripture",
                text: "The name change:",
                scripture:
                  '"No longer shall your name be called Abram, but your name shall be Abraham, for I have made you the father of a multitude of nations." - Genesis 17:5',
              },
              {
                id: "teach-5-g18-perfected",
                type: "question",
                text: "Abram means 'exalted father' but Abraham means 'father of multitudes.' Why change it?",
                options: [
                  {
                    id: "opt-1",
                    text: "The new name reflects God's promise, not current reality",
                    response: "Exactly! God calls things that are not as though they are.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It establishes his new covenant identity",
                    response: "Yes! Names represent identity and destiny in Scripture.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "It's an act of sovereign grace and calling",
                    response: "God gives us identities we don't naturally possess.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-6-g18-perfected",
                type: "narration",
                text: "God also changes Sarai's name, elevating her role...",
              },
              {
                id: "teach-7-g18-perfected",
                type: "scripture",
                text: "Sarai becomes Sarah:",
                scripture:
                  '"And God said to Abraham, "As for Sarai your wife, you shall not call her name Sarai, but Sarah shall be her name. I will bless her, and moreover, I will give you a son by her." - Genesis 17:15-16',
              },
              {
                id: "teach-8-g18-perfected",
                type: "question",
                text: "Both names mean 'princess,' but the change is significant. Why?",
                options: [
                  {
                    id: "opt-1",
                    text: "It establishes her as covenant partner, not bystander",
                    response: "Exactly! She's integral to God's promise, not peripheral.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It reaffirms her dignity after the Hagar incident",
                    response: "Yes! God restores what was damaged by human failure.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "It confirms her as mother of nations",
                    response: "The promise comes through her specifically, not just any woman.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-9-g18-perfected",
                type: "narration",
                text: "Abraham's response reveals his continued struggle to believe...",
              },
              {
                id: "teach-10-g18-perfected",
                type: "scripture",
                text: "Abraham's laughter:",
                scripture:
                  '"Then Abraham fell on his face and laughed and said to himself, "Shall a child be born to a man who is a hundred years old? Shall Sarah, who is ninety years old, bear a child?"" - Genesis 17:17',
              },
              {
                id: "teach-11-g18-perfected",
                type: "question",
                text: "Is Abraham's laughter doubt or overwhelmed joy? How can we tell?",
                options: [
                  {
                    id: "opt-1",
                    text: "It seems like amazed disbelief at God's audacity",
                    response: "Exactly! The promise now seems even more impossible.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "He's grappling with the physical reality",
                    response: "Yes! Faith wrestles with real-world limitations.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "He suggests Ishmael as God's plan B",
                    response: "He still doesn't fully grasp God's specific promise through Sarah.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-12-g18-perfected",
                type: "narration",
                text: "God insists on His specific promise and establishes the covenant sign...",
              },
              {
                id: "teach-13-g18-perfected",
                type: "scripture",
                text: "The covenant sign:",
                scripture:
                  '"This is my covenant, which you shall keep, between me and you and your offspring after you: Every male among you shall be circumcised." - Genesis 17:10',
              },
              {
                id: "teach-14-g18-perfected",
                type: "question",
                text: "Why choose circumcision as the sign? What does it represent?",
                options: [
                  {
                    id: "opt-1",
                    text: "It signifies cutting away fleshly dependence",
                    response: "Exactly! The flesh must be cut away for God's promise to flourish.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It marks the organ of reproduction",
                    response: "Yes! The promise involves offspring, so the sign relates to reproduction.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "It's a permanent, intimate identity marker",
                    response: "Not visible to others, but always reminding the bearer.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-15-g18-perfected",
                type: "narration",
                text: "The requirement extends to all Abraham's household...",
              },
              {
                id: "teach-16-g18-perfected",
                type: "scripture",
                text: "Universal application:",
                scripture:
                  '"He who is eight days old among you shall be circumcised. Every male throughout your generations, whether born in your house or bought with your money from any foreigner... So shall my covenant be in your flesh an everlasting covenant." - Genesis 17:12-13',
              },
              {
                id: "teach-17-g18-perfected",
                type: "question",
                text: "Why include slaves and foreigners? What does this communicate?",
                options: [
                  {
                    id: "opt-1",
                    text: "Covenant membership isn't based on ethnicity alone",
                    response: "Exactly! Household inclusion shows the broad scope of God's grace.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It creates a visible covenant community",
                    response: "Yes! The sign marks who belongs to God's people.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "It demonstrates Abraham's leadership responsibility",
                    response: "He must ensure everyone in his sphere bears the sign.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-18-g18-perfected",
                type: "narration",
                text: "Abraham immediately obeys, demonstrating his faith...",
              },
              {
                id: "teach-19-g18-perfected",
                type: "scripture",
                text: "Immediate obedience:",
                scripture:
                  '"Then Abraham took Ishmael his son and all those born in his house or bought with his money, every male among the men of Abraham\'s house, and he circumcised the flesh of their foreskins that very day, as God had said to him." - Genesis 17:23',
              },
              {
                id: "teach-20-g18-perfected",
                type: "question",
                text: "Why emphasize 'that very day'? What's significant about immediate obedience?",
                options: [
                  {
                    id: "opt-1",
                    text: "Delayed obedience is disobedience",
                    response: "Exactly! True faith acts promptly on God's word.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It demonstrates full acceptance of God's terms",
                    response: "Yes! No negotiation or hesitation with God's commands.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "It shows leadership by example",
                    response: "Abraham doesn't ask others to do what he won't do himself.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-21-g18-perfected",
                type: "narration",
                text: "At 99 years old, Abraham embraces the sign himself...",
              },
              {
                id: "teach-22-g18-perfected",
                type: "scripture",
                text: "Abraham's personal commitment:",
                scripture:
                  '"Abraham was ninety-nine years old when he was circumcised in the flesh of his foreskin." - Genesis 17:24',
              },
              {
                id: "teach-23-g18-perfected",
                type: "question",
                text: "Why mention Abraham's age? What does this highlight?",
                options: [
                  {
                    id: "opt-1",
                    text: "The costliness of obedience at his age",
                    response: "Exactly! This was a significant physical risk for an old man.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "His personal participation in the covenant",
                    response: "Yes! He doesn't exempt himself from the requirement.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "The faith required to believe future promises",
                    response: "At 99, he embraces a sign about offspring he doesn't yet have.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-preview-18-perfected",
                type: "narration",
                text: "CIRCUMCISION FULFILLED: This physical sign points toward a greater spiritual reality! Deuteronomy will call for 'circumcision of the heart,' and Paul will explain that true circumcision is spiritual, not physical. Ultimately, Christ accomplishes what circumcision symbolized - cutting away our sinful nature and giving us new hearts through faith!",
              },
            ],
            application: {
              id: "app-18-perfected",
              type: "reflection",
              text: "If physical circumcision is no longer required for Christians (Acts 15), what is the equivalent 'sign of the covenant' for New Testament believers? How do we visibly demonstrate our covenant relationship with God today?",
            },
            reflection: {
              id: "refl-18-perfected",
              type: "reflection",
              text: "What 'flesh' needs to be cut away in your life for God's promises to flourish? Where is God calling you to immediate obedience, even when it's costly or doesn't make sense from a human perspective?",
            },
          },
        },
      ],
    },
  ],
}
