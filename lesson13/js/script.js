var template = $("#hb-objects").html();

//compile the template
var templateScript = Handlebars.compile(template);
var context = {
    "title": "Vanilla Blog",
    "posts": [{
            "author": { "name": "Boris" },
            "text": "It's first post of Boris",
            "imageId": "2"
        },
        {
            "author": { "name": "Sergey" },
            "text": "It's first post of Sergey",
            "imageId": "3"
        }
    ]

};

var html = templateScript(context);
//console.log(html);
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