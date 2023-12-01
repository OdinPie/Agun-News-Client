import React from 'react';
import useUsers from '../../../Hooks/useUsers'
import UserRow from './UserRow';
const AllUsers = () => {
    const [users]  = useUsers();
    return (
        // TODO: name,email,profile picture, and Make admin button
        <div className='overflow-auto'>
            <h1 className='text-4xl font-bold font-play pt-40 text-center'>All Articles</h1><br />
            <div className="overflow-auto">
                <table className="table table-small">
                    <thead>
                    <tr className='text-white text-lg outline outline-white outline-2'>
                         
                        <th>User Name</th> 
                        <th>User Email</th>  
                        <th>Profile Photo</th> 
                        <th></th> 
                    </tr>
                    </thead> 
                    <tbody>
                        
                    {
                        users && users.map(user=><UserRow user={user}></UserRow>)
                    }
                   
                    </tbody> 
                    
                </table>
            </div>
        </div>
    );
};

export default AllUsers;