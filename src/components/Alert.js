import React from "react";
import { StyledAlert, Text } from "./styles/StyledAlert";

const Alert = ({ alert }) => {
  return (
    <StyledAlert alert={alert} setAlert={setAlert}>
      <Text>Add Todo</Text>
    </StyledAlert>
  );
};

export default Alert;
