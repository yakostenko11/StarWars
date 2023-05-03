import styled, { css } from "styled-components";
import { device } from "../../utils/breakpoints";

const StyledButton = styled.button`
  border: none;
  border-radius: 50px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  cursor: pointer;
  font-size: 1.6em;
  outline: none;
  padding: 0.6em 3em;
  transition: box-shadow 0.3s ease-in-out;

  ${props =>
    props.disabled
      ? css`
          background-color: rgba(0, 0, 0, 0.05);
          color: rgba(0, 0, 0, 0.15);
        `
      : css`
          background-color: ${({ theme }) => theme.componentBackgroundColor};
          color: ${({ theme }) => theme.primaryColor};
        `};

  &:active {
    box-shadow: ${({ theme }) => theme.activeBoxShadow};
  }

  @media ${device.mobileL} {
    font-size: 1.2em;
  }
`;

export { StyledButton };
