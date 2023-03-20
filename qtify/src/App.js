import React, { useEffect } from "react";
import { fetchTopSongs } from "./api/api";
// import Card from "./components/card/Card";
import Hero from "./components/hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Section from "./components/section/Section";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Section dataSource={fetchTopSongs} />
    </>
  );
}
