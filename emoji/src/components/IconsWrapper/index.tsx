import React, {FunctionComponent} from "react";
import VirtualList from "react-tiny-virtual-list";

import {IconsBlock} from "../IconsBlock";
import {getCategoryHeight} from "../../utils";
import {IconsWrapperComponent} from "../interface";
import s from './style.scss';

export const IconsWrapper: FunctionComponent<IconsWrapperComponent> = ({icons, activeIndex}) => (
    <ul className={s.wrapper}>
        <VirtualList
            width='100%'
            height={330}
            scrollToIndex={activeIndex}
            itemCount={icons.length}
            itemSize={getCategoryHeight(icons)}
            renderItem={({index, style}) => (
                <IconsBlock key={icons[index].id} style={style} {...icons[index]} />
            )}
        />
    </ul>
)
