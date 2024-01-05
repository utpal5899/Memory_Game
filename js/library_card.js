class Card {
 //  constructor will receieve two card images
  constructor(card1, card2) {
    this.card1 = card1;
    this.card2 = card2;
  }

  clickoncard() {
    // if(cards[i].this.state.first == "unclicked")
    //  {return true;}
  }
//   to validate both images are same or diffrent
  isValid() {
    if (this.card1.querySelector("img").src ===this.card2.querySelector("img").src) {
      return true;
    }
    else{
        return false
    }
  }
}

export { Card };
