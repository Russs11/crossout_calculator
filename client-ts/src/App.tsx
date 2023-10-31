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
import { IComponent, IResourcesFromInput, IResourcePrices, IItem, ICommonVehicleComponent, IEpicVehicleComponent, IRareVehicleComponent, ISpecialVehicleComponent, IComponentCostPropDto, IComponentIngridientObject } from "./interfaces/Interfaces";
import { instancesToArr, componentCostDto } from "./helpers/helpers";


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
  let componentCostPropDto: IComponentCostPropDto = {
    ingridients: [],
    totalIngridientsCost: 0
  }
  let productionCostPropDto

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

  interface IProductionCostPropDto {

    scrapMetalRequires: number | undefined;
    copperRequires: number | undefined;
    wiresRequires: number | undefined;
    plasticRequires: number | undefined;
    batteriesRequires: number | undefined;
    electronicsRequires: number | undefined;
    engravedCasingsRequires: number | undefined;

    allScrapMetalRequires: number | undefined;
    allWiresRequires: number | undefined;
    allCopperRequires: number | undefined;
    allPlasticRequires: number | undefined;
    allBatterriesRequires: number | undefined;
    allElectronicsRequires: number | undefined;
    allEngravedCasingsRequires: number | undefined;

    scrapMetalSellPrice: number;
    copperSellPrice: number;
    wiresSellPrice: number;
    plasticSellPrice: number;
    batteriesSellPrice: number;
    electronicsSellPrice: number;
    engravedCasingsSellPrice: number;

    allScrapMetalCost: number;
    allCopperCost: number;
    allWiresCost: number;
    allPlasticCost: number;
    allEngravedCasingsCost: number;
    allBatteriesCost: number;
    allElectronicsCost: number;

    scrapMetalCost: number;
    copperCost: number;
    wiresCost: number;
    plasticCost: number;
    engravedCasingsCost: number;
    batteriesCost: number;
    electronicsCost: number;

    totalAllResoursesСost: number;
    totalResoursesCost: number;
  }

  function productionCostDto(component: IComponent, resourcePrices: IResourcePrices[], resoursesFromInput: IResourcesFromInput): IProductionCostPropDto {

    // const productionCostPropDto = {
    //   resourcesArr: [],
    //   resourceObj: {}

    // }
    let benchCost = component.getAllBenchCost?.() ? component.getAllBenchCost?.() : 0

    let scrapMetalRequires = component.getScrapMetal?.()
    let copperRequires = component.getCopper?.()
    let wiresRequires = component.getWires?.()
    let plasticRequires = component.getPlastic?.()
    let batteriesRequires = component.getBatteries?.()
    let electronicsRequires = component?.getElectronics?.()
    let engravedCasingsRequires = component.getEngravedCasings?.()

    let allScrapMetalRequires = component.getAllScrapMetal?.()
    let allCopperRequires = component.getAllCopper?.()
    let allWiresRequires = component.getAllWires?.()
    let allPlasticRequires = component.getAllPlastic?.()
    let allBatterriesRequires = component.getAllBatteries?.()
    let allElectronicsRequires = component.getAllElectronics?.()
    let allEngravedCasingsRequires = component.getAllEngravedCasings?.()

    let scrapMetalSellPrice = resourcePrices[0].sellPrice
    let copperSellPrice = resourcePrices[1].sellPrice
    let wiresSellPrice = resourcePrices[2].sellPrice
    let plasticSellPrice = resourcePrices[3].sellPrice
    let batteriesSellPrice = resourcePrices[4].sellPrice
    let electronicsSellPrice = resourcePrices[5].sellPrice
    let engravedCasingsSellPrice = resourcePrices[6].sellPrice

    let allScrapMetalCost = allScrapMetalRequires ? Math.round((allScrapMetalRequires * scrapMetalSellPrice / 100) * 100) / 100 : 0
    let allCopperCost = allCopperRequires ? Math.round((allCopperRequires * copperSellPrice / 100) * 100) / 100 : 0
    let allWiresCost = allWiresRequires ? Math.round((allWiresRequires * wiresSellPrice / 100) * 100) / 100 : 0
    let allPlasticCost = allPlasticRequires ? Math.round((allPlasticRequires * plasticSellPrice / 100) * 100) / 100 : 0
    let allEngravedCasingsCost = allEngravedCasingsRequires ? Math.round((allEngravedCasingsRequires * engravedCasingsSellPrice / 100) * 100) / 100 : 0
    let allBatteriesCost = allBatterriesRequires ? Math.round((allBatterriesRequires * batteriesSellPrice / 100) * 100) / 100 : 0
    let allElectronicsCost = allElectronicsRequires ? Math.round((allElectronicsRequires * electronicsSellPrice) * 100) / 100 : 0

    let scrapMetalCost = scrapMetalRequires ? Math.round((scrapMetalRequires * scrapMetalSellPrice / 100) * 100) / 100 : 0
    let copperCost = copperRequires ? Math.round((copperRequires * copperSellPrice / 100) * 100) / 100 : 0
    let wiresCost = wiresRequires ? Math.round((wiresRequires * wiresSellPrice / 100) * 100) / 100 : 0
    let plasticCost = plasticRequires ? Math.round((plasticRequires * plasticSellPrice / 100) * 100) / 100 : 0
    let engravedCasingsCost = engravedCasingsRequires ? Math.round((engravedCasingsRequires * engravedCasingsSellPrice / 100) * 100) / 100 : 0
    let batteriesCost = batteriesRequires ? Math.round((batteriesRequires * batteriesSellPrice / 100) * 100) / 100 : 0
    let electronicsCost = electronicsRequires ? Math.round((electronicsRequires * electronicsSellPrice) * 100) / 100 : 0

    let totalAllResoursesСost = Math.round(allScrapMetalCost + allCopperCost + allWiresCost + allPlasticCost + allEngravedCasingsCost + allBatteriesCost + allElectronicsCost + benchCost)
    let totalResoursesCost = Math.round(scrapMetalCost + copperCost + wiresCost + plasticCost + engravedCasingsCost + batteriesCost + electronicsCost + benchCost)

    if (resoursesFromInput.scrapMetal > 0) {
      if (!allScrapMetalRequires || !scrapMetalRequires) {
        allScrapMetalRequires = 0
        scrapMetalRequires = 0
      }
      allScrapMetalRequires -= resoursesFromInput.scrapMetal
      scrapMetalRequires -= resoursesFromInput.scrapMetal
      if (allScrapMetalRequires < 0) {
        allScrapMetalRequires = 0
      }
      if (scrapMetalRequires < 0) {
        scrapMetalRequires = 0
      }
    }


    const productionCostPropDto: IProductionCostPropDto = {
      scrapMetalRequires,
      copperRequires,
      wiresRequires,
      plasticRequires,
      batteriesRequires,
      electronicsRequires,
      engravedCasingsRequires,

      allScrapMetalRequires,
      allWiresRequires,
      allCopperRequires,
      allPlasticRequires,
      allBatterriesRequires,
      allElectronicsRequires,
      allEngravedCasingsRequires,

      scrapMetalSellPrice,
      copperSellPrice,
      wiresSellPrice,
      plasticSellPrice,
      batteriesSellPrice,
      electronicsSellPrice,
      engravedCasingsSellPrice,

      allScrapMetalCost,
      allCopperCost,
      allWiresCost,
      allPlasticCost,
      allEngravedCasingsCost,
      allBatteriesCost,
      allElectronicsCost,

      scrapMetalCost,
      copperCost,
      wiresCost,
      plasticCost,
      engravedCasingsCost,
      batteriesCost,
      electronicsCost,

      totalAllResoursesСost,
      totalResoursesCost

    }
    console.log('log', productionCostPropDto);
    return productionCostPropDto


  }


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
    componentCostPropDto = componentCostDto(selectedInstance ? selectedInstance.ingredients : undefined)
    if (selectedInstance) {
      productionCostPropDto = productionCostDto(selectedInstance, resourcePrices, resoursesFromInput)
    }
  }


  function handleClick(id: number): void {
    setSelectedItem(id)
    setBtnSwitchBuyFabricate(false);
  }
  // let appTimeStart = Number(Date.now())


  // let appTimeStop = Number(Date.now())
  // // console.log(selectedInstance ? componentCostDto(selectedInstance.ingredients) : null);
  // console.log('appTime', appTimeStop - appTimeStart);

  // console.log('selectedInstance', selectedInstance);
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
                  productionCostPropDto={productionCostPropDto}
                // costPrice={costPrice}
                />
                <ComponentsCost
                  setBtnSwitchBuyFabricate={setBtnSwitchBuyFabricate}
                  btnSwitchBuyFabricate={btnSwitchBuyFabricate}
                  componentCostPropDto={componentCostPropDto}
                />
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
