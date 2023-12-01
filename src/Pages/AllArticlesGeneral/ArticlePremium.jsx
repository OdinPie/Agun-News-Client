import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useEffect } from 'react';

const ArticleGeneral = ({article}) => {
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
        viewCount } = article;

        const navigate = useNavigate();
        const [view, setView] = useState(viewCount);
        const [disabled, setdisabled] = useState(true);
        const {premiumUserCheck} = useContext(AuthContext);
        const axiosPublic = useAxiosPublic();
        useEffect(()=>{
            if(premiumUserCheck){
                setdisabled(false);
            }
        },[premiumUserCheck])

        const handleDetail = () =>{
            var count = viewCount+1;
            setView(count);
            
            const updatedDoc = {
                viewCount: view+1
            }
            console.log(updatedDoc);
            axiosPublic.patch(`/updatecount/${_id}`,updatedDoc)
            .then(res=>{
                console.log(res.data);
            })
            navigate(`/allarticles/articledetail/${_id}`);
        }
    return (
        <div>
            <div className="card card-compact relative w-96 rounded-none bg-transparent shadow-xl hover:shadow-purple-700 outline outline-1 outline-purple-700">
                <figure><img src={articleCover} alt={title} /></figure>
                <div className="card-body">
                    <h2 className='bg-purple-700 w-20 p-2 absolute top-0 right-0'>Premium</h2>
                    <h2 className="card-title">{title}</h2>
                    <p className='underline underline-offset-8'>{publisher}</p><br />
                    <p>{detail.length > 100 ? detail.slice(0,100) : detail}....</p>
                    <div className="card-actions justify-end">
                    <button disabled={disabled} onClick={handleDetail} className={disabled ? 'btnDisabled w-full' : 'btnPremium w-full'}>Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArticleGeneral;