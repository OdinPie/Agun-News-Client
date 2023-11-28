import React from 'react';
import useArticles from '../../Hooks/useArticles';
import ArticleGeneral from './ArticleGeneral';

const AllArticlesGeneral = () => {
    const [articles] = useArticles();
    return (
        <div>
            <h1 className='text-4xl font-bold font-play pt-40 text-center'>All Articles</h1><br /><br />
            <div className='grid grid-cols-3'>
                {
                    articles && articles.map(art=>{if(art.status==='approved'){<ArticleGeneral article={art}></ArticleGeneral>}})
                }
            </div>
        </div>
    );
};

export default AllArticlesGeneral;