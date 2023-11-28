import React, { useState } from 'react';
// import useAxiosPublic from "../../../Hooks/useArticles"
import useArticles from '../../../Hooks/useArticles';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
const ArticleRow = ({ article }) => {
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
        postedDate } = article;

        // const axiosPublic = useAxiosPublic();
        const axiosPublic = useAxiosPublic();
        const [,refetch] = useArticles();
        const [disableButton, setdisableButton] = useState(false);
        
        const handleApprove = () =>{
            const updated = {
                status: 'approved'
            }
            axiosPublic.patch(`/articles/${_id}`, updated)
            .then(res=>
                {
                    if(res.data.modifiedCount>0){
                        refetch();
                        setdisableButton(true);
                    }

                   
                })
            
        }

        const handleDelete = (e) =>{
            e.preventDefault();
            const form = e.target;
            const reason = form.reason.value;
            console.log(reason);

            const updated = {
                status: 'declined',
                declineReason: reason
            }
            console.log(console.log(updated));
            axiosPublic.patch(`/articles/${_id}`, updated)
            .then(res=>
                {   console.log(res);
                    if(res.data.modifiedCount>0){
                        refetch();
                        setdisableButton(true);
                    }

                   
                })
        }
    return (

        <tr>

            <td>{title}</td>
            <td>{author}</td>
            <td>{authorEmail}</td>
            <td><img className='h-10' src={authorPhoto} alt="author" /></td>
            <td>{postedDate}</td>
            <td>{publisher}</td>
            <td>{status}</td>
            <td><button onClick={handleApprove} disabled={disableButton} className='btn bg-green-300'>Approve</button></td>
            <td><button disabled={disableButton} onClick={()=>document.getElementById('my_modal_5').showModal()} className='btn'>Decline</button></td>
            <td><button className='btn bg-red-400'>Delete</button></td>
            <td><button className='btn bg-blue-200'>Make Premium</button></td>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box text-black">
                    
                    {/* <div className="modal-action"> */}
                    <h3 className="font-bold text-lg">State Reason</h3><br />
                    <form onSubmit={handleDelete} method="dialog">
                    <textarea name='reason' className="textarea textarea-error w-full" placeholder=""></textarea>

                        {/* if there is a button in form, it will close the modal */}

                        <button className="btn modal-open">Decline</button>
                    </form>
                    <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    {/* </div> */}
                </div>
                </dialog>
        </tr>

    );
};

export default ArticleRow;