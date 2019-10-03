import React, {FunctionComponent} from "react";

import {Icon} from "../Icon";
import {IconsBlockComponent} from "../interface";
import s from "./style.scss";

export const IconsBlock: FunctionComponent<IconsBlockComponent> = ({icons, name, style}) => {
    return (
        <li style={style}>
            <p className={s.title}>{name}</p>
            <ul>
                {icons.map((item) => (
                   <Icon key={item.id} {...item} />
                ))}
            </ul>
        </li>
    )
}

