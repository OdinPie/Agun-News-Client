import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

const useArticles = ({useremail}) => {
    const axiosPublic = useAxiosPublic();
    const {refetch, data : userarticles=[]} = useQuery({
        queryKey: ['userarticles'],
        queryFn: async () =>{
            const result = await axiosPublic.get(`/articles?authorEmail=${useremail}`);
            return result.data;
        }
    })

    return [userarticles, refetch];
};

export default useArticles;