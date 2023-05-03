import React from 'react';
import { ThemeProvider } from "styled-components";

import CharactersListContainer from './containers/CharactersListContainer';
import { StyledAppContainer } from './components/AppContainer/AppContainer.styled';

import { GlobalStyle, theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={ theme }>
      <GlobalStyle />
      <StyledAppContainer>
        <h1>Star Wars</h1>
        <CharactersListContainer />
      </StyledAppContainer>
    </ThemeProvider>
  );
}

export default App;
