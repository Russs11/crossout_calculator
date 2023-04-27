import React from 'react';

import './App.css';
import Container from './containers/Container';
import Header from './containers/Header';
import Main from './containers/Main';
function App() {




  return (
    <div className="App">
      <Container>
        <Header>Crossout Calculator</Header>
        <Main></Main>
      </Container>



    </div>
  );
}

export default App;
