//Arrays
var drums = [];
drums[0] = new Audio("A.mp3");
drums[1] = new Audio("C.mp3");
drums[2] = new Audio("F.mp3");
drums[3] = new Audio("G.mp3");
drums[4] = new Audio("hihat.mp3");
drums[5] = new Audio("snare.mp3");
drums[6] = new Audio("kick.mp3");
drums[7] = new Audio("laugh-1.mp3");
drums[8] = new Audio("laugh-2.mp3");
function playSample(x) {
    drums[x].play();
}
//funktion die nichts zurück gibt :void
document.querySelector(".pad1").addEventListener("click", function () {
    playSample(0);
    recordB(0);
});
document.querySelector(".pad2").addEventListener("click", function () {
    playSample(1);
    recordB(1);
});
document.querySelector(".pad3").addEventListener("click", function () {
    playSample(2);
    recordB(2);
});
document.querySelector(".pad4").addEventListener("click", function () {
    playSample(3);
    recordB(3);
});
document.querySelector(".pad5").addEventListener("click", function () {
    playSample(4);
    recordB(4);
});
document.querySelector(".pad6").addEventListener("click", function () {
    playSample(5);
    recordB(5);
});
document.querySelector(".pad7").addEventListener("click", function () {
    playSample(6);
    recordB(6);
});
document.querySelector(".pad8").addEventListener("click", function () {
    playSample(7);
    recordB(7);
});
document.querySelector(".pad9").addEventListener("click", function () {
    playSample(8);
    recordB(8);
});
// boolean kennt nur zwei optionen: wahr oder falsch
var recording;
//button play pause toggen
var play = document.getElementById("play");
var pause = document.getElementById("pause"); //array für die Aufnahme (beat)
//Pause und Play
document.getElementById("play").addEventListener("click", function () {
    classswitch(play, pause);
    playsound(true);
});
document.getElementById("pause").addEventListener("click", function () {
    classswitch(pause, play);
    playsound(false);
});
//Elemente welche durch die funktion getauscht werden 
function classswitch(firstHtmlElement, secondHtmlElement) {
    firstHtmlElement.classList.add("is-hidden"); //wird nicht mehr angezeigt
    secondHtmlElement.classList.remove("is-hidden"); //wird durch remove wieder angezeigt
}
//record und Trash 
//record button 
var record = document.getElementById("mic");
var recordred = document.getElementById("mic2");
var leeresArray = [4, 5, 6];
function recordB(x) {
    if (recording == true) {
        leeresArray.push(x);
        console.log("hallo");
    }
}
document.getElementById("mic").addEventListener("click", function () {
    change(record, recordred);
    recording = true;
});
document.getElementById("mic2").addEventListener("click", function () {
    change(recordred, record);
    recording = false;
});
//Elemente welche durch die funktion getauscht werden 
function change(record1, record2) {
    record1.classList.add("aktive"); //wird rot 
    record2.classList.remove("aktive"); //wird nicht mehr rot
}
//trash
var trash = document.getElementById("trash");
trash.addEventListener("click", function () {
    leeresArray = [];
});
//beat 
var x = 0;
var interval;
function playsound(i) {
    if (i == true) {
        interval = setInterval(function () {
            playSample(leeresArray[x]);
            x++; //geht mein leeres  Array durch
            console.log(x); //gibt mir an an welcher stelle mein Array ist 
            if (x >= leeresArray.length) {
                x = 0; //damit es wieder bei null anfängt
            }
        }, 300);
    }
    else {
        clearInterval(interval);
    }
}
//# sourceMappingURL=script.js.map