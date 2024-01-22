import Banner from "../Components/Home/Banner";
import Navbar from "../Components/Shared/Navbar";

const Home = () => {
    return (
        <div className="container mx-auto">
            <Navbar />
            <Banner />
        </div>
    );
};

export default Home;