import Banner from "./Banner";
import Publisher from "./Publishers/Publisher";
import Trending from "./Trending/Trending";


const Home = () => {
    return (
        <div>
            <Trending></Trending>
            <Publisher></Publisher>
        </div>
    );
};

export default Home;