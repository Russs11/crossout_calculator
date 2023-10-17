import React from 'react';
import './ResoursesAvailableWrapper.scss'

interface IResoursesAvailableWrapperPropsDto {
	children: JSX.Element;
}

const ResoursesAvailableWrapper = ({ children }: IResoursesAvailableWrapperPropsDto) => {
	return (
		<>
			<div className="main-card-right-side">
				{children}
			</div>
		</>
	);
};

export default ResoursesAvailableWrapper;