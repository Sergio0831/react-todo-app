import styled from "styled-components/macro";

export const StyledTodoContainer = styled.div`
  max-width: 54rem;
  width: 100%;
  position: absolute;
  top: 7rem;
  left: 50%;
  transform: translateX(-50%);

  @media only screen and (max-width: 34.375em) {
    max-width: 37.5rem;
    top: 3rem;
  }
`;

export const TodoHeader = styled.div`
  display: flex;
  margin-bottom: 3rem;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 34.375em) {
    margin-bottom: 1.5rem;
  }
`;

export const Title = styled.h1`
  margin: 0;
  font-weight: 700;
  font-size: 4rem;
  line-height: 4rem;
  letter-spacing: 1.5rem;
  color: #fff;
  text-transform: uppercase;

  @media only screen and (max-width: 34.375em) {
  }
`;

export const Switcher = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
`;

export const FooterText = styled.p`
  text-align: center;
  margin-top: 5rem;
  font-size: 1.4rem;
  line-height: 1;
  color: ${(props) => props.theme.footerColor};
  transition: all 0.5s ease;
`;
