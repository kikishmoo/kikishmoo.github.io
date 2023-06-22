var trivia = [
    { 
        question: "What is the capital of France?", 
        choices: ["London", "New York", "Paris", "Sydney"],
        answer: 2  // refers to the index of the correct answer in choices
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

window.onload = function() {
    document.getElementById("generate").addEventListener("click", function() {
        var randomIndex = Math.floor(Math.random() * trivia.length);
        var triviaItem = trivia[randomIndex];

        document.getElementById("question").innerText = triviaItem.question;
        document.getElementById("result").classList.add("hidden");
        
        var choicesElement = document.getElementById("choices");
        choicesElement.innerHTML = '';  // Clear any existing choices
        triviaItem.choices.forEach(function(choice, index) {
            var li = document.createElement("li");
            li.innerText = choice;
            li.addEventListener("click", function() {
                if (index === triviaItem.answer) {
                    document.getElementById("result").innerText = "Correct!";
                } else {
                    document.getElementById("result").innerText = "Sorry, that's incorrect.";
                }
                document.getElementById("result").classList.remove("hidden");
            });
            choicesElement.appendChild(li);
        });
    });
};
