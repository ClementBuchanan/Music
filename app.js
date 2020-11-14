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
    let url1 = "https://i.etsystatic.com/7939429/r/il/e74e39/2324926878/il_794xN.2324926878_8pa7.jpghttps://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinthttps://www.google.com/url?sa=i&url=https%3A%2F%2Ftimesofindia.indiatimes.com%2Flife-style%2Frelationships%2Fpets%2F5-things-that-scare-and-stress-your-cat%2Farticleshow%2F67586673.cms&psig=AOvVaw3_JYsleAUNHbFtHKhjmhRD&ust=1605412919549000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIDtibKTge0CFQAAAAAdAAAAABADerest.com%2Fpin%2F177470041551303885%2F&psig=AOvVaw0-WZ50J0T1OL4oW1ApwbMw&ust=1605412766967000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNjW3eeSge0CFQAAAAAdAAAAABAD";
    let url2 = "https://www.denofgeek.com/wp-content/uploads/2015/05/star-trek-original-crew-star-trek-the-movies-10https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.medicalnewstoday.com%2Farticles%2F322868&psig=AOvVaw1blDNesth2MYqc7XOAk8_6&ust=1605412891772000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIC8iJyTge0CFQAAAAAdAAAAABAD920795-1000-715.jpg"
    let sw = prompt('Do you like sw or st?')
    console.log(sw);
    if (sw == 'sw'){
        addPicture1(url1);
    } else {
        addPicture1(url2);
    }
}
addPicture();
