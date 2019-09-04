// mit function arrow '=>' läuft nicht 

// *** with jQuery ***
$(document).ready(function() {
    $("p").on({
        mouseover: function() {
            $("body").css("background", "lightblue");
        },
        mouseout: function() {
            $("body").css("background", "lightgreen");
        },
        click: function() {
            $(this).toggleClass("light");
        }
    });

    $("div").on("click", "section", function() {
        $(this).css({
            "color": "red",
            "font-family": "Great Vibes",
            "font-size": "30px",
            "border": "2px solid red"
        });
        $(this).hide(2000).fadeOut(3000);
        //$(this).hide(2000).fadeIn(3000);// am ende bleibt in display und nicht verschwindet sehen
        //        $(this).slideToggle(3000);
    });

    $("#on").on("click", function() {
        $("<section> this section inserted from jQuery and I'll leave if click on me</section>").insertAfter("#on");
    })

    $("#off").on("click", function() {
        $("div").off("click");
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