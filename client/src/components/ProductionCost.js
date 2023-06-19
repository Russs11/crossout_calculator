import React from 'react';
import './ProductionCost.scss'
import HorizontalSeparator from './HorizontalSeparator';

const ProductionCost = ({ component, resourcePrices }) => {
    
    let resoursesArr3 = []

    let machineRent = 330

    let scrapMetalSellPrice = resourcePrices[0].sellPrice / 100
    let copperSellPrice = resourcePrices[1].sellPrice / 100
    let wiresSellPrice = resourcePrices[2].sellPrice / 100
    let plasticSellPrice = resourcePrices[3].sellPrice / 100
    let batteriesSellPrice = resourcePrices[4].sellPrice / 10
    let electronicsSellPrice = resourcePrices[5].sellPrice / 10
    let engravedCasingsSellPrice = resourcePrices[6].sellPrice / 100

    let scrapMetalCost = component.getAllScrapMetal() ? Math.round((component.getAllScrapMetal() * scrapMetalSellPrice) * 100) / 100 : 0
    let copperCost = component.getAllCopper() ? Math.round((component.getAllCopper() * copperSellPrice) * 100) / 100 : 0
    let wiresCost = component.getAllWires() ? Math.round((component.getAllWires() * wiresSellPrice) * 100) / 100 : 0
    let plasticCost = component.getAllPlastic() ? Math.round((component.getAllPlastic() * plasticSellPrice) * 100) / 100 : 0
    let engravedCasingsCost = component.getAllEngravedCasings() ? Math.round((component.getAllEngravedCasings() * engravedCasingsSellPrice) * 100) / 100 : 0
    // let batteriesCost = component.batteries ? Math.round((component.batteries * batteriesSellPrice) * 100) / 100 : 0
    // let electronicsCost = component.electronics ? Math.round((component.electronics * electronicsSellPrice) * 100) / 100 : 0

    let totalResoursesСost = machineRent + scrapMetalCost + copperCost + wiresCost + plasticCost +  engravedCasingsCost

    if (component.getAllScrapMetal()) {
        resoursesArr3.push(
            <>
                <div className="resourses-img_1"></div>
                <div className="value text-3">{component.getAllScrapMetal()}</div>
                <div className="value-orange text-3">{(scrapMetalSellPrice * 100)}</div>
                <div className="value-orange text-3">{scrapMetalCost}</div>
            </>
        )
    }
    if (component.getAllCopper()) {
        resoursesArr3.push(
            <>
                <div className="resourses-img_3"></div>
                <div className="value text-3">{component.getAllCopper()}</div>
                <div className="value-orange text-3">{(copperSellPrice * 100)}</div>
                <div className="value-orange text-3">{copperCost}</div>
            </>
        )
    }
    if (component.getAllWires()) {
        resoursesArr3.push(
            <>
                <div className="resourses-img_5"></div>
                <div className="value text-3">{component.getAllWires()}</div>
                <div className="value-orange text-3">{(wiresSellPrice * 100)}</div>
                <div className="value-orange text-3">{wiresCost}</div>
            </>
        )
    }
    if (component.getAllPlastic()) {
        resoursesArr3.push(
            <>
                <div className="resourses-img_7"></div>
                <div className="value text-3">{component.getAllPlastic()}</div>
                <div className="value-orange text-3">{(plasticSellPrice * 100)}</div>
                <div className="value-orange text-3">{plasticCost}</div>
            </>
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
                    <div className="value-orange text-3">{machineRent}</div>
                    <div className="total text-7">Всего:</div>
                    <div className="value-orange text-3">{Math.round(totalResoursesСost * 100) / 100}</div>
                </div>
            </div>
            <HorizontalSeparator />
        </>
    );
};

export default ProductionCost;