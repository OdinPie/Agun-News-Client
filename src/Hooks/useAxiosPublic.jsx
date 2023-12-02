import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://agun-news-server.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
}

export default useAxiosPublic;