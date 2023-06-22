// Array of trivia questions and answers
var trivia = [
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "Who wrote 'To Kill a Mockingbird'?", answer: "Harper Lee" },
    { question: "What is the symbol for gold on the periodic table?", answer: "Au" }
    // Add more questions as desired
];

window.onload = function() {
    // When the Generate button is clicked...
    document.getElementById("generate").addEventListener("click", function() {
        // Choose a random trivia question
        var randomIndex = Math.floor(Math.random() * trivia.length);
        var triviaItem = trivia[randomIndex];

        // Display the question and answer
        document.getElementById("question").innerText = triviaItem.question;
        document.getElementById("answer").innerText = "Click for the answer";
        
        // When the answer is clicked, reveal it
        document.getElementById("answer").addEventListener("click", function() {
            this.innerText = triviaItem.answer;
        });
    });
};
