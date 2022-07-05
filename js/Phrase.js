/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */



class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
    /**
    * Display phrase on game board
    */
    addPhraseToDisplay() {

        // let phraseArray = this.phrase.split('');
        let chars = document.querySelector('#phrase ul');
        // let charsHTML = '';

        for (let i=0; i<this.phrase.length; i++) {
            if (this.phrase[i] === ' ') {
                chars.innerHTML += `<li class="space"> </li>`;
            } else {
                chars.innerHTML += `<li class="hide letter ${this.phrase[i]}">${this.phrase[i]}</li>`
            }
        }
    }
        // phraseArray.map(char => {
        //     if (char === '') {
        //         charsHTML += `<li class="space"> </li>`;
        //     } 
        // })


    // <div id="phrase" class="section">
    //     <ul>/
    //         <li class="hide letter h">h</li>
    //         <li class="hide letter o">o</li>
    //         <li class="hide letter w">w</li>
    //         <li class="space"> </li>
    //         <li class="hide letter a">a</li>
    //         <li class="hide letter r">r</li>
    //         <li class="hide letter e">e</li>
    //         <li class="space"> </li>
    //         <li class="hide letter y">y</li>
    //         <li class="hide letter o">o</li>
    //         <li class="hide letter u">u</li>
    //     </ul>
    // </div>


    /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    * 
    * test in console: game.activePhrase.checkLetter('a')
    */
    checkLetter(letter) {
        return this.phrase.includes(letter);
    }

    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    * 
    * test in console: game.activePhrase.showMatchedLetter('a')
    * 
    * 
    * `showMatchedLetter()`: Reveals the letter(s) on the board that matches the
player's selection. To reveal the matching letter(s), select all of the letter DOM
elements that have a CSS class name that matches the selected letter and
replace each selected element's `hide` CSS class with the `show` CSS class.
    */
    showMatchedLetter(letter) {
        let match = document.getElementsByClassName(letter);
        [...match].forEach(l => l.classList.replace('hide', 'show'));
    }
}