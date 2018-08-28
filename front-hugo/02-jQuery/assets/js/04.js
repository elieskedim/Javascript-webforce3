$(() => {
    $($('#MonFormulaire')).submit(function (event) {
        $('#MonFormulaire').hide();
        event.preventDefault();
        $("<p>Bonjour " + $('#nomcomplet').val() + "</p>").insertAfter($('#MonFormulaire'));
    });
})