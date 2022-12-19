import styled from "styled-components";

export const StyledProductsList = styled.ul`
  display: flex;
  overflow-x: auto;
  gap: var(--gap-1);
  padding-bottom: 10px;

  @media (min-width: 1024px) {
    width: 100%;
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(3, auto);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, auto);
  }
`;
