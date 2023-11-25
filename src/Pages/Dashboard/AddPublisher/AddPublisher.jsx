import React from 'react';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';

const AddPublisher = () => {
    const axiosPublic = useAxiosPublic();
    const handleSubmit = e =>{
        e.preventDefault();
        const form = e.target;
        const publication = form.publication.value;
        const logo = form.logo.value;
        const publicationInfo = { publication,logo };
        axiosPublic.post('/addpublisher', publicationInfo)
        .then(res=>{
            if(res.data.insertedId){
                Swal.fire({
                    title: "Success!",
                    text: "Publication Added!",
                    icon: "success"
                  }); 
            }
        })
    }
    return (
        <div>
            <h1 className='text-4xl text-center font-bold pt-32'>Add A Publisher</h1><br />

            <form onSubmit={handleSubmit} className='card-body font-maven' action="">
                <input type="text" name='publication' placeholder='Publication Name' className="input input-bordered rounded-none text-black"  required /><br />
                <input type="text" name="logo" placeholder='Publication Logo URL' className="input input-bordered rounded-none text-black" id="" required/><br />
                <input type="submit" className="btn" value="Submit" />
            </form>
        </div>
    );
};

export default AddPublisher;