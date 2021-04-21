import styled from "styled-components/macro";

export const StyledAlert = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0.7rem;
  left: 50%;
  transform: translateX(-50%) translateY(-150%) scale(0.2);
  opacity: 0;
  background: #c058f3;
  color: $light;
  width: 20rem;
  height: 3rem;
  border-radius: 0.313rem;
  transition: all 0.3s;
`;

export const Text = styled.p``;
