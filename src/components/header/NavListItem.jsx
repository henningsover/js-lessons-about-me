import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LS = {};

LS.NavListItem_LINK = styled(Link)`
  color: white;
  text-decoration: none;
  width: 4em;

  &:hover {
    color: black;
    font-weight: bold;
  }
`;

export default function NavListItem(props) {
  return <LS.NavListItem_LINK to={{ pathname: props.pathname }}>{props.title}</LS.NavListItem_LINK>;
}
