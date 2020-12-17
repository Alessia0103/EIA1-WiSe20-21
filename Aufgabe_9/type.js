var redo = document.getElementById("redo");
var data = document.getElementById("data");
var list = document.getElementById("liste");
var text = document.getElementById("text");
//classes names für die elemente welche verändert werden
var erledigt = "fa-check-circle";
var nichterledigt = "fa-circle";
var druchgestrichen = "lineThrough";
//var
// tslint:disable-next-line: typedef
var LIST = [], id = 0;
//Lokaler speicher damit beim refreshen der Seite die to-dos bleiben, //wird nun überall hingemacht wo wir den Array updaten
var date = localStorage.getItem("TODO");
//Checken ob die date nicht leer ist 
if (date) {
    LIST = JSON.parse(date);
    id = LIST.length;
    loadList(LIST); //Liste wird in das interface geladen
    ListederElemente();
}
else {
    //wenn die date nicht leer ist//wenn die seite zum ersten mal genutzt wird
    LIST = [];
    id = 0;
}
//Liste wird in das interface geladen
// tslint:disable-next-line: no-any
function loadList(array) {
    // tslint:disable-next-line: typedef
    array.forEach(function (redo) {
        addToDo(redo.name, redo.id, redo.done, redo.trash);
    });
}
//speicher löschen
redo.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});
// datum anzeigen
var options = { weekday: "long", month: "short", day: "numeric" }; // long= ausgeschrieben, short= abgekürzt, numeric= zahl 
var today = new Date();
data.innerHTML = today.toLocaleDateString("en-US", options); //data aus der constate, passt sich and as datum an
//add function
function addToDo(toDo, id, done, trash) {
    if (trash) {
        return;
    }
    var finish = done ? erledigt : nichterledigt;
    var lin = done ? druchgestrichen : "";
    var item = "<li class=\"item\">\n                         <i class=\"far " + finish + "\" job=\"complete\" id=\"" + id + "\"></i>\n                        <p class=\"idk " + lin + "\"> " + toDo + "</p>\n                        <i class=\"fas fa-trash\" job=\"delete\" id=\"" + id + "\"></i></li>\n                          ";
    // tslint:disable-next-line: typedef
    var position = "beforeend";
    list.insertAdjacentHTML(position, item);
}
var x = 1;
// tslint:disable-next-line: typedef
document.addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        var toDo = text.value;
        // if ist nicht empty
        if (toDo) {
            addToDo(toDo, id, false, false);
            LIST.push({
                name: toDo,
                id: id,
                done: false,
                trash: false
            });
            //Lokaler speicher damit beim refreshen der Seite die to-dos bleiben,
            localStorage.setItem("TODO", JSON.stringify(LIST));
            id++;
            ListederElemente();
        }
        text.value = "";
    }
});
var plus = document.getElementById("plus");
//eventlistener für das Pluszeichen //wusste nicht wie ich es anders verbinden sollte 
plus.addEventListener("click", function () {
    var toDo = text.value;
    if (toDo) {
        addToDo(toDo, id, false, false);
        LIST.push({
            name: toDo,
            id: id,
            done: false,
            trash: false
        });
        //Lokaler speicher damit beim refreshen der Seite die to-dos bleiben,
        localStorage.setItem("TODO", JSON.stringify(LIST));
        id++;
        ListederElemente();
    }
    text.value = "";
});
function completeToDo(element) {
    element.classList.toggle(erledigt);
    element.classList.toggle(nichterledigt);
    element.parentNode.querySelector(".idk").classList.toggle(druchgestrichen);
    LIST[element.id].done = LIST[element.id].done ? false : true;
}
//remove
function removeToDo(element) {
    element.parentNode.parentNode.removeChild(element.parentNode);
    LIST[element.id].trash = true;
}
//eventlistener für knöpfe
// tslint:disable-next-line: typedef
list.addEventListener("click", function (event) {
    var click = event.target;
    // tslint:disable-next-line: typedef
    var elementJob = click.attributes.job.value;
    if (elementJob == "complete") {
        completeToDo(click);
    }
    else if (elementJob == "delete") {
        removeToDo(click);
        id--;
        ListederElemente();
    }
    //Lokaler speicher damit beim refreshen der Seite die to-dos bleiben,
    localStorage.setItem("TODO", JSON.stringify(LIST));
});
// Anzeigen, wie viele todos noch existieren
function ListederElemente() {
    document.getElementById("number").innerHTML = "Tasks for today: " + id;
}
//# sourceMappingURL=type.js.map