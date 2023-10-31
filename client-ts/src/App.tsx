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
  interface IProductionCostPropDto {
    benchCost: number;
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



  function productionCostDto(component: IComponent, resourcePrices: IResourcePrices[], resoursesFromInput: IResourcesFromInput): IProductionCostPropDto {

    // const productionCostPropDto = {
    //   resourcesArr: [],
    //   resourceObj: {}

    // }
    let benchCost = component.getAllBenchCost?.() ? component.getAllBenchCost?.() : 0

    // let scrapMetalRequires = component.getScrapMetal?.()
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


    let allScrapMetalCost = 0
    let allCopperCost = 0
    let allWiresCost = 0
    let allPlasticCost = 0
    let allEngravedCasingsCost = 0
    let allBatteriesCost = 0
    let allElectronicsCost = 0

    let scrapMetalCost = 0
    let copperCost = 0
    let wiresCost = 0
    let plasticCost = 0
    let engravedCasingsCost = 0
    let batteriesCost = 0
    let electronicsCost = 0
    // let totalAllResoursesСost = Math.round(allScrapMetalCost + allCopperCost + allWiresCost + allPlasticCost + allEngravedCasingsCost + allBatteriesCost + allElectronicsCost + benchCost)
    // let totalResoursesCost = Math.round(scrapMetalCost + copperCost + wiresCost + plasticCost + engravedCasingsCost + batteriesCost + electronicsCost + benchCost)
    let totalAllResoursesСost = 0
    let totalResoursesCost = 0
    const productionCostPropDto: IProductionCostPropDto = {
      benchCost,
      scrapMetalRequires: component.getScrapMetal?.(),
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


    if (resoursesFromInput.scrapMetal > 0) {
      if (!allScrapMetalRequires || !productionCostPropDto.scrapMetalRequires) {
        allScrapMetalRequires = 0
        productionCostPropDto.scrapMetalRequires = 0
      }
      allScrapMetalRequires -= resoursesFromInput.scrapMetal
      productionCostPropDto.scrapMetalRequires -= resoursesFromInput.scrapMetal
      if (allScrapMetalRequires < 0) {
        allScrapMetalRequires = 0
      }
      if (productionCostPropDto.scrapMetalRequires < 0) {
        productionCostPropDto.scrapMetalRequires = 0
      }
    }

    if (resoursesFromInput.electronics > 0) {
      if (!allElectronicsRequires || !electronicsRequires) {
        allElectronicsRequires = 0
        electronicsRequires = 0
      }
      allElectronicsRequires -= resoursesFromInput.electronics
      electronicsRequires -= resoursesFromInput.electronics
      if (allElectronicsRequires < 0) {
        allElectronicsRequires = 0
      }
      if (electronicsRequires < 0) {
        electronicsRequires = 0
      }
    }

    if (resoursesFromInput.copper > 0) {
      if (!allCopperRequires || !copperRequires) {
        allCopperRequires = 0
        copperRequires = 0
      }
      allCopperRequires -= resoursesFromInput.copper
      copperRequires -= resoursesFromInput.copper
      if (allCopperRequires < 0) {
        allCopperRequires = 0
      }
      if (copperRequires < 0) {
        copperRequires = 0
      }
    }

    if (resoursesFromInput.wires > 0) {
      if (!allWiresRequires || !wiresRequires) {
        allWiresRequires = 0
        wiresRequires = 0
      }
      allWiresRequires -= resoursesFromInput.wires
      wiresRequires -= resoursesFromInput.wires
      if (allWiresRequires < 0) {
        allWiresRequires = 0
      }
      if (wiresRequires < 0) {
        wiresRequires = 0
      }
    }

    if (resoursesFromInput.plastic > 0) {
      if (!allPlasticRequires || !plasticRequires) {
        allPlasticRequires = 0
        plasticRequires = 0
      }
      allPlasticRequires -= resoursesFromInput.plastic
      plasticRequires -= resoursesFromInput.plastic
      if (allPlasticRequires < 0) {
        allPlasticRequires = 0
      }
      if (plasticRequires < 0) {
        plasticRequires = 0
      }
    }

    if (resoursesFromInput.batteries > 0) {
      if (!allBatterriesRequires || !batteriesRequires) {
        allBatterriesRequires = 0
        batteriesRequires = 0
      }
      allBatterriesRequires -= resoursesFromInput.batteries
      batteriesRequires -= resoursesFromInput.batteries
      if (allBatterriesRequires < 0) {
        allBatterriesRequires = 0
      }
      if (batteriesRequires < 0) {
        batteriesRequires = 0
      }
    }

    if (resoursesFromInput.engravedCasings > 0) {
      if (!allEngravedCasingsRequires || !engravedCasingsRequires) {
        allEngravedCasingsRequires = 0
        engravedCasingsRequires = 0
      }
      allEngravedCasingsRequires -= resoursesFromInput.engravedCasings
      engravedCasingsRequires -= resoursesFromInput.engravedCasings
      if (allEngravedCasingsRequires < 0) {
        allEngravedCasingsRequires = 0
      }
      if (engravedCasingsRequires < 0) {
        engravedCasingsRequires = 0
      }
    }

    productionCostPropDto.allScrapMetalCost = allScrapMetalRequires ? Math.round((allScrapMetalRequires * scrapMetalSellPrice / 100) * 100) / 100 : 0
    productionCostPropDto.allCopperCost = allCopperRequires ? Math.round((allCopperRequires * copperSellPrice / 100) * 100) / 100 : 0
    productionCostPropDto.allWiresCost = allWiresRequires ? Math.round((allWiresRequires * wiresSellPrice / 100) * 100) / 100 : 0
    productionCostPropDto.allPlasticCost = allPlasticRequires ? Math.round((allPlasticRequires * plasticSellPrice / 100) * 100) / 100 : 0
    productionCostPropDto.allEngravedCasingsCost = allEngravedCasingsRequires ? Math.round((allEngravedCasingsRequires * engravedCasingsSellPrice / 100) * 100) / 100 : 0
    productionCostPropDto.allBatteriesCost = allBatterriesRequires ? Math.round((allBatterriesRequires * batteriesSellPrice / 100) * 100) / 100 : 0
    productionCostPropDto.allElectronicsCost = allElectronicsRequires ? Math.round((allElectronicsRequires * electronicsSellPrice) * 100) / 100 : 0

    productionCostPropDto.scrapMetalCost = productionCostPropDto.scrapMetalRequires ? Math.round((productionCostPropDto.scrapMetalRequires * scrapMetalSellPrice / 100) * 100) / 100 : 0
    productionCostPropDto.copperCost = copperRequires ? Math.round((copperRequires * copperSellPrice / 100) * 100) / 100 : 0
    productionCostPropDto.wiresCost = wiresRequires ? Math.round((wiresRequires * wiresSellPrice / 100) * 100) / 100 : 0
    productionCostPropDto.plasticCost = plasticRequires ? Math.round((plasticRequires * plasticSellPrice / 100) * 100) / 100 : 0
    productionCostPropDto.engravedCasingsCost = engravedCasingsRequires ? Math.round((engravedCasingsRequires * engravedCasingsSellPrice / 100) * 100) / 100 : 0
    productionCostPropDto.batteriesCost = batteriesRequires ? Math.round((batteriesRequires * batteriesSellPrice / 100) * 100) / 100 : 0
    productionCostPropDto.electronicsCost = electronicsRequires ? Math.round((electronicsRequires * electronicsSellPrice) * 100) / 100 : 0


    productionCostPropDto.totalAllResoursesСost = Math.round(productionCostPropDto.allScrapMetalCost + productionCostPropDto.allCopperCost + productionCostPropDto.allWiresCost + productionCostPropDto.allPlasticCost + productionCostPropDto.allEngravedCasingsCost + productionCostPropDto.allBatteriesCost + productionCostPropDto.allElectronicsCost + productionCostPropDto.benchCost)
    productionCostPropDto.totalResoursesCost = Math.round(productionCostPropDto.scrapMetalCost + productionCostPropDto.copperCost + productionCostPropDto.wiresCost + productionCostPropDto.plasticCost + productionCostPropDto.engravedCasingsCost + productionCostPropDto.batteriesCost + productionCostPropDto.electronicsCost + productionCostPropDto.benchCost)

    console.log('allScrapMetalCost', allScrapMetalCost);

    

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
