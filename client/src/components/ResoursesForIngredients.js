import React from 'react';
import HorizontalSeparator from './HorizontalSeparator';
// import './RequiredResourses.scss'


const ResoursesForIngredients = ({ ingredient, resourcePrices, active }) => {

	const resoursesArr2 = []

	let scrapMetalSellPrice = resourcePrices[0].sellPrice / 100
	let copperSellPrice = resourcePrices[1].sellPrice / 100
	let wiresSellPrice = resourcePrices[2].sellPrice / 100
	let plasticSellPrice = resourcePrices[3].sellPrice / 100
	let batteriesSellPrice = resourcePrices[4].sellPrice / 10
	let electronicsSellPrice = resourcePrices[5].sellPrice / 10
	let engravedCasingsSellPrice = resourcePrices[6].sellPrice / 100

	let scrapMetalCost = (ingredient.scrapMetal * scrapMetalSellPrice).toFixed(2)
	console.log('scrapMetalCost: ', scrapMetalCost);
	let copperCost = (ingredient.copper * copperSellPrice).toFixed(2)
	console.log('copperCost: ', copperCost);
	let wiresCost = (ingredient.wires * wiresSellPrice).toFixed(2)
	console.log('wiresCost: ', wiresCost);
	let plasticCost = (ingredient.plastic * plasticSellPrice).toFixed(2)
	console.log('plasticCost: ', plasticCost);
	let batteriesCost = (ingredient.batteries * batteriesSellPrice).toFixed(2)
	console.log('batteriesCost: ', batteriesCost);
	let electronicsCost = (ingredient.electronics * electronicsSellPrice).toFixed(2)
	console.log('electronicsCost: ', electronicsCost);
	let engravedCasingsCost = (ingredient.engravedCasings * engravedCasingsSellPrice).toFixed(2)
	console.log('engravedCasingsCost: ', engravedCasingsCost);
	// console.log('resoursePrices', resourcePrices);
	let totalResoursesСost = Number(scrapMetalCost) + Number(copperCost) + Number(wiresCost) + Number(plasticCost) + Number(batteriesCost) + Number(electronicsCost) + Number(engravedCasingsCost);
	console.log('totalResoursesСost: ', totalResoursesСost);

	if (ingredient.scrapMetal) {
		resoursesArr2.push(
			<>
				<div className="resourses-img_1 small"></div>
				<div className="value text-8">{ingredient.scrapMetal ? ingredient.scrapMetal : null}</div>
				<div className="value-orange text-8">{(scrapMetalSellPrice * 100).toFixed(2)}</div>
				<div className="value-orange text-8">{scrapMetalCost}</div>
			</>
		)
	}
	if (ingredient.copper) {
		resoursesArr2.push(
			<>
				<div className="resourses-img_3 small"></div>
				<div className="value text-8">{ingredient.copper}</div>
				<div className="value-orange text-8">{(copperSellPrice * 100).toFixed(2)}</div>
				<div className="value-orange text-8">{copperCost}</div>
			</>
		)
	}
	if (ingredient.electronics) {
		resoursesArr2.push(
			<>
				<div className="resourses-img_2 small"></div>
				<div className="value text-8">{ingredient.electronics}</div>
				<div className="value-orange text-8">{(electronicsSellPrice * 10).toFixed(2)}</div>
				<div className="value-orange text-8">{electronicsCost}</div>
			</>
		)
	}
	if (ingredient.batteries) {
		resoursesArr2.push(
			<>
				<div className="resourses-img_4 small"></div>
				<div className="value text-8">{ingredient.batteries}</div>
				<div className="value-orange text-8">{(batteriesSellPrice * 10).toFixed(2)}</div>
				<div className="value-orange text-8">{batteriesCost}</div>
			</>
		)
	}
	if (ingredient.wires) {
		resoursesArr2.push(
			<>
				<div className="resourses-img_5 small"></div>
				<div className="value text-8">{ingredient.wires}</div>
				<div className="value-orange text-8">{(wiresSellPrice * 100).toFixed(2)}</div>
				<div className="value-orange text-8">{wiresCost}</div>
			</>
		)
	}

	if (ingredient.plastic) {
		resoursesArr2.push(
			<>
				<div className="resourses-img_7 small"></div>
				<div className="value text-8">{ingredient.plastic}</div>
				<div className="value-orange text-8">{(plasticSellPrice * 100).toFixed(2)}</div>
				<div className="value-orange text-8">{plasticCost}</div>
			</>
		)
	}
	if (ingredient.engravedCasings) {
		resoursesArr2.push(
			<>
				<div className="resourses-img_6 small"></div>
				<div className="value text-8">{ingredient.engravedCasings}</div>
				<div className="value-orange text-8">{(engravedCasingsSellPrice * 10).toFixed(2)}</div>
				<div className="value-orange text-8">{engravedCasingsCost}</div>
			</>
		)
	}
	if (active) {
		return (
			<>
				<div className="item-required-resources-grid animated">
					<div className="text-7">Ресурсы:</div>
					<div className="text-7">Количество:</div>
					<div className="text-7">Цена:</div>
					<div className="text-7">Стоимость:</div>
					{resoursesArr2}
					<div className="total-resourses-cost text-7">Общая стоимость ресурсов:</div>
					<div className="value-orange text-8">{totalResoursesСost.toFixed(2)}</div>
				</div>
				<HorizontalSeparator />
			</>
		);
	}
	return (
		<>
			<div className="invisible"></div>
			{/* <HorizontalSeparator/> */}
		</>
	);

};

export default ResoursesForIngredients;