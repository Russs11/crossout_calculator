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
import { CommonVehicleComponent } from "./entity/commonVehicleComponent";
import { RareVehicleComponent } from "./entity/rareVehicleComponent"
import { SpecialVehicleComponent } from "./entity/specialVehicleComponent"
import { EpicVehicleComponent } from "./entity/epicVehicleComponent"
import WeaponsCommonArray from "./entity/weapons/common";
import * as WeaponsRare from "./entity/weapons/rare"
import * as WeaponsSpecial from "./entity/weapons/special"
import * as WeaponsEpic from "./entity/weapons/epic"
import * as CabinsCommon from "./entity/cabins/common"
import * as CabinsRare from "./entity/cabins/rare"
import * as CabinsSpecial from "./entity/cabins/special"
import * as CabinsEpic from "./entity/cabins/epic"
import * as HardwareCommon from "./entity/hardware/common"
import * as HardwareRare from "./entity/hardware/rare"
import * as HardwareSpecial from "./entity/hardware/special"
import * as HardwareEpic from "./entity/hardware/epic"
import * as MovementCommon from "./entity/movement/common"
import * as MovementRare from "./entity/movement/rare"
import * as MovementSpecial from "./entity/movement/special"
import * as MovementEpic from "./entity/movement/epic"

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


    // let wCommon: keyof typeof WeaponsCommon;
    // let wRare: keyof typeof WeaponsRare;
    // let wSpecial: keyof typeof WeaponsSpecial;
    // let wEpic: keyof typeof WeaponsEpic;

    // let mCommon: keyof typeof MovementCommon;
    // let mRare: keyof typeof MovementRare;
    // let mSpecial: keyof typeof MovementSpecial;
    // let mEpic: keyof typeof MovementEpic;

    // let cCommon: keyof typeof CabinsCommon;
    // let cRare: keyof typeof CabinsRare;
    // let cSpecial: keyof typeof CabinsSpecial;
    // let cEpic: keyof typeof CabinsEpic;

    for (const item of WeaponsCommonArray) {
      entityArr.push(item)
    }
    let [P54MAccord, Lupara, Avenger57mm] = WeaponsCommonArray;

    console.log(entityArr);
    // for (wCommon in WeaponsCommon) {
    //   const newItem = new WeaponsCommon[wCommon]()
    //   entityArr.push(newItem)
    // }
    // for (wRare in WeaponsRare) {
    //   const newItem = new WeaponsRare[wRare]()
    //   entityArr.push(newItem)
    // }

    // for (wSpecial in WeaponsSpecial) {
    //   const newItem = new WeaponsSpecial[wSpecial]()
    //   entityArr.push(newItem)
    // }
    // for (wEpic in WeaponsEpic) {
    //   const newItem = new WeaponsEpic[wEpic]()
    //   entityArr.push(newItem)
    // }

    // for (mCommon in MovementCommon) {
    //   const newItem = new MovementCommon[mCommon]()
    //   entityArr.push(newItem)
    // }
    // for (mRare in MovementRare) {
    //   const newItem = new MovementRare[mRare]()
    //   entityArr.push(newItem)
    // }
    // for (mSpecial in MovementSpecial) {
    //   const newItem = new MovementSpecial[mSpecial]()
    //   entityArr.push(newItem)
    // }
    // for (mEpic in MovementEpic) {
    //   const newItem = new MovementEpic[mEpic]()
    //   entityArr.push(newItem)
    // }

    // for (cCommon in CabinsCommon) {
    //   const newItem = new CabinsCommon[cCommon]()
    //   entityArr.push(newItem)
    // }
    // for (const item in CabinsRare) {
    //   entityArr.push(new CabinsRare[item]())
    // }
    // for (const item in CabinsSpecial) {
    //   entityArr.push(new CabinsSpecial[item]())
    // }
    // for (const item in CabinsEpic) {
    //   entityArr.push(new CabinsEpic[item]())
    // }
    // for (const item in HardwareCommon) {
    //   entityArr.push(new HardwareCommon[item]())
    // }
    // for (const item in HardwareRare) {
    //   entityArr.push(new HardwareRare[item]())
    // }
    // for (const item in HardwareSpecial) {
    //   entityArr.push(new HardwareSpecial[item]())
    // }
    // for (const item in HardwareEpic) {
    //   entityArr.push(new HardwareEpic[item]())
    // }
    // for (const item in MovementCommon) {
    //   entityArr.push(new MovementCommon[item]())
    // }
    // for (const item in MovementRare) {
    //   entityArr.push(new MovementRare[item]())
    // }
    // for (const item in MovementSpecial) {
    //   entityArr.push(new MovementSpecial[item]())
    // }
    // for (const item in MovementEpic) {
    //   entityArr.push(new MovementEpic[item]())
    // }
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
    const instanceFromData = []
    for (const item of itemsList) {

      for (const instance of classInstances) {
        if (item.id === instance.id) { // Сравниваем id объекта с id экземпляра класса
          // console.log('instance', item.id, instance.id);
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
                />
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
                <ResoursesAvailable
                  resoursesFromInput={resoursesFromInput}
                  setResoursesFromInput={setResoursesFromInput}
                  component={selectedInstance}
                  resourcePrices={resourcePrices}
                // inputClickHandler={inputClickHandler}
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
