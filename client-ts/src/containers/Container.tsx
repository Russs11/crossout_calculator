import React, { ReactElement } from 'react';
import "./Container.scss"

interface IConteinerPropsDto {
    children: JSX.Element[];
}

const Container = ({ children }: IConteinerPropsDto) => {
    return (
        <div className='container'>
            {children}
        </div>
    );
};

export default Container;