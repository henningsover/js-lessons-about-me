import React from "react";
import styled from "styled-components";
import NavListItem from "./NavListItem";

const TopHeader = styled.header`
  background-color: #545d7991;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 80%;
  margin: auto;
  min-height: 3em;
`;

const Title = styled.h1`
  font-size: 1em;
  color: white;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  min-width: 20em;
  justify-content: space-between;
`;

export default function Header() {
  return (
    <TopHeader>
      <HeaderWrapper>
        <Title>Andreas Henningson</Title>
        <nav>
          <NavList>
            <li>
              <NavListItem pathname="/" title="Home" />
            </li>
            <li>
              <NavListItem pathname="/about" title="About me" />
            </li>
            <li>
              <NavListItem pathname="/contact" title="Contact" />
            </li>
          </NavList>
        </nav>
      </HeaderWrapper>
    </TopHeader>
  );
}
