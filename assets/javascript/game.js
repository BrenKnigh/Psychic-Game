	var options = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	var wins = 0;
	var losses = 0;
	var tries = 9;
	var userInput = [];	

	
	document.onkeyup = function() {
	var userguess = String.fromCharCode(event.keyCode).toLowerCase();
	console.log("userguess: " +userguess);

	
	var computerGuess = options[Math.floor(Math.random() * options.length)];
	console.log("computer guess: " + computerGuess);

	
	
     if (userguess === computerGuess) {
		 	tries = 9; 
            wins++
            console.log("Wins: " + wins);
            document.getElementById("wins").innerHTML = wins;
    
    
    		userInput.push(userguess);
 
    
    		console.log("full array " + userInput.join(",")); 
            var myInput = (userInput.join(","));
        	document.getElementById("myInput").innerHTML = myInput;
            userInput = [];
	}
	
	  
	else if (userguess !== computerGuess) {
		if (tries > 0)  {
               console.log(tries);
               
               tries--;
               document.getElementById("tries").innerHTML = tries;
               console.log(tries);
            
            
                userInput.push(userguess);
        		
            
        		console.log("full array " + userInput.join(","));
        		var myInput = (userInput.join(","));
        		document.getElementById("myInput").innerHTML = myInput;
        } 

    
    
        else if (tries === 0) {
                tries = 9;
                losses++;
 				console.log("Loses: " + losses);
 				document.getElementById("losses").innerHTML = losses;
 				userInput = [];
 		}    
    }
                 
	}


