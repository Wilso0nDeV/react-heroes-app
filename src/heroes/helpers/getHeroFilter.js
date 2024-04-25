


import { heroes } from '../data/heroes';

export const getHeroFilter = (superhero) => {
    return heroes.filter(hero => hero.superhero.toLowerCase() === superhero)

};