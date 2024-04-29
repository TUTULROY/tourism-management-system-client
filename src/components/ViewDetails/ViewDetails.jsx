import { useLoaderData, useParams } from "react-router-dom";


const ViewDetails = () => {
    const {_id} = useParams();
    const views =useLoaderData();
    // const {tourists_spot_name, country_Name, location, description, average_cost,seasonality, travel_time, totalVisitorsPerYear, email, name, photo} = views;

    const view = views.find(view => view._id === _id)
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src={view.photo} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">New album is released!</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Listen</button>
    </div>
  </div>
</div>
    );
};

export default ViewDetails;