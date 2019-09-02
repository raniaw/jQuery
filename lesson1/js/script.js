var list = document.querySelectorAll("li");
console.log(list);
list.forEach(item => {
    item.style.color = "red";
    item.style.backgroundColor = "yellow";
});
list.forEach(element => {
    console.log(element);
});

$("li").css({
    "color": "green",
    "font": "Petit One"
});
$("li").before('\027');

$("div").css({
    "background-color": colorCreateDark(),
    "color": colorCreatePastel()
});
$(".highlight").css({
    "fontSize": "20px",
    "width": "200px"
});

$(".third").css("border", "1px solid orange");

$("div:first").css("color", "pink");
// gleiche wie oben
// $("div:first-of-type").css("color", "pink");
// $("div:eq(0)").css("color", "pink");

$("div:eq(1)").css("color", "red");
//gleiche wie oben 
//$("div.highlight:first").css("color", "red");

$("div:eq(3)").css("font-weight", "bold");

$("h3:eq(1)").text("new text chaged with jquery")
$("h3:eq(2)").html("<input type='\"text'\">  <button >send</button>")

$("input").val("a letter");
console.log($("input").attr("type"));
$("h3:eq(3)").html("<input type='\"text'\"> ");

$("input:eq(1)").attr("type", "color").val(colorCreateHexColor());
$("input:eq(1)").css({
    "height": "80px",
    "width": "100px"
})
$("h3:eq(4)").text($("input:eq(1)").val());


/**
 * Funktion für die zufällige hexedezimalige Farbeerstellung
 */


function colorCreateHexColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    console.log("color: " + color);
    return color;

}




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
    console.log(color);
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
    console.log(color);
    return color;
}