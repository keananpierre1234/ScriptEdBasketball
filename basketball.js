var promptForPlayerName = function (playerNumber) {
    var name = prompt(playerNumber + " what is your name?");


return name;
    
};

var tryTwoPointShot = function() {
    if (Math.random() >= 0.2 && Math.random() >= 0.2 ) {
        return true;   
    } else { 
        return false;
    } 
};

var getShotString = function(playerName, points, wasSuccessful) {
    return playerName + " shot a three ";
    
};

var tryThreePointShot = function() {
    return true
};

var updateScore = function(wasShotMade, currentScore, points){
    return true;
}