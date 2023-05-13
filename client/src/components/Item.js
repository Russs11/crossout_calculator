import React from 'react';
import './Item.scss'
import { useState } from 'react';


const Item = ({ id, active, handleClick }) => {


	if (active) {
		return (
			<div>
				<div className="component-image component-image-active" onClick={() => handleClick(id)} >{id}</div>
			</div>
		);
	}
	else {
		return (
			<div>
				<div className="component-image " onClick={() => handleClick(id)} >{id}</div>
			</div>
		);
	}
};

export default Item;