import React from 'react';
import './MainCard.scss'
import VerticalSeparator from './VerticalSeparator';
import ResoursesAvailable from './ResoursesAvailable';


const MainCard = ({ children }) => {
	return (
		<>
			<div className="main-card">
				{children}
				
				<VerticalSeparator />
				<div class="main-card-right-side">
					<ResoursesAvailable />
				</div>
			</div>
		</>
	);
};

export default MainCard;