$(document).ready(function () {

//    sticky navbar

    $(window).scroll(function () {
        if ($(window).scrollTop() > 50) {
            $('.navbar-container').addClass('sticky-bar');
            $('.header-container').addClass('sticky-header');
            $(".top-hidden-block").addClass("hidden");
            $('.logo').addClass("logo-anim");
            $("#main .navbar-brand").animate({
                alignSelf: 'center'
            })
        } else {
            $('.navbar-container').removeClass('sticky-bar');
            $('.header-container').removeClass('sticky-header');
            $(".top-hidden-block").removeClass("hidden");
            $('.logo').removeClass("logo-anim");
        }
    });

//    search and login toggle

    $("#toggleLogin, #close-btn-log").click(function () {
        $(".search-block").slideUp("300");
        $(".login-block").slideToggle(300);
    });
    $("#toggleSearch, #close-btn-search").click(function () {
        $(".login-block").slideUp("300");
        $(".search-block").slideToggle(300);
    });

//    scrolling top
    $("#toggleLogin, #toggleSearch").click(function () {
        $("html, body").animate({scrollTop: 0}, 350);
        return false;
    });

//    hamburger toggle

    function handler1() {
        $("#mySidenav").css("margin-left", "0px");
        $("#wrapper").animate({
            marginLeft: '285px'
        }, 250);
        $("body").css("overflow", "hidden");
        $(this).one("click", handler2);
    }

    function handler2() {
        $("#mySidenav").css("margin-left", "-280px")
        $("#wrapper").animate({
            marginLeft: '0px'
        }, 250);
        $("body").css("overflow", "visible");
        $(this).one("click", handler1);
    }

    $("#hamburger").one("click", handler1);

//    checkbox handler code

    function checkHandle1() {
        $(".custom-checkbox").css("background-position", "0 -27px");
        $(this).one("click", checkHandle2);
    }

    function checkHandle2() {
        $(".custom-checkbox").css("background-position", "0 0");
        $(this).one("click", checkHandle1);
    }

    $("#privacy").one("click", checkHandle1);
});