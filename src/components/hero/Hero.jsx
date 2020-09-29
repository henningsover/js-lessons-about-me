import React from "react";
import styled from "styled-components";

const HeroWrapper = styled.div`
  background-image: url("${(props) => props.backgroundImg}");
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  color: white;
  text-align: center;
  position: relative;
`;

const Title = styled.h2`
  position: absolute;
  top: 40vh;
  left: 14vw;
  font-size: 3.5rem;
`;

export default function Hero({ title, backgroundImg }) {
  console.log(backgroundImg);
  return (
    <HeroWrapper backgroundImg={backgroundImg}>
      <Title>{title}</Title>
    </HeroWrapper>
  );
}
