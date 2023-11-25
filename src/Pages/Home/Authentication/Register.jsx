import { useContext } from "react";
import Swal from 'sweetalert2'
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import GoogleAuth from "./GoogleAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
const Register = () => {
    const navigate = useNavigate();
    const {createUser, updateUser} = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const handleSubmit = e =>{
        e.preventDefault();
        const form = e.target;
        const displayName = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;
        const info = {displayName,email,photoURL};
        
        //creating user in firebase
        const isValid = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9])/.test(password);
        console.log(isValid);
        if(isValid){
            //usersignup
            createUser(email,password)
        .then(data=> {
            updateUser(displayName, photoURL);
            axiosPublic.post('/users',info)
            Swal.fire({
                title: "Good job!",
                text: "Registration Successful!",
                icon: "success"
              });
            
        })
        .catch(err=>{
            console.log(err);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `${err.message}`
              });
        })
        }
        else{
            Swal.fire(
                `Password should contain Capital letter, numbers and special characters`,
                'Could not Create Account',
                'question'
              )
        }
        
    }
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className="text-4xl font-tenor mt-32">Please Register</div>
            <form onSubmit={handleSubmit} className='card-body font-maven' action="">
                
                <input type="text" name='name' placeholder='Your Name' className="input input-bordered rounded-none text-black" size={50} required /><br />
                
                <input type="email" name='email' placeholder='Your Email' className="input input-bordered rounded-none text-black" required /><br />
                <input type="text" name='photoURL' placeholder='Your Photo' className="input input-bordered rounded-none text-black" required /><br />
                <input type="password" name="password" placeholder='Password' className="input input-bordered rounded-none text-black" id="" required/><br />
                
                <input type="submit" className="btn" value="Register" />

                <GoogleAuth></GoogleAuth>
                <p className="text-lg ">Already have an account? <Link className="underline text-salmon" to="/login">Log In</Link> </p>
            </form>
        </div>
    );
};

export default Register;