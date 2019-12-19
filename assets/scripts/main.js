$(document).ready(function(){

    /* Slide toggle for Index Event Text */
    $('button').click(function(){
        $(this).siblings('p').slideToggle('slow');
    });

    /* 1-5 image selector on attractions page */
    /* change the src="" depending on each button */
    $("#button1").click(function() {
        $("#carousel-image").attr("src", "assets/images/carousel-images/carousel-image1.jpg")
    });
    $("#button2").click(function() {
        $("#carousel-image").attr("src", "assets/images/carousel-images/carousel-image2.jpg")
    });
    $("#button3").click(function() {
        $("#carousel-image").attr("src", "assets/images/carousel-images/carousel-image3.jpg")
    });
    $("#button4").click(function() {
        $("#carousel-image").attr("src", "assets/images/carousel-images/carousel-image4.jpg")
    });
    $("#button5").click(function() {
        $("#carousel-image").attr("src", "assets/images/carousel-images/carousel-image5.jpg")
    });

})