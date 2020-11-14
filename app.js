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

// function askWhatever(){
//     let ownDog = prompt('Do you own a dog?');
// }

// function goodMovie(){
//     let movieConfirm = confirm('Is the last Jedi the best?');

//     if (movieConfirm){
//         document.write('Someone has a good head on their shoulders')
//     } else {
//         document.write('Someone needs to re-watch TLJ again and again');
//     }
// }

// function getNumber(){
//     let userNumber = prompt('please enter a number');
//     return userNumber;
// }

// // console.log(userNumber);

// let getUserNumberFromFunction = getNumber();

// function addNumber(number1){
//     number1 = number1 + 3;
//     console.log(number1);
// }

// addNumber(5);

// console.log(getUserNumberFromFunction);

// // create a user number guessing game

// // while loop
// // answer
// // prompt for the user
// // how many guesses

// function ownPet(){
    
//     let numberOfGuesses = 3;
//     for (let i = 0; i < numberOfGuesses; i = i + 1){
//         let userAnswer = prompt('How many do you have? Enter 1-5: ');
//         if(userAnswer > 0 && userAnswer < 6){
           
// }

// // function addPicture1(potatoe){
// //     let numberPictures = prompt('How many pictures to display?');
// //     // want to use a for loop
// //     for(let i = 0; i < numberPictures; i++){
// //         console.log('The value of i is : ' + i);
// //     document.write('<img src="' + potatoe + '">');
// //     }
// // }

// // // function addPicture(){
// // //     let url1 = "https://i.etsystatic.com/7939429/r/il/e74e39/2324926878/il_794xN.2324926878_8pa7.jpg";
// // //     let url2 = "https://www.denofgeek.com/wp-content/uploads/2015/05/star-trek-original-crew-star-trek-the-movies-10920795-1000-715.jpg"
// // //     let sw = prompt('Do you like sw or st?')
// // //     console.log(sw);
// // //     if (sw == 'sw'){
// // //         addPicture1(url1);
// // //     } else {
// // //         addPicture1(url2);
// // //     }
// // // }
// // //     function guessingGame(){
// // //         let correctAnswer = 34;
// // //         let numberOfGuesses = 3;
// // //         //                                  i++
// // //         for (let i = 0; i < numberOfGuesses; i = i + 1){
// // //             let userAnswer = prompt('Please Enter a Number 1-100: ');
// // //             if(userAnswer > 0 && userAnswer < 101){
// // //                 if(userAnswer == correctAnswer){
// // //                     alert('Correct Answer')
// // //                     break;
// // //                     // or I could reassing i = 3
// // //                 } else {
// // //                     alert('Sorry, Wrong Answer!')
// // //                 }
// // //             } else {
// // //                 alert('Invalid answer')
// // //             }
// // //         }
// // //     }
    
// // //     function askToPlay(){
// // //         let wannaPlay = prompt('Do you want to play a guessing game? (yes or no)')
// // //         while(wannaPlay == 'yes'){
// // //             guessingGame();
// // //             wannaPlay = prompt('Do you want to play again (yes or no)');
// // //         }
// // //     askToPlay();
// // //     }