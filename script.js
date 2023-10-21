let arr = ['rock', 'paper', 'scissors'];
let playerMove;

let scorePlayer = 0;
let scoreComputer = 0;

//const btns = document.querySelectorAll('button');
const divResult = document.querySelector('.result');
const divPlayer = document.querySelector('.player');
const divComputer = document.querySelector('.computer');
const divScore = document.querySelector('.score');
const divAfterFiveRounds = document.querySelector('.afterFiveRounds');
const imgs = document.querySelectorAll('.btns-imgs');
const imgs_computer = document.querySelectorAll('.computer_btns_img');

imgs.forEach(element => {
    element.addEventListener('click', function (e) {
        game(e.target);
        
    })
});

// Get a random choice
function getComputerChoice(arr) {
    let rand = Math.floor(Math.random() * 3);
    return arr[rand];
}

// round check
function roundGame(player, computer) {
    divAfterFiveRounds.innerText = '';
    
    if (player === computer) {
        return 'Even';
    } else if ((player === 'rock') && (computer === 'paper')) {
        scoreComputer++;
        return 'Computer Win!' ;
    } else if((player === 'rock') && (computer === 'scissors')) {
        scorePlayer++;
        return 'Player Win!';
    } else if ((player === 'paper') && (computer === 'rock')) {
        scorePlayer++;
        return 'Player Win!';
    } else if ((player === 'paper') && (computer === 'scissors')) {
        scoreComputer++;
        return 'Computer Win!';
    } else if((player === 'scissors') && (computer === 'paper')) {
        scorePlayer++;
        return 'Player Win!';
    } else if((player === 'scissors') && (computer === 'rock')) {
        scoreComputer++;
        return 'Computer Win!';
    }
}

// Actual game DOM
function game(str) {
        //Refresh opacity
        imgs.forEach(item => {
            item.style.opacity = 0.2;
        });
        str.style.opacity = 1;
        playerMove = str.alt;
        //str.style.opacity = 1;
        //const playerMove = (prompt("Type your choice", 'paper')).toLowerCase();
        const computerMove = getComputerChoice(arr);
        divResult.innerText = roundGame(playerMove, computerMove);
        
        // Remove after opacity imgs

        //divPlayer.innerText = 'Your Choice: ' + playerMove;
        //divComputer.innerText = 'Computer Choice: ' + computerMove;
        divScore.innerText = 'Score: ' + scorePlayer + ' : ' + scoreComputer;

        let computerBtn = document.querySelector('#' + computerMove);
        //Refresh opacity
        imgs_computer.forEach(item => {
            item.style.opacity = 0.2;
        });
        computerBtn.style.opacity = 1;

        if (scorePlayer >= 5) {
            divAfterFiveRounds.innerText = 'You Won the Game! Congrats';
            scorePlayer = 0;
            scoreComputer = 0;
        } else if (scoreComputer >= 5) {
            divAfterFiveRounds.innerText = 'You Lost the game: Maybe find something else to do?';
            scorePlayer = 0;
            scoreComputer = 0;
        } 
        //divAfterFiveRounds.innerText = checkWinnerAfterFiveRound(scorePlayer, scoreComputer);


        //console.log(roundGame(playerMove, computerMove));
        //console.log('Your Choice: ' + playerMove);
        //console.log('Computer Choice: ' + computerMove);
        //console.log('----------------------');
}

function checkWinnerAfterFiveRound(scorePlayer, scoreComputer) {
    if (scorePlayer >= 5) {
        return 'You Won the Game! Congrats';
    } else if (scoreComputer >= 5) {
        return 'You Lost the game:/ Maybe find something else to do?';
    }
}
//game();



