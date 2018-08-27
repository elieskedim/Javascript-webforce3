/*
    Manipulation des contenus
 */
l = (e) => console.log(e);

// -- Je souhaite récupérer mon lien google.. Comment proceder ?

const google = document.getElementById('google');


//Récuperer la classe
l(google.className);

//Récuperer l'id
l(google.id);

//Récuperer le href
l(google.href);

//Récuperer le contenu
l(google.textConten);

//Modifier le text en JS
google.textContent = 'Elies';
l(google.textConten);


/*-----------------------
    AJOUTEZ UN ELEMENT
 -----------------------*/

/*
* Nous allons procedez en deux étape Premièrement la fonction document.createElement()
* va permettre de generer un nouvel element dans le DOM,que je pourrais modifier par
* la suite avec les methodes que nous venons de voir.
*
* PS: se nouvel élément est placé en mémoire
*
* 2. L'ajouter à la page.
*
* */

var h1 = document.createElement('h1');
h1.textContent = "Titre de mon Article";
document.body.appendChild(h1);
var link = document.createElement('a');
link.href= 'https://pornhub.com';
link.textContent = 'Enjoy';
link.style.color = "red";
link.style.textDecoration = 'none';
h1.appendChild(link);

/*
*
*
*   exo Pratique
*
* */

var input = document.createElement('input');
input.type = 'text';
input.placeholder = 'Entrez du text';
document.body.appendChild(input);

input.addEventListener('change', saisi);
function saisi(){
    alert(input.value);
}


