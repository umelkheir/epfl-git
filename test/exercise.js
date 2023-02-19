function guessingGame(number, color){
        var one = 27;
        var newColor = "purple";
        
    if(one == number && newColor == color){
        console.log("You've found both the secret number and the secret color!");
    } else if (one == number || color == "purple"){
        console.log("You found at least one of the secrets!");
    } else if (one != number && color != "purple"){
        console.log("You didn't find any of the secrets!");
        console.log("Better luck next time");
    } else { console.log("Try again")}
    
    
    }
    
    // guessingGame(27, "purple");
    // guessingGame(0, "red");
    guessingGame(27, "red");
    