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
            <div className="card card-compact w-96 rounded-none bg-transparent shadow-xl hover:shadow-red-700 outline outline-1 outline-red-700">
                <figure><img src={articleCover} alt={title} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className='underline underline-offset-8'>{publisher}</p><br />
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