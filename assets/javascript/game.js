


$("#attack-button").click(function() {
    console.log("log");
    $("#defender").addClass("shake");
    $("#defender").css("box-shadow", "0 0 30px red");
    setTimeout(function() {
        $("#defender").removeClass("shake");
        $("#defender").css("box-shadow", "");
    }, 500);
});