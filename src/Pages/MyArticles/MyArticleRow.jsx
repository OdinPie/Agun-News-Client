import React from 'react';

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
    return (
        <tr>

            <td>{_id}</td>
            <td>{title}</td>
            <td>{status}{status=='declined' && <button className='btn'>Reason</button>}</td>
            <td>{isPremium}</td>
            <td><button className='btn'>Details</button></td>
            <td><button className='btn'>Update</button></td>
            <td><button className='btn'>Delete</button></td>
            
        </tr>
    );
};

export default MyArticleRow;