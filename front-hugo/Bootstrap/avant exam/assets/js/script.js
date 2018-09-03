$(() => {
    var errorNom = $('#errorNom');
    var errorPrenom = $('#errorPrenom');
    var errorAdress = $('#errorAdresse');
    var errorCp = $('#errorCp');
    var errorTel = $('#errorTel');
    var errorPays = $('#errorPays');
    var nom = $('#nom');
    var prenom = $('#prenom');
    var adress = $('#adress');
    var cp = $('#cp');
    var tel = $('#tel');
    var form = $('#form');
    var pays = $('#pays');

    errorPays.hide();
    errorTel.hide();
    errorCp.hide();
    errorAdress.hide();
    errorPrenom.hide();
    errorNom.hide();

    var validateTel = tel => {
        var telReg = new RegExp("(0|\\+33|0033)[1-9][0-9]{8}");
        return telReg.test(tel);
    }

    form.on("submit", function(e){
        e.preventDefault();

        console.log(nom.val());

        if(nom.val().length === 0){
            errorNom.show();
        }else{
            errorNom.hide();
        }

        if (prenom.val().length === 0) {
            errorPrenom.show();
        } else {
            errorPrenom.hide();
        }

        if (adress.val().length === 0) {
            errorAdress.show();
        } else {
            errorAdress.hide();
        }

        if (cp.val().length === 0) {
            errorCp.show();
        } else {
            errorCp.hide();
        }

        if (!validateTel(tel.val())) {
            errorTel.show();
        } else {
            errorTel.hide();
        }

        if (pays.val() == 'Pays') {
            errorPays.show();
        } else {
            errorPays.hide();
        }
    });/* Fin du submit */

    


});