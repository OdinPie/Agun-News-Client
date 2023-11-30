import React, { useState } from 'react';

const Trend = ({trend}) => {
    const [hovering, setHovering] = useState(false);
    return (
        <div onMouseEnter={()=>{setHovering(true)}} onMouseLeave={()=>{setHovering(false)}} className='relative'>
            <img className="w-full h-full" src={trend.articleCover} alt="" />
            {
                hovering && <div>
                    <div className="overlay absolute"></div>
                    <div className='absolute top-1/2 '>
                    <h1 className='text-5xl'>{trend.title}</h1><br />
                    <p>{trend.detail.length > 200 ? trend.detail.slice(0,200) : trend.detail}....</p>
                    </div>
                    {/* <button onClick={handleDetail} className="btnPrimary w-full">Details</button> */}
                </div>
            }
        </div>
    );
};

export default Trend;