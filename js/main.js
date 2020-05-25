$( document ).ready(function() {
    console.log( "document loaded" );
});

$( window ).on( "load", function() {
    console.log( "window loaded" );
    $("#atIcon").click( function(){
        $("#email").text( "jssmnecadou@gmail.com" )
} );
  
});