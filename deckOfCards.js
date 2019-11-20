let suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];

class Deck {
  constructor() {
    this.deck = [];
  }

  createDeck(suits, values) {
    for (let suit of suits) {
      for (let value of values) {
        this.deck.push(suit, value);
      }
    }

    return this.deck;
  }
}

let deck = new Deck();
console.log(deck.createDeck(suits, values));