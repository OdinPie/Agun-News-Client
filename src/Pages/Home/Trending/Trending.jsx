import { useEffect, useState } from "react";
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Trend from "./Trend";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Trending = () => {
    const axiosPublic = useAxiosPublic();
    const [trending, setTrending] = useState([]);
    
    
    useEffect(()=>{
        axiosPublic.get('/trending')
        .then(res=>setTrending(res.data))
    },[axiosPublic])
    return (
        <div>
            <h1 className='text-4xl font-bold font-play pt-40 text-center'>Trending Articles</h1><br /><br />
            <AutoplaySlider
                play={true}
                cancelOnInteraction={false}
                interval={6000}
            >
                {
                    trending && trending.map(trend=><div><Trend trend={trend}></Trend></div>)
                }
            </AutoplaySlider>  
            
        </div>
    );
};

export default Trending;