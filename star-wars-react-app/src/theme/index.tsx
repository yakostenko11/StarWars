import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    background-color: #ebecf0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 1.6rem;
    line-height: 1.5;
    margin: 0;
    padding: 0;
    text-align: center;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`

export const theme = {
  accentColor: "#0850FA",
  activeBoxShadow:
    "inset 3px 5px 8px rgba(0, 0, 0, 0.2), -3px -5px 8px rgba(255, 255, 255, 0.5)",
  boxShadow:
    "5px 10px 15px rgba(0, 0, 0, 0.2), -5px -10px 15px rgba(255, 255, 255, 0.5)",
  componentBackgroundColor: "#ecedf0",
  placeholderColor: "#98a2ba",
  primaryColor: "#788093",
  progressBarLineStartColor: "rgb(6, 81, 250)",
  progressBarLineEndColor: "rgb(0, 223, 226)",
  secondaryAccentColor: "#326cf5",
};