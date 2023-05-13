import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Container from "./containers/Container";
import Header from "./containers/Header";
import Main from "./containers/Main";
import Logo from "./components/Logo";
import MainCard from "./containers/MainCard";
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
import ResoursesAvailableWrapper from "./containers/ResoursesAvailableWrapper";
import ResoursesAvailable from "./components/ResoursesAvailable";

function App() {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null)
  let itemsArr

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((items) => {
        setItems(items)
        console.log(items);
      });
  }, []);

  if (items) {
    itemsArr = items.map(item => {
      if (selectedItem === item.id) {
        return (
          <Item
            key={item.id}
            id={item.id}
            active={true}
            handleClick={handleClick}
          />)
      }
      return (
        <Item
          key={item.id}
          id={item.id}
          active={false}
          handleClick={handleClick}
        />)
    })
  }



  function handleClick(id) {
    setSelectedItem(id)
  }



  return (
    <div className="App">
      <Container>
        <Header>
          <Logo />
        </Header>
        <Main>
          <ItemList>
            {itemsArr}
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
            <VerticalSeparator />
            <ResoursesAvailableWrapper>
              <ResoursesAvailable />
            </ResoursesAvailableWrapper>
          </MainCard>
        </Main>
      </Container>
    </div>
  );
}

export default App;
