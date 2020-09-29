import React from "react";
import styled from "styled-components";
import img from "../../imgs/Andreas.png";

const PersonalInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 55vw;
  margin: auto;
`;

const AboutImg = styled.img`
  max-width: 20rem;
  margin-right: 20px;
`;

export default function PersonalInfo() {
  return (
    <PersonalInfoWrapper>
      <div>
        <AboutImg src={img} alt="Me" />
      </div>
      <div>
        <p>Name: Andreas Henningson</p>
        <p>Age: 32</p>
      </div>
    </PersonalInfoWrapper>
  );
}
