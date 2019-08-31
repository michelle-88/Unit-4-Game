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

for(var i = 0; i < numberOptions.length; i++){
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", "https://vignette.wikia.nocookie.net/jumpingground/images/0/06/Time_stone.png/revision/latest?cb=20180916204409");
    imageCrystal.attr("num-crystalvalue", numberOptions[i]);
    $("#crystals").append(imageCrystal);
};

// Create onclick listener for crystal images
$(".crystal-image").on("click", function(){

    // Create variable that will store value of crystal that was clicked on and add this to player total score
    var crystalValue = ($(this).attr("num-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;

    // Display player total score so far on index page
    $("#scoreSoFar").text(counter);
});



// When each is clicked, pull value attr, parse into integer, and add this to the counter


// Create conditionals to chck if player has met target number of not (win/loss)