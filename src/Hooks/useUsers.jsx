import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

const useArticles = () => {
    const axiosPublic = useAxiosPublic();
    const {refetch, data : users=[]} = useQuery({
        queryKey: ['users'],
        queryFn: async () =>{
            const result = await axiosPublic.get('/users');
            return result.data;
        }
    })

    return [users, refetch];
};

export default useArticles;