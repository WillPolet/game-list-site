var gameList = [""];

class Jeux {
    constructor(Nom, Console, Fini, Finissable){
        this.Nom = Nom ;
        this.Console = Console ;
        this.Fini = Fini ;
        this.Finissable = Finissable ;
    }
}

function createObject(){
    var name = document.getElementById("name").value;
    var console = document.getElementById("console").value;
    var check = document.getElementById("myCheck").checked;
    var finishable = document.getElementById("finishable").value;
    var game = new Jeux(name, console, check, finishable);
    gameList.push(game);
    createDivConsole(game);
    createDiv(game);
    

}

function showGameList(){ /* Doesn't work when my function createObject is not in commentary */
    /*alert("gameList")*/   /* More exactly because I have a line that create a new game */
    console.log(gameList);
}

function deleteDiv(event){
    event.target.parentNode.remove()
}

function createDivConsole(game){
    if (document.getElementById(game.Console)){ /* Check if the div with the console ID already exist or not */

    }
    let divConsole = document.createElement("div")
    divConsole.id = game.Console
    document.getElementById("ListOfGames").appendChild(divConsole)
}

function createDiv(game){ /* For now be careful because createDivConsole is never call so the div is never created and you can appendChild so */
    
    let newDiv = document.createElement("div")
    let id = removeSpaces((game.Nom + game.Console))
    newDiv.id = id
    newDiv.className = "lineGame"
    /*--------------- first input*/
    let inputName = document.createElement("input")
    inputName.value = game.Nom
    inputName.setAttribute("readonly", "")
    /*--------------- second input*/
    let inputConsole = document.createElement("input")
    inputConsole.value = game.Console
    inputConsole.setAttribute("readonly", "")
    /* --------------- check box */
    let label = document.createElement("label")
    label.className = "switch"
    label.id = id + "label"
    let checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.id = id + "check"
    if (document.getElementById("myCheck").checked == true){
        checkbox.checked = true
    }
    let span = document.createElement("span")
    span.className = "slider round"
    /* ----------------- third input */
    let inputFinishable = document.createElement("input")
    inputFinishable.value = game.Finissable
    inputFinishable.setAttribute("readonly", "")
    /*------------------ Delete button */
    let deleteButton = document.createElement("button")
    deleteButton.textContent = "X"
    deleteButton.addEventListener('click', deleteDiv)
    /*----------------- appending */
    document.getElementById(document.getElementById(game.Console)).appendChild(newDiv)
    document.getElementById(id).appendChild(inputName)
    document.getElementById(id).appendChild(inputConsole)
    document.getElementById(id).appendChild(label)
    document.getElementById(id + "label").appendChild(checkbox)
    document.getElementById(id + "label").appendChild(span)
    document.getElementById(id).appendChild(inputFinishable)
    document.getElementById(id).appendChild(deleteButton)
}

/* Need to do a div for each console, two div in each console finish or not ? */
/* Need to change the append child when you check or uncheck the checkbox don't know how to do it */

function removeSpaces(a){
    a = a.trim()
    var strArray = a.split(" ");
    for (i = 0 ; i < strArray.length ; i ++){
        if (strArray[i] == strArray[i+1]){
            delete strArray[i]
        }
        if (strArray[i] == " " && strArray[i+1] == ","){
            delete strArray[i]
        }
    }
    var tab = strArray.filter(elm => elm)
    var sentence = tab.join("")
    return sentence
}