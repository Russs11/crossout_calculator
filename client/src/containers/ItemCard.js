import React from 'react';
import './ItemCard.scss'


const ItemCard = ({ children }) => {
	return (
		<>
			<div className="main-card-left-side">
				{children}
			</div>
		</>
	);
};

export default ItemCard;