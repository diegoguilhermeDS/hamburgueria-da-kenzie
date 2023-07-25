import styled from "styled-components";

export const StyledFormLogin = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--gap-1);

  min-width: 100%;
  max-height: 28.75rem;
  padding: 1.125rem;

  background: #ffffff;
  border: 2px solid #f5f5f5;
  box-shadow: 0px 0px 30px -20px rgba(0, 0, 0, 0.25);
  border-radius: .3125rem;

  @media (min-width: 1024px) {
    min-height: 28.75rem;
  }

  .containerHeaderFormRegister {
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      font-weight: 500;
      font-size: var(--font-size-5);
      color: var(--color-grey-200);

      text-decoration-line: underline;
    }
  }

  button {
    min-height: 3.125rem;
  }

  .smallInfor {
    width: 12.875rem;
    margin: 0 auto;
    text-align: center;
  }
`;
