import React from "react";
import Alert from "./Alert";
import { StyledHeader } from "./styles/StyledHeader";

export default function Header({ nightMode }) {
  return (
    <StyledHeader nightMode={nightMode}>
      <Alert>Add Todo</Alert>
    </StyledHeader>
  );
}
