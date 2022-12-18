import styled from "styled-components";

export const StyledFormLogin = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--gap-1);

  min-width: 100%;
  max-height: 28.75rem;
  padding: 18px;

  background: #ffffff;
  border: 2px solid #f5f5f5;
  box-shadow: 0px 0px 30px -20px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  @media (min-width: 1024px) {
    min-height: 460px;
  }

  button {
    min-height: 50px;
  }

  .smallInfor {
    width: 206px;
    margin: 0 auto;
    text-align: center;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    
    min-height: 50px;
    padding: 0.625rem 1.25rem;

    font-weight: 500;
    font-size: 0.875rem;
    color: var(--color-grey-200);
    
    background-color: var(--color-grey-300);
    border-radius: var(--radius-1);
    
    transition: 0.3s ease;
    &:hover {
      background-color: var(--color-grey-200);
      color: var(--color-grey-300);
    }
  }
`;
