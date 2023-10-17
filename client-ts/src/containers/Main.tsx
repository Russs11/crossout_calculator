import React from 'react';
import "./Main.scss"

interface IMainPropsDto{
    children: JSX.Element[];
}

const Main = ({ children }: IMainPropsDto) => {
    return (
        <>
            <div className="main">
                {children}
            </div>
        </>
    );
};

export default Main;