import type { LessonBook } from "./types"

export const GENESIS_LESSONS_7_12: LessonBook = {
  id: "genesis-7-12-perfected",
  religion: "christianity",
  title: "Genesis - New Beginnings",
  description: "From the Flood to the Call of Abram",
  icon: "🕊️",
  testament: "old",
  category: "Pentateuch",
  sections: [
    {
      id: "genesis-new-beginnings-perfected",
      bookId: "genesis",
      title: "New Beginnings",
      description: "From the Flood to the call of Abram",
      order: 2,
      lessons: [
        {
          id: "lesson-genesis-7-perfected",
          sectionId: "genesis-new-beginnings-perfected",
          title: "The Covenant with Noah",
          description: "Promises and a new humanity",
          scripture: "Genesis 9:1-17",
          estimatedMinutes: 16,
          order: 7,
          locked: true,
          content: {
            introduction: {
              id: "intro-7-perfected",
              type: "narration",
              text: "Have you ever made a promise so serious you put up a visible reminder? A marker that said 'I will never go back on my word'? Today we're witnessing God making the first formal covenant with humanity - a promise sealed with the most beautiful sign imaginable. What if this ancient promise still speaks to our deepest fears about the world?",
              options: [
                {
                  id: "opt-1",
                  text: "I'm curious about God's promises",
                  response: "Wonderful! This covenant reveals foundational truths about God's character.",
                },
                {
                  id: "opt-2",
                  text: "I've wondered about the rainbow's meaning",
                  response: "Perfect! You're about to discover its profound theological significance.",
                },
                {
                  id: "opt-3",
                  text: "Ready to explore this new beginning!",
                  response: "Excellent! Let's see how God establishes order after the flood.",
                },
              ],
            },
            teaching: [
              {
                id: "teach-1-g7-perfected",
                type: "scripture",
                text: "God begins by reaffirming human dignity but with a sober reality:",
                scripture:
                  '"And you, be fruitful and multiply, teem on the earth and multiply in it." And God said to Noah, "Whoever sheds the blood of man, by man shall his blood be shed, for God made man in his own image." - Genesis 9:1, 6',
              },
              {
                id: "teach-2-g7-perfected",
                type: "question",
                text: "Capital punishment is instituted here. Why does being made in God's image matter for how we treat human life?",
                options: [
                  {
                    id: "opt-1",
                    text: "Human life has sacred worth because it bears God's image",
                    response: "Exactly! The penalty reflects the supreme value of what was violated.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It establishes human government to restrain evil",
                    response: "Yes! God delegates authority to humans to uphold justice.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "It shows God takes violence against His image-bearers seriously",
                    response: "Important insight! This protects the sanctity of human life.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-3-g7-perfected",
                type: "narration",
                text: "Then God does something remarkable - He makes a covenant not just with Noah, but with all creation...",
              },
              {
                id: "teach-4-g7-perfected",
                type: "scripture",
                text: "The universal covenant:",
                scripture:
                  '"Behold, I establish my covenant with you and your offspring after you, and with every living creature that is with you... that never again shall all flesh be cut off by the waters of the flood." - Genesis 9:9-11',
              },
              {
                id: "teach-5-g7-perfected",
                type: "question",
                text: "Why would God make a covenant with animals? What does this reveal about His care for creation?",
                options: [
                  {
                    id: "opt-1",
                    text: "God's compassion extends to all He made",
                    response: "Exactly! His commitment isn't limited to humanity alone.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It shows creation's intrinsic value to God",
                    response: "Yes! Animals aren't just resources but creatures God cares for.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "It demonstrates the scope of God's redemptive plans",
                    response: "Romans 8 will later show all creation groaning for redemption.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-6-g7-perfected",
                type: "narration",
                text: "Now comes the sign - one of the most beautiful symbols in all of Scripture...",
              },
              {
                id: "teach-7-g7-perfected",
                type: "scripture",
                text: "The rainbow covenant:",
                scripture:
                  '"I have set my bow in the cloud, and it shall be a sign of the covenant between me and the earth." - Genesis 9:13',
              },
              {
                id: "teach-8-g7-perfected",
                type: "question",
                text: "The word 'bow' here is the same as a warrior's bow. What's significant about God hanging His 'weapon' in the sky?",
                options: [
                  {
                    id: "opt-1",
                    text: "God is declaring peace with creation",
                    response: "Exactly! The warrior lays down His weapon against the earth.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It's a divine ceasefire agreement",
                    response: "Yes! The bow points away from earth, not toward it.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "It shows God's self-restraint",
                    response: "Beautiful insight! Though humanity remains sinful, God chooses mercy.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-9-g7-perfected",
                type: "narration",
                text: "But notice who this sign is really for...",
              },
              {
                id: "teach-10-g7-perfected",
                type: "scripture",
                text: "The sign's purpose:",
                scripture:
                  '"When I bring clouds over the earth and the bow is seen in the clouds, I will remember my covenant..." - Genesis 9:14-15',
              },
              {
                id: "teach-11-g7-perfected",
                type: "question",
                text: "God says 'I will remember' - does God need reminders? What's really happening here?",
                options: [
                  {
                    id: "opt-1",
                    text: "It reveals God's relational commitment to us",
                    response: "Exactly! He condescends to speak in human terms we can understand.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It's for our assurance, not His memory",
                    response: "Yes! The rainbow comforts us that God keeps His promises.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "It shows God's faithfulness to His word",
                    response: "He binds Himself to His own promise for our sake.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-preview-7-perfected",
                type: "narration",
                text: "COVENANT PATTERN BEGINNING: This is the first of several major covenants well explore. Each one reveals more of God's character and His unfolding plan of redemption. The ultimate covenant, of course, will be established through Jesus blood - the final assurance of God's commitment to save!",
              },
            ],
            application: {
              id: "app-7-perfected",
              type: "reflection",
              text: "If God promised never to flood the earth again, how do we reconcile this with the biblical teaching about final judgment? Does God's patience mean He's given up on justice?",
            },
            reflection: {
              id: "refl-7-perfected",
              type: "reflection",
              text: "The rainbow reminds God of His promise. What tangible reminders can you create to remember God's faithfulness in your own life when you face storms?",
            },
          },
        },
        {
          id: "lesson-genesis-8-perfected",
          sectionId: "genesis-new-beginnings-perfected",
          title: "Noah and His Sons",
          description: "Blessing and curse",
          scripture: "Genesis 9:18-29",
          estimatedMinutes: 15,
          order: 8,
          locked: true,
          content: {
            introduction: {
              id: "intro-8-perfected",
              type: "narration",
              text: "Have you ever seen a hero stumble? Someone you deeply respected make a mistake that changed everything? Today we're witnessing the sobering reality that salvation doesn't erase human weakness. What if Noah's failure reveals crucial truths about grace, dignity, and the generational impact of our choices?",
              options: [
                {
                  id: "opt-1",
                  text: "I'm curious about what happened to Noah",
                  response: "This is a crucial story about the complexity of human nature after salvation.",
                },
                {
                  id: "opt-2",
                  text: "I want to understand the blessing and curse",
                  response: "Perfect! This passage has been misunderstood but contains profound wisdom.",
                },
                {
                  id: "opt-3",
                  text: "Ready to explore this difficult text",
                  response: "Excellent! Let's approach this with care and seek its deeper meaning.",
                },
              ],
            },
            teaching: [
              {
                id: "teach-1-g8-perfected",
                type: "scripture",
                text: "The story begins with Noah's new beginning in farming:",
                scripture:
                  '"Noah began to be a man of the soil, and he planted a vineyard. He drank of the wine and became drunk and lay uncovered in his tent." - Genesis 9:20-21',
              },
              {
                id: "teach-2-g8-perfected",
                type: "question",
                text: "Many people ask: Why include this embarrassing story about Noah? What purpose does it serve?",
                options: [
                  {
                    id: "opt-1",
                    text: "It shows even the righteous struggle with sin",
                    response: "Exactly! Salvation from judgment doesn't mean sinless perfection.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It demonstrates the ongoing effects of the fall",
                    response: "Yes! The flood judged society but didn't remove indwelling sin.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "It prepares us for the need for greater salvation",
                    response: "Important insight! Noah points to our need for a perfect Savior.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-3-g8-perfected",
                type: "narration",
                text: "The situation escalates when Ham discovers his father's shame...",
              },
              {
                id: "teach-4-g8-perfected",
                type: "scripture",
                text: "Contrasting responses:",
                scripture:
                  '"And Ham saw the nakedness of his father and told his two brothers outside. Then Shem and Japheth took a garment and walked backward and covered their father. Their faces were turned backward, and they did not see their father\'s nakedness." - Genesis 9:22-23',
              },
              {
                id: "teach-5-g8-perfected",
                type: "question",
                text: "Why was Ham's response so serious? What's the difference between 'seeing' and 'covering' shame?",
                options: [
                  {
                    id: "opt-1",
                    text: "Ham dishonored his father by exposing his weakness",
                    response: "Exactly! He exploited rather than protected his father's dignity.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Shem and Japheth showed honor and discretion",
                    response: "Yes! They preserved their father's honor despite his failure.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "It reveals character in moments of vulnerability",
                    response: "How we treat others in their weakness shows our true heart.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-6-g8-perfected",
                type: "narration",
                text: "When Noah awakens, he pronounces prophetic blessings and curses...",
              },
              {
                id: "teach-7-g8-perfected",
                type: "scripture",
                text: "Noah's prophecy:",
                scripture:
                  '"Cursed be Canaan; a servant of servants shall he be to his brothers." And he said, "Blessed be the LORD, the God of Shem; and let Canaan be his servant. May God enlarge Japheth, and let him dwell in the tents of Shem, and let Canaan be his servant." - Genesis 9:25-27',
              },
              {
                id: "teach-8-g8-perfected",
                type: "question",
                text: "This passage has been tragically misused to justify slavery. What's actually happening here?",
                options: [
                  {
                    id: "opt-1",
                    text: "It's prophetic, not prescriptive",
                    response: "Exactly! Noah predicts future relationships, not establishes moral law.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It reflects ancient Near Eastern family dynamics",
                    response: "Yes! A father's words carried weight about future generations.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "The focus is spiritual, not racial",
                    response: "Crucial insight! Shem's blessing connects him to the Lord, not ethnicity.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-9-g8-perfected",
                type: "narration",
                text: "Notice the profound spiritual significance in Shem's blessing...",
              },
              {
                id: "teach-10-g8-perfected",
                type: "scripture",
                text: "The Messianic line established:",
                scripture: '"Blessed be the LORD, the God of Shem..." - Genesis 9:26',
              },
              {
                id: "teach-11-g8-perfected",
                type: "question",
                text: "Why is Shem's blessing so significant for redemptive history?",
                options: [
                  {
                    id: "opt-1",
                    text: "The Messiah will come through Shem's line",
                    response: "Exactly! Abraham, David, and Jesus all descend from Shem.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It identifies Shem's God as the true LORD",
                    response: "Yes! The blessing focuses on relationship with Yahweh.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Japheth will benefit from Shem's spiritual blessing",
                    response: "'Dwell in the tents of Shem' suggests sharing spiritual inheritance.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-preview-8-perfected",
                type: "narration",
                text: "PATTERN OF GRACE: Even in failure, God's purposes advance. Noah's sin doesn't derail God's plan - in fact, the Messianic line becomes clearer. This pattern continues throughout Scripture: God works through flawed people to accomplish His perfect will!",
              },
            ],
            application: {
              id: "app-8-perfected",
              type: "reflection",
              text: "If Noah - who walked with God and was saved from judgment - could still fall so dramatically, what does this teach us about spiritual pride and ongoing dependence on God's grace?",
            },
            reflection: {
              id: "refl-8-perfected",
              type: "reflection",
              text: "How can you be someone who 'covers' rather than exposes the weaknesses of others, reflecting God's grace in how you handle human frailty?",
            },
          },
        },
        {
          id: "lesson-genesis-9-perfected",
          sectionId: "genesis-new-beginnings-perfected",
          title: "The Nations of the Earth",
          description: "The descendants of Noah",
          scripture: "Genesis 10:1-32",
          estimatedMinutes: 14,
          order: 9,
          locked: true,
          content: {
            introduction: {
              id: "intro-9-perfected",
              type: "narration",
              text: "Have you ever looked at a world map and wondered how we got here? How seventy nations emerged from one family? Today we're exploring the Table of Nations - what some call the most accurate ancient ethnological record ever written. What if these names reveal God's heart for every people group on earth?",
              options: [
                {
                  id: "opt-1",
                  text: "I'm curious about these genealogies",
                  response: "They're far more than a list - they reveal God's global plans.",
                },
                {
                  id: "opt-2",
                  text: "I want to understand where nations came from",
                  response: "Perfect! This chapter provides the biblical framework for human diversity.",
                },
                {
                  id: "opt-3",
                  text: "Ready to explore the family tree!",
                  response: "Excellent! Let's trace the branches from Noah's three sons.",
                },
              ],
            },
            teaching: [
              {
                id: "teach-1-g9-perfected",
                type: "scripture",
                text: "The chapter begins by establishing the scope:",
                scripture:
                  '"These are the generations of the sons of Noah: Shem, Ham, and Japheth. Sons were born to them after the flood." - Genesis 10:1',
              },
              {
                id: "teach-2-g9-perfected",
                type: "question",
                text: "Many people ask: Why spend a whole chapter on names we can't pronounce? What's the spiritual significance?",
                options: [
                  {
                    id: "opt-1",
                    text: "It shows God's faithfulness to the creation mandate",
                    response: "Exactly! 'Be fruitful and multiply' is being fulfilled through specific people.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It demonstrates God's interest in all peoples",
                    response: "Yes! Every nation matters to God, not just Israel.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "It provides the context for redemption history",
                    response: "This is the stage upon which God's salvation drama will unfold.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-3-g9-perfected",
                type: "narration",
                text: "The genealogy follows a deliberate structure, tracing the lines of Japheth, Ham, and Shem...",
              },
              {
                id: "teach-4-g9-perfected",
                type: "scripture",
                text: "The Japhethites - distant coastlands:",
                scripture:
                  '"The sons of Japheth: Gomer, Magog, Madai, Javan, Tubal, Meshech, and Tiras..." From these the coastland peoples spread in their lands, each with his own language, by their clans, in their nations." - Genesis 10:2, 5',
              },
              {
                id: "teach-5-g9-perfected",
                type: "question",
                text: "Japheth's descendants generally settled in what became Europe and Asia Minor. What does their mention first suggest?",
                options: [
                  {
                    id: "opt-1",
                    text: "They were geographically most distant from Israel",
                    response: "Exactly! The narrative moves from farthest to nearest.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It shows God's global perspective",
                    response: "Yes! Scripture isn't Israel-centered but God-centered.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "It prepares for 'dwelling in Shem's tents'",
                    response: "Many Gentiles would later embrace Shem's God.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-6-g9-perfected",
                type: "narration",
                text: "Next comes Ham's line, which includes both great civilizations and great conflicts...",
              },
              {
                id: "teach-7-g9-perfected",
                type: "scripture",
                text: "Nimrod the mighty hunter:",
                scripture:
                  '"Cush fathered Nimrod; he was the first on earth to be a mighty man. He began to be a mighty hunter before the LORD." - Genesis 10:8-9',
              },
              {
                id: "teach-8-g9-perfected",
                type: "question",
                text: "Nimrod founded Babylon and Assyria - empires that would later oppress Israel. What might 'mighty hunter before the LORD' imply?",
                options: [
                  {
                    id: "opt-1",
                    text: "He established human empires opposed to God",
                    response: "Yes! His hunting may symbolize hunting men or defying God's order.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "He represents human power without God",
                    response: "Exactly! Human civilization organizing itself against God's rule.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "It foreshadows the tower of Babel",
                    response: "His kingdom begins the movement toward human pride we'll see next.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-9-g9-perfected",
                type: "narration",
                text: "Finally, we come to Shem's line - but notice something unusual...",
              },
              {
                id: "teach-10-g9-perfected",
                type: "scripture",
                text: "Shem's genealogy interrupted:",
                scripture:
                  '"To Shem also, the father of all the children of Eber, the elder brother of Japheth, children were born." - Genesis 10:21',
              },
              {
                id: "teach-11-g9-perfected",
                type: "question",
                text: "Eber (from whom 'Hebrew' comes) gets special mention. Why pause the genealogy for him?",
                options: [
                  {
                    id: "opt-1",
                    text: "He's the ancestor of Abraham and the Hebrew people",
                    response: "Exactly! This signals the line through which blessing will come.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It highlights the chosen line for redemption",
                    response: "Yes! God is tracing the specific family for His purposes.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "It prepares for the call of Abram",
                    response: "We're being directed toward the next major character in God's plan.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-12-g9-perfected",
                type: "narration",
                text: "The chapter concludes with a summary that sets the stage for what's coming...",
              },
              {
                id: "teach-13-g9-perfected",
                type: "scripture",
                text: "The unified world:",
                scripture:
                  '"These are the clans of the sons of Noah, according to their genealogies, in their nations, and from these the nations spread abroad on the earth after the flood." - Genesis 10:32',
              },
              {
                id: "teach-14-g9-perfected",
                type: "question",
                text: "Everyone is still together at this point. What's significant about this unity before Babel?",
                options: [
                  {
                    id: "opt-1",
                    text: "It shows the potential for human collaboration",
                    response: "Exactly! Unified humanity has tremendous power for good or ill.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It sets up the contrast with what follows",
                    response: "Yes! Chapter 11 will show this unity used for rebellion.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "It demonstrates God's blessing on multiplication",
                    response: "The creation mandate is being fulfilled rapidly.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-preview-9-perfected",
                type: "narration",
                text: "MISSION FORESHADOWED: This table of nations becomes incredibly significant later! The Great Commission in Matthew 28 essentially says 'Now go back to all these nations with the gospel.' The genealogy in Luke 3 will even trace Jesus back to Adam, showing God's heart for every people group listed here!",
              },
            ],
            application: {
              id: "app-9-perfected",
              type: "reflection",
              text: "If all nations come from one family, how should this truth shape our view of racial diversity, national conflicts, and the gospel's claim to be for 'every tribe and tongue and people and nation'?",
            },
            reflection: {
              id: "refl-9-perfected",
              type: "reflection",
              text: "Your name is part of God's story too. How does seeing yourself as part of God's global family change how you pray for and engage with people from different nations and cultures?",
            },
          },
        },
        {
          id: "lesson-genesis-10-perfected",
          sectionId: "genesis-new-beginnings-perfected",
          title: "The Tower of Babel",
          description: "Human pride and divine judgment",
          scripture: "Genesis 11:1-9",
          estimatedMinutes: 16,
          order: 10,
          locked: true,
          content: {
            introduction: {
              id: "intro-10-perfected",
              type: "narration",
              text: "Have you ever been part of a project that started with noble intentions but slowly became about making a name for yourself? Today we're witnessing humanity's first organized attempt at utopia - a tower reaching to heaven. What if this ancient story diagnoses the root problem of every human civilization since?",
              options: [
                {
                  id: "opt-1",
                  text: "I'm curious about the tower's meaning",
                  response: "This story reveals profound truths about human nature and God's intervention.",
                },
                {
                  id: "opt-2",
                  text: "I want to understand why God confused languages",
                  response: "Perfect! This judgment actually reveals God's mercy in disguise.",
                },
                {
                  id: "opt-3",
                  text: "Ready to explore Babel!",
                  response: "Excellent! Let's discover what really happened on that plain.",
                },
              ],
            },
            teaching: [
              {
                id: "teach-1-g10-perfected",
                type: "scripture",
                text: "The story begins with technological unity:",
                scripture:
                  '"And the whole earth had one language and the same words. And they found a plain in the land of Shinar and settled there." - Genesis 11:1-2',
              },
              {
                id: "teach-2-g10-perfected",
                type: "question",
                text: "Unity sounds good initially. What's potentially dangerous about complete human uniformity?",
                options: [
                  {
                    id: "opt-1",
                    text: "Unity without God leads to collective rebellion",
                    response: "Exactly! Combined human power can oppose God's purposes.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It contradicts the creation mandate to spread out",
                    response: "Yes! They're settling instead of filling the earth.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Human potential needs divine direction",
                    response: "Great power without wisdom becomes destructive.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-3-g10-perfected",
                type: "narration",
                text: "Then comes their famous proposal...",
              },
              {
                id: "teach-4-g10-perfected",
                type: "scripture",
                text: "The human agenda:",
                scripture:
                  '"Then they said, "Come, let us build ourselves a city and a tower with its top in the heavens, and let us make a name for ourselves, lest we be dispersed over the face of the whole earth."" - Genesis 11:4',
              },
              {
                id: "teach-5-g10-perfected",
                type: "question",
                text: "Three key phrases reveal their heart: 'make a name for ourselves,' 'top in the heavens,' 'lest we be dispersed.' What's wrong with each?",
                options: [
                  {
                    id: "opt-1",
                    text: "They sought fame rather than God's glory",
                    response: "Exactly! 'Make a name' versus receiving identity from God.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "They tried to reach heaven on their terms",
                    response: "Yes! Salvation by human achievement rather than divine grace.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "They resisted God's command to fill the earth",
                    response: "They feared obedience more than disobedience.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-6-g10-perfected",
                type: "narration",
                text: "God comes down to see what they're building - the irony is profound...",
              },
              {
                id: "teach-7-g10-perfected",
                type: "scripture",
                text: "God's assessment:",
                scripture:
                  '"And the LORD said, "Behold, they are one people, and they have all one language, and this is only the beginning of what they will do. And nothing that they propose to do will now be impossible for them." - Genesis 11:6',
              },
              {
                id: "teach-8-g10-perfected",
                type: "question",
                text: "God says 'nothing will be impossible for them.' Is God threatened by human achievement? What's really happening?",
                options: [
                  {
                    id: "opt-1",
                    text: "God sees the dangerous potential of unified sin",
                    response: "Exactly! Like parents limiting a child's dangerous freedom.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "He's protecting them from themselves",
                    response: "Yes! Unlimited power would lead to ultimate self-destruction.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "It's a judicial limitation, not a fearful reaction",
                    response: "God acts in wisdom to restrain evil, not from weakness.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-9-g10-perfected",
                type: "narration",
                text: "The judgment comes, but notice it's exactly what they feared...",
              },
              {
                id: "teach-10-g10-perfected",
                type: "scripture",
                text: "The confusion of languages:",
                scripture:
                  '"Come, let us go down and there confuse their language, so that they may not understand one another\'s speech." So the LORD dispersed them from there over the face of all the earth..." - Genesis 11:7-8',
              },
              {
                id: "teach-11-g10-perfected",
                type: "question",
                text: "The judgment gives them what they needed but resisted. How is this actually merciful?",
                options: [
                  {
                    id: "opt-1",
                    text: "It forces them to fulfill the creation mandate",
                    response: "Exactly! They wouldn't obey willingly, so God makes it necessary.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It limits the spread and power of sin",
                    response: "Yes! Division restrains human capacity for collective evil.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "It prepares for redemption through diversity",
                    response: "Beautiful insight! Different nations will later bring their glory to God.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-12-g10-perfected",
                type: "narration",
                text: "The story ends with a name that captures the entire experience...",
              },
              {
                id: "teach-13-g10-perfected",
                type: "scripture",
                text: "The name 'Babel':",
                scripture:
                  '"Therefore its name was called Babel, because there the LORD confused the language of all the earth." - Genesis 11:9',
              },
              {
                id: "teach-14-g10-perfected",
                type: "question",
                text: "Babel sounds like the Hebrew for 'confused.' What's ironic about their goal versus the result?",
                options: [
                  {
                    id: "opt-1",
                    text: "They wanted a name but got confusion",
                    response: "Exactly! The very thing they sought became their shame.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Their unity tower became a division monument",
                    response: "Yes! The project meant to prevent scattering caused it.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Heaven-reaching ambition ended in earthly confusion",
                    response: "Human effort to reach God always ends in frustration.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-preview-10-perfected",
                type: "narration",
                text: "BABEL REVERSED: This isn't the end of the story! Pentecost in Acts 2 will show the Holy Spirit reversing Babel - people hearing the gospel in their own languages. The ultimate unity will come not through human achievement but through Christ, who makes us one new humanity!",
              },
            ],
            application: {
              id: "app-10-perfected",
              type: "reflection",
              text: "If God judged human unity at Babel, how do we reconcile this with Jesus' prayer for Christian unity in John 17? What's the difference between unity against God and unity in God?",
            },
            reflection: {
              id: "refl-10-perfected",
              type: "reflection",
              text: "Where in your life are you tempted to 'build a tower' - seeking security, fame, or significance through human achievement rather than receiving these as gifts from God?",
            },
          },
        },
        {
          id: "lesson-genesis-11-perfected",
          sectionId: "genesis-new-beginnings-perfected",
          title: "The Line from Shem to Abram",
          description: "Preparing the redeemer",
          scripture: "Genesis 11:10-32",
          estimatedMinutes: 15,
          order: 11,
          locked: true,
          content: {
            introduction: {
              id: "intro-11-perfected",
              type: "narration",
              text: "Have you ever traced your family tree and discovered how your story connects to larger historical events? Today we're following a single thread through ten generations - from Shem to Abram. What if these names represent God's quiet, faithful work through ordinary lives to prepare for extraordinary redemption?",
              options: [
                {
                  id: "opt-1",
                  text: "I'm curious about this genealogy",
                  response: "This isn't just a list - it's the narrowing focus of God's redemptive plan.",
                },
                {
                  id: "opt-2",
                  text: "I want to understand Abram's background",
                  response: "Perfect! This sets the stage for one of the most important calls in history.",
                },
                {
                  id: "opt-3",
                  text: "Ready to trace the family line!",
                  response: "Excellent! Let's follow the path from Babel to blessing.",
                },
              ],
            },
            teaching: [
              {
                id: "teach-1-g11-perfected",
                type: "scripture",
                text: "The genealogy begins with Shem, linking back to the flood:",
                scripture:
                  '"These are the generations of Shem. When Shem was 100 years old, he fathered Arpachshad two years after the flood." - Genesis 11:10',
              },
              {
                id: "teach-2-g11-perfected",
                type: "question",
                text: "Why include ages and time markers so precisely? What does this accomplish?",
                options: [
                  {
                    id: "opt-1",
                    text: "It establishes historical reliability",
                    response: "Exactly! These are real people in real time, not myths.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It shows God's sovereignty over generations",
                    response: "Yes! God works through the ordinary progression of family lines.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "It connects the flood to Abraham chronologically",
                    response: "We can trace how recently the flood was in Abraham's memory.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-3-g11-perfected",
                type: "narration",
                text: "The list progresses through ten generations, with lifespans gradually decreasing...",
              },
              {
                id: "teach-4-g11-perfected",
                type: "scripture",
                text: "The narrowing line:",
                scripture: '"Shem, Arpachshad, Shelah, Eber, Peleg, Reu, Serug, Nahor, Terah, Abram..."',
              },
              {
                id: "teach-5-g11-perfected",
                type: "question",
                text: "Notice Eber (Hebrews) and Peleg ('division' - when earth divided) get special mention. Why highlight these?",
                options: [
                  {
                    id: "opt-1",
                    text: "They mark significant developments in redemptive history",
                    response: "Exactly! The Hebrew people and geographical divisions matter for God's plan.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It shows God's purposeful selection",
                    response: "Yes! Not random evolution but deliberate preparation.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "It connects world events with the chosen line",
                    response: "God's work in one family intersects with global developments.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-6-g11-perfected",
                type: "narration",
                text: "Then we reach Terah, Abram's father, and the story suddenly gets personal...",
              },
              {
                id: "teach-7-g11-perfected",
                type: "scripture",
                text: "Terah's family and movement:",
                scripture:
                  '"Terah took Abram his son and Lot the son of Haran, his grandson, and Sarai his daughter-in-law, and they went forth together from Ur of the Chaldeans to go into the land of Canaan, but when they came to Haran, they settled there." - Genesis 11:31',
              },
              {
                id: "teach-8-g11-perfected",
                type: "question",
                text: "Terah starts for Canaan but stops in Haran. What might this partial obedience suggest?",
                options: [
                  {
                    id: "opt-1",
                    text: "Human initiative often falls short of God's call",
                    response: "Exactly! Starting well doesn't guarantee finishing well.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It sets up God's direct call to Abram",
                    response: "Yes! The father's incompletion requires the son's obedience.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "It shows the pattern of faith developing",
                    response: "God works through generations to accomplish His purposes.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-9-g11-perfected",
                type: "narration",
                text: "The chapter ends with three crucial details about Abram's situation...",
              },
              {
                id: "teach-10-g11-perfected",
                type: "scripture",
                text: "Abram's predicament:",
                scripture:
                  '"The days of Terah were 205 years, and Terah died in Haran. Now Sarai was barren; she had no child." - Genesis 11:32; 11:30',
              },
              {
                id: "teach-11-g11-perfected",
                type: "question",
                text: "Barrenness and bereavement - why emphasize these two problems as we meet Abram?",
                options: [
                  {
                    id: "opt-1",
                    text: "It highlights the impossibility of human solutions",
                    response: "Exactly! God's promises will require divine intervention.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It sets up key themes of death and life",
                    response: "Yes! From barrenness comes fruitfulness through faith.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "It makes God's subsequent promises more dramatic",
                    response: "The greater the obstacle, the greater God's glory in overcoming it.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-12-g11-perfected",
                type: "narration",
                text: "But there's one more crucial detail about where they came from...",
              },
              {
                id: "teach-13-g11-perfected",
                type: "scripture",
                text: "The cultural background:",
                scripture: '"They went forth together from Ur of the Chaldeans..." - Genesis 11:31',
              },
              {
                id: "teach-14-g11-perfected",
                type: "question",
                text: "Ur was a advanced pagan city with moon worship. Why mention this origin?",
                options: [
                  {
                    id: "opt-1",
                    text: "It shows God calls people out of paganism",
                    response: "Exactly! Redemption begins by leaving false worship.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It highlights the cost of obedience",
                    response: "Yes! Abram leaves civilization for unknown territory.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "It demonstrates God's grace to idolaters",
                    response: "God doesn't call the worthy but makes the called worthy.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-preview-11-perfected",
                type: "narration",
                text: "PATTERN OF GRACE: From the chaos of Babel to the confusion of barrenness, God is quietly preparing His solution. The stage is set: a man from pagan origins, stuck in halfway obedience, facing dead ends in every direction. Perfect conditions for God to demonstrate that salvation comes not from human potential but from divine promise!",
              },
            ],
            application: {
              id: "app-11-perfected",
              type: "reflection",
              text: "If God worked through ten generations of ordinary people (most of whom we know nothing about) to prepare for Abraham, what does this teach us about faithfulness in our ordinary lives and trusting God's long-term purposes?",
            },
            reflection: {
              id: "refl-11-perfected",
              type: "reflection",
              text: "Like Terah, have you ever started toward God's calling but settled halfway? What would it look like to continue the journey in obedience, even when it means leaving comfort and security?",
            },
          },
        },
        {
          id: "lesson-genesis-12-perfected",
          sectionId: "genesis-new-beginnings-perfected",
          title: "The Call of Abram",
          description: "Faith to leave the known",
          scripture: "Genesis 12:1-9",
          estimatedMinutes: 17,
          order: 12,
          locked: true,
          content: {
            introduction: {
              id: "intro-12-perfected",
              type: "narration",
              text: "Have you ever stood at a crossroads where obedience meant leaving everything familiar? Your home, your security, your plans? Today we're witnessing the most important journey in human history since Eden - the moment faith is born. What if Abram's call reveals the pattern for every genuine encounter with the living God?",
              options: [
                {
                  id: "opt-1",
                  text: "I'm curious about Abram's call",
                  response: "This moment changes everything - it's the beginning of covenant history.",
                },
                {
                  id: "opt-2",
                  text: "I want to understand what God promised",
                  response: "Perfect! These seven promises form the foundation of biblical faith.",
                },
                {
                  id: "opt-3",
                  text: "Ready to explore this faith journey!",
                  response: "Excellent! Let's witness the birth of saving faith.",
                },
              ],
            },
            teaching: [
              {
                id: "teach-1-g12-perfected",
                type: "scripture",
                text: "God's radical call to Abram:",
                scripture:
                  '"Now the LORD said to Abram, "Go from your country and your kindred and your father\'s house to the land that I will show you." - Genesis 12:1',
              },
              {
                id: "teach-2-g12-perfected",
                type: "question",
                text: "Three things to leave: country, kindred, father's house. Why this progression from broad to specific?",
                options: [
                  {
                    id: "opt-1",
                    text: "It represents complete detachment from old identity",
                    response: "Exactly! Faith requires leaving security at every level.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It shows the cost of full obedience",
                    response: "Yes! The closest ties are often hardest to surrender.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "It makes Abram completely dependent on God",
                    response: "No fallback positions - only God's provision remains.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-3-g12-perfected",
                type: "narration",
                text: "But God never asks us to empty our hands without filling them with greater promises...",
              },
              {
                id: "teach-4-g12-perfected",
                type: "scripture",
                text: "The seven-fold promise:",
                scripture:
                  '"And I will make of you a great nation, and I will bless you and make your name great, so that you will be a blessing. I will bless those who bless you, and him who dishonors you I will curse, and in you all the families of the earth shall be blessed." - Genesis 12:2-3',
              },
              {
                id: "teach-5-g12-perfected",
                type: "question",
                text: "Seven promises! Which aspect seems most significant to you?",
                options: [
                  {
                    id: "opt-1",
                    text: "The universal scope: 'all families of earth blessed'",
                    response: "Exactly! This shows God's global heart from the beginning.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "The purpose: 'be a blessing' not just be blessed",
                    response: "Yes! God blesses us to bless others, not for selfish enjoyment.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "The divine protection: 'I will curse who curse you'",
                    response: "God takes personally how people treat His chosen ones.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-6-g12-perfected",
                type: "narration",
                text: "Now comes the moment of decision - will this 75-year-old man actually go?",
              },
              {
                id: "teach-7-g12-perfected",
                type: "scripture",
                text: "Abram's response:",
                scripture: '"So Abram went, as the LORD had told him..." - Genesis 12:4',
              },
              {
                id: "teach-8-g12-perfected",
                type: "question",
                text: "Four simple words that change history: 'So Abram went.' What makes this so remarkable?",
                options: [
                  {
                    id: "opt-1",
                    text: "He obeyed without knowing the destination",
                    response: "Exactly! 'The land I will show you' - faith follows without full knowledge.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "He was 75 with a barren wife",
                    response: "Yes! Humanly speaking, it made no sense to start over.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "He left civilization for unknown territory",
                    response: "From urban Ur to nomadic life - huge cultural sacrifice.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-9-g12-perfected",
                type: "narration",
                text: "Abram arrives in Canaan and God appears to him again...",
              },
              {
                id: "teach-10-g12-perfected",
                type: "scripture",
                text: "God confirms the promise:",
                scripture:
                  '"Then the LORD appeared to Abram and said, "To your offspring I will give this land." - Genesis 12:7',
              },
              {
                id: "teach-11-g12-perfected",
                type: "question",
                text: "Why appear again so soon after the initial call? What does Abram need at this moment?",
                options: [
                  {
                    id: "opt-1",
                    text: "Confirmation after the difficult journey",
                    response: "Exactly! God reaffirms His promise when obedience gets hard.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "The specific land promise he could see",
                    response: "Yes! From general 'land I will show' to specific 'this land'.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Encouragement to build an altar and worship",
                    response: "The proper response to God's faithfulness is worship.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-12-g12-perfected",
                type: "narration",
                text: "Abram's response sets a pattern we'll see throughout his life...",
              },
              {
                id: "teach-13-g12-perfected",
                type: "scripture",
                text: "Abram's worship:",
                scripture: '"So he built there an altar to the LORD, who had appeared to him." - Genesis 12:7',
              },
              {
                id: "teach-14-g12-perfected",
                type: "question",
                text: "Why build altars? What do they represent in Abram's journey?",
                options: [
                  {
                    id: "opt-1",
                    text: "Visible reminders of God's faithfulness",
                    response: "Exactly! Stone markers of where God met him.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Acts of worship and dedication",
                    response: "Yes! Giving back to God what God has given.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Claiming territory for Yahweh in pagan land",
                    response: "Worshiping the true God in Canaanite territory.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-15-g12-perfected",
                type: "narration",
                text: "The chapter concludes with Abram continuing his journey of faith...",
              },
              {
                id: "teach-16-g12-perfected",
                type: "scripture",
                text: "The journey continues:",
                scripture: '"And Abram journeyed on, still going toward the Negeb." - Genesis 12:9',
              },
              {
                id: "teach-17-g12-perfected",
                type: "question",
                text: "Faith isn't a one-time event but a continuing journey. What does Abram's ongoing movement teach us?",
                options: [
                  {
                    id: "opt-1",
                    text: "Obedience involves continual following",
                    response: "Exactly! We never 'arrive' spiritually this side of heaven.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Faith means living as a stranger and pilgrim",
                    response: "Yes! Our true citizenship is in heaven, not earthly security.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "God leads step by step, not all at once",
                    response: "We get direction for the next step, not the entire journey.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-preview-12-perfected",
                type: "narration",
                text: "ABRAHAM'S FAITH FULFILLED: This call begins a story that culminates in Christ! Galatians 3 will tell us 'the Scripture foresaw that God would justify the Gentiles by faith, and announced the gospel in advance to Abraham: All nations will be blessed through you.' You and I are part of that blessing promised here!",
              },
            ],
            application: {
              id: "app-12-perfected",
              type: "reflection",
              text: "If God promised to bless Abram so he could be a blessing to others, how should this reshape our understanding of God's blessings in our own lives? Are we hoarding blessings or channeling them to bless others?",
            },
            reflection: {
              id: "refl-12-perfected",
              type: "reflection",
              text: "Like Abram, God calls us to journeys of faith where we must trust His promises more than our security. Where is God inviting you to step out in faith, leaving familiar comforts to follow His leading?",
            },
          },
        },
      ],
    },
  ],
}
