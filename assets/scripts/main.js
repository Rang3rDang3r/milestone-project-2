$(document).ready(function(){

    /* Slide toggle for Index Event Text */
    $('button').click(function(){
        $(this).siblings('p').slideToggle('slow');
    });

    /* 1-5 image selector on attractions page */
    /* change the src="" depending on each button */
    $("#button1").click(function() {
        $("#carousel-image").attr("src", "assets/images/carousel-images/carousel-image1.jpg")
        $("#carousel-image").attr("alt", "Farnham Castle")
    });
    $("#button2").click(function() {
        $("#carousel-image").attr("src", "assets/images/carousel-images/carousel-image2.jpg")
        $("#carousel-image").attr("alt", "Farnham Museum")
    });
    $("#button3").click(function() {
        $("#carousel-image").attr("src", "assets/images/carousel-images/carousel-image3.jpg")
        $("#carousel-image").attr("alt", "Lion and Lamb walk shopping")
    });
    $("#button4").click(function() {
        $("#carousel-image").attr("src", "assets/images/carousel-images/carousel-image4.jpg")
        $("#carousel-image").attr("alt", "Farnham Church")
    });
    $("#button5").click(function() {
        $("#carousel-image").attr("src", "assets/images/carousel-images/carousel-image5.jpg")
        $("#carousel-image").attr("alt", "Birdworld")
    });

    /* Slide toggle for attractions */
    $('button').click(function(){
        $("#show-hide1").slideToggle('slow')
        $("#show-hide2").slideToggle('slow');
    });

})