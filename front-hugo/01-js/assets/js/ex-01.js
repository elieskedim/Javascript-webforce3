/* recette = 
[ 
    {
        "nom" : "Lasagne",
        "ingredient" : 
            [
                {
                    "nom": "Viande Haché",
                    "quantite" : 150,
                    "unite":"gramme"
                },
                {
                    "nom": "Tomates",
                    "quantite": 2
                },
                {
                    "nom": "Oigons",
                    "quantite": 2
                },
                 "Feuilles a lasagnes",
                {
                    "nom": "Bechamel",
                    "quantite": 120,
                    "unite": "cl"
                }
            ],
        "quategorie" :"Viande",
        "tempDecuissonMinutes" : 120,
        "ustensiles" : 
            [
                "Cul de poules",
                 "Plat au four"
            ],
        "preparation" : 
            [
                "Prenez vos oignons faites les revenir dans de l'huile puis ajoutez la viande haché.",
                 "Une fois la viande cuite reserver dans un cul de poule",
                  "Faite fondre le beurre dans une poele ajoutez de la farine et du lait",
                   "Une fois pret disposer des feuille de lasagne dans le plats au four et mettez en étages",
                    "Bonne appétit !"
            ]
        
    },
    {
        "nom" : "Carbonara",
        "ingredient": 
            [
                {
                    "nom" : "Pates",
                    "quantite" : 1,
                    "unite": "Paquet"
                },
                {
                    "nom": "Lardon",
                    "quantite" : 500,
                      "unite": "grammes"
                },
                "Crème"
    ],
        "quategorie": "Viande",
        "TempDeCuissonMinutes": 30,
        "ustensiles": 
            [
                "Casserole",
                "Poele"
            ],
        "preparation":
            [
                "Prenez vos pates faites les cuire dans de l'eau bouillantes",
                 "Une fois les pates cuite reserver les",
                  "Faite revenir vos lardons dans une poele",
                   "Une fois les lardons cuits ajoutez de la crème puis les pates"
            ]
    },
]; */

/* -----------------------------
        ~ ~ CONSIGNE ~ ~

    Réaliser une structure JSON
    permettant de stocker des
    recettes de cuisine.
----------------------------- */

var receipes = [
    {
        name: 'Tiramisu',
        category: 'Desserts',
        subCategory: 'Gateaux',
        price: 'Abordable',
        difficulty: 'Facile',
        plate: 8,
        starRating: 4.98462123,
        photoUrl: 'https://www.monlien.fr/verslaphoto.jpg',
        videoUrl: 'https://www.monlien.fr/verslavideo.mp4', cooking: {
            preparation: '30min',
            time: '',
            temp: ''
        },
        ingredients: [
            {
                name: 'Sucre',
                quantity: 80,
                unit: 'g',
                imgUrl: 'https://www.monlien.fr/versingredient.jpg'
            },
            {
                name: 'Café Expresso',
                quantity: 15,
                unit: 'cl',
                imgUrl: 'https://www.monlien.fr/versingredient.jpg'
            },
            {
                name: 'Chocolat Cacao Amer',
                quantity: '1',
                unit: 'cuillère à soupe',
                imgUrl: 'https://www.monlien.fr/versingredient.jpg'
            },
            {
                name: 'Canelle',
                quantity: '1',
                unit: 'pincée',
                imgUrl: 'https://www.monlien.fr/versingredient.jpg'
            }
        ],
        instructions: [
            {
                name: 'Séparer les blancs des jaunes d\'oeufs.',
                imgUrl: 'https://www.monlien.fr/versletape.jpg'
            },
            {
                name: 'Mélanger les jaunes avec le sucre roux et le sucre vanillé.',
                imgUrl: 'https://www.monlien.fr/versletape.jpg'
            },
            {
                name: 'Ajouter le mascarpone au fouet.',
                imgUrl: 'https://www.monlien.fr/versletape.jpg'
            }
        ]
    },
    {
        name: 'Pates',
        category: 'Plat',
        subCategory: 'Accompagnement',
        price: 'tres Abordable',
        difficulty: 'Facile',
        plate: 8,
        starRating: 4.98462123,
        photoUrl: 'https://www.monlien.fr/verslaphoto.jpg',
        videoUrl: 'https://www.monlien.fr/verslavideo.mp4', cooking: {
            preparation: '3 min',
            time: '10 min',
            temp: 'Feu Moyen'
        },
        ingredients: [
            {
                name: 'Pates',
                quantity: 500,
                unit: 'g',
                imgUrl: 'https://www.monlien.fr/versingredient.jpg'
            },
            {
                name: 'Eau',
                quantity: 500,
                unit: 'cl',
                imgUrl: 'https://www.monlien.fr/versingredient.jpg'
            },
            {
                name: 'Sel',
                quantity: '1',
                unit: 'cuillère à soupe',
                imgUrl: 'https://www.monlien.fr/versingredient.jpg'
            },
            {
                name: 'Poivre',
                quantity: '1',
                unit: 'pincée',
                imgUrl: 'https://www.monlien.fr/versingredient.jpg'
            }
        ],
        instructions: [
            {
                name: 'Faire Bouillir de l\'eau',
                imgUrl: 'https://www.monlien.fr/versletape.jpg'
            },
            {
                name: 'Mettre les pates',
                imgUrl: 'https://www.monlien.fr/versletape.jpg'
            },
            {
                name: 'saler poivrer',
                imgUrl: 'https://www.monlien.fr/versletape.jpg'
            }
        ]
    }
];