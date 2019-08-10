var GameObject = {
    luke: {
        lukeHPNum: 100,
        lukeCounter: 20,
        lukeAttack: 6,
    },
    obi: {
        obiHPNum: 120,
        obiCounter:18,
        obiAttack: 5,
    },
    sidious: {
        sidiousHPNum: 150,
        sidiousCounter: 14,
        sidiousAttack: 4,
    },
    maul: {
        maulHPNum: 180,
        maulCounter: 12,
        maulAttack: 3,
    },
    playerAttack: 0,
    playerHealth: 0,
    initialAttack: 0,   
    defenderName: "",
    defenderHealth: 0,
    defenderAttack: 0,
    characterSelected: false,
    opponentChosen: false,
    opponentDfeated: false,
    restart: function () {
        this.lukeHPNum = 100;
        $("#luke-health").text(this.lukeHPNum);
        this.obiHPNum = 120;
        $("#obi-health").text(this.obiHPNum);
        this.sidiousHPNum = 150;
        $("#sidious-health").text(this.sidiousHPNum);
        this.maulHPNum = 180;
        $("#maul-health").text(this.maulHPNum);
        this.playerAttack = 0;
        this.playerHealth = 0;
        this.initialAttack = 0;
        this.defenderName = "";
        this.defenderAttack = "";
        this.defenderHealth = "";
        this.characterSelected = false;
        this.opponentChosen = false;
        this.opponentDfeated = false,
        $(".fight-text-container").addClass("invisible");
        $(".attack-button-container").addClass("invisible");
        $(".battle-text-container").addClass("invisible");
        $(".reset-button-container").addClass("invisible");
        $("#top-text-con").addClass("invisible");
        $("#bottom-text-con").text("Your Character");
        $(".img-selection").removeClass("invisible");
        $(".img-enemies").addClass("invisible");
        $(".img-defender").addClass("invisible");
    },
    // nextDefender: function() {
    //     this.defenderHealth = 
    //     this.defenderAttack = 
    //     this.defenderName = $()
    // }
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

        if ($(this).attr("value") === "luke") {
            GameObject.playerAttack = GameObject.luke.lukeAttack;
            GameObject.playerHealth = GameObject.luke.lukeHPNum;
        } else if ($(this).attr("value") === "obi") {
            GameObject.playerAttack = GameObject.obi.obiAttack;
            GameObject.playerHealth = GameObject.obi.obiHPNum;
        } else if ($(this).attr("value") === "sidious") {
            GameObject.playerAttack = GameObject.sidious.sidiousAttack;
            GameObject.playerHealth = GameObject.sidious.sidiousHPNum;
        } else {
            GameObject.playerAttack = GameObject.maul.maulAttack;
            GameObject.playerHealth = GameObject.maul.maulHPNum;
        }
        GameObject.initialAttack = GameObject.playerAttack;
        console.log("Attacker Initial: " + GameObject.initialAttack);
        console.log("Attacker Attack: " + GameObject.playerAttack);
        console.log("Attacker Health: " + GameObject.playerHealth);

    });

    //move enemy to defender postion
    $(".img-enemies").click(function () {
        if (GameObject.opponentChosen || !GameObject.characterSelected) {
            return false;
        }
        GameObject.opponentChosen = true;
        $(this).addClass("invisible");
        $(".img-defender").addClass("invisible");
        $(".fight-text-container").removeClass("invisible");
        $(".attack-button-container").removeClass("invisible");
        $(".reset-button-container").removeClass("invisible");
        var thisTemp = $(this).attr("value");
        $(".img-defender").each(function () {
            if (thisTemp === $(this).attr("value")) {
                $(this).removeClass("invisible");
            }
        });

        GameObject.defenderName = $(this).attr("value");

        if ($(this).attr("value") === "luke") {
            GameObject.defenderHealth = GameObject.luke.lukeHPNum;
            GameObject.defenderAttack = GameObject.luke.lukeCounter;
        } else if ($(this).attr("value") === "obi") {
            GameObject.defenderHealth = GameObject.obi.obiHPNum;
            GameObject.defenderAttack = GameObject.obi.obiCounter;
        } else if ($(this).attr("value") === "sidious") {
            GameObject.defenderHealth = GameObject.sidious.sidiousHPNum;
            GameObject.defenderAttack = GameObject.sidious.sidiousCounter;
        } else {
            GameObject.defenderHealth = GameObject.maul.maulHPNum;
            GameObject.defenderAttack = GameObject.maul.maulCounter;
        }
    });

    //buttons
    $("#attack-button").click(function () {
        console.log(!GameObject.opponentChosen);
        if (!GameObject.opponentChosen) {
            return false;
        }
        $(".battle-text-container").removeClass("invisible");

        GameObject.defenderHealth -= GameObject.playerAttack;
        GameObject.playerHealth -= GameObject.defenderAttack;

        //OPTOMIZE**********
        $(".img-selection").contents().each(function() {
            if ($(this).attr("class") === "character-health") {
                $(this).text(GameObject.playerHealth);
            }    
        });
        $(".img-defender").contents().each(function() {
            if ($(this).attr("class") === "defender-health") {
                $(this).text(GameObject.defenderHealth);
            }    
        });
        $("#battle-stats-1").text("You attacked " + GameObject.defenderName + " for " + GameObject.playerAttack + " damage.");
        $("#battle-stats-2").text(GameObject.defenderName + " attacked you back for " + GameObject.defenderAttack + " damage.");

        GameObject.playerAttack += GameObject.initialAttack;

        //check for defender 
        if (GameObject.defenderHealth <= 0) {
            GameObject.opponentChosen = false;
            console.log(GameObject.defenderHealth);
        }

        //animation
        $(".defender-img").addClass("shake");
        $(".defender-img").css("box-shadow", "0 0 30px red");
        setTimeout(function () {
            $(".defender-img").removeClass("shake");
            $(".defender-img").css("box-shadow", "");
        }, 500);

        //win or lose logic****
        // if () {

        // }
    });

    $("#restart-button").click(function () {
        GameObject.restart();
    });

}