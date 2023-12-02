import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import useAxiosPublic from './useAxiosPublic';

const useAdmin = () => {
   const {user} = useContext(AuthContext);
   const axiosPublic = useAxiosPublic();
    const {data : isAdmin} = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async() =>{
            const res = await axiosPublic(`/user/admin/${user?.email}`,{withCredentials: true});
            // console.log(res.data?.admin);
            return res.data?.admin;
        }
    })
    return [isAdmin]
};

export default useAdmin;