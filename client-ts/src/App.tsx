import React, { ReactElement } from "react";
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
import { CommonVehicleComponent } from "./entity/commonVehicleComponent";
import { RareVehicleComponent } from "./entity/rareVehicleComponent"
import { SpecialVehicleComponent } from "./entity/specialVehicleComponent"
import { EpicVehicleComponent } from "./entity/epicVehicleComponent"
import WeaponsCommonArray from "./entity/weapons/common";
import WeaponsRareArray from "./entity/weapons/rare"
import WeaponsSpecialArray from "./entity/weapons/special"
import WeaponsEpicArray from "./entity/weapons/epic"
import CabinsCommonArray from "./entity/cabins/common"
import CabinsRareArray from "./entity/cabins/rare"
import CabinsSpecialArray from "./entity/cabins/special"
import CabinsEpicArray from "./entity/cabins/epic"
import HardwareCommonArray from "./entity/hardware/common"
import HardwareRareArray from "./entity/hardware/rare"
import HardwareSpecialArray from "./entity/hardware/special"
import HardwareEpicArray from "./entity/hardware/epic"
import MovementCommonArray from "./entity/movement/common"
import MovementRareArray from "./entity/movement/rare"
import MovementSpecialArray from "./entity/movement/special"
import MovementEpicArray from "./entity/movement/epic"

import LoadingSpinner from "./components/LoadingSpinner";
import LoadingSpinnerForBlock from "./components/LoadingSpinnerForBlock";
import Spinner from "./components/Spinner";
import HorizontalSeparator from "./components/HorizontalSeparator";



function App() {

  interface IResourcesFromInput {
    scrapMetal: number;
    copper: number;
    wires: number;
    plastic: number;
    engravedCasings: number;
    batteries: number;
    electronics: number;
  }
  interface IComponent {
    id: number;
    name: string;
    type: string;
    rarity: string;
    buyPrice: number;
    sellPrice: number;
    scrapMetal: number;
    copper: number;
    img: string;
    productionTime?: number;
    benchCost?: number;
  }
  interface IItem {
    id: number,
    name: string,
    profitRatio: number
  }

  interface IResourcePrices {
    buyPrice: number,
    dbId: number,
    dbName: string,
    id: number,
    name: string,
    sellPrice: number
  }
  const [itemsList, setItemsList] = useState<IItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<number>(0)
  const [classInstances, setClassInstances] = useState<IComponent[]>([])
  const [resourcePrices, setResourcePrices] = useState<IResourcePrices[]>([])
  const [btnSwitchBuyFabricate, setBtnSwitchBuyFabricate] = useState<boolean>(false)
  const [costPrice, setCostPrice] = useState<number>(0)
  const [allIngredientsPrice, setAllIngredientsPrice] = useState<number>(0)
  const [resoursesFromInput, setResoursesFromInput] = useState<IResourcesFromInput>()



  // const [selectedInstance, setSelectedInstance] = useState()
  let selectedInstance: IComponent | undefined
  let itemsArr: JSX.Element[] = []
  // console.log(typeof(WeaponsCommon));
  useEffect(() => {
    let entityArr: IComponent[] = []

    for (const item of WeaponsCommonArray) {
      entityArr.push(item)
    }
    for (const item of WeaponsRareArray) {
      entityArr.push(item)
    }
    for (const item of WeaponsSpecialArray) {
      entityArr.push(item)
    }
    for (const item of WeaponsEpicArray) {
      entityArr.push(item)
    }

    for (const item of CabinsCommonArray) {
      entityArr.push(item)
    }
    for (const item of CabinsRareArray) {
      entityArr.push(item)
    }
    for (const item of CabinsSpecialArray) {
      entityArr.push(item)
    }
    for (const item of CabinsEpicArray) {
      entityArr.push(item)
    }

    for (const item of HardwareCommonArray) {
      entityArr.push(item)
    }
    for (const item of HardwareRareArray) {
      entityArr.push(item)
    }
    for (const item of HardwareSpecialArray) {
      entityArr.push(item)
    }
    for (const item of HardwareEpicArray) {
      entityArr.push(item)
    }

    for (const item of MovementCommonArray) {
      entityArr.push(item)
    }
    for (const item of MovementRareArray) {
      entityArr.push(item)
    }
    for (const item of MovementSpecialArray) {
      entityArr.push(item)
    }
    for (const item of MovementEpicArray) {
      entityArr.push(item)
    }
    console.log(entityArr);

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
    fetch('http://45.12.73.147:3001/prices/start')
      .then((response) => response.json())
      .then(({ prices, list }) => {

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
  // console.log(itemsList);
  // console.log(resourcePrices);
  // console.log('itemsList', itemsList);
  if (itemsList) {
    const instanceFromData: IComponent[] = []
    for (const item of itemsList) {

      for (const instance of classInstances) {
        if (item.id === instance.id) { // Сравниваем id объекта с id экземпляра класса
          // console.log('instance', item.id, instance.id);
          instanceFromData.push(instance)
          itemsArr = instanceFromData.map((inst: IComponent): ReactElement => {
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
    selectedInstance = classInstances.find((inst: IComponent): boolean => inst.id === selectedItem);
  }
  // console.log('scrapmetalInput', resoursesFromInput.scrapMetal);

  // function inputClickHandler(event) {

  //   setResoursesFromInput((prev) => {    
  //   return Object.assign({resoursesFromInput, ...prev, scrapMetal: +event.target.value })
  // });
  // }



  function handleClick(id: number): void {
    setSelectedItem(id)
    setBtnSwitchBuyFabricate(false);
  }

  // console.log(selectedInstance);

console.log('selectedInstance', selectedInstance);
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
                {/* <ProductionCost
                  component={selectedInstance}
                  resourcePrices={resourcePrices}
                  btnSwitchBuyFabricate={btnSwitchBuyFabricate}
                  resoursesFromInput={resoursesFromInput}
                  setCostPrice={setCostPrice}
                  costPrice={costPrice}
                /> */}
                {selectedInstance.sellPrice ?
                  <ComponentsCost
                    component={selectedInstance}
                    classInstances={classInstances}
                    btnSwitchBuyFabricate={btnSwitchBuyFabricate}
                    setBtnSwitchBuyFabricate={setBtnSwitchBuyFabricate}
                    setAllIngredientsPrice={setAllIngredientsPrice}

                  /> :
                  <LoadingSpinnerForBlock />}
                <HorizontalSeparator />
                <Profit component={selectedInstance}
                  allIngredientsPrice={allIngredientsPrice}
                  costPrice={costPrice} />
              </ProductionCostWrapper>
              <VerticalSeparator />
              <ResoursesAvailableWrapper>
                {/* <ResoursesAvailable
                  resoursesFromInput={resoursesFromInput}
                  setResoursesFromInput={setResoursesFromInput}
                  component={selectedInstance}
                  resourcePrices={resourcePrices}
                // inputClickHandler={inputClickHandler}
                /> */}
              </ResoursesAvailableWrapper>
            </MainCard> :
            <LoadingSpinnerForBlock />}
        </Main>
      </Container>
    </div>
  );
}

export default App;
