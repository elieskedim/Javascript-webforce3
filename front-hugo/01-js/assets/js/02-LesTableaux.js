// Déclarer un tableau indexé

var monTableau = [];

var myArray = new Array; monTableau[0] = "jhordan";

monTableau[1] = "jonathan";

monTableau[2] = "Elies";

monTableau[3] = "Layla"; 
/* console.log(monTableau); //-- Affiche toutes les données

console.log(monTableau[1]);// jonathan

console.log(monTableau[3]); //Laylavar nosPrenoms = ["Luc","Sabuj","Jean-Philippe","Kévin"];
 */
//console.log(nosPrenoms);// Objet

var Coordonee = {

    prenom: "jhordan",

    nom: "sinvry",

    age: 20

}; 
/* console.log(Coordonee);

console.log(Coordonee['prenom']);

console.log(Coordonee.nom);  */
var annuaireDesApprenants = [

    ["jhordan", "Sinvry", "0783971515"],

    ["izuku", "midoriya", "XXXX XX XX XX "],

    {

        prenom: "Arnaud",

        nom: "DOHOU",

        tel: "00 00 000 00"
    },

    {

        prenom: "moha",

        nom: "Aidouni",

        tel: "XXX XXX XX XX"

    }

]; 
/* console.log(annuaireDesApprenants);

console.log(annuaireDesApprenants[1][0]);

console.log(annuaireDesApprenants[1][1]);

// Ceci n'est pa spratiqueconsole.log(annuaireDesApprenants [2].prenom);

console.log(annuaireDesApprenants[2].nom);
 */
var Contacts = [
    {
        prenom: "Hugo",
        nom: "LIEGEARD",
        coordonnees: {
            email: "wf3@hl-media.fr",
            tel: {
                fixe: "0596 108 328",
                fax: "0596 108 632",
                port: "0783 97 15 15"
            },
            adresse: {
                rue: "35 Rue Jules Michelet",
                cp: "92700",
                ville: "Colombes",
                pays: {
                    code: "FR",
                    nom: "France"
                }
            }
        }
    },
    {
        prenom: "Rodrigue",
        nom: "NOUEL",
        coordonnees: {
            email: "rodrigue@hl-media.fr",
            tel: {
                fixe: "0596 145 569",
                fax: "0596 896 452",
                port: "0696 07 04 34"
            },
            adresse: {
                rue: "Quartier Sainte-Thérèse",
                cp: "97200",
                ville: "Fort-de-France",
                pays: {
                    code: "MQ",
                    nom: "Martinique"
                }
            }
        }
    },
    {
        prenom: "Elies",
        nom: "KEDIM",
        coordonnees: {
            email: "elies.k@hl-media.fr",
            tel: {
                fixe: "",
                fax: "",
                port: "07 89 45 12 56"
            },
            adresse: {
                rue: "Au Paradis",
                cp: "77777",
                ville: "Eden Ville",
                pays: {
                    code: "PA",
                    nom: "3ème Ciel"
                }
            }
        }
    }
];
/* 
console.log(Contacts);
console.log(Contacts[0].coordonnees.adresse.pays.nom);
console.log(Contacts[1].coordonnees.adresse.pays.nom);
console.log(Contacts[2].coordonnees.adresse.pays.nom);
console.log(Contacts[2].prenom);

console.log(Contacts[1].length);
 */
for(var i = 0; i < Contacts.length; i++){
    console.log(Contacts[i].nom);
    console.log(Contacts[i].prenom);
        console.log(Contacts[i].coordonnees.email);
        console.log(Contacts[i].coordonnees.tel.fixe);
            console.log(Contacts[i].coordonnees.tel.fax);
            console.log(Contacts[i].coordonnees.tel.port);
            console.log(Contacts[i].coordonnees.adresse.rue);
            console.log(Contacts[i].coordonnees.adresse.cp);
            console.log(Contacts[i].coordonnees.adresse.ville);
                console.log(Contacts[i].coordonnees.adresse.pays.code);
                console.log(Contacts[i].coordonnees.adresse.pays.nom);
};
// ----------------------------------------------------------------------------------

// AJOUTER UN ELEMENT

// ----------------------------------------------------------------------------------

var Couleurs = ["Rouge", "Jaune", "Vert"]; console.clear();

console.log(Couleurs);// ----- La fonction push me permet d'ajouter un élément dan smon tableau

Couleurs.push('Orange');//-- unshit le rajoute au début

Couleurs.unshift('Bleu');

console.log(Couleurs);// ----------------------------------------------------------------------------------

                               // RECUPER ET SORTIR LE DERNIER ELEMENT

// ----------------------------------------------------------------------------------

/* La fonction pop() me permet de supprimer un ou plusieurs element

    * de mon tableau et d'en récupérerr la valeur.

        * /var monDernierElement = Couleurs.pop();

console.log(Couleurs);

console.log(monDernierElement);

/*La même est possible avec le premier élément en utilisant

*shift

*

*La fonction splice() vous permet de faire sortir un ou plusieurs éléments.

*/