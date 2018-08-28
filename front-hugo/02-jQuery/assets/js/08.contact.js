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


        if (nom.val().length === 0) {
            alert('Vezuillez entrer un nom');
        }

        if (prenom.val().length === 0) {
            alert('Vezuillez entrer un prenom');
        }

        if (!validateEmail(email.val())) {
            alert('Vezuillez entrer un mail valid');
        }

        if (!validateTel(tel.val())) {
            alert('Vezuillez entrer un tel valid');
        }

        contacts.push({
            nom: nom.val(),
            prenom: prenom.val(),
            email: email.val(),
            tel: tel.val()

        });
        console.log(contacts);
    });

        
    
    
});