let score = 0;
let timeLeft = 60;
let correctAnswer;

// Crear estructura del juego
const container = document.createElement("div");
container.id = "game";

const title = document.createElement("h1");
title.textContent = "Juego Matemático";

const problem = document.createElement("div");
problem.id = "problem";

const input = document.createElement("input");
input.type = "number";
input.id = "answer";
input.placeholder = "Tu respuesta";

const button = document.createElement("button");
button.textContent = "Comprobar";
button.onclick = checkAnswer;

const scoreDisplay = document.createElement("div");
scoreDisplay.className = "score";
scoreDisplay.innerHTML = `Puntaje: <span id="score">0</span>`;

const timerDisplay = document.createElement("div");
timerDisplay.className = "score";
timerDisplay.innerHTML = `Tiempo: <span id="timer">60</span> segundos`;

// Agregar elementos al DOM
container.appendChild(title);
container.appendChild(problem);
container.appendChild(input);
container.appendChild(button);
container.appendChild(scoreDisplay);
container.appendChild(timerDisplay);
document.body.appendChild(container);

// Funciones del juego
function generarProblema() {
  const num1 = Math.floor(Math.random() * 10);
  const num2 = Math.floor(Math.random() * 10);
  correctAnswer = num1 + num2;
  problem.textContent = `${num1} + ${num2} = ?`;
}

function checkAnswer() {
  const userAnswer = parseInt(input.value);
  if (userAnswer === correctAnswer) {
    score++;
    document.getElementById("score").textContent = score;
  }
  input.value = "";
  generarProblema();
}

function startTimer() {
  const interval = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(interval);
      alert(`¡Tiempo terminado! Tu puntaje es: ${score}`);
      input.disabled = true;
      button.disabled = true;
    }
  }, 1000);
}

// Inicializar juego
generarProblema();
startTimer();
