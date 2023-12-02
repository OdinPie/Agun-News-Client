import React from 'react';
import { useEffect } from 'react';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const UpdateUser = () => {
    const [usercontent, setUserContent] = useState(null);
    const {user,updateUser} = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    useEffect(()=>{
        axiosPublic.get(`/users?email=${user?.email}`)
        .then(res=>{
            // console.log(res.data);
            setUserContent(res.data[0]);
        })
    },[axiosPublic,user])
    const handleUpdate = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.displayName.value;
        const photo = form.photoURL.value;
        const updatedDoc = {
            displayName:name,
            photoURL: photo
        }
        console.log(updatedDoc);
        axiosPublic.patch(`/updateuser/${user?.email}`,updatedDoc)
        .then(res=>{
            console.log(res.data);
            if(res.data.modifiedCount){
                updateUser(name, photo);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate('/userprofile');
            }
        })
        // 
        // 
    }
    return (
        <div className="font-poppins" >
        
  <form onSubmit={handleUpdate} className="card-body ">
    <h2 className="text-4xl font-bold font-play mt-32 text-center">Update Article!</h2><br />
    <div className="grid grid-cols-2 gap-5">
    <div className="form-control">
      
      <input type="text" name="displayName" defaultValue={usercontent?.displayName} placeholder="Display Name" className="input input-bordered text-black " required />
    </div>
    <div className="form-control">
      
      <input type="text" name="photoURL" defaultValue={usercontent?.photoURL}  placeholder="Image URL" className="input input-bordered text-black" required />
      </div>
      </div>
    <div className="form-control mt-6">
      <button  className="btnPrimary">Update Profile</button>
    </div>
    
  </form>
</div>
    );
};

export default UpdateUser;