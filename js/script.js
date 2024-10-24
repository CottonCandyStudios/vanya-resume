const box = document.querySelectorAll('.content-section');
var navHeight = $('.navigation').height();

function scrollToSection(target) {
    $('html, body').animate({
        scrollTop: $(target).offset().top - navHeight,
    }, 1000);
}

function scrollToEducation(target) {
    $('html, body').animate({
        scrollTop: $(target).offset().top - (window.innerHeight / 1.75),
    }, 1000);
}

$('nav a').on('click', function (e) {
    e.preventDefault();
    var target = $(this).attr('href');
    if (target === '#education') {
        scrollToEducation(target);
    } else {
        scrollToSection(target);
    }
});

window.addEventListener('scroll', function () {
    if (box[0].getBoundingClientRect().bottom > window.innerHeight / 2 - navHeight){
        let section = box[0].id;
        $('.active').removeClass();
        $('a[href="#' + section + '"]').parent().addClass('active');
    }
    if (box[1].getBoundingClientRect().top < window.innerHeight / 2 - navHeight){
        let section = box[1].id;
        $('.active').removeClass();
        $('a[href="#' + section + '"]').parent().addClass('active');
    }
    if (box[2].getBoundingClientRect().top < window.innerHeight / 2 + navHeight * 2){
        let section = box[2].id;
        $('.active').removeClass();
        $('a[href="#' + section + '"]').parent().addClass('active');
    }
    if (box[3].getBoundingClientRect().bottom - 1 < window.innerHeight){
        let section = box[3].id;
        $('.active').removeClass();
        $('a[href="#' + section + '"]').parent().addClass('active');
    }
});
