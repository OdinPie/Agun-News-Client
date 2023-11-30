import React, { useContext } from 'react';
import useUserArticles from '../../Hooks/useUserArticles';
import { AuthContext } from '../../Provider/AuthProvider';
import MyArticleRow from './MyArticleRow';
const MyArticles = () => {
    const {user} = useContext(AuthContext);
    const useremail = user?.email;
    // console.log('in user', useremail);
    const [userarticles] = useUserArticles(useremail);
    // console.log(userarticles);

    return (
        <div className='overflow-auto'>
        <h1 className='text-4xl font-bold font-play pt-40 text-center'>All Articles</h1>
        <div className="overflow-auto">
            <table className="table table-small">
                <thead>
                <tr className='text-white text-lg outline outline-white outline-2'>
                     
                    <th>Serial No.</th> 
                    <th>Article Title</th> 
                    <th>Status</th> 
                    <th>is Premium</th> 
                    <th>Details</th> 
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
                </thead> 
                <tbody>
                    
                {/* articles mapping */}
               {
                userarticles && userarticles.map(art=><MyArticleRow userarticle={art}></MyArticleRow>)
               }
                </tbody> 
                
            </table>
        </div>
    </div>
    );
};

export default MyArticles;