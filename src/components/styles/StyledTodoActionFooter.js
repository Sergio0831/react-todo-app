import styled from "styled-components/macro";

export const TopFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.6rem 2.4rem;
  box-shadow: 0 3.5rem 5rem -1.5rem ${(props) => props.theme.boxShadow};

  background-color: ${(props) => props.theme.todoActionBg};
  transition: background-color 0.5s ease;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
`;

export const ItemsLeft = styled.p`
  font-size: 1.4rem;
  line-height: 1;
  letter-spacing: -0.2px;
  color: ${(props) => props.theme.footerColor};
  transition: color 0.5s ease;
`;

export const FilterList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.6rem 2.4rem;
  margin-top: 1.6rem;
  background-color: ${(props) => props.theme.todoActionBg};
  transition: background-color 0.5s ease;
  border-radius: 5px;
  box-shadow: 0 3.5rem 5rem -1.5rem ${(props) => props.theme.boxShadow};
`;

export const FilterItem = styled.li`
  &:not(:last-child) {
    margin-right: 3rem;
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
  transition: color 0.5s ease;

  &.active {
    color: #3a7cfd;
  }

  &:hover {
    color: ${(props) => props.theme.footerColorHover};
  }
`;

export const CompletedButton = styled(FilterButton)`
  font-weight: 400;
`;
