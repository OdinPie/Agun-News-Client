import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useStats = () => {
    const axiosPublic = useAxiosPublic();

    const { data : usercount = []} = useQuery({
        queryKey : ['user-count'],
        queryFn: async ()=>{
            const result = await axiosPublic.get('/user-count');
            // console.log(result.data);
            return result.data;
        }
        

    })
    return [usercount];
};

export default useStats;