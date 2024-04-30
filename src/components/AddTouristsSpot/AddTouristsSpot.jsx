import Swal from 'sweetalert2'

const AddTouristsSpot = () => {
const handleAddTouristsSpot = event =>{
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
    const email =form.email.value;
    const name =form.name.value;
    const photo =form.photo.value;

    const newSpot = {tourists_spot_name, country_Name, location, description, average_cost,seasonality, travel_time, totalVisitorsPerYear, email, name, photo}
    console.log(newSpot);


    fetch('https://tourism-management-server-sandy.vercel.app/spots',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(newSpot)
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data);
        if(data.insertedId){
            Swal.fire({
                title: 'success!',
                text: 'User added',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        }
    })

}

    return (
        <div>
            <form onSubmit={handleAddTouristsSpot}>

            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                <label className="label">
                    <span className="label-text">Tourists Spot Name</span>
                </label>
                <label className="input-group">
                    
                    <input type="text" name="tourists_spot_name" placeholder="Tourists Spot Name" className="input input-bordered w-full " />
                </label>
                </div> 
                <div className="form-control md:w-1/2 ml-4">
                <label className="label">
                    <span className="label-text">Country Name </span>
                </label>
                <label className="input-group">
                    
                    {/* <input type="text" name="country_Name" placeholder="Country Name" className="input input-bordered w-full" /> */}
                    <select type="text" name='country_Name' className="select select-bordered w-full ">
                    <option >Bangladesh</option>
                    <option>Thailand</option>
                    <option>Indonesia</option>
                    <option>Malaysia</option>
                    <option>Vietnam</option>
                    <option>Cambodia</option>
                    </select>
                </label>
                </div> 
                </div>


            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                <label className="label">
                    <span className="label-text">Location</span>
                </label>
                <label className="input-group">
                    
                    <input type="text" name="location" placeholder="Location" className="input input-bordered w-full " />
                </label>
                </div> 
                <div className="form-control md:w-1/2 ml-4">
                <label className="label">
                    <span className="label-text">Short Description</span>
                </label>
                <label className="input-group">
                    
                    <input type="text" name="description" placeholder="Short Description" className="input input-bordered w-full" />
                </label>
                </div> 
                </div>


            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                <label className="label">
                    <span className="label-text">Average Cost</span>
                </label>
                <label className="input-group">
                    
                    <input type="text" name="average_cost" placeholder="Average Cost" className="input input-bordered w-full " />
                </label>
                </div> 
                <div className="form-control md:w-1/2 ml-4">
                <label className="label">
                    <span className="label-text"> Seasonality  </span>
                </label>
                <label className="input-group">
                    
                    <input type="text" name="seasonality" placeholder="Seasonality " className="input input-bordered w-full" />
                </label>
                </div> 
                </div>


            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                <label className="label">
                    <span className="label-text">Travel Time</span>
                </label>
                <label className="input-group">
                    
                    <input type="text" name="travel_time" placeholder="Travel Time" className="input input-bordered w-full " />
                </label>
                </div> 
                <div className="form-control md:w-1/2 ml-4">
                <label className="label">
                    <span className="label-text">Total Visitors  PerYear </span>
                </label>
                <label className="input-group">
                    
                    <input type="text" name="totalVisitorsPerYear" placeholder="Total Visitors PerYear" className="input input-bordered w-full" />
                </label>
                </div> 
                </div>


            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                <label className="label">
                    <span className="label-text">Your Email</span>
                </label>
                <label className="input-group">
                    
                    <input type="email" name="email" placeholder="Your Email" className="input input-bordered w-full " />
                </label>
                </div> 
                <div className="form-control md:w-1/2 ml-4">
                <label className="label">
                    <span className="label-text">Your Name </span>
                </label>
                <label className="input-group">
                    
                    <input type="text" name="name" placeholder="Enter Your Name" className="input input-bordered w-full" />
                </label>
                </div> 
                </div>
                <div>
                <div className="form-control mb-8">
                <label className="label">
                    <span className="label-text">Photo Url</span>
                </label>
                <label className="input-group">
                    
                    <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full " />
                </label>
                </div> 
                
                </div>
                <input type="submit" value="Add Tourists Spot" className="btn btn-block bg-lime-300 mb-2" />
            </form>
        </div>
    );
};

export default AddTouristsSpot;