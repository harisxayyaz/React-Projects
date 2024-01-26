import React from "react";

import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div className="container">
      <nav>
        <div>
          <img src="./images/logo.png" alt="logo" />
        </div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
