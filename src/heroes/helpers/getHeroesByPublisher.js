

import { heroes } from './../data/heroes';
export const getHeroesByPublisher = (publisher) => {

    const validPublisher = ['DC Comics','Marvel Comics']


    if(!validPublisher.includes(publisher)){
        throw new Error(`${publisher} not exist`);
    }

    return heroes.filter((heroe) => heroe.publisher === publisher)
};