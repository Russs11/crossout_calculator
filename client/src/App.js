import React from 'react';
import './App.css';
import Container from './containers/Container';
import Header from './containers/Header';
import Main from './containers/Main';
import Logo from './components/Logo';
import MainCard from './components/MainCard';
import ItemList from './components/ItemList';
import TitleCard from './components/TitleCard';
import ProductionRequirements from './components/ProductionRequirements';
import RequiredComponents from './components/RequiredComponents';
import ItemCard from './components/ItemCard';
import Item from './components/Item';
import VerticalSeparator from './components/VerticalSeparator';




function App() {




  return (
    <div className="App">
      <Container>
        <Header><Logo /></Header>
        <Main>
          <ItemList><Item/></ItemList>
          <MainCard>
            <ItemCard>
            <TitleCard type='bigCard' />
            <ProductionRequirements />
            <RequiredComponents />
            </ItemCard>
            <VerticalSeparator />
          </MainCard>
        </Main>
      </Container>



    </div>
  );
}

export default App;
