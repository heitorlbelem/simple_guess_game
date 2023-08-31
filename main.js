// DOM Elements
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const guessButton = document.querySelector("#guess-button")
const restartButton = document.querySelector("#restart-button")
const guessNumberInput = document.querySelector("#guess-number")

// Variables
let randomNumber = Math.round(Math.random() * 10)
let totalAttempts = 0

// Event listeners
guessButton.addEventListener("click", handleGuessClick)
restartButton.addEventListener("click", handleRestartClick)
document.addEventListener("keydown", handleEnterReset)

// Callbacks
function handleGuessClick(e) {
  e.preventDefault()

  const guessNumber = Number(guessNumberInput.value)
  if (guessNumberInput.value === "" || guessNumber < 0 || guessNumber > 10)
    return

  totalAttempts++
  if (guessNumber === randomNumber) {
    toggleScreen()
    screen2.querySelector(
      "h2"
    ).innerText = `Acertou em ${totalAttempts} tentativas`
  }

  guessNumberInput.value = ""
}

function handleRestartClick() {
  totalAttempts = 0
  randomNumber = Math.round(Math.random() * 10)
  toggleScreen()
}

function handleEnterReset(e) {
  if (e.key !== "Enter") return

  if (!screen2.classList.contains("hide")) {
    handleRestartClick()
  }
}

// Functions
function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}
