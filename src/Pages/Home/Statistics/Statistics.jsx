import React from 'react';
import CountUp from 'react-countup';
import useUsers from '../../../Hooks/useUsers'
import useUserStats from '../../../Hooks/useUserStats'
const Statistics = () => {
    const users = useUsers();
    const [usercount] = useUserStats();
    return (
        <div>
            <h1 className='text-4xl font-bold font-play pt-40 text-center'>Statistics</h1><br /><br />
            <div className='flex justify-center gap-11'>
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