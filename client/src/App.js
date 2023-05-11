import React from "react";
import "./App.css";
import Container from "./containers/Container";
import Header from "./containers/Header";
import Main from "./containers/Main";
import Logo from "./components/Logo";
import MainCard from "./components/MainCard";
import ItemList from "./components/ItemList";
import TitleCard from "./components/TitleCard";
import ProductionRequirements from "./components/ProductionRequirements";
import RequiredComponents from "./components/RequiredComponents";
import ItemCard from "./containers/ItemCard";
import Item from "./components/Item";
import VerticalSeparator from "./components/VerticalSeparator";
import ProductionCostWrapper from "./containers/ProductionCostWrapper";
import ProductionCost from "./components/ProductionCost";
import ComponentsCost from "./components/ComponentsCost";
import Profit from "./components/Profit";

function App() {








  
  return (
    <div className="App">
      <Container>
        <Header>
          <Logo />
        </Header>
        <Main>
          <ItemList>
            <Item />
          </ItemList>
          <MainCard>
            <ItemCard>
              <TitleCard />
              <ProductionRequirements />
              <RequiredComponents />
            </ItemCard>
            <VerticalSeparator />
            <ProductionCostWrapper>
              <ProductionCost />
              <ComponentsCost />
              <Profit />
            </ProductionCostWrapper>
          </MainCard>
        </Main>
      </Container>
    </div>
  );
}

export default App;
