var template = $("#hb-cards").html();

//compile the template
var templateScript = Handlebars.compile(template);
var context = {
    "title": "Casting Game of throns",
    "casting": [{
            "actor": {
                "cast": "Aria Stark",
                "name": "Maisie Williams"
            },
            "age": "22",
            "img": "img/aria.png"
        },
        {
            "actor": {
                "cast": "Jon Snow",
                "name": "Kit Harington"
            },
            "age": "32",
            "img": "img/jon.png"
        }
    ]

};

var html = templateScript(context);

//insert html code in the page
$(document.body).append(html);













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