// Import the 'fs' (File System) module for reading and writing files
const fs = require('fs');

// Import the 'readline' module for reading from and writing to the command line
const readline = require('readline');

// Create a readline interface for getting input from the user
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to ask the user a question
function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

// Load the trivia data from the file
fs.readFile('./trivia_data.json', (err, data) => {
  // Handle the error, if any
  if (err) {
    console.error(err);
    process.exit(1);
  }

  // Parse the data into a JavaScript object
  const triviaData = JSON.parse(data);

  // Keep track of the current question and score
  let currentQuestion = 0;
  let score = 0;

  // Function to ask the next question
  async function nextQuestion() {
    // If there are no more questions, end the game
    if (currentQuestion >= triviaData.length) {
      console.log(`Game over! Your score was ${score} out of ${triviaData.length}.`);
      rl.close();
      return;
    }

    // Get the current question
    const question = triviaData[currentQuestion];

    // Ask the question
    const answer = await askQuestion(`${question.question} `);

    // Check the answer
    if (answer.toLowerCase() === question.answer.toLowerCase()) {
      // If the answer is correct, increase the score
      console.log('Correct!');
      score++;
    } else {
      // If the answer is incorrect, tell the user the correct answer
      console.log(`Sorry, the correct answer was ${question.answer}.`);
    }

    // Go to the next question
    currentQuestion++;
    nextQuestion();
  }

  // Start the game
  nextQuestion();
});
