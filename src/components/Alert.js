import React, { useState } from "react";
import { StyledAlert, Text } from "./styles/StyledAlert";

export default function Alert() {
  const [alert, setAlert] = useState(false);

  return (
    <StyledAlert alert={alert} setAlert={setAlert}>
      <Text>Add Todo</Text>
    </StyledAlert>
  );
}
