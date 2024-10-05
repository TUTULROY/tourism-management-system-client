import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Fade } from "react-awesome-reveal";

const TouristsSpots = ({ spot }) => {
  const {
    _id,
    tourists_spot_name,
    country_Name,
    location,
    description,
    average_cost,
    photo,
  } = spot;
  return (
    <div>
      <Fade delay={600} description="right">
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={photo} className="rounded-xl" alt="" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{tourists_spot_name}</h2>
            <p>{country_Name}</p>
            <p>{location}</p>
            <p>{description}</p>
            <p>{average_cost}</p>

            <div className="card-actions justify-end">
              <Link to={`/travels/${_id}`}>
                <button className="btn btn-primary">View Details</button>
              </Link>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default TouristsSpots;

TouristsSpots.propTypes = {
  spot: PropTypes.node,
};
