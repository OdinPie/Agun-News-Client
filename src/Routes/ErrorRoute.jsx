import Lottie from 'lottie-react';
import React from 'react';
import { Link } from 'react-router-dom';
import pageNotFound from '../assets/pageNotFound.json'
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar';
const ErrorRoute = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='flex flex-col justify-center items-center'>
            <h2 className='text-center text-4xl text-red-600 mt-36 font-tenor font-bold'>404 Not Found</h2>
            <Lottie className='w-96 h-96' animationData={pageNotFound} loop={true} height={500} width={500}></Lottie>
            <Link to='/'><button className='btnPrimary'>Navigate to Home</button></Link>
            </div>
            <Footer></Footer>
        </div>
        
    );
};

export default ErrorRoute;