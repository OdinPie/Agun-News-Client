import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';

const MyArticleRow = ({userarticle}) => {
    const {
        _id,
        title,
        articleCover,
        publisher,
        detail,
        tags,
        author,
        authorEmail,
        authorPhoto,
        status,
        isPremium,
        postedDate,
        viewCount } = userarticle;

        const navigate = useNavigate();
        const axiosPublic = useAxiosPublic();
        const handleDelete = (id) =>{
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
              }).then((result) => {
                if (result.isConfirmed) {
                  axiosPublic.delete(`/delete_article/${id}`)
                  .then(res=>{
                    console.log(res.data);
                    if(res.data.deletedCount>1){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your article has been deleted.",
                            icon: "success"
                          });
                    }
                  })
                  
                }
              });
        }
    return (
        <tr>

            <td>{_id}</td>
            <td>{title}</td>
            <td>{status}{status=='declined' && <button className='btn'>Reason</button>}</td>
            <td>{isPremium}</td>
            {/* This will not increase view Count */}
            <td><button onClick={()=>{navigate(`/allarticles/articledetail/${_id}`);}} className='btn'>Details</button></td> 
            <td><button onClick={()=>{navigate(`/update/${_id}`)}} className='btn'>Update</button></td>
            <td><button onClick={()=>{handleDelete(_id)}} className='btn'>Delete</button></td>
            {/* declineReason */}
        </tr>
    );
};

export default MyArticleRow;