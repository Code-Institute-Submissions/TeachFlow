//------------------------------------ function to add sound to flashcards ------------------------------------//

function playSound(animal) {
    let sound = document.querySelector(`[data-sound='${animal}']`);
    sound.play();
}


//------------------------------------ memory game ------------------------------------ //

// ------------------------------------ instructions button ------------------------------------
let instructbtn = document.querySelector('.instruct-btn').addEventListener("click", toggleDisplay); // get the instruct-btn and add an event listener, toggler on click
    function toggleDisplay() {
        let desc = document.querySelector(".showDesc"); //desc is the showDesc class
        if (desc.style.display === "none") {//if display === none
            desc.style.display = "block"; // set it to block
        } else {
            desc.style.display = "none"; // else set it to none
        }
    }

 //------------------------------------ declare variables & arrrays for game ----------------------- //

let orderOfTiles = []; // the actual order of tiles in each round
let orderByPlayer = []; // the order of tiles played by player
let round = 0; //the level, incremented at each new round

let beginGameButton = document.querySelector('.js-begin-game'); // game button
let gameText = document.querySelector('.js-text'); // info replaced by button

let heading = document.querySelector('.js-title');// the heading
let gameTiles = document.querySelector('.js-gameTiles'); // tile container

// end of function //
function gameOver(text) {
    swal(text); /*credit https://sweetalert.js.org/*/
    orderOfTiles = [];
    orderByPlayer = [];
    round = 0;
    beginGameButton.classList.remove('hidden');
    heading.textContent= "Memory Game";
    gameText.classList.add('hidden');
    gameTiles.classList.add('unclickable');
}

// players turn, allow them to click tiles and add some text 
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

// iterate through the tiles in each round, to play sound and change pic for every tile.
function itertateThrough(storedRoundTiles) { 
    storedRoundTiles.forEach((animal, index) => { //iterate through all tiles (index = index in array)
        setTimeout(() => {
            tilePressed(animal); // initiate the tilePressed function
        }, (index + 1) * 850); // allow time between tiles
    });
}

// generate a random new tile 
function newTileinRound() {
    let tiles = ['chicken', 'duck', 'pig', 'cow'];
    let random = tiles[Math.floor(Math.random() * tiles.length)]; // multiply the value from math.random() with the length of the tiles, which gives a range from 0-3

    return random;
}


// start the round - set text, iterate through the tiles, add one, switch to players turn.
// runs after start game is pressed & when a round has been completed correctly
function startRound() {
    round +=1; // increment round
    gameTiles.classList.add('unclickable');
    gameText.textContent = "Listen and Watch";
    heading.textContent = `Round ${round}, Remaining: ${20-round} `;
    let storedRoundTiles = [...orderOfTiles]; // store the array of tiles eg ["cow", "chicken"]
    storedRoundTiles.push(newTileinRound()); // adds newTileinRound ["cow"] to the end of storedRoundTiles{} with all other values from other rounds.
    itertateThrough(storedRoundTiles); // trigger to play sound & change pic

    orderOfTiles = [... storedRoundTiles]; //reverse it back
    setTimeout(() => {
        playersTurn(round); // initiate the playersturn
    }, round * 700 + 1000); // add a delay to stop text changing immediately
}

// action taken each time a tile is clicked
function responseToClick(tile) {
    let sound = document.querySelector(`[data-sound='${tile}']`); 
    sound.play(); //plays the corresponding sound
    let indexofTile = orderByPlayer.push(tile) -1; //stores the index of the tile in the orderByPlayer eg ['chicken = 0, 'pig = 1']

    let remainingTaps = orderOfTiles.length - orderByPlayer.length; //calc remaining moves to make
    // end game
    if(orderByPlayer[indexofTile] !== orderOfTiles[indexofTile]) { // orderByPlayer[indexofTile]= name of tile(animal) pressed by player, orderOfTiles[indexofTile]= name of correct tile(animal)
        gameOver(`Whoops! You made an incorrect move, start again.`);
        return;
    }
    
    if(orderByPlayer.length === orderOfTiles.length) { //if equal, round is over
        // game complete - first check this
        if (orderByPlayer.length === 15) {
            gameOver('Superstar! you completed all rounds!');
            return //if 15 levels complete then finish game
        } 
        orderByPlayer = [];  
        gameText.textContent = "Correct! Keep going!"; 
        setTimeout(() => {
            startRound();
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
    startRound(); // instiate the first round
}

// ------------------------------------ event listeners ------------------------------------//
 
beginGameButton.addEventListener('click', startGame); //start game function when the button is clicked

gameTiles.addEventListener('click', function (event) { // check the action when a game tile is pressed 
    let {tile} = event.target.dataset; //stores the data-tile value 
    if(tile) responseToClick(tile); //if value is not an empty string execute responseToClick
});






