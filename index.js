// Array of all sides of a die
const dice = [
    "images/dice1.png",
    "images/dice2.png",
    "images/dice3.png",
    "images/dice4.png",
    "images/dice5.png",
    
]

// object to store the values of each side of the die
const numberOfRolls = {
    "images/dice1.png": 1,
    "images/dice2.png": 2,
    "images/dice3.png": 3,
    "images/dice4.png": 4,
    "images/dice5.png": 5,
    "images/dice6.png": 6
};

// simulates the dice roll and returns a random die
function rollDice(dice) {
    let chosenDie = dice[Math.floor(Math.random() * dice.length)]
    return chosenDie;
}

// Selectors
const resultMessage = document.querySelector("h1");
const button = document.querySelector("button");

// Rolls the dice and anounces a winner at the top
button.addEventListener('click', event => {
    // Roll dice for playerOne and playerTwo
    document.querySelector(".die-one").setAttribute("src", rollDice(dice));
    document.querySelector(".die-two").setAttribute("src", rollDice(dice));
    console.log(resultMessage.innerHTML)
    // Save score for playerOne and PlayerTwo in variables
    playerOneRoll = document.querySelector(".die-one").getAttribute("src");
    playerTwoRoll = document.querySelector(".die-two").getAttribute("src");
    
    // Whoever's die had the largest number wins!!
    if (playerOneRoll === playerTwoRoll) {
        resultMessage.textContent = "Draw!!";
    } else if (numberOfRolls[playerOneRoll] > numberOfRolls[playerTwoRoll]) {
        resultMessage.innerHTML = "🚩 Player 1 Wins!!";
    } else {
        resultMessage.innerHTML = "Player 2 Wins!! 🚩"; 
    }
})
