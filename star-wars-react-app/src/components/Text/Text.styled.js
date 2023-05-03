import styled from "styled-components";

const StyledText = styled.p`
  color: ${({ theme }) => theme.primaryColor};
  display: inline-block;
  font-size: 2.6rem;
  margin: 0;
`;

export { StyledText };
