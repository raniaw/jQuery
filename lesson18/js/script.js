// mit function arrow '=>' läuft nicht 

// *** with jQuery ***
$(document).ready(function() {

    let inpPass = $("#pass");
    let check = $("#check");
    // let check = $('type = [checkbox]')

    console.log(inpPass, " ", check);


    check.on("click", function() {
        if (check.prop("checked") == true) {
            inpPass.attr("type", "text");
        } else {
            inpPass.attr("type", "password");
        }
    });


})





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