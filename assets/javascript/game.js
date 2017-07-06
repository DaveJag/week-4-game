/* David Jagodowski - HW04 */
$(document).ready(function()  {  // Document ready function. Waits until HTML page loads before running this script

  //Begin Main Program
  var jewelCount = 4; // The number of jewels
  var jewelNumArray = []; //Holds random values for each jewel

  getRandomTargetNum();
  assignJewelNums();
  
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
    for (var i = 0; i < jewelCount; i++) {
      //Generate a whole random number between 1 and 12.
      var x = Math.floor(Math.random() * 12 + 1);
      jewelNumArray[i] = x;
    }
  /* test values 
      for (i = 0; i < jewelNumArray.length; i++) {
      	alert("Jewel " + i + " has value " + jewelNumArray[i]);
      }
      return jewelNumArray; */
};

     
/*
    
     function countJewelClicks() {
	  

     }

  */   
}); // end document ready