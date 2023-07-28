import React from 'react';
import ResoursesForIngredients from './ResoursesForIngredients';

const Ingredient = ({ ingredient, resourcePrices, clickHandler, active }) => {
	const itemImg = {
		backgroundImage: "url(" + ingredient.img + ")",
	};

	if (active) {

		return (
			<>
				<div className="item-required">
					<div className="component-image-active" style={itemImg} onClick={() => clickHandler(ingredient.id)}></div>
					<div className="item-required-info">
						<div className="item-name-title text-4">{ingredient.name}</div>
						<div className="item-type text-7">{ingredient.type}</div>
						<div className="item-production-time-title text-6">Время производства:</div>
						<div className="item-production-cost-title text-6">Стоимость производства:</div>
						<div className="item-production-time-value text-3">
							{ingredient.productionTime ? `${ingredient.productionTime} часов` : "0 часов"}
						</div>
						<div className="small-token value-orange text-3">
							{ingredient.benchCost ? ingredient.benchCost : 0}
							<div className="token-img"></div>
						</div>
					</div>
				</div>
				<ResoursesForIngredients 
				ingredient={ingredient} 
				resourcePrices={resourcePrices}
				active={true}/>
			</>
		);
	}
	else {
		return (
			<>
				<div className="item-required">
					<div style={itemImg} onClick={() => clickHandler(ingredient.id)}></div>
					<div className="item-required-info">
						<div className="item-name-title text-4">{ingredient.name}</div>
						<div className="item-type text-7">{ingredient.type}</div>
						<div className="item-production-time-title text-6">Время производства:</div>
						<div className="item-production-cost-title text-6">Стоимость производства:</div>
						<div className="item-production-time-value text-3">
							{ingredient.productionTime ? `${ingredient.productionTime} часов` : "0 часов"}
						</div>
						<div className="small-token value-orange text-3">
							{ingredient.benchCost ? ingredient.benchCost : 0}
							<div className="token-img"></div>
						</div>
					</div>
				</div>
				<ResoursesForIngredients 
				ingredient={ingredient} 
				resourcePrices={resourcePrices}
				active={false}/>
			</>
		);
	}
};

export default Ingredient;