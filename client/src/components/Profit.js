import React from 'react';
import './Profit.scss'

const Profit = ({ component }) => {

    let ComponentBuyPrice = component.buyPrice
    console.log(ComponentBuyPrice);

    return (
        <>
            <div className="profit">
                <div className="text-5">Цена продажи</div>
                <div className="value-orange text-3">{ComponentBuyPrice}</div>
                <div className="text-5">Сумма ингредиентов</div>
                <div className="value-orange text-3">- 2116.78</div>
                <div className="text-5">Комиссия</div>
                <div className="value-orange text-3">- 240.06</div>
                <div className="text-5">Прибыль</div>
                <div className="value-orange text-3">+ 43.72</div>
            </div>
        </>
    );
};

export default Profit;