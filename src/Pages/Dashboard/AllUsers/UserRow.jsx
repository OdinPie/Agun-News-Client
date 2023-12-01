import React from 'react';

const UserRow = ({user}) => {
    const { _id, displayName, email, photoURL } = user;
    return (
        <tr>

            <td>{displayName}</td>
            <td>{email}</td>
            <td><img className='h-10' src={photoURL} alt="user" /></td>
            <td><button className='btn bg-transparent outline-1 outline-red-700'>Make Admin</button></td>
            
        </tr>
    );
};

export default UserRow;