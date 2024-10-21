let randomNumber = Math.floor(Math.random() * 100) + 1;
let guesses = [];
let maxTurns = 10;
let gameOver = false;

document.getElementById('startNewGameBtn').addEventListener('click', startNewGame);


// created a function for check guess that wasnt inside of
// the event listener
function checkGuess(guess) {
    let feedbackElement = document.getElementById('feedback');
    let feedback = '';

    if (gameOver) {
        feedbackElement.textContent = 'The game is over. Start a new game!';
        return;
    }

    if (guesses.length === 0) {
        document.getElementById('previousGuessesSection').style.display = 'block';
    }

    if (guess === randomNumber) {
        feedback = 'Congratulations! You guessed the correct number!';
        feedbackElement.className = 'justRight';
        gameOver = true;
        endGame();
    } else if (guess < randomNumber) {
        feedback = 'Your guess is too low!';
        feedbackElement.className = 'tooSmall';
    } else {
        feedback = 'Your guess is too high!';
        feedbackElement.className = 'tooBig'; 
    }
    // sends the results
    guesses.push(guess);
    document.getElementById('previousGuesses').textContent = guesses.join(', ');
    // sends the guesses to the document
    feedbackElement.textContent = feedback;

    if (guesses.length === maxTurns && guess !== randomNumber) {
        feedback = `!!! Too many attempts, GAME OVER !!!`;
        feedbackElement.textContent = feedback;
        feedbackElement.className = 'tooMany';
        gameOver = true;
        endGame();
    }
    // used the endgame function as a seperate function
    // this lets me call the fucntion back multiple times
}

document.getElementById('guessingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let guess = Number(document.getElementById('guess').value);

    if (!isNaN(guess) && guess >= 1 && guess <= 100) {
        checkGuess(guess);
    } else {
        document.getElementById('feedback').textContent = 'Please enter a valid number between 1 and 100.';
    }

    document.getElementById('guess').value = '';
});

function endGame() {
    document.getElementById('startNewGameBtn').style.display = 'inline';  // Show the "Start New Game" button
}


// added the class ' ' to the feedback element, this will remove the border that was showing after
// when the program was previously ran.
function startNewGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    guesses = [];
    gameOver = false;

    document.getElementById('previousGuesses').textContent = '';
    document.getElementById('feedback').textContent = '';
    document.getElementById('feedback').className = '';
    document.getElementById('previousGuessesSection').style.display = 'none';  // Hide previous guesses
    document.getElementById('startNewGameBtn').style.display = 'none';  // Hide the "Start New Game" button
}



// display property sets or returns the elements display type
// elements in html are inline or block elements
// dipslay property will allow you to hid or display something

// return display property:
// object.style.display = value

// set the dispaly property:
// Object.style.display = value
// https://www.w3schools.com/jsref/prop_style_display.asp




// HTMLElementObject.className
// HTMLElementObject.className = class
// the className propterty sets or returns an element's class attribute