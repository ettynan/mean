// Create a Deck object constructor. A deck should have the following functionality:
function DeckConstructor(){    
    //protects against accidentally not having keyword 'new' before constructor
    if(!(this instanceof DeckConstructor)){
        return new DeckConstructor()
    }
    this.buildDeck();
}
// The Deck should contain the 52 standard cards 
DeckConstructor.prototype.buildDeck = function(){
    var vals = ["ace","2","3","4","5", "6","7","8","9","10","jack","queen","king"],
        suits = ["hearts", "diamonds", "clubs", "spades"],
        self = this; //for callback
    
    this.cards = []; //new array for set of cards making

suits.forEach(function(suit){//forEach is a for loop
    vals.forEach(function(value){
        self.cards.push(new Card(value, suit));
    });
});
    return this;
}

// The Deck should be able to shuffle 
DeckConstructor.prototype.shuffle = function(){
    var cardsRemaining = this.cards.length,
        randomCardToShuffle,
        temp;
    //while loop to pick from the remaining cards to shuffle to the back
    while (cardsRemaining > 0){
        //grab a remaining card at random
        randomCardToShuffle = Math.floor(Math.random() * cardsRemaining); //length of the array will change as we take cards
        //move cardsRemaining closer to the front of array
        cardsRemaining -= 1;
        //swap with current card
        temp = this.cards[randomCardToShuffle];
        this.cards[randomCardToShuffle] = this.cards[cardsRemaining];
        this.cards[cardsRemaining] = temp;   
    }
    return this;
}
// The Deck should be able to reset 
DeckConstructor.prototype.reset = function(){ //call the two annonymouse functions we justmade to build and shuffle the deck
    this.buildDeck().shuffle();
}

// The Deck should be able to deal a random card - Mathrand and math floor 1-53
DeckConstructor.prototype.dealRandom = function(){
    var random = this.cards.pop;
    if (this.cards.length > 0){
        return random;
    }
    else {
        return null;
    }
}

function Card(value, suit){ 
    //  if(!(this instanceof CardConstructor)){
    //     return new CardConstructor()
    // }
    this.value = value;
    this.suit = suit;
}
function PlayerConstructor(name){  
    if(!(this instanceof PlayerConstructor)){
        return new PlayerConstructor()
    }
    this.name = name;
    this.hand = []; //new array for set of cards making in hand
}

PlayerConstructor.prototype.takeCard = function(deck){
    this.hand.push(deck.dealRandom());
}

PlayerConstructor.prototype.ditchCard = function(cardLocation){
    if (this.hand.length > cardLocation){
        this.hand.splice(cardLocation, 1);
    }
    return this;
}   

//      Deal should return the card that was dealt and remove it from the deck

