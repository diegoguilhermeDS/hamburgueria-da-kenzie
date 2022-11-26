import styled from "styled-components";

export const StyledInputContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;

  background-color: aqua;
  height: 60px;
  border-radius: var(--radius-1);
  background-color: #fff;
  border: 2px solid var(--color-grey-300);
  transition: 0.3s ease;

  input {
    outline: none;
    border: none;
    background-color: transparent;
    width: 100%;
    height: 60%;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    &::placeholder {
      color: var(--color-grey-300);
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
    }
  }

  &:focus-within {
    border: 2px solid var(--color-brand-100);
  }

  @media (min-width: 700px) {
    width: 365px;
  }
`;
