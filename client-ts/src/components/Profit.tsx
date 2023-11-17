import React from 'react';
import './Profit.scss'
import { IProfitPropDto } from '../interfaces/Interfaces';

interface IProfitProps {
    profitPropDto: IProfitPropDto;
}

const Profit = ({ profitPropDto }: IProfitProps) => {

    // let componentBuyPrice = component.buyPrice
    // let commission = Math.round(component.buyPrice / 10)
    // let selfPrice = Math.round(allIngredientsPrice + costPrice)
    // let profit = Math.round(componentBuyPrice - commission - selfPrice)



    return (
        <>
            <div className="profit">
                <div className="text-5">Цена продажи</div>
                <div className="value-orange text-3">{profitPropDto.componentBuyPrice}</div>
                <div className="text-5">Сумма ингредиентов</div>
                <div className="value-orange text-3">{profitPropDto.selfPrice}</div>
                <div className="text-5">Комиссия</div>
                <div className="value-orange text-3">{profitPropDto.commission}</div>
                <div className="text-5">Прибыль</div>
                <div className="value-orange text-3">{profitPropDto.profit > 0 ? `+ ${profitPropDto.profit}` : `- ${profitPropDto.profit * -1}`}</div>
            </div>
        </>
    );
};

export default Profit;