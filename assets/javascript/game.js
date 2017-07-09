 /* David Jagodowski - HW04 */
$(document).ready(function()  {  // Document ready function. Waits until HTML page loads before running this script

  //Begin Main Program
  var jewelCount = 4; // The number of jewels
  var jewelArray = []; //Holds values for each jewel
  var targetNum = 0; //Holds the random number between 19-120.
  var totalScore = 0; // Holds the player's score.
  var winCount = 0;  //Tracks # of wins.
  var lossCount = 0  //Tracks # of losses.
  var playerWon = false; //Tracks whether the player won or lost each round.

  getRandomTargetNum();  //Calls function that generates random # between 19-120.
  jewelArray = assignJewelNums(); //Calls function that assigns random #'s to jewels.
  countClicks(); //Calls function that listens for click events on the crystal images.
  console.log("main program"); //for testing
  $("#clrButton").click(reset);     // monitor if the "clear score" button is clicked on and call reset function.
   console.log("clear-score button clicked");

   
  //For testing purposes: writes out jewel values array to the console.
      for (var i = 0; i < jewelCount; i++) {
      console.log("main program: Jewel " + i + " has value " + jewelArray[i]);
    } 

//End Main Program

//Functions below:

  function countClicks() {   //This function monitors click events on each jewel and updates the total score accordingly.
   // var newTotal;
    console.log("countClick: totalScore is " + totalScore);
      $("#jewel0").click(function() {    // if jewel [i] is clicked on...
      console.log("click0");
      totalScore += jewelArray[0];     // update score with jewel [i]'s value. 
      $("#totalScoreId").html(totalScore);
      checkScore();                    // check for win or loss 
    });

    $("#jewel1").click(function()  { 
      console.log("click1");
      totalScore += jewelArray[1];
      $("#totalScoreId").html(totalScore);
      checkScore();
    });

    $("#jewel2").click(function() {
     console.log("click2"); 
      totalScore += jewelArray[2]; 
      $("#totalScoreId").html(totalScore);
      checkScore();
    });

    $("#jewel3").click(function()  {
      console.log("click3"); 
      totalScore += jewelArray[3];
      $("#totalScoreId").html(totalScore);
      checkScore();
    });
  
   console.log("end of function countClicks");  //For testing
   return totalScore;
  };


  function checkScore() {  //This function checks if there has been a win or a loss and updates the scoreboards accordingly
    console.log("checkScore: targetNum = " + targetNum + " and totalScore = " + totalScore);
    if (totalScore === targetNum) {   //Player wins.
      console.log("checkScore: Player wins"); //For testing.
      //Turn off click counter on jewels until game resets.
        $("#jewel0").off("click"); 
        $("#jewel1").off("click"); 
        $("#jewel2").off("click"); 
        $("#jewel3").off("click"); 
      //Write message to Game Status div.
        $("#gameStatusId").html("<h3>YOU WON!</h3>");  
        playerWon = true;  
        winCount += 1;
      // Update the Wins scoreboard.
        $("#winsId").html(" " + winCount);   
        setTimeout(function(){playAgain()}, 2000); //Delays the playAgain function for n milliseconds until DOM updates scores.
    }
    else if (totalScore > targetNum) {    //Player loses.
      console.log("checkScore: Player loses");  //For testing.
      $("#gameStatusId").html("<h3>Uh-Oh... YOU LOST!</h3>");
      playerWon = false;
      lossCount += 1;
      $("#lossesId").html(" " + lossCount); //Update the Losses scoreboard.
      setTimeout(function(){playAgain()}, 2000);  //Delays the playAgain function for n milliseconds until DOM updates scores.
   
    } else {    //Game still in progress. 
      console.log("Game still in progress");  //For testing.
      $("#gameStatusId").html("Game in Progress.");  //Update the Game Status Div.
    }
  };  


  function playAgain() {  //Prompts player to play again after a Win or Loss.
    if (playerWon == true) { 
      $("#gameStatusId").html('<p>You WON! Play again? Click <span id="replay"> HERE. </span></p>');
      $("#replay").click(refresh);   //If player clicks on word "HERE", new game starts but retains scores.
         
    } else {
        $("#gameStatusId").html('<p>You Lost! Click <span id="replay"> HERE </span> to try again.</p>');
        $("#replay").click(refresh); //If player clicks on word "HERE", new game starts but retains scores
        } 
  };


  function getRandomTargetNum() {
    //Generate a Random whole number between 19 and 120 
      var x = Math.floor(Math.random() * ((120 - 19) + 1) + 19);  //Assign random # to variable "x".
    // Write number to targetNumDiv
      $("#targetNumId").html("<h2> " + x + " </h2>");
      targetNum = x;
      return targetNum;
  };


  function assignJewelNums()  {   //This function assigns the random numbers to each jewel.
    var jewelNumArray = [];
    for (var i = 0; i < jewelCount; i++) {   //jewelCount is the # of jewels. 4 by default.
      //Generate a whole random number between 1 and 12.
        var x = Math.floor(Math.random() * 12 + 1);
      //assign that number to an array.
        jewelNumArray[i] = x;
      // write values to console for testing. 
     	  console.log("assignJewelNums: Jewel " + i + " has value " + jewelNumArray[i]);
    } 
      return jewelNumArray; 
  };


  function refresh() {  //Starts a new game, but retains the scoreboard.
    $("#targetNumId").html("");   //Remove old target number
    totalScore = 0;               //Reset player score to zero.  
    $("#totalScoreId").html(totalScore);   // Display zero score
    getRandomTargetNum();  //Get a new random number 
    jewelArray = assignJewelNums();  //Assign new random numbers to the jewels
    playerWon = false;            //Reset boolean flag.
    $("#gameStatusId").html(""); // Reset the game status.
    countClicks() //Turn on the event handlers to count clicks.
  }; 


  function reset() {  //Reloads the game and resets the scoreboard.
    location.reload();
  };
 
}); // end document ready