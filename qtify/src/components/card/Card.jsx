import React from "react";
import styles from "./Card.module.css";
function Card() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <img
          src={require("../../assets/headphone.png")}
          alt="headphone"
          loading="lazy"
        />
        <div className={styles.banner}>
          <div className={styles.pill}>
            <p>1100 Follows</p>
          </div>
        </div>
      </div>

      <div className={styles.titlewrapper}>
        <p>Music</p>
      </div>
    </div>
  );
}

export default Card;
