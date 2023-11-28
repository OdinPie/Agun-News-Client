import React from 'react';
import useArticles from '../../Hooks/useArticles';

const AllArticlesGeneral = () => {
    const [articles] = useArticles();
    return (
        <div>
            <h1 className='text-4xl font-bold font-play pt-40 text-center'>All Articles</h1>
            
        </div>
    );
};

export default AllArticlesGeneral;