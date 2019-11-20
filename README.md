# Problem Statement: Deck of Cards
***
- Code in an object-oriented programming language a collection of classes to model a deck of cards. These are poker-style playing cards (fifty-two cards in four suits: hearts, spade, clubs, and diamonds, with a face value of Ace, 2-10, Jack, Queen and King).
- One of your classes should contain a shuffle method and a deal_card method.

> #### shuffle method / shuffle():
>
> - Shuffle returns no value, but results in the cards in the deck being randomly permuted. 
> - Do not use a library-provided shuffle function. You may use library-provided random number generators.

> #### deal card method / dealCard():
>
> - This function should return one card from the deck to the caller.

- A call to shuffle followed by 52 calls to dealCard will result in the caller being provided 52 cards of the deck in random order. If the caller makes a 53rd call to dealCard, no card is dealt.

- There are many details to this task left vague on purpose. You should follow the principles of least surprise in making design decisions for this implementation.