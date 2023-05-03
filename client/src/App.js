import React from 'react';
import './App.css';
import Container from './containers/Container';
import Header from './containers/Header';
import Main from './containers/Main';
import Logo from './components/Logo';
import MainCard from './components/MainCard';
import ComponentsList from './components/ItemList';
import ItemCard from './components/ItemCard';
import ProductionRequirements from './components/ProductionRequirements';
import RequiredComponents from './components/RequiredComponents';
import HorizontalSeparator from './components/HorizontalSeparator';



function App() {




  return (
    <div className="App">
      <Container>
        <Header><Logo /></Header>
        <Main>
          <ComponentsList />
          <MainCard>
            <ItemCard/>
            <ProductionRequirements/>
            {/* <HorizontalSeparator /> */}
            <RequiredComponents/>
            {/* <HorizontalSeparator /> */}

          </MainCard>
        </Main>
      </Container>



    </div>
  );
}

export default App;
