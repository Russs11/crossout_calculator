import React from 'react';
import './RequiredResourses.scss'
import { IComponent, IResourcePrices } from '../interfaces/Interfaces';

interface IRequiredResoursesPropsDto {
	component: IComponent;
	resourcePrices: IResourcePrices[];
}

const RequiredResourses = ({ component, resourcePrices }: IRequiredResoursesPropsDto) => {

	const resoursesArr: JSX.Element[] = []

	const scrapMetalSellPrice = resourcePrices[0].sellPrice
	const copperSellPrice = resourcePrices[1].sellPrice
	const wiresSellPrice = resourcePrices[2].sellPrice
	const plasticSellPrice = resourcePrices[3].sellPrice
	const batteriesSellPrice = resourcePrices[4].sellPrice
	const electronicsSellPrice = resourcePrices[5].sellPrice
	const engravedCasingsSellPrice = resourcePrices[6].sellPrice

	const scrapMetalCost = component.scrapMetal ? Math.round((component.scrapMetal * scrapMetalSellPrice / 100) * 100) / 100 : 0
	const copperCost = component.copper ? Math.round((component.copper * copperSellPrice / 100) * 100) / 100 : 0
	const wiresCost = component.wires ? Math.round((component.wires * wiresSellPrice / 100) * 100) / 100 : 0
	const plasticCost = component.plastic ? Math.round((component.plastic * plasticSellPrice / 100) * 100) / 100 : 0
	const batteriesCost = component.batteries ? Math.round((component.batteries * batteriesSellPrice / 10) * 100) / 100 : 0
	const electronicsCost = component.electronics ? Math.round((component.electronics * electronicsSellPrice / 10) * 100) / 100 : 0
	const engravedCasingsCost = component.engravedCasings ? Math.round((component.engravedCasings * engravedCasingsSellPrice) * 100) / 100 : 0

	const totalResoursesСost = Math.round((scrapMetalCost + copperCost + wiresCost + plasticCost + batteriesCost + electronicsCost + engravedCasingsCost) * 100) / 100




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
				<div className="value-orange text-3">{electronicsCost}</div>
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
				<div className="value-orange text-3">{totalResoursesСost}</div>
			</div>
		</>
	);
};

export default RequiredResourses;