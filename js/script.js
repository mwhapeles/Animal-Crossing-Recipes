/* Data to Show*/
const data = [
  {
   //quote: `“Be like a mountain.”`, 
   backgroundImage: `url(assets/backgroundImage.jpg)`,
   image: `url(assets/Amalgia+Seafood+Salad.png)`
  }, 
  {
   //quote: `“Brave the oceans.”`, 
   image: `url(assets/AppleTart.jpg)`,
   backgroundImage: `url(assets/backgroundImage.jpg)`

  },  
  {
   //quote: `“Grow like a tree.”`, 
   //emoji: '🌲' , 
   backgroundImage: `url(assets/backgroundImage.jpg)`,
   image: `url(assets/ClamChowder.jpg)`
  },
  {
    //quote: `“We'll be ok now.”`, 
   // emoji: '👌', 
    backgroundImage: `url(assets/backgroundImage.jpg)`,
    image: `url(assets/apple-pie.large.jpg)`
  }, 
  {
   // quote: `"It's a good day to be an eagle!"`,
    //emoji: `🦅`, 
    backgroundImage: `url(assets/backgroundImage.jpg)`,
    image: `url(assets/Amalgia+Gratin+(Turkey+Day).png)`
  }, 
  {
    //quote: `"I am a risk"`,
    //emoji: `🦅`, 
    backgroundImage: `url(assets/backgroundImage.jpg)`,
    image: `url(assets/BakedPotato.jpg)`
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
  
  // display data based on array index
  quote.innerHTML = data[itemNumber].quote;
  //emoji.innerHTML = data[itemNumber].emoji;
  bgImage.style.backgroundImage = data[itemNumber].backgroundImage;
  cards.style.content = data[itemNumber].image;
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
  }
  
  // Random Spacebar
  if ( event.key === " ") {
    
    // generate random number, for total number, of items (data)
    randomNumber = Math.floor ( Math.random() * data.length );

    // display data based random number
    quote.innerHTML = data[randomNumber].quote;
   //emoji.innerHTML = data[randomNumber].emoji;
    bgImage.style.backgroundImage = data[randomNumber].backgroundImage;
    cards.style.content = data[itemNumber].image;
  
  }
  
});