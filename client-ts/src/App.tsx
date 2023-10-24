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
import LoadingSpinner from "./components/LoadingSpinner";
import LoadingSpinnerForBlock from "./components/LoadingSpinnerForBlock";
import Spinner from "./components/Spinner";
import HorizontalSeparator from "./components/HorizontalSeparator";
import { IComponent, IResourcesFromInput, IResourcePrices, IItem, ICommonVehicleComponent, IEpicVehicleComponent, IRareVehicleComponent, ISpecialVehicleComponent, } from "./interfaces/Interfaces";
import { instancesToArr } from "./helpers/helpers";


function App() {


  const [itemsList, setItemsList] = useState<IItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<number>(0)
  const [classInstances, setClassInstances] = useState<IComponent[]>([])
  const [resourcePrices, setResourcePrices] = useState<IResourcePrices[]>([])
  const [btnSwitchBuyFabricate, setBtnSwitchBuyFabricate] = useState<boolean>(false)
  const [costPrice, setCostPrice] = useState<number>(0)
  const [allIngredientsPrice, setAllIngredientsPrice] = useState<number | undefined>(0)
  const [resoursesFromInput, setResoursesFromInput] = useState<IResourcesFromInput>({
    scrapMetal: 0,
    copper: 0,
    wires: 0,
    plastic: 0,
    engravedCasings: 0,
    batteries: 0,
    electronics: 0,
  });



  // const [selectedInstance, setSelectedInstance] = useState()
  let selectedInstance: IComponent | undefined
  let itemsArr: JSX.Element[] = []
  // console.log(typeof(WeaponsCommon));
  useEffect(() => {
    const entityArr = instancesToArr()
    setClassInstances(entityArr)

  }, [])


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

  function handleClick(id: number): void {
    setSelectedItem(id)
    setBtnSwitchBuyFabricate(false);
  }

  function componentCostDto(ingridientsArr: ICommonVehicleComponent[] | IRareVehicleComponent[] | ISpecialVehicleComponent[] | IEpicVehicleComponent[]) {

    const componentObjArr: [] = []

    ingridientsArr.forEach((item: ICommonVehicleComponent | IRareVehicleComponent | ISpecialVehicleComponent | IEpicVehicleComponent) => {
      const obj = {
        id: 0,
        img: '',
        count: 0
      }
      if (ingridientsArr) {
        if (!componentObjArr.length) {
          obj.id = item.id,
            obj.img = item.img
          componentObjArr.push(obj)
        } else {
          obj.id = item.id,
            obj.img = item.img
         const newArr = componentObjArr.map((item) => {
            if (obj.id === item.id) {
              item.count ++
              return item
           }else{
              return item
            }
          })
        }
      }
    })
    

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
                  <ProductionCost
                    component={selectedInstance}
                    resourcePrices={resourcePrices}
                    btnSwitchBuyFabricate={btnSwitchBuyFabricate}
                    resoursesFromInput={resoursesFromInput}
                    setCostPrice={setCostPrice}
                  // costPrice={costPrice}
                  />
                  {selectedInstance.sellPrice ?
                    <ComponentsCost
                      component={selectedInstance}
                      classInstances={classInstances}
                      btnSwitchBuyFabricate={btnSwitchBuyFabricate}
                      setBtnSwitchBuyFabricate={setBtnSwitchBuyFabricate}
                      setAllIngredientsPrice={setAllIngredientsPrice}
                      test={test()}
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
              <LoadingSpinnerForBlock />
            }
          </Main>
        </Container>
      </div>
    );
  }

  export default App;
