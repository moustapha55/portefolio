$(document).ready(function() {
    $('.nav-link').click(function() {
        // Cacher tous les contenus
        $('.tab-pane').removeClass('show active');

        // Afficher le contenu correspondant au bouton cliqué
        const target = $(this).data('bs-target');
        $(target).addClass('show active');
    });
});
