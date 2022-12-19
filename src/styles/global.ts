import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-family: "Inter", sans-serif;
    }

    button {
        background: transparent;
        border: none;
        cursor: pointer;
    }

    a {
        color: unset;
    }

    :root {
        --color-brand-100: #27ae60;
        --color-brand-200: #93d7af;
        --color-brand-300: #eb5757;
        --color-grey-100: #333333;
        --color-grey-200: #828282;
        --color-grey-300: #e0e0e0;
        --color-grey-400: #f5f5f5;
        --color-grey-500: #BDBDBD;
        --color-grey-600: #F2F2F2;
        --color-opacity: #33333380;
        --color-feedback-alert: #e60000;
        --color-feedback-sucess: #168821;
        --color-feedback-warning: #ffcd07;
        --color-feedback-information: #155bcb;
        
        --font-size-1: 1.625rem;
        --font-size-2: 1.375rem;
        --font-size-3: 1.125rem;
        --font-size-4: 1rem;
        --font-size-5: .875rem;
        --font-size-6: .75rem;

        --gap-1: 1.25rem;
        --gap-2: .75rem;

        --radius-1: .5rem;
        --radius-2: .3125rem;
    }

    ::-webkit-scrollbar {
        width: .25rem;
        height: 8px;

        @media (min-width: 1024px) {
            width: .375rem;
        }
    }

    ::-webkit-scrollbar-track {
        background: var(--color-grey-400);
        margin: .5rem;
        border-radius: 1.6rem;
    }

    ::-webkit-scrollbar-thumb {
        background: var(--color-brand-200);
        border-radius: 1.6rem;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: var(--color-brand-100);
    }
`;
