import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
  min-height: 20vh;
  padding: 10px;
  background: #243238;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  color: white;
`;

const LinkStyled = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    color: black;
    font-weight: bold;
  }
`;

export default function Footer() {
  const INSTAGRAM_URL = "https://www.instagram.com/henningsover/";
  const LINKEDIN_URL = "https://www.linkedin.com/in/andreas-henningson-aa2220197/";
  const GITHUB_URL = "https://github.com/henningsover";
  return (
    <footer>
      <FooterWrapper>
        <Title>Visit me on</Title>
        <nav>
          <ul>
            <li>
              <LinkStyled href={LINKEDIN_URL}>LinkedIn</LinkStyled>
            </li>
            <li>
              <LinkStyled href={GITHUB_URL}>GitHub</LinkStyled>
            </li>
            <li>
              <LinkStyled href={INSTAGRAM_URL}>Instagram</LinkStyled>
            </li>
          </ul>
        </nav>
      </FooterWrapper>
    </footer>
  );
}
