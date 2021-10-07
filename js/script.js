//Pop Up
// let py1Name = document.querySelectorAll('h3')[0]
// let py2Name = document.querySelectorAll('h3')[1]
// let py1NameInput = document.querySelector('.player-1-name')
// let py2NameInput = document.querySelector('.player-2-name')
// let submitBtn = document.querySelector('.pop-up-btn')
// let popUp = document.querySelector('.pop-up')
// let overlay = document.querySelector('.overlay')
// let radios = document.querySelectorAll('input[type="radio"]')
// let py1Icons = document.querySelectorAll('input[name="py1-icons"]')
// let py2Icons = document.querySelectorAll('input[name="py2-icons"]')
//
// document.querySelectorAll ('.click', handleRadioClick)
//    .forEach(element => element.addEventListener('click', handleRadioClick));
//
// // document.querySelector('click, handlePopUp')
// // document.querySelector('keyup', handleEnterForPopUp)
// // handleCellPlayed(clickedCell, clickedCellIndex);
// // handleResultValidation();
//  handlePopUp(submitBtn, popUp);
//  handleEnterForPopUp();
//  // submitBtn.addEventListener('click', handlePopUp)
//  // popUp.addEventListener('keyup', handleEnterForPopUp)
//
// function handleRadioClick(event) {
//     let selectedRadio = event.target
//
//     if (selectedRadio.name === 'py1-icons') {
//         disableRadioBtn(py2Icons, selectedRadio)
//     } else if (selectedRadio.name === 'py2-icons') {
//         disableRadioBtn(py1Icons, selectedRadio)
//     }
// }
//
// function disableRadioBtn(iconSet, buttonToDisable) {
//     let valueToDisable = buttonToDisable.value
//     iconSet.forEach(element => {
//         if (element.value === valueToDisable) {
//             element.disabled = true
//         }
//         else {
//             element.disabled = false
//         }
//     })
// }
//
// function handlePopUp() {
//      changeNames()
//     popUp.style.display = 'none';
//     popUp.style.zIndex = -1;
//     overlay.style.opacity = 1;
// }
//
// function handleEnterForPopUp(event) {
//     if ('.click' = 13) {
//         handlePopUp()
//     }
// }
//
// function changeNames() {
//     if (!py1NameInput || !py2NameInput) {
//       let  py1NameInput = 'Player One:'
//       let   py2NameInput = 'Player Two:'
//     } else {
//         py1Name.textContent = py1NameInput.value + ':'
//         py2Name.textContent = py2NameInput.value + ':'
//     }
// }
//
// // function makeBoard() {
// //     let gridSize = Number(boardSize.value)
// //     for (let i = 0; i < gridSize; i ++) {
// //         let div = document.createElement('div')
// //         div.setAttribute('class', 'column')
// //         gameBoard.appendChild(div)
// //         let columns = document.querySelectorAll('.column')
// //         let column = columns[i]
// //
// //         addButtons(gridSize, column)
// //     }
// //     gameBoard.style.display = 'grid'
// //     gameBoard.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
// // }
//

const statusDisplay = document.querySelector('.game--status'); //variables that are tracking the game state throughout the game
let gameActive = true;
let currentPlayer ="🔥";//

// let X = 🔥
// let O = 🧊
let gameState =["","","","","","","","",""];
// declare some messages for the players//
const winningMessage =() => `Player ${currentPlayer} has won!`;
const drawMessage =() => `Game ended in a draw!`;
const currentPlayerTurn =() => `It's ${currentPlayer}'s turn`;
statusDisplay.innerHTML = currentPlayerTurn();
function handleCellPlayed( clickedCell, clickedCellIndex){
  gameState[clickedCellIndex] =currentPlayer;
  clickedCell.innerHTML =currentPlayer;
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
    let a = gameState[winCondition[0]];
    let b = gameState [winCondition[1]];
    let c = gameState [winCondition[2]];
    if (a==='' || b === '' || c === ''){
      continue;
    };
    if (a === b && b === c){
      roundWon = true;
// figure out whose turn it is.
// figure out that plays current score.
// add 1 to that score.
//update the html/DOM with the new score.
console.log(currentPlayer);
 if(currentPlayer == "🧊"){
   let currentPlayerScore = document.querySelector('.py1-score')
   let newPlayerScore = parseInt(currentPlayerScore.innerHTML) + 1
   currentPlayerScore.innerHTML = newPlayerScore
 }
 else if (currentPlayer == "🔥"){
   let currentPlayerScore = document.querySelector('.py2-score')
   let newPlayerScore = parseInt(currentPlayerScore.innerHTML) + 1
   currentPlayerScore.innerHTML = newPlayerScore
 }
      break


    };

  };
if (roundWon){
  statusDisplay.innerHTML = winningMessage();
  gameActive = false;
  return;
};
let roundDraw = !gameState.includes("");
if (roundDraw){
  statusDisplay.innerHTML = drawMessage();
  gameActive = false;
  return;
}
handlePlayerChange();
currentPlayer = currentPlayer === "🔥" ? "🧊": "🔥"; //CHANGE EMOJI'S
statusDisplay.innerHTML = currentPlayerTurn();
};

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
};

function handleRestartGame(){
console.log('button')
 gameActive = true;
 currentPlayer = "🔥";
 gameState = ["", "", "", "", "", "", "", "", ""];
 statusDisplay.innerHTML = currentPlayerTurn();
 document.querySelectorAll('.cell')
            .forEach(cell => cell.innerHTML = "");
 };

 document.querySelector('.gameRestart').onclick = function(){
   //do stuff. when button is clicked run the handle Rstart game function.
   handleRestartGame();
 };



//   let gameCells = document.querySelectorAll('button.game-cells')
//   gameCells.forEach(cell => cell.textContent = "")
//   gameCells.forEach(cell => cell.disabled = false)
//   resultPara.textContent = 'NEW GAME!'
// }
//
// function makeGameMatrix(){
//   let matrix = []
//   let whitespaceRX = /\s/g
//   let columns = document.querySelectorAll(column)
//   for (let div of columns){
//     let columnContent = div.textContent.replace(whitespaceRX, '').split('')
//     matrix.push(columnContent)
//   }
//   return matrix
//
//
// }

const cells = document.querySelectorAll(`.cell`);//query selecto only selects one cell
cells.forEach(cell => cell.addEventListener('click', handleCellClick));
document
