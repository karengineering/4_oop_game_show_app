/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// const phrase = new Phrase();
// const game = new Game();

// const phrase = new Phrase('Life is like a box of chocolates');
// console.log(`Phrase - phrase: ${phrase.phrase}`);

// const game = new Game();
// game.phrases.forEach((phrase, index) => {
// console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
// });

/*test game getRandomPhrase()*/
// const logPhrase = (phrase) => {
//     console.log(`Phrase - phrase: `, phrase.phrase);
// };
// const game = new Game();
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());

/*test addPhraseToDisplay()*/
// const game = new Game();
// game.getRandomPhrase().addPhraseToDisplay();

// const game = new Game();
// const randomPhrase = game.getRandomPhrase();
// const phrase = new Phrase(randomPhrase.phrase);
// phrase.addPhraseToDisplay();

/*test startGame()*/
// const game = new Game();
// game.startGame();
// console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);

/*Step 8*/
let game;
let rst = document.querySelector('#btn__reset');
rst.addEventListener('click', () => {
    game = new Game();
    game.startGame();
});

/*
add a "click" event listener to each of the onscreen keyboard buttons or use
event delegation and add a single event listenerthat listens for a click on any of the onscreen
keyboard buttons. If you use event delegation, make sure that clicking the space between and
around the onscreen keyboard buttons does not result in the `handleInteraction()` method
being called.
*/
// let qwerty = document.querySelectorAll('#qwerty');
let qwerty = document.getElementById('qwerty');
qwerty.addEventListener('click', e => {
    if (e.target.className === 'key') {
        game.handleInteraction(e.target);
    }
});
