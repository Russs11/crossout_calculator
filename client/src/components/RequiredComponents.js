import React from "react";
import { useState } from "react";
import "./RequiredComponents.scss";
import HorizontalSeparator from "./HorizontalSeparator";
import ResoursesForIngredients from "./ResoursesForIngredients";
import Ingredient from "./Ingredient";
const RequiredComponents = ({ component }) => {
  const [selectedIngredient, setSelectedIngredient] = useState()



  let ingredientsArr = [];
  // console.log("component.ingredients", component.ingredients);
  if (component.ingredients) {
    ingredientsArr = component.ingredients.map((ingredient) => {
      if (selectedIngredient === ingredient.id) {
        return (
          <Ingredient
            ingredient={ingredient}
            clickHandler={clickHandler}
            active={true} />
        )
      }
      return (
        <Ingredient
          ingredient={ingredient}
          clickHandler={clickHandler}
          active={false} />
      )
    });
    // }


    // console.log(childrenItems);
    function clickHandler(id) {
      console.log("click");
      setSelectedIngredient(id)
    }
    console.log(selectedIngredient);
    return (
      <>
        <div className="required-components">
          <div className="required-components-title text-5" >Компоненты:</div>
          <HorizontalSeparator />
          {ingredientsArr}
          <HorizontalSeparator />
          {selectedIngredient &&
            <ResoursesForIngredients />}
        </div>
      </>
    );
  }
};

export default RequiredComponents;
