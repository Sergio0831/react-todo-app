import styled from "styled-components/macro";

export const StyledTodoAction = styled.div``;

export const TodoAction = styled.div`
  width: 100%;
  margin-top: 2.4rem;
  box-shadow: 0 3.5rem 5rem -1.5rem ${(props) => props.theme.boxShadow};
  border-radius: 5px;
  transition: all 0.5s ease;
`;
