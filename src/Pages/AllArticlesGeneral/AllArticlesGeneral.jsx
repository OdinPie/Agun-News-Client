import React, { useState } from 'react';
import useArticles from '../../Hooks/useArticles';
import ArticleGeneral from './ArticleGeneral';
import { useInfiniteQuery } from '@tanstack/react-query';
import ArticlePremium from './ArticlePremium'
import Select from 'react-select';
import usePublishers from '../../Hooks/usePublishers';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { tagOptions } from '../AddArticle/tagOptions';
import makeAnimated from 'react-select/animated';
const animatedComponents = makeAnimated();

   
const AllArticlesGeneral = () => {
    const [,refetch] = useArticles();
   const [articles] = useArticles();
   const publishers = usePublishers();
    const axiosPublic = useAxiosPublic();
    const [showArticles, setShowArticles] = useState(articles);
    const [loading, setloading] = useState(true);
    const handleSubmit = e =>{
        e.preventDefault();
        const form = e.target;
        const publisher = form.publisher.value;
        const hint  = form.hint.value;
        const rtags = form.tags.value;
        const tags = rtags.split(' ');
        // console.log(publisher, hint, tags);
        // if(publisher==null || tags==null){
        //     setShowArticles(articles)
        // }   
        // else{
            axiosPublic.get(`/search?hint=${hint}&tags=${tags}&publisher=${publisher}`)
        .then(res=>{
            setloading(false);
            setShowArticles(res.data);
        })
        // }
    }
    console.log(showArticles);
    
    return (
        <div>
            <h1 className='text-4xl font-bold font-play pt-40 text-center'>All Articles</h1><br /><br />
            <form onSubmit={handleSubmit} action="" className='flex justify-center items-center gap-6'>
            <div className="form-control">
      
      <select className="select select-error w-full text-black" name='publisher' >
        <option disabled selected>Select Publishers</option>
        {
          publishers && publishers.map(pub=> <option>{pub.publication}</option>)
        }
      </select>
    </div>
    <div className="form-control">
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      isMulti
      options= {tagOptions} 
      className='text-black'
      placeholder='Select Tags'
      name='tags'
      delimiter=' '
      
    />
    </div>
    <div className="form-control">
    <input type="text" name='hint' placeholder="Search here" className="input input-bordered input-error w-full text-black" />
    </div> 
    <button className='btn px-10 bg-red-500 text-white'>Search</button>
            </form><br /><br />
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto'>
                {
                    showArticles && showArticles.map(art=>{
                        if(art.status==='approved'){
                            if(art.isPremium==='no'){
                                return(<ArticleGeneral article={art}></ArticleGeneral>)
                            }
                            else{
                                return (<ArticlePremium article={art}></ArticlePremium>)
                            }
                        }
                        
                    })
                }
                {
                    loading && <div>
                        <h1>Loading..........</h1>
                        <p>Please click on another route in the navbar then click 'All Articles' again :)</p>
                    </div>
                }
            </div>
        </div>
    );
};

export default AllArticlesGeneral;