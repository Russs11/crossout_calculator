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
import { IComponent, IResourcesFromInput, IResourcePrices, IItem, IProductionCostPropDto, ICommonVehicleComponent, IEpicVehicleComponent, IRareVehicleComponent, ISpecialVehicleComponent, IComponentCostPropDto, IComponentIngridientObject, IProfitPropDto, IIngridientsFromInput } from "./interfaces/Interfaces";
import { instancesToArr, componentCostDto, productionCostDto, profitDto } from "./helpers/helpers";


function App() {
  

  const [itemsList, setItemsList] = useState<IItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<number>(0)
  const [classInstances, setClassInstances] = useState<IComponent[]>([])
  const [resourcePrices, setResourcePrices] = useState<IResourcePrices[]>([])
  const [btnSwitchBuyFabricate, setBtnSwitchBuyFabricate] = useState<boolean>(false)
  const [costPrice, setCostPrice] = useState<number>(0)
  // const [allIngredientsPrice, setAllIngredientsPrice] = useState<number>(0)
  const [ingredientsFromInput, setIngredientsFromInput] = useState<IIngridientsFromInput[]>([])
  const [resoursesFromInput, setResoursesFromInput] = useState<IResourcesFromInput>({
    scrapMetal: 0,
    copper: 0,
    wires: 0,
    plastic: 0,
    engravedCasings: 0,
    batteries: 0,
    electronics: 0,
  });

  let selectedInstance: IComponent | undefined
  let itemsArr: JSX.Element[] = []
  let componentCostPropDto: IComponentCostPropDto = {
    ingridients: [],
    totalIngridientsCost: 0,
  }

  let productionCostPropDto: IProductionCostPropDto = {
    
    benchCost: 0,
    scrapMetalRequires: 0,
    copperRequires: 0,
    wiresRequires: 0,
    plasticRequires: 0,
    batteriesRequires: 0,
    electronicsRequires: 0,
    engravedCasingsRequires: 0,

    allScrapMetalRequires: 0,
    allWiresRequires: 0,
    allCopperRequires: 0,
    allPlasticRequires: 0,
    allBatterriesRequires: 0,
    allElectronicsRequires: 0,
    allEngravedCasingsRequires: 0,

    scrapMetalSellPrice: 0,
    copperSellPrice: 0,
    wiresSellPrice: 0,
    plasticSellPrice: 0,
    batteriesSellPrice: 0,
    electronicsSellPrice: 0,
    engravedCasingsSellPrice: 0,

    allScrapMetalCost: 0,
    allCopperCost: 0,
    allWiresCost: 0,
    allPlasticCost: 0,
    allEngravedCasingsCost: 0,
    allBatteriesCost: 0,
    allElectronicsCost: 0,

    scrapMetalCost: 0,
    copperCost: 0,
    wiresCost: 0,
    plasticCost: 0,
    engravedCasingsCost: 0,
    batteriesCost: 0,
    electronicsCost: 0,

    totalAllResoursesСost: 0,
    totalResoursesCost: 0,
  }

  let profitPropDto: IProfitPropDto = {
    componentBuyPrice: 0,
    commission: 0,
    selfPrice: 0,
    profit: 0,
  }
  console.log('ingredientsFromInput', ingredientsFromInput);

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


  if (itemsList.length) {
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
    componentCostPropDto = componentCostDto(selectedInstance ? selectedInstance.ingredients : undefined, ingredientsFromInput);
    if (selectedInstance) {
      productionCostPropDto = productionCostDto(selectedInstance, resourcePrices, resoursesFromInput);
      let ingredientCostForProfit: number = 0
      if (btnSwitchBuyFabricate) {
        ingredientCostForProfit = componentCostPropDto.totalIngridientsCost
      }

      profitPropDto = profitDto(selectedInstance, costPrice, ingredientCostForProfit);
  
    }

  }


  function handleClick(id: number): void {
    setSelectedItem(id);
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
                  setCostPrice={setCostPrice}
                  productionCostPropDto={productionCostPropDto}
                // costPrice={costPrice}
                />
                <ComponentsCost
                  setBtnSwitchBuyFabricate={setBtnSwitchBuyFabricate}
                  btnSwitchBuyFabricate={btnSwitchBuyFabricate}
                  componentCostPropDto={componentCostPropDto}
                />
                <HorizontalSeparator />
                <Profit
                  profitPropDto={profitPropDto} />
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
