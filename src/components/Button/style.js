import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  border-radius: var(--radius-1);
  font-weight: 500;
  font-size: .875rem;
  transition: 0.3s ease;

  display: flex;
  align-items: center;
  justify-content: center;

  ${({ type }) => {
    if (type === "medium") {
      return css`
        padding: .625rem 1.25rem;
      `;
    } else if (type === "grey") {
      return css`
        height: 50px;
      `
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
`;
