import React, {FunctionComponent} from "react";

import {IconComponent} from "../interface";
import s from './style.scss';

export const Icon: FunctionComponent<IconComponent> = ({id, icon, name}) => {
    return (
        <li key={id} className={s.item}>
            <button className={s.icon} title={name}>
                {icon}
            </button>
        </li>
    )
}

