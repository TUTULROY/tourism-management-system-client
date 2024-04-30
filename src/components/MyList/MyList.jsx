import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyList = () => {
    const {user} = useContext(AuthContext)
    const [item, setItem] = useState([]);
    
useEffect(()=>{
    fetch(`http://localhost:5000/myLists/${user?.email}`)
    .then(res => res.json())
    .then(data =>{
        setItem(data);
    } )
}, [user])

const handleDelete = (id )=>{
    console.log(id);
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
        
        fetch(`http://localhost:5000/spots/${id}`,{
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
            
            {
               
                item?.map(i =>(
                    <div key={i._id} className="overflow-x-auto mt-8 mb-5">
                    <table className="table">
                      {/* head */}
                      <thead>
                        <tr>
                          <th>Tourists Spot Name</th>
                          <th> Average Cost</th>
                          <th>Travel Time</th>
                          <th>Update Button</th>
                          <th>Delete Button</th>
                        </tr>
                      </thead>
                      <tbody>
                       
                        <tr>
                          <th>{i.tourists_spot_name}</th>
                          <td>{i.average_cost}</td>
                          <td>{i.travel_time}</td>
                          <td>
                            <Link to={`/update/${i._id}`}>
                            <button className="btn btn-active btn-accent">Update</button>
                            </Link>
                          </td>
                          <td><button 
      onClick={() => handleDelete(i._id)}
      className="btn btn-primary">Delete</button></td>
                        </tr>
                       
                      
                      </tbody>
                    </table>
                  </div>

                ))    
            }
        </div>
    );
};

export default MyList;