import styled, { keyframes } from "styled-components";

interface iStyledInputContainerProps {
  display: string,
}

const animationShowInput = keyframes`
  0% {
    transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
    transform-origin: 50% 0%;
    filter: blur(40px);
    opacity: 0;
  }
  100% {
    transform: translateY(0) scaleY(1) scaleX(1);
    transform-origin: 50% 50%;
    filter: blur(0);
    opacity: 1;
  }
`;


export const StyledInputContainer = styled.div<iStyledInputContainerProps>`
  width: 96%;
  display: ${({ display }) => (display ? display : "none")};
  align-items: center;
  gap: 0.625rem;
  padding: 0.625rem;

  background-color: aqua;
  height: 3.75rem;
  border-radius: var(--radius-1);
  background-color: #fff;
  border: 0.125rem solid var(--color-grey-300);
  transition: 0.3s ease;

  position: absolute;
  //top: 6px;
  left: 10px;
  z-index: 2;

  animation: ${animationShowInput} 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both; 

  input {
    outline: none;
    border: none;
    background-color: transparent;
    width: 100%;
    height: 60%;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.1875rem;

    &::placeholder {
      color: var(--color-grey-300);
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.1875rem;
    }
  }

  &:focus-within {
    border: 2px solid var(--color-brand-100);
  }

  @media (min-width: 700px) {
    position: static;
    display: flex;
    width: 22.8125rem;
    animation: none;
  }

  svg {
    animation: none;
  }
`;
