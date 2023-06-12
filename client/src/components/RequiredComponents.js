import React from "react";
import { useState } from "react";
import "./RequiredComponents.scss";
import HorizontalSeparator from "./HorizontalSeparator";
import ResoursesForIngredients from "./ResoursesForIngredients";
import Ingredient from "./Ingredient";




const RequiredComponents = ({ component, resourcePrices }) => {
  const [selectedIngredient, setSelectedIngredient] = useState(null)
  const [isActive, setIsActive] = useState(false)


  let ingredientsArr = [];
  // console.log("component.ingredients", component.ingredients);
  if (component.ingredients) {
    ingredientsArr = component.ingredients.map((ingredient) => {
      if (selectedIngredient === ingredient.id && isActive) {
        return (
          <Ingredient
            key={ingredient.name}
            ingredient={ingredient}
            resourcePrices={resourcePrices}
            clickHandler={clickHandler}
            active={true} />
        )
      }
      return (
        <Ingredient
          key={ingredient.name}
          ingredient={ingredient}
          resourcePrices={resourcePrices}
          clickHandler={clickHandler}
          active={false} />
      )
    });
    // }


    // console.log(childrenItems);
    function clickHandler(id) {
      setSelectedIngredient(id)
      setIsActive(true)
      if(isActive && id === selectedIngredient){
        setIsActive(false)
      }
    }

    return (
      <>
        <div className="required-components">
          <div className="required-components-title text-5" >Компоненты:</div>
          <HorizontalSeparator />
          {ingredientsArr}
        </div>
      </>
    );
  }
};

export default RequiredComponents;
