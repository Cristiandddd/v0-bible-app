import type { LessonBook } from "./types"

export const GENESIS_LESSON_1: LessonBook = {
  id: "genesis-1",
  religion: "christianity",
  title: "Genesis",
  description: "In the Beginning - God's Masterpiece",
  icon: "🌌",
  testament: "old",
  category: "Pentateuch",
  sections: [
    {
      id: "genesis-creation",
      bookId: "genesis",
      title: "The Creation Account",
      description: "God's foundational work",
      order: 1,
      lessons: [
        {
          id: "lesson-genesis-1",
          sectionId: "genesis-creation",
          title: "The Creation of the World",
          description: "God brings order from chaos",
          scripture: "Genesis 1:1-2:3",
          estimatedMinutes: 15,
          order: 1,
          locked: false,
          content: {
            introduction: {
              id: "intro-1",
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
                id: "teach-1",
                type: "scripture",
                text: "Let's start with the most famous opening in literature:",
                scripture: '"In the beginning, God created the heavens and the earth." - Genesis 1:1',
              },
              {
                id: "teach-2",
                type: "question",
                text: "Notice what's missing from this opening? There's no argument for God's existence - it's assumed. Why do you think the Bible starts this way?",
                options: [
                  {
                    id: "opt-1",
                    text: "It establishes God as the ultimate reality",
                    response:
                      "Exactly! The Bible doesn't try to prove God exists - it begins with Him as the fundamental truth everything else depends on.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-2",
                    text: "It shows creation has a purposeful beginning",
                    response:
                      "Spot on! 'In the beginning' immediately tells us the universe isn't eternal or accidental. It had a start, and that start had a Starter.",
                    isCorrect: true,
                  },
                  {
                    id: "opt-3",
                    text: "It contrasts with other ancient creation stories",
                    response:
                      "Great insight! Unlike pagan myths where gods emerge from chaos, here God stands outside and before everything, sovereign over all.",
                    isCorrect: true,
                  },
                ],
                helpAvailable: true,
              },
              {
                id: "teach-3",
                type: "narration",
                text: "Now let's look at the scene God steps into:",
              },
              {
                id: "teach-4",
                type: "scripture",
                text: "The initial condition of creation:",
                scripture:
                  '"The earth was without form and void, and darkness was over the face of the deep. And the Spirit of God was hovering over the face of the waters." - Genesis 1:2',
              },
              {
                id: "teach-5",
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
                id: "teach-6",
                type: "narration",
                text: "Now watch how God brings order through a beautiful, repeated pattern over six days...",
              },
              {
                id: "teach-7",
                type: "scripture",
                text: "The rhythm of creation:",
                scripture:
                  '"And God said, "Let there be light," and there was light. And God saw that the light was good." - Genesis 1:3-4',
              },
              {
                id: "teach-8",
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
                id: "teach-9",
                type: "narration",
                text: "Let's notice the pattern that develops - separation, filling, and declaration of goodness...",
              },
              {
                id: "teach-10",
                type: "scripture",
                text: "The creation of humanity:",
                scripture:
                  '"Then God said, "Let us make man in our image, after our likeness." So God created man in his own image, in the image of God he created him; male and female he created them." - Genesis 1:26-27',
              },
              {
                id: "teach-11",
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
                id: "teach-12",
                type: "narration",
                text: "Now let's consider what being 'image bearers' actually means for us...",
              },
              {
                id: "teach-13",
                type: "scripture",
                text: "Our purpose as image-bearers:",
                scripture:
                  '"And God blessed them. And God said to them, "Be fruitful and multiply and fill the earth and subdue it, and have dominion over the fish of the sea and over the birds of the heavens and over every living thing that moves on the earth."" - Genesis 1:28',
              },
              {
                id: "teach-14",
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
                id: "teach-15",
                type: "narration",
                text: "Finally, God does something remarkable - He rests...",
              },
              {
                id: "teach-16",
                type: "scripture",
                text: "The seventh day:",
                scripture:
                  '"And on the seventh day God finished his work that he had done, and he rested on the seventh day from all his work that he had done. So God blessed the seventh day and made it holy." - Genesis 2:2-3',
              },
              {
                id: "teach-17",
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
            ],
            application: {
              id: "app-1",
              type: "reflection",
              text: "You are made in God's image. How does this truth impact how you see yourself and your purpose this week?",
            },
            reflection: {
              id: "refl-1",
              type: "reflection",
              text: "God saw all He made and called it 'very good.' What aspects of creation most remind you of God's goodness and character?",
            },
          },
        },
      ],
    },
  ],
}
