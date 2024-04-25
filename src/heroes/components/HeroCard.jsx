import propTypes from "prop-types";
import { Link } from "react-router-dom";

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const heroImageUrl = `/assets/heroes/${id}.jpg`;
  return (
    <div className="col">
      <div className="card animate__animated animate__fadeIn">
        <div className="row no-gutters">
          <div className="col-4">
            <img className="card-img-top" src={heroImageUrl} alt="Title" />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h4 className="card-title">{superhero}</h4>
              <p className="card-text">{alter_ego}</p>

              {alter_ego !== characters && <p>{characters}</p>}

              <p className="card-text">
                <small className="text-muted">{first_appearance}</small>
              </p>
              <Link to={`/hero/${id}`}>
                Mas ...
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HeroCard.propTypes = {
  id: propTypes.string.isRequired,
  superhero: propTypes.string.isRequired,
  publisher: propTypes.string.isRequired,
  alter_ego: propTypes.string.isRequired,
  first_appearance: propTypes.string.isRequired,
  characters: propTypes.string.isRequired,
};
