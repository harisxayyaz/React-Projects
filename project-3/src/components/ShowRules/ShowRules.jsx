import styles from "./ShowRules.module.css";

const ShowRules = () => {
  return (
    <div className={styles.body}>
      <h1>How to play dice game</h1>
      <p>Select any number</p>
      <p>Click on dice image</p>
      <p>
        after click on dice if selected number is equal to dice number you will
        get same point as dice{" "}
      </p>
      <p>if you get wrong guess then 2 point will be dedcuted </p>
    </div>
  );
};

export default ShowRules;
