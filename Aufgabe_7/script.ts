//Arrays
const drums: HTMLAudioElement[] = [];
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

document.querySelector(".pad1").addEventListener("click", function () {
    playSample(0);
});
document.querySelector(".pad2").addEventListener("click", function () {
    playSample(1);
});
document.querySelector(".pad3").addEventListener("click", function () {
    playSample(2);
});
document.querySelector(".pad4").addEventListener("click", function () {
    playSample(3);
});
document.querySelector(".pad5").addEventListener("click", function () {
    playSample(4);
});
document.querySelector(".pad6").addEventListener("click", function () {
    playSample(5);
});
document.querySelector(".pad7").addEventListener("click", function () {
    playSample(6);
});
document.querySelector(".pad8").addEventListener("click", function () {
    playSample(7);
});
document.querySelector(".pad9").addEventListener("click", function () {
    playSample(8);
});

function interval() {
    drums[6].play();
    drums[5].play();
    drums[4].play();
}
document.querySelector(".button").addEventListener("click", function () {
    setInterval(function () {
        interval();
    }, 500);
});