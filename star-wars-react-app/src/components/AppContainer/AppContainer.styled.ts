import styled from "styled-components";
import { device } from "../../utils/breakpoints";

const StyledAppContainer = styled.div`
  margin: 2em 4em;

  @media ${device.tablet} {
    margin: 2em 1em;
  }
`;

export { StyledAppContainer };
