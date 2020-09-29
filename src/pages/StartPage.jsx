import React from "react";
import Hero from "../components/hero/Hero";
import heroImg from "../imgs/startpage-hero.jpg";

export default function StartPage() {
  console.log(heroImg);
  return (
    <main>
      <Hero title="Start page" backgroundImg={heroImg} />
    </main>
  );
}
