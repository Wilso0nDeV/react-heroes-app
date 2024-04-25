import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { useForm } from "../../shared";
import { HeroCard } from "../components";
import { getHeroesById, getHeroFilter } from "../helpers";
import { useState } from 'react';

export const SearchPage = () => {

  const navigate = useNavigate()
  const location = useLocation()

  //*queryString : librería para extraer el query de mi url
  const { q = ''} = queryString.parse(location.search);
  const heroes = getHeroFilter(q);
  const showSearch = (q.length === 0);
  const showError  = (q.length > 0) && heroes.length === 0;

  const formInitialState = {
    searchText:  q
  };

const { searchText,handleValueInput }   = useForm(formInitialState);

const onSearchHero = (event) =>{
  event.preventDefault();
  // if ( searchText.trim().length <= 1 ) return;

  navigate(`?q=${ searchText }`);
}



//!Mi forma de hacerlo
// const [hero, setHero] = useState([]);
// const [search, setSearch] = useState(false);





//!Mi forma de hacerlo
  // const onSearchHero = (event) => {
  //   event.preventDefault();

  //   if(searchText.trim().length <= 1)  {
  //     setSearch(false); 
  //     setHero([])
  //     return;
  //   }

  //   navigate(`?q=${searchText}`)
  //   setSearch(true)
  //   const hero = getHeroFilter(searchText.trim());
  //   setHero(hero)
  // };

  return (
    <div className="p-5">
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchHero}>
            <input
              type="text"
              name="searchText"
              value={searchText}
              placeholder="Search a hero"
              className="form-control"
              autoComplete="off"
              onChange={handleValueInput}
            />
            <button type="submit" className="btn btn-outline-primary mt-2">
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />


          {/* //!Mi forma de hacer
           {  !search && <div className="alert alert-primary animate__animated animate__fadeIn">Search a Hero</div> }
          { hero.length === 0 &&  search && <div className="alert alert-danger animate__animated animate__fadeIn">Hero <b>{q}</b> Not Found  </div> } */}

            <div className="alert alert-primary animate__animated animate__fadeIn" 
                style={{ display: showSearch ? '' : 'none' }}>
              Search a hero
            </div>

            <div className="alert alert-danger animate__animated animate__fadeIn" 
                style={{ display: showError ? '' : 'none' }}>
              No hero with <b>{ q }</b>
            </div>
          
          {heroes.map(h=>(
          <HeroCard  key={h.id} {...h} />
           ))}
        </div>
      </div>
    </div>
  );
};
