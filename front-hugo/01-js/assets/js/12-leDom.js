/*
*  Comment puis-je faire pour récuperer les information de ma page html ?
* */

/*---------------------------------------------------------------------\
| ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~   document.getElementById  ~ ~ ~ ~ ~ |
|----------------------------------------------------------------------|
| document.getElementById() : est une fonction qui va permettre de     |
| recuperer un element HTML à partir de sont ID                        |
\______________________________________________________________________/
 */

let bonjour = document.getElementById('bonjour');
console.log(bonjour);

/*---------------------------------------------------------------------\
| ~  ~  ~  ~  ~  ~  ~  ~  ~ document.getElementsByClassName  ~ ~ ~ ~ ~ |
|----------------------------------------------------------------------|
|   document.getElementsByClassName() : est une fonction qui va        |
|   permettre de recuperer une liste html a partir de leurs classes    |
\______________________________________________________________________/
 */
let content = document.getElementsByClassName('contenu');
console.log(content[1]); // Retourne un tableau.

//  ⚠️Me renvoie un tavleau JS avec mes éléments HTML. Meme s'il n'y à qu'un seul element. ⚠️

/*---------------------------------------------------------------------\
| ~  ~  ~  ~  ~  ~  ~  ~  ~ document.getElementsByTagName    ~ ~ ~ ~ ~ |
|----------------------------------------------------------------------|
|   document.getElementsByTagName() : est une fonction qui va          |
|   permettre de recuperer un ou plusieurs elements (une liste) HTML à |
|   partir de leur balises                                             |
\______________________________________________________________________/
 */
const p = document.getElementsByTagName('p');
console.log(p); 