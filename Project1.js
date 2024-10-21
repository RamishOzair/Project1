let readlineSync = require("readline-sync");

let kuler = require("kuler");
let score = 0;
console.log(kuler("        The Quiz Master is here to assess you!\n", "#22c55e"))

let userName = readlineSync.question("What's your name? ");
console.log(kuler(`\nHello ${userName}, Welcome to QuizMaster!`,"#facc15") )

/** Creating data set */

const database = {
  data: [
    {
      question: `let a = {}, b = {},
console.log(a == b)
console.log(a === b)`,
      options: {
        a: "false false",
        b: "false true",
        c: "true false",
        d: "true true",
      },
      correctAnswer: "a",
    },
    {
      question: "Object.assign(target, source) creates which type of copy?",
      options: {
        a: "Deep Copy",
        b: "Shallow Copy",
        c: "Nested Copy",
        d: "Creates a new reference",
      },
      correctAnswer: "b",
    },
    {
      question: "3. Is method chaining possible with forEach?",
      options: {
        a: "Yes",
        b: "No",
      },
      correctAnswer: "b",
    },
  ],
};

/**Creating LeaderBoard */
const leaderBoard = {
  data: [
    {
      name: "Aditya",
      score: 2,
    },
    {
      name: "Aman",
      score: 3,
    },
    {
      name: "Ashish",
      score: 1,
    },
  ],
};

/**Function for checking the correct answer */

function checkAnswer(userAnswer, correctAnswer) {
  if (userAnswer === correctAnswer) {
    console.log(kuler("Correct Answer","#38bdf8"));
    score++;
  } else {
    console.log(kuler("Incorrect Answer","#e11d48"));
    console.log(`Correct Answer is ${correctAnswer}`);
  }
}

function showQuestionsAndOptions() {
  for (let i = 0; i < database.data.length; i++) {
    console.log(`\nQ${i + 1} - ${database.data[i].question}\n`);
    for (let key in database.data[i].options) {
      console.log(`${key} - ${database.data[i].options[key]}`);
    }
    let userAnswer = readlineSync
      .question("Enter your answer (a/b/c/d) - ")
      .toLowerCase();
    checkAnswer(userAnswer, database.data[i].correctAnswer);
  }
}

/**Function for adding the user to Leaderboard */
function highestScorer(leaderBoard) {
  leaderBoard.data.push({ name: userName, score: score });  
  let sortedScoreList = leaderBoard.data.sort((a, b) => b.score - a.score);
  console.log(kuler("\nCheck your position on the Leader Board.🎩🎩\n", "#c026d3"));
  for (let leader of sortedScoreList) {
    console.log(kuler(`${leader.name} - Score: ${leader.score}`, "#db2777" ))
  }
}

showQuestionsAndOptions(database);
console.log(`\nYour score is ${score}`);
highestScorer(leaderBoard);
