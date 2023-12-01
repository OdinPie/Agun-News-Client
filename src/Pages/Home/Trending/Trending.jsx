import { useEffect, useState } from "react";
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Trend from "./Trend";
import { Typewriter } from 'react-simple-typewriter'

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
            <h1 className='text-5xl pt-36 pb-10 text-center text-white'>
        {' '}
        <span style={{ color: '#fff', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Check Out Trending Articles']}
            loop={30}
            cursor
            cursorStyle='| '
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>
            <AutoplaySlider
                play={true}
                cancelOnInteraction={false}
                interval={6000}
            >
                {
                    trending && trending.map(trend=><div className="w-full"><Trend trend={trend}></Trend></div>)
                }
            </AutoplaySlider>  
            
        </div>
    );
};

export default Trending;