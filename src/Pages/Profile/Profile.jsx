import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom';

const Profile = () => {
    const [usercontent, setUserContent] = useState(null);
    const {user} = useContext(AuthContext);
    const axiosPublic = useAxiosPublic()
    useEffect(()=>{
        axiosPublic.get(`/users?email=${user?.email}`)
        .then(res=>{
            console.log(res.data);
            setUserContent(res.data[0]);
        })
    },[axiosPublic,user])
    // console.log(usercontent);
    return (
        <div className='flex flex-col items-center justify-center'>
            {/* /updateuser/:email */}
            <h2 className="text-4xl font-bold font-play mt-32 text-center">User Profile</h2><br />
            <div className="avatar">
            <div className="w-52 rounded-full">
                <img src={usercontent?.photoURL} />
            </div>
            </div><br />
            <h1 className='text-2xl'>Name : {usercontent?.displayName}</h1><br />
            <h1 className='text-2xl'>Email : {usercontent?.email}</h1><br />
            {
                usercontent?.premiumTaken && <h1 className='text-2xl outline outline-2 p-1'>Premium User</h1>
            }
            <Link to={`/updateuser`}><button className='btnPrimary w-full my-7'>Update Profile</button></Link>
        </div>
    );
};

export default Profile;