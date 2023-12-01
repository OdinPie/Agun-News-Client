import React from 'react';
import useArticles from '../../Hooks/useArticles';
import ArticlePremium from '../AllArticlesGeneral/ArticlePremium'

const PremiumArticlesPage = () => {
    const [articles] = useArticles();
    console.log(articles);
    return (
        <div>
            <h1 className='text-4xl font-bold font-play pt-40 text-center'>Premium Articles</h1><br /><br />
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto'>
                {
                    articles && articles.map(art=>{
                        
                            if(art.isPremium=='yes'){
                                console.log(art);
                                return (<ArticlePremium article={art}></ArticlePremium>)
                            
                            }
                    })
                }
            </div>
        </div>
    );
};

export default PremiumArticlesPage;