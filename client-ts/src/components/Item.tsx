import React, { StyleHTMLAttributes } from 'react';
import './Item.scss'
import { useState } from 'react';

interface IItemPropsDto{
	id: number;
	active: boolean;
	handleClick: (id: number) => void;
	img: string;
}

const Item = ({ id, active, handleClick, img }: IItemPropsDto) => {

	const itemImg: {} = {
		backgroundImage: 'url(' + img + ')'
	}

	if (active) {
		return (
			<>
				<div className="component-image component-image-active" style={itemImg}></div>
			</>
		);
	}
	else {
		return (
			<>
				<div className="component-image " style={itemImg} onClick={() => handleClick(id)}></div >
			</>
		);
	}
};

export default Item;