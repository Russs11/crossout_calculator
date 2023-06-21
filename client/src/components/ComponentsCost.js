import React from 'react';
import './ComponentsCost.scss'
import HorizontalSeparator from './HorizontalSeparator';


const ComponentsCost = ({ component }) => {
  


    function clickHandler(event) {
        event.currentTarget.classList.toggle("switch-on")
    }
    



    let ingredientsArr = component.ingredients.map(ingredient => {
        return (
            <>
                <div className="component-image_8 small-component-img"
                    style={{ backgroundImage: "url(" + ingredient.img + ")" }}></div>
                <div className="value text-3">{1}</div>
                <div className="value-orange text-3">{ingredient.sellPrice}</div>
                <div className="value-orange text-3">{ingredient.sellPrice}</div>
            </>
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
                    {ingredientsArr}
                    <div className="total text-7">Всего:</div>
                    <div className="value-orange text-3">{component.getAllBenchCost()}</div>
                </div>
                <HorizontalSeparator />
            </div>
        </>
    );
};

export default ComponentsCost;