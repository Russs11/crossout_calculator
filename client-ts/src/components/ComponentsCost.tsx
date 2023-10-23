import React,{useEffect} from 'react';
import './ComponentsCost.scss'
import HorizontalSeparator from './HorizontalSeparator';
import { IComponent } from '../interfaces/Interfaces';
import { CommonVehicleComponent } from '../entity/commonVehicleComponent';
import { EpicVehicleComponent } from '../entity/epicVehicleComponent';
import { RareVehicleComponent } from '../entity/rareVehicleComponent';
import { SpecialVehicleComponent } from '../entity/specialVehicleComponent';

interface IComponentCostPropsDto {
    component: IComponent;
    classInstances: IComponent[];
    btnSwitchBuyFabricate: boolean;
    setBtnSwitchBuyFabricate: React.Dispatch<React.SetStateAction<boolean>>;
    setAllIngredientsPrice: React.Dispatch<number>;
}

const ComponentsCost = ({ component, classInstances, btnSwitchBuyFabricate, setBtnSwitchBuyFabricate, setAllIngredientsPrice }: IComponentCostPropsDto ) => {
    let localIngredientArr: IComponent[] = [];
    let renderIngredientsArr: JSX.Element[] = [];
    let counter: {}
    let ingredientsCost: number;
    let totalIngredientsCost: number;
    // component.ingredients.push(component.ingredients[0])
    let btnClasses:string = btnSwitchBuyFabricate ? "switch-btn switch-on" : "switch-btn "

    
    function clickHandler() {
        setBtnSwitchBuyFabricate((prev): boolean => { return !prev });
    }

    function setInstanceSellPrice(ingredientsArr: CommonVehicleComponent[] | RareVehicleComponent[] | SpecialVehicleComponent[] | EpicVehicleComponent[], instancePricesArr: IComponent[]) {
        for (const item of ingredientsArr) {
            for (const inst of instancePricesArr) {
                if (item.id === inst.id) {
                    item.sellPrice = inst.sellPrice
                    item.buyPrice = inst.buyPrice
                }
            }
        }
    }

    function setCounterOfIngredients(ingredientsArr: CommonVehicleComponent[] | RareVehicleComponent[] | SpecialVehicleComponent[] | EpicVehicleComponent[]): {} {
        let count: {} = {};
        ingredientsArr.forEach(function (i) { count[i.id] = (count[i.id] || 0) + 1; });
        localIngredientArr = [...new Set(ingredientsArr)];
        
        return count
    }
    
    setInstanceSellPrice(component.ingredients, classInstances);
    counter = setCounterOfIngredients(component.ingredients);
    
    totalIngredientsCost = Math.round(component.ingredients.reduce((a, b) => {
        return a + b.sellPrice
    }, 0));

    useEffect(() => {
        setAllIngredientsPrice(btnSwitchBuyFabricate ? totalIngredientsCost : 0);
    }, [btnSwitchBuyFabricate])



    renderIngredientsArr = localIngredientArr.map(ingredient => {
        let quantityOfIngredients: string
        for (const id in counter) {
            if (ingredient.id === Number(id)) {
                quantityOfIngredients = counter[id]
            }
        }
        ingredientsCost = Math.round((quantityOfIngredients * ingredient.sellPrice) * 100) / 100

        return (
            <React.Fragment key={ingredient.name}>
                <div className="component-image_8 small-component-img"
                    style={{ backgroundImage: "url(" + ingredient.img + ")" }}></div>
                <div className="value text-3">{quantityOfIngredients}</div>
                <div className="value-orange text-3">{ingredient.sellPrice}</div>
                <div className="value-orange text-3">{ingredientsCost}</div>
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
                    <div className="value-orange text-3">{totalIngredientsCost}</div>
                </div>
            </div>
        </>
    );
};

export default ComponentsCost;