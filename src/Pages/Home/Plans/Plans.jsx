import React from 'react';
import { useNavigate } from 'react-router-dom';

const Plans = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1 className='text-4xl font-bold font-play pt-40 text-center'>Check out our Premium Plans</h1><br /><br />
            <div className='flex justify-center gap-28'>
            <div className="card outline outline-2 outline-indigo-500 py-5 px-12">
                <div className='flex justify-between gap-10'>
                <div>
                <h1 className='text-3xl font-semibold'>Lite <br />account</h1><br />
                </div>
                <h1 className='text-xl font-semibold'><strong className='text-3xl'>Free</strong> <br />to avail</h1>
                
                </div>
                <ul className='pl-9 py-3 mt-10 text-xl space-y-2'>
                    <li type='1'>Add Free Content</li>
                    <li type='1'>Early Access</li>
                    <li type='1'>Offline Reading</li>
                    <li type='1'>Add Free Content</li>
                </ul><br />
                <button onClick={()=>{navigate('/register')}} className='btn mt-44 w-full outline-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold text-xl'>Register</button>
            </div>

            <div className="card outline outline-2 outline-orange-600  py-5 px-9">
                <div className='flex justify-between gap-10'>
                <div>
                <h1 className='text-3xl font-semibold'>Premium <br /> Pro</h1><br />
                </div>
                <h1 className='text-xl font-semibold'><span className='text-3xl font-bold'>50$</span><br /> per month</h1>
                </div>
                <ul className='pl-9 py-3 text-xl space-y-2'>
                    <li type='1'>Add Free Content</li>
                    <li type='1'>Premium articles</li>
                    <li type='1'>Early Access</li>
                    <li type='1'>Offline Reading</li>
                    <li type='1'>Add Free Content</li>
                    <li type='1'>Priority Customer support</li>
                    <li type='1'>Cross Device Syncing</li>
                    <li type='1'>Curated Newsletter</li>
                    <li type='1'>Educational Resources</li>
                </ul><br />
                <button onClick={()=>{navigate('/subscription')}} className='btn outline-0 bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-semibold text-xl'>Get Premium</button>
            </div>
            </div>
        </div>
    );
};

export default Plans;