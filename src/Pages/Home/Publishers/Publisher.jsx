import React from 'react';
import Marquee from "react-fast-marquee";
import usePublishers from '../../../Hooks/usePublishers';

const Publisher = () => {
    const publishers = usePublishers();
    return (
        <div>
            <h1 className='text-4xl font-bold font-play pt-40 text-center'>Our Publishers</h1><br /><br />
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