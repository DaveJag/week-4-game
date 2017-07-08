 /* David Jagodowski - HW04 */
$(document).ready(function()  {  // Document ready function. Waits until HTML page loads before running this script

  //Begin Main Program
  var jewelCount = 4; // The number of jewels
  var jewelArray = []; //Holds values for each jewel
  var targetNum = 0; //Holds the random number between 19-120.
  var totalScore = 0; // Holds the player's score.
  var winCount = 0;
  var lossCount = 0
  var playerWon = false; //Tracks whether the player won or lost each round.

  getRandomTargetNum();
  jewelArray = assignJewelNums();
  countClicks();
  console.log("main program");

   
  //test: write jewel values to console
  for (var i = 0; i < jewelCount; i++) {
      //Generate a whole random number between 1 and 12.
      // check values in console. 
      console.log("main program: Jewel " + i + " has value " + jewelArray[i]);
    } 

  function countClicks() {
   // var newTotal;
    console.log("countClick: totalScore is " + totalScore);
    $("#jewel0").click(function() {    // if jewel [i] is clicked on...
      console.log("click0");
      totalScore += jewelArray[0];     // update score with jewel [i]'s value. 
      $("#totalScoreId").html("<h3> " + totalScore + "</h3>");
      checkScore();                    // check for win or loss 
    });

    $("#jewel1").click(function()  { 
      console.log("click1");
      totalScore += jewelArray[1];
      $("#totalScoreId").html("<h3> " + totalScore + "</h3>");
      checkScore();
    });

    $("#jewel2").click(function() {
     console.log("click2"); 
      totalScore += jewelArray[2]; 
      $("#totalScoreId").html("<h3> " + totalScore + "</h3>");
      checkScore();
    });

    $("#jewel3").click(function()  {
      console.log("click3"); 
      totalScore += jewelArray[3];
      $("#totalScoreId").html("<h3> " + totalScore + "</h3>");
      checkScore();
    });
  
   console.log("end of function countClicks");
   return totalScore;
  }


  function checkScore() {
    console.log("checkScore: targetNum = " + targetNum + " and totalScore = " + totalScore);
    if (totalScore === targetNum) {
      //Player wins
      console.log("Player wins");
      playerWon = true;
      winCount += 1;
      $("#winsId").html(" " + winCount);   // Update the Wins scoreboard.
      playAgain();
    }
    else if (totalScore > targetNum) {
      //Player loses
      console.log("Player loses");
      playerWon = false;
      lossCount += 1;
      $("#lossesId").html(" " + lossCount); //Update the Losses scoreboard.
      setTimeout(function(){playAgain()}, 1000);  //Delays the playAgain function for n milliseconds until DOM updates scores.
   
    } else { 
      // game still in progres 
      console.log("Game still in progress");
    }
  }  

  function playAgain() {
      if (playerWon == true) { 
        window.confirm("YOU WON! Would you like to play again?") == true; 
          refresh();
      } else {
          window.confirm("UH-OH... YOU LOST! Would you like to play again?") == true;  
          refresh();
        }
  }

  function getRandomTargetNum() {
    //Generate a Random whole number between 19 and 120 
    var x = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
    // alert(x); 
    // Append to targetNumDiv
    $("#targetNumId").html("<h2> " + x + " </h2>");
    //alert("Is the program getting here?");
    targetNum = x
    return targetNum;

};


  function assignJewelNums()  {
    var jewelNumArray = [];
    for (var i = 0; i < jewelCount; i++) {
      //Generate a whole random number between 1 and 12.
      var x = Math.floor(Math.random() * 12 + 1);
      //assign that number to an array.
      jewelNumArray[i] = x;
      // check values in console. 
     	console.log("assignJewelNums: Jewel " + i + " has value " + jewelNumArray[i]);
    } 
      return jewelNumArray; 
};

function refresh() {
  $("#targetNumId").html("");   //Remove old target number
  totalScore = 0;               //Reset player score to zero.  
  $("#totalScoreId").html("<h3> " + totalScore + "</h3>");   // Display zero score
  getRandomTargetNum();  //Get a new random number 
  jewelArray = assignJewelNums();  //Assign new random numbers to the jewels
} 
 

}); // end document ready