import React from "react";
import styles from "./Search.module.css";
import { ReactComponent as SearchIcon } from "../../assets/SearchIcon.svg";
function Search({ placeholder }) {
  return (
    <div className={styles.wrap}>
      <input className={styles.search} placeholder={placeholder} />
      <button className={styles.searchButton}>
        <SearchIcon />
      </button>
    </div>
  );
}

export default Search;
