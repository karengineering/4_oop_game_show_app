/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;    
        //array of five Phrase objects to use with the game
        this.phrases = [
            new Phrase('A long time'),
            new Phrase('Banana bread'),
            new Phrase('Chocolate chip'),
            new Phrase('Double Dash'),
            new Phrase('Early bird')
        ];
        this.activePhrase = null;
    }

    /**
    * Begins game by selecting a random phrase and displaying it to user
    * 
    * 
    * 
● Remove all `li` elements from the Phrase `ul` element.
● Enable all of the onscreen keyboard buttons and update each to use the `key` CSS
class, and not use the `chosen` or `wrong` CSS classes.
● Reset all of the heart images (i.e. the player's lives) in the scoreboard at the bottom of
the gameboard to display the `liveHeart.png` image.
    * 
    */
    startGame() {
        let chars = document.querySelector('#phrase ul');
        chars.innerHTML = '';

        let qwerty = document.querySelectorAll('#qwerty button');

        [...qwerty].forEach(key => {
            key.disabled = false;
            key.className = 'key';
        });

        let tries = document.querySelectorAll('.tries img');
        tries.forEach(life => {
            life.src = 'images/liveHeart.png';
        });

        let overlay = document.querySelector('#overlay');
        overlay.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
    }

    /**
    * Handles onscreen keyboard button clicks
    * @param (HTMLButtonElement) button - The clicked button element
    * 
    * checks to
see if the onscreen keyboard button clicked by the player matches a letter in the phrase, and
then directs the game based on a correct or incorrect guess.
    * 
● Disable the selected letter’s onscreen keyboard button.
● If the phrase does not include the guessed letter, add the `wrong` CSS class to the
selected letter's keyboard button and call the `removeLife()` method.
● If the phrase includes the guessed letter, add the `chosen` CSS class to the selected
letter's keyboard button, call the `showMatchedLetter()` method on the phrase, and
then call the `checkForWin()` method. If the player has won the game, also call the
`gameOver()` method.

    */
    handleInteraction(button) {
        // console.log(button);
        button.disabled = true;
        if (this.activePhrase.checkLetter(button.textContent)) {
            button.classList.add('chosen');
            this.activePhrase.showMatchedLetter(button.textContent);

            if (this.checkForWin()) {
                this.gameOver(true);
            }
        } else {
            button.classList.add('wrong');
            this.removeLife();
        }
    }

    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    * 
    * `removeLife()`: This method removes a life from the scoreboard, by replacing
one of the `liveHeart.png` images with a `lostHeart.png` image (found in the
`images` folder) and increments the `missed` property. If the player has five
missed guesses (i.e they're out of lives), then end the game by calling the
`gameOver()` method.
    */
    removeLife() {
        let tries = document.querySelectorAll('.tries img');
        tries[this.missed].src = 'images/lostHeart.png';

        this.missed++;
        
        if (this.missed === 5 ) {  
            this.gameOver(false);
        }
    }

    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won

    This method checks to see if the player has revealed all of the
    letters in the active phrase.

    test: game.checkForWin()
    */
    checkForWin() {
        return document.getElementsByClassName('hide').length === 0;
    }

    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    * 
    * `gameOver()`: This method displays the original start screen overlay, and
depending on the outcome of the game, updates the overlay `h1` element with
a friendly win or loss message, and replaces the overlay’s `start` CSS class with
either the `win` or `lose` CSS class.

    test in console: game.gameOver(true);
    */
    gameOver(gameWon) {
        let overlay = document.querySelector('#overlay');
        overlay.style.display = 'none';
        let gameOverMsg = document.querySelector('#game-over-message');

        if (gameWon) {
            gameOverMsg.innerHTML = 'Great job!';
            overlay.style.display = 'flex';
            overlay.className = 'win';
        } else {
            gameOverMsg.innerHTML = 'Sorry, better luck next time!';
            overlay.style.display = 'flex';
            overlay.className = 'lose';
        }
    }
}