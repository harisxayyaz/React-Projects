import Button from "../Button/Button";
import styles from "./Form.module.css";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  function onSubmit(event) {
    event.preventDefault();
    setName(event.target[0].value);
  }
  return (
    <div className={`${styles.container} container`}>
      <div className={styles.formDiv}>
        <div className={styles.topButtons}>
          <Button text="VIA CHAT SUPPORT" icon={<MdMessage />} />
          <Button text="VIA CALL" icon={<FaPhoneAlt />} />
        </div>
        <Button text="VIA EMAIL" icon={<CiMail />} isOutline={true} />

        <form onSubmit={onSubmit}>
          <div className={styles.textAndInput}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.textAndInput}>
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.textAndInput}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="8" />
          </div>
          <div
            className="div"
            style={{ display: "flex", justifyContent: "end" }}
          >
            <Button text="SUBMIT BUTTON" />
          </div>

          <p>{name}</p>
        </form>
      </div>
      <div className="imageDiv">
        <div className={styles.photo}>
          <img src="./images/image.svg" alt="photo" />
        </div>
      </div>
    </div>
  );
};

export default Form;
