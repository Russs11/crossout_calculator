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

import LoadingSpinner from "./components/LoadingSpinner";
import LoadingSpinnerForBlock from "./components/LoadingSpinnerForBlock";
import Spinner from "./components/Spinner";
import HorizontalSeparator from "./components/HorizontalSeparator";

import { instancesToArr } from "./helpers/helpers";

function App() {
  const [itemsList, setItemsList] = useState();
  const [selectedItem, setSelectedItem] = useState(null)
  const [classInstances, setClassInstances] = useState([])
  const [resourcePrices, setResourcePrices] = useState()
  const [btnSwitchBuyFabricate, setBtnSwitchBuyFabricate] = useState(false)
  const [costPrice, setCostPrice] = useState(0)
  const [allIngredientsPrice, setAllIngredientsPrice] = useState(0)
  const [resoursesFromInput, setResoursesFromInput] = useState({
    scrapMetal: 0,
    copper: 0,
    wires: 0,
    plastic: 0,
    engravedCasings: 0,
    batteries: 0,
    electronics: 0,
  })
  const [ingredientsFromInput, setIngredientsFromInput] = useState([])


  // const [selectedInstance, setSelectedInstance] = useState()
  let selectedInstance
  let itemsArr = []
  
  // console.log(typeof(WeaponsCommon));
  useEffect(() => {
    const entityArr = instancesToArr()
    setClassInstances(entityArr)
  }, [])


  useEffect(() => {
    fetch('http://45.12.73.147:3001/prices/start')
      .then((response) => response.json())
      .then(({ prices, list }) => {
        // console.log('prices', prices.resourcePrices);
        setItemsList(list)
        setSelectedItem(list[0].id)
        setResourcePrices(prices.resourcePrices)
        // console.log('prices', prices);
        for (const item of prices.cabinPrices) {
          for (const instance of classInstances) {
            if (item.id === instance.id) {
              instance.sellPrice = item.sellPrice
              instance.buyPrice = item.buyPrice
              break;
            }
          }
        }

        for (const item of prices.weaponPrices) {
          for (const instance of classInstances) {
            if (item.id === instance.id) {
              instance.sellPrice = item.sellPrice
              instance.buyPrice = item.buyPrice
              break;
            }
          }
        }
        for (const item of prices.hardwarePrices) {
          for (const instance of classInstances) {
            if (item.id === instance.id) {
              instance.sellPrice = item.sellPrice
              instance.buyPrice = item.buyPrice
              break;
            }
          }
        }
        for (const item of prices.movementPrices) {
          for (const instance of classInstances) {
            if (item.id === instance.id) {
              instance.sellPrice = item.sellPrice
              instance.buyPrice = item.buyPrice
              break;
            }
          }
        }
        // console.log(classInstances);

      });
    // const listArr = JSON.parse(dataId())

  }, [classInstances]);

  if (itemsList) {
    const instanceFromData = []
    for (const item of itemsList) {

      for (const instance of classInstances) {
        if (item.id === instance.id) { // Сравниваем id объекта с id экземпляра класса

          instanceFromData.push(instance)
          itemsArr = instanceFromData.map(inst => {
            if (selectedItem === inst.id) {
              return (
                <Item
                  key={inst.name}
                  id={inst.id}
                  active={true}
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
    setBtnSwitchBuyFabricate(false);
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
          {selectedInstance ?
            <MainCard>
              <ItemCard>
                <TitleCard component={selectedInstance} />
                <ProductionRequirements
                  component={selectedInstance}
                  resourcePrices={resourcePrices} />
                <RequiredComponents
                  component={selectedInstance}
                  resourcePrices={resourcePrices} />
              </ItemCard>
              <VerticalSeparator />
              <ProductionCostWrapper>
                <ProductionCost
                  component={selectedInstance}
                  resourcePrices={resourcePrices}
                  btnSwitchBuyFabricate={btnSwitchBuyFabricate}
                  resoursesFromInput={resoursesFromInput}
                  setCostPrice={setCostPrice}
                  costPrice={costPrice}
                  allIngredientsPrice={allIngredientsPrice}
                />
                {selectedInstance.sellPrice ?
                  <ComponentsCost
                    component={selectedInstance}
                    classInstances={classInstances}
                    btnSwitchBuyFabricate={btnSwitchBuyFabricate}
                    setBtnSwitchBuyFabricate={setBtnSwitchBuyFabricate}
                    setAllIngredientsPrice={setAllIngredientsPrice}
                    allIngredientsPrice={allIngredientsPrice}
                  /> :
                  <LoadingSpinnerForBlock />}
                <HorizontalSeparator />
                {selectedInstance.sellPrice ?
                  <Profit component={selectedInstance}
                    allIngredientsPrice={allIngredientsPrice}
                    costPrice={costPrice}
                    btnSwitchBuyFabricate={btnSwitchBuyFabricate} /> :
                  <LoadingSpinnerForBlock />}
              </ProductionCostWrapper>
              <VerticalSeparator />
              <ResoursesAvailableWrapper>
                <ResoursesAvailable
                  resoursesFromInput={resoursesFromInput}
                  setResoursesFromInput={setResoursesFromInput}
                  component={selectedInstance}
                  resourcePrices={resourcePrices}
                  setIngredientsFromInput={setIngredientsFromInput}
                  ingredientsFromInput={ingredientsFromInput}
                />
              </ResoursesAvailableWrapper>
            </MainCard> :
            <LoadingSpinnerForBlock />}
        </Main>
      </Container>
    </div>
  );
}

export default App;
