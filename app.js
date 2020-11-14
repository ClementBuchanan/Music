'use strict'

function timeGreeting(){
    let today = new Date();
    let hourNow = today.getHours();
    let greeting;
    if (hourNow >= 18 && hourNow < 24) {
      greeting = 'It is a good night';
    } else if (hourNow >= 12 && hourNow < 18) {
      greeting = 'It is a good afternoon';
    } else if (hourNow >= 0 && hourNow < 12) {
      greeting = 'It is a good morning!';
    } else {
      greeting = 'TLJ is the BEST!';
    }
    document.write('<h3>' + greeting + '</h3>');
}
function getNumber(){
    let userNumber = prompt('please enter a letter');
    return userNumber;
}

function guessingGame(){
    let correctAnswer = 5;
    let numberOfGuesses = 3;
let userAnswer = prompt('guess a number between 1-5');
while (userAnswer !==correctAnswer){
    if (userAnswer < correctAnswer){
        userAnswer = prompt('You have guessed too low')
} else if (userAnswer > correctAnswer){
    userAnswer = prompt('You have guessed too high')
}
if (userAnswer == correctAnswer){
    alert ('correct answer'); 
}
break;
} 
}
guessingGame();