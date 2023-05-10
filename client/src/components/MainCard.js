import React from 'react';
import './MainCard.scss'
import VerticalSeparator from './VerticalSeparator';
import ProductionCost from './ProductionCost';
import ComponentsCost from './ComponentsCost';
import Profit from './Profit';
import ResoursesAvailable from './ResoursesAvailable';


const MainCard = ({ children }) => {
	return (
		<>
			<div className="main-card">
				{children}
				
				<div className="main-card-middle-side">
					<ProductionCost />
					<ComponentsCost />
					<Profit />
				</div>
				<VerticalSeparator />
				<div class="main-card-right-side">
					<ResoursesAvailable />
				</div>
			</div>
		</>
	);
};

export default MainCard;