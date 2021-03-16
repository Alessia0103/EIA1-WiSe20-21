
//Arrays
let drums: HTMLAudioElement[] = [];
drums[0] = new Audio("A.mp3");
drums[1] = new Audio("C.mp3");
drums[2] = new Audio("F.mp3");
drums[3] = new Audio("G.mp3");
drums[4] = new Audio("hihat.mp3");
drums[5] = new Audio("snare.mp3");
drums[6] = new Audio("kick.mp3");
drums[7] = new Audio("laugh-1.mp3");
drums[8] = new Audio("laugh-2.mp3");


function playSample(x: number): void {
    drums[x].play();
}
//funktion die nichts zurück gibt :void
document.querySelector(".pad1").addEventListener("click", function (): void  {
    playSample(0);
    recordB(0);
});
document.querySelector(".pad2").addEventListener("click", function (): void  {
    playSample(1);
    recordB(1);
});
document.querySelector(".pad3").addEventListener("click", function (): void  {
    playSample(2);
    recordB(2);
});
document.querySelector(".pad4").addEventListener("click", function (): void  {
    playSample(3);
    recordB(3);
});
document.querySelector(".pad5").addEventListener("click", function (): void  {
    playSample(4);
    recordB(4);
});
document.querySelector(".pad6").addEventListener("click", function (): void  {
    playSample(5);
    recordB(5);
});
document.querySelector(".pad7").addEventListener("click", function (): void  {
    playSample(6);
    recordB(6);
});
document.querySelector(".pad8").addEventListener("click", function (): void {
    playSample(7);
    recordB(7);
});
document.querySelector(".pad9").addEventListener("click", function (): void {
    playSample(8);
    recordB(8);
});


// boolean kennt nur zwei optionen: wahr oder falsch
let recording: boolean;


//button play pause toggen
const play: HTMLElement = document.getElementById("play");
const pause: HTMLElement = document.getElementById("pause");                    




//Pause und Play
document.getElementById("play").addEventListener("click", function(): void {
    classswitch(play, pause);
    playsound(true);
});
document.getElementById("pause").addEventListener("click", function(): void {
    classswitch(pause, play);
    playsound(false);
});

//Elemente welche durch die funktion getauscht werden 
function classswitch(firstHtmlElement: HTMLElement, secondHtmlElement: HTMLElement): void {
    firstHtmlElement.classList.add("is-hidden"); //wird nicht mehr angezeigt
    secondHtmlElement.classList.remove("is-hidden"); //wird durch remove wieder angezeigt
}



//record und Trash 
//record button 
const record: HTMLElement = document.getElementById("mic");
const recordred: HTMLElement = document.getElementById("mic2");
let leeresArray: number [] = [4, 5, 6];

function recordB(x: number): void {
    if (recording == true) {
        leeresArray.push(x);
        console.log("hallo");
}}

document.getElementById("mic").addEventListener("click", function(): void {
    change(record, recordred);
    recording = true;

});
document.getElementById("mic2").addEventListener("click", function(): void {
    change(recordred, record);
    recording = false;
});

//Elemente welche durch die funktion getauscht werden 
function change(record1: HTMLElement, record2: HTMLElement): void {
    record1.classList.add("aktive"); //wird rot 
    record2.classList.remove("aktive"); //wird nicht mehr rot
}




//trash
const trash: HTMLElement = document.getElementById("trash");


trash.addEventListener("click", function(): void {
    leeresArray = [];
});

//beat 
let x: number = 0;
let interval: number ;

function playsound(i: boolean): void {              //sagt ob das interval angewendet wird oder nicht, boolean = true wird angewendet
    if (i == true) {
        interval = setInterval(function(): void {
            playSample(leeresArray[x]);
            x++;                                    //geht mein leeres  Array durch
            console.log(x);                         //gibt mir an an welcher stelle mein Array ist 
            if (x >= leeresArray.length) {
            x = 0;                                  //damit es wieder bei null anfängt
        }
        },                     300);
    } else {
        clearInterval(interval);
    }
}    

//Tastenkombi
// tslint:disable-next-line: typedef
document.addEventListener("keydown", function(click): void {
    switch (click.key) {
        case "1":
            playSample(0);
            recordB(0);
            break;
        case "2":
            playSample(1);
            recordB(1);
            break;
        case "3":
            playSample(2);
            recordB(2);
            break;
        case "4":
            playSample(3);
            recordB(3);
            break;
        case "5":
            playSample(4);
            recordB(4);
            break;
        case "6":
            playSample(5);
            recordB(5);
            break;
        case "7":
            playSample(6);
            recordB(6);
            break;
        case "8":
            playSample(7);
            recordB(7);
            break;
         case "9":
            playSample(8);
            recordB(8);
            break;
        case "a":
            recordB(x);
            change(record, recordred);
            recording = true;
            break;
        case "s":
            recordB(x);
            change(recordred, record);
            recording = false;
            break;
        case "n":
            classswitch(play, pause);
            playsound(true);
            break;
        case "m":
            classswitch(pause, play);
            playsound(false);
            break;
        case "y":
            leeresArray = [];
            break;
       }});




