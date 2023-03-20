import React, { useEffect, useState } from "react";
import styles from "./Section.module.css";
import Card from "../card/Card";
function Section({ dataSource }) {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    dataSource().then((data) => {
      setCards(data);
    });
  }, []);
  console.log(cards);
  return (
    <div>
      <div className={styles.wrapper}>
        <h4>Top Albums</h4>
        <h4>Show All</h4>
      </div>
      <div className={styles.cardswrapper}>
        {cards.map(() => (
          <Card />
        ))}
      </div>
    </div>
  );
}

export default Section;
