import { Link } from "react-router-dom";

import PropTypes from 'prop-types';

const AllTouristsSpots = ({all_spot}) => {
    const {_id, tourists_spot_name, seasonality, travel_time, totalVisitorsPerYear, average_cost, photo}=all_spot;

   

    return (
        <div>
            <div className=" bg-base-100 shadow-xl">
  <figure className="px-10 pt-10"><img src={photo} className="rounded-xl" alt="" /></figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Tourists Spot Name: {tourists_spot_name}</h2>
    <p>Average Cost: {average_cost}</p>
    <p>Visitors PerYear: {totalVisitorsPerYear}</p>
    <p>Traveling Time: {travel_time}</p>
    <p>Seasonality: {seasonality}</p>
    <div className="card-actions justify-center">
    <Link to={`/travels/${_id}`}>
            <button className="btn btn-primary">View Details</button>
            </Link>
           
      
    </div>
  </div>
</div>
        </div>
    );
};

export default AllTouristsSpots;

AllTouristsSpots.propTypes ={
    all_spot: PropTypes.node
}