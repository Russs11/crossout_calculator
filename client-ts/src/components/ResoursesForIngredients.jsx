import React from 'react';
import HorizontalSeparator from './HorizontalSeparator';
// import './RequiredResourses.scss'


const ResoursesForIngredients = ({ ingredient, resourcePrices, active }) => {

	const resoursesArr2 = []

	let scrapMetalSellPrice = resourcePrices[0].sellPrice
	let copperSellPrice = resourcePrices[1].sellPrice
	let wiresSellPrice = resourcePrices[2].sellPrice
	let plasticSellPrice = resourcePrices[3].sellPrice
	let batteriesSellPrice = resourcePrices[4].sellPrice
	let electronicsSellPrice = resourcePrices[5].sellPrice
	let engravedCasingsSellPrice = resourcePrices[6].sellPrice

	let scrapMetalCost = ingredient.scrapMetal ? Math.round((ingredient.scrapMetal * scrapMetalSellPrice / 100) * 100) / 100 : 0
	let copperCost = ingredient.copper ? Math.round((ingredient.copper * copperSellPrice / 100) * 100) / 100 : 0
	let wiresCost = ingredient.wires ? Math.round((ingredient.wires * wiresSellPrice / 100) * 100) / 100 : 0
	let plasticCost = ingredient.plastic ? Math.round((ingredient.plastic * plasticSellPrice / 100) * 100) / 100 : 0
	let batteriesCost = ingredient.batteries ? Math.round((ingredient.batteries * batteriesSellPrice / 10) * 100) / 100 : 0
	let electronicsCost = ingredient.electronics ? Math.round((ingredient.electronics * electronicsSellPrice / 10) * 100) / 100 : 0
	let engravedCasingsCost = ingredient.engravedCasings ? Math.round((ingredient.engravedCasings * engravedCasingsSellPrice / 100) * 100) / 100 : 0

	let totalResoursesСost = scrapMetalCost + copperCost + wiresCost + plasticCost + batteriesCost + electronicsCost + engravedCasingsCost



	if (ingredient.scrapMetal) {
		resoursesArr2.push(
			<React.Fragment key={resourcePrices[0].dbId}>
				<div className="scrapmetal small"></div>
				<div className="value text-8">{ingredient.scrapMetal ? ingredient.scrapMetal : null}</div>
				<div className="value-orange text-8">{scrapMetalSellPrice}</div>
				<div className="value-orange text-8">{scrapMetalCost}</div>
			</React.Fragment>
		)
	}
	if (ingredient.copper) {
		resoursesArr2.push(
			<React.Fragment key={resourcePrices[1].dbId}>
				<div className="copper small"></div>
				<div className="value text-8">{ingredient.copper}</div>
				<div className="value-orange text-8">{copperSellPrice}</div>
				<div className="value-orange text-8">{copperCost}</div>
			</React.Fragment>
		)
	}
	if (ingredient.wires) {
		resoursesArr2.push(
			<React.Fragment key={resourcePrices[2].dbId}>
				<div className="wires small"></div>
				<div className="value text-8">{ingredient.wires}</div>
				<div className="value-orange text-8">{wiresSellPrice}</div>
				<div className="value-orange text-8">{wiresCost}</div>
			</React.Fragment>
		)
	}
	if (ingredient.plastic) {
		resoursesArr2.push(
			<React.Fragment key={resourcePrices[3].dbId}>
				<div className="plastic small"></div>
				<div className="value text-8">{ingredient.plastic}</div>
				<div className="value-orange text-8">{plasticSellPrice}</div>
				<div className="value-orange text-8">{plasticCost}</div>
			</React.Fragment>
		)
	}
	if (ingredient.batteries) {
		resoursesArr2.push(
			<React.Fragment key={resourcePrices[4].dbId}>
				<div className="batteries small"></div>
				<div className="value text-8">{ingredient.batteries}</div>
				<div className="value-orange text-8">{batteriesSellPrice}</div>
				<div className="value-orange text-8">{batteriesCost}</div>
			</React.Fragment>
		)
	}
	if (ingredient.electronics) {
		resoursesArr2.push(
			<React.Fragment key={resourcePrices[5].dbId}>
				<div className="electronics small"></div>
				<div className="value text-8">{ingredient.electronics}</div>
				<div className="value-orange text-8">{electronicsSellPrice}</div>
				<div className="value-orange text-8">{electronicsCost}</div>
			</React.Fragment>
		)
	}

	if (ingredient.engravedCasings) {
		resoursesArr2.push(
			<React.Fragment key={resourcePrices[6].dbId}>
				<div className="engravedcasings small"></div>
				<div className="value text-8">{ingredient.engravedCasings}</div>
				<div className="value-orange text-8">{engravedCasingsSellPrice}</div>
				<div className="value-orange text-8">{engravedCasingsCost}</div>
			</React.Fragment>
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
					<div className="value-orange text-8">{Math.round(totalResoursesСost * 100) / 100}</div>
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