/* Data to Show*/
const data = [
  {

   backgroundImage: `url(assets/backgroundImage.jpg)`,
   image: `url(assets/appleTart.png)`,
   audio: "assets/AnimalCrossingSound.mp3"
  }, 
  {
 
   image: `url(assets/clamChowder.png)`,
   backgroundImage: `url(assets/backgroundImage.jpg)`
   ,
   audio: "assets/AnimalCrossingSound.mp3"

  },  
  {

   backgroundImage: `url(assets/backgroundImage.jpg)`,
   image: `url(assets/anchoasAlAjillo.png)`,
   audio: "assets/AnimalCrossingSound.mp3"
  },
  {
  
    backgroundImage: `url(assets/backgroundImage.jpg)`,
    image: `url(assets/applePie.png)`,
    audio:  "assets/AnimalCrossingSound.mp3"
  }, 

  {
  
    backgroundImage: `url(assets/backgroundImage.jpg)`,
    image: `url(assets/bakedPotato.png)`,
    audio: "assets/AnimalCrossingSound.mp3"
  },
  {backgroundImage: `url(assets/backgroundImage.jpg)`,
  image: `url(assets/wheatDIY.png)`,
  audio:  "assets/AnimalCrossingSound.mp3"
},
{
 
  image: `url(assets/gratin.png)`,
  backgroundImage: `url(assets/backgroundImage.jpg)`,
  audio:  "assets/AnimalCrossingSound.mp3"
}
];

/*
Quote and Emoji
*/
// blockquote
const quote = document.querySelector('blockquote');
// emoji
//const emoji = document.querySelector('p');
//cards
const cards = document.querySelector('main');
// background
const bgImage = document.querySelector('body');
//sound
const audio = document.querySelector('audio');


// Check-Check: change text

// Check-Check: change emoji text
//emoji.innerHTML = "👍️";
// Check-Check: background image
bgImage.style.backgroundImage= 'url(assets/backgroundImage.jpg)';

/*
 * Navigate to Items with Event Listeners
 * Track Number of Items
*/
// initialize item number
let itemNumber = 0;
// get next button
const nextButton = document.querySelector("img.next");
// get previous button
const prevButton = document.querySelector("img.prev");
// get random button
const randButton = document.querySelector("img.random");

// listen for clicks on next button
nextButton.addEventListener("click", () => {
  // update, then increase item number with each click
  itemNumber = itemNumber + 1;
  
  // if at LAST item
  if ( itemNumber > data.length -1 ) {
    // reset counting to first item
    itemNumber = 0;
  }

  // display data based on array index
  quote.innerHTML = data[itemNumber].quote;
 // emoji.innerHTML = data[itemNumber].emoji;
  bgImage.style.backgroundImage = data[itemNumber].backgroundImage;
  cards.style.content = data[itemNumber].image;
  audio.src = data[itemNumber].audio;
  audio.play();
});
  
// listen for clicks on previous button
prevButton.addEventListener("click", () => {
  // update, then DEcrease item number with each click
  itemNumber = itemNumber - 1;
  
  // if at FIRST item
  if ( itemNumber < 0 ) {
    // reset counting to last item
    itemNumber = data.length -1;
  }  
  
 // function play() {
//    //Set the current time for the audio file to the beginning
 //   soundFile.currentTime = 0.01;
 //   soundFile.volume = volume;
 
    //Due to a bug in Firefox, the audio needs to be played after a delay
   // setTimeout(function(){soundFile.play();},1);
 //}
  // display data based on array index
  quote.innerHTML = data[itemNumber].quote;
  //emoji.innerHTML = data[itemNumber].emoji;
  bgImage.style.backgroundImage = data[itemNumber].backgroundImage;
  cards.style.content = data[itemNumber].image;
  audio.src = data[itemNumber].audio;
  audio.play();
});

// listen for clicks on random button
randButton.addEventListener('click', () => {
  
  // generate random number, for total number, of items (data)
  randomNumber = Math.floor ( Math.random() * data.length );
  
  // display data based random number
  //quote.innerHTML = data[randomNumber].quote;
  //emoji.innerHTML = data[randomNumber].emoji;
  bgImage.style.backgroundImage = data[randomNumber].backgroundImage;
  cards.style.content = data[randomNumber].image;
  audio.src = data[itemNumber].audio;
  audio.play();
  
});

// listen for keypress next
document.addEventListener('keyup', (event) => {
  
  // check-check: What key was pressed?
  // console.log(event);

  // Next Right Arrow  
  if ( event.key === "ArrowRight" ) {
   
   // update, then increase item number with each click
  itemNumber = itemNumber + 1;
  
  // if at LAST item
  if ( itemNumber > data.length -1 ) {
    // reset counting to first item
    itemNumber = 0;
  }

  // display data based on array index
  quote.innerHTML = data[itemNumber].quote;
  //emoji.innerHTML = data[itemNumber].image;
  bgImage.style.backgroundImage = data[itemNumber].backgroundImage;
  cards.style.content = data[itemNumber].image;
  audio.src = data[itemNumber].audio;
  audio.play();
    
  }
  
  // Prev Left Arrow
  if ( event.key === "ArrowLeft" ) {
  
   // update, then DEcrease item number with each click
  itemNumber = itemNumber - 1;
  
  // if at FIRST item
  if ( itemNumber < 0 ) {
    // reset counting to last item
    itemNumber = data.length -1;
  }  
  
  // display data based on array index
  quote.innerHTML = data[itemNumber].quote;
  //emoji.innerHTML = data[itemNumber].emoji;
  bgImage.style.backgroundImage = data[itemNumber].backgroundImage;
  cards.style.content = data[itemNumber].image;
  audio.src = data[itemNumber].audio;
  audio.play();
  }
  
  // Random Spacebar
  if ( event.key === " ") {
    
    // generate random number, for total number, of items (data)
    randomNumber = Math.floor ( Math.random() * data.length );

    // display data based random number
    quote.innerHTML = data[randomNumber].quote;
   //emoji.innerHTML = data[randomNumber].emoji;
    bgImage.style.backgroundImage = data[randomNumber].backgroundImage;
    cards.style.content = data[randomNumber].image;
    audio.src = data[randomNumber].audio;
    audio.play();
  
  }
  
});