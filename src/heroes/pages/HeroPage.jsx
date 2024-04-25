import { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroesById } from "../helpers";

export const HeroPage = () => {
  //*Obteniendo el parametro(/:id) de mi Url
  const { heroId, ...param } = useParams();
  
  const navigate = useNavigate();

  const hero = useMemo(() => {
    return getHeroesById(heroId)
  }, [heroId]) 

  if (!hero) {
    return <Navigate to="/marvel" />;
  }

  const heroImageUrl = `/assets/heroes/${hero.id}.jpg`;

  const onNavigateBack = () => {
    navigate(-1)
  };

  return (
    <div className="d-flex justify-content-center p-5 animate__animated animate__fadeInLeft">
      <div className="card mb-3 " style={{ width: "820px" }}>
        <div className="row g-0">
          <div className="col-md-4 animate__animated animate__bounce">
            <img
              src={heroImageUrl}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body ">
              <h2 className="card-title">{hero.superhero}</h2>
              <div className="card-text mb-2">
                <h6>Actor/Actriz</h6>
                {hero.characters}
              </div>
              <div className="card-text  mb-2">
                <h6>Primera aparición</h6>
                <small className="text-body-secondary">
                  {hero.first_appearance}
                </small>
              </div>
              <div className="card-text  mb-2">
                <h6>Caracters</h6>
                <small className="text-body-secondary">{hero.characters}</small>
              </div>
              <div className="card-text  mb-2">
                <h6>Publicado</h6>
                <small className="text-body-secondary">{hero.publisher}</small>
              </div>
              <button 
              type="button" 
              className="btn btn-primary"
              onClick={onNavigateBack}>
                Regresar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
