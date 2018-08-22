var Date = new Date();
var DateYear = Date.getFullYear(); 
function User() {

    let Prenom = prompt('Veuillez saisir votre Prénom.');

    let Age = parseInt(prompt('Bonjour ' + Prenom + ' Quelle age a tu ?'));

    alert('tu es donc nee en ' + (DateYear - Age));

    document.write("Bonjour " + Prenom + " Tu as " + Age + " ans!");
} 
User();