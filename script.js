let arr = ['rock', 'paper', 'scissors'];

// Get a random choice
function getComputerChoice(arr) {
    let rand = Math.floor(Math.random() * 3);
    return arr[rand];
}

// The Round
function roundGame(player, computer) {
    
    if (player === computer) {
        return 'Even';
    } else if ((player === 'rock') && (computer === 'paper')) {
        return 'Computer Win!' ;
    } else if((player === 'rock') && (computer === 'scissors')) {
        return 'Player Win!';
    } else if ((player === 'paper') && (computer === 'rock')) {
        return 'Player Win!';
    } else if ((player === 'paper') && (computer === 'scissors')) {
        return 'Computer Win!';
    } else if((player === 'scissors') && (computer === 'paper')) {
        return 'Player Win!';
    } else if((player === 'scissors') && (computer === 'rock')) {
        return 'Computer Win!';
    }
}


let playerMove = (prompt("Type your choice", 'paper')).toLowerCase();
let computerMove = getComputerChoice(arr);

console.log(roundGame(playerMove, computerMove));


