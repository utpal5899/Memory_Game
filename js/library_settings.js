let settings = {
   
  player_name: "",
  total_cards: "",

//   get playername from sessionstorage
  getPlayerName() {
    this.player_name = sessionStorage.getItem("#player_name");
    return this.player_name;
  },
//   get total number of cards from sessionStorage
  getTotalCards() {
    this.total_cards = sessionStorage.getItem("#num_cards") || 48;
    return this.total_cards;
  },
//   set player_Name in sessionStorage
  setPlayerName(player_Name) {
         this.player_name = player_Name;
    sessionStorage.setItem("#player_name", this.player_name );
        },
 // set card numbers in sessionStorage
  setTotalCards(num_of_card) {
    this.total_cards = num_of_card;
    sessionStorage.setItem("#num_cards",  this.total_cards);
     },
};

export { settings };
