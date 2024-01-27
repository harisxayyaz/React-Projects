import styles from "./HomePage.module.css";
import Button from "../Button/Button";

const HomePage = ({ toggle }) => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.hero}>
          <div className={styles.photo}>
            <img src="dices.png" alt="" />
          </div>
          <div className={styles.content}>
            <h1>DICE GAME</h1>
            <div className={styles.buttonDiv}>
              <Button text=" Play Now " toggle={toggle} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
