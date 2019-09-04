// mit function arrow '=>' läuft nicht 

// *** with jQuery ***
$(document).ready(function() {
    $("select").change(function(e) {
        e.preventDefault();
        $("p").text("Your City is: " + ((e.target.value)));
        console.log((e.target.value));
        $("p").hide().fadeIn(1000);
    });
    // $("p").text("Your City is: " + $(this).val());
    // alert($(this).val());
    // console.log($(this).val());
    // $("p").hide().fadeIn(500);
})

// *** the same with JS ***

// let sel = document.getElementById("select");
// let p = document.querySelector("p");
// sel.addEventListener("change", changedCity);

// function changedCity(e) {
//     e.preventDefault();
//     
//     p.innerHTML = e.target.value;
//     //p.innerHTML = this.value;
//     p.style.display = "block";
// }

// *** with onchange ***

// sel.onchange = function(e) {
//     e.preventDefault();
//     p.innerHTML = e.target.value;
//     p.style.display = "block";
// }




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