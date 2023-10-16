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

// Actual game in 5 rounds
function game() {
    for (let i = 0; i < 5; i++) {
        const playerMove = (prompt("Type your choice", 'paper')).toLowerCase();
        const computerMove = getComputerChoice(arr);

        console.log(roundGame(playerMove, computerMove));
        console.log('Your Choice ' + playerMove);
        console.log('Computer Choice ' + computerMove);
        console.log('----------------------');

    }
}

game();



