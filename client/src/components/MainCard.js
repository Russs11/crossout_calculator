import React from 'react';
import './MainCard.scss'
import VerticalSeparator from './VerticalSeparator';


const MainCard = ({ children }) => {
	return (
		<>
			<div className="main-card">
				<div className="main-card-left-side">
					{children}
				</div>
				<VerticalSeparator/>
			</div>
		</>
	);
};

export default MainCard;