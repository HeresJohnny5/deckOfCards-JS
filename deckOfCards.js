const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];

class Deck {
  constructor() {
    this.deck = [];
    this.hand = [];
  }

  createDeck(suits, values) {
    for (let suit of suits) {
      for (let value of values) {
        this.deck.push({ 'suit': suit, 'value': value });
      }
    }

    return this.deck;
  }

  shuffleDeck() {
    let tempVal;

    for (let i = this.deck.length - 1; i > 0; i--) {
      let randomNum = Math.floor(Math.random() * i) + 1;

      tempVal = this.deck[i];
      this.deck[i] = this.deck[randomNum];
      this.deck[randomNum] = tempVal;
    }

    return this.deck;
  }

  deal() {
    if (this.hand.length < 52) {
      this.hand.push(this.deck.shift());
    } else {
      console.log(`No cards left to deal.`);
    }

    // console.log('this.hand: ', this.hand);
    // console.log('this.hand.length: ', this.hand.length);
    // console.log('this.deck.length: ', this.deck.length);
  }
}

let deck = new Deck();
deck.createDeck(suits, values);
let shuffledDeck = deck.shuffleDeck();

let counter = 0;
while (counter < 52) {
  deck.deal();
  counter++;
}

