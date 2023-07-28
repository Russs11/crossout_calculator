import React from 'react';
import './MainCard.scss'



const MainCard = ({ children }) => {
	return (
		<>
			<div className="main-card">
				{children}
			</div>
		</>
	);
};

export default MainCard;