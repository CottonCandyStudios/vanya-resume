function scrollToSection(target) {
    $('html, body').animate({
        scrollTop: $(target).offset().top - 50
    }, 1000);
}

$('nav a').on('click', function(e){
    e.preventDefault();
    var target = $(this).attr('href'),
        parent = $(this).parent();
    scrollToSection(target);
    $('.active').removeClass();
    parent.addClass('active');
});