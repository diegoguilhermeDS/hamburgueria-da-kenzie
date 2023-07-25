import styled, { css } from "styled-components";

interface iStyledFieldsetProps {
  animationLabel?: boolean;
  errorValidate: boolean;
}

export const StyledFieldset = styled.fieldset<iStyledFieldsetProps>`
  border: none;
  position: relative;

  margin-bottom: .625rem;

  label {
    font-weight: 400;
    color: #999999;

    position: absolute;
    left: 1rem;
    padding: 0 .25rem;

    transition: 0.5s ease;
    font-size: var(--font-size-5);
    top: .9375rem;
    background-color: transparent;
  }

  input {
    width: 100%;
    height: 3.125rem;
    padding: 0 .9375rem;

    outline: none;
    &:not(:placeholder-shown):not(:focus) {
      ${({ errorValidate }) => {
        if (errorValidate === true) {
          return css`
            border: 2px solid var(--color-feedback-alert);
            background-color: #fff;
          `;
        } else {
          return css`
            border: 2px solid var(--color-grey-100);
            background-color: #fff;
          `;
        }
      }}
    }

    ${({ errorValidate }) => {
      if (errorValidate === true) {
        return css`
          border: 2px solid var(--color-feedback-alert);
          background-color: var(--color-grey-400);
        `;
      } else {
        return css`
          border: none;
          background-color: var(--color-grey-400);
        `;
      }
    }}

    border-radius: var(--radius-1);

    font-size: var(--font-size-4);
    font-weight: 400;

    &:focus {
      background-color: #fff;
      border: 2px solid var(--color-brand-100);
    }

    &:focus ~ label,
    &:not(:placeholder-shown):not(:focus) ~ label {
      top: -.5rem;

      font-size: var(--font-size-6);
      background-color: #fff;
    }
  }
`;
