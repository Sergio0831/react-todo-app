import styled from "styled-components/macro";
import iconCheck from "../../images/icon-check.svg";
import { moveInRight, moveOutRight } from "./animation";

export const StyledTodoList = styled.ul`
  transition: all 0.5s ease;
`;

export const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  transition: all 0.5s ease;

  @media only screen and (max-width: 34.375em), only screen and (hover: none) {
    opacity: 1;
    visibility: visible;
  }
`;

export const Todo = styled.li`
  display: flex;
  padding: 1.6rem 2.4rem;
  align-items: center;
  justify-content: space-between;
  transition: all 0.5s ease;
  cursor: pointer;
  background: ${(props) => props.theme.todoActionBg};
  animation: ${moveInRight} 0.5s both;
  border-bottom: 1px solid ${(props) => props.theme.todoBorderBottom};

  &:first-child {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  &:hover ${DeleteButton} {
    opacity: 1;
    visibility: visible;
  }
`;

export const Label = styled.label`
  width: 100%;
  padding-left: 4.8rem;
  cursor: pointer;
`;

export const TodoText = styled.span`
  color: ${(props) =>
    props.isCompleted ? props.theme.completedTodoColor : props.theme.todoColor};
  cursor: pointer;
  user-select: none;
  line-height: 1.5;
  letter-spacing: -0.25px;
  transition: all 0.5s ease;
  position: relative;

  &::before {
    content: "";
    left: ${(props) => (props.isCompleted ? "0" : "")};
    position: absolute;
    width: ${(props) => (props.isCompleted ? "100%" : "0")};
    height: 1px;
    top: calc(50% - 1px);
    transition: inherit;
    background: ${(props) =>
      props.isCompleted
        ? props.theme.completedTodoColor
        : props.theme.todoColor};
  }
`;

export const CustomCheckbox = styled.span`
  position: absolute;
  width: 2.4rem;
  height: 2.4rem;
  margin-left: -4.8rem;
  border: 1px solid ${(props) => props.theme.todoBorderBottom};
  border-radius: 50%;
  background: transparent;
  cursor: pointer;
  transition: all 0.5s ease;

  &::before {
    content: "";
    position: absolute;
    top: -3%;
    left: -3%;
    width: 100%;
    height: 100%;
    background-image: url(${iconCheck}),
      linear-gradient(to bottom right, #57ddff, #c058f3);
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 50%;
    transition: all 0.5s ease;
    opacity: 0;
    border: 1px solid transparent;
    background-origin: border-box;
  }

  &::after {
    content: "";
    position: absolute;
    top: -3%;
    left: -3%;
    width: 100%;
    height: 100%;
    border: 1px solid transparent;
    border-radius: 50%;
    background: linear-gradient(135deg, rgb(87, 221, 255), rgb(192, 88, 243))
      border-box border-box;
    -webkit-mask: linear-gradient(
          rgb(255, 255, 255) 0px,
          rgb(255, 255, 255) 0px
        )
        padding-box padding-box,
      linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px);
    mask: linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px)
        padding-box padding-box,
      linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px);
    -webkit-mask-composite: destination-out;
    mask-composite: destination-out;
    opacity: 0;
    transition: all 0.5s ease;
  }
`;

export const Checkbox = styled.input`
  overflow: hidden;
  clip: rect(0 0 0 0);
  cursor: pointer;
  transition: all 0.5s ease;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  &:checked + ${CustomCheckbox} {
    ::before {
      opacity: 1;
    }
  }

  &:not(:checked):hover + ${CustomCheckbox} {
    ::after {
      opacity: 1;
    }
  }

  &:not(:checked):focus + ${CustomCheckbox} {
    ::after {
      opacity: 1;
    }
  }
`;
