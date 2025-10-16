import type { LessonBook } from "./types"

export const GENESIS_LESSONS_7_12: LessonBook = {
  id: "genesis-7-12",
  religion: "christianity",
  title: "Genesis - New Beginnings",
  description: "From the Flood to Abraham's Call",
  icon: "🕊️",
  testament: "old",
  category: "Pentateuch",
  sections: [
    {
      id: "genesis-new-beginnings",
      bookId: "genesis",
      title: "New Beginnings After the Flood",
      description: "God's fresh start for humanity",
      order: 2,
      lessons: [
        {
          id: "lesson-genesis-7",
          sectionId: "genesis-new-beginnings",
          title: "The Covenant with Noah",
          description: "God's promises and new beginnings",
          scripture: "Genesis 9:1-17",
          estimatedMinutes: 14,
          order: 7,
          locked: true,
          content: {
            introduction: {
              id: "intro-7",
              type: "narration",
              text: "Have you ever made a promise so significant it changed everything? Today we're witnessing God making the first covenant with all humanity - a promise that shapes how we understand His character and our place in creation. What if this ancient promise still speaks to our deepest needs for security today?",
              options: [
                {
                  id: "opt-1",
                  text: "I'm ready to explore God's promises",
                  response:
                    "Excellent! This covenant reveals foundational truths about God's relationship with creation.",
                },
                {
                  id: "opt-2",
                  text: "I want to understand the rainbow's meaning",
                  response: "Perfect! We'll discover the profound significance behind this beautiful symbol.",
                },
                {
                  id: "opt-3",
                  text: "Let's see what happens after the flood",
                  response: "Wonderful! This is where humanity gets a fresh start with God.",
                },
              ],
            },
            teaching: [
              {
                id: "teach-1-g7",
                type: "scripture",
                text: "God establishes His covenant with all creation:",
                scripture:
                  '"I establish my covenant with you, that never again shall all flesh be cut off by the waters of the flood, and never again shall there be a flood to destroy the earth." - Genesis 9:11',
              },
              {
                id: "teach-2-g7",
                type: "question",
                text: "Why would God make a covenant with all creation, including animals? What does this reveal about His character?",
                options: [
                  {
                    id: "opt-1",
                    text: "God cares for all His creation, not just humans",
                    response: "Exactly! This shows God's comprehensive care for everything He made.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It demonstrates God's commitment to preservation",
                    response: "Yes! Despite human sin, God promises to sustain the world He made.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "It shows creation has intrinsic value to God",
                    response: "Beautiful insight! The covenant includes animals because they matter to their Creator.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-3-g7",
                type: "narration",
                text: "But this covenant comes with renewed responsibilities...",
              },
              {
                id: "teach-4-g7",
                type: "scripture",
                text: "Humanity's role is reaffirmed:",
                scripture:
                  '"And God blessed Noah and his sons and said to them, "Be fruitful and multiply and fill the earth. The fear of you and the dread of you shall be upon every beast of the earth and upon every bird of the heavens..."" - Genesis 9:1-2',
              },
              {
                id: "teach-5-g7",
                type: "question",
                text: "God repeats the creation mandate but adds 'fear and dread' of humans. Why this change after the flood?",
                options: [
                  {
                    id: "opt-1",
                    text: "It reflects the broken relationship with creation",
                    response: "Exactly! The harmony of Eden is replaced by fear due to sin's effects.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It establishes human authority more clearly",
                    response: "Yes! While maintaining stewardship, God clarifies humanity's governing role.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "It shows creation's response to fallen humanity",
                    response: "Important insight! The creation itself responds differently to sinful humans.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-6-g7",
                type: "narration",
                text: "Now comes one of the most significant developments in human governance...",
              },
              {
                id: "teach-7-g7",
                type: "scripture",
                text: "The foundation of human justice:",
                scripture:
                  '"Whoever sheds the blood of man, by man shall his blood be shed, for God made man in his own image." - Genesis 9:6',
              },
              {
                id: "teach-8-g7",
                type: "question",
                text: "Why is capital punishment instituted here? What makes human life uniquely valuable?",
                options: [
                  {
                    id: "opt-1",
                    text: "Human life is sacred because we bear God's image",
                    response: "Exactly! The ultimate basis for human value is our creation in God's likeness.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It establishes the principle of proportional justice",
                    response: "Yes! The punishment corresponds to the crime's severity.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "It delegates justice to human authorities",
                    response: "Important insight! God establishes human government to administer justice.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-9-g7",
                type: "narration",
                text: "Finally, God gives a visible sign of His promise...",
              },
              {
                id: "teach-10-g7",
                type: "scripture",
                text: "The rainbow covenant:",
                scripture:
                  '"I have set my bow in the cloud, and it shall be a sign of the covenant between me and the earth." - Genesis 9:13',
              },
              {
                id: "teach-11-g7",
                type: "question",
                text: "A 'bow' in the cloud - this word means war bow. Why use a weapon as a sign of peace?",
                options: [
                  {
                    id: "opt-1",
                    text: "It symbolizes God laying down His weapon of judgment",
                    response: "Exactly! The war bow is pointed away from earth, toward heaven.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It shows God's mercy triumphs over judgment",
                    response: "Yes! The instrument of war becomes the symbol of peace.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "It reminds us of the seriousness of covenant",
                    response: "Beautiful insight! Even in mercy, we remember the holiness that requires judgment.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-preview-7",
                type: "narration",
                text: "COVENANT PATTERN BEGINNING: This is the first of several covenants God will make throughout Scripture. Pay attention to how each builds on the previous ones, all pointing toward the new covenant in Christ that will fulfill them all!",
              },
            ],
            application: {
              id: "app-7",
              type: "reflection",
              text: "If God promised never to destroy the earth again, why do we still experience natural disasters and suffering? Does this mean God broke His promise?",
            },
            reflection: {
              id: "refl-7",
              type: "reflection",
              text: "The rainbow reminds us of God's faithfulness even when we see storm clouds. How has God demonstrated His faithfulness to you in difficult circumstances?",
            },
          },
        },
        {
          id: "lesson-genesis-8",
          sectionId: "genesis-new-beginnings",
          title: "Noah and His Sons",
          description: "Blessing and curse in the new world",
          scripture: "Genesis 9:18-29",
          estimatedMinutes: 13,
          order: 8,
          locked: true,
          content: {
            introduction: {
              id: "intro-8",
              type: "narration",
              text: "Have you ever seen a single moment undo years of good reputation? Today we encounter the sobering reality that even after great faithfulness, one misstep can have generational consequences. What if this story teaches us about both grace and the sober reality of our choices?",
              options: [
                {
                  id: "opt-1",
                  text: "I'm curious about what happens to Noah",
                  response: "This is a crucial transition in the biblical narrative.",
                },
                {
                  id: "opt-2",
                  text: "I want to understand the curse on Canaan",
                  response: "We'll explore this challenging passage with care and wisdom.",
                },
                {
                  id: "opt-3",
                  text: "Ready to explore this difficult story",
                  response: "Important! These challenging texts teach us deep truths about God and humanity.",
                },
              ],
            },
            teaching: [
              {
                id: "teach-1-g8",
                type: "scripture",
                text: "The story begins with Noah's new beginning in farming:",
                scripture:
                  '"Noah began to be a man of the soil, and he planted a vineyard. He drank of the wine and became drunk and lay uncovered in his tent." - Genesis 9:20-21',
              },
              {
                id: "teach-2-g8",
                type: "question",
                text: "After being called 'righteous' and walking with God, how could Noah fall into drunkenness? What does this teach us about spiritual leadership?",
                options: [
                  {
                    id: "opt-1",
                    text: "Even the most faithful are vulnerable to sin",
                    response: "Exactly! Spiritual maturity doesn't make us immune to temptation.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "New freedoms require new wisdom",
                    response: "Yes! The new creation brought new possibilities for both good and evil.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Leadership doesn't eliminate human weakness",
                    response:
                      "Important insight! Great faithfulness in the past doesn't guarantee perfection in the future.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-3-g8",
                type: "narration",
                text: "The situation becomes more complicated when Ham discovers his father...",
              },
              {
                id: "teach-4-g8",
                type: "scripture",
                text: "The different responses of Noah's sons:",
                scripture:
                  '"And Ham, the father of Canaan, saw the nakedness of his father and told his two brothers outside. Then Shem and Japheth took a garment... and covered the nakedness of their father. Their faces were turned backward, and they did not see their father\'s nakedness." - Genesis 9:22-23',
              },
              {
                id: "teach-5-g8",
                type: "question",
                text: "What was the essential difference between Ham's response and his brothers'?",
                options: [
                  {
                    id: "opt-1",
                    text: "Honor vs dishonor toward their father",
                    response: "Exactly! Shem and Japheth protected their father's dignity; Ham exposed his shame.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Covering vs uncovering shame",
                    response: "Yes! One response healed and protected; the other amplified the problem.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Discretion vs indiscretion",
                    response: "Important insight! Wisdom knows when to speak and when to cover in love.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-6-g8",
                type: "narration",
                text: "When Noah awakens, his response will shape generations...",
              },
              {
                id: "teach-7-g8",
                type: "scripture",
                text: "Noah's prophetic words:",
                scripture:
                  '"Cursed be Canaan; a servant of servants shall he be to his brothers." And he said, "Blessed be the LORD, the God of Shem; and let Canaan be his servant. May God enlarge Japheth, and let him dwell in the tents of Shem, and let Canaan be his servant." - Genesis 9:25-27',
              },
              {
                id: "teach-8-g8",
                type: "question",
                text: "Why curse Canaan when Ham was the one who sinned? How do we understand this intergenerational consequence?",
                options: [
                  {
                    id: "opt-1",
                    text: "It reflects the pattern of sin affecting families",
                    response: "Yes! Parental choices often have consequences for children.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It may prophesy future historical developments",
                    response: "Exactly! This anticipates the Canaanites' future subjugation.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "It shows the seriousness of dishonoring parents",
                    response: "Important insight! The fifth commandment later reinforces this principle.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-preview-8",
                type: "narration",
                text: "PATRIARCHAL BLESSINGS EMERGING: This pattern of fathers blessing (and cursing) their children will become significant throughout Genesis. Watch how these spoken words shape family destinies and God's unfolding plan!",
              },
            ],
            application: {
              id: "app-8",
              type: "reflection",
              text: "If Noah - who walked with God and was called righteous - could fall so dramatically, what does this mean for our own spiritual security? Can we ever be 'safe' from moral failure?",
            },
            reflection: {
              id: "refl-8",
              type: "reflection",
              text: "Like Shem and Japheth, we often encounter others' failures and shame. How can you practice covering others' weaknesses while still pursuing truth and righteousness?",
            },
          },
        },
        {
          id: "lesson-genesis-9",
          sectionId: "genesis-new-beginnings",
          title: "The Table of Nations",
          description: "God's scattering and human diversity",
          scripture: "Genesis 10:1-32",
          estimatedMinutes: 12,
          order: 9,
          locked: true,
          content: {
            introduction: {
              id: "intro-9",
              type: "narration",
              text: "Have you ever looked at a world map and wondered how we got so many different peoples and cultures? Today we're exploring the biblical explanation for human diversity - not as an accident, but as part of God's intentional plan. What if our differences tell a story about both human rebellion and divine wisdom?",
              options: [
                {
                  id: "opt-1",
                  text: "I'm curious about the origins of nations",
                  response: "This chapter provides the biblical foundation for understanding human diversity.",
                },
                {
                  id: "opt-2",
                  text: "I want to understand this genealogy",
                  response: "These names trace the repopulation of the earth after the flood.",
                },
                {
                  id: "opt-3",
                  text: "Ready to explore our shared origins",
                  response: "Wonderful! This reminds us of our common humanity before God.",
                },
              ],
            },
            teaching: [
              {
                id: "teach-1-g9",
                type: "scripture",
                text: "The chapter begins by tracing Noah's descendants:",
                scripture:
                  '"These are the generations of the sons of Noah, Shem, Ham, and Japheth. Sons were born to them after the flood." - Genesis 10:1',
              },
              {
                id: "teach-2-g9",
                type: "question",
                text: "Why include this detailed list of names and nations? What purpose does it serve in God's story?",
                options: [
                  {
                    id: "opt-1",
                    text: "It shows God fulfilling the creation mandate",
                    response: "Exactly! 'Be fruitful and multiply' is being fulfilled through these families.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It establishes the historical context for future events",
                    response: "Yes! These nations will reappear throughout biblical history.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "It demonstrates God's sovereignty over nations",
                    response: "Beautiful insight! God oversees the spread and development of peoples.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-3-g9",
                type: "narration",
                text: "Notice the different emphasis in each genealogical line...",
              },
              {
                id: "teach-4-g9",
                type: "scripture",
                text: "The line of Ham includes significant founders:",
                scripture:
                  '"Cush fathered Nimrod; he was the first on earth to be a mighty man. He was a mighty hunter before the LORD... The beginning of his kingdom was Babel, Erech, Accad, and Calneh, in the land of Shinar." - Genesis 10:8-10',
              },
              {
                id: "teach-5-g9",
                type: "question",
                text: "Nimrod is described as a 'mighty hunter before the LORD.' What might this phrase suggest about his character?",
                options: [
                  {
                    id: "opt-1",
                    text: "It may indicate opposition to God's authority",
                    response:
                      "Yes! 'Before the LORD' can imply defiance, like Cain went out 'from the LORD's presence.'",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "He was powerful but not necessarily righteous",
                    response: "Exactly! Great ability doesn't always mean godly character.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "It sets up the Babel story that follows",
                    response: "Important insight! Nimrod's kingdom leads directly to the tower rebellion.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-6-g9",
                type: "narration",
                text: "The genealogy culminates with a statement that sets the stage for what's coming...",
              },
              {
                id: "teach-7-g9",
                type: "scripture",
                text: "The summary statement:",
                scripture:
                  '"These are the clans of the sons of Noah, according to their genealogies, in their nations, and from these the nations spread abroad on the earth after the flood." - Genesis 10:32',
              },
              {
                id: "teach-8-g9",
                type: "question",
                text: "The nations 'spread abroad' - this sounds positive, but the next chapter shows forced scattering. How do we reconcile these?",
                options: [
                  {
                    id: "opt-1",
                    text: "God's plan vs human resistance",
                    response: "Exactly! God wanted them to spread; they refused until He forced it.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Voluntary obedience vs forced consequence",
                    response: "Yes! They could have obeyed willingly or through judgment.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Two different perspectives on the same event",
                    response: "Chapter 10 shows the result; chapter 11 shows how it happened.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-preview-9",
                type: "narration",
                text: "MISSIONAL PATTERN DEVELOPING: This scattering, though judgment, becomes the means God uses to fill the earth. Later, the Great Commission will reverse Babel as people from every nation are gathered into Christ's kingdom!",
              },
            ],
            application: {
              id: "app-9",
              type: "reflection",
              text: "If all nations came from Noah's family, what does this teach us about racial and ethnic diversity? Does the Bible support the idea of superior and inferior races?",
            },
            reflection: {
              id: "refl-9",
              type: "reflection",
              text: "Human diversity stems from God's design and human choices. How can you celebrate and honor the God-given diversity in your community while recognizing our shared humanity?",
            },
          },
        },
        {
          id: "lesson-genesis-10",
          sectionId: "genesis-new-beginnings",
          title: "The Tower of Babel",
          description: "Human pride and divine intervention",
          scripture: "Genesis 11:1-9",
          estimatedMinutes: 14,
          order: 10,
          locked: true,
          content: {
            introduction: {
              id: "intro-10",
              type: "narration",
              text: "Have you ever been part of a project that started with great unity but ended in confusion? Today we're witnessing humanity's first united effort after the flood - a project born from fear that leads to fragmentation. What if this ancient story reveals patterns we still see in our own attempts at security without God?",
              options: [
                {
                  id: "opt-1",
                  text: "I'm ready to explore the Babel story",
                  response: "This is one of the most significant stories for understanding human civilization.",
                },
                {
                  id: "opt-2",
                  text: "I want to understand why God confused languages",
                  response: "We'll discover the profound wisdom behind what might seem like harsh judgment.",
                },
                {
                  id: "opt-3",
                  text: "Let's see how pride leads to fall",
                  response: "Perfect! This story powerfully illustrates the danger of human autonomy.",
                },
              ],
            },
            teaching: [
              {
                id: "teach-1-g10",
                type: "scripture",
                text: "The story begins with unity and ambition:",
                scripture:
                  '"And the whole earth had one language and the same words... Then they said, "Come, let us build ourselves a city and a tower with its top in the heavens, and let us make a name for ourselves, lest we be dispersed over the face of the whole earth." - Genesis 11:1, 4',
              },
              {
                id: "teach-2-g10",
                type: "question",
                text: "What was fundamentally wrong with wanting to 'make a name for ourselves' and avoid being 'dispersed'?",
                options: [
                  {
                    id: "opt-1",
                    text: "It directly opposed God's command to fill the earth",
                    response: "Exactly! They were resisting God's creation mandate.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It sought security in human achievement rather than God",
                    response: "Yes! The tower was a monument to human self-sufficiency.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "It attempted to reach heaven by human effort",
                    response: "Important insight! This prefigures all human attempts at self-salvation.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-3-g10",
                type: "narration",
                text: "God's response reveals His perspective on their project...",
              },
              {
                id: "teach-4-g10",
                type: "scripture",
                text: "God's assessment and action:",
                scripture:
                  '"And the LORD said, "Behold, they are one people, and they have all one language, and this is only the beginning of what they will do. And nothing that they propose to do will now be impossible for them. Come, let us go down and there confuse their language..." - Genesis 11:6-7',
              },
              {
                id: "teach-5-g10",
                type: "question",
                text: "Why would God see unified human potential as a problem? Isn't unity good?",
                options: [
                  {
                    id: "opt-1",
                    text: "Unity in rebellion is dangerous",
                    response: "Exactly! United human ability without godly direction leads to destruction.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "God limits the effects of sin",
                    response: "Yes! Confusion was merciful prevention of greater evil.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "It preserved human freedom within limits",
                    response: "Beautiful insight! God allowed creativity but prevented total self-destruction.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-6-g10",
                type: "narration",
                text: "The judgment achieves exactly what they feared...",
              },
              {
                id: "teach-7-g10",
                type: "scripture",
                text: "The scattering accomplished:",
                scripture:
                  '"So the LORD dispersed them from there over the face of all the earth, and they left off building the city. Therefore its name was called Babel, because there the LORD confused the language of all the earth." - Genesis 11:8-9',
              },
              {
                id: "teach-8-g10",
                type: "question",
                text: "The name 'Babel' sounds like the Hebrew word for 'confuse.' What's ironic about this judgment?",
                options: [
                  {
                    id: "opt-1",
                    text: "They got what they wanted but in a different way",
                    response: "Exactly! They made a 'name' for themselves - as the place of confusion.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Their fear of scattering became their reality",
                    response: "Yes! What they resisted through sin became their judgment.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Human pride led to human limitation",
                    response: "Important insight! The attempt to be like God resulted in greater limitation.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-preview-10",
                type: "narration",
                text: "PENTECOST FORESHADOWED: This judgment of confused languages will be dramatically reversed at Pentecost when the Holy Spirit enables people from every nation to hear God's truth in their own languages! The curse of Babel begins to be undone in Christ.",
              },
            ],
            application: {
              id: "app-10",
              type: "reflection",
              text: "If God judged human unity at Babel, why does the Bible later emphasize Christian unity? What's the difference between godly unity and the unity at Babel?",
            },
            reflection: {
              id: "refl-10",
              type: "reflection",
              text: "Like the Babel builders, we often seek security in human achievements and institutions. Where are you tempted to build 'towers' of self-sufficiency rather than trusting God's provision and timing?",
            },
          },
        },
        {
          id: "lesson-genesis-11",
          sectionId: "genesis-new-beginnings",
          title: "From Shem to Abram",
          description: "Preparing for the patriarch",
          scripture: "Genesis 11:10-32",
          estimatedMinutes: 12,
          order: 11,
          locked: true,
          content: {
            introduction: {
              id: "intro-11",
              type: "narration",
              text: "Have you ever traced your family history and discovered how your story connects to larger historical events? Today we're following a single family line through ten generations - a lineage that carries the weight of God's redemptive plan. What if these seemingly ordinary names actually point toward the most extraordinary intervention in human history?",
              options: [
                {
                  id: "opt-1",
                  text: "I'm curious about this genealogy",
                  response: "This lineage connects the flood to Abraham and God's covenant.",
                },
                {
                  id: "opt-2",
                  text: "I want to understand Abraham's background",
                  response: "Perfect! This sets the stage for God's call to Abraham.",
                },
                {
                  id: "opt-3",
                  text: "Ready to follow the chosen line",
                  response: "Wonderful! We're tracing God's faithfulness through generations.",
                },
              ],
            },
            teaching: [
              {
                id: "teach-1-g11",
                type: "scripture",
                text: "The genealogy begins with Shem after the flood:",
                scripture:
                  '"These are the generations of Shem. When Shem was 100 years old, he fathered Arpachshad two years after the flood." - Genesis 11:10',
              },
              {
                id: "teach-2-g11",
                type: "question",
                text: "Why does this genealogy matter? What's significant about tracing this specific family line?",
                options: [
                  {
                    id: "opt-1",
                    text: "It preserves the Messianic line",
                    response: "Exactly! This is the lineage through which the promised Savior will come.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It shows God's faithfulness across generations",
                    response: "Yes! God preserves the line despite human failure and judgment.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "It connects creation to redemption",
                    response: "Beautiful insight! This bridge carries God's plan from Noah to Abraham to Christ.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-3-g11",
                type: "narration",
                text: "Notice the decreasing lifespans as we move through the generations...",
              },
              {
                id: "teach-4-g11",
                type: "scripture",
                text: "The pattern of decreasing longevity:",
                scripture:
                  '"Shem lived after he fathered Arpachshad 500 years... Nahor lived after he fathered Terah 119 years... Terah lived 205 years." - Genesis 11:11, 25, 32',
              },
              {
                id: "teach-5-g11",
                type: "question",
                text: "Why do lifespans decrease so dramatically after the flood?",
                options: [
                  {
                    id: "opt-1",
                    text: "Environmental changes after the flood",
                    response: "Yes! The protective water canopy was gone, exposing earth to more radiation.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "The accumulating effects of sin",
                    response: "Exactly! Genetic deterioration and disease increased over time.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "God's grace in limiting human wickedness",
                    response: "Important insight! Shorter lives limit the extent of human evil.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-6-g11",
                type: "narration",
                text: "The genealogy culminates with the family that will change everything...",
              },
              {
                id: "teach-7-g11",
                type: "scripture",
                text: "Terah's family and their journey:",
                scripture:
                  '"Terah took Abram his son and Lot the son of Haran, his grandson, and Sarai his daughter-in-law, his son Abram\'s wife, and they went forth together from Ur of the Chaldeans to go into the land of Canaan, but when they came to Haran, they settled there." - Genesis 11:31',
              },
              {
                id: "teach-8-g11",
                type: "question",
                text: "They started for Canaan but settled in Haran. What might this partial obedience teach us?",
                options: [
                  {
                    id: "opt-1",
                    text: "Obedience requires following through",
                    response: "Exactly! Starting well doesn't guarantee finishing well.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "God works through our incomplete obedience",
                    response: "Yes! Even partial steps forward can be used in God's plan.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Settling short of God's best is common",
                    response: "Important insight! Many start with spiritual ambition but settle for comfort.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-preview-11",
                type: "narration",
                text: "ABRAHAMIC COVENANT APPROACHING: This genealogy sets the stage for God's monumental call to Abraham in the next chapter. Watch how God takes an ordinary man from an idol-worshipping family and makes him the father of faith for all who believe!",
              },
            ],
            application: {
              id: "app-11",
              type: "reflection",
              text: "If God worked through ordinary, imperfect people in these genealogies, what does this say about how He can use you and your family despite your flaws and failures?",
            },
            reflection: {
              id: "refl-11",
              type: "reflection",
              text: "Like Terah's family, we often start toward God's calling but settle short of His full purpose. Where might God be calling you to leave your 'Haran' and continue toward His promised land for your life?",
            },
          },
        },
        {
          id: "lesson-genesis-12",
          sectionId: "genesis-new-beginnings",
          title: "The Call of Abram",
          description: "Faith to leave everything",
          scripture: "Genesis 12:1-9",
          estimatedMinutes: 15,
          order: 12,
          locked: true,
          content: {
            introduction: {
              id: "intro-12",
              type: "narration",
              text: "Have you ever faced a decision that required leaving everything familiar for something completely unknown? Today we witness the moment that changes human history - when God calls one man to step into the unknown based solely on divine promises. What if this ancient call still echoes in the choices God invites us to make today?",
              options: [
                {
                  id: "opt-1",
                  text: "I'm ready to explore Abraham's call",
                  response: "This is one of the most significant moments in biblical history.",
                },
                {
                  id: "opt-2",
                  text: "I want to understand what faith requires",
                  response: "Perfect! Abraham's story defines biblical faith for all generations.",
                },
                {
                  id: "opt-3",
                  text: "Let's see how God's promises begin",
                  response: "Wonderful! We're witnessing the birth of God's covenant relationship.",
                },
              ],
            },
            teaching: [
              {
                id: "teach-1-g12",
                type: "scripture",
                text: "God's radical call to Abram:",
                scripture:
                  '"Now the LORD said to Abram, "Go from your country and your kindred and your father\'s house to the land that I will show you." - Genesis 12:1',
              },
              {
                id: "teach-2-g12",
                type: "question",
                text: "God called Abram to leave everything without knowing the destination. Why would God work this way?",
                options: [
                  {
                    id: "opt-1",
                    text: "It requires complete trust in God alone",
                    response: "Exactly! With no safety nets, Abram had to depend entirely on God.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It breaks attachments to idolatrous influences",
                    response: "Yes! Leaving Ur meant leaving its pagan worship and values.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "It establishes God as the only security",
                    response: "Beautiful insight! When everything familiar is gone, God becomes everything.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-3-g12",
                type: "narration",
                text: "But the call comes with incredible promises...",
              },
              {
                id: "teach-4-g12",
                type: "scripture",
                text: "The seven-fold promise:",
                scripture:
                  '"And I will make of you a great nation, and I will bless you and make your name great, so that you will be a blessing. I will bless those who bless you, and him who dishonors you I will curse, and in you all the families of the earth shall be blessed." - Genesis 12:2-3',
              },
              {
                id: "teach-5-g12",
                type: "question",
                text: "Notice the repetition of 'bless' and the movement from personal to global. What's significant about this progression?",
                options: [
                  {
                    id: "opt-1",
                    text: "God's blessings are meant to be shared",
                    response: "Exactly! Abram is blessed TO BE a blessing to others.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It reveals God's heart for all nations",
                    response: "Yes! The ultimate goal is blessing 'all families of the earth.'",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "It shows the missional nature of election",
                    response: "Important insight! God chooses people for the sake of others.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-6-g12",
                type: "narration",
                text: "Abram's response becomes the model of faith for all time...",
              },
              {
                id: "teach-7-g12",
                type: "scripture",
                text: "Abram's obedience:",
                scripture:
                  '"So Abram went, as the LORD had told him, and Lot went with him. Abram was seventy-five years old when he departed from Haran." - Genesis 12:4',
              },
              {
                id: "teach-8-g12",
                type: "question",
                text: "Abram was 75 when he left everything. What does this teach us about God's timing and calling?",
                options: [
                  {
                    id: "opt-1",
                    text: "God's calling isn't limited by age",
                    response: "Exactly! Significant service can begin at any stage of life.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Obedience requires leaving comfort zones",
                    response: "Yes! Age doesn't eliminate the cost of discipleship.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Faith often means starting over",
                    response: "Important insight! Following God can mean new beginnings at any age.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-9-g12",
                type: "narration",
                text: "When Abram arrives in Canaan, his first act is profoundly significant...",
              },
              {
                id: "teach-10-g12",
                type: "scripture",
                text: "Abram's worship in the promised land:",
                scripture:
                  '"Then the LORD appeared to Abram and said, "To your offspring I will give this land." So he built there an altar to the LORD, who had appeared to him." - Genesis 12:7',
              },
              {
                id: "teach-11-g12",
                type: "question",
                text: "Why build an altar before possessing the land? What does this teach us about faith?",
                options: [
                  {
                    id: "opt-1",
                    text: "Worship comes before possession",
                    response: "Exactly! He worshipped God for promises not yet fulfilled.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Faith acts on God's word before seeing results",
                    response: "Yes! The altar declared his trust in God's promise.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "It established God's presence in the land",
                    response: "Beautiful insight! The altar marked the land as belonging to God.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-preview-12",
                type: "narration",
                text: "COVENANT JOURNEY BEGINNING: This is just the start of Abraham's faith journey. Over the next 13 chapters, we'll watch his faith be tested, refined, and ultimately become the pattern for all who would be justified by faith, as Paul will later explain in Romans!",
              },
            ],
            application: {
              id: "app-12",
              type: "reflection",
              text: "If God called Abram to leave everything without knowing the destination, does this mean all Christians should be willing to leave their careers and families? How do we discern between universal principles and specific callings?",
            },
            reflection: {
              id: "refl-12",
              type: "reflection",
              text: "Like Abram, God calls us to journeys of faith where we must trust His promises more than our security. Where is God inviting you to step out in faith, leaving familiar comforts to follow His leading?",
            },
          },
        },
      ],
    },
  ],
}
