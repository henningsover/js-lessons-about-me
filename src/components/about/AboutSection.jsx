import React from "react";
import styled from "styled-components";
// import img from "../../imgs/Andreas.png";
import PersonalInfo from "./PersonalInfo";

// const AboutImg = styled.img`
//   max-width: 17rem;
//   border-radius: 20px;
// `;

const Button = styled.button`
  background-color: white;
  color: #545d79;
  font-size: 1rem;
  padding: 0.5rem 1.5rem;
  border: 2px solid #545d79;
`;

export default function AboutSection() {
  return (
    <section>
      <h2>About me</h2>
      <PersonalInfo />
    </section>
  );
}
