import React from 'react';
import './ResoursesAvailable.scss'
import HorizontalSeparator from './HorizontalSeparator';


const ResoursesAvailable = () => {

    let scrapmetalInput = ''
    function inputClickHandler(event) {
        scrapmetalInput = event.target.value
        // console.log(event.target.value);
    }
    console.log('scrapmetalInput', scrapmetalInput);



    return (
        <>
            <div className="resourses-available">
                <div className="resourses-available-title text-4">Ресурсы и компоненты в наличии:</div>
                <div className="resourses-grid">
                    <div className="text-5">Ресурсы:</div>
                    <div className="text-5">Количество:</div>
                    <div className="resourses-img_1"></div>
                    <input type="text" className="value text-3 rectangle" onChange={inputClickHandler}></input>
                    <div className="resourses-img_2"></div>
                    <input type="text" className="value text-3 rectangle"></input>
                    <div className="resourses-img_3"></div>
                    <input type="text" className="value text-3 rectangle"></input>
                    <div className="resourses-img_4"></div>
                    <input type="text" className="value text-3 rectangle"></input>
                    <div className="resourses-img_5"></div>
                    <input type="text" className="value text-3 rectangle"></input>
                    <div className="resourses-img_6"></div>
                    <input type="text" className="value text-3 rectangle"></input>
                    <div className="text-5">Стоимость:</div>
                    <div className="value-orange text-3">2704</div>
                </div>
                <div className="components-grid">
                    <div className="text-5">Компоненты:</div>
                    <div className="text-5">Количество:</div>
                    <div className="component-image_8 small-component-img"></div>
                    <div className="value text-3 rectangle">2</div>
                    <div className="component-img-small_2 small-component-img"></div>
                    <div className="value text-3 rectangle">1</div>
                    <div className="component-img-small_3 small-component-img"></div>
                    <div className="value text-3 rectangle">0</div>
                    <div className="text-5">Стоимость:</div>
                    <div className="value-orange text-3">2123</div>
                </div>
                <HorizontalSeparator />
            </div>
        </>
    );
};

export default ResoursesAvailable;