import React, { ReactElement, ReactFragment, useEffect } from 'react';
import './ProductionCost.scss'
import HorizontalSeparator from './HorizontalSeparator';
import { IComponent, IResourcePrices, IProductionCostPropDto, IResourcesFromInput } from '../interfaces/Interfaces';

interface IProductionCostPropsDto {
    component: IComponent;
    resourcePrices: IResourcePrices[]
    btnSwitchBuyFabricate: boolean;
    setCostPrice: React.Dispatch<number>;
    productionCostPropDto: IProductionCostPropDto | undefined
}

const ProductionCost = ({ component, resourcePrices, btnSwitchBuyFabricate, setCostPrice, productionCostPropDto }: IProductionCostPropsDto) => {

    let resoursesArr3: JSX.Element[] = []

    let totalResoursesCost = 0
    let totalAllResoursesСost = 0

    if (productionCostPropDto) {
        setCostPrice(btnSwitchBuyFabricate ? productionCostPropDto.totalResoursesCost : productionCostPropDto.totalAllResoursesСost);
        totalResoursesCost = productionCostPropDto.totalResoursesCost
        totalAllResoursesСost = productionCostPropDto.totalAllResoursesСost
    }
    console.log(totalAllResoursesСost, totalResoursesCost);

    // setCostPrice(btnSwitchBuyFabricate ? totalResoursesCost : totalAllResoursesСost)



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
    if (component.copper && productionCostPropDto) {
        resoursesArr3.push(
            <React.Fragment key={resourcePrices[1].dbId}>
                <div className="copper"></div>

                <div className="value text-3">{btnSwitchBuyFabricate ? productionCostPropDto.copperRequires : productionCostPropDto.allCopperRequires}</div>
                <div className="value-orange text-3">{productionCostPropDto.copperSellPrice}</div>
                <div className="value-orange text-3">{btnSwitchBuyFabricate ? productionCostPropDto.copperCost : productionCostPropDto.allCopperCost}</div>
            </React.Fragment>
        )
    }
    if (component.wires && productionCostPropDto) {
        resoursesArr3.push(
            <React.Fragment key={resourcePrices[2].dbId}>
                <div className="wires"></div>
                <div className="value text-3">{btnSwitchBuyFabricate ? productionCostPropDto.wiresRequires : productionCostPropDto.allWiresRequires}</div>
                <div className="value-orange text-3">{productionCostPropDto.wiresSellPrice}</div>
                <div className="value-orange text-3">{btnSwitchBuyFabricate ? productionCostPropDto.wiresCost : productionCostPropDto.allWiresCost}</div>
            </React.Fragment>
        )
    }
    if (component.plastic && productionCostPropDto) {
        resoursesArr3.push(
            <React.Fragment key={resourcePrices[3].dbId}>
                <div className="plastic"></div>
                <div className="value text-3">{btnSwitchBuyFabricate ? productionCostPropDto.plasticRequires : productionCostPropDto.allPlasticRequires}</div>
                <div className="value-orange text-3">{productionCostPropDto.plasticSellPrice}</div >
                <div className="value-orange text-3">{btnSwitchBuyFabricate ? productionCostPropDto.plasticCost : productionCostPropDto.allPlasticCost}</div>
            </React.Fragment>
        )
    }
    if (component.electronics && productionCostPropDto) {
        resoursesArr3.push(
            <React.Fragment key={resourcePrices[4].dbId}>
                <div className="batteries"></div>
                <div className="value text-3">{btnSwitchBuyFabricate ? productionCostPropDto.electronicsRequires : productionCostPropDto.allElectronicsRequires}</div>
                <div className="value-orange text-3">{productionCostPropDto.electronicsSellPrice}</div>
                <div className="value-orange text-3">{btnSwitchBuyFabricate ? productionCostPropDto.electronicsCost : productionCostPropDto.allElectronicsCost}</div>
            </React.Fragment>
        )
    }
    if (component.batteries && productionCostPropDto) {
        resoursesArr3.push(
            <React.Fragment key={resourcePrices[5].dbId}>
                <div className="batteries"></div>
                <div className="value text-3">{btnSwitchBuyFabricate ? productionCostPropDto.batteriesRequires : productionCostPropDto.allBatterriesRequires}</div>
                <div className="value-orange text-3">{productionCostPropDto.batteriesSellPrice}</div>
                <div className="value-orange text-3">{btnSwitchBuyFabricate ? productionCostPropDto.batteriesCost : productionCostPropDto.allBatteriesCost}</div>
            </React.Fragment>
        )
    }
    if (component.engravedCasings && productionCostPropDto) {
        resoursesArr3.push(
            <React.Fragment key={resourcePrices[6].dbId}>
                <div className="engravedcasigs"></div>
                <div className="value text-3">{btnSwitchBuyFabricate ? productionCostPropDto.engravedCasingsRequires : productionCostPropDto.allEngravedCasingsRequires}</div>
                <div className="value-orange text-3">{productionCostPropDto.engravedCasingsSellPrice}</div>
                <div className="value-orange text-3">{btnSwitchBuyFabricate ? productionCostPropDto.engravedCasingsCost : productionCostPropDto.allEngravedCasingsCost}</div>
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
                    <div className="value-orange text-3">{productionCostPropDto && productionCostPropDto.benchCost ? productionCostPropDto.benchCost : 0}</div>
                    <div className="total text-7">Всего:</div>
                    <div className="value-orange text-3">{btnSwitchBuyFabricate ? totalResoursesCost : totalAllResoursesСost}</div>
                </div>
            </div>
            <HorizontalSeparator />
        </>
    );
};

export default ProductionCost;