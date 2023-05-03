import React from "react";

import { StyledText } from "./Text.styled";

export default function Text({ children, ...otherProps }) {
  return <StyledText {...otherProps}>{children}</StyledText>;
}
