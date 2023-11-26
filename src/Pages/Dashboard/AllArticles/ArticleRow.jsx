import React from 'react';

const ArticleRow = ({ article }) => {
    const { 
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

        <tr>

            <td>{title}</td>
            <td>{author}</td>
            <td>{authorEmail}</td>
            <td><img className='h-10' src={authorPhoto} alt="author" /></td>
            <td>{postedDate}</td>
            <td>{publisher}</td>
            <td>{status}</td>
            <td><button className='btn'>Approve</button></td>
            <td><button className='btn'>Decline</button></td>
            <td><button className='btn bg-red-400'>Delete</button></td>
            <td><button className='btn bg-blue-200'>Make Premium</button></td>
        </tr>

    );
};

export default ArticleRow;