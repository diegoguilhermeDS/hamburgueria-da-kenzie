import styled, { css, keyframes } from "styled-components";

const animationShowModal = keyframes`
  0% {
    transform: translateY(-500px);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    transform: translateY(0);
    animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    transform: translateY(-65px);
    animation-timing-function: ease-in;
  }
  72% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }
  81% {
    transform: translateY(-28px);
    animation-timing-function: ease-in;
  }
  90% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }
  95% {
    transform: translateY(-8px);
    animation-timing-function: ease-in;
  }
  100% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }
`;

const animationCloseModal = keyframes`
  0% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }
  5% {
    transform: translateY(-30px);
    animation-timing-function: ease-in;
  }
  15% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }
  25% {
    transform: translateY(-38px);
    animation-timing-function: ease-in;
  }
  38% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }
  52% {
    transform: translateY(-75px);
    animation-timing-function: ease-in;
  }
  70% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }
  85% {
    opacity: 1;
  }
  100% {
    transform: translateY(-800px);
    opacity: 0;
  }
`;

export const StyledContainerModalCart = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 4;

  width: 100%;
  height: 100vh;
  padding: .625rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--color-opacity);
`;

export const StyledModalCart = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 14.0625rem;
  border-radius: var(--radius-2);
  overflow: hidden;

  width: 21.875rem;

  ${({ statusModal }) => {
    if (statusModal === true) {
      return css`
        animation: ${animationShowModal} 1.1s both;
      `;
    }  else {
      return css`
        animation: ${animationCloseModal} 1.5s both;
      `
    }
  }}

  @media (min-width: 1024px) {
    width: 31.25rem;
    max-height: 33.125rem;
  }

  section:nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 4.0625rem;
    background-color: var(--color-brand-100);
    padding: 0 1rem;

    button {
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        transform: scale(1.5);
        fill: rgba(255, 255, 255, 0.5);
      }
    }
  }

  .containerListCart {
    display: flex;
    flex-direction: column;
    background-color: var(--color-grey-400);

    ul {
      padding: 1.25rem;
      display: flex;
      flex-direction: column;
      gap: var(--gap-1);
      overflow-y: auto;
      max-height: 20rem;
    }

    .line {
      height: 0.125rem;
      width: 88%;
      margin: 0 auto;
      background-color: var(--color-grey-300);
    }
  }
`;
