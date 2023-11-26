import React from 'react';

const AllArticles = () => {
    return (
        <div className=''>
            <h1 className='text-4xl font-bold font-play pt-40 text-center'>All Articles</h1>
            <div className="overflow-x-auto">
                <table className="table table-lg">
                    <thead>
                    <tr className='text-white outline outline-white outline-2'>
                         
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
                        

                   
                    </tbody> 
                    
                </table>
            </div>
        </div>
    );
};

export default AllArticles;