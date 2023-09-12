import React, { useEffect } from 'react';
import './ProductionCost.scss'
import HorizontalSeparator from './HorizontalSeparator';

const ProductionCost = ({ component, resourcePrices, btnSwitchBuyFabricate, resoursesFromInput, setCostPrice, costPrice, allIngredientsPrice }) => {

    let resoursesArr3 = []

    let benchCost = component.getAllBenchCost?.() ? component.getAllBenchCost?.() : 0

    let scrapMetalRequires = component.getScrapMetal()
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

    let totalAllResoursesСost = allScrapMetalCost + allCopperCost + allWiresCost + allPlasticCost + allEngravedCasingsCost + allBatteriesCost + allElectronicsCost + benchCost
    let totalResoursesCost = scrapMetalCost + copperCost + wiresCost + plasticCost + engravedCasingsCost + batteriesCost + electronicsCost + benchCost

    useEffect(() => {
        
        setCostPrice(btnSwitchBuyFabricate ? totalResoursesCost : totalAllResoursesСost)
    }, [costPrice, btnSwitchBuyFabricate, totalResoursesCost, totalAllResoursesСost ])


    
    if (resoursesFromInput.scrapMetal > 0) {
        allScrapMetalRequires -= resoursesFromInput.scrapMetal
        scrapMetalRequires -= resoursesFromInput.scrapMetal
        if (allScrapMetalRequires < 0) {
            allScrapMetalRequires = 0
        }
        if (scrapMetalRequires < 0) {
            scrapMetalRequires = 0
        }
    }

    if (component.scrapMetal) {
        console.log('btnSwitchBuyFabricate', btnSwitchBuyFabricate);
        // console.log('scrapMetalRequires', scrapMetalRequires);
        // console.log('allScrapMetalRequires', allScrapMetalRequires);
        resoursesArr3.push(
            <React.Fragment key={resourcePrices[0].dbId}>
                <div className="scrapmetal"></div>
                <div className="value text-3">{btnSwitchBuyFabricate ? scrapMetalRequires : allScrapMetalRequires}</div>
                <div className="value-orange text-3">{scrapMetalSellPrice}</div>
                <div className="value-orange text-3">{btnSwitchBuyFabricate ? scrapMetalCost : allScrapMetalCost}</div>
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
                <div className="value-orange text-3">{btnSwitchBuyFabricate? wiresCost: allWiresCost}</div>
            </React.Fragment>
        )
    }
    if (component.plastic) {
        resoursesArr3.push(
            <React.Fragment key={resourcePrices[3].dbId}>
                <div className="plastic"></div>
                <div className="value text-3">{btnSwitchBuyFabricate ? plasticRequires : allPlasticRequires}</div>
                <div className="value-orange text-3">{plasticSellPrice}</div >
                <div className="value-orange text-3">{btnSwitchBuyFabricate ? plasticCost: allPlasticCost}</div>
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
                <div className="value-orange text-3">{ batteriesSellPrice}</div>
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
                    {/* <div className="resourses-img_4"></div>
                    <div className="value text-3">750</div>
                    <div className="value-orange text-3">1.89</div>
                    <div className="value-orange text-3">141.75</div>
                    <div className="resourses-img_2"></div>
                    <div className="value text-3">750</div>
                    <div className="value-orange text-3">4.49</div>
                    <div className="value-orange text-3">336.75</div> */}
                    <div className="machine-rental text-7">Аренда станка:</div>
                    <div className="value-orange text-3">{benchCost ? benchCost : 0}</div>
                    <div className="total text-7">Всего:</div>
                    <div className="value-orange text-3">{btnSwitchBuyFabricate ? Math.round(totalResoursesCost * 100) / 100 : Math.round(totalAllResoursesСost * 100) / 100}</div>
                </div>
            </div>
            <HorizontalSeparator />
        </>
    );
};

export default ProductionCost;