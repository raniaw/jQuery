// $("p").css({
//     "background": colorCreatePastel(),
//     "font-size": "20px",
//     "padding": "10px",
//     "font-family": "Syncopate"
// });

// mit function arrow '=>' läuft nicht 
$(document).ready(function() {

    // let i = 0;
    // //$("#up").keyup(function()){ 
    // $("input[type='text']").keyup(function (e) {

    //     $("span").text(i += 1);
    //     $("p").show().fadeOut();
    // });

    $("#up").keyup(function(e) {
        $("span").text((e.target.value).length);
        $("p").text("Text show count: " + (e.target.value).length);
        $("p").show().fadeOut();
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