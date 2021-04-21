import styled from "styled-components/macro";

export const StyledHeader = styled.header`
  background: url(${(props) => props.theme.bgImage}) no-repeat center;
  background-size: cover;
  height: 30rem;
  transition: all 0.5s ease;

  @media only screen and (max-width: 34.375em) {
    background: url(${(props) => props.theme.bgImageMobile}) no-repeat center;
    background-size: cover;
    height: 20rem;
  }
`;
