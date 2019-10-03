const COUNT_ICON_INLINE = 8;
export const HEIGHT_ICON_INLINE = 40;

function prepareData(icons) {
    return icons.map((category) => ({
        ...category,
        height: iconsSize(category.icons),
    }))
}

export function iconsSize(icons) {
    return Math.ceil(icons.length / COUNT_ICON_INLINE) * HEIGHT_ICON_INLINE;
}

export function loadIcons(setIcons) {
    return () => {
        import('../icons').then(({icons}) => {
            setIcons(prepareData(icons));
        });
    }
}
