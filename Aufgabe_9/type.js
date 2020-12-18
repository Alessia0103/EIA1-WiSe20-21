//Elemente aus dem Html document
var redo = document.getElementById("redo");
var data = document.getElementById("data");
var list = document.getElementById("liste");
var text = document.getElementById("text"); //das was man reinschreibt//HTMLInput 
//classes names für die elemente welche verändert werden
var erledigt = "fa-check-circle";
var nichterledigt = "fa-circle";
var druchgestrichen = "lineThrough";
//var                           
var LIST = [];
var id = 0;
var nome;
var done;
var trash;
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
function loadList(array) {
    // tslint:disable-next-line: no-any
    array.forEach(function (redo) {
        addToDo(redo.nome, redo.id, redo.done, redo.trash);
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
    } //wenn trash= true soll es nicht angezeigt werden, code muss dann nicht ertst komplett gelesen werden
    //return wird dafür genutzt
    var finish = done ? erledigt : nichterledigt; //wenn es erledigt ist wir die "erledigt " klasse benützt wenn, nicht dann das andere 
    var lin = done ? druchgestrichen : ""; // wenn true dann wird es durchgestrichen wenn nicht wird ein leeres string verwendet 
    var item = "<li class=\"item\">                            \n                         <i class=\"far " + finish + "\" job=\"complete\" id=\"" + id + "\"></i>\n                        <p class=\"idk " + lin + "\"> " + toDo + "</p>\n                        <i class=\"fas fa-trash\" job=\"delete\" id=\"" + id + "\"></i></li> \n                          "; //code aud dem hatml dokument welches bearbeitet wird 
    //job="delete" ist das attribut welches wir am ende brauchen
    var position = "beforeend"; // direkt nach dem lastchild, vor dem ende //wenn wir innerhtml benützen würden würde es alles überschreiben was in dem element ist 
    // jedes neue element wird direkt nach dem alten element angesetzt
    list.insertAdjacentHTML(position, item);
}
//key.event für die enter taste 
document.addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        var toDo = text.value; //text aus dem elementen oben //value von dem Text wird hier dann übernommen
        // if ist nicht empty
        if (toDo) {
            addToDo(toDo, id, false, false); //wenn ein neues element in die liste gepusht wird müssen "done" und "trash" false sein wweil sonst würde es gelöscht werden
            //array
            LIST.push({
                nome: toDo,
                id: id,
                done: false,
                trash: false
            });
            //Lokaler speicher damit beim refreshen der Seite die to-dos bleiben,
            localStorage.setItem("TODO", JSON.stringify(LIST));
            id++;
            ListederElemente();
        }
        text.value = ""; //Textfeld wird wieder leer gemacht nachdem auf enter gedrückt worden ist 
    }
});
var plus = document.getElementById("plus");
//eventlistener für das Pluszeichen //wusste nicht wie ich es anders verbinden sollte 
plus.addEventListener("click", function () {
    var toDo = text.value;
    if (toDo) {
        addToDo(toDo, id, false, false);
        LIST.push({
            nome: toDo,
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
//toggeln// immer wenn auf das check zeichen geklickt wir
function completeToDo(element) {
    element.classList.toggle(erledigt);
    element.classList.toggle(nichterledigt);
    element.parentNode.querySelector(".idk").classList.toggle(druchgestrichen);
    LIST[element.id].done = LIST[element.id].done ? false : true;
}
//remove #trash //das ganze element muss gelöscht werden
function removeToDo(element) {
    element.parentNode.parentNode.removeChild(element.parentNode);
    LIST[element.id].trash = true;
}
//eventlistener für knöpfe
list.addEventListener("click", function (event) {
    var clicked = (event.target);
    var elementJob = clicked.attributes.getNamedItem("Job").value;
    if (elementJob == "complete") {
        completeToDo(clicked);
    }
    else if (elementJob == "delete") {
        removeToDo(clicked);
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