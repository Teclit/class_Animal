try {
    var poule = new Animal("oiseau", "Poulette", "Blanche", 2, true);
    var chien = new Animal("mammifère", "Snoopy", "Bleu", 4, false);
    var elephant = new Animal("mammifère", "Dumbo", "gris", 4, true);
    var daurade = new Animal("Poisson", "Chantal", "gris", 0,  false);
    var python = new Animal("serpent", "Kaa", "marron", 0, false);
    var flamantRose = new Animal("oiseau", "Bernard", "rose", 1, true);
    var bulle = new Animal("serpent", "Bulle", "marron");
}
catch (e) {
    console.error(e.message);
}
try{
    var truc = new Animal("mammifère", "", "marron", "hbdfj");
    var truc1 = new Animal("", "Truc_1", "blue");
}catch (e) {
    console.error(e.message);
}

try{
    var truc1 = new Animal("", "Truc_1", "blue");
}catch (e) {
    console.error(e.message);
}



var tAnimaux = [poule, chien, elephant, daurade, python, flamantRose, bulle];
for (let i in tAnimaux) {
    console.log(tAnimaux[i].vole());
    console.log(tAnimaux[i].dort());
    console.log(tAnimaux[i].toString());
}

// flamantRose.setNbPattes(2);
// console.log(flamantRose.toString());