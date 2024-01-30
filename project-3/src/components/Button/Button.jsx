import styles from "./Button.module.css";

const Button = ({ text, toggle }) => {
  return (
    <div style={styles}>
      <button onClick={toggle}>{text}</button>
    </div>
  );
};

export default Button;
