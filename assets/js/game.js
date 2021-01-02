// function to add sound to flashcards //

function playSound(animal) {
    let sound = document.querySelector(`[data-sound='${animal}']`);
    sound.play();
}



 //------------------------------------ declare variables & arrrays ----------------------- //

let orderOfTiles = []; // An array to store the actual order of tiles
let orderByPlayer = []; // Stores the order of tiles played by player
let round = 0; //create a level which will increment at each new round

let beginGameButton = document.querySelector('.js-begin-game'); // game button
let gameText = document.querySelector('.js-text'); // info replaced by button

let heading = document.querySelector('.js-title');// define the heading and tile container
let gameTiles = document.querySelector('.js-gameTiles');

//compare the sequences
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
    }, 600);
}


function playRound(nextSequence) {
    nextSequence.forEach((animal, index) => {
        setTimeout(() => {
            tilePressed(animal);
        }, (index + 1) * 700);
    });
}


function nextStep() {
    let tiles = ['chicken', 'duck', 'pig', 'cow'];
    let random = tiles[Math.floor(Math.random() * tiles.length)]; // multiply the value from math.random() with the length of the tileswhich gives a range from 0-3

    return random;
}


// start the next round
function nextRound() {
    round +=1;
 
    // add the unclickable class to the tile container when round starts
    // add the contents of info and heading elements are updated
    gameTiles.classList.add('unclickable');
    gameText.textContent = "Listen and Watch";
    heading.textContent = `Level ${round} of 20`;

    let nextSequence = [...orderOfTiles]; // store the array of sequence
    nextSequence.push(nextStep()); // adds the value of nextStep to the end of nextSequence{} with all other values from other rounds.
    playRound(nextSequence);

    // the humanturn{} needs to be executed after the computers sequence is over so it can't be called immediately.
    // add a delay and calc when the computer is done with the button tap sequence
    orderOfTiles = [... nextSequence];
    setTimeout(() => {
        playersTurn(round);
    }, round * 600 + 1000);
}


function handleClick(tile) {
    let index = orderByPlayer.push(tile) -1; // pushes the tile value to the humanSequence array
    let sound = document.querySelector(`[data-sound='${tile}']`); //plays the corresponding sound
    sound.play();

    let remainingTaps = orderOfTiles.length - orderByPlayer.length; //calc remaining steps

    if(orderByPlayer[index] !== orderOfTiles[index]) {
        resetGame('Incorrect, start again');
        return; //if the value retrieved by index does not match in index and sequence
    }

    if(orderByPlayer.length === orderOfTiles.length) {
        
        if (orderByPlayer.length === 20) {
            resetGame('Well done, you completed all levels!');
            return //if 20 levels complete then finish game
        }
        
        orderByPlayer = []; //if equal, round is over
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
    nextRound();
}

// event listeners

// add an event listener to activate the start game function when the button is clicked
beginGameButton.addEventListener('click', startGame);

// add an event listener to decide if the players round is a success & they can move on or not
// if the value of data-tile is clicked
gameTiles.addEventListener('click', event => {
    let {tile} = event.target.dataset; //stores the data-tile value

    if(tile) handleClick(tile); //if value is not an empty string execute handleClick
});


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



