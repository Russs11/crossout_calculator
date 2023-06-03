import React from 'react';
// import './RequiredResourses.scss'


const ResoursesForIngredients = ({ ingredient, active }) => {
	
	console.log('ingredient', ingredient.scrapMetal);
	const resoursesArr2 = []

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
	if(active){
		return (
		<>
			<div className="item-required-resources-grid animated">
				<div className="text-7">Ресурсы:</div>
				<div className="text-7">Количество:</div>
				<div className="text-7">Цена:</div>
				<div className="text-7">Стоимость:</div>
				{resoursesArr2}
				<div className="total-resourses-cost text-7">Общая стоимость ресурсов:</div>
				<div className="value-orange text-8">66.96</div>
			</div>
		</>
	);
	}
	return (
		<>
			<div className="invisible">
			</div>
		</>
	);
	
};

export default ResoursesForIngredients;