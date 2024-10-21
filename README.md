# Guessing-Game
## This describes how to play the guessing game
+ You get 10 guesses to try and get the right number
  - A notification will pop up that will tell you if you have guessed right or wrong
  - You may only enter in a numerical value into the guessing textbox
+ guesses must be between 1 and 100

sample line of code 

``` js
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
    guesses.push(guess);
    document.getElementById('previousGuesses').textContent = guesses.join(', ');
    feedbackElement.textContent = feedback;

    if (guesses.length === maxTurns && guess !== randomNumber) {
        feedback = `!!! Too many attempts, GAME OVER !!!`;
        feedbackElement.textContent = feedback;
        feedbackElement.className = 'tooMany';
        gameOver = true;
        endGame();
    }
}
```


![launchScreen](https://github.com/user-attachments/assets/bf08cd5c-0cda-4ff7-9971-9d8abe8a564d)

[Check out other repositories]([https://www.davistech.edu/](https://github.com/Simithrel))
