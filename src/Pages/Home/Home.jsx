import Banner from "./Banner";
import Publisher from "./Publishers/Publisher";
import Statistics from "./Statistics/Statistics";
import Trending from "./Trending/Trending";


const Home = () => {
    return (
        <div>
            <Trending></Trending>
            <Publisher></Publisher>
            <Statistics></Statistics>
        </div>
    );
};

export default Home;