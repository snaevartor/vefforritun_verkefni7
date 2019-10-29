/**
 * Verkefni 7 – Agiskunarleikur
 *
 * Leikur sem snýst um að giska á tölu milli 0 og 100
 */

const games = [];

function start() {
  var continue_playing = true;
  while (continue_playing == true) {
    play();
    continue_playing = confirm("Vilt þú spila annan leik?");
  }
  // Notandi haettur ad spila
  results = getResults();
  alert(results);
}

function play() {
  const random = randomNumber(1,100);
  var number_of_guesses = 0;
  var correct_guess = false;

  while (correct_guess == false) {
    var input = prompt("Sladu inn tolu a milli 0 og 100:");

    if (input === null) { break; }

    number_of_guesses += 1;
    var guess = parseGuess(input);
    alert(getResponse(guess, random));

    if (guess == random) {
      correct_guess = true;
      games.push(number_of_guesses);
    }
    
  }
}

function getResults(){
  if (games.length > 0) {
    var average = calculateAverage();
    var result_string = "þú spilaðir " + games.length.toString() + " leiki. \n Meðalfjöldi ágiskana var " + average.toString();
    return result_string;
  }
  else {
    return ("Þú spilaðir engann leik >_<");
  }
}

function calculateAverage(){
var avg = 0;
  for (var i = 0; i < games.length; i++) {
      avg += games[i];
  }
  avg = avg / games.length;
  return (avg).toFixed(2);
}

function parseGuess(input){
  if(isNaN(parseInt(input))) {
    return null;
  }
  else {
    return (parseInt(input));
  }
}

function getResponse(guess, correct) {

  if (isNaN(guess) == true || guess < 0) {
    return ("Ekki rétt");
  }
  else if (guess == correct) {
    return ("Rétt!");
  }
  else if (Math.abs(correct - guess) < 5) {
    return ("Mjög nálægt");
  }
  else if (Math.abs(correct - guess) < 10) {
    return ("Nálægt");
  }
  else if (Math.abs(correct - guess) < 20) {
    return ("Frekar langt frá");
  }
  else if (Math.abs(correct - guess) < 50) {
    return ("Langt frá");
  }
  else {
    return("Mjög langt frá");
  }
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

start();