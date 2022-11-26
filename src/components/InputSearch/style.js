import styled from "styled-components";

export const StyledInputContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.625rem;
  padding: 0.625rem;

  background-color: aqua;
  height: 3.75rem;
  border-radius: var(--radius-1);
  background-color: #fff;
  border: 0.125rem solid var(--color-grey-300);
  transition: 0.3s ease;

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
    width: 22.8125rem;
  }
`;
