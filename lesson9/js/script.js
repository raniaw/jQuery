// mit function arrow '=>' läuft nicht 

// *** with jQuery ***
$(document).ready(function() {

    $(".out").on("click", function() {

        $(".normal").fadeOut();
        $(".fast").fadeOut("fast");
        $(".veryFast").fadeOut("150");
        $(".slow").fadeOut("slow");
        $(".verySlow").fadeOut("5000");
    });
    $(".in").on("click", function() {
        $(".normal").fadeIn();
        $(".fast").fadeIn("fast");
        $(".veryFast").fadeIn("150");
        $(".slow").fadeIn("slow");
        $(".verySlow").fadeIn("5000");
    });
});


/**
 * Funktion für die zufällige dunkle Farbeerstellung
 */


function colorCreateDark() {
    var color;
    var max = 160;
    var min = 0;

    var colRed = Math.floor(Math.random() * (max - min)) + min;
    var colBlue = Math.floor(Math.random() * (max - min)) + min;
    var colGreen = Math.floor(Math.random() * (max - min)) + min;

    color = "rgb(" + colRed + "," + colGreen + "," + colBlue + ")";

    return color;
}
/**
 * Funktion für die zufällige helle-(Pastel)Farbeerstellung
 */

function colorCreatePastel() {
    var color;
    var max = 256;
    var min = 180;

    var colRed = Math.floor(Math.random() * (max - min)) + min;
    var colBlue = Math.floor(Math.random() * (max - min)) + min;
    var colGreen = Math.floor(Math.random() * (max - min)) + min;

    color = "rgb(" + colRed + "," + colGreen + "," + colBlue + ")";

    return color;
}