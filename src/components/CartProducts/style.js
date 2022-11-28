import styled, { keyframes } from "styled-components";

const addToCart = keyframes`
  from {
      transform: translateX(-100px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
`;

export const StyledCartProduct = styled.li`
  display: flex;
  max-height: 5rem;
  border-radius: var(--radius-2);
  animation: ${addToCart} 1.3s ease;

  .containerProduct {
    display: flex;
  }

  .containerImageProduct {
    border-radius: var(--radius-2);
    height: 5rem;
    background-color: var(--color-grey-300);
    display: flex;
    justify-content: center;
  }

  .infoProduct {
    padding: 0.625rem;
    display: flex;
    flex-direction: column;
    gap: var(--gap-2);

    h3 {
      max-width: 15ch;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  .containerButtoRemove {
    display: flex;
    flex-direction: column;
    gap: var(--gap-2);
    width: 100%;
    padding: 0.625rem;
    text-align: end;

    button {
      text-align: end;
      font-weight: 500;
      font-size: var(--font-size-6);
      color: var(--color-grey-200);
    }
  }
`;
