import styled from "styled-components";

export const StyledAside = styled.aside`
  display: flex;
  flex-direction: column;
  min-height: 14.0625rem;
  border-radius: var(--radius-2);
  overflow: hidden;

  @media (min-width: 1024px) {
    width: 22.8125rem;
    max-height: 33.125rem;
  }

  section:nth-child(1) {
    display: flex;
    align-items: center;
    height: 4.0625rem;
    background-color: var(--color-brand-100);
    padding: 0 1.25rem;
  }

  .containerListCart {
    display: flex;
    flex-direction: column;
    background-color: var(--color-grey-400);

    ul {
      padding: 1.25rem;
      display: flex;
      flex-direction: column;
      gap: var(--gap-1);
      overflow-y: auto;
      max-height: 20rem;
    }

    .line {
      height: 0.125rem;
      width: 88%;
      margin: 0 auto;
      background-color: var(--color-grey-300);
    }
  }
`;
