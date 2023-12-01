import React from 'react';
import usePublishers from '../../../Hooks/usePublishers';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import { getTime } from '../../AddArticle/getTime';
import { tagOptions } from '../../AddArticle/tagOptions';
import Swal from 'sweetalert2';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
const animatedComponents = makeAnimated();

const UpdatePage = () => {
    const publishers = usePublishers();
    const axiosPublic = useAxiosPublic(); 
    const navigate = useNavigate();
    const article = useLoaderData();
    const {id} = useParams();
    const {
        title,
        articleCover,
        publisher,
        detail,
        } = article[0];
    
    const handleUpdate = e =>{
      e.preventDefault();
      const form = e.target;
      const title = form.title.value;
      const articleCover = form.articleCover.value;
      const publisher = form.publisher.value;
      const detail = form.detail.value;
      const rtags = form.tags.value;
      const tags = rtags.split(' ');
      const status = 'pending';
      const updateDate = getTime();
      const updateInfo = {
        title,
        articleCover,
        publisher,
        detail,
        tags,
        status,
        updateDate,
      }
      // console.log(articleInfo);

      axiosPublic.patch(`/updatearticle/${id}`, updateInfo)
      .then(res=>{
        console.log(res.data);
        if(res.data.modifiedCount>0){
          Swal.fire({
            title: "Success!",
            text: "Article updated!",
            icon: "success"
          });
          navigate('/myarticles')
        }
      })
    }
    return (
        <div className="font-poppins" >
        
  <form onSubmit={handleUpdate} className="card-body ">
    <h2 className="text-4xl font-bold font-play mt-32 text-center">Update Article!</h2><br />
    <div className="grid grid-cols-2 gap-5">
    <div className="form-control">
      
      <input type="text" name="title" defaultValue={title} placeholder="Article Title" className="input input-bordered text-black " required />
    </div>
    <div className="form-control">
      
      <input type="text" name="articleCover" defaultValue={articleCover}  placeholder="Cover Image URL" className="input input-bordered text-black" required />
      </div>
      <div className="form-control">
      
      <select className="select select-error w-full text-black" name='publisher' defaultValue={publisher} required>
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
      required
    />
    </div>
    
    </div>
    
    <div className="form-control">
     
      <textarea name="detail" defaultValue={detail} className="textarea textarea-secondary text-black" placeholder="Article Description" required></textarea>
    </div>
    <div className="form-control mt-6">
      <button  className="btnPrimary">Update Article</button>
    </div>
  </form>
</div>
    );
};

export default UpdatePage;