import styled from "styled-components";

export const StyledProduct = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 22.5rem;
  min-width: 18.75rem;
  background-color: var(--color-grey-400);
  border: 2px solid var(--color-grey-300);
  border-radius: var(--radius-2);
  animation: showProduct 1s ease ;

  &:hover {
    border: 2px solid var(--color-brand-100);
  }

  @media (min-width: 1024px) {
    min-width: 17.25rem;
    height: 18.75rem;
  }

  @media (min-width: 1200px) {
    min-width: 14.6875rem;
  }

  @keyframes showProduct {
    from {
      opacity: 0;
      transform: scale(0.5, 0.5);
    } 
    to {
      opacity: 1;
    }
  }

  img {
    width: 100%;
    height: 40%;
    object-fit: contain;
  }

  div {
    width: 100%;
    background-color: #fff;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: var(--gap-2);
    padding: 0 1.25rem;
  }

  div > button {
    width: 40%;

    @media (min-width: 1024px) {
      width: 50%;
    }
  }
`;
