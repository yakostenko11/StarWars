import styled from "styled-components";
import { device } from "../../utils/breakpoints";

const FormTitle = styled.h1`
  color: ${({ theme }) => theme.secondaryAccentColor};
  margin: 0 0 2rem;

  @media ${device.mobileL} {
    font-size: 1.6em;
  }
`;

export { FormTitle };
