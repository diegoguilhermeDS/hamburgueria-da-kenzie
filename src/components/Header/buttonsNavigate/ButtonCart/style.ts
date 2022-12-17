import styled from "styled-components";

export const StyledButtonCart = styled.button`
  position: relative;
  width: 30px;
  height: 30px;

  svg {
    transform: scale(1.8);
    color: #bdbdbd;
  }

  span {
    position: absolute;
    top: -14px;
    right: -7px;
    width: 20px;
    height: 26px;
    padding: 4px;

    background: var(--color-brand-100);
    border-radius: 7px;

    font-weight: 900;
    font-size: 14px;
    color: #fff;
  }
`;
