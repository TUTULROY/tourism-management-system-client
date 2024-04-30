import {  useLoaderData } from "react-router-dom";
import AllTouristsSpots from "../AllTouristsSpots/AllTouristsSpots";
import { useState } from "react";


const AllTouristsSpot = () => {
    // const { tourists_spot_name, country_Name, location, description, average_cost, photo}=spot;
    const [sortOrder, setSortOrder] = useState("asc");

    

    
    const all_spots = useLoaderData();
    // console.log(all_spots);
    const sortByAverageCost = (a, b) => {
        if (sortOrder === "asc") {
            return a.average_cost - b.average_cost;
        } else {
            return b.average_cost - a.average_cost;
        }
    };

    const handleSortOrderChange = (e) => {
        setSortOrder(e.target.value);
    };
    return (
        <div className="text-center">
            <select value={sortOrder} onChange={handleSortOrderChange}>
                    <option value="asc">Lowest Average Cost First</option>
                    <option value="desc">Highest Average Cost First</option>
                </select>
            <div className="lg:grid grid-cols-3 gap-5 mt-4 mb-5">
            {
                    all_spots.sort(sortByAverageCost).map(all_spot => <AllTouristsSpots
                    key={all_spot._id} 
                    all_spot={all_spot}
                    >

                    </AllTouristsSpots>)
                }
            </div>
            <div>
            
            </div>
        </div>
    );
};

export default AllTouristsSpot;