import { useMemo } from 'react';
import propTypes from 'prop-types';
import { HeroCard } from './';
import { getHeroesByPublisher } from "../helpers"

export const HeroList = ({publisher}) => {

  const heroes = useMemo(() => {
    return getHeroesByPublisher(publisher)
    
  }, [publisher]);
  

  return (
    <div className='row rows-cols-1 row-cols-md-3 g-3'>
        {heroes.map((heroe) => (
            <HeroCard key={heroe.id} {...heroe} />
       ))} 
    </div>
  )
}

HeroList.propTypes = {
  publisher: propTypes.string.isRequired
}