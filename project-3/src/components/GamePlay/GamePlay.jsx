import { useState } from "react";
import styles from "./GamePlay.module.css";
import ShowRules from "../ShowRules/ShowRules";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNum, setSelectedNum] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState(" ");
  const [rules, setRules] = useState(false);
  const arrayNum = [1, 2, 3, 4, 5, 6];

  const handleResetScore = () => {
    setScore(0);
  };

  const toggleRules = () => {
    setRules((prev) => !prev);
  };

  const diceRolled = () => {
    if (!selectedNum) {
      setError("Must Select a number");
      return;
    }
    var random = generateRandomNumber(1, 7);
    setCurrentDice(random);
    setError(" ");
    if (random == selectedNum) {
      var newScore = score + random;
      setScore(newScore);
    } else {
      var newScore = score - 2;
      setScore(newScore);
    }
    setSelectedNum();
  };

  const generateRandomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  };

  return (
    <div>
      <div className={styles.navbar}>
        <div className={styles.navScore}>
          <h1>{score}</h1>
          <p>Total Score</p>
        </div>

        <div className={styles.navRight}>
          <p className={styles.error}>{error}</p>
          <div className={styles.selectNum}>
            {arrayNum.map((value) => (
              <div
                className={styles.Box}
                key={value}
                onClick={() => setSelectedNum(value)}
              >
                {value}
              </div>
            ))}
          </div>
          <p>Select Number</p>
        </div>
      </div>
      <div className={styles.hero}>
        <div className="imageDiv" onClick={diceRolled}>
          <img src={`dice/dice_${currentDice}.png`} alt="dicePhoto" />
        </div>
        <p>Click on Dice to roll</p>
        <button className={styles.resetButton} onClick={handleResetScore}>
          Reset Score
        </button>
        <button className={styles.showRulesBtn} onClick={toggleRules}>
          {rules ? "Hide" : "Show"} Rules
        </button>
        {rules && <ShowRules />}
      </div>
    </div>
  );
};

export default GamePlay;
