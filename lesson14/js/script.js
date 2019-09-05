var template = $("#hb-cards").html();

//compile the template
var templateScript = Handlebars.compile(template);
var context = {
    "title": 'Charaktere von "Game of Throns"',
    "casting": [{
            "actor": {
                "cast": "Arya Stark",
                "name": "Maisie Williams",
                "haus": "Stark",
                "zitate": "Ein Mädchen ist Arya Stark von Winterfell und ich gehe jetzt nach Hause."
            },
            "age": "22",
            "img": "img/arya_stark.png"
        },
        {
            "actor": {
                "cast": "Jon Snow",
                "name": "Kit Harington",
                "haus": "Stark",
                "zitate": "Deine Mutter war Lyanna Stark und dein Vater, dein leiblicher Vater, war Rhaegar Targaryen. Du bist nie ein Bastard gewesen. Du bist Aegon Targaryen, der wahre Erbe des Eisernen Throns."
            },
            "age": "32",
            "img": "img/jon_snow.png"
        },
        {
            "actor": {
                "cast": "Daenerys Targaryen",
                "name": "Emilia Clarke",
                "haus": "Targaryen",
                "zitate": "Ich bin Daenerys Sturmtochter, vom Blut des alten Valyria und ich nehme mir, was mein ist! Mit Feuer und mit Blut werde ich es mir holen! "
            },
            "age": "32",
            "img": "img/daenerys_targaryen.png"
        },
        {
            "actor": {
                "cast": "Tyrion Lannister",
                "name": "Peter Dinklage",
                "haus": "Lennister",
                "zitate": "Zuzusehen wie dein abscheulicher Bastard starb, bereitete mir mehr Befriedigung als Tausend lügende Huren!  "
            },
            "age": "50",
            "img": "img/tyrion_lannister.png"
        },
        {
            "actor": {
                "cast": "Cersei Lannister",
                "name": "Lena Headey",
                "haus": " Lannister",
                "zitate": "Lügen, die fallen euch leicht. Das weiß jeder. Aber Lauterkeit, Anstand, Fürsorge gehören nicht zu euren Stärken fürchte ich."
            },
            "age": "46",
            "img": "img/cersei_lannister.png"
        },
        {
            "actor": {
                "cast": "Jaime Lannister",
                "name": "Nikolaj Coster-Waldau",
                "haus": " Lannister",
                "zitate": "Es gibt keine Männer wie mich. Nur mich."
            },
            "age": "49",
            "img": "img/jaime_lannister.png"
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