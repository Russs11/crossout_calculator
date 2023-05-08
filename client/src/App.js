import React from 'react';
import './App.css';
import Container from './containers/Container';
import Header from './containers/Header';
import Main from './containers/Main';
import Logo from './components/Logo';
import MainCard from './components/MainCard';
import ItemList from './components/ItemList';
import ItemCard from './components/ItemCard';
import ProductionRequirements from './components/ProductionRequirements';
import RequiredComponents from './components/RequiredComponents';
import HorizontalSeparator from './components/HorizontalSeparator';
import VerticalSeparator from './components/VerticalSeparator';



function App() {




  return (
    <div className="App">
      <Container>
        <Header><Logo /></Header>
        <Main>
          <ItemList />
          <MainCard>
            <ItemCard type='bigCard'/>
            <ProductionRequirements/>
            <RequiredComponents />
          </MainCard>
        </Main>
      </Container>



    </div>
  );
}

export default App;
