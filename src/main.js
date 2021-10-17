
/* the "responsive" class to to nav when the user clicks on the icon */

$(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
        $("header").addClass("open");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $("header").removeClass("open");
    }

    if($(window).scrollTop() > 50) {
        $(".nav").show();
        $(".nav").css({"position":"sticky","top":"0px","width":"100%"})
    }
    

/*
    if($(window).scrollTop() >=50) 
    { 
        $(window).scrollTop(0); 
    }
   */
});






// Scroll reveal

window.sr = ScrollReveal();
sr.reveal('.animate-left',{

    origin:'left',
    duration: 1000,
    distance: '25rem',
    delay: 300

})

sr.reveal('.animate-right',{

    origin:'right',
    duration: 1000,
    distance: '25rem',
    delay: 600

})

sr.reveal('.animate-top',{

    origin:'top',
    duration: 1000,
    distance: '25rem',
    delay: 600

})

sr.reveal('.animate-bottom',{

    origin:'bottom',
    duration: 1000,
    distance: '25rem',
    delay: 600

})

