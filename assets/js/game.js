// function to add sound to flashcards //

function playSound(animal) {
    let sound = document.querySelector(`[data-sound='${animal}']`);
    sound.play();
}


// memory game

// instructions button
let instructbtn = document.querySelector('.instruct-btn').addEventListener("click", toggleDisplay); // get the instruct-btn and add an event listener, toggler on click
    function toggleDisplay() {
        let desc = document.querySelector(".showDesc"); //desc is the showDesc class
        if (desc.style.display === "none") {//if display === none
            desc.style.display = "block"; // set it to block
        } else {
            desc.style.display = "none"; // else set it to none
        }
    }

 //------------------------------------ declare variables & arrrays ----------------------- //

let orderOfTiles = []; // An array to store the actual order of tiles
let orderByPlayer = []; // Stores the order of tiles played by player
let round = 0; //create a level which will increment at each new round

let beginGameButton = document.querySelector('.js-begin-game'); // game button
let gameText = document.querySelector('.js-text'); // info replaced by button

let heading = document.querySelector('.js-title');// define the heading and tile container
let gameTiles = document.querySelector('.js-gameTiles');

function resetGame(text) {
    swal(text); /*credit https://sweetalert.js.org/*/
    orderOfTiles = [];
    orderByPlayer = [];
    round = 0;
    beginGameButton.classList.remove('hidden');
    heading.textContent= "Memory Game";
    gameText.classList.add('hidden');
    gameTiles.classList.add('unclickable');
}

// players turn
function playersTurn(round) {
    gameTiles.classList.remove('unclickable'); // allows the tiles to be clicked
    gameText.innerHTML = `Your Go! <br> ${round} Tap${round > 1 ? 's' : ''}`;
} 

// play sound and change pic when tile is pressed 
function tilePressed(animal) {
    let tile = document.querySelector(`[data-tile='${animal}']`);
    let sound = document.querySelector(`[data-sound='${animal}']`);

    tile.classList.add('activated');
    sound.play();

    setTimeout(() => {
        tile.classList.remove('activated');
    }, 200);
}


function playRound(nextSequence) { //next seq contains an array of all round values stored
    nextSequence.forEach((animal, index) => {
        setTimeout(() => {
            tilePressed(animal); // initiate the tilePressed function
        }, (index + 1) * 850); // tested to suit audio & avoid overlapping
    });
}


function nextStep() {
    let tiles = ['chicken', 'duck', 'pig', 'cow'];
    let random = tiles[Math.floor(Math.random() * tiles.length)]; // multiply the value from math.random() with the length of the tiles, which gives a range from 0-3

    return random;
}


// runs after start game is pressed & when a round has been completed correctly
function nextRound() {
    round +=1; // increment round
    gameTiles.classList.add('unclickable');
    gameText.textContent = "Listen and Watch";
    heading.textContent = `Round ${round}, Remaining: ${20-round} `;
    let nextSequence = [...orderOfTiles]; // store the array of tiles in round ["cow", "chicken"]
    nextSequence.push(nextStep()); // adds  nextStep ["cow"] to the end of nextSequence{} with all other values from other rounds.
    playRound(nextSequence);

    orderOfTiles = [... nextSequence];
    setTimeout(() => {
        playersTurn(round); 
    }, round * 600 + 1000); // add a delay and calc when the computer is done with the button tap sequence
}


function responseToClick(tile) {
    let index = orderByPlayer.push(tile) -1; // pushes the tile value to the orderByPlayer array
    let sound = document.querySelector(`[data-sound='${tile}']`); //plays the corresponding sound
    sound.play();

    let remainingTaps = orderOfTiles.length - orderByPlayer.length; //calc remaining steps

    if(orderByPlayer[index] !== orderOfTiles[index]) {
        resetGame('Oh no! you made an incorrect move, start again');
        return; //if the value retrieved by index does not match in index and sequence
    }

    if(orderByPlayer.length === orderOfTiles.length) { //if equal, round is over
        
        if (orderByPlayer.length === 15) {
            resetGame('Superstar! you completed all rounds!');
            return //if 15 levels complete then finish game
        }
        orderByPlayer = [];  
        gameText.textContent = "Correct! Keep going!"; 
        setTimeout(() => {
            nextRound();
        }, 1000); //delay to allow users to see the success message
        return;
    }

    gameText.textContent = `Your turn: ${remainingTaps} Tap${remainingTaps > 1 ? 's' : ''}`;
}

// make the button dissappear
function startGame() {
    beginGameButton.classList.add('hidden');
    gameText.classList.remove('hidden');
    gameText.textContent = 'Listen and Watch'; //add the text
    nextRound(); // instiate the first round
}

// event listeners
 
beginGameButton.addEventListener('click', startGame); //start game function when the button is clicked

gameTiles.addEventListener('click', event => { // decide if the players round is a success & they can move on or not
    let {tile} = event.target.dataset; //stores the data-tile value 
    if(tile) responseToClick(tile); //if value is not an empty string execute responseToClick
});






