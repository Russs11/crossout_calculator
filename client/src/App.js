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
import { data, dataForList, dataId } from './data'
import * as WeaponsCommon from "./entity/weapons/common";
import * as WeaponsRare from "./entity/weapons/rare"


function App() {
  const [itemsList, setItemsList] = useState();
  const [selectedItem, setSelectedItem] = useState(null)
  const [classInstances, setClassInstances] = useState(
    //   [
    //   new WeaponsCommon.P54MAccord(), new WeaponsCommon.Lupara(), new WeaponsCommon.Avenger57mm()
    // ]
  )
  let itemsArr = []
  // console.log(typeof(WeaponsCommon));
  useEffect(() => {
    let entityArr = []
    for (const item in WeaponsCommon) {
      entityArr.push(new WeaponsCommon[item]())
    }
    for (const item in WeaponsRare) {
      entityArr.push(new WeaponsRare[item]())
    }
    setClassInstances(entityArr)
  }, [])
  // console.log(classInstances);

  // const data1 = JSON.parse(data())
  // const resData = data1.map((item) => {
  //   const obj = {}
  //   obj.id = item.id
  //   obj.name = item.name
  //   obj.formatBuyPrice = item.formatBuyPrice
  //   obj.formatSellPrice = item.formatSellPrice
  //   return obj
  // });


  useEffect(() => {
    // fetch('https://dummyjson.com/products')
    //   .then((response) => response.json())
    //   .then(({products}) => {

    //     console.log(products);
    //     setItems(products)
    //     console.log(items);
    //   });
    const listArr = JSON.parse(dataId())
    setItemsList(listArr)
    setSelectedItem(listArr[0]) 

  }, []);
  

  if (itemsList) {
    for (let i = 0; i < itemsList.length; i++) {
      const item = itemsList[i];
      for (let j = 0; j < classInstances.length; j++) {
        const instance = classInstances[j];
        if (item === instance.id) { // Сравниваем id объекта с id экземпляра класса
          // console.log('отрисовка айтема');
          itemsArr = classInstances.map(inst => {
            if (selectedItem === inst.id) {
              return (
                <Item
                key={inst.name}
                id={inst.id}
                active={true}
                handleClick={handleClick}
                img={inst.img}
                />)
              }
              return (
                <Item
                key={inst.name}
                id={inst.id}
                active={false}
                handleClick={handleClick}
                img={inst.img}
                />)
          });
        }
      }
    }
    console.log(itemsList[0]);
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
            {itemsList &&
              <ItemCard>
                <TitleCard />
                <ProductionRequirements />
                <RequiredComponents />
              </ItemCard>
            }
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
