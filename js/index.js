const suits = ['hearts', 'spades', 'diamonds', 'clubs'];
const cardsWrapper = document.querySelector('.cards-wrapper');
const buttonsWrapper = document.querySelector('.btn-wrapper');
const buttonTitles = ['Shuffle', 'Show/Hide', 'Magic'];
const cards = [];
let cardsOriginal = [];

function createCards() {
  // Create an array with objects containing the value and the suit of each card
  
  for (let index = 0; index < suits.length; index++) {
    for (let i = 1; i <= 13; i += 1) {
      const cardObject = {
        value: i,
        suit: suits[index]
      };
      cards.push(cardObject);
    }
  }

  // For each dataObject, create a new card and append it to the DOM
  cards.forEach((card, i) => {
    const positionFromLeft = i * 30;
    const cardElement = document.createElement('div');
    cardElement.setAttribute('data-value', card.value);
    cardElement.classList.add('card', `${card.suit}-${card.value}`);
    cardElement.style.left = `${positionFromLeft}px`;
    cardsWrapper.append(cardElement);
  });

  cardsOriginal = cards.slice(0); // Have a separate array for the original cards
}

// Create just one button, it will be called for each button
function createButton(buttonTitle) {
  const buttonElement = document.createElement('button');
  buttonElement.classList.add('btn', 'btn-lg', 'btn-secondary', 'mx-2');
  buttonElement.textContent = buttonTitle;
  buttonsWrapper.append(buttonElement);
  return buttonElement;
}

// Function to clear out the initial button and create new buttons to play the game.
function createButtons() {
  // Your Code
  buttonsWrapper.removeChild(document.querySelector('#start-game'));
  // Function to clear out the initial button and create new buttons to play the game.
  
  createButton(buttonTitles[0]).addEventListener(
    'click',
    renderShuffledCards
  );
  
  createButton(buttonTitles[1]).addEventListener(
    'click',
    hideShowCards
  );
  
  createButton(buttonTitles[2]).addEventListener(
    'click',
    renderOriginalCards
  );
}
  


// Function to start the game by clearing the wrapper, creating
// and appending the buttons and all the cards to the DOM
function startGame() {
  createButtons();
  createCards();
}

// Render shuffled cards
function renderShuffledCards() {
  shuffleOrOriginalCards();
}
  
// Render just the original array
function renderOriginalCards() {
  shuffleOrOriginalCards(true);
}
  
// Hide or show cards
function hideShowCards() {
  cardsWrapper.classList.toggle("hidden");
}
  
// Shuffle or original
function shuffleOrOriginalCards(isOriginal = false) {
  let arr;
  if (isOriginal) {
    arr = cardsOriginal
  } else {
    arr = cards.sort(() => Math.random() - 0.5)
  }
  
  const long = cardsWrapper.children.length;
  
  for (let index = long - 1; index >= 0; index--) {
    const el = cardsWrapper.children[index];
    const klass = el.classList[1];
    
    el.classList.remove(klass);
    el.classList.add(`${arr[index].suit}-${arr[index].value}`);
    const positionFromLeft = index * 30;
    el.style.left = `${positionFromLeft}px`;
  }
}

document.getElementById('start-game').addEventListener('click', startGame);
