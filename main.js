const btn = document.querySelector(".btn");
const main = document.querySelector(".main");
const quote = document.querySelector(".quote");
const quoteText = document.querySelector(".quote-text");
const quoteAuthor = document.querySelector(".quote-author");

const randomAPI = [
  {
    author: "Mark Caine",
    quote: "The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.",
  },
  {
    author: "Dr. Suess",
  },
  {
    quote: "You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.",
  },
  {
    author: "Marilyn Monroe",
    quote: "I’m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can’t handle me at my worst, then you sure as hell don’t deserve me at my best.",
  },
  {
    author: "Stephen King",
    quote: "Get busy living or get busy dying.",
  },
  {
    author: "Helen Keller",
    quote: "When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.",
  },
  {
    author: "Nelson Mandela",
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall",
  },
  {
    author: "Walt Disney",
    quote: "The way to get started is to quit talking and begin doing.",
  },
  {
    author: "Steve Jobs",
    quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
  },
  {
    author: "Eleanor Roosevelt",
    quote: "If life were predictable it would cease to be life, and be without flavor.",
  },
  {
    author: "Oprah Winfrey",
    quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
  },
  {
    author: "James Cameron",
    quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
  },
  {
    author: "John Lennon",
    quote: "Life is what happens when you're busy making other plans.",
  },
  {
    author: "Mother Teresa",
    quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
  },
  {
    author: "Franklin D. Roosevelt",
    quote: "When you reach the end of your rope, tie a knot in it and hang on.",
  },
  {
    author: "Margaret Mead",
    quote: "Always remember that you are absolutely unique. Just like everyone else.",
  },
  {
    author: "Robert Louis Stevenson",
    quote: "Don't judge each day by the harvest you reap but by the seeds that you plant.",
  },
  {
    author: "Eleanor Roosevelt",
    quote: "The future belongs to those who believe in the beauty of their dreams.",
  },
  {
    author: "Benjamin Franklin",
    quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
  },
  {
    author: "Helen Keller",
    quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
  },
  {
    author: "Aristotle",
    quote: "It is during our darkest moments that we must focus to see the light.",
  },
  {
    author: "Lord Bryon",
    quote: "Friendship is Love without his wings",
  },
  {
    author: "Sidney Hook",
    quote: "Wisdom is a kind of knowledge. It is knowledge of the nature, career, and consequences of human values.",
  },
  {
    author: "Thomas Edison",
    quote: "The three great essentials to achieve anything worth while are: Hard work, Stick-to-itiveness, and Common sense.",
  },
  {
    author: "Vusi Mahlasela",
    quote: "If you are bitter, you are like a dry leaf that you can just squash, and you can get blown away by the wind. There is much more wisdom in forgiveness.",
  },
  {
    author: "Nathaniel Hawthorne",
    quote: "The greatest obstacle to being heroic is the doubt whether one may not be going to prove one's self a fool; the truest heroism is to resist the doubt; and the profoundest wisdom, to know when it ought to be resisted, and when it be obeyed.",
  },
  {
    author: "Henri Bergson",
    quote: "The eye sees only what the mind is prepared to comprehend.",
  },
  {
    author: "Bruce Lee",
    quote: "Take things as they are. Punch when you have to punch. Kick when you have to kick.",
    "author": "Bruce Lee",
  },
  {
    author: "Jimi Hendrix",
    quote: "Knowledge speaks, but wisdom listens.",
  },
  {
    author: "Blaise Pascal",
    quote: "Kind words do not cost much. Yet they accomplish much.",
  },
  {
    author: "Naguib Mahfouz",
    quote: "You can tell whether a man is clever by his answers. You can tell whether a man is wise by his questions.",
  },
];

btn.addEventListener("click", () => {
  const num = Math.round(Math.random() * 30);

  if (quote.classList.contains("d-none")) {
    quote.classList.remove("d-none");
  }
  quoteText.textContent = `"${randomAPI[num].quote}"`;
  quoteAuthor.textContent = randomAPI[num].author;
});