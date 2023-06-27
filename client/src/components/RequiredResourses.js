import React from 'react';
import './RequiredResourses.scss'
import HorizontalSeparator from './HorizontalSeparator';



const RequiredResourses = ({ component, resourcePrices }) => {
	
	const resoursesArr = []

	let scrapMetalSellPrice = resourcePrices[0].sellPrice
	let copperSellPrice = resourcePrices[1].sellPrice
	let wiresSellPrice = resourcePrices[2].sellPrice
	let plasticSellPrice = resourcePrices[3].sellPrice
	let batteriesSellPrice = resourcePrices[4].sellPrice 
	let electronicsSellPrice = resourcePrices[5].sellPrice 
	let engravedCasingsSellPrice = resourcePrices[6].sellPrice

	let scrapMetalCost = component.scrapMetal ? Math.round((component.scrapMetal * scrapMetalSellPrice / 100) * 100) / 100 : 0
	let copperCost = component.copper ? Math.round((component.copper * copperSellPrice / 100) * 100) / 100 : 0
	let wiresCost = component.wires ? Math.round((component.wires * wiresSellPrice /100) * 100) / 100 : 0
	let plasticCost = component.plastic ? Math.round((component.plastic * plasticSellPrice / 100) * 100) / 100 : 0
	let batteriesCost = component.batteries ? Math.round((component.batteries * batteriesSellPrice / 10) * 100) / 100 : 0
	let electronicsCost = component.electronics ? Math.round((component.electronics * electronicsSellPrice / 10) * 100) / 100 : 0
	let engravedCasingsCost = component.engravedCasings ? Math.round((component.engravedCasings * engravedCasingsSellPrice) * 100) / 100 : 0

	let totalResoursesСost = scrapMetalCost + copperCost + wiresCost + plasticCost + batteriesCost + electronicsCost + engravedCasingsCost




	if (component.scrapMetal) {
		resoursesArr.push(
			<React.Fragment key={resourcePrices[0].dbId}>
				<div className="scrapmetal"></div>
				<div className="value text-3">{component.scrapMetal}</div>
				<div className="value-orange text-3">{scrapMetalSellPrice}</div>
				<div className="value-orange text-3">{scrapMetalCost}</div>
			</React.Fragment>
		)
	}
	if (component.copper) {
		resoursesArr.push(
			<React.Fragment key={resourcePrices[1].dbId}>
				<div className="copper"></div>
				<div className="value text-3">{component.copper}</div>
				<div className="value-orange text-3">{copperSellPrice}</div>
				<div className="value-orange text-3">{copperCost}</div>
			</React.Fragment>
		)
	}
	if (component.wires) {
		resoursesArr.push(
			<React.Fragment key={resourcePrices[2].dbId}>
				<div className="wires"></div>
				<div className="value text-3">{component.wires}</div>
				<div className="value-orange text-3">{wiresSellPrice}</div>
				<div className="value-orange text-3">{wiresCost}</div>
			</React.Fragment>
		)
	}
	if (component.plastic) {
		resoursesArr.push(
			<React.Fragment key={resourcePrices[3].dbId}>
				<div className="plastic"></div>
				<div className="value text-3">{component.plastic}</div>
				<div className="value-orange text-3">{plasticSellPrice}</div>
				<div className="value-orange text-3">{plasticCost}</div>
			</React.Fragment>
		)
	}
	if (component.batteries) {
		resoursesArr.push(
			<React.Fragment key={resourcePrices[4].dbId}>
				<div className="batteries"></div>
				<div className="value text-3">{component.batteries}</div>
				<div className="value-orange text-3">{batteriesSellPrice}</div>
				<div className="value-orange text-3">{batteriesCost}</div>
			</React.Fragment>
		)
	}
	if (component.electronics) {
		resoursesArr.push(
			<React.Fragment key={resourcePrices[5].dbId}>
				<div className="electronics"></div>
				<div className="value text-3">{component.electronics}</div>
				<div className="value-orange text-3">{electronicsSellPrice}</div>
				<div className="value-orange text-3">{electronicsCost }</div>
			</React.Fragment>
		)
	}

	if (component.engravedCasings) {
		resoursesArr.push(
			<React.Fragment key={resourcePrices[6].dbId}>
				<div className="engravedcasigs"></div>
				<div className="value text-3">{component.engravedCasings}</div>
				<div className="value-orange text-3">{engravedCasingsSellPrice}</div>
				<div className="value-orange text-3">{engravedCasingsCost}</div>
			</React.Fragment>
		)
	}

	return (
		<>
			<div className="production-requirements-grid">
				<div className="text-5">Ресурсы:</div>
				<div className="text-5">Количество:</div>
				<div className="text-5">Цена:</div>
				<div className="text-5">Стоимость:</div>
				{component && resoursesArr}
				<div className="total-resourses-cost text-5">Общая стоимость ресурсов:</div>
				<div className="value-orange text-3">{Math.round((totalResoursesСost) * 100) / 100}</div>
			</div>
		</>
	);
};

export default RequiredResourses;