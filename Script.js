// Questions array
const questions = [
{
question: "A trademark protects inventions and technological processes.",
answers: ["True", "False"],
correct: 1
},
{
question: "Which of the following is an example of a trademark?",
answers: ["A car engine", "A logo", "A book manuscript", "A new app algorithm"],
correct: 1
},
{
question: "Trademarks can be renewed indefinitely as long as they are used in commerce.",
answers: ["True", "False"],
correct: 0
},
{
question: "What is the best action against counterfeit goods?",
answers: [
"File a complaint with the platform hosting the counterfeit seller",
"Ignore the issue",
"Stop selling products",
"Publicly shame the seller"
],
correct: 0
}
];

let currentQuestionIndex = 0;
let score = 0;

// Display the first question
function loadQuestion() {
const currentQuestion = questions[currentQuestionIndex];
document.getElementById('question').innerText = currentQuestion.question;
const answerButtons = document.querySelectorAll('.answer-btn');
answerButtons.forEach((button, index) => {
button.innerText = currentQuestion.answers[index] || "";
button.style.display = currentQuestion.answers[index] ? "block" : "none";
});
document.getElementById('next-btn').style.display = "none";
}

// Check the selected answer
function checkAnswer(selectedIndex) {
const currentQuestion = questions[currentQuestionIndex];
if (selectedIndex === currentQuestion.correct) {
score += 10;
alert("Correct!");
} else {
score = Math.max(0, score - 5);
alert("Wrong! The correct answer was: " + currentQuestion.answers[currentQuestion.correct]);
}
document.getElementById('score').innerText = `Score: ${score}`;
document.getElementById('next-btn').style.display = "block";
}

// Load the next question
function nextQuestion() {
currentQuestionIndex++;
if (currentQuestionIndex < questions.length) {
loadQuestion();
} else {
alert(`Game Over! Your final score is ${score}.`);
currentQuestionIndex = 0;
score = 0;
loadQuestion();
}
}

// Initialize the game
loadQuestion();