import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic"


const usePublishers = () =>{
    const axiosPublic = useAxiosPublic();
    const [publishers, setPublishers] = useState([]);
    
        useEffect(()=>{
            axiosPublic.get('/addpublisher')
            .then(res=>setPublishers(res.data))    
        },[axiosPublic])
       
    return publishers;
    
}



export default usePublishers;