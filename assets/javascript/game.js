var GameObject = {
    luke: {
        lukeHPNum: 110,
        lukeCounter: 12,
        lukeAttack: 6,
    },
    obi: {
        obiHPNum: 130,
        obiCounter: 10,
        obiAttack: 5,
    },
    sidious: {
        sidiousHPNum: 140,
        sidiousCounter: 8,
        sidiousAttack: 4,
    },
    maul: {
        maulHPNum: 170,
        maulCounter: 6,
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
    numDefeated: 0,
    restart: function () {
        this.lukeHPNum = 110;
        $("#luke-health").text(this.lukeHPNum);
        this.obiHPNum = 130;
        $("#obi-health").text(this.obiHPNum);
        this.sidiousHPNum = 140;
        $("#sidious-health").text(this.sidiousHPNum);
        this.maulHPNum = 170;
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
        this.numDefeated = 0,
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
    checkHealth: function () {
        if (this.playerHealth <= 0) {
            this.characterSelected = false;
            $(".reset-button-container").removeClass("invisible");
            $("#battle-stats-1").text("You lose! Click Restart to try again!");
            $("#battle-stats-2").text("");
            return false;
        } else if (this.defenderHealth <= 0) {
            this.opponentChosen = false;
            this.numDefeated++;
            $(".img-defender").addClass("invisible");
            $(".attack-button-container").addClass("invisible");
            $("#battle-stats-1").text("You deated this enemy! Choose another to continue fightning!");
            $("#battle-stats-2").text("");  
        }
    },
    checkWin: function () {
        if (this.numDefeated === 3) {
            $(".reset-button-container").removeClass("invisible");
            $("#battle-stats-1").text("You've won! You have deated all of the enemies! Click Restart to play again!");
            $("#battle-stats-2").text("");  
            return false;
        }
    }
}


window.onload = function () {

    GameObject.restart();

    //select your chracter
    $(".img-selection").click(function () {
        //escape invalid state
        if (GameObject.characterSelected) {
            return false;
        }

         //update board state to reflect character chosen
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

        //Assign chracter chosen stats to player stats
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
    });

    //move enemy to defender postion and initialize
    $(".img-enemies").click(function () {
        //escape invalid state
        if (GameObject.opponentChosen || !GameObject.characterSelected) {
            return false;
        }
        
        //update board state to reflect enemy chosen
        GameObject.opponentChosen = true;
        $(this).addClass("invisible");
        $(".img-defender").addClass("invisible");
        $(".fight-text-container").removeClass("invisible");
        $(".attack-button-container").removeClass("invisible");
        $("#battle-stats-1").text("");
        $("#battle-stats-2").text("");  

        var thisTemp = $(this).attr("value");
        $(".img-defender").each(function () {
            if (thisTemp === $(this).attr("value")) {
                $(this).removeClass("invisible");
            }
        });

        GameObject.defenderName = $(this).attr("value");

        //Assign the selected enemy to the active defender stat values
        if ($(this).attr("value") === "luke") {
            GameObject.defenderHealth = GameObject.luke.lukeHPNum;
            GameObject.defenderAttack = GameObject.luke.lukeCounter;
            $(".defender-health").text(GameObject.defenderHealth);
        } else if ($(this).attr("value") === "obi") {
            GameObject.defenderHealth = GameObject.obi.obiHPNum;
            GameObject.defenderAttack = GameObject.obi.obiCounter;
            $(".defender-health").text(GameObject.defenderHealth);

        } else if ($(this).attr("value") === "sidious") {
            GameObject.defenderHealth = GameObject.sidious.sidiousHPNum;
            GameObject.defenderAttack = GameObject.sidious.sidiousCounter;
            $(".defender-health").text(GameObject.defenderHealth);
        } else {
            GameObject.defenderHealth = GameObject.maul.maulHPNum;
            GameObject.defenderAttack = GameObject.maul.maulCounter;
            $(".defender-health").text(GameObject.defenderHealth);
        }
    });

    //Attack button and combat states
    $("#attack-button").click(function () {
        //escape invalid state
        if (!GameObject.opponentChosen || GameObject.playerHealth <= 0) {
            return false;
        }

        //move enemy to defender postion and change attack & health values
        $(".battle-text-container").removeClass("invisible");
        GameObject.defenderHealth -= GameObject.playerAttack;
        GameObject.playerHealth -= GameObject.defenderAttack;

        //Update health values for attacker and defender
        $(".img-selection").contents().each(function () {
            if ($(this).attr("class") === "character-health") {
                $(this).text(GameObject.playerHealth);
            }
        });
        $(".img-defender").contents().each(function () {
            if ($(this).attr("class") === "defender-health") {
                $(this).text(GameObject.defenderHealth);
            }
        });

        //Show combat text
        $("#battle-stats-1").text("You attacked " + GameObject.defenderName + " for " + GameObject.playerAttack + " damage.");
        $("#battle-stats-2").text(GameObject.defenderName + " attacked you back for " + GameObject.defenderAttack + " damage.");
        //update player attack after the first attack
        GameObject.playerAttack += GameObject.initialAttack;

        //Check health after attack
        GameObject.checkHealth();
        GameObject.checkWin();

        //Attack hit animation
        $(".defender-img").addClass("shake");
        $(".defender-img").css("box-shadow", "0 0 30px red");
        setTimeout(function () {
            $(".defender-img").removeClass("shake");
            $(".defender-img").css("box-shadow", "");
        }, 500);
    });

    //restart and inialize the game from beginning state
    $("#restart-button").click(function () {
        GameObject.restart();
    });

}