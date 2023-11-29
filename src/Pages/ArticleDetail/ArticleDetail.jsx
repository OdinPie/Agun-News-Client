import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ArticleDetail = () => {
    const article = useLoaderData();
    
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
        postedDate } = article[0];
        
    return (
        <div>
            <h1 className='text-4xl font-bold font-play pt-40 text-center text-white'>{title}</h1><br /><br />
            <h1 className='text-2xl text-center flex justify-center'>Tags:  
                {
                    tags && tags.map(tag=><div>{tag}</div>)
                }
            </h1>
            <img src={articleCover} alt="" /><br /><br />
            <div className='max-w-5xl mx-auto'>
                <div className='flex justify-between items-center'>
                    <div>
                    <div className="avatar">
                        <div className="w-12 rounded-full">
                            <img src={authorPhoto} />
                        </div>
                        </div>
                        <h1>Written by : {author}</h1>
                        <h1>{authorEmail}</h1>
                        <h1>Posted On: {postedDate}</h1>
                    </div>
                        <h1>Publisher: {publisher}</h1>
                </div><br /><br />
                <p>{detail}</p>
            </div>
            
        </div>
    );
};

export default ArticleDetail;