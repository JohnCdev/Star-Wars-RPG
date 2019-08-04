var lukeSelect = $("#luke-selection");
var obiSelect = $("#obi-selection");
var sidiousSelect = $("#sidious-selection");
var maulSelect = $("#maul-selection");
var lukeImg = $("#luke");
var obiImg = $("#obi");
var sidiousImg = $("#sidious");
var maulImg = $("#maul");
var lukeHealth = $("#luke-health");
var obiHealth = $("#obi-health");
var sidiousHealth = $("#sidious-health");
var maulHealth = $("#maul-health");
var topText = $("#top-text");
var bottomText = $("#bottom-text");

var GameObject = {
    lukeHPNum: 100,
    obiHPNum: 120,
    sidiousHPNum: 150,
    maulHPNum: 180,
    characterSelected: false,
    openentChosen: false,
    restart: function () {
        this.lukeHPNum = 999;
        lukeHealth.text(this.lukeHPNum);
        this.characterSelected = false;
        this.openentChosen = false;
        $("#top-text-con").addClass("invisible");
        $("#bottom-text-con").text("Your Character");
        $(".img-selection").removeClass("invisible");
        $(".img-enemies").addClass("invisible");
        $(".img-defender").addClass("invisible");
    },
}


window.onload = function () {

    //select your chracter
    $(".img-selection").click(function () {
        if (GameObject.characterSelected) {
            return false;
        }
        GameObject.characterSelected = true;
        $("#top-text-con").removeClass("invisible");
        $("#bottom-text-con").text("Enemies Available to Attack");
        var sibs = $(this).siblings();
        $(sibs).addClass("invisible");
        var thisTemp = $(this).attr("value");
        $(".img-enemies").each(function () {
            if (thisTemp != $(this).attr("value")) {
                $(this).removeClass("invisible");
            }
        });
    });

    //move enemy to defender postion
    $(".img-enemies").click(function () {
        if (GameObject.openentChosen || !GameObject.characterSelected) {
            return false;
        }
        GameObject.openentChosen = true;
        $(this).addClass("invisible");
        var thisTemp = $(this).attr("value");
        $(".img-defender").each(function () {
            if (thisTemp === $(this).attr("value")) {
                $(this).removeClass("invisible");
            }
        });
    });

    //buttons
    $("#attack-button").click(function () {
        $(".defender-img").addClass("shake");
        $(".defender-img").css("box-shadow", "0 0 30px red");
        setTimeout(function () {
            $(".defender-img").removeClass("shake");
            $(".defender-img").css("box-shadow", "");
        }, 500);
    });

    $("#restart-button").click(function () {
        GameObject.restart();
    });

}





    // //select your character
    // lukeSelect.click(function () {
    //     if (GameObject.characterSelected) {
    //         return false;
    //     }
    //     GameObject.characterSelected = true;
    //     $("#top-text-con").append(topText);
    //     bottomText.text("Enemies Available to Attack");

    //     $(".img-enemies-container").append(obiSelect);
    //     obiSelect.removeClass().addClass("img-enemies obi");
    //     obiImg.removeClass().addClass("enemies-img");
    //     $(".img-enemies-container").append(sidiousSelect);
    //     sidiousSelect.removeClass().addClass("img-enemies sidious");
    //     sidiousImg.removeClass().addClass("enemies-img");
    //     $(".img-enemies-container").append(maulSelect);
    //     maulSelect.removeClass().addClass("img-enemies maul");
    //     maulImg.removeClass().addClass("enemies-img");
    // });

    // obiSelect.click(function () {
    //     if (GameObject.characterSelected) {
    //         return false;
    //     }
    //     GameObject.characterSelected = true;
    //     $("#top-text-con").append(topText);
    //     bottomText.text("Enemies Available to Attack");

    //     $(".img-enemies-container").append(lukeSelect);
    //     lukeSelect.removeClass().addClass("img-enemies luke");
    //     lukeImg.removeClass().addClass("enemies-img");
    //     $(".img-enemies-container").append(sidiousSelect);
    //     sidiousSelect.removeClass().addClass("img-enemies sidious");
    //     sidiousImg.removeClass().addClass("enemies-img");
    //     $(".img-enemies-container").append(maulSelect);
    //     maulSelect.removeClass().addClass("img-enemies maul");
    //     maulImg.removeClass().addClass("enemies-img");
    // });

    // sidiousSelect.on("click", function () {
    //     if (GameObject.characterSelected) {
    //         return false;
    //     }
    //     GameObject.characterSelected = true;
    //     $("#top-text-con").append(topText);
    //     bottomText.text("Enemies Available to Attack");

    //     $(".img-enemies-container").append(lukeSelect);
    //     lukeSelect.removeClass().addClass("img-enemies luke");
    //     lukeImg.removeClass().addClass("enemies-img");
    //     $(".img-enemies-container").append(obiSelect);
    //     obiSelect.removeClass().addClass("img-enemies obi");
    //     obiImg.removeClass().addClass("enemies-img");
    //     $(".img-enemies-container").append(maulSelect);
    //     maulSelect.removeClass().addClass("img-enemies maul");
    //     maulImg.removeClass().addClass("enemies-img");
    // });

    // $(".img-enemies-container").on("click", ".img-enemies", function () {
    //     console.log("click");
    //     console.log($(this));
    // });


    // //move enemy to defender position
    // $(".img-enemies-container").on("click", ".luke", function () {
    //     if (GameObject.openentChosen) {
    //         return false;
    //     }
    //     GameObject.openentChosen = true;
    //     console.log("click");
    //     $(".img-defender-container").append(lukeSelect);
    //     lukeSelect.removeClass().addClass("img-defender");
    //     lukeImg.removeClass().addClass("defender-img");
    // });

    // $(".img-enemies-container").on("click", ".obi", function () {
    //     if (GameObject.openentChosen) {
    //         return false;
    //     }
    //     GameObject.openentChosen = true;
    //     console.log("click");
    //     $(".img-defender-container").append(obiSelect);
    //     obiSelect.removeClass().addClass("img-defender");
    //     obiImg.removeClass().addClass("defender-img");
    // });


    // $(".img-enemies-container").on("click", ".sidious", function () {
    //     if (GameObject.openentChosen) {
    //         return false;
    //     }
    //     GameObject.openentChosen = true;
    //     console.log("click");
    //     $(".img-defender-container").append(sidiousSelect);
    //     sidiousSelect.removeClass().addClass("img-defender");
    //     sidiousImg.removeClass().addClass("defender-img");
    // });

    // $(".img-enemies-container").on("click", ".maul", function () {
    //     if (GameObject.openentChosen) {
    //         return false;
    //     }
    //     GameObject.openentChosen = true;
    //     console.log("click");
    //     $(".img-defender-container").append(maulSelect);
    //     maulSelect.removeClass().addClass("img-defender");
    //     maulImg.removeClass().addClass("defender-img");
    // });
