import type { LessonBook } from "./types"

export const GENESIS_LESSONS_1_5: LessonBook = {
  id: "genesis-1-5-enhanced",
  religion: "christianity",
  title: "Genesis - The Foundation",
  description: "From Creation to the Flood - With Enhanced Teaching",
  icon: "🌍",
  testament: "old",
  category: "Pentateuch",
  sections: [
    {
      id: "genesis-creation-enhanced",
      bookId: "genesis",
      title: "The Creation Account",
      description: "God's foundational work with future connections",
      order: 1,
      lessons: [
        {
          id: "lesson-genesis-1-enhanced",
          sectionId: "genesis-creation-enhanced",
          title: "The Creation of the World",
          description: "God brings order from chaos",
          scripture: "Genesis 1:1-2:3",
          estimatedMinutes: 16,
          order: 1,
          locked: false,
          content: {
            introduction: {
              id: "intro-1-enhanced",
              type: "narration",
              text: "Have you ever stood in complete darkness? That moment before the first spark of light appears? Today we're going back to the ultimate 'before' moment - where everything began. What if I told you the first words of the Bible reveal not just how the world started, but why you matter in it?",
              options: [
                {
                  id: "opt-1",
                  text: "I'm ready to explore the beginning",
                  response:
                    "Excellent! Let's discover together how the foundation of everything shapes our understanding of God and ourselves.",
                },
                {
                  id: "opt-2",
                  text: "I've read Genesis before",
                  response:
                    "Wonderful! Even familiar ground can yield new treasures when we look closely. Let's see what fresh insights await.",
                },
                {
                  id: "opt-3",
                  text: "I'm curious about the creation story",
                  response:
                    "Perfect! You're about to encounter one of the most profound and beautiful accounts ever written.",
                },
              ],
            },
            teaching: [
              {
                id: "teach-1-enhanced",
                type: "scripture",
                text: "Let's start with the most famous opening in literature:",
                scripture: '"In the beginning, God created the heavens and the earth." - Genesis 1:1',
              },
              {
                id: "teach-2-enhanced",
                type: "question",
                text: "Many people wonder: Why doesn't the Bible say when God was created? What does this silence teach us about God's nature?",
                options: [
                  {
                    id: "opt-1",
                    text: "God has no beginning - He's eternal",
                    response:
                      "Exactly! The Bible assumes God's eternal nature rather than explaining it. He simply IS.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Some truths are too profound for words",
                    response: "Yes! God's eternity is one of those mysteries we accept by faith.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "It distinguishes God from creation",
                    response: "Important insight! Everything else has a beginning; only God is uncreated.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-3-enhanced",
                type: "narration",
                text: "Now let's look at the scene God steps into:",
              },
              {
                id: "teach-4-enhanced",
                type: "scripture",
                text: "The initial condition of creation:",
                scripture:
                  '"The earth was without form and void, and darkness was over the face of the deep. And the Spirit of God was hovering over the face of the waters." - Genesis 1:2',
              },
              {
                id: "teach-5-enhanced",
                type: "question",
                text: "The Spirit 'hovering' - this word is used elsewhere for a bird caring for its young. What might this suggest about God's relationship to creation?",
                options: [
                  {
                    id: "opt-1",
                    text: "God is intimately involved from the start",
                    response:
                      "Beautiful observation! Even in the chaos, God is present and attentive, like a parent watching over something precious.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Creation is cherished, not just made",
                    response: "Yes! The imagery suggests care and anticipation, not just mechanical construction.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "There's purpose in the chaos",
                    response:
                      "Exactly! God doesn't see the formlessness as a problem to avoid, but as raw material for His masterpiece.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-6-enhanced",
                type: "narration",
                text: "Now watch how God brings order through a beautiful, repeated pattern over six days...",
              },
              {
                id: "teach-7-enhanced",
                type: "scripture",
                text: "The rhythm of creation:",
                scripture:
                  '"And God said, "Let there be light," and there was light. And God saw that the light was good." - Genesis 1:3-4',
              },
              {
                id: "teach-8-enhanced",
                type: "question",
                text: "God speaks creation into existence. What does this tell us about His power and authority?",
                options: [
                  {
                    id: "opt-1",
                    text: "His word has creative power",
                    response:
                      "Exactly! God doesn't build or craft - He speaks, and reality responds. This shows absolute sovereignty.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "He establishes the power of words",
                    response:
                      "Important insight! From the beginning, words matter. They create, define, and bring life.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "It connects to Jesus as the Word",
                    response:
                      "Brilliant! John 1 will later identify Jesus as the Word through whom all things were made.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-9-enhanced",
                type: "narration",
                text: "Let's notice the pattern that develops - separation, filling, and declaration of goodness...",
              },
              {
                id: "teach-10-enhanced",
                type: "scripture",
                text: "The creation of humanity:",
                scripture:
                  '"Then God said, "Let us make man in our image, after our likeness." So God created man in his own image, in the image of God he created him; male and female he created them." - Genesis 1:26-27',
              },
              {
                id: "teach-11-enhanced",
                type: "question",
                text: "'Let US make man in OUR image.' This plural language has fascinated readers for millennia. What might it suggest?",
                options: [
                  {
                    id: "opt-1",
                    text: "A hint of the Trinity",
                    response:
                      "Many see this as an early glimpse of the triune God - Father, Son, and Spirit working together in creation.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "The majesty and complexity of God",
                    response:
                      "Yes! Even in creation, God reveals Himself as beyond simple categories or solitary existence.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "A heavenly council",
                    response:
                      "Some see God addressing angelic beings, though humanity is created in God's image specifically, not theirs.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-12-enhanced",
                type: "narration",
                text: "Now let's consider what being 'image bearers' actually means for us...",
              },
              {
                id: "teach-13-enhanced",
                type: "scripture",
                text: "Our purpose as image-bearers:",
                scripture:
                  '"And God blessed them. And God said to them, "Be fruitful and multiply and fill the earth and subdue it, and have dominion over the fish of the sea and over the birds of the heavens and over every living thing that moves on the earth."" - Genesis 1:28',
              },
              {
                id: "teach-14-enhanced",
                type: "question",
                text: "Based on what we've seen, what does being God's 'image' involve?",
                options: [
                  {
                    id: "opt-1",
                    text: "Representing God's character",
                    response:
                      "Exactly! As kings place images of themselves to represent their authority, we represent God's character and rule.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Creative stewardship of creation",
                    response:
                      "Yes! 'Subdue' and 'have dominion' mean caring for creation as God would - with wisdom, love, and responsibility.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Relational capacity like God's",
                    response:
                      "Beautiful insight! Just as God exists in relationship (Father, Son, Spirit), we're made for relationship with God and each other.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-15-enhanced",
                type: "narration",
                text: "Finally, God does something remarkable - He rests...",
              },
              {
                id: "teach-16-enhanced",
                type: "scripture",
                text: "The seventh day:",
                scripture:
                  '"And on the seventh day God finished his work that he had done, and he rested on the seventh day from all his work that he had done. So God blessed the seventh day and made it holy." - Genesis 2:2-3',
              },
              {
                id: "teach-17-enhanced",
                type: "question",
                text: "Why would an all-powerful God need to 'rest'? What's really happening here?",
                options: [
                  {
                    id: "opt-1",
                    text: "He's modeling a rhythm for us",
                    response:
                      "Exactly! God establishes a pattern of work and rest that reflects His wisdom for human flourishing.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "He's enjoying His completed work",
                    response:
                      "Yes! This is the rest of satisfaction, celebration, and enjoyment of something perfectly accomplished.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "He's declaring creation 'complete'",
                    response:
                      "Important insight! The rest signals that nothing needs to be added - creation is whole, functional, and very good.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-preview-1",
                type: "narration",
                text: "FASCINATING PREVIEW: John's Gospel begins with the exact same words - 'In the beginning' - but reveals something astonishing about who was there with God from the start. We'll explore this profound connection when we reach the New Testament!",
              },
            ],
            application: {
              id: "app-1-enhanced",
              type: "reflection",
              text: "You are made in God's image. How does this truth impact how you see yourself and your purpose this week?",
            },
            reflection: {
              id: "refl-1-enhanced",
              type: "reflection",
              text: "God saw all He made and called it 'very good.' What aspects of creation most remind you of God's goodness and character?",
            },
          },
        },
        {
          id: "lesson-genesis-2-enhanced",
          sectionId: "genesis-creation-enhanced",
          title: "The Creation of Man and Woman",
          description: "The crown of creation",
          scripture: "Genesis 2:4-25",
          estimatedMinutes: 15,
          order: 2,
          locked: true,
          content: {
            introduction: {
              id: "intro-2-enhanced",
              type: "narration",
              text: "Have you ever received a gift so personal, so perfectly suited to you, it felt like the giver knew you better than you know yourself? Today we're looking at the most personal act of creation - the crafting of humanity. What if the details of how God made us reveal why we matter so deeply to Him?",
              options: [
                {
                  id: "opt-1",
                  text: "I'm curious about humanity's special creation",
                  response:
                    "Wonderful! You're about to discover some of the most intimate details of God's creative work.",
                },
                {
                  id: "opt-2",
                  text: "I want to understand our purpose better",
                  response: "Perfect! This passage reveals not just how we were made, but why we were made.",
                },
                {
                  id: "opt-3",
                  text: "Ready to explore!",
                  response: "Excellent! Let's dive into what makes human creation unique in all of God's work.",
                },
              ],
            },
            teaching: [
              {
                id: "teach-1-g2",
                type: "scripture",
                text: "Notice how this account focuses specifically on humanity's creation:",
                scripture:
                  '"then the LORD God formed the man of dust from the ground and breathed into his nostrils the breath of life, and the man became a living creature." - Genesis 2:7',
              },
              {
                id: "teach-2-g2",
                type: "question",
                text: "Many people ask: If we're made from dust, does that mean we're not special? What does being 'dust + God's breath' actually mean for our value?",
                options: [
                  {
                    id: "opt-1",
                    text: "Our value comes from God's breath, not our dust",
                    response: "Exactly! The dust is common, but God's breath makes us uniquely valuable.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "We're both humble and exalted",
                    response: "Yes! The dust keeps us humble; God's breath gives us infinite worth.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "It shows we need God to truly live",
                    response: "Beautiful insight! Without God's breath, we're just dust - we need Him for true life.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-3-g2",
                type: "narration",
                text: "Now watch what happens when God places Adam in the garden...",
              },
              {
                id: "teach-4-g2",
                type: "scripture",
                text: "Humanity's first responsibility:",
                scripture:
                  '"The LORD God took the man and put him in the garden of Eden to work it and keep it." - Genesis 2:15',
              },
              {
                id: "teach-5-g2",
                type: "question",
                text: "Work is part of paradise? What does this tell us about God's design for humanity?",
                options: [
                  {
                    id: "opt-1",
                    text: "Work is inherently good, not a curse",
                    response:
                      "Exactly! Work becomes toil after the fall, but meaningful labor is part of God's good design.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "We're designed for purpose and contribution",
                    response: "Yes! Even in perfection, humans need meaningful work and responsibility.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "We're stewards, not owners",
                    response:
                      "Important insight! Adam 'keeps' what belongs to God - a model for our relationship with creation.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-6-g2",
                type: "narration",
                text: "But then God makes a surprising observation...",
              },
              {
                id: "teach-7-g2",
                type: "scripture",
                text: "The first 'not good' in creation:",
                scripture:
                  '"Then the LORD God said, "It is not good that the man should be alone; I will make him a helper fit for him."" - Genesis 2:18',
              },
              {
                id: "teach-8-g2",
                type: "question",
                text: "After repeatedly calling creation 'good,' God says something is 'not good.' Why is solitude incompatible with God's design?",
                options: [
                  {
                    id: "opt-1",
                    text: "We're made for relationship",
                    response: "Exactly! As image-bearers of a relational God, we reflect Him through community.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Completeness requires complementarity",
                    response: "Yes! 'Helper fit for him' suggests partnership and mutual completion.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Isolation contradicts God's nature",
                    response:
                      "Beautiful insight! The triune God exists in eternal relationship - solitude cannot be 'good.'",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-9-g2",
                type: "narration",
                text: "Watch how God solves this problem in the most dramatic way...",
              },
              {
                id: "teach-10-g2",
                type: "scripture",
                text: "The creation of woman:",
                scripture:
                  '"So the LORD God caused a deep sleep to fall upon the man, and while he slept took one of his ribs and closed up its place with flesh. And the rib that the LORD God had taken from the man he made into a woman and brought her to the man." - Genesis 2:21-22',
              },
              {
                id: "teach-11-g2",
                type: "question",
                text: "Why create woman from man's rib rather than from dust like Adam?",
                options: [
                  {
                    id: "opt-1",
                    text: "To show essential unity and equality",
                    response: "Exactly! She's made from the same substance, not inferior material.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "To demonstrate intimate connection",
                    response: "Yes! The rib comes from near the heart, suggesting closeness and protection.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "To establish marriage as reunification",
                    response: "Beautiful! In marriage, what was separated becomes one again.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-12-g2",
                type: "scripture",
                text: "Adam's poetic response:",
                scripture:
                  '"Then the man said, "This at last is bone of my bones and flesh of my flesh; she shall be called Woman, because she was taken out of Man."" - Genesis 2:23',
              },
              {
                id: "teach-13-g2",
                type: "narration",
                text: "This is the first recorded human speech - and it's poetry celebrating relationship!",
              },
              {
                id: "teach-preview-2",
                type: "narration",
                text: "COMING ATTRACTION: This intimate picture of God forming humanity will find its ultimate expression when Jesus - called the 'last Adam' - restores what the first Adam lost. Paul develops this amazing contrast in 1 Corinthians 15!",
              },
            ],
            application: {
              id: "app-2-enhanced",
              type: "reflection",
              text: "You are personally formed by God and designed for relationship. How does this truth affect how you view yourself and your connections with others?",
            },
            reflection: {
              id: "refl-2-enhanced",
              type: "reflection",
              text: "God declared it 'not good' for humans to be alone. What relationships in your life reflect God's design for community?",
            },
          },
        },
        {
          id: "lesson-genesis-3-enhanced",
          sectionId: "genesis-creation-enhanced",
          title: "The Fall into Sin",
          description: "Disobedience and its consequences",
          scripture: "Genesis 3:1-24",
          estimatedMinutes: 17,
          order: 3,
          locked: true,
          content: {
            introduction: {
              id: "intro-3-enhanced",
              type: "narration",
              text: "Have you ever experienced that moment when a single choice changes everything? The point of no return? Today we're witnessing humanity's ultimate turning point - the moment perfection was lost. What if understanding this ancient story helps us recognize the same patterns in our own lives?",
              options: [
                {
                  id: "opt-1",
                  text: "I'm ready to understand the fall",
                  response: "This is a crucial story that explains so much about our world and ourselves.",
                },
                {
                  id: "opt-2",
                  text: "I've wondered why there's suffering",
                  response: "This passage provides the biblical answer to that profound question.",
                },
                {
                  id: "opt-3",
                  text: "Let's explore what went wrong",
                  response: "Perfect! Understanding the problem is the first step to appreciating the solution.",
                },
              ],
            },
            teaching: [
              {
                id: "teach-1-g3",
                type: "scripture",
                text: "The story begins with a subtle distortion:",
                scripture:
                  '"He said to the woman, \\"Did God actually say, \'You shall not eat of any tree in the garden\'?\\" - Genesis 3:1',
              },
              {
                id: "teach-2-g3",
                type: "question",
                text: "Many people ask: Why would God put the forbidden tree in the garden anyway? Was He setting them up to fail?",
                options: [
                  {
                    id: "opt-1",
                    text: "Love requires free choice",
                    response: "Exactly! Without the ability to disobey, obedience would be meaningless.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It established a relationship boundary",
                    response: "Yes! The tree defined their relationship with God - trust and obedience.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "It reminded them of their dependence",
                    response: "Important insight! The tree was a daily reminder they weren't autonomous.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-3-g3",
                type: "narration",
                text: "Watch how Eve responds - and subtly changes God's command herself...",
              },
              {
                id: "teach-4-g3",
                type: "scripture",
                text: "Eve's modified version:",
                scripture:
                  '"And the woman said to the serpent, \\"We may eat of the fruit of the trees in the garden, but God said, \'You shall not eat of the fruit of the tree that is in the midst of the garden, neither shall you touch it, lest you die.\'\\" - Genesis 3:2-3',
              },
              {
                id: "teach-5-g3",
                type: "question",
                text: "Eve adds 'neither shall you touch it' - something God never said. Why is this dangerous?",
                options: [
                  {
                    id: "opt-1",
                    text: "It makes God seem more restrictive than He is",
                    response: "Exactly! Adding to God's commands can make Him appear unreasonable.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It shows she's already doubting God's goodness",
                    response: "Yes! The addition suggests she's starting to see God's boundary as oppressive.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "It demonstrates the slippery slope of compromise",
                    response: "Important observation! Small distortions prepare the way for major disobedience.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-6-g3",
                type: "narration",
                text: "Now the serpent moves from questioning to outright contradiction...",
              },
              {
                id: "teach-7-g3",
                type: "scripture",
                text: "The direct lie:",
                scripture:
                  '"But the serpent said to the woman, \\"You will not surely die. For God knows that when you eat of it your eyes will be opened, and you will be like God, knowing good and evil.\\" - Genesis 3:4-5',
              },
              {
                id: "teach-8-g3",
                type: "question",
                text: "The serpent promises they'll 'be like God.' What's the irony here?",
                options: [
                  {
                    id: "opt-1",
                    text: "They're already made in God's image",
                    response: "Exactly! They're trying to become what they already are by rejecting their Creator.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "True godlikeness comes through obedience",
                    response: "Yes! They could have become more like God by trusting His wisdom, not defying it.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "The promise contains a twisted truth",
                    response: "Their eyes were opened, but to shame and brokenness, not to divine glory.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-9-g3",
                type: "narration",
                text: "The moment of decision arrives...",
              },
              {
                id: "teach-10-g3",
                type: "scripture",
                text: "The three-fold temptation:",
                scripture:
                  '"So when the woman saw that the tree was good for food, and that it was a delight to the eyes, and that the tree was to be desired to make one wise, she took of its fruit and ate, and she also gave some to her husband who was with her, and he ate." - Genesis 3:6',
              },
              {
                id: "teach-11-g3",
                type: "question",
                text: "John later identifies these three temptations. What do they represent?",
                options: [
                  {
                    id: "opt-1",
                    text: "The lust of the flesh",
                    response: "Yes! 'Good for food' - physical desires overriding spiritual obedience.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "The lust of the eyes",
                    response: "Exactly! 'Delight to the eyes' - being drawn by appearance over substance.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "The pride of life",
                    response: "Yes! 'Desired to make one wise' - wanting autonomy from God.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-12-g3",
                type: "narration",
                text: "Immediately, everything changes...",
              },
              {
                id: "teach-13-g3",
                type: "scripture",
                text: "The immediate consequences:",
                scripture:
                  '"Then the eyes of both were opened, and they knew that they were naked. And they sewed fig leaves together and made themselves loincloths." - Genesis 3:7',
              },
              {
                id: "teach-14-g3",
                type: "question",
                text: "Why does sin immediately produce shame?",
                options: [
                  {
                    id: "opt-1",
                    text: "Shame is the appropriate response to broken relationship",
                    response: "Exactly! Their openness with God and each other is now broken.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "They've become aware of their vulnerability",
                    response: "Yes! Innocence is lost, and they feel exposed and unsafe.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Their self-perception has been distorted",
                    response: "Important insight! They now see themselves as inadequate and needing to hide.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-15-g3",
                type: "narration",
                text: "But notice what happens when God comes looking...",
              },
              {
                id: "teach-16-g3",
                type: "scripture",
                text: "God's pursuit:",
                scripture: '"But the LORD God called to the man and said to him, \\"Where are you?\\" - Genesis 3:9',
              },
              {
                id: "teach-17-g3",
                type: "question",
                text: "God asks 'Where are you?' What does this reveal about His character?",
                options: [
                  {
                    id: "opt-1",
                    text: "He seeks the lost",
                    response: "Beautiful! Even in their sin, God comes looking for them.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "He gives opportunity for confession",
                    response: "Yes! The question invites honesty and repentance.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "He knows where they are but wants them to acknowledge it",
                    response: "Exactly! This is a relational question, not an informational one.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-18-g3",
                type: "narration",
                text: "The consequences unfold, but watch for the glimmer of hope...",
              },
              {
                id: "teach-19-g3",
                type: "scripture",
                text: "The first gospel promise:",
                scripture:
                  '"I will put enmity between you and the woman, and between your offspring and her offspring; he shall bruise your head, and you shall bruise his heel." - Genesis 3:15',
              },
              {
                id: "teach-20-g3",
                type: "question",
                text: "This is called the 'protoevangelium' - first gospel. What makes it so significant?",
                options: [
                  {
                    id: "opt-1",
                    text: "It promises a Savior who will defeat Satan",
                    response: "Exactly! The 'offspring' who will crush the serpent's head points to Christ.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It shows God's plan for redemption begins immediately",
                    response: "Yes! Even in judgment, God provides hope and a way back.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "It reveals the cost of salvation",
                    response: "The 'bruised heel' hints at the suffering the Savior would endure.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-preview-3",
                type: "narration",
                text: "FUTURE REVELATION: This first sin affects every one of us in ways we'll explore throughout Scripture. Paul will later explain in Romans how Adam's disobedience made us all sinners, while Christ's obedience offers us righteousness. This is just the beginning of the story!",
              },
            ],
            application: {
              id: "app-3-enhanced",
              type: "reflection",
              text: "The serpent's tactics haven't changed - he still twists God's words and questions His goodness. Where do you see these same patterns in temptations you face?",
            },
            reflection: {
              id: "refl-3-enhanced",
              type: "reflection",
              text: "God came looking for Adam and Eve in their shame. How have you experienced God seeking you out in your moments of failure or hiding?",
            },
          },
        },
        {
          id: "lesson-genesis-4-enhanced",
          sectionId: "genesis-creation-enhanced",
          title: "Cain and Abel",
          description: "The first family and the first murder",
          scripture: "Genesis 4:1-26",
          estimatedMinutes: 15,
          order: 4,
          locked: true,
          content: {
            introduction: {
              id: "intro-4-enhanced",
              type: "narration",
              text: "Have you ever felt the sting of rejection? Watched someone else receive what you desperately wanted? Today we're witnessing the first family drama - a story of worship, jealousy, and the tragic consequences of unchecked sin. What if this ancient conflict reveals patterns we still struggle with today?",
              options: [
                {
                  id: "opt-1",
                  text: "I'm curious about this first family conflict",
                  response: "This story reveals so much about human nature and God's justice.",
                },
                {
                  id: "opt-2",
                  text: "I want to understand God's response to evil",
                  response: "Perfect! This passage shows both God's justice and His mercy.",
                },
                {
                  id: "opt-3",
                  text: "Ready to explore!",
                  response: "Excellent! Let's discover what this foundational story teaches us.",
                },
              ],
            },
            teaching: [
              {
                id: "teach-1-g4",
                type: "scripture",
                text: "The story begins with two very different offerings:",
                scripture:
                  '"In the course of time Cain brought to the LORD an offering of the fruit of the ground, and Abel also brought of the firstborn of his flock and of their fat portions. And the LORD had regard for Abel and his offering, but for Cain and his offering he had no regard." - Genesis 4:3-5',
              },
              {
                id: "teach-2-g4",
                type: "question",
                text: "Many people wonder: Was it fair for God to reject Cain's offering? Why would God care how they worshiped?",
                options: [
                  {
                    id: "opt-1",
                    text: "God looks at the heart, not just the action",
                    response: "Exactly! Hebrews tells us Abel offered 'by faith' - the attitude mattered most.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Worship should cost us something",
                    response: "Yes! Abel gave his best; Cain just went through the motions.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "It revealed their view of God",
                    response: "Their offerings showed what they thought God deserved.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-3-g4",
                type: "narration",
                text: "Watch how God responds to Cain's anger...",
              },
              {
                id: "teach-4-g4",
                type: "scripture",
                text: "God's warning to Cain:",
                scripture:
                  '"The LORD said to Cain, \\"Why are you angry, and why has your face fallen? If you do well, will you not be accepted? And if you do not do well, sin is crouching at the door. Its desire is for you, but you must rule over it.\\" - Genesis 4:6-7',
              },
              {
                id: "teach-5-g4",
                type: "question",
                text: "God describes sin as 'crouching at the door.' What does this vivid imagery teach us?",
                options: [
                  {
                    id: "opt-1",
                    text: "Sin is an active force waiting to pounce",
                    response: "Exactly! It's not passive - it lurks, ready to seize opportunity.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "We have responsibility to resist sin",
                    response: "Yes! 'You must rule over it' - God holds us accountable for our choices.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Anger gives sin an opening",
                    response: "Important insight! Unchecked emotion creates vulnerability to sin's attack.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-6-g4",
                type: "narration",
                text: "Tragically, Cain ignores God's warning...",
              },
              {
                id: "teach-7-g4",
                type: "scripture",
                text: "The first murder:",
                scripture:
                  '"Cain spoke to Abel his brother. And when they were in the field, Cain rose up against his brother Abel and killed him." - Genesis 4:8',
              },
              {
                id: "teach-8-g4",
                type: "question",
                text: "What's significant about this being the first recorded death in Scripture?",
                options: [
                  {
                    id: "opt-1",
                    text: "It shows sin's rapid escalation",
                    response: "Exactly! From disobedience to murder in one generation.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It reveals the ultimate cost of sin",
                    response: "Yes! Sin always leads to death - physically and spiritually.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "It demonstrates broken relationships",
                    response: "The first death comes through violence, not natural causes.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-9-g4",
                type: "narration",
                text: "God confronts Cain with a question that echoes through history...",
              },
              {
                id: "teach-10-g4",
                type: "scripture",
                text: "God's confrontation:",
                scripture:
                  '"Then the LORD said to Cain, \\"Where is Abel your brother?\\" He said, \\"I do not know; am I my brother\'s keeper?\\" - Genesis 4:9',
              },
              {
                id: "teach-11-g4",
                type: "question",
                text: "Cain's response 'am I my brother's keeper?' has become famous. What does it reveal about his heart?",
                options: [
                  {
                    id: "opt-1",
                    text: "Complete lack of responsibility",
                    response: "Exactly! He denies both knowledge and obligation.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Defiance toward God's authority",
                    response: "Yes! The question challenges God's right to hold him accountable.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "The ultimate expression of selfishness",
                    response: "He sees no connection or duty toward his own brother.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-12-g4",
                type: "narration",
                text: "Justice comes, but notice God's surprising mercy...",
              },
              {
                id: "teach-13-g4",
                type: "scripture",
                text: "Cain's punishment and protection:",
                scripture:
                  '"And the LORD put a mark on Cain, lest any who found him should attack him." - Genesis 4:15',
              },
              {
                id: "teach-14-g4",
                type: "question",
                text: "Why would God protect a murderer?",
                options: [
                  {
                    id: "opt-1",
                    text: "To demonstrate His mercy even in judgment",
                    response: "Yes! God's justice doesn't cancel His compassion.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "To preserve human life which bears God's image",
                    response: "Important insight! Even a murderer still carries God's image.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "To show that vengeance belongs to God",
                    response: "Exactly! God reserves the right to judge and punish.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-15-g4",
                type: "narration",
                text: "The chapter ends with a glimmer of hope...",
              },
              {
                id: "teach-16-g4",
                type: "scripture",
                text: "The beginning of worship:",
                scripture: '"At that time people began to call upon the name of the LORD." - Genesis 4:26',
              },
              {
                id: "teach-17-g4",
                type: "question",
                text: "Despite the spread of sin, worship continues. What does this teach us?",
                options: [
                  {
                    id: "opt-1",
                    text: "God preserves a remnant who seek Him",
                    response: "Yes! Even in dark times, some continue to worship.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Worship is the proper human response to God",
                    response: "Exactly! Calling on God's name acknowledges His sovereignty.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "Hope persists despite human failure",
                    response: "The story doesn't end with Cain - God's purposes continue.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-preview-4",
                type: "narration",
                text: "BIBLICAL PATTERN EMERGING: This theme of acceptable vs unacceptable worship will recur throughout Scripture. From Nadab and Abihu's strange fire to Ananias and Sapphira's deception, God consistently cares about HOW we approach Him. This principle finds its ultimate expression in Jesus' teaching about worshiping 'in spirit and truth'!",
              },
            ],
            application: {
              id: "app-4-enhanced",
              type: "reflection",
              text: "God warned Cain that sin was 'crouching at the door.' Where do you see sin crouching at your door, and how can you 'rule over it' as God commanded?",
            },
            reflection: {
              id: "refl-4-enhanced",
              type: "reflection",
              text: "Cain asked 'am I my brother's keeper?' How does your life answer that question in your relationships and community?",
            },
          },
        },
        {
          id: "lesson-genesis-5-enhanced",
          sectionId: "genesis-creation-enhanced",
          title: "The Line of Seth and Noah",
          description: "Grace in the midst of wickedness",
          scripture: "Genesis 5:1-6:8",
          estimatedMinutes: 13,
          order: 5,
          locked: true,
          content: {
            introduction: {
              id: "intro-5-enhanced",
              type: "narration",
              text: "Have you ever looked at your family tree and wondered about the stories behind the names? Today we're exploring one of the most significant genealogies in Scripture - a family line that carries both humanity's hope and God's judgment. What if these ancient names reveal patterns that still shape our world today?",
              options: [
                {
                  id: "opt-1",
                  text: "I'm curious about these genealogies",
                  response: "They're more than just names - they tell a story of God's faithfulness.",
                },
                {
                  id: "opt-2",
                  text: "I want to understand the context for Noah",
                  response: "Perfect! This sets the stage for one of Scripture's most dramatic stories.",
                },
                {
                  id: "opt-3",
                  text: "Ready to explore the family line!",
                  response: "Excellent! Let's discover what these generations reveal.",
                },
              ],
            },
            teaching: [
              {
                id: "teach-1-g5",
                type: "scripture",
                text: "The chapter begins by reaffirming humanity's special creation:",
                scripture:
                  '"When God created man, he made him in the likeness of God. Male and female he created them, and he blessed them and named them Man when they were created." - Genesis 5:1-2',
              },
              {
                id: "teach-2-g5",
                type: "question",
                text: "Many people ask: Why include all these names and ages? What's the point of reading 'so-and-so lived X years and died' over and over?",
                options: [
                  {
                    id: "opt-1",
                    text: "It shows God keeps His promises across generations",
                    response: "Exactly! The line continues despite sin and death.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It traces the Messianic line",
                    response: "Yes! This genealogy eventually leads to Abraham, David, and Jesus.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "It reminds us of death's reality",
                    response: "The repeated 'and he died' emphasizes sin's universal consequence.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-3-g5",
                type: "narration",
                text: "The genealogy follows a repeated pattern, but watch for the breaks in the pattern...",
              },
              {
                id: "teach-4-g5",
                type: "scripture",
                text: "The pattern and its exception:",
                scripture:
                  '"Thus all the days that Adam lived were 930 years, and he died... Thus all the days of Enoch were 365 years. Enoch walked with God, and he was not, for God took him." - Genesis 5:5, 23-24',
              },
              {
                id: "teach-5-g5",
                type: "question",
                text: "Enoch breaks the 'and he died' pattern. What makes his life so special?",
                options: [
                  {
                    id: "opt-1",
                    text: "He 'walked with God' intimately",
                    response: "Exactly! This close relationship resulted in bypassing death.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "He demonstrates God's reward for faithfulness",
                    response: "Yes! His life shows that relationship with God transforms our destiny.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "He points to resurrection hope",
                    response: "His translation foreshadows eternal life with God.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-6-g5",
                type: "narration",
                text: "The genealogy continues to Noah, whose name means 'rest'...",
              },
              {
                id: "teach-7-g5",
                type: "scripture",
                text: "Noah's significance:",
                scripture:
                  '"Out of the ground that the LORD has cursed, this one shall bring us relief from our work and from the painful toil of our hands." - Genesis 5:29',
              },
              {
                id: "teach-8-g5",
                type: "question",
                text: "Noah's name means 'rest.' What kind of 'rest' might he bring?",
                options: [
                  {
                    id: "opt-1",
                    text: "Temporary relief through agriculture",
                    response: "Possibly! Some see this as hope for better farming conditions.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Spiritual rest from sin's curse",
                    response: "Yes! Ultimately, true rest comes from God's redemption.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "A foreshadowing of Christ's rest",
                    response: "Matthew 11:28 connects ultimate rest to Jesus.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-9-g5",
                type: "narration",
                text: "But as the population grows, so does the problem...",
              },
              {
                id: "teach-10-g5",
                type: "scripture",
                text: "The spread of wickedness:",
                scripture:
                  '"The LORD saw that the wickedness of man was great in the earth, and that every intention of the thoughts of his heart was only evil continually." - Genesis 6:5',
              },
              {
                id: "teach-11-g5",
                type: "question",
                text: "Notice the comprehensive description of human corruption. What does this reveal?",
                options: [
                  {
                    id: "opt-1",
                    text: "Sin has infected every aspect of humanity",
                    response: "Exactly! 'Every intention... only evil continually' shows total depravity.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "The heart is the source of the problem",
                    response: "Yes! External behavior flows from internal corruption.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "This justifies God's coming judgment",
                    response: "The universal wickedness demands a righteous response.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-12-g5",
                type: "narration",
                text: "In the midst of this darkness, one man stands out...",
              },
              {
                id: "teach-13-g5",
                type: "scripture",
                text: "Noah finds grace:",
                scripture:
                  '"But Noah found favor in the eyes of the LORD... Noah was a righteous man, blameless in his generation. Noah walked with God." - Genesis 6:8-9',
              },
              {
                id: "teach-14-g5",
                type: "question",
                text: "Noah 'found favor' - the first use of this grace language. What's significant?",
                options: [
                  {
                    id: "opt-1",
                    text: "Salvation always begins with God's initiative",
                    response: "Exactly! Noah doesn't earn favor - he finds it as God's gift.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "Righteousness is possible by God's grace",
                    response: "Yes! In a wicked generation, God enables someone to live rightly.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "God preserves a remnant",
                    response: "Even in judgment, God saves those who walk with Him.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-preview-5",
                type: "narration",
                text: "GENEALOGY PATTERN DEVELOPING: Pay attention to these family lines! This genealogy from Adam to Noah establishes a pattern we'll see repeated with Abraham's family, David's line, and ultimately Jesus' genealogy. God works through specific families to accomplish His salvation purposes across history!",
              },
            ],
            application: {
              id: "app-5-enhanced",
              type: "reflection",
              text: "Both Enoch and Noah 'walked with God' in their generations. What does 'walking with God' look like in your specific context and generation?",
            },
            reflection: {
              id: "refl-5-enhanced",
              type: "reflection",
              text: "Noah found grace amid widespread wickedness. How have you experienced God's grace standing out against the backdrop of brokenness in our world?",
            },
          },
        },
      ],
    },
  ],
}
