const redo: Element = document.getElementById("redo");
const data: Element = document.getElementById("data");
const list: Element = document.getElementById("liste");
const text: HTMLElement = document.getElementById("text");

//classes names für die elemente welche verändert werden
const erledigt: string = "fa-check-circle";
const nichterledigt: string = "fa-circle";
const druchgestrichen: string = "lineThrough";

//var

// tslint:disable-next-line: typedef
var LIST = [], id: number = 0;


//Lokaler speicher damit beim refreshen der Seite die to-dos bleiben, //wird nun überall hingemacht wo wir den Array updaten
let date: string = localStorage.getItem("TODO");

//Checken ob die date nicht leer ist 
if (date) {
    LIST = JSON.parse(date);
    id = LIST.length;
    loadList(LIST); //Liste wird in das interface geladen
    ListederElemente(); 
} else {
    //wenn die date nicht leer ist//wenn die seite zum ersten mal genutzt wird
    LIST = [];
    id = 0; 
}
//Liste wird in das interface geladen
// tslint:disable-next-line: no-any
function loadList(array: any[]): void {
    
    
    // tslint:disable-next-line: typedef
    array.forEach(function(redo: { name: string; id: number; done: boolean; trash: boolean; }) {
        addToDo(redo.name, redo.id, redo.done, redo.trash);

    });
}

//speicher löschen
redo.addEventListener("click", function(): void {
    localStorage.clear();
    location.reload();
});



// datum anzeigen
const options: object = {weekday : "long", month : "short", day : "numeric"}; // long= ausgeschrieben, short= abgekürzt, numeric= zahl 
const today: { toLocaleDateString: (arg0: string, arg1: object) => string; } = new Date();

data.innerHTML = today.toLocaleDateString("en-US", options); //data aus der constate, passt sich and as datum an

//add function



function addToDo(toDo: string, id: number, done: boolean, trash: boolean ): void {

    if (trash) { return; }

    const finish: string = done ? erledigt : nichterledigt;
    const lin: string =  done ? druchgestrichen : "";

    const item: string = `<li class="item">
                         <i class="far ${finish}" job="complete" id="${id}"></i>
                        <p class="idk ${lin}"> ${toDo}</p>
                        <i class="fas fa-trash" job="delete" id="${id}"></i></li>
                          `;
   
    
    // tslint:disable-next-line: typedef
    const position = "beforeend";

    list.insertAdjacentHTML(position, item);
}
var x: number = 1;


document.addEventListener("keyup", function(event: KeyboardEvent): void { 
    if (event.key == "Enter") {
        const toDo: string = text.value;

        // if ist nicht empty
        if (toDo) {
            addToDo(toDo, id, false, false);

            LIST.push({
                name : toDo,
                id : id,
                done : false,
                trash : false
            });
            //Lokaler speicher damit beim refreshen der Seite die to-dos bleiben,
            localStorage.setItem("TODO", JSON.stringify(LIST));

            id++;
            ListederElemente();
        }
        text.value = "";
    }
});

const plus: HTMLElement = document.getElementById("plus");



//eventlistener für das Pluszeichen //wusste nicht wie ich es anders verbinden sollte 
plus.addEventListener("click", function(): void {
    const toDo: string = text.value;
    if (toDo) {
        addToDo(toDo, id, false, false);

        LIST.push({
            name : toDo,
            id : id,
            done : false,
            trash : false
        });
        //Lokaler speicher damit beim refreshen der Seite die to-dos bleiben,
        localStorage.setItem("TODO", JSON.stringify(LIST));

        id++;
        ListederElemente();
    }
    text.value = "";
});




function completeToDo(element: Element): void {
    element.classList.toggle(erledigt);
    element.classList.toggle(nichterledigt);
    element.parentNode.querySelector(".idk").classList.toggle(druchgestrichen);
    LIST [element.id].done =  LIST [element.id].done ? false : true;
}
//remove

function removeToDo(element: Element): void {
    element.parentNode.parentNode.removeChild(element.parentNode);

    LIST [element.id].trash = true;
}

//eventlistener für knöpfe



list.addEventListener("click", function(event: Event): void {
    const click: EventTarget = event.target;
    
    // tslint:disable-next-line: typedef
    const elementJob = click.attributes.job.value;

    if (elementJob == "complete") {
        completeToDo(click);
      
       
 } else if (elementJob == "delete") {
        removeToDo(click);
        id--;
        ListederElemente() ;
}
     //Lokaler speicher damit beim refreshen der Seite die to-dos bleiben,
    localStorage.setItem("TODO", JSON.stringify(LIST));
});


// Anzeigen, wie viele todos noch existieren
function ListederElemente(): void {
    document.getElementById("number").innerHTML = "Tasks for today: " + id; }