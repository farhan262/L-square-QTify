import React from "react";
import Button from "../button/Button";
import Logo from "../Logo/Logo";
import Search from "../search/Search";
import styles from "./Navbar.module.css";
function Navbar() {
  return (
    <div className={styles.navbar}>
      <Logo />
      <Search placeholder="Search a song of your choice" />
      <Button>Give Feedback </Button>
    </div>
  );
}

export default Navbar;
