/* David Jagodowski - HW04 */
$(document).ready(function()  {  // Document ready function. Waits until HTML page loads before running this script

  //Begin Main Program
  getRandomTargetNum();

  //End Main Program


  function getRandomTargetNum() {
    //Generate a Random whole number between 19 and 120 
    var x = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
    // alert(x); 
    // Append to targetNumDiv
    $("#targetNumDiv").append("<h2> " + x + " </h2>");
    //alert("Is the program getting here?");

};



}); // end document ready