import styled, { css } from "styled-components";
import BaseText from "./BaseText";

interface iStyledTextProps {
  fontWeight?: number;
  fontSize?: "1" | "2" | "3" | "4" | "5" | "6";
  colorText?: "grey-50" | "brand" | "white";
}

export const StyledText = styled(BaseText)<iStyledTextProps>`
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 400)};

  ${({ fontSize }) => {
    switch (fontSize) {
      case "1":
        return css`
          font-size: var(--font-size-1);
        `;
      case "2":
        return css`
          font-size: var(--font-size-2);
        `;
      case "3":
        return css`
          font-size: var(--font-size-3);
        `;
      case "4":
        return css`
          font-size: var(--font-size-4);
        `;
      case "5":
        return css`
          font-size: var(--font-size-5);
        `;
      case "6":
        return css`
          font-size: var(--font-size-6);
        `;
      default:
        return css`
          font-size: var(--font-size-4);
        `;
    }
  }};

  ${({ colorText }) => {
    if (colorText === "grey-50") {
      return css`
        color: var(--color-grey-200);
      `;
    } else if (colorText === "brand") {
      return css`
        color: var(--color-brand-100);
      `;
    } else if (colorText === "white") {
      return css`
        color: #fff;
      `;
    } else {
      return css`
        color: var(--color-grey-100);
      `;
    }
  }}
`;
