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

function addPicture1(potatoe){
    let numberPictures = prompt('How many pictures do you want to see?');
    // want to use a for loop
    for(let i = 0; i < numberPictures; i++){
        console.log('The value of i is : ' + i);
    document.write('<img src="' + potatoe + '">');
    }
}
addPicture1();

function addPicture(){
    let url1 = "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftoppng.com%2Fvector%2Frastaman-reggae-vector-logo-free%2F464115&psig=AOvVaw0lCBG1-oQP_0inTSe-X3dA&ust=1605416717822000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPCNscKhge0CFQAAAAAdAAAAABAO";
    let url2 = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vhv.rs%2Fviewpic%2FiimbxxR_fictional-character-stencil-logo-bob-marley-graffiti-cover%2F&psig=AOvVaw0lCBG1-oQP_0inTSe-X3dA&ust=1605416717822000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPCNscKhge0CFQAAAAAdAAAAABAS";
    let sw = prompt('Do you like sw or st?')
    console.log(sw);
    if (sw == 'sw'){
        addPicture1(url1);
    } else {
        addPicture1(url2);
    }
}
addPicture();
