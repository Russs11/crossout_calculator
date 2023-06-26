import React from 'react';
import './ComponentsCost.scss'
import HorizontalSeparator from './HorizontalSeparator';


const ComponentsCost = ({ component, classInstances }) => {
    let localIngredientArr = []
    let renderIngredientsArr = []
    let counter
    
    // component.ingredients.push(component.ingredients[2])
    function clickHandler(event) {
        event.currentTarget.classList.toggle("switch-on")
    }

    function setInstanceSellPrice(ingredientsArr, instancePricesArr) {
        for (const item of ingredientsArr) {
            for (const inst of instancePricesArr) {
                if (item.id === inst.id) {
                    item.sellPrice = inst.sellPrice
                    item.buyPrice = inst.buyPrice
                }
            }
        }
    }

    function setCounterOfIngredients(ingredientsArr) {
        let count = {};
        ingredientsArr.forEach(function (i) { count[i.id] = (count[i.id] || 0) + 1; });
        localIngredientArr = [...new Set(ingredientsArr)];
        
        return count
    }
    
    setInstanceSellPrice(component.ingredients, classInstances);
    counter = setCounterOfIngredients(component.ingredients)
    
    



    renderIngredientsArr = localIngredientArr.map(ingredient => {
        let quantityOfIng 
        for (const id in counter) {
            if (ingredient.id === +id) {
                quantityOfIng = counter[id]
            }
        }
        return (
            <React.Fragment key={ingredient.name}>
                <div className="component-image_8 small-component-img"
                    style={{ backgroundImage: "url(" + ingredient.img + ")" }}></div>
                <div className="value text-3">{quantityOfIng}</div>
                <div className="value-orange text-3">{ingredient.sellPrice}</div>
                <div className="value-orange text-3">{Math.round((quantityOfIng * ingredient.sellPrice) * 100) / 100}</div>
            </React.Fragment>
        )
    });

    return (
        <>
            <div className="components-cost">
                <div className="components-cost-title text-4">Купить компоненты
                    <div className="switch-btn" onClick={clickHandler}></div>
                </div>
                <div className="components-cost-grid">
                    <div className="text-5">Ресурсы:</div>
                    <div className="text-5">Количество:</div>
                    <div className="text-5">Цена:</div>
                    <div className="text-5">Стоимость:</div>
                    {/* <div className="component-image_8 small-component-img"></div>
                    <div className="value text-3">2</div>
                    <div className="value-orange text-3">352</div>
                    <div className="value-orange text-3">704</div>
                    <div className="component-img-small_2 small-component-img"></div>
                    <div className="value text-3">1</div>
                    <div className="value-orange text-3">396</div>
                    <div className="value-orange text-3">396</div>
                    <div className="component-img-small_3 small-component-img"></div>
                    <div className="value text-3">2</div>
                    <div className="value-orange text-3">241.5</div>
                    <div className="value-orange text-3">483</div> */}
                    {renderIngredientsArr}
                    <div className="total text-7">Всего:</div>
                    <div className="value-orange text-3">780</div>
                </div>
            </div>
        </>
    );
};

export default ComponentsCost;