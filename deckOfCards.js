const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];

class Deck {
  constructor() {
    this.deck = [];
  }

  createDeck(suits, values) {
    for (let suit of suits) {
      for (let value of values) {
        this.deck.push({ 'suit': suit, 'value': value });
      }
    }

    // console.log(this.deck.length);
    return this.deck;
  }

  shuffle(deck) {
    for (var i = deck.length - 1; i > 0; i--) {
      let randomNum = Math.floor(Math.random() * i) + 1;
      let tempVal = deck[randomNum];

      deck[i] = tempVal;

    }
  }
}

let deck = new Deck();
console.log(deck.createDeck(suits, values));