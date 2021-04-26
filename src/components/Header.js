import React from "react";
import { StyledHeader } from "./styles/StyledHeader";

export default function Header({ nightMode, alert }) {
  return <StyledHeader nightMode={nightMode}></StyledHeader>;
}
