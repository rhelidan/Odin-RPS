console.log("HELLO! WELCOME TO THE ROCK PAPER SCISSORS GAME! \nTHIS GAME WILL BE PLAYED AS A BEST OF 5, GOOD LUCK! \n YOUR CHOICE AND THE COMPUTERS CHOICE WILL BE SHOWN AFTER YOU PICK IN THIS FORMAT: \nRock = 0, Paper = 1, Scissors = 2");

//http://127.0.0.1:5555/

let playerCount = 0;
let machineCount = 0;

function game() {
    while (playerCount < 3 && machineCount < 3) {
        round(playerSelect(), machineSelect());
    }
    if (playerCount > machineCount) {
        alert("YOU WIN");
    }
    else {
        alert("YOU LOSE");
    }
}

function playerSelect() {
    let playerChoice = prompt("welcome. type rock paper or scissors");
    while (true) {
        playerChoice = playerChoice.toLowerCase();
        if (playerChoice != 'rock' && playerChoice != 'paper' && playerChoice != 'scissors') {
            playerChoice = prompt("sorry try again");
        }
        else {
            console.log("valid input accepted");
            break;
        }
    }
    if (playerChoice == 'rock') {
        playerChoice = 0;
    }
    if (playerChoice == 'paper') {
        playerChoice = 1;
    }
    if (playerChoice == 'scissors') {
        playerChoice = 2;
    }
    return playerChoice
}

function machineSelect() {
    let random = Math.floor(Math.random() * 3);
    return random;
}

function round(me, cpu) {
    console.log(me, cpu);
    if (me == cpu) {
        console.log("ITS A TIE!");
    }
    else if (me == 0) {
        if (cpu == 2) {
            console.log("YOU WIN THIS ROUND!");
            playerCount++;
        }
        else {
            console.log("YOU LOSE THIS ROUND!");
            machineCount++;
        }
    }
    
    else if (me == 1) {
        if (cpu == 0) {
            console.log("YOU WIN THIS ROUND!");
            playerCount++;
        }
        else {
            console.log("YOU LOSE THIS ROUND!");
            machineCount++;
        }
    }
    
    else if (me == 2) {
        if (cpu == 1) {
            console.log("YOU WIN THIS ROUND!");
            playerCount++;
        }
        else {
            console.log("YOU LOSE THIS ROUND!");
            machineCount++;
        }
    }

    console.log("YOU: " + playerCount + " | CPU: " + machineCount);
}

game();