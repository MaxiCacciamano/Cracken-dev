$(document).ready(function () {

    $(".menu-btn a").on('click touch', function () {
        var scroll = $(window).scrollTop();
        $(".overlay").fadeToggle(200);
        $(this).toggleClass('btn-open').toggleClass('btn-close');

        if( $(this).hasClass('btn-close') ) {
            $(".navbar").css("background-color", "transparent");
        }
        else if( scroll > 100) {
            $(".navbar").css("background-color", "#000000");
        }
    });

    $('.menu a').on('click touch', function () {
        $(".overlay").fadeToggle(200);
        $(".menu-btn a").toggleClass('btn-open').toggleClass('btn-close');
    });

});

$(document).ready(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
            if($('.overlay:visible').length == 0) {
                $(".navbar").css("background-color", "#000000");
            }
        } else {
            $(".navbar").css("background-color", "transparent");
        }
    });
});