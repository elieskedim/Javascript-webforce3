$(() => {

    var nom = $('#nom');
    var prenom = $('#prenom');
    var email = $('#email');
    var tel = $('#tel');


    function validateEmail(email) {
        var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        var valid = emailReg.test(email);

        if (!valid) {
            return false;
        } else {
            return true;
        }
    }

    var validateTel = tel => {
        var telReg = new RegExp("(0|\\+33|0033)[1-9][0-9]{8}");
        var valid = telReg.test(tel);

        if (!valid) {
            return false;
        } else {
            return true;
        }
    }

    var contacts = [];

    $('#contact').on('submit', function (e) {

       e.preventDefault();
       $('#errorNom').hide();
       $('#errorPrenom').hide();
       $('#errorEmail').hide();
       $('#errorTel').hide();
       
       let valideForm = true;

        if (nom.val().length === 0) {
                $('#errorNom').show();
                valideForm = false;
        }

        if (prenom.val().length === 0) {
            $('#errorPrenom').show();
            valideForm = false;
        }

        if (!validateEmail(email.val())) {
            $('#errorEmail').show();
            valideForm = false;
        }

        if (!validateTel(tel.val())) {
            $('#errorTel').show();
            valideForm = false;
        }

        contacts.push({
            nom: nom.val(),
            prenom: prenom.val(),
            email: email.val(),
            tel: tel.val()

        });
        console.log(contacts);
        console.log(contacts.length);
        console.log(tel.val());
        
       
        

        $('<tr>' +'<td> '+ nom.val() + '</td>' +'<td>' + prenom.val() + '</td>' +'<td>' + email.val() +'</td>' +'<td>' + tel.val() + '</td>' +'</tr>').insertAfter('tbody');
        $('.aucuncontact').hide();
        this.reset();
    });
});