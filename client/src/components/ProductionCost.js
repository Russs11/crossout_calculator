import React from 'react';
import './ProductionCost.scss'
import HorizontalSeparator from './HorizontalSeparator';

const ProductionCost = ({ component, resourcePrices, btnSwitchBuyFabricate }) => {

    let resoursesArr3 = []


    let scrapMetalRequires = component.getScrapMetal()
    console.log('scrapMetalRequires: ', scrapMetalRequires);
    let allScrapMetalRequires = component.getAllScrapMetal()
    console.log('allScrapMetalRequires: ', allScrapMetalRequires);

    let scrapMetalSellPrice = resourcePrices[0].sellPrice
    let copperSellPrice = resourcePrices[1].sellPrice
    let wiresSellPrice = resourcePrices[2].sellPrice
    let plasticSellPrice = resourcePrices[3].sellPrice
    let batteriesSellPrice = resourcePrices[4].sellPrice
    let electronicsSellPrice = resourcePrices[5].sellPrice
    let engravedCasingsSellPrice = resourcePrices[6].sellPrice

    let scrapMetalCost = component?.getAllScrapMetal() ? Math.round((component?.getAllScrapMetal() * scrapMetalSellPrice / 100) * 100) / 100 : 0
    let copperCost = component?.getAllCopper() ? Math.round((component?.getAllCopper() * copperSellPrice / 100) * 100) / 100 : 0
    let wiresCost = component?.getAllWires() ? Math.round((component?.getAllWires() * wiresSellPrice / 100) * 100) / 100 : 0
    let plasticCost = component?.getAllPlastic() ? Math.round((component?.getAllPlastic() * plasticSellPrice / 100) * 100) / 100 : 0
    let engravedCasingsCost = component?.getAllEngravedCasings() ? Math.round((component?.getAllEngravedCasings() * engravedCasingsSellPrice / 100) * 100) / 100 : 0
    let batteriesCost = component.batteries ? Math.round((component.batteries * batteriesSellPrice / 100) * 100) / 100 : 0
    // let electronicsCost = component.electronics ? Math.round((component.electronics * electronicsSellPrice) * 100) / 100 : 0

    let totalResoursesСost = scrapMetalCost + copperCost + wiresCost + plasticCost + engravedCasingsCost



    if (component.scrapMetal !== 0) {
        console.log('btnSwitchBuyFabricate', btnSwitchBuyFabricate);
        console.log('scrapMetalRequires', scrapMetalRequires);
        console.log('allScrapMetalRequires', allScrapMetalRequires);
        resoursesArr3.push(
            <React.Fragment key={resourcePrices[0].dbId}>
                <div className="resourses-img_1"></div>
                <div className="value text-3">{btnSwitchBuyFabricate ? scrapMetalRequires : allScrapMetalRequires  }</div>
                <div className="value-orange text-3">{scrapMetalSellPrice}</div>
                <div className="value-orange text-3">{scrapMetalCost}</div>
            </React.Fragment>
        )
    }
    if (component.copper !== 0) {
        resoursesArr3.push(
            <React.Fragment key={resourcePrices[1].dbId}>
                <div className="resourses-img_3"></div>
                <div className="value text-3">{component.getAllCopper()}</div>
                <div className="value-orange text-3">{copperSellPrice}</div>
                <div className="value-orange text-3">{copperCost}</div>
            </React.Fragment>
        )
    }
    if (component.wires !== 0){
        resoursesArr3.push(
        <React.Fragment key={resourcePrices[2].dbId}>
            <div className="resourses-img_5"></div>
            <div className="value text-3">{component?.getAllWires()}</div>
            <div className="value-orange text-3">{wiresSellPrice}</div>
            <div className="value-orange text-3">{wiresCost}</div>
        </React.Fragment>
        )
    }
if (component.plastic !== 0) {
    resoursesArr3.push(
        <React.Fragment key={resourcePrices[3].dbId}>
            <div className="resourses-img_7"></div>
            <div className="value text-3">{component.getAllPlastic()}</div>
            <div className="value-orange text-3">{plasticSellPrice}</div>
            <div className="value-orange text-3">{plasticCost}</div>
        </React.Fragment>
    )
}
if (component.engravedCasings !== 0) {
    resoursesArr3.push(
        <React.Fragment key={resourcePrices[6].dbId}>
            <div className="resourses-img_7"></div>
            <div className="value text-3">{component.getAllEngravedCasings()}</div>
            <div className="value-orange text-3">{engravedCasingsSellPrice}</div>
            <div className="value-orange text-3">{engravedCasingsCost}</div>
        </React.Fragment>
    )
}
if (component.batteries !== 0) {
    resoursesArr3.push(
        <React.Fragment key={resourcePrices[4].dbId}>
            <div className="resourses-img_7"></div>
            <div className="value text-3">{component.getAllBatteries() ? component.getAllBatteries() : 0}</div>
            <div className="value-orange text-3">{batteriesSellPrice}</div>
            <div className="value-orange text-3">{batteriesCost}</div>
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
                <div className="value-orange text-3">{component.getAllBenchCost()}</div>
                <div className="total text-7">Всего:</div>
                <div className="value-orange text-3">{Math.round(totalResoursesСost * 100) / 100}</div>
            </div>
        </div>
        <HorizontalSeparator />
    </>
);
};

export default ProductionCost;