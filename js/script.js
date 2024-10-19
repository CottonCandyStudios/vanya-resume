function scrollToSection(target) {
    // edit code to make the scrolling animation run for 1 second
    $('html, body').animate({
        scrollTop: $(target).offset().top - 50
    }, 1000);
}

$('a.scroll-link').on('click', function(e){
    e.preventDefault();
    var target = $(this).attr('href');
    scrollToSection(target);
});