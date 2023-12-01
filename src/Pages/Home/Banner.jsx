import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='relative font-play my-16'>
            <video className='w-full' loop autoPlay muted src="https://video-previews.elements.envatousercontent.com/h264-video-previews/ecc14b40-83af-4e48-95a1-1b7ab3808c0a/7958769.mp4"></video>
            <div className='overlay absolute'></div>
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4 flex flex-col justify-center items-center'>
            <Link to='/register'><button className='btnPrimary text-2xl'>Register Now!</button>
            </Link><br />
            <Link to='/aboutus'><button className='btnPrimary text-2xl'>About Us</button>
            </Link>
            </div>
            
        </div>
    );
};

export default Banner;