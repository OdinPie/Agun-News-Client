import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useArticles from '../../Hooks/useArticles';
import useAxiosPublic from '../../Hooks/useAxiosPublic';

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
        const axiosPublic = useAxiosPublic();
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
            <div className="card card-compact w-96 rounded-none bg-transparent shadow-xl hover:shadow-red-700 outline outline-1 outline-red-700">
                <figure><img src={articleCover} alt={title} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className='underline underline-offset-8'>{publisher}</p><br />
                    <p>{detail.length > 100 ? detail.slice(0,100) : detail}....</p>
                    <div className="card-actions justify-end">
                    <button onClick={handleDetail} className="btnPrimary w-full">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArticleGeneral;