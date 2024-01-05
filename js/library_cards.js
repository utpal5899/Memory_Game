let cards = {
  images: () => {
    // save all images in array and return it to another function
    let images_preload = [
      "images/card_1.png",
      "images/card_2.png",
      "images/card_3.png",
      "images/card_4.png",
      "images/card_5.png",
      "images/card_6.png",
      "images/card_7.png",
      "images/card_8.png",
      "images/card_9.png",
      "images/card_10.png",
      "images/card_11.png",
      "images/card_12.png",
      "images/card_13.png",
      "images/card_14.png",
      "images/card_15.png",
      "images/card_16.png",
      "images/card_17.png",
      "images/card_18.png",
      "images/card_19.png",
      "images/card_20.png",
      "images/card_21.png",
      "images/card_22.png",
      "images/card_24.png",
      "images/card_23.png",
    ];

    return images_preload;
  },
//  this function will display all the images on display
  displayCards: (cards) => {
    for (let i = cards.length - 1; i >= 0; i--) {
      document.getElementById(
        "cards"
      ).innerHTML += ` <div class="card_container">
        <div class="cards_top_back">
          <div class="top_image"></div>
          <div class="back_image"><img src="${cards[i]}" /></div>
        </div>
      </div>`;
    }
  },
};

export { cards };
