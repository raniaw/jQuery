// mit function arrow '=>' läuft nicht 

// *** with jQuery ***
$(document).ready(function() {
    $("#frm").on("click", function(e) {
        e.preventDefault();
        var name = $("#name").val();
        if (name == "" || name == null) {
            $("#pErr").css("color", "red")
            $("#pErr").text("yours input is empty")
        } else {
            $("#pErr").text("");
            let nameUp = name.toUpperCase();
            var day = new Date().getDay();
            var rest = 6 - day;
            console.log(day, " ", rest)
            var text = "";
            switch (day) {
                case 0:
                    text = "Hello <span>" + nameUp + "</span>. Today is Sunday, is the Weekend";
                    $("#name").val("");
                    break;
                case 1:
                    text = "Hello  <span>" + nameUp + "</span>. Today is Monday. Only " + rest + " days left until Weekend!";
                    $("#name").val("");
                    break;
                case 2:
                    text = "Hello  <span>" + nameUp + "</span>. Today is Tuesday . Only " + rest + " days left until Weekend!";
                    $("#name").val("");
                    break;
                case 3:
                    text = "Hello  <span>" + nameUp + "</span>. Today is Wednesday . Only " + rest + " days left until Weekend!";
                    $("#name").val("");
                    break;
                case 4:
                    text = "Hello <span>" + nameUp + "</span>. Today is Thursday . Only " + rest + " days left until Weekend!";
                    $("#name").val("");
                    break;
                case 5:
                    text = "Hello  <span>" + nameUp + "</span>. Today is Friday . Only " + rest + " days left until Weekend!";
                    $("#name").val("");
                    break;
                case 6:
                    text = "Hello <span>" + nameUp + "</span>. Today is Saturday, is the Weekend";
                    $("#name").val("");
                    break;
            }

            $(".greating").html(text);
        }
    });

});

//






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