import styled from "styled-components";

export const StyledButtonSearch = styled.button`
  position: relative;
  width: 30px;
  height: 30px;

  svg {
    transform: scale(1.8);
    color: #bdbdbd;
  }

  @media (min-width: 700px) {
    display: none;
  }
`;
