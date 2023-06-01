import React from 'react';

const Ingredient = ({ ingredient, clickHandler, active }) => {
	const itemImg = {
		backgroundImage: "url(" + ingredient.img + ")",
	};
	let resoursesArr2 = []


	if (ingredient.scrapMetal) {
		resoursesArr2.push(
			<>
				<div className="resourses-img_1 small"></div>
				<div className="value text-8">{ingredient.scrapMetal ? ingredient.scrapMetal : null}</div>
				<div className="value-orange text-8">4.91</div>
				<div className="value-orange text-8">100</div>
			</>
		)
	}
	if (ingredient.electronics) {
		resoursesArr2.push(
			<>
				<div className="resourses-img_2 small"></div>
				<div className="value text-8">{ingredient.electronics}</div>
				<div className="value-orange text-8">4.91</div>
				<div className="value-orange text-8">100</div>
			</>
		)
	}
	if (ingredient.copper) {
		resoursesArr2.push(
			<>
				<div className="resourses-img_3 small"></div>
				<div className="value text-8">{ingredient.copper}</div>
				<div className="value-orange text-8">8.82</div>
				<div className="value-orange text-8">26.56</div>
			</>
		)
	}
	if (ingredient.batteries) {
		resoursesArr2.push(
			<>
				<div className="resourses-img_4 small"></div>
				<div className="value text-8">{ingredient.batteries}</div>
				<div className="value-orange text-8">8.82</div>
				<div className="value-orange text-8">26.56</div>
			</>
		)
	}
	if (ingredient.wires) {
		resoursesArr2.push(
			<>
				<div className="resourses-img_5 small"></div>
				<div className="value text-8">{ingredient.wires}</div>
				<div className="value-orange text-8">8.82</div>
				<div className="value-orange text-8">26.56</div>
			</>
		)
	}

	if (ingredient.engravedCasings) {
		resoursesArr2.push(
			<>
				<div className="resourses-img_6 small"></div>
				<div className="value text-8">{ingredient.engravedCasings}</div>
				<div className="value-orange text-8">8.82</div>
				<div className="value-orange text-8">26.56</div>
			</>
		)
	}
	if (ingredient.plastic) {
		resoursesArr2.push(
			<>
				<div className="resourses-img_7 small"></div>
				<div className="value text-8">{ingredient.plastic}</div>
				<div className="value-orange text-8">8.82</div>
				<div className="value-orange text-8">26.56</div>
			</>
		)
	}






	if (active) {
		return (
			<>
				<div className="item-required">
					<div className="component-image_8 component-image-active" style={itemImg} onClick={() => clickHandler(ingredient.id)}></div>
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
				<div className="item-required-resources-grid">
				<div className="text-7">Ресурсы:</div>
				<div className="text-7">Количество:</div>
				<div className="text-7">Цена:</div>
				<div className="text-7">Стоимость:</div>
				{/* <div className="resourses-img_1 small"></div>
				<div className="value text-8">100</div>
				<div className="value-orange text-8">4.91</div>
				<div className="value-orange text-8">4.91</div>
				<div className="resourses-img_2 small"></div>
				<div className="value text-8">750</div>
				<div className="value-orange text-8">11.04</div>
				<div className="value-orange text-8">22.08</div>
				<div className="resourses-img_8 small"></div>
				<div className="value text-8">150</div>
				<div className="value-orange text-8">8.32</div>
				<div className="value-orange text-8">6.64</div>
				<div className="resourses-img_4 small"></div>
				<div className="value text-8">100</div>
				<div className="value-orange text-8">36.33</div>
				<div className="value-orange text-8">36.33</div> */}
				{resoursesArr2}
				<div className="total-resourses-cost text-7">Общая стоимость ресурсов:</div>
				<div className="value-orange text-8">66.96</div>
			</div>
			</>
		);
	}
	else {
		return (
			<>
				<div className="item-required">
					<div className="component-image_8" style={itemImg} onClick={() => clickHandler(ingredient.id)}></div>
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
				
			</>
		);
	}


};

export default Ingredient;