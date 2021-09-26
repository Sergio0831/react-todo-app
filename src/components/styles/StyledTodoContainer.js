import styled from "styled-components/macro";

export const TodoContainer = styled.div`
  max-width: 90vw;
  top: 6rem;
  width: 100%;
  position: absolute;
  left: 50%;
  transform: translateX(-52%);

  @media only screen and (min-width: 34.375em) {
    max-width: 54rem;
    transform: translateX(-50%);
    top: 7rem;
  }
`;

export const TodoHeader = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  justify-content: space-between;
  align-items: center;

  @media only screen and (min-width: 34.375em) {
    margin-bottom: 5rem;
  }
`;

export const Title = styled.h1`
  margin: 0;
  font-weight: 700;
  font-size: 3rem;
  line-height: 3rem;
  letter-spacing: 1.5rem;
  color: #fff;
  text-transform: uppercase;

  @media only screen and (min-width: 34.375em) {
    font-size: 4rem;
    line-height: 4rem;
  }
`;

export const Switcher = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
`;
