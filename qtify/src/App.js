import React from "react";
import Card from "./components/card/Card";
import Hero from "./components/hero/Hero";
import Navbar from "./components/Navbar/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Card />
    </>
  );
}
