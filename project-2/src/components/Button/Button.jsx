import styles from "./Button.module.css";

const Button = ({ text, icon, isOutline }) => {
  return (
    <div>
      <button className={isOutline ? styles.outline_btn : styles.normal_btn}>
        {icon}
        {text}
      </button>
    </div>
  );
};

export default Button;
