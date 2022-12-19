import styled from "styled-components";

export const StyledButtonCart = styled.button`
  position: relative;
  width: 1.875rem;
  height: 1.875rem;

  svg {
    transform: scale(1.8);
    color: #bdbdbd;
  }

  span {
    position: absolute;
    top: -.875rem;
    right: -.4375rem;
    width: 1.25rem;
    height: 1.625rem;
    padding: .25rem;

    background: var(--color-brand-100);
    border-radius: .4375rem;

    font-weight: 900;
    font-size: .875rem;
    color: #fff;
  }
`;
