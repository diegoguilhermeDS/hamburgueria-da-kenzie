import styled from "styled-components";

export const ContainerHeader = styled.div`
  padding: 0 1rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media (min-width: 700px) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media (min-width: 1024px) {
    margin: 0 auto;
    max-width: 1200px;
  }
`;

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: var(--gap-1);
  padding: 0 1rem;
  padding-bottom: 3.75rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 0;
    margin: 0 auto;
    max-width: 1200px;
  }
`;
