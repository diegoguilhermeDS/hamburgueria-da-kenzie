import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  border-radius: var(--radius-1);
  font-weight: 500;
  font-size: 14px;
  transition: 0.3s ease;

  ${({ type }) => {
    if (type === "medium") {
      return css`
        padding: 10px 20px;
      `;
    } else {
      return css`
        height: 40px;
        padding: 0 20px;
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
