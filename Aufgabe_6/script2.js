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
var europeRel = (Math.round((europe18 / total) * 100)) + "%";
var africaRel = (Math.round((africa18 / total) * 100)) + "%";
var southaRel = (Math.round((southa18 / total) * 100)) + "%";
var northaRel = (Math.round((northa18 / total) * 100)) + "%";
var asiaRel = (Math.round((asia18 / total) * 100)) + "%";
var australiaRel = (Math.round((australia18 / total) * 100)) + "%";
var europePer = (Math.round(((europe18 / europe08) - 1) * 100)) + "%";
var africaPer = (Math.round(((africa18 / africa08) - 1) * 100)) + "%";
var southaPer = (Math.round(((southa18 / southa08) - 1) * 100)) + "%";
var northaPer = (Math.round(((northa18 / northa08) - 1) * 100)) + "%";
var asiaPer = (Math.round(((asia18 / asia08) - 1) * 100)) + "%";
var australiaPer = (Math.round(((australia18 / australia08) - 1) * 100)) + "%";
var europeGAb = (Math.round(europe18 - europe08)) + "kg CO2";
var africaGAb = (Math.round(africa18 - africa08)) + "kg CO2";
var southaGAb = (Math.round(southa18 - southa08)) + "kg CO2";
var northaGAb = (Math.round(northa18 - northa08)) + "kg CO2";
var asiaGAb = (Math.round(asia18 - asia08)) + "kg CO2";
var australiaGAb = (Math.round(australia18 - australia08)) + "kg CO2";
function allgemein(continent, continent18, continentRel, continentPer, continentGAb) {
    document.querySelector("h1").innerHTML = "Carbon Dioxide Emissions in " + continent;
    document.querySelector("h2").innerHTML = continent18.toString();
    document.querySelector("p").innerHTML = "Emission absolute of " + continent + " in 2018";
    document.querySelector("#h2a").innerHTML = continentRel;
    document.querySelector("#h2b").innerHTML = continentPer;
    document.querySelector("#h2c").innerHTML = continentGAb;
    document.querySelector(".chart").setAttribute('style', 'height:' + ((continent18 / total) * 100) + '%');
}
window.addEventListener("load", function () {
    document.querySelector(".europe").addEventListener("mousemove", function () {
        allgemein("Europe", europe18, europeRel, europePer, europeGAb);
    });
});
window.addEventListener("load", function () {
    document.querySelector(".africa").addEventListener("mousemove", function () {
        allgemein("Africa", africa18, africaRel, africaPer, africaGAb);
    });
});
window.addEventListener("load", function () {
    document.querySelector(".southamerica").addEventListener("mousemove", function () {
        allgemein("South America", southa18, southaRel, southaPer, southaGAb);
    });
});
window.addEventListener("load", function () {
    document.querySelector(".northamerica").addEventListener("mousemove", function () {
        allgemein("North America", northa18, northaRel, northaPer, northaGAb);
    });
});
window.addEventListener("load", function () {
    document.querySelector(".asia").addEventListener("mousemove", function () {
        allgemein("Asia", asia18, asiaRel, asiaPer, asiaGAb);
    });
});
window.addEventListener("load", function () {
    document.querySelector(".australia").addEventListener("mousemove", function () {
        allgemein("Australia", australia18, australiaRel, australiaPer, australiaGAb);
    });
});
//# sourceMappingURL=script2.js.map