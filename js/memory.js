// IMPORTING JS FILES
import { Card } from "./library_card.js";
import { cards } from "./library_cards.js";
import { scores } from "./library_scores.js";
import { settings } from "./library_settings.js";
 
let total_cards;
let pair = [];
let scoresObj;

// PRELOADING ALL THE IMAGES
let images_preload = cards.images();

// creating function which can call this
let $docById = (id) => document.getElementById(id);

//  setting
let savesetting = () => {
  //input vales
  const player_Name = $("#player_name").val();
  const num_of_card = $("#num_cards").val();

  // storing values by passing values to function
  settings.setPlayerName(player_Name);
  settings.setTotalCards(num_of_card);
  window.location.href = "./index.html";
};

// to display cards
let onBoardCard = () => {
  // storing images to array with some logic
  let images_array = [
    ...images_preload.slice(0, total_cards / 2),
    ...images_preload.slice(0, total_cards / 2),
  ];

  let i, j;
  while (total_cards) {
    i = Math.floor(Math.random() * total_cards--);
    j = images_array[total_cards];
    images_array[total_cards] = images_array[i];
    images_array[i] = j;
  }
  // passing array values to a function stored in diffrent js file
  cards.displayCards(images_array);
};

// number of try
let pair_cards_check = () => {
  if (pair.length == 2) {
    const card = new Card(pair[0], pair[1]);
    scoresObj.total_try_no++;
    $docById("num_of_try").innerHTML = `Number Of Try : ${scoresObj.total_try_no}`;
    if (card.isValid()) {
      pair_matched();
    } else {
      pair_unmatched(pair[0], pair[1]);
    }
  }
};

// correct pairs
let pair_matched = () => {
  // if card matches then it will reduce card opacity to zero to make cards hidden
  pair[0].style.opacity = 0;
  pair[1].style.opacity = 0;
  pair = [];

  // it will count number of card match, and add every time it matches.
  scoresObj.matched++ ;
  
  // it will display correct matched card
  $docById("correct").innerHTML = `Correct: ${scoresObj.matched}`;
 
  if (scoresObj.matched === parseInt(settings.getTotalCards()) / 2) {
    
    // store percentage score data inside score variable
    let score =(((parseInt(settings.getTotalCards()) / 2) * 100) /scoresObj.total_try_no).toFixed() + "%";
 
    //  if local storage contains high_score then this block will run
    if (scoresObj.getHighScores()) {
      // it will check wheather score is greater then local storage score
      if (parseInt(score) > parseInt(scoresObj.getHighScores())) {
        // this will save high_score with score value on localStorage
        scoresObj.setHighScores(score)
   
        $docById("high_score").innerHTML = `High Score : ${score}`;
      }
      $docById(
        "high_score"
      ).innerHTML = `High Score : ${scoresObj.getHighScores()}%`;
    } else {
      // this block will store score om localStorag
       scoresObj.setHighScores(score)
      // it will display hugh score on display
      $docById("high_score").innerHTML = `High Score : ${score}`;
    }
  }
};

// if both cards do doesn't match then this block will execute
let pair_unmatched = (pair_1, pair_2) => {
  // execute function after every one second 
  setTimeout(() => {
    pair_1.state = "unclicked";
    pair_2.state = "unclicked";
    pair_1.style.transform = "rotateY(0deg)";
    pair_2.style.transform = "rotateY(0deg)";
  }, 1000);
  pair = [];
};

// start document from here
$(document).ready(() => {

   scoresObj = scores();
    // number of cards
    total_cards = settings.getTotalCards();
 
  // to save changes
  $("#save_settings").click(savesetting);

  // if highest score is available on local storage then this block will run
 
  
  if (scoresObj.getHighScores()) {
    // to dispaly high score on dispaly
    $docById("high_score").innerHTML = `High Score: ${scoresObj.getHighScores()}%`;
  }

  //    to see if any user is available in session
  if (settings.getPlayerName()) {
    $docById("player").innerHTML = `Player Name :${settings.getPlayerName()}`;
  }


// to make all card visaible on index page
  onBoardCard();

  // to select all the cards of display
  let cards = document.querySelectorAll(".cards_top_back");

  
  // this block will set state uncliked for each card
  for (let i of cards) {
    i.state = "unclicked";
  }

  for (let i = 0; i < cards.length; i++) {
     cards[i].addEventListener("click", () => {
      if (cards[i].state == "unclicked") {
        // card state is unclicked and user click on card then state will change to clicked
        cards[i].state = "clicked";
        cards[i].style.transform = "rotateY(180deg)";
        // it will push card to pair array
        pair.push(cards[i]);

        // this function will run if pair array has two cards
        pair_cards_check();
      }
    });
  }
});
