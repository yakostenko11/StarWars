import styled from "styled-components";
import { device } from "../../utils/breakpoints";

const StyledForm = styled.form`
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  margin: 0 auto;
  overflow: hidden;
  padding: 4rem 2rem;
  text-align: left;
  width: 550px;

  @media ${device.tablet} {
    width: 100%;
  }
`;

export { StyledForm };
