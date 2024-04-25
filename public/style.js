let scores, roundScore, acitePlayer, gamePlaying;

init();


// Function to handle dice roll
function rollDice() {
    if (gamePlaying) {
        // Random Number
        let dice = Math.floor(Math.random() * 6) + 1;
        // Display the result
        let diceDOM = document.querySelector(".dice");
        diceDOM.style.display = "block";
        diceDOM.src = "dice-" + dice + ".png";
        // Update the round score IF the rolled number was NOT a 1
        if (dice !== 1) {
            // Add Score
            roundScore += dice;
            document.querySelector("#current-" + activePlayer).textContent = roundScore;
        } else {
            // Next Player
            nextPlayer();
        }
    }
}

// Event listener for roll button
document.querySelector(".btn-roll").addEventListener('click', rollDice);


document.querySelector(".btn-hold").addEventListener("click", () => {
    if (gamePlaying) {
        // Add Current Score to Global Score
        scores[activePlayer] += roundScore;

        // Update the User Interface
        document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];
        // Check if player won the game
        if (scores[activePlayer] >= 20) {
            document.querySelector("#name-" + activePlayer).textContent = "Winner";
            document.querySelector(".dice").style.display = "none";
            document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
            document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");

            gamePlaying = false;
        } else {
            // next Player
            nextPlayer();
        }
    }

});

function nextPlayer() {
    // Next Player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.querySelector("#current-0").innerHTML = "0";
    document.querySelector("#current-1").innerHTML = "0";

    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    // document.querySelector(".player-1-panel").classList.remove("active");
    // document.querySelector(".player-1-panel").classList.add("active");

    document.querySelector(".dice").style.display = "none";
}

document.querySelector(".btn-new").addEventListener("click", init);

function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

    document.querySelector(".dice").style.display = "none";
    document.querySelector("#score-0").innerHTML = '0';
    document.querySelector("#score-1").innerHTML = '0';
    document.querySelector("#current-0").innerHTML = '0';
    document.querySelector("#current-1").innerHTML = '0';
    document.querySelector("#name-0").textContent = "Player 1";
    document.querySelector("#name-1").textContent = "Player 2";
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.add("active");
}

// document.querySelector("#current-" + activePlayer).textContent = dice;
// document.querySelector("#current-" + activePlayer).innerHTML = "<em>" + dice + "</em>";

// let x = document.querySelector("#score-0").textContent;
