import styled from "styled-components";

export const StyledProduct = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 360px;
    min-width: 300px;
    background-color: var(--color-grey-400);
    border: 2px solid var(--color-grey-300);
    border-radius: var(--radius-2);

    &:hover {
        border: 2px solid var(--color-brand-100);
    }

    @media (min-width: 1024px) {
        min-width: 250px;
        height: 300px;
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
        padding: 0 20px;
    }

    div > button {
        width: 40%;

        @media (min-width: 1024px) {
            width: 50%;
        }
    }
`