import Banner from "../Components/Home/Banner";
import House from "../Components/Home/House";
import Navbar from "../Components/Shared/Navbar";

const Home = () => {
    return (
        <div className="container mx-auto">
            <Navbar />
            <Banner />
            <House />
        </div>
    );
};

export default Home;