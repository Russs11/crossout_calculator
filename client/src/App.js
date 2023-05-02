import React from 'react';
import './App.css';
import Container from './containers/Container';
import Header from './containers/Header';
import Main from './containers/Main';
import Logo from './components/Logo';
import Card from './components/Card';
import ComponentsList from './components/ComponentList';



function App() {




  return (
    <div className="App">
      <Container>
        <Header><Logo/></Header>
        <Main>
          <ComponentsList />
          <Card>
            
          </Card>
        </Main>
      </Container>



    </div>
  );
}

export default App;
