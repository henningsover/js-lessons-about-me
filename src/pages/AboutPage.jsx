import React from "react";
// import styled from "styled-components";
import Hero from "../components/hero/Hero";
import heroImg from "../imgs/aboutpage-hero.jpg";
import AboutSection from "../components/about/AboutSection";
import { CenteredContainer } from "../components/GlobalStyledComponents";

export default function AboutPage() {
  return (
    <main>
      <Hero title="About page" backgroundImg={heroImg} />
      <CenteredContainer>
        <AboutSection />
      </CenteredContainer>
    </main>
  );
}
