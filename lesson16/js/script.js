// mit function arrow '=>' läuft nicht 

//*** with jQuery ***
$(document).ready(function() {
    $("#btn").on("click", function() {
        var name = $("#name").val();
        if (name === "" || name === null) {
            $("#pErr").css("color", "red");
            $("#pErr").text("yours input is empty");
            $("#name").val("");
            $("#name").focus();
        } else {
            $("#pErr").text("");
            let nameUp = name.toUpperCase();
            var rest = 6 - (new Date().getDay());
            var weeknedDays = ['Sundy', 'Mondy', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            $("#pTxt").html(`Hallo ${nameUp} The day Today is ${weeknedDays[(new Date().getDay())]}  
            and the Weekend after ${rest}`);
            $("#name").val("");
            $("#name").focus();

        }
    });
});

// with js the same

// var inpName = document.getElementById("name");
// var pTxt = document.getElementById("pTxt");
// var btn = document.getElementById("btn");
// var pErr = document.getElementById("pErr");

// btn.addEventListener("click", function() {

//     var weeknedDays = ['Sundy', 'Mondy', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//     //    let date = new Date();
//     var rest = 6 - new Date().getDay();
//     // var name = inpName.value;
//     if (inpName.value === null || inpName.value === "") {
//         pErr.style.color = "red";
//         pErr.innerText = "your input is empty";
//     } else {

//         pTxt.textContent = `Hallo ${inpName.value} The day Today is ${weeknedDays[(new Date().getDay())]}  and the Weekend after ${rest}`;
//         pErr.innerText = "";
//     }
// });


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