import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useStats = () => {
    const axiosPublic = useAxiosPublic();

    const { data : stats = []} = useQuery({
        queryKey : ['adminStats'],
        queryFn: async ()=>{
            const result = await axiosPublic.get('/admin-stats');
            // console.log(result.data);
            return result.data;
        }
        

    })
    return [stats];
};

export default useStats;