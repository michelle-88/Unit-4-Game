$(document).ready(function() {

// Declare global variables
var targetNumber;
var wins = 0;
var losses = 0;
var counter = 0;
var numberOptions = [];

// Create function to randomly generate target number for each game

function getRandomTarget() {
    targetNumber = Math.floor(Math.random() * (101 + 1)) + 19;
    $("#target-number").text(targetNumber);
  };

  getRandomTarget();

// Create function to randomly generate array of 4 numbers for crystal values

function getCrystalValues() {
    for(var i = 0; i < 4; i++){
        var randomValue = Math.floor(Math.random() * (11 + 1)) + 1;
        numberOptions.push(randomValue);
    }
};

getCrystalValues();

// Create function to reset player counter and numberOptions array
function resetGame(){
    counter = 0;
    $("#scoreSoFar").text(counter);
    numberOptions = [];
}

// Create function to dynamically create img tags for crystal images and assign random value to each
function createCrystals() {
    for(var i = 0; i < numberOptions.length; i++){
        var imageCrystal = $("<img>");
        imageCrystal.addClass("crystal-image");
        imageCrystal.attr("src", "https://vignette.wikia.nocookie.net/jumpingground/images/0/06/Time_stone.png/revision/latest?cb=20180916204409");
        imageCrystal.attr("num-crystalvalue", numberOptions[i]);
        $("#crystals").append(imageCrystal);
    }
};

createCrystals();

function initEventListener() {

// Create onclick listener for crystal images
$(".crystal-image").on("click", function(){

    // Create variable that will store value of crystal that was clicked on and add this to player total score
    var crystalValue = ($(this).attr("num-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;

    // Display player total score so far on index page
    $("#scoreSoFar").text(counter);

    // Create conditionals to check if player has met target number or not (win/loss)
    if(counter === targetNumber){
        wins++;
        $("#winScore").text(wins);
        getRandomTarget();
        resetGame(); 
        $("#crystals").empty();
        getCrystalValues();
        createCrystals();
        initEventListener();              
    };

    if(counter > targetNumber){
        losses++;
        $("#lossScore").text(losses);
        getRandomTarget();
        resetGame();
        $("#crystals").empty();
        getCrystalValues();
        createCrystals();
        initEventListener();
    };

});
}

initEventListener();
});



