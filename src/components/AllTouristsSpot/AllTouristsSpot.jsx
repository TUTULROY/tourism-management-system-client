import {  useLoaderData } from "react-router-dom";
import AllTouristsSpots from "../AllTouristsSpots/AllTouristsSpots";
import { useEffect, useState } from "react";


const AllTouristsSpot = () => {
    // const { tourists_spot_name, country_Name, location, description, average_cost, photo}=spot;
    const spot = useLoaderData();
    const [all_spots, setAllSpots] = useState(spot);
    const [sort, setSort] = useState("asc");
    const [search, setSearch] = useState("");
    
    
    // console.log(all_spots);
    
    useEffect(() => {
      fetch(`https://tourism-management-server-sandy.vercel.app/spots?search=${search}`)
        .then((res) => res.json())
        .then((data) => {
          const sortSort = data.sort(
            (a, b) => new Date(b.dateAdd) - new Date(a.dateAdd)
          );
          setAllSpots(sortSort);
        });
    }, [search]);
    // console.log(all_spots);

    const handleSearch = (e) => {
      e.preventDefault();
      const searchText = e.target.search.value;
      setSearch(searchText);
    };

    const handleSortChange = (e) => {
        setSort(e.target.value);
    };
    return (
      <div className="text-center">
        <div className="text-center">
          <form onSubmit={handleSearch}>
            <input className="input input-bordered" type="text" name="search" />
            <input className="btn btn-outline" type="submit" value="Search" />
          </form>
          <select
            className="btn btn-secondary mt-2 mb-2"
            value={sort}
            onChange={handleSortChange}
          >
            <option className="btn btn-outline" value="asc">
              Price: Low to High
            </option>
            <option className="btn btn-outline" value="desc">
              Price: High to Low
            </option>
          </select>
        </div>
        <div className="lg:grid grid-cols-3 gap-5 mt-4 mb-5">
          {all_spots.map((all_spot) => (
            <AllTouristsSpots
              key={all_spot._id}
              all_spot={all_spot}
            ></AllTouristsSpots>
          ))}
        </div>
        <div></div>
      </div>
    );
};

export default AllTouristsSpot;