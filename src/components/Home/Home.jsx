import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import TouristsSpots from "../TouristsSpots/TouristsSpots";
import HeroSection from "../HeroSection/HeroSection";
import Contact from "../Contact/Contact";


const Home = () => {
    const spots = useLoaderData();
    return (
        <div className="">
            <Banner></Banner>
            <h2 className="text-4xl font-bold text-center mb-4"> Tourist Spot</h2>

           

            <div className="grid lg:grid-cols-2 mx-auto gap-6 mt-3 mb-3">
                {
                    spots.map(spot => <TouristsSpots
                    key={spot._id} 
                    spot={spot}
                    >

                    </TouristsSpots>)
                }
            </div>
            <div className="mt-8 mb-8">
                <HeroSection></HeroSection>
            </div>
            <h2 className="text-center text-2xl text-purple-400 font-extrabold">Contact Tourist Guide</h2>
            <div className="mt-8 mb-8">
                <Contact></Contact>
            </div>
        </div>
    );
};

export default Home;