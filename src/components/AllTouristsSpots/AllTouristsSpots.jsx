import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import PropTypes from 'prop-types';

const AllTouristsSpots = ({all_spot}) => {
    const {_id, tourists_spot_name, seasonality, travel_time, totalVisitorsPerYear, average_cost, photo}=all_spot;

    const handleDelete = _id =>{
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            
            fetch(`http://localhost:5000/spots/${_id}`,{
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                if(data.deletedCount > 0){
                      Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
                }
            })
            }
          });
    }

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
            <button 
      onClick={() => handleDelete(_id)}
      className="btn btn-primary">Delete</button>
      <Link to={`/update/${_id}`}>
      <button className="btn btn-primary">Update Page</button>
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