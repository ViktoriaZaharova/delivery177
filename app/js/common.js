$(document).ready(function() {
    $('.info-section__box .name').click(function () {
        $(this).find('.description').slideToggle();
    });


    // mask phone
    $("[name='phone']").mask("8 (999) 999-99-99");

    $('.btn-burger').click(function () {
       $('#mobile-menu').toggleClass('active');
    });

    $('.btn-close').click(function () {
        $('#mobile-menu').removeClass('active');
    });

});

