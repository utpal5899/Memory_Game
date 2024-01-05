 
let scores = () => {
  let high_score;
  let matched = 0;
  let total_try_no = 0;

//   set highcore in localstorage
  let setHighScores = (score) => {
    localStorage.setItem("high_Score", score);
  };

//get highcore from localstorage    
  let getHighScores = () => {
    high_score = parseInt(localStorage.getItem("high_Score"));
    return high_score;
  };

  return {
    getHighScores: getHighScores,
    setHighScores: setHighScores,
    total_try_no: total_try_no,
    matched: matched,
  };
};

export { scores };
