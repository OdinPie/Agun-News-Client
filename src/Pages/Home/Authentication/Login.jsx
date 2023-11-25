import { useContext } from "react";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../../Provider/AuthProvider";
import GoogleAuth from "./GoogleAuth";
const Login = () => {
    const {loginUser}  = useContext(AuthContext);
    const navigate = useNavigate();
    
    const handleSubmit = e =>{
        e.preventDefault();
        const form = e.target;
        const password = form.password.value;
        const email = form.email.value;
        const user = {email};
        //login using firebase
        loginUser(email,password)
        .then(data=>{
            console.log(data.user);

                axios.post('http://localhost:5000/jwt',user, {withCredentials: true})
                .then(res =>{
                    console.log(res.data);
                    if(res.data?.success){
                navigate(location?.state ? location?.state : '/')
                    }
                })
                
        })
        .catch(error=>{
                Swal.fire(
                    `${error.message}`,
                    'Please Try Again',
                    'question'
                  )})
    }
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className="text-4xl font-tenor mt-32">Please Login</div>
            <form onSubmit={handleSubmit} className='card-body font-maven' action="">
                <input type="email" name='email' placeholder='Your Email' className="input input-bordered rounded-none text-black" size={50} required /><br />
                <input type="password" name="password" placeholder='Password' className="input input-bordered rounded-none text-black" id="" required/><br />
                <input type="submit" className="btn" value="Login" />
                <GoogleAuth></GoogleAuth>
                <p className="text-lg ">Do not have an account? <Link className="underline text-salmon" to="/register">Sign Up</Link> </p>
            </form>
        </div>
    );
};

export default Login;