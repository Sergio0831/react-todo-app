import React from "react";
import { StyledHeader } from "./styles/StyledHeader";

export default function Header({ nightMode }) {
  return <StyledHeader nightMode={nightMode}></StyledHeader>;
}
