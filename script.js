
const questions = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyper Tool Multi Language",
            "Home Text Markup Language"
        ],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "Which language is used for styling web pages?",
        options: ["Python", "CSS", "Java", "C++"],
        answer: "CSS"
    },
    {
        question: "Which language makes web pages interactive?",
        options: ["HTML", "SQL", "JavaScript", "CSS"],
        answer: "JavaScript"
    },
    {
        question: "Which company developed Java?",
        options: ["Microsoft", "Sun Microsystems", "Google", "Apple"],
        answer: "Sun Microsystems"
    },
    {
        question: "What does CPU stand for?",
        options: [
            "Central Processing Unit",
            "Computer Personal Unit",
            "Central Program Utility",
            "Control Processing User"
        ],
        answer: "Central Processing Unit"
    }
];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = "";

function loadQuestion() {
    selectedAnswer = "";

    const q = questions[currentQuestion];

    document.getElementById("question-number").textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    document.getElementById("question").textContent = q.question;

    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    q.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.className = "option-btn";

        button.onclick = () => {
            selectedAnswer = option;

            document.querySelectorAll(".option-btn").forEach(btn => {
                btn.classList.remove("selected");
            });

            button.classList.add("selected");
        };

        optionsDiv.appendChild(button);
    });
}

function nextQuestion() {
    if (selectedAnswer === "") {
        alert("Please select an answer!");
        return;
    }

    if (selectedAnswer === questions[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("question-number").textContent = "Quiz Completed!";
    document.getElementById("question").textContent = "Well Done!";
    document.getElementById("options").innerHTML = "";
    document.getElementById("next-btn").style.display = "none";

    document.getElementById("result").textContent =
        `Your Score: ${score} / ${questions.length}`;

    const restartButton = document.createElement("button");
    restartButton.textContent = "Restart Quiz";
    restartButton.onclick = restartQuiz;

    document.querySelector(".quiz-container").appendChild(restartButton);
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;

    document.getElementById("next-btn").style.display = "inline-block";
    document.getElementById("result").textContent = "";

    const buttons = document.querySelectorAll(".quiz-container > button");
    buttons.forEach(button => {
        if (button.textContent === "Restart Quiz") {
            button.remove();
        }
    });

    loadQuestion();
}

loadQuestion();
