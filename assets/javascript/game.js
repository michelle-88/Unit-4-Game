// Declare global variables
var targetNumber;
var wins = 0;
var losses = 0;
var counter = 0;
var numberOptions = [1, 8, 5, 12];

// Create function to randomly generate target number for each game 19-120

function getRandomTarget() {
    targetNumber = Math.floor(Math.random() * (101 + 1)) + 19;
  };

  getRandomTarget();

$("#target-number").text(targetNumber);

// Create for loop to dynamically create img tags for crystal images and assign random value to each

// Create onclick listener for crystal images
// When each is clicked, pull value attr, parse into integer, and add this to the counter


// Create conditionals to chck if player has met target number of not (win/loss)