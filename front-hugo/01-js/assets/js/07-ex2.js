function verif(age) {

    return age > 17 ? age = true : age = false;

}

var age = parseInt(prompt('Quelle est ton age ?'));

verif(age) ? alert('Bienvenue sur mon site !') : document.location.href = "https://www.pornhub.com/";

console.log(verif(age));