import useAxiosPublic from "./UseAxiosPublic";
import { useQuery } from 'react-query';


const useItems = () => {
    const axiosPublic = useAxiosPublic();
 

    const {data: items = [], isPending: loading, refetch} = useQuery({
        queryKey: ['items'], 
        queryFn: async() =>{
            const res = await axiosPublic.get('/items');
            return res.data;
        }
    })


    return [items,loading, refetch]
};

export default useItems;