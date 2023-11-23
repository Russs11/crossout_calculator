import React, { ReactElement, ReactFragment, useEffect } from 'react';
import './ComponentsCost.scss'
import HorizontalSeparator from './HorizontalSeparator';
import { IComponentCostPropDto } from '../interfaces/Interfaces';


interface IComponentCostPropsDto {
    btnSwitchBuyFabricate: boolean;
    setBtnSwitchBuyFabricate: React.Dispatch<React.SetStateAction<boolean>>;
    componentCostPropDto: IComponentCostPropDto
}

const ComponentsCost = ({  btnSwitchBuyFabricate, setBtnSwitchBuyFabricate, componentCostPropDto }: IComponentCostPropsDto) => {
    
    let renderIngredientsArr: ReactElement[] = [];

    let btnClasses: string = btnSwitchBuyFabricate ? "switch-btn switch-on" : "switch-btn "
    
    function clickHandler() {
        setBtnSwitchBuyFabricate((prev): boolean => { return !prev });
    }


    renderIngredientsArr = componentCostPropDto.ingridients.map(ingredient => {
        
        return (
            <React.Fragment key={ingredient.id}>
                <div className="component-image_8 small-component-img"
                    style={{ backgroundImage: "url(" + ingredient.img + ")" }}></div>
                <div className="value text-3">{ingredient.count}</div>
                <div className="value-orange text-3">{ingredient.sellPrice}</div>
                <div className="value-orange text-3">{ingredient.cost}</div>
            </React.Fragment>
        )
    });

    return (
        <>
            <div className="components-cost">
                <div className="components-cost-title text-4">Купить компоненты
                    <div className={btnClasses} onClick={clickHandler}></div>
                </div>
                <div className="components-cost-grid">
                    <div className="text-5">Ресурсы:</div>
                    <div className="text-5">Количество:</div>
                    <div className="text-5">Цена:</div>
                    <div className="text-5">Стоимость:</div>
                    {renderIngredientsArr}
                    <div className="total text-7">Всего:</div>
                    <div className="value-orange text-3">{ componentCostPropDto.totalIngridientsCost }</div>
                </div>
            </div>
        </>
    );
};

export default ComponentsCost;