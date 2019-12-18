$(document).ready(function(){

    $('button').click(function(){
        $(this).prev().slideToggle('slow');
    });

})