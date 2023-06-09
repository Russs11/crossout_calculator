import React from 'react';
import './RequiredResourses.scss'
import HorizontalSeparator from './HorizontalSeparator';



const RequiredResourses = ({ component, resourcePrices }) => {
	let scrapMetalSellPrice = resourcePrices[0].sellPrice / 100
	let copperSellPrice = resourcePrices[0].sellPrice / 100
	const resoursesArr = []

	if (component.scrapMetal) {
		resoursesArr.push(
			<>
				<div className="resourses-img_1"></div>
				<div className="value text-3">{component.scrapMetal}</div>
				<div className="value-orange text-3">{scrapMetalSellPrice * 100}</div>
				<div className="value-orange text-3">{component.scrapMetal * scrapMetalSellPrice}</div>
			</>
		)
	}
	if (component.electronics) {
		resoursesArr.push(
			<>
				<div className="resourses-img_2"></div>
				<div className="value text-3">{component.electronics}</div>
				<div className="value-orange text-3">4.91</div>
				<div className="value-orange text-3">10</div>
			</>
		)
	}
	if (component.copper) {
		resoursesArr.push(
			<>
				<div className="resourses-img_3"></div>
				<div className="value text-3">{component.copper}</div>
				<div className="value-orange text-3">{copperSellPrice * 100}</div>
				<div className="value-orange text-3">{(component.copper * copperSellPrice).toFixed(2)}</div>
			</>
		)
	}
	if (component.batteries) {
		resoursesArr.push(
			<>
				<div className="resourses-img_4"></div>
				<div className="value text-3">{component.batteries}</div>
				<div className="value-orange text-3">3.32</div>
				<div className="value-orange text-3">26.56</div>
			</>
		)
	}
	if (component.wires) {
		resoursesArr.push(
			<>
				<div className="resourses-img_5"></div>
				<div className="value text-3">{component.wires}</div>
				<div className="value-orange text-3">3.32</div>
				<div className="value-orange text-3">26.56</div>
			</>
		)
	}

	if (component.engravedCasings) {
		resoursesArr.push(
			<>
				<div className="resourses-img_6"></div>
				<div className="value text-3">{component.engravedCasings}</div>
				<div className="value-orange text-3">3.32</div>
				<div className="value-orange text-3">26.56</div>
			</>
		)
	}
	if (component.plastic) {
		resoursesArr.push(
			<>
				<div className="resourses-img_7"></div>
				<div className="value text-3">{component.plastic}</div>
				<div className="value-orange text-3">3.32</div>
				<div className="value-orange text-3">26.56</div>
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
				<div className="value-orange text-3">3540.72</div>
			</div>
		</>
	);
};

export default RequiredResourses;