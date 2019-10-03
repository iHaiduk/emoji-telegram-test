import React, {FunctionComponent} from "react";
import cs from 'classnames';

import frequently from '../../svg/frequently.svg';
import frequentlyActive from '../../svg/frequentlyActive.svg';
import smile from '../../svg/smile.svg';
import smileActive from '../../svg/smileActive.svg';
import animal from '../../svg/animal.svg';
import animalActive from '../../svg/animalActive.svg';
import food from '../../svg/food.svg';
import foodActive from '../../svg/foodActive.svg';
import sport from '../../svg/sport.svg';
import sportActive from '../../svg/sportActive.svg';
import car from '../../svg/car.svg';
import carActive from '../../svg/carActive.svg';
import object from '../../svg/object.svg';
import objectActive from '../../svg/objectActive.svg';
import flags from '../../svg/flags.svg';
import flagsActive from '../../svg/flagsActive.svg';
import {NavigationComponent} from "../interface";
import style from './style.scss';

function getIcon(index, isActive) {
    switch (index) {
        case 0:
            return isActive ? frequentlyActive : frequently;
        case 1:
            return isActive ? smileActive : smile;
        case 2:
            return isActive ? animalActive : animal;
        case 3:
            return isActive ? foodActive : food;
        case 4:
            return isActive ? sportActive : sport;
        case 5:
            return isActive ? carActive : car;
        case 6:
            return isActive ? objectActive : object;
        case 7:
            return isActive ? flagsActive : flags;
        default:
            return isActive ? smileActive : smile;
    }
}

export const Navigation: FunctionComponent<NavigationComponent> = ({iconsLength, activeIndex = 0, setActiveIndex}) => {
    const icons: any[] = [];
    for (let index = 0; index < iconsLength; index++) {
        const isActive = index === activeIndex;
        const Icon = getIcon(index, isActive);
        icons.push(
            <button
                key={index}
                className={cs(style.icon, {[style.active]: isActive})}
                onClick={() => setActiveIndex(index)}
            >
                <Icon/>
            </button>
        );
    }
    return (
        <div className={style.wrapper}>
            {icons}
        </div>
    );
}

