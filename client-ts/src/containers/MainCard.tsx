import React from 'react';
import './MainCard.scss'


interface IMainCardPropsDto {
children: JSX.Element[];
}

const MainCard = ({ children }: IMainCardPropsDto) => {
	return (
		<>
			<div className="main-card">
				{children}
			</div>
		</>
	);
};

export default MainCard;