import styled from "styled-components";

export const StyledProductsList = styled.ul`
    display: flex;
    overflow-x: auto;
    gap: var(--gap-1);

    @media (min-width: 1024px) {
        display: grid;
        grid-template-columns: repeat(3, auto);
    }
`