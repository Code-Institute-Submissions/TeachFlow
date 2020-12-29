// create an array to keep track of the original sequence of tiles 
let sequence = [];

// create an array to keep track of the human sequence
let humanSequence = [];

//create a level which will increment at each new round
let level = 0;

// create the startGame function which will run when button is clicked
// create startbutton & info 
let startButton = document.querySelector('.js-start');
let info = document.querySelector('.js-info');

// define the heading and tile container
let heading = document.querySelector('.js-heading');
let tileContainer = document.querySelector('.js-container');

//compare the sequences
function resetGame(text) {
    alert(text);
    sequence = [];
    humanSequence = [];
    level = 0;
    startButton.classList.remove('hidden');
    heading.textContent= "Memory Game";
    info.classList.add('hidden');
    tileContainer.classList.add('unclickable');
}


// players turn

// create the human turn
// indicates that the computer is finished with round, time for player to repeat
function humanTurn(level) {
    tileContainer.classList.remove('unclickable'); // allows the tiles to be clickable
    info.textContent = `Your turn: ${level} Tap${level > 1 ? 's' : ''}`;
}

function activateTile(color) {
    let tile = document.querySelector(`[data-tile='${color}']`);
    let sound = document.querySelector(`[data-sound='${color}']`);

    tile.classList.add('activated');
    sound.play();

    setTimeout(() => {
        tile.classList.remove('activated');
    }, 300);
}


function playRound(nextSequence) {
    nextSequence.forEach((color, index) => {
        setTimeout(() => {
            activateTile(color);
        }, (index + 1) * 600);
    });
}


function nextStep() {
    let tiles = ['chicken', 'duck', 'pig', 'cow'];
    let random = tiles[Math.floor(Math.random() * tiles.length)]; // multiply the value from math.random() with the length of the tileswhich gives a range from 0-3

    return random;
}


// start the next round
function nextRound() {
    level +=1;
 
    // add the unclickable class to the tile container when round starts
    // add the contents of info and heading elements are updated
    tileContainer.classList.add('unclickable');
    info.textContent = "Listen and Watch";
    heading.textContent = `Level ${level} of 20`;

    let nextSequence = [...sequence]; // store the array of sequence
    nextSequence.push(nextStep()); // adds the value of nextStep to the end of nextSequence{} with all other values from other rounds.
    playRound(nextSequence);

    // the humanturn{} needs to be executed after the computers sequence is over so it can't be called immediately.
    // add a delay and calc when the computer is done with the button tap sequence
    sequence = [... nextSequence];
    setTimeout(() => {
        humanTurn(level);
    }, level * 600 + 1000);
}


function handleClick(tile) {
    let index = humanSequence.push(tile) -1; // pushes the tile value to the humanSequence array
    let sound = document.querySelector(`[data-sound='${tile}']`); //plays the corresponding sound
    sound.play();

    let remainingTaps = sequence.length - humanSequence.length; //calc remaining steps

    if(humanSequence[index] !== sequence[index]) {
        resetGame('Incorrect, start again');
        return; //if the value retrieved by index does not match in index and sequence
    }

    if(humanSequence.length === sequence.length) {
        
        if (humanSequence.length === 20) {
            resetGame('Well done, you completed all levels!');
            return //if 20 levels complete then finish game
        }
        
        humanSequence = []; //if equal, round is over
        info.textContent = "Correct! Keep going!";
        setTimeout(() => {
            nextRound();
        }, 1000); //delay to allow users to see the success message
        return;
    }

    info.textContent = `Your turn: ${remainingTaps} Tap${remainingTaps > 1 ? 's' : ''}`;
}

// make the button dissappear
function startGame() {
    startButton.classList.add('hidden');
    info.classList.remove('hidden');
    info.textContent = 'Listen and Watch'; //add the text
    nextRound();
}

// event listeners

// add an event listener to activate the start game function when the button is clicked
startButton.addEventListener('click', startGame);

// add an event listener to decide if the players round is a success & they can move on or not
// if the value of data-tile is clicked
tileContainer.addEventListener('click', event => {
    let {tile} = event.target.dataset; //stores the data-tile value

    if(tile) handleClick(tile); //if value is not an empty string execute handleClick
});









