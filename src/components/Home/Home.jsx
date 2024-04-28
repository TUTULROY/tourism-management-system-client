import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import TouristsSpots from "../TouristsSpots/TouristsSpots";


const Home = () => {
    const spots = useLoaderData();
    return (
        <div className="">
            <Banner></Banner>
            <h2 className="text-xl text-center"> Tourist Spot: {spots.length}</h2>

            <div className="grid lg:grid-cols-3 gap-6 mt-3 mb-3">
                {
                    spots.map(spot => <TouristsSpots
                    key={spot._id} 
                    spot={spot}
                    >

                    </TouristsSpots>)
                }
            </div>

        </div>
    );
};

export default Home;