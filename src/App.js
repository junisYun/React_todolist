import React from 'react'
import TabMenu from './components/TabMenu';
import Header from './components/Header'
import { createGlobalStyle } from 'styled-components';
import PostContainer from './components/PostContainer'
import InputSample from './components/InputSample';
const GlobalStyle = createGlobalStyle`
  body {
    background:#e9ecef;
  }
`;
function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <PostContainer />
    </>

  );

}

export default App;
