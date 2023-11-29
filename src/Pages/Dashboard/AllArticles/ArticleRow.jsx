import React, { useEffect, useState } from 'react';
// import useAxiosPublic from "../../../Hooks/useArticles"
import useArticles from '../../../Hooks/useArticles';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import DeclineModal from './DeclineModal';


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
        const [ismodalOpen, setisModalOpen] = useState(false);
        const [selectedId, setselectedId] = useState(null);
        useEffect(()=>{
            if(status=='approved' || status=='declined'){
                setdisableButton(true);
            }
        },[status])

        const modalOpen = (id) =>{
            setisModalOpen(true);
            setselectedId(id);
        }

        const closeModal = () =>{
            setisModalOpen(false);
            setselectedId(null);
        }
        const handleApprove = () =>{
            const updated = {
                status: 'approved'
            }
            axiosPublic.patch(`/approve/${_id}`, updated)
            .then(res=>
                {
                    if(res.data.modifiedCount>0){
                        refetch();
                        setdisableButton(true);
                    }

                   
                })
            
        }

        const makePremium =  () =>{
            const updated = {
                isPremium : 'yes'
            }
            axiosPublic.patch(`/makepremium/${_id}`, updated)
            .then(res=>
                {
                    if(res.data.modifiedCount>0){
                        refetch();
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
            <td><button onClick={()=>{modalOpen(_id)}} disabled={disableButton} className='btn'>Decline</button></td>
            <td><button className='btn bg-red-400'>Delete</button></td>
            <td>{isPremium=='yes'? 'Premium' : <button onClick={makePremium} className='btn bg-blue-200'>Make Premium</button>}</td>
            <DeclineModal isOpen={ismodalOpen} onRequestClose={closeModal} itemId={selectedId}></DeclineModal>
            
        </tr>

    );
};

export default ArticleRow;