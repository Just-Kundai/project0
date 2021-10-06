const statusDisplay = document.querySelector('.game--status'); //variables that are tracking the game state throughout the game
let gameActive = true;
let currentPlayer ="X";
let gameState =["","","","","","","","",""];
// declare some messages for the players//
const winningMessage =() => `Player ${currentPlayer}has won!`;
const drawMessage =() => `Game ended in a draw!`;
const currentPlayerTurn =() => `It's ${currentPlayer}'s turn`;
statusDisplay.innerHTML = currentPlayerTurn();
function handleCellPlayed( clickedCell, clickedCellIndex){
  gameState[clickedCellIndex] =currentPlayer;
  clickedCell.innnerHTML =currentPlayer;
};
function handlePlayerChange(){

}

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],

];
function handleResultValidation(){
  let roundWon =false;
  for (let i =0; i <= 7; i++){
    const winCondition = winningConditions[i];
  }

}
function handleCellClick(clickedCellEvent){
  const clickedCell = clickedCellEvent.target;
  const clickedCellIndex =parseInt(
    clickedCell.getAttribute('data-cell-index')
  );
  if (gameState[clickedCellIndex] !=="" || !gameActive){
    return;
  }
  handleCellPlayed(clickedCell, clickedCellIndex);
  handleResultValidation();
}
function handleRestartGame(){

}

document.querySelector(`.cell`).forEach(cell => cell.addEventListener('click', handleCellClick));
document
