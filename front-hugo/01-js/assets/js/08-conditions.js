var email = 'elieskedim1@gmail.com';
var mdp = 'Leplusfort';

function monUtilisateurEstCorrect(emailTest, mdpTest) {
   return emailTest===email&&mdpTest===mdp ? true : false
}

var emailTest = prompt("Mail");
var mdpTest = prompt("Mdp");
monUtilisateurEstCorrect(emailTest, mdpTest) ? alert("Bienvenue " + emailTest) : alert("Faux, casse toi !");