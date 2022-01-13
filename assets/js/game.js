// Game Begins 
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    // Alerts players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    // ask player if they'd like to fight or run
    var promptFight = window.prompt("Would you like to FIGHT or SKIP tis battle? Enter 'FIGHT or 'SKIP' to choose.")

    //if player chooses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
    //remove enemy's Health by subtracting the amoung set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
        playerName + " attacked " + enemyName + "." + enemyName + " now has " + enemyHealth + " health remaining."
        );

    //check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left. ");
    }
    // remove player's Health by subtraction the amount set in enemyAttack var
    playerHealth = playerHealth - enemyAttack; 
    console.log(
        enemyName + " attacked " + playerName + "." + playerName + " now has " + playerHealth + " health remaining."
    );

    //check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + "  has died! ");
    } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    //if player chooses to skip
}  else if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm if player wants to skip
        var confirmSkip = window.confirm("Are you sure you want to quit?");

        // if yes (skip), leave fight 
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            // subtract money from playerMoney for skipping
            playerMoney = playerMoney - 2;
        }
        // if no (don't skip), ask question again by running fight() again
        else {
            fight();
        }
        // if player did not chose 1 or 2 in prompt
        } else {
            window.alert("You need to pick a valid option. Try again!");
        }
}

// excute function
fight();