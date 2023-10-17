import React from "react";
import { useState } from "react";
import "./RequiredComponents.scss";
import HorizontalSeparator from "./HorizontalSeparator";
import Ingredient from "./Ingredient";
import { IComponent, IResourcePrices } from "../interfaces/Interfaces";

interface IRequiredComponentsPropsDto {
  component: IComponent;
  resourcePrices: IResourcePrices[];
}


const RequiredComponents = ({ component, resourcePrices }: IRequiredComponentsPropsDto) => {


  const [selectedIngredient, setSelectedIngredient] = useState<number | null>(null)
  const [isActive, setIsActive] = useState<boolean>(false)


  let ingredientsArr: JSX.Element[] = [];


  function clickHandler(id:number): void {
    setSelectedIngredient(id)
    setIsActive(true)
    if (isActive && id === selectedIngredient) {
      setIsActive(false)
    }
  }


  if (component.ingredients) {
    ingredientsArr = component.ingredients.map((ingredient: IComponent) => {
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
  return null;
};

export default RequiredComponents;
