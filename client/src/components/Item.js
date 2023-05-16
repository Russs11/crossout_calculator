import React from 'react';
import './Item.scss'
import { useState } from 'react';


const Item = ({ id, active, handleClick }) => {

	if (active) {
		return (
			<>
				<div className="component-image component-image-active" onClick={() => handleClick(id)} >{id}</div>
			</>
		);
	}
	else {
		return (
			<>
				<div className="component-image " onClick={() => handleClick(id)} >{id}</div>
			</>
		);
	}
};

export default Item;