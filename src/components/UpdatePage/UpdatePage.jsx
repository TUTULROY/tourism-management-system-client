import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdatePage = () => {
    const spot_update = useLoaderData();
    const {_id,tourists_spot_name, country_Name, location, description, average_cost,seasonality, travel_time, totalVisitorsPerYear}=spot_update;
    const handleUpdateTouristsSpot = event =>{
        event.preventDefault();
        const form = event.target;
    
        const tourists_spot_name =form.tourists_spot_name.value;
        const country_Name =form.country_Name.value;
        const location =form.location.value;
        const description =form.description.value;
        const average_cost =form.average_cost.value;
        const  seasonality =form.seasonality.value;
        const travel_time =form.travel_time.value;
        const totalVisitorsPerYear =form.totalVisitorsPerYear.value;
        
    
        const updatedSpot = {tourists_spot_name, country_Name, location, description, average_cost,seasonality, travel_time, totalVisitorsPerYear}
        console.log(updatedSpot);
    
    
        fetch(`https://tourism-management-server-sandy.vercel.app/spots/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updatedSpot)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'success!',
                    text: 'Update successful',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
            }
        })
    
    }
    return (
        <div>
            <h2 className="text-3xl text-center font-extrabold">Update Tourists Spot</h2>
        <form onSubmit={handleUpdateTouristsSpot}>

        <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
            <label className="label">
                <span className="label-text">Tourists Spot Name</span>
            </label>
            <label className="input-group">
                
                <input type="text" name="tourists_spot_name" defaultValue={tourists_spot_name} placeholder="Tourists Spot Name" className="input input-bordered w-full " />
            </label>
            </div> 
            <div className="form-control md:w-1/2 ml-4">
            <label className="label">
                <span className="label-text">Country Name </span>
            </label>
            <label className="input-group">
                
                <input type="text" name="country_Name" defaultValue={country_Name} placeholder="Country Name" className="input input-bordered w-full" />
            </label>
            </div> 
            </div>


        <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
            <label className="label">
                <span className="label-text">Location</span>
            </label>
            <label className="input-group">
                
                <input type="text" name="location"defaultValue={location} placeholder="Location" className="input input-bordered w-full " />
            </label>
            </div> 
            <div className="form-control md:w-1/2 ml-4">
            <label className="label">
                <span className="label-text">Short Description</span>
            </label>
            <label className="input-group">
                
                <input type="text" name="description" defaultValue={description} placeholder="Short Description" className="input input-bordered w-full" />
            </label>
            </div> 
            </div>


        <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
            <label className="label">
                <span className="label-text">Average Cost</span>
            </label>
            <label className="input-group">
                
                <input type="text" name="average_cost" defaultValue={average_cost} placeholder="Average Cost" className="input input-bordered w-full " />
            </label>
            </div> 
            <div className="form-control md:w-1/2 ml-4">
            <label className="label">
                <span className="label-text"> Seasonality  </span>
            </label>
            <label className="input-group">
                
                <input type="text" name="seasonality" defaultValue={seasonality} placeholder="Seasonality " className="input input-bordered w-full" />
            </label>
            </div> 
            </div>


        <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
            <label className="label">
                <span className="label-text">Travel Time</span>
            </label>
            <label className="input-group">
                
                <input type="text" name="travel_time" defaultValue={travel_time} placeholder="Travel Time" className="input input-bordered w-full " />
            </label>
            </div> 
            <div className="form-control md:w-1/2 ml-4">
            <label className="label">
                <span className="label-text">Total Visitors  PerYear </span>
            </label>
            <label className="input-group">
                
                <input type="text" name="totalVisitorsPerYear" defaultValue={totalVisitorsPerYear} placeholder="Total Visitors PerYear" className="input input-bordered w-full" />
            </label>
            </div> 
            </div>
         
            <input type="submit" value="Add Tourists Spot" className="btn btn-block bg-lime-300 mb-2" />
        </form>
    </div>
    );
};

export default UpdatePage;