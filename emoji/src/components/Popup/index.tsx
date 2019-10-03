import React, {FunctionComponent, useEffect, useState} from "react";

import {IconsWrapper} from "../IconsWrapper";
import {Navigation} from "../Navigation";
import {Search} from "../Search";
import {loadIcons} from "../../utils/store";
import {IconsData} from "../interface";
import s from './style.scss';

export const Popup: FunctionComponent = () => {
    const [icons, setIcons] = useState<IconsData>([]);
    const [searchResults, setSearchResults] = useState<IconsData>([]);
    const [activeIndex, setActiveIndex] = useState();

    useEffect(loadIcons(setIcons), []);

    return (
        <div className={s.wrapper}>
            <div className={s.popup}>
                <p className={s.title}>Emoji</p>
                <Search setSearchResults={setSearchResults} />
                <IconsWrapper icons={searchResults.length ? searchResults : icons} activeIndex={activeIndex} />
                <Navigation
                    iconsLength={searchResults.length ? 0 : icons.length}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                />
            </div>
        </div>
    );
};
