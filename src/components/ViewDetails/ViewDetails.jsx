import { useLoaderData, useParams } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const ViewDetails = () => {
    const {_id} = useParams();
    const views =useLoaderData();
    // const {tourists_spot_name, country_Name, location, description, average_cost,seasonality, travel_time, totalVisitorsPerYear, email, name, photo} = views;

    const view = views.find(view => view.id === _id)
    return (
        <div className="m-6">
            <Fade delay={1000} direction="right">
        <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src={view.photo} alt=""/></figure>
  <div className="card-body">
    <h2 className="">{view.tourists_spot_name}</h2>
    <p>{view.country_Name}</p>
    <p>{view.location}</p>
    <p>{view.description}</p>
    <div className="gap-3">
        <p>{view.average_cost}</p>
        <p>{view.seasonality}</p>
        <p>{view.travel_time}</p>
    </div>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Listen</button>
    </div>
  </div>
</div>
</Fade>
</div>
    );
};

export default ViewDetails;