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
            <div className="card card-compact w-96 rounded-none bg-transparent shadow-xl hover:shadow-purple-700 outline outline-1 outline-purple-700">
                <figure><img src={articleCover} alt={title} /></figure>
                <div className="card-body">
                    <div className='bg-purple-700'>Premium</div>
                    <h2 className="card-title">{title}</h2>
                    <p>{detail.length > 100 ? detail.slice(0,100) : detail}....</p>
                    <div className="card-actions justify-end">
                    <button className="btnPrimary w-full">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArticleGeneral;