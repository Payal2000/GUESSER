// Description: This file contains the logic for the game "Guess The Number"
 var y = Math.floor(Math.random() * 10 + 1);

    // number of guesses
 var guess = 1;

 document.getElementById("submitguess").onclick = function(){

   // number guessed by user    
     var x = document.getElementById("guessField").value;

     if(x == y)
     {    
       alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "
             + guess + " GUESS ");
     }
     else if(x > y) 
     {    
       guess++;
       alert("TRY A SMALLER NUMBER");
     }
     else
     {
       guess++;
       alert("TRY A GREATER NUMBER")
     }
 }