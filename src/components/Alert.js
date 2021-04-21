import React from "react";
import { StyledAlert, Text } from "./styles/StyledAlert";

export default function Alert({ children }) {
  return (
    <StyledAlert>
      <Text>{children}</Text>
    </StyledAlert>
  );
}
