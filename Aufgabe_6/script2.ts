var europe08 = 4965.7;
var europe18 = 4209.3;


var africa08 = 1028;
var africa18 = 1235.5;


var southa08 = 1132.6;
var southa18 = 1261.5;


var northa08 = 6600.4;
var northa18 = 6035.6;


var asia08 = 12954.7;
var asia18 = 16274.1;

var australia08 = 1993;
var australia18 = 2100.5;


var total = europe18 + africa18 + southa18 + northa18 + asia18 + australia18;
console.log(total);


var europeRel = (Math.round((europe18 / total )* 100))+"%";
var africaRel = (Math.round((africa18 / total )* 100))+"%";
var southaRel = (Math.round((southa18 / total )* 100))+"%";
var northaRel = (Math.round((northa18 / total )* 100))+"%";
var asiaRel = (Math.round((asia18 / total )* 100))+ "%";
var australiaRel = (Math.round((australia18 / total )* 100))+ "%";

var europePer = (Math.round((( europe18 / europe08)-1) * 100))+"%";
var africaPer = (Math.round((( africa18 / africa08)-1) * 100))+"%";
var southaPer = (Math.round((( southa18 / southa08)-1) * 100))+"%";
var northaPer = (Math.round((( northa18 / northa08)-1) * 100))+"%";
var asiaPer = (Math.round((( asia18 / asia08)-1) * 100))+"%";
var australiaPer = (Math.round((( australia18 / australia08)-1) * 100))+"%";

var europeGAb = (Math.round ( europe18 - europe08 )) + "kg CO2";
var africaGAb = (Math.round( africa18 - africa08 )) + "kg CO2";
var southaGAb = (Math.round( southa18 - southa08 )) + "kg CO2";
var northaGAb = (Math.round( northa18 - northa08 )) + "kg CO2";
var asiaGAb = (Math.round( asia18 - asia08 )) + "kg CO2";
var australiaGAb = (Math.round( australia18 - australia08 )) + "kg CO2";

function europe() {
    document.querySelector("h1") .innerHTML = "Carbon Dioxide Emissions in Europe";
    document.querySelector("h2") .innerHTML = europe18;
    document.querySelector("p") .innerHTML = "Emission absolute of Europe in 2018";
    document.querySelector("#h2a") .innerHTML = europeRel;
    document.querySelector("#h2b") .innerHTML = europePer;
    document.querySelector("#h2c") .innerHTML = europeGAb;
    document.querySelector(".chart") .setAttribute('style', 'height:' + ((europe18 / total) * 100) + '%');
}
document.querySelector(".europe").addEventListener("click", europe);

function africa() {
    document.querySelector("h1") .innerHTML = "Carbon Dioxide Emissions in Africa";
    document.querySelector("h2") .innerHTML = africa18;
    document.querySelector("p") .innerHTML = "Emission absolute of Africa in 2018";
    document.querySelector("#h2a") .innerHTML = africaRel;
    document.querySelector("#h2b") .innerHTML = africaPer;
    document.querySelector("#h2c") .innerHTML = africaGAb;
    document.querySelector(".chart") .setAttribute('style', 'height:' + ((africa18 / total) * 100) + '%');
}
document.querySelector(".africa").addEventListener("click",africa);

function southa() {
    document.querySelector("h1").innerHTML = "Carbon Dioxide Emissions in South America";
    document.querySelector("h2").innerHTML = southa18;
    document.querySelector("p").innerHTML = "Emission absolute of South America in 2018";
    document.querySelector("#h2a").innerHTML = southaRel;
    document.querySelector("#h2b").innerHTML = southaPer;
    document.querySelector("#h2c").innerHTML = southaGAb;
    document.querySelector(".chart").setAttribute('style', 'height:' + ((southa18 / total) * 100) + '%');
}
document.querySelector(".southamerica").addEventListener("click",southa);

function northa() {
    document.querySelector("h1").innerHTML = "Carbon Dioxide Emissions in North America";
    document.querySelector("h2").innerHTML = northa18;
    document.querySelector("p").innerHTML = "Emission absolute of North America in 2018";
    document.querySelector("#h2a").innerHTML = northaRel;
    document.querySelector("#h2b").innerHTML = northaPer;
    document.querySelector("#h2c").innerHTML = northaGAb;
    document.querySelector(".chart").setAttribute('style', 'height:' + ((northa18 / total) * 100) + '%');
}
document.querySelector(".northamerica").addEventListener("click",northa);

function asia() {
    document.querySelector("h1").innerHTML = "Carbon Dioxide Emissions in Asia";
    document.querySelector("h2").innerHTML = asia18;
    document.querySelector("p").innerHTML = "Emission absolute of Asia in 2018";
    document.querySelector("#h2a").innerHTML = asiaRel;
    document.querySelector("#h2b").innerHTML = asiaPer;
    document.querySelector("#h2c").innerHTML = asiaGAb;
    document.querySelector(".chart").setAttribute('style', 'height:' + ((asia18 / total) * 100) + '%');
}
document.querySelector(".asia").addEventListener("click",asia);

function australia() {
    document.querySelector("h1").innerHTML = "Carbon Dioxide Emissions in Australia";
    document.querySelector("h2").innerHTML = australia18;
    document.querySelector("p").innerHTML = "Emission absolute of Australia in 2018";
    document.querySelector("#h2a").innerHTML = australiaRel;
    document.querySelector("#h2b").innerHTML = australiaPer;
    document.querySelector("#h2c").innerHTML = australiaGAb;
    document.querySelector(".chart").setAttribute('style', 'height:' + ((australia18 / total) * 100) + '%');
}
document.querySelector(".australia").addEventListener("click",australia);


