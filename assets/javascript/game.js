 /* David Jagodowski - HW04 */
$(document).ready(function()  {  // Document ready function. Waits until HTML page loads before running this script

  //Begin Main Program
  var jewelCount = 4; // The number of jewels
  var jewelArray = []; //Holds values for each jewel
  var totalScore = 0;

  getRandomTargetNum();
  jewelArray = assignJewelNums();
  countClicks();

   
  //test: write jewel values to console
  for (var i = 0; i < jewelCount; i++) {
      //Generate a whole random number between 1 and 12.
      // check values in console. 
      console.log("main program: Jewel " + i + " has value " + jewelArray[i]);
    } 

  function countClicks() {
    $("#jewel0").click(updateScore); 
    $("#jewel1").click(updateScore); 
    $("#jewel2").click(updateScore); 
    $("#jewel3").click(updateScore); 
    console.log("end of function countClicks");
  }

  function updateScore(totalScore) {
    console.log("updateScore: totalScore = " + totalScore);
    var newTotal = parseInt(totalScore + jewelArray[0]);
    console.log("updateScore: newTotal = " + newTotal);
    totalScore = newTotal;
    $("#totalScoreId").html = (totalScore);
    console.log("end of function updateScore");
    return totalScore;  
}

  
  //End Main Program


  function getRandomTargetNum() {
    //Generate a Random whole number between 19 and 120 
    var x = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
    // alert(x); 
    // Append to targetNumDiv
    $("#targetNumDiv").append("<h2> " + x + " </h2>");
    //alert("Is the program getting here?");

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

 

}); // end document ready