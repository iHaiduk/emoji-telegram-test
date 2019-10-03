import React, {FunctionComponent, useEffect, useState} from "react";
import { debounce } from 'ts-debounce';

import ClearIcon from '../../svg/clear.svg';
import SearchIcon from '../../svg/search.svg';
import {search} from "../../utils";
import {iconsSize} from "../../utils/store";
import {SearchComponent} from "../interface";
import s from './style.scss';

function setValueInput(setValue) {
    return ({target}) => {
        setValue(target.value);
    }
}

const searchValue = debounce((value, setSearchResults) => {
    const result = value && search(value);
    setSearchResults(value ?  [{
        icons: result,
        height: iconsSize(result),
    }]: [])
}, 100);

export const Search: FunctionComponent<SearchComponent> = ({setSearchResults}) => {
    const [value, setValue] = useState('');
    const shouldRenderClear = !!value.length;

    useEffect(() => searchValue(value, setSearchResults), [value]);

    return (
        <div className={s.wrapper}>
            <input className={s.search} placeholder="Search" value={value} onChange={setValueInput(setValue)} />
            <SearchIcon className={s.searchIcon} />
            {shouldRenderClear &&
                <button className={s.clearButton} onClick={() => setValue('')}>
                    <ClearIcon />
                </button>
            }
        </div>
    );
};
