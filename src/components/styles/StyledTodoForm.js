import styled from "styled-components/macro";

export const StyledTodoForm = styled.form`
  display: flex;
  align-items: center;
`;

export const SubmitButton = styled.button`
  position: absolute;
  left: 2.4rem;
  height: 2.4rem;
  width: 2.4rem;
  background: transparent;
  border: 1px solid ${(props) => props.theme.inputButtonColor};
  border-radius: 50%;
  cursor: pointer;
  z-index: 10;
  transition: all 0.5s ease;
`;

export const Label = styled.label``;

export const Input = styled.input`
  position: relative;
  width: 100%;
  padding: 2rem 7.2rem;
  border: none;
  font-size: 1.8rem;
  line-height: 1.8rem;
  font-family: inherit;
  font-weight: inherit;
  letter-spacing: -0.25px;
  color: ${(props) => props.theme.inputTypingColor};
  outline: none;
  caret-color: #3a7cfd;
  background: ${(props) => props.theme.todoBgColor};
  box-sizing: border-box;
  box-shadow: 0 3.5rem 5rem -1.5rem rgba(194, 195, 214, 0.5);
  border-radius: 5px;
  transition: all 0.5s ease;

  &::placeholder {
    letter-spacing: -0.016rem;
    color: ${(props) => props.theme.inputColor};
  }
`;
