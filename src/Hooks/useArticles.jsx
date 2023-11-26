import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

const useArticles = () => {
    const axiosPublic = useAxiosPublic();
    const {refetch, data : articles=[]} = useQuery({
        queryKey: ['articles'],
        queryFn: async () =>{
            const result = await axiosPublic.get('/articles');
            return result.data;
        }
    })

    return [articles, refetch];
};

export default useArticles;