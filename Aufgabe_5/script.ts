console.log("hey");
var europe08 = 4965.7;
var europe18 = 4209.3;
console.log("Europe produces "+ europe18 + "kg CO2");

var africa08 = 1028;
var africa18 = 1235.5;
console.log("Africa produces "+ africa18 + "kg CO2");

var southa08 = 1132.6;
var southa18 = 1261.5;
console.log("South America produces "+ southa18 + "kg CO2");

var northa08 = 6600.4;
var northa18 = 6035.6;
console.log("North America produces "+ northa18 + "kg CO2");

var asia08 = 12954.7;
var asia18 = 16274.1;
console.log("Asia produces "+ asia18 + "kg CO2");

var total = europe18 + africa18 + southa18 + northa18 + asia18;

console.log("Relativ zur Gesamtemission der Welt verursacht Europa damit " + ((europe18 / total )* 100).toFixed(2) + "%");
console.log("Relativ zur Gesamtemission der Welt verursacht Africa damit " + ((africa18 / total) * 100).toFixed(2) + "%");
console.log("Relativ zur Gesamtemission der Welt verursacht South America damit " + ((southa18 / total) * 100).toFixed(2)+ "%");
console.log("Relativ zur Gesamtemission der Welt verursacht North America damit " + ((northa18 / total) * 100).toFixed(2) + "%");
console.log("Relativ zur Gesamtemission der Welt verursacht Asia damit " + ((asia18 / total) * 100).toFixed(2) + "%");

console.log( "Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um " + ((( europe18 / europe08)-1) * 100).toFixed(2) + "% verändert");
console.log( "2018 im Vergleich zu 2008 sind das " + ( europe18 - europe08 ).toFixed(2) + "kg CO2");
console.log( "Für Africa hat sich 2018 im Vergleich zu 2008 die Emission um " + ((( africa18 / africa08)-1) * 100).toFixed(2) + "% verändert");
console.log( "2018 im Vergleich zu 2008 sind das " + ( africa18 - africa08 ).toFixed(2) + "kg CO2");
console.log( "Für South America hat sich 2018 im Vergleich zu 2008 die Emission um " + ((( southa18 / southa08)-1) * 100).toFixed(2) + "% verändert");
console.log( "2018 im Vergleich zu 2008 sind das " + ( southa18 - southa08 ).toFixed(2) + "kg CO2");
console.log( "Für North America hat sich 2018 im Vergleich zu 2008 die Emission um " + ((( northa18 / northa08)-1) * 100).toFixed(2) + "% verändert");
console.log( "2018 im Vergleich zu 2008 sind das " + ( northa18 - northa08 ).toFixed(2) + "kg CO2");
console.log( "Für Asia hat sich 2018 im Vergleich zu 2008 die Emission um " + ((( asia18 / asia08)-1) * 100).toFixed(2) + "% verändert");
console.log( "2018 im Vergleich zu 2008 sind das " + ( asia18 - asia08 ).toFixed(2) + "kg CO2");
