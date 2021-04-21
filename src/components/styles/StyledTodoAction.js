import styled from "styled-components/macro";

export const StyledTodoAction = styled.div`
  width: 100%;
  margin-top: 2.4rem;
  background: ${(props) => props.theme.todoActionBg};
  box-shadow: 0px 35px 50px -15px ${(props) => props.theme.boxShadow};
  border-radius: 5px;
  transition: all 0.5s ease;
`;

export const TodoActionFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.6rem 2.4rem;
`;

export const ItemsLeft = styled.p`
  font-size: 1.4rem;
  line-height: 1;
  letter-spacing: -0.2px;
  color: ${(props) => props.theme.footerColor};
  transition: all 0.5s ease;
`;

export const FilterList = styled.ul`
  display: flex;
`;

export const FilterItem = styled.li`
  &:not(:last-child) {
    margin-right: 1.8rem;
  }
`;

export const FilterButton = styled.button`
  border: none;
  background-color: transparent;
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 1;
  letter-spacing: -0.2px;
  color: ${(props) => props.theme.footerColor};
  cursor: pointer;
  transition: all 0.5s ease;

  &.${(props) => props.active} {
    color: #3a7cfd;
  }

  &:hover {
    color: ${(props) => props.theme.footerColorHover};
  }
`;

export const CompletedButton = styled(FilterButton)`
  font-weight: 400;
`;
