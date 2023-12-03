import React, { ReactElement, ReactFragment } from 'react';
import './ResoursesAvailable.scss'
import HorizontalSeparator from './HorizontalSeparator';
import { IComponent, IIngridientsFromInput, IResourcePrices, IResourcesFromInput } from '../interfaces/Interfaces';

interface IResoursesAvailabale {
    resoursesFromInput: IResourcesFromInput;
    setResoursesFromInput: React.Dispatch<React.SetStateAction<IResourcesFromInput>>;
    component: IComponent;
    resourcePrices: IResourcePrices[];
    ingredientsFromInput: IIngridientsFromInput[];
    setIngredientsFromInput: React.Dispatch<React.SetStateAction<IIngridientsFromInput[]>>
}

const ResoursesAvailable = ({ resoursesFromInput, setResoursesFromInput, component, resourcePrices, setIngredientsFromInput, ingredientsFromInput }: IResoursesAvailabale) => {

    let renderIngredientsArr: ReactElement[] = []
    let localIngredientsArr = [...new Set(component.ingredients)];

    let scrapMetalSellPrice = resourcePrices[0].sellPrice
    let copperSellPrice = resourcePrices[1].sellPrice
    let wiresSellPrice = resourcePrices[2].sellPrice
    let plasticSellPrice = resourcePrices[3].sellPrice
    let batteriesSellPrice = resourcePrices[4].sellPrice
    let electronicsSellPrice = resourcePrices[5].sellPrice
    let engravedCasingsSellPrice = resourcePrices[6].sellPrice



    let scrapMetalCost = resoursesFromInput.scrapMetal ? Math.round((resoursesFromInput.scrapMetal * scrapMetalSellPrice / 100) * 100) / 100 : 0
    let copperCost = resoursesFromInput.copper ? Math.round((resoursesFromInput.copper * copperSellPrice / 100) * 100) / 100 : 0
    let wiresCost = resoursesFromInput.wires ? Math.round((resoursesFromInput.wires * wiresSellPrice / 100) * 100) / 100 : 0
    let plasticCost = resoursesFromInput.plastic ? Math.round((resoursesFromInput.plastic * plasticSellPrice / 100) * 100) / 100 : 0
    let batteriesCost = resoursesFromInput.batteries ? Math.round((resoursesFromInput.batteries * batteriesSellPrice / 100) * 100) / 100 : 0
    let electronicsCost = resoursesFromInput.electronics ? Math.round((resoursesFromInput.electronics * electronicsSellPrice / 100) * 100) / 100 : 0
    let engravedCasingsCost = resoursesFromInput.engravedCasings ? Math.round((resoursesFromInput.engravedCasings * engravedCasingsSellPrice / 100) * 100) / 100 : 0



    let resoursesCost = scrapMetalCost + copperCost + wiresCost + plasticCost + batteriesCost + electronicsCost + engravedCasingsCost


    let ingridientFromInputPrice: number = 0


    function inputScrapMetalHandler(event: React.ChangeEvent<HTMLInputElement>) {
        setResoursesFromInput((prev) => {
            return Object.assign({ ...prev, scrapMetal: +event.target.value })
        });
    }
    function inputCopperHandler(event: React.ChangeEvent<HTMLInputElement>) {
        setResoursesFromInput((prev) => {
            return Object.assign({ ...prev, copper: +event.target.value })
        });
    }
    function inputWiresHandler(event: React.ChangeEvent<HTMLInputElement>) {
        setResoursesFromInput((prev) => {
            return Object.assign({ ...prev, wires: +event.target.value })
        });
    }
    function inputElectronicsHandler(event: React.ChangeEvent<HTMLInputElement>) {
        setResoursesFromInput((prev) => {
            return Object.assign({ ...prev, electronics: +event.target.value })
        });
    }
    function inputBatteriesHandler(event: React.ChangeEvent<HTMLInputElement>) {
        setResoursesFromInput((prev) => {
            return Object.assign({ ...prev, batteries: +event.target.value })
        });
    }
    function inputPlasticHandler(event: React.ChangeEvent<HTMLInputElement>) {
        setResoursesFromInput((prev) => {
            return Object.assign({ ...prev, plastic: +event.target.value })
        });
    }
    function inputEngravedCasingsHandler(event: React.ChangeEvent<HTMLInputElement>) {
        setResoursesFromInput((prev) => {
            return Object.assign({ ...prev, engravedCasings: +event.target.value })
        });
    }

    function inputIngredient(id: number, event: React.ChangeEvent<HTMLInputElement>): void {

        const isNumber = (value: number | string): number | null => {

            const numberValue = Number(value)
            if (numberValue || numberValue === 0) {
                return numberValue;
            }
            return null
        }
        const obj: IIngridientsFromInput = {
            id: id,
            count: isNumber(event.target.value)
        }
        if (obj.count !== null) {
            if (!ingredientsFromInput.length) {
                setIngredientsFromInput(() => {
                    const newState: IIngridientsFromInput[] = []
                    newState.push(obj)
                    // console.log('1', obj);
                    return newState
                })
            } else {
                setIngredientsFromInput((prev: IIngridientsFromInput[]) => {
                    const newState = [...prev]
                    let isMatch = false
                    newState.forEach(item => {
                        if (item.id === obj.id) {
                            item.count = obj.count
                            isMatch = true
                        }
                    });
                    if (!isMatch) {
                        newState.push(obj);
                    }
                    // console.log('newState', newState);
                    return newState
                })
            }
        }
    }



    renderIngredientsArr = localIngredientsArr.map((item) => {
        let count: number | null = 0
        ingredientsFromInput.forEach(obj => {
            if (obj.id === item.id && count !== null) {
                count = obj.count
                if(count!== null){
                    ingridientFromInputPrice += item.sellPrice * count
                }
            }
        })
        console.log('ingridientFromInputPrice', ingridientFromInputPrice);
        return (
            <React.Fragment key={item.name}>
                <div className="component-image_8 small-component-img"
                    style={{ backgroundImage: "url(" + item.img + ")" }}></div>
                <input className="value text-3 input"
                    type="text"
                    placeholder="0"
                    value={count}
                    onChange={(event) => inputIngredient(item.id, event)}
                >
                </input>
            </React.Fragment>
        )
    })
    // console.log(resoursesFromInput);



    return (
        <>
            <div className="resourses-available">
                <div className="resourses-available-title text-4">Ресурсы и компоненты в наличии:</div>
                <div className="resourses-grid">
                    <div className="text-5">Ресурсы:</div>
                    <div className="text-5">Количество:</div>
                    <div className="scrapmetal"></div>
                    <input className="value text-3 input"
                        type='text'
                        placeholder={resoursesFromInput.scrapMetal.toString()}
                        value={resoursesFromInput.scrapMetal !== 0 ? resoursesFromInput.scrapMetal : ''}
                        onChange={inputScrapMetalHandler}>
                    </input>
                    <div className="electronics"></div>
                    <input className="value text-3 input"
                        type="text"
                        placeholder={resoursesFromInput.electronics.toString()}
                        value={resoursesFromInput.electronics !== 0 ? resoursesFromInput.electronics : ''}
                        onChange={inputElectronicsHandler}>
                    </input>
                    <div className="copper"></div>
                    <input className="value text-3 input"
                        type="text"
                        placeholder={resoursesFromInput.copper.toString()}
                        value={resoursesFromInput.copper !== 0 ? resoursesFromInput.copper : ''}
                        onChange={inputCopperHandler}>
                    </input>
                    <div className="batteries"></div>
                    <input className="value text-3 input"
                        type="text"
                        placeholder={resoursesFromInput.batteries.toString()}
                        value={resoursesFromInput.batteries !== 0 ? resoursesFromInput.batteries : ''}
                        onChange={inputBatteriesHandler}>
                    </input>
                    <div className="wires"></div>
                    <input className="value text-3 input"
                        type="text"
                        placeholder={resoursesFromInput.wires.toString()}
                        value={resoursesFromInput.wires !== 0 ? resoursesFromInput.wires : ''}
                        onChange={inputWiresHandler}>
                    </input>
                    <div className="engravedcasings"></div>
                    <input className="value text-3 input"
                        type="text"
                        placeholder={resoursesFromInput.engravedCasings.toString()}
                        value={resoursesFromInput.engravedCasings !== 0 ? resoursesFromInput.engravedCasings : ''}
                        onChange={inputEngravedCasingsHandler}>
                    </input>
                    <div className="plastic"></div>
                    <input className="value text-3 input"
                        type="text"
                        placeholder={resoursesFromInput.plastic.toString()}
                        value={resoursesFromInput.plastic !== 0 ? resoursesFromInput.plastic : ''}
                        onChange={inputPlasticHandler}>
                    </input>
                    <div className="text-5">Стоимость:</div>
                    <div className="value-orange text-3">{resoursesCost ? Math.round(resoursesCost * 100) / 100 : 0}</div>
                </div>
                <div className="components-grid">
                    <div className="text-5">Компоненты:</div>
                    <div className="text-5">Количество:</div>
                    {renderIngredientsArr}
                    <div className="text-5">Стоимость:</div>
                    <div className="value-orange text-3">{Math.round(ingridientFromInputPrice * 100) / 100}</div>
                </div>
                <HorizontalSeparator />
            </div>
        </>
    );
};

export default ResoursesAvailable;