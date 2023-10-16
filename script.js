let arr = ['Rock', 'Paper', 'Scissors'];
function getComputerChoice(arr) {
    let rand = Math.floor(Math.random() * 3);
    return arr[rand];
}

console.log(getComputerChoice(arr));
