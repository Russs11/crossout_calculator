import React from 'react';
import './ItemCard.scss'

interface IItemCardPropsDto {
	children: JSX.Element[];
}

const ItemCard = ({ children }: IItemCardPropsDto) => {
	return (
		<>
			<div className="main-card-left-side">
				{children}
			</div>
		</>
	);
};

export default ItemCard;