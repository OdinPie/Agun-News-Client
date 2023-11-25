import React, { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';

const GoogleAuth = () => {
    const { googleSignIn } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const handleGoogle = () =>{
        googleSignIn()
        .then(result =>{
            console.log(result.user);
            const userInfo = {
                email: result.user?.email,
                displayName: result.user?.displayName,
                photoURL: result.user?.photoURL,
            }

            axiosPublic.post('/users',userInfo)
        })
        
    }

    return (
        <div>
            <div className="divider divider-error">or</div>
            <button onClick={handleGoogle} className='btn w-full'>Google</button>
        </div>
    );
};

export default GoogleAuth;