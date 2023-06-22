// Array of trivia question objects
var trivia = [
    {
        question: "Which planet is known as the 'Red Planet'?",
        choices: ["Venus", "Mars", "Jupiter", "Saturn"],
        answer: 1
    },
    {
        question: "Who painted the Mona Lisa?",
        choices: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
        answer: 2
    },
    {
        question: "What is the largest ocean in the world?",
        choices: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: 3
    },
    { 
        question: "What is the capital of France?", 
        choices: ["London", "New York", "Paris", "Sydney"],
        answer: 2  // Index of the correct answer in the choices array
    },
    { 
        question: "Who wrote 'To Kill a Mockingbird'?", 
        choices: ["Mark Twain", "Harper Lee", "Ernest Hemingway", "George Orwell"], 
        answer: 1
    },
    { 
        question: "What is the symbol for gold on the periodic table?", 
        choices: ["Ag", "Au", "Fe", "O"],
        answer: 1
    }
];

// Function to run when the page has finished loading
window.onload = function() {
    // Add a click event listener to the "generate" button
    document.getElementById("generate").addEventListener("click", function() {
        // Generate a random index for selecting a trivia question
        var randomIndex = Math.floor(Math.random() * trivia.length);
        // Select a trivia question using the random index
        var triviaItem = trivia[randomIndex];

        // Display the question
        document.getElementById("question").innerText = triviaItem.question;
        // Hide the result message
        document.getElementById("result").classList.add("hidden");
        
        // Get the "choices" div
        var choicesElement = document.getElementById("choices");
        // Clear any existing choices
        choicesElement.innerHTML = '';
        // Loop through the choices for the trivia question
        triviaItem.choices.forEach(function(choice, index) {
            // Create a new button for each choice
            var button = document.createElement("button");
            // Set the text of the button to the choice
            button.innerText = choice;
            // Set the margin of the button
            button.style.margin = "0 10px";
            // Add a click event listener to the button
            button.addEventListener("click", function() {
                // Check whether the choice is correct
                if (index === triviaItem.answer) {
                    // If the choice is correct, display a success message
                    document.getElementById("result").innerText = "Correct!";
                } else {
                    // If the choice is incorrect, display a failure message
                    document.getElementById("result").innerText = "Sorry, that's incorrect.";
                }
                // Show the result message
                document.getElementById("result").classList.remove("hidden");
            });
            // Add the button to the "choices" div
            choicesElement.appendChild(button);
        });
    });
}
