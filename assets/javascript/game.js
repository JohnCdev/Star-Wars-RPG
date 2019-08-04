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
        $("#bottom-text-con").append(bottomText);
        topText.detach();
        $(".img-selection-container").children().detach();
        $(".img-selection-container").append(lukeSelect);
        lukeSelect.removeClass().addClass("img-selection");
        lukeImg.removeClass().addClass("character-img");
        $(".img-selection-container").append(obiSelect);
        obiSelect.removeClass().addClass("img-selection");
        obiImg.removeClass().addClass("character-img");
        $(".img-selection-container").append(sidiousSelect);
        sidiousSelect.removeClass().addClass("img-selection");
        sidiousImg.removeClass().addClass("character-img");
        $(".img-selection-container").append(maulSelect);
        maulSelect.removeClass().addClass("img-selection");
        maulImg.removeClass().addClass("character-img");
    },
}


window.onload = function () {

    topText.detach();

    //select your chracter
    $(".img-selection").click(function () {
        if (GameObject.characterSelected) {
            return false;
        }
        GameObject.characterSelected = true;
        $("#top-text-con").append(topText);
        bottomText.text("Enemies Available to Attack");
        var sibs = $(this).siblings();
        $(sibs).detach();
        sibs.removeClass().addClass("img-enemies");
        sibs.find("img").removeClass().addClass("enemies-img");
        $(".img-enemies-container").append(sibs);
        enemyDelegate();
    });

    //move enemy to defender postion
    function enemyDelegate() {
        $(".img-enemies").click(function () {
            console.log($(this));
            $(".img-defender-container").append($(this));   
            $(this).removeClass().addClass("img-defender");
            $(this).find("img").removeClass().addClass("defender-img");
        });
    }

    //buttons
    $("#attack-button").click(function () {
        console.log("attacked");
        $("#defender").addClass("shake");
        $("#defender").css("box-shadow", "0 0 30px red");
        setTimeout(function () {
            $("#defender").removeClass("shake");
            $("#defender").css("box-shadow", "");
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
