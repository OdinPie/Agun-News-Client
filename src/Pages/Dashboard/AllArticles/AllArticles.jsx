import React from 'react';
import useArticles from '../../../Hooks/useArticles';
import ArticleRow from './ArticleRow';

const AllArticles = () => {
    const [articles] = useArticles();
    // console.log(articles);
    return (
        <div className='overflow-auto'>
            <h1 className='text-4xl font-bold font-play pt-40 text-center'>All Articles</h1>
            <div className="overflow-auto">
                <table className="table table-small bg-slate-500">
                    <thead>
                    <tr className='text-white text-lg outline outline-white outline-2'>
                         
                        <th>Article Title</th> 
                        <th>Article Author</th> 
                        <th>Author Email</th> 
                        <th>Author Photo</th> 
                        <th>Posted Date</th> 
                        <th>Publisher</th>
                        <th>Status</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                    </thead> 
                    <tbody>
                        
                    {
                        articles && articles.map(art=><ArticleRow article={art}></ArticleRow>)
                    }
                   
                    </tbody> 
                    
                </table>
            </div>
        </div>
    );
};

export default AllArticles;