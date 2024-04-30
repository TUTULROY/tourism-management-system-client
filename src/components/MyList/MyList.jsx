import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";


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


    return (
        <div>
            
            {
               
                item?.map(i =>(
                    <div key={i._id} className="">
                        <h1>hello</h1>
                    </div>

                ))    
            }
        </div>
    );
};

export default MyList;