import {activity} from './activity';
import {animal} from './animal';
import {food} from './food';
import {flags} from './flags';
import {people} from './people';
import {symbols} from './symbols';
import {travel} from './travel';

export const activityCategory = {
    id: 'activity',
    name: 'Activity',
    icons: activity,
};

export const animalCategory = {
    id: 'animal',
    name: 'Animals & Nature',
    icons: animal,
};

export const foodCategory = {
    id: 'food',
    name: 'Food & Drink',
    icons: food,
};

export const peopleCategory = {
    id: 'people',
    name: 'Smileys & People',
    icons: people,
};

export const travelCategory = {
    id: 'travel',
    name: 'Travel & Places',
    icons: travel,
};

export const symbolsCategory = {
    id: 'symbols',
    name: 'Symbols',
    icons: symbols,
};

export const flagsCategory = {
    id: 'flag',
    name: 'Flags',
    icons: flags,
};

export const frequently = {
    id: 'frequently',
    name: 'Frequently used',
    icons: [
        people[127],
        people[142],
        people[10],
        symbols[11],
    ],
};

export const icons = [
    frequently,
    peopleCategory,
    animalCategory,
    foodCategory,
    activityCategory,
    travelCategory,
    symbolsCategory,
    flagsCategory,
];
