import React from 'react';
import useArticles from '../../Hooks/useArticles';
import ArticleGeneral from './ArticleGeneral';
import { useInfiniteQuery } from '@tanstack/react-query';

// const getArticles = async(page= 1) =>{
//     const res = await fetch(`http://localhost:5000/allarticles?page=${page}`);
//     const data = await res.json();
//     const nextPage = page+1;
//     // console.log(...data, nextPage);
//     return {...data, nextPage}
//     // return {...data, prevOffset:pageParam, articlesCount}
// }


//     const {data, fetchNextPage, hasNextPage, isFetchingNextPage, nextPage} = useInfiniteQuery({
//         queryKey:["allarticles"],
//         queryFn: getArticles,
//         getNextPageParam: nextPage,
//     })
//     console.log(data.pages);
//     return(
//        <div>
//         {/* {
//             data.pages.map((page)=><ArticleGeneral></ArticleGeneral>)
//         } */}
//        </div>

//     )
    
   
const AllArticlesGeneral = () => {
   const [articles] = useArticles();
    return (
        <div>
            <h1 className='text-4xl font-bold font-play pt-40 text-center'>All Articles</h1><br /><br />
            <div className='grid grid-cols-3 gap-5'>
                {
                    articles && articles.map(art=><ArticleGeneral article={art}></ArticleGeneral>)
                }
            </div>
        </div>
    );
};

export default AllArticlesGeneral;