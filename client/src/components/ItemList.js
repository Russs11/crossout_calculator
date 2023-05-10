import React from 'react';
import './ItemList.scss'
import Item from './Item';

const ItemList = ({ children }) => {



	
	return (
		<div>
			<div className="components">
				<div className="components-title">Компоненты</div>
				<div className="components-wrapper">
				{children}
				
				</div>
			</div>
		</div>
	);
};

export default ItemList;