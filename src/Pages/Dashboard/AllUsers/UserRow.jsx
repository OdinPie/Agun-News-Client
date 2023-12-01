import React from 'react';
import Swal from 'sweetalert2';
import useUsers from '../../../Hooks/useUsers'
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
const UserRow = ({user}) => {
    const { _id, displayName, email, photoURL } = user;
    const [,refetch] = useUsers();
    const axiosPublic = useAxiosPublic();
    const makeAdmin = (id) =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, make Admin"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.patch(`/user/makeadmin/${_id}`)
                .then(res=>{
                    console.log(res.data);
                    if(res.data.modifiedCount > 0){
                        refetch();
                        Swal.fire({
                            title: "Made Admin!",
                            text: `${displayName} has been made admin!`,
                            icon: "success"
                          });
                    }
                })
              
            }
          });
        
    }
    return (
        <tr>

            <td>{displayName}</td>
            <td>{email}</td>
            <td><img className='h-10' src={photoURL} alt="user" /></td>
            <td>
                {
                    user?.role ? 'Admin' : <button onClick={()=>{makeAdmin(_id)}} className='btn bg-transparent text-white outline outline-4 outline-red-700'>Make Admin</button>
                }
            </td>
            
        </tr>
    );
};

export default UserRow;