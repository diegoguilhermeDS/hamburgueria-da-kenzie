import styled, { css, keyframes } from "styled-components";

interface iStyledButton {
  typeBtn?: string;
  typeColor?: string;
}

const SpinnerAnimation = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const StyledButton = styled.button<iStyledButton>`
  border-radius: var(--radius-1);
  font-weight: 500;
  font-size: 0.875rem;
  transition: 0.3s ease;

  display: flex;
  align-items: center;
  justify-content: center;

  ${({ typeBtn }) => {
    if (typeBtn === "medium") {
      return css`
        padding: 0.625rem 1.25rem;
      `;
    } else if (typeBtn === "grey") {
      return css`
        height: 50px;
      `;
    } else {
      return css`
        height: 40px;
        padding: 0 1.25rem;
      `;
    }
  }}

  ${({ typeColor }) => {
    if (typeColor === "default") {
      return css`
        color: var(--color-grey-200);
        background-color: var(--color-grey-300);

        &:hover {
          background-color: var(--color-grey-200);
          color: var(--color-grey-300);
        }
      `;
    } else {
      return css`
        color: #fff;
        background-color: var(--color-brand-100);

        &:hover {
          background-color: var(--color-brand-200);
        }
      `;
    }
  }}

  &:disabled {
    cursor: no-drop;
    filter: grayscale(0.5);

    &:hover {
      background-color: var(--color-brand-100);
    }
  }

  svg {
    animation: ${SpinnerAnimation} 1.6s linear infinite both;
  }
`;
