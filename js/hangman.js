const hangmanImage = document.querySelector(".hangman-box img")
const wordDisplay = document.querySelector(".word-display")
const guessesText = document.querySelector(".guesses-text b")
const keyboardDiv = document.querySelector(".keyboard")
const gameModal = document.querySelector(".game-modal");
const playAgainBtn = document.querySelector(".play-again");

let currentWord, correctLetters, wrongGuessCount;
const maxGuesses = 6;

const resetGame = () => {
    correctLetters = [];
    wrongGuessCount = 0;
    hangmanImage.src =`img/images/hangman-${wrongGuessCount}.svg`;
    guessesText.innerText =`${wrongGuessCount} / ${maxGuesses}`;
    keyboardDiv.querySelectorAll("button"). forEach(btn => btn.disabled = false);
    wordDisplay.innerHTML = currentWord.split("").map(() => `<li class="letter"></li>`).join("");
    gameModal.classList.remove("show");
}

const getRandomWord = () => {
    //tar random ord fra ordlisto
    const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
    currentWord = word;
    document.querySelector(".hint-text b").innerText = hint;
    resetGame();

}

const gameOver = (isVictory) => {
    setTimeout(() => {
        const modalText = isVictory ? `Du fant svaret:` : `Rett svar var:`;
        gameModal.querySelector("img").src = `img/images/${isVictory ? `victory` : `lost`}.gif`;
        gameModal.querySelector("h4").innerText = `${isVictory ? `Gratulerer!` : `Game over!`}`;
        gameModal.querySelector("p").innerHTML = `${modalText} <b>${currentWord}</b>`;
        gameModal.classList.add("show");
    }, 300);
}

const initGame = (button, clickedLetter) => {

    if (currentWord.includes(clickedLetter)) 
    {
        [...currentWord].forEach((letter, index) => {

            if (letter === clickedLetter) {
                correctLetters.push(letter);
                wordDisplay.querySelectorAll("li")[index].innerText = letter;
                wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
            }
        });
    }

    else {
        wrongGuessCount++;
        hangmanImage.src =`img/images/hangman-${wrongGuessCount}.svg`;
    }

    button.disabled = true;
    guessesText.innerText =`${wrongGuessCount} / ${maxGuesses}`;

    //visst noke av detta skjer så tape du
    if(wrongGuessCount === maxGuesses) return gameOver(false);
    if(correctLetters.length === currentWord.length) return gameOver(true);
}



//tastatur knappar
for (let i = 97; i <= 122; i++) {
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    keyboardDiv.appendChild(button);
    button.addEventListener("click", e => initGame(e.target, String.fromCharCode(i)));

}


// Setter inn æ
const button = document.createElement("button");
button.innerText = String.fromCharCode(230);
keyboardDiv.appendChild(button);
button.addEventListener("click", e => initGame(e.target, String.fromCharCode(230)));

// Setter inn ø
const button2 = document.createElement("button");
button2.innerText = String.fromCharCode(248);
keyboardDiv.appendChild(button2);
button2.addEventListener("click", e => initGame(e.target, String.fromCharCode(248)));

// Setter inn å
const button3 = document.createElement("button");
button3.innerText = String.fromCharCode(229);
keyboardDiv.appendChild(button3);
button3.addEventListener("click", e => initGame(e.target, String.fromCharCode(229)));



getRandomWord();
playAgainBtn.addEventListener("click", getRandomWord);

/*
E6 - 230
F8 - 248
E5 - 229
*/