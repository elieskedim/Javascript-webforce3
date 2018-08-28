$(() => {
    $($('#contact')).submit(function (event) {

        const NOM = $('#nom');
        event.preventDefault();
        
        !NOM.val() ? NOM.addClass('is-invalid') : NOM.addClass('is-valid');
    });
})