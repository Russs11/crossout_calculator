import React from 'react';
import './MainCard.scss'


const MainCard = ({ children }) => {
	return (
		<>
			<div className="main-card">
				<div className="main-card-left-side">
					{children}	
				</div>
			</div>
		</>
	);
};

export default MainCard;