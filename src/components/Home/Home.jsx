import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import TouristsSpots from "../TouristsSpots/TouristsSpots";
import HeroSection from "../HeroSection/HeroSection";


const Home = () => {
    const spots = useLoaderData();
    return (
        <div className="">
            <Banner></Banner>
            <h2 className="text-4xl font-bold text-center mb-4"> Tourist Spot</h2>

            <div className="mt-8">
                <HeroSection></HeroSection>
            </div>

            <div className="grid lg:grid-cols-2 mx-auto gap-6 mt-3 mb-3">
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