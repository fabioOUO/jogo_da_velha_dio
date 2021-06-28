let cells = []; /* guard all values of cells */
let selectedPlayer = 0;
let started = false;
let players = [
    {
        name: "Player",
        option: "O",
        ponts: 0
    },{
        name: "Computador",
        option: "X",
        ponts: 0
    }
]; /* player or computer */

function updatePlayerInformation(){
    document.getElementById("playerPonts").innerHTML = players[0].name + ": " + players[0].ponts + (players[0].ponts > 1? " pontos": " ponto");
    document.getElementById("computerPonts").innerHTML = players[1].name + ": " + players[1].ponts  + (players[0].ponts > 1? " pontos": " ponto");
}

/* start all vars */
function startVars(){
    for (let c = 0; c < 9; c++) {
        cells[c] = "";
    }
    selectedPlayer = 0;
    players[0].name = document.getElementById("name").value;
    players[0].option = document.getElementById("option").value;
    players[0].option == "O"? players[1].option = "X": players[1].option = "O"; 
    updatePlayerInformation();    
}

/* cleck cells */
function checkCells(idCell1, idCell2, idCell3, option){
    return (cells[idCell1] == option && cells[idCell2] == option && cells[idCell3] == option);
}

/* check all options */
function checkAllCells(idPlayer){
    const option = players[idPlayer].option;
    for (let c = 0; c < 3; c++) {
        if(checkCells(0+(c*3), 1+(c*3), 2+(c*3), option)){return true}/* column */
        if(checkCells(0+c, 3+c, 6+c, option)){return true} /* row */
    }
    if(checkCells(0, 4, 8, option)){return true}/* cross */
    if(checkCells(2, 4, 6, option)){return true}/* cross */
}

/* check cell cliked */
function clickCell(numberCell){
    if(started){
        const cell = document.getElementById(numberCell);
        cell.setAttribute("class", "cell full");
        cell.innerHTML = players[0].option;
        if(0 < numberCell < 10) cells[numberCell-1] = players[0].option;
        if(checkAllCells(0)) alert("Parabens "+players[0].name+" você ganhou!");
        generatePositionComputer();
        checkAllCells(1);
    }
}

function coloredCellVictory(idCell1, idCell2, idCell3){
    const cell1 = document.getElementById(idCell1);
    const cell2 = document.getElementById(idCell2);
    const cell3 = document.getElementById(idCell3);
    if(cell1 != null) cell1.setAttribute("class", "cell victory")
    if(cell2 != null) cell2.setAttribute("class", "cell victory")
    if(cell3 != null) cell3.setAttribute("class", "cell victory")
}

/* hide element */
function hide(id){
    const element =  document.getElementById(id);
    if(element != null) element.style.display = "none";
}
/* show element */
function show(id){
    const element =  document.getElementById(id);
    if(element != null) element.style.display = "flex";
}
/* start game */
function start(){
    hide("playerdata");
    show("playerInformation");
    show("buttonRestart");   
    startVars();
    started = true;
}
/* restart game */
function restart(){
    show("playerdata");
    hide("playerInformation");
    hide("buttonRestart");
}
document.getElementById("name").value = players[0].name;
hide("playerInformation");
hide("buttonRestart");
