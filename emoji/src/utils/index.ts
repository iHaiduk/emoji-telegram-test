import {icons} from "../icons";

const TITLE_HEIGHT = 32;

export function getCategoryHeight(elements) {
    return (index) => {
        return elements[index].height + TITLE_HEIGHT;
    }
}

export function search(value: string) {
    const valueArr = value.split(/(\s+|,|\.|-|_)/ig);
    return icons.reduce<any>((acc, {icons}: any) => {
        return [...acc, ...icons.filter(({name}) => {
            const lowerName = name.toLowerCase();
            return valueArr.some((val) => lowerName.indexOf(val) !== -1)
        })]
    }, [])
}
