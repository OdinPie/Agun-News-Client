import React from 'react';
import CountUp from 'react-countup';
import useUsers from '../../../Hooks/useUsers'
import useUserStats from '../../../Hooks/useUserStats'
import { Typewriter } from 'react-simple-typewriter';
const Statistics = () => {
    const users = useUsers();
    const [usercount] = useUserStats();
    return (
        <div>
<h1 className='text-5xl pt-36 pb-10 text-center text-white'>
        {' '}
        <span style={{ color: '#fff', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['User Statistics']}
            loop={30}
            cursor
            cursorStyle='| '
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>            <div className='flex justify-center gap-11'>
            <div className='bg-white flex rounded-lg py-5 px-9'>
            <h1 className='text-black text-7xl font-bold'><CountUp enableScrollSpy scrollSpyDelay={500} end={usercount.total} duration={2.75} />+  <h1 className='text-black text-4xl'>Total <br />Users</h1></h1>
            </div>
            <div className='bg-white flex rounded-lg p-5'>
            <h1 className='text-black text-7xl font-bold'><CountUp enableScrollSpy scrollSpyDelay={500} end={usercount.normal} duration={2.75} />+  <h1 className='text-black text-4xl'>Normal <br /> Users</h1></h1>
            </div>
            <div className='bg-white flex rounded-lg p-5'>
            <h1 className='text-black text-7xl font-bold'><CountUp enableScrollSpy scrollSpyDelay={500} end={usercount.premium} duration={2.75} />+  <h1 className='text-black text-4xl'>Premium <br /> Users</h1></h1>
            </div>
            </div>
        </div>
    );
};

export default Statistics;