import React from 'react';
import Marquee from "react-fast-marquee";
import usePublishers from '../../../Hooks/usePublishers';
import { Typewriter } from 'react-simple-typewriter';

const Publisher = () => {
    const publishers = usePublishers();
    return (
        <div>
            <h1 className='text-5xl pt-36 pb-10 text-center text-white'>
        {' '}
        <span style={{ color: '#fff', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Our esteemed Publishers']}
            loop={30}
            cursor
            cursorStyle='| '
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>
            <Marquee>
                {
                    publishers && publishers.map(pub=>{
                        return(
                            <div className='bg-white w-72 h-64 mx-8'>
                                <img className='' src={pub.logo} alt="" />
                                <h1 className='text-center bg-white text-black text-3xl'>{pub.publication}</h1>
                            </div>
                        )
                    })
                }
            </Marquee>
        </div>
    );
};

export default Publisher;