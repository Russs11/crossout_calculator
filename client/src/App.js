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
import * as WeaponsSpecial from "./entity/weapons/special"
import * as WeaponsEpic from "./entity/weapons/epic"
import * as CabinsEpic from "./entity/cabins/epic"


function App() {
  const [itemsList, setItemsList] = useState();
  const [selectedItem, setSelectedItem] = useState(null)
  const [classInstances, setClassInstances] = useState(null)
  // const [selectedInstance, setSelectedInstance] = useState()
  let selectedInstance
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
    for (const item in WeaponsSpecial) {
      entityArr.push(new WeaponsSpecial[item]())
    }
    for (const item in WeaponsEpic) {
      entityArr.push(new WeaponsEpic[item]())
    }
    for (const item in CabinsEpic) {
      entityArr.push(new CabinsEpic[item]())
    }
    setClassInstances(entityArr)
  }, [])
  // console.log('classInstances', classInstances);

  // const data1 = JSON.parse(data())
  // const resData = data1.map((item) => {
  //   const obj = {}
  //   obj.id = item.id
  //   obj.name = item.name
  //   obj.formatBuyPrice = item.formatBuyPrice
  //   obj.formatSellPrice = item.formatSellPrice
  //   return obj
  // });
  // console.log(classInstances);

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
  console.log('itemsList' , itemsList);
  if (itemsList) {
    const instanceFromData = []
    for (const item of itemsList) {
      for (const instance of classInstances) {
        if (item === instance.id) { // Сравниваем id объекта с id экземпляра класса
          instanceFromData.push(instance)
          itemsArr = instanceFromData.map(inst => {
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
  }

    if (selectedItem) {
      selectedInstance = classInstances.find(inst => inst.id === selectedItem);
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
            {selectedInstance &&
              <ItemCard> 
                <TitleCard component={ selectedInstance} />
                <ProductionRequirements component={ selectedInstance} />
                <RequiredComponents component={selectedInstance} />
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
