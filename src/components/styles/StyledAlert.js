import styled from "styled-components/macro";
import { fadeInTop, fadeOutTop } from "./animation";

export const StyledAlert = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0.7rem;
  left: 50%;
  transform: translateX(-50%) translateY(-150%) scale(0.2);
  animation: ${(props) => (props.alert ? fadeInTop : fadeOutTop)} 0.5s forwards;
  opacity: ${(props) => (props.alert ? "1" : "0")};
  background: #c058f3;
  color: $light;
  width: 32rem;
  height: 4.8rem;
  border-radius: 0.313rem;
  transition: all 0.3s;
`;

export const Text = styled.p`
  color: #fff;
`;
