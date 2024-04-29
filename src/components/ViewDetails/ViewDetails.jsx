import { useLoaderData } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const ViewDetails = () => {
    // const {_id} = useParams();
    const views =useLoaderData();
    const {tourists_spot_name, photo, country_Name, location, description, average_cost, seasonality, travel_time, name, email}=views;

    // const view = views.find(view => view.id === _id)
    // console.log(view)
    return (
        <div className="m-6">
            <Fade delay={1000} direction="right">
        <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src={photo} alt=""/></figure>
  <div className="card-body">
    <p className="text-xl font-bold text-green-400">{tourists_spot_name}</p>
    <p className="text-xl text-lime-600 font-bold">{country_Name}</p>
    <p className="text-xl text-emerald-500">{location}</p>
    <p className="text-xl">{description}</p>
    <Fade delay={1000} direction="left">
    <div className=" text-xl">
        <p className="mb-2">Average Cost:{average_cost}</p>
        <p className="mt-2">Seasonality: {seasonality}</p>
        <p className="mt-2">Travel Time: {travel_time}</p>
    </div>
    </Fade>
    <div>
    <p className="text-xl">Name: {name}</p>
        <p className="">Email: {email}</p>
        
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