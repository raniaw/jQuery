$("button").click(item => {
        console.log(item);
        console.log(item.target.textContent);
        console.log(item.target.innerHTML);
        console.log(item.target.innerText);
        console.log(item.type);
        item.target.style.backgroundColor = "pink";
        item.target.style.borderRadius = "20px";
        item.target.style.padding = "10px";
        $("h3").addClass = "correct";
    })
    // mit function arrow ' => ' geht nicht 
$("button").click(function() {
    console.log($(this).text());
    $(this).css({
        "background": colorCreateDark(),
        "color": colorCreatePastel(),

    });

    $("h3").css({
        "background": colorCreatePastel(),
        "padding": "20px"
    });
    //$("h3").addClass("wrong");
    $("h3").addClass("correct");
    // $("h3").text($("h3").attr("class"));
    $("h3").text($(this).text());

    //jquery effect
    $("div").slideToggle(1500, function() {
        $("div").remove();
    });
})

$("h3").click(function() {
    $("h3").toggleClass("wrong");
})


$("div").css("background", colorCreatePastel());








// list.forEach(item => {
//     item.style.color = "red";
//     item.style.backgroundColor = "yellow";
// });
// list.forEach(element => {
//     console.log(element);
// });

// $("li").css({
//     "color": "green",
//     "font": "Petit One"
// });
// $("li").before('\027');

// $("div").css({
//     "background-color": colorCreateDark(),
//     "color": colorCreatePastel()
// });
// $(".highlight").css({
//     "fontSize": "20px",
//     "width": "200px"
// });

// $(".third").css("border", "1px solid orange");

// $("div:first").css("color", "pink");
// // gleiche wie oben
// // $("div:first-of-type").css("color", "pink");
// // $("div:eq(0)").css("color", "pink");

// $("div:eq(1)").css("color", "red");
// //gleiche wie oben 
// //$("div.highlight:first").css("color", "red");

// $("div:eq(3)").css("font-weight", "bold");

// $("h3:eq(1)").text("new text chaged with jquery")
// $("h3:eq(2)").html("<input type='\"text'\">  <button >send</button>")

// $("input").val("a letter");

/**
 * Funktion für die zufällige dunkle Farbeerstellung
 */



/**
 * Funktion für die zufällige dunkle Farbeerstellung
 */

function colorCreateDark() {
    var color;
    var min = Math.ceil(0);
    var max = Math.floor(160);

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
    var min = Math.ceil(180);
    var max = Math.floor(256);

    var colRed = Math.floor(Math.random() * (max - min)) + min;
    var colBlue = Math.floor(Math.random() * (max - min)) + min;
    var colGreen = Math.floor(Math.random() * (max - min)) + min;

    color = "rgb(" + colRed + "," + colGreen + "," + colBlue + ")";

    return color;
}