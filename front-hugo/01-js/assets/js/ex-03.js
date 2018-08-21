/* -----------------------------------------------
    LA CONCATENATION
-------------------------------------------------*/

var DebutDePhrase = "Aujourd'hui ";
var DateDuJour = new Date();
var SuiteDePhrase = ", sont présent : ";
var NombreDeStagiaire = 10;
var FinDePhrase = " apprenants.<br>";

var Jour = DateDuJour.getDate();
var Moi = DateDuJour.getMonth()

if(Moi == 7){
    Moi = 'Aout'
}
console.log(DateDuJour.getFullYear());
console.log(DebutDePhrase + ' ' + Jour + ' ' + Moi + ' ' + DateDuJour.getFullYear() + SuiteDePhrase + NombreDeStagiaire + FinDePhrase);

