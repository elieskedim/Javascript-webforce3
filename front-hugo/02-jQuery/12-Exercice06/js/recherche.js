$(function () {

    $.ajax('https://jsonplaceholder.typicode.com/users').done(function (users) {
        // - 2 Je parcours le tableaux et j'affiche les articles
        $('#search').on('input', function(){ 
            $('.resultat').empty();
            console.log($('#search').val());
            $.each(users, function (index, user) {
                
                if ($('#search').val().toUpperCase() === user.username.toUpperCase() || $('#search').val().toUpperCase() === user.email.toUpperCase() || $('#search').val() === user.phone){
                    console.log('je suis dans le if');
                    $(`
            <div class="membre">
                            <div class="membre_informations">
                                <p>Nom Complet : ${user.name}</p>
                                <p>Username : ${user.username}</p>
                                <p>Email : ${user.email}</p>
                                <p>Téléphone : ${user.phone}</p>
                            </div>
                        </div>
                            `).appendTo('.resultat');
                }// fin du if
                else{
                    console.log('je suis dans le else');
                }
                });//fin du each
            $(".membre_informations").unmark().mark($('#search').val());
        });// Fin input
       

    });//fin du ajax done
});//fin jquery