// Game Begins 
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

// You can also log multiples values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    // Alerts players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    enemyHealth = enemyHealth - playerAttack;

    // Log a resulting message to the console so we know that it worked.
    console.log(
        playerName + "attacked" + enemyName + "." + enemyName + "now has" + enemyHealth + "health remaining"
    )
    //check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + "has died!")
    }
    else {
        window.alert(enemyName + "still has" + enemyHealth + "health left.");
    }
    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerHealth = playerHealth - enemyAttack;

    // Log a resulting message to the console so we know that it worked. 
    console.log(
        enemyName + "attacked" + playerName + "." + playerName + "now has" + playerHealth + "health remaining."
    )
    //check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + "has died!");
    }
    else {
        window.alert(playerName + "still has" + playerHealth + "health left.")
    }
var promptFight = window.prompt("Would you like to FIGHT or SKIP tis battle? Enter 'FIGHT or 'SKIP' to choose.")
    console.log(promptFight);
    //if player chooses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        //remove enemy's Health by subtracting the amoung set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + "attacked" + enemyName + "." + enemyName + "now has" + enemyHealth + "health remaining."
        );
    //check's enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + "has died!");
    }
    else {
        window.alert(enemyName + "still has" + enemyHealth + "health left.")
    }
    // remove player's Health by subtracting the amount set in the enemyAttack variable
    if (playerHealth <= 0) {
        window.alert(playerName + "has died");
    } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    //if player chooses to skip
}   else if (promptFight === "skip" || promptFight === "SKIP") {
    window.alert(playerName + " has chosen to skip the fight!");
}
    else {
        window.alert("You need to choose a valid option. Try Again!");
    }
};
fight();
