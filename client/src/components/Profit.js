import React from 'react';
import './Profit.scss'

const Profit = ({ component, allIngredientsPrice, costPrice, btnSwitchBuyFabricate }) => {

    let componentBuyPrice = component.buyPrice
    let commission = Math.round(component.buyPrice / 10)
    let selfPrice = btnSwitchBuyFabricate ? allIngredientsPrice + costPrice : costPrice
    let profit = Math.round(componentBuyPrice - commission - selfPrice)


    return (
        <>
            <div className="profit">
                <div className="text-5">Цена продажи</div>
                <div className="value-orange text-3">{componentBuyPrice}</div>
                <div className="text-5">Сумма ингредиентов</div>
                <div className="value-orange text-3">{selfPrice}</div>
                <div className="text-5">Комиссия</div>
                <div className="value-orange text-3">{commission}</div>
                <div className="text-5">Прибыль</div>
                <div className="value-orange text-3">{profit > 0 ? `+ ${profit}` : profit === 0 ? '0' :  `- ${profit * -1}`}</div>
            </div>
        </>
    );
};

export default Profit;