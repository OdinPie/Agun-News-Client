import Banner from "./Banner";
import Plans from "./Plans/Plans";
import Publisher from "./Publishers/Publisher";
import Statistics from "./Statistics/Statistics";
import Trending from "./Trending/Trending";


const Home = () => {
    return (
        <div>
            <Trending></Trending>
            <Publisher></Publisher>
            <Statistics></Statistics>
            <Plans></Plans>
        </div>
    );
};

export default Home;