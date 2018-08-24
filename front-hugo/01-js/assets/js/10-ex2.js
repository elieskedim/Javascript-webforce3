var PremierTrimestre = 
[
        {
            nom: "LIEGEARD",
            prenom: "Hugo",
            moyenne: {
                francais: 4,
                math: 8,
                physique: 18
            }
        },
        {
            nom: "DUPOUX",
            prenom: "Marie-Pierre",
            moyenne: {
                francais: 19,
                math: 12,
                physique: 12,
                italien: 11
            }
        },
        {
            nom: "ELIE",
            prenom: "Romain",
            moyenne: {
                francais: 16,
                math: 15,
                physique: 10,
                latin: 11,
                chinois: 12,
                histoire: 15
            }
        },
        {
            nom: "CLOQUE",
            prenom: "Sandra",
            moyenne: {
                francais: 9,
                math: 2,
                physique: 12,
                italien: 1
            }
        },
        {
            nom: "KEDIM",
            prenom: "Elies",
            moyenne: {
                francais: 20,
                math: 20,
                physique: 20,
                latin: 20,
                chinois: 20,
                histoire: 20,
                japonais: 20
            }
        },
        {
            nom: "SINVRY",
            prenom: "Jhordan",
            moyenne: {
                francais: 13,
                math: 8,
                physique: 0,
                chinois: 20,
                histoire: 11,
                japonais: 9
            }
        }
];
var count =0, sommeNotes = 0;
document.write('<ol>');
for (var i = 0; i < PremierTrimestre.length; i++) {
    document.write('<li>');
    document.write(PremierTrimestre[i].nom + " " + PremierTrimestre[i].prenom);
    document.write('<ul>');
    for(let notes in PremierTrimestre[i].moyenne){
        
        document.write("<li>" + notes + " " + PremierTrimestre[i].moyenne[notes] + "</li>");
        count++;
        sommeNotes += PremierTrimestre[i].moyenne[notes];
        console.log(notes);
    }
    document.write("<li>Moyenne generale : " + (sommeNotes / count).toFixed(2) + "</li>");
    document.write("</ul>");
    sommeNotes = 0;
    count=0;
    document.write('</li>');
}
document.write('</ol>');

/* TROP FORT !!!!!!! 🙈🙈🙈🙈 */