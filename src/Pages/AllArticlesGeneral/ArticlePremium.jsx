import React from 'react';

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
        postedDate } = article;
    return (
        <div>
            <div className="card card-compact relative w-96 rounded-none bg-transparent shadow-xl hover:shadow-purple-700 outline outline-1 outline-purple-700">
                <figure><img src={articleCover} alt={title} /></figure>
                <div className="card-body">
                    <h2 className='bg-purple-700 w-20 p-2 absolute top-0 right-0'>Premium</h2>
                    <h2 className="card-title">{title}</h2>
                    <p>{detail.length > 100 ? detail.slice(0,100) : detail}....</p>
                    <div className="card-actions justify-end">
                    <button className="btnPremium w-full">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArticleGeneral;