import styled from "styled-components/macro";

export const StyledContainer = styled.div`
  max-width: 144rem;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background: ${(props) => props.theme.bgColor};
  transition: all 0.5s ease;
`;
