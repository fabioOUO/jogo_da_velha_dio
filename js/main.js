
let cells = []; /* guard all values of cells */
let players = [
    {
        name: "player",
        option: "O",
        ponts: 0
    },{
        name: "Computador",
        option: "X",
        ponts: 0
    }
]; /* player or computer */

function updatePlayerInformation(){
    document.getElementById("playerPonts").innerHTML = players[0].name +": "+players[0].ponts+" ponts";
    document.getElementById("computerPonts").innerHTML = players[1].name +": "+players[1].ponts+" ponts";
}

/* start all vars */
function startVars(){
    for (let c = 0; c < 9; c++) {
        cells[c] = "";
    }
    const playerName =  players[0].name = document.getElementById("name").value;
    const playerOption =  players[0].name = document.getElementById("option").value;

    players[0].name = playerName;
    players[0].option = playerOption;
    playerOption == "O"? players[1].option = "X": players[1].option = "O"; 
    updatePlayerInformation();
}

/* check cell cliked */
function clickCell(numberCell){
    const cell = document.getElementById(numberCell);
    cell.innerHTML = players[0].caracter;     
    cell.setAttribute("class", "cell full");
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
}
/* restart game */
function restart(){
    show("playerdata");
    hide("playerInformation");
    hide("buttonRestart");
}

hide("playerInformation");
hide("buttonRestart");