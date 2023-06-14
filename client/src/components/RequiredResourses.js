import React from 'react';
import './RequiredResourses.scss'
import HorizontalSeparator from './HorizontalSeparator';



const RequiredResourses = ({ component, resourcePrices }) => {
	let scrapMetalSellPrice = resourcePrices[0].sellPrice / 100
	let copperSellPrice = resourcePrices[1].sellPrice / 100
	let wiresSellPrice = resourcePrices[2].sellPrice / 100
	let plasticSellPrice = resourcePrices[3].sellPrice / 100
	let batteriesSellPrice = resourcePrices[4].sellPrice / 10
	let electronicsSellPrice = resourcePrices[5].sellPrice / 10
	let engravedCasingsSellPrice = resourcePrices[6].sellPrice / 100

	let scrapMetalCost = (component.scrapMetal * scrapMetalSellPrice).toFixed(2)
	
	let copperCost = (component.copper * copperSellPrice).toFixed(2)
	
	let wiresCost = (component.wires * wiresSellPrice).toFixed(2)
	
	let plasticCost = (component.plastic * plasticSellPrice).toFixed(2)
	
	let batteriesCost = (component.batteries * batteriesSellPrice).toFixed(2)
	
	let electronicsCost = (component.electronics * electronicsSellPrice).toFixed(2)
	
	let engravedCasingsCost = (component.engravedCasings * engravedCasingsSellPrice).toFixed(2)
	

	let activeResourses = []
	const resoursesArr = []
	let totalResoursesСost = scrapMetalCost + copperCost + wiresCost + plasticCost + batteriesCost + electronicsCost + engravedCasingsCost

	
	
	console.log('component.electronics: ', component.electronics);
	
	console.log('component.batteries: ', component.batteries);

	



	if (component.scrapMetal) {
		activeResourses.push(+scrapMetalCost)
		resoursesArr.push(
			<>
				<div className="resourses-img_1"></div>
				<div className="value text-3">{component.scrapMetal}</div>
				<div className="value-orange text-3">{(scrapMetalSellPrice * 100).toFixed(2)}</div>
				<div className="value-orange text-3">{scrapMetalCost}</div>
			</>
		)
	}
	if (component.copper) {
		activeResourses.push(+copperCost)
		resoursesArr.push(
			<>
				<div className="resourses-img_3"></div>
				<div className="value text-3">{component.copper}</div>
				<div className="value-orange text-3">{(copperSellPrice * 100).toFixed(2)}</div>
				<div className="value-orange text-3">{copperCost}</div>
			</>
		)
	}
	if (component.electronics) {
		activeResourses.push(+electronicsCost)
		resoursesArr.push(
			<>
				<div className="resourses-img_2"></div>
				<div className="value text-3">{component.electronics}</div>
				<div className="value-orange text-3">{(electronicsSellPrice * 10).toFixed(2)}</div>
				<div className="value-orange text-3">{electronicsCost}</div>
			</>
		)
	}

	if (component.batteries) {
		activeResourses.push(+batteriesCost)
		resoursesArr.push(
			<>
				<div className="resourses-img_4"></div>
				<div className="value text-3">{component.batteries}</div>
				<div className="value-orange text-3">{(batteriesSellPrice * 10).toFixed(2)}</div>
				<div className="value-orange text-3">{batteriesCost}</div>
			</>
		)
	}
	if (component.wires) {
		activeResourses.push(+wiresCost)
		resoursesArr.push(
			<>
				<div className="resourses-img_5"></div>
				<div className="value text-3">{component.wires}</div>
				<div className="value-orange text-3">{(wiresSellPrice * 100).toFixed(2)}</div>
				<div className="value-orange text-3">{wiresCost}</div>
			</>
		)
	}

	if (component.plastic) {
		activeResourses.push(+plasticCost)
		resoursesArr.push(
			<>
				<div className="resourses-img_7"></div>
				<div className="value text-3">{component.plastic}</div>
				<div className="value-orange text-3">{(plasticSellPrice * 100).toFixed(2)}</div>
				<div className="value-orange text-3">{plasticCost}</div>
			</>
		)
	}
	if (component.engravedCasings) {
		activeResourses.push(+engravedCasingsCost)
		resoursesArr.push(
			<>
				<div className="resourses-img_7"></div>
				<div className="value text-3">{component.engravedCasings}</div>
				<div className="value-orange text-3">{(engravedCasingsSellPrice * 100).toFixed(2)}</div>
				<div className="value-orange text-3">{engravedCasingsCost}</div>
			</>
		)
	}

	if(activeResourses.length){
		totalResoursesСost = activeResourses.reduce((a, b) => {
			return a + b
		}, 0)
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
				<div className="value-orange text-3">{totalResoursesСost.toFixed(2)}</div>
			</div>
		</>
	);
};

export default RequiredResourses;