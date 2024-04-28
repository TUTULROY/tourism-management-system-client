

const TouristsSpots = ({spot}) => {
    const {tourists_spot_name, country_Name, location, description, average_cost,seasonality, travel_time, totalVisitorsPerYear, email, name, photo}=spot;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure><img src={photo} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{tourists_spot_name}</h2>
          <p>{country_Name}</p>
          <p>{location}</p>
          <p>{description}</p>

          <div className="card-actions justify-end">
            <button className="btn btn-primary">View Details</button>
          </div>
        </div>
      </div>
    );
};

export default TouristsSpots;