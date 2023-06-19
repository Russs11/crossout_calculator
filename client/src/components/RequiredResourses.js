import React from 'react';
import './RequiredResourses.scss'
import HorizontalSeparator from './HorizontalSeparator';



const RequiredResourses = ({ component, resourcePrices }) => {

	const resoursesArr = []

	let scrapMetalSellPrice = resourcePrices[0].sellPrice / 100
	let copperSellPrice = resourcePrices[1].sellPrice / 100
	let wiresSellPrice = resourcePrices[2].sellPrice / 100
	let plasticSellPrice = resourcePrices[3].sellPrice / 100
	let batteriesSellPrice = resourcePrices[4].sellPrice / 10
	let electronicsSellPrice = resourcePrices[5].sellPrice / 10
	let engravedCasingsSellPrice = resourcePrices[6].sellPrice / 100

	let scrapMetalCost = component.scrapMetal ? component.scrapMetal * scrapMetalSellPrice : 0
	let copperCost = component.copper ? Math.ceil((component.copper * copperSellPrice) * 100) / 100 : 0
	let wiresCost = component.wires ? Math.ceil((component.wires * wiresSellPrice) * 100) / 100 : 0
	let plasticCost = component.plastic ? Math.ceil((component.plastic * plasticSellPrice) * 100) / 100 : 0
	let batteriesCost = component.batteries ? Math.ceil((component.batteries * batteriesSellPrice) * 100) / 100 : 0
	let electronicsCost = component.electronics ? Math.ceil((component.electronics * electronicsSellPrice) * 100) / 100 : 0
	let engravedCasingsCost = component.engravedCasings ? Math.ceil((component.engravedCasings * engravedCasingsSellPrice) * 100) / 100 : 0

	let totalResoursesСost = scrapMetalCost + copperCost + wiresCost + plasticCost + batteriesCost + electronicsCost + engravedCasingsCost

	if (component.scrapMetal) {
		resoursesArr.push(
			<>
				<div className="resourses-img_1"></div>
				<div className="value text-3">{component.scrapMetal}</div>
				<div className="value-orange text-3">{(scrapMetalSellPrice * 100)}</div>
				<div className="value-orange text-3">{scrapMetalCost}</div>
			</>
		)
	}
	if (component.copper) {
		resoursesArr.push(
			<>
				<div className="resourses-img_3"></div>
				<div className="value text-3">{component.copper}</div>
				<div className="value-orange text-3">{(copperSellPrice * 100)}</div>
				<div className="value-orange text-3">{copperCost}</div>
			</>
		)
	}
	if (component.electronics) {
		resoursesArr.push(
			<>
				<div className="resourses-img_2"></div>
				<div className="value text-3">{component.electronics}</div>
				<div className="value-orange text-3">{(electronicsSellPrice * 10)}</div>
				<div className="value-orange text-3">{electronicsCost}</div>
			</>
		)
	}

	if (component.batteries) {
		resoursesArr.push(
			<>
				<div className="resourses-img_4"></div>
				<div className="value text-3">{component.batteries}</div>
				<div className="value-orange text-3">{(batteriesSellPrice * 10)}</div>
				<div className="value-orange text-3">{batteriesCost}</div>
			</>
		)
	}
	if (component.wires) {
		resoursesArr.push(
			<>
				<div className="resourses-img_5"></div>
				<div className="value text-3">{component.wires}</div>
				<div className="value-orange text-3">{(wiresSellPrice * 100)}</div>
				<div className="value-orange text-3">{wiresCost}</div>
			</>
		)
	}

	if (component.plastic) {
		resoursesArr.push(
			<>
				<div className="resourses-img_7"></div>
				<div className="value text-3">{component.plastic}</div>
				<div className="value-orange text-3">{(plasticSellPrice * 100)}</div>
				<div className="value-orange text-3">{plasticCost}</div>
			</>
		)
	}
	if (component.engravedCasings) {
		resoursesArr.push(
			<>
				<div className="resourses-img_7"></div>
				<div className="value text-3">{component.engravedCasings}</div>
				<div className="value-orange text-3">{(engravedCasingsSellPrice * 100)}</div>
				<div className="value-orange text-3">{engravedCasingsCost}</div>
			</>
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
				<div className="value-orange text-3">{Math.ceil(totalResoursesСost * 100) / 100}</div>
			</div>
		</>
	);
};

export default RequiredResourses;