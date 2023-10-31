import React, { ReactElement, ReactFragment, useEffect } from 'react';
import './ProductionCost.scss'
import HorizontalSeparator from './HorizontalSeparator';
import { IComponent, IResourcePrices, IResourcesFromInput } from '../interfaces/Interfaces';


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
interface IProductionCostPropsDto {
    component: IComponent;
    resourcePrices: IResourcePrices[];
    btnSwitchBuyFabricate: boolean;
    resoursesFromInput: IResourcesFromInput;
    setCostPrice: React.Dispatch<number>;
    productionCostPropDto: IProductionCostPropDto | undefined
}

const ProductionCost = ({ component, resourcePrices, btnSwitchBuyFabricate, resoursesFromInput, setCostPrice, productionCostPropDto }: IProductionCostPropsDto) => {

    let resoursesArr3: JSX.Element[] = []

    let benchCost: number = component.getAllBenchCost?.() ? component.getAllBenchCost?.() : 0

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


    setCostPrice(btnSwitchBuyFabricate ? totalResoursesCost : totalAllResoursesСost);


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

    
    if (component.scrapMetal && productionCostPropDto) {

        resoursesArr3.push(
            <React.Fragment key={resourcePrices[0].dbId}>
                <div className="scrapmetal"></div>
                <div className="value text-3">{btnSwitchBuyFabricate ? productionCostPropDto.scrapMetalRequires : productionCostPropDto.allScrapMetalRequires}</div>
                <div className="value-orange text-3">{productionCostPropDto.scrapMetalSellPrice}</div>
                <div className="value-orange text-3">{btnSwitchBuyFabricate ? productionCostPropDto.scrapMetalCost : productionCostPropDto.allScrapMetalCost}</div>
            </React.Fragment>
        )
    }
    if (component.copper) {
        resoursesArr3.push(
            <React.Fragment key={resourcePrices[1].dbId}>
                <div className="copper"></div>
                <div className="value text-3">{btnSwitchBuyFabricate ? copperRequires : allCopperRequires}</div>
                <div className="value-orange text-3">{copperSellPrice}</div>
                <div className="value-orange text-3">{btnSwitchBuyFabricate ? copperCost : allCopperCost}</div>
            </React.Fragment>
        )
    }
    if (component.wires) {
        resoursesArr3.push(
            <React.Fragment key={resourcePrices[2].dbId}>
                <div className="wires"></div>
                <div className="value text-3">{btnSwitchBuyFabricate ? wiresRequires : allWiresRequires}</div>
                <div className="value-orange text-3">{wiresSellPrice}</div>
                <div className="value-orange text-3">{btnSwitchBuyFabricate ? wiresCost : allWiresCost}</div>
            </React.Fragment>
        )
    }
    if (component.plastic) {
        resoursesArr3.push(
            <React.Fragment key={resourcePrices[3].dbId}>
                <div className="plastic"></div>
                <div className="value text-3">{btnSwitchBuyFabricate ? plasticRequires : allPlasticRequires}</div>
                <div className="value-orange text-3">{plasticSellPrice}</div >
                <div className="value-orange text-3">{btnSwitchBuyFabricate ? plasticCost : allPlasticCost}</div>
            </React.Fragment>
        )
    }
    if (component.electronics) {
        resoursesArr3.push(
            <React.Fragment key={resourcePrices[4].dbId}>
                <div className="batteries"></div>
                <div className="value text-3">{btnSwitchBuyFabricate ? electronicsRequires : allElectronicsRequires}</div>
                <div className="value-orange text-3">{electronicsSellPrice}</div>
                <div className="value-orange text-3">{btnSwitchBuyFabricate ? electronicsCost : allElectronicsCost}</div>
            </React.Fragment>
        )
    }
    if (component.batteries) {
        resoursesArr3.push(
            <React.Fragment key={resourcePrices[5].dbId}>
                <div className="batteries"></div>
                <div className="value text-3">{btnSwitchBuyFabricate ? batteriesRequires : allBatterriesRequires}</div>
                <div className="value-orange text-3">{batteriesSellPrice}</div>
                <div className="value-orange text-3">{btnSwitchBuyFabricate ? batteriesCost : allBatteriesCost}</div>
            </React.Fragment>
        )
    }
    if (component.engravedCasings) {
        resoursesArr3.push(
            <React.Fragment key={resourcePrices[6].dbId}>
                <div className="engravedcasigs"></div>
                <div className="value text-3">{btnSwitchBuyFabricate ? engravedCasingsRequires : allEngravedCasingsRequires}</div>
                <div className="value-orange text-3">{engravedCasingsSellPrice}</div>
                <div className="value-orange text-3">{btnSwitchBuyFabricate ? engravedCasingsCost : allEngravedCasingsCost}</div>
            </React.Fragment>
        )
    }

    return (
        <>
            <div className="production-cost">
                <div className="production-cost-title text-4">Себестоимость производства:</div>
                <div className="production-cost-grid">
                    <div className="text-5">Ресурсы:</div>
                    <div className="text-5">Количество:</div>
                    <div className="text-5">Цена:</div>
                    <div className="text-5">Стоимость:</div>
                    {resoursesArr3}
                    <div className="machine-rental text-7">Аренда станка:</div>
                    <div className="value-orange text-3">{benchCost ? benchCost : 0}</div>
                    <div className="total text-7">Всего:</div>
                    <div className="value-orange text-3">{btnSwitchBuyFabricate ? totalResoursesCost : totalAllResoursesСost}</div>
                </div>
            </div>
            <HorizontalSeparator />
        </>
    );
};

export default ProductionCost;