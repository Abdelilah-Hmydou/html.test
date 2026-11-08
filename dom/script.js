let vraag = document.querySelector("#vraag");
let antwoorden = document.querySelectorAll(".antwoorden")

let antwoord1 = document.querySelector("#antwoord1");
let antwoord2 = document.querySelector("#antwoord2");
let antwoord3 = document.querySelector("#antwoord3");
let antwoord4 = document.querySelector("#antwoord4");

let = Welke_Vraag = 0;

const vragen_voetbal = [
["wat doet de spits","scoren","Missen","verdedigen","Wegrennen","scoren"],
["Wie is de beste speler ooit?","Cr7","Messi","klian","vini","Cr7"],
["Wie heeft WK van 2026 gewonnen?","Curacao","Marokko","Spanje","Frankrijk","Spanje"],
];

vragen.textContent = vragen_voetbal [0][0]
antwoorden.forEach(function(antwoord,index){
    antwoord.textContent = vragen_voetbal[Welke_Vraag][index+1]
});
// antwoord1.textContent = vragen_voetbal[Welke_Vraag][1]
// antwoord2.textContent = vragen_voetbal[Welke_Vraag][2]
// antwoord3.textContent = vragen_voetbal[Welke_Vraag][3]
// antwoord4.textContent = vragen_voetbal[Welke_Vraag][4]