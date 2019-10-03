export interface Icon {
    id: string,
    name: string,
    icon: string,
}

export interface Category {
    id: string,
    name: string,
    icons: Icon[],
}

export type IconsData = Category[];

export interface SearchComponent {
    setSearchResults: (data: IconsData) => void;
}

export interface NavigationComponent {
    iconsLength: number;
    activeIndex: number;
    setActiveIndex: (activeIndex: number) => void;
}

export interface IconsWrapperComponent {
    icons: IconsData;
    activeIndex: number;
}

export interface IconsBlockComponent extends Category {
    style: object;
}

export interface IconComponent extends Icon {}
