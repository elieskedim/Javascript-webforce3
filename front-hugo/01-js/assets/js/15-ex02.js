var membres = [
    { 'pseudo':'Hugo','age':26,'email':'wf3@hl-media.fr','mdp':'wf3'},
    {'pseudo':'Rodrigue','age':56,'email':'rodrigue@hl-media.fr','mdp':'roro'},
    {'pseudo':'James','age':78,'email':'james@hl-media.fr','mdp':'james8862'},
    {'pseudo':'Emilio','age':18,'email':'milio@hl-media.fr','mdp':'milioDu62'}
];

w = e => document.write(e);
l = e => console.log(e);
const  pseudo     = document.getElementById('pseudo');
const  age        = document.getElementById('age');
const  email      = document.getElementById('email');
const  password   = document.getElementById('mdp');
const  submit     = document.getElementById('submit');
const titre       = document.getElementById('Bienvenue');
var ageError    = document.getElementsByClassName('ageError');
    ageError = ageError[0];
var pseudoError = document.getElementsByClassName('pseudoError');
    pseudoError = pseudoError[0];
const formulaire  = document.getElementById('InscriptionForm');
formulaire.action = " ";
l(formulaire);

pseudo.addEventListener('input', saisiTitre);
pseudo.addEventListener('change', verfiPseudo);
age.addEventListener('change', testAge);
submit.addEventListener('click', addUsers);
function addUsers(){
        membres.push({'pseudo':pseudo.value,'age':age.value,'email':email.value,'mdp':password.value});
        w('Bienvenue ' + pseudo.value);
        w('Voici la liste des autres Users : ');
        for (var i = 0; i < membres.length; i++) {
           w(membres[i].pseudo + '<br />');
            w(membres[i].age + '<br />');
            w(membres[i].email + '<br />');
            w(membres[i].mdp + '<br />');
        }
}
function verfiPseudo(){
    for (var i = 0; i < membres.length; i++){
        if (pseudo.value == membres[i].pseudo){
            pseudoError.style.display = 'block';
            submit.disabled = true;
            break;
        }else{
            pseudoError.style.display = 'none';
            submit.disabled = false;
        }
    }
}
function testAge(){
    if(age.value < 18){
        ageError.style.display = 'block';
        submit.disabled = true;
    }else{
        ageError.style.display = 'none';
        submit.disabled = false;
    }
}
function saisiTitre(){
    titre.textContent = pseudo.value;
}