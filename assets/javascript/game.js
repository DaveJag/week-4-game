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
   // var newTotal;
    console.log("countClick: totalScore is " + totalScore);
    $("#jewel0").click(function() { 
      console.log("click0");
      totalScore += jewelArray[0];
      $("#totalScoreId").html("<h3> " + totalScore + "</h3>");
    });
    $("#jewel1").click(function()  { 
      console.log("click1");
      totalScore += jewelArray[1];
      $("#totalScoreId").html("<h3> " + totalScore + "</h3>");
    });
    $("#jewel2").click(function() {
     console.log("click2"); 
      totalScore += jewelArray[2]; 
      $("#totalScoreId").html("<h3> " + totalScore + "</h3>");
    });
    $("#jewel3").click(function()  {
      console.log("click3"); 
      totalScore += jewelArray[3];
      $("#totalScoreId").html("<h3> " + totalScore + "</h3>");
    });
        
   // totalScore += newTotal;
   // $("#totalScoreId").html("<h3> " + totalScore + "</h3>");
   console.log("end of function countClicks");
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