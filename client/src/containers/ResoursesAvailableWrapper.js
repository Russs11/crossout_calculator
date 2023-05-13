import React from 'react';
import './ResoursesAvailableWrapper.scss'


const ResoursesAvailableWrapper = ({ children }) => {
	return (
		<>
			<div className="main-card-right-side">
				{children}
			</div>
		</>
	);
};

export default ResoursesAvailableWrapper;