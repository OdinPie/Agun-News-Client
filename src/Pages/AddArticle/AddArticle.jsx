import { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProvider';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import usePublishers from '../../Hooks/usePublishers';
import { tagOptions } from './tagOptions';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { getTime } from './getTime';
const animatedComponents = makeAnimated();
const AddArticle = () => {
    
    const {user} = useContext(AuthContext);
    const publishers = usePublishers();
    const axiosPublic = useAxiosPublic();
    const handleAddArticle = e =>{
      e.preventDefault();
      const form = e.target;
      const title = form.title.value;
      const articleCover = form.articleCover.value;
      const publisher = form.publisher.value;
      const detail = form.detail.value;
      const rtags = form.tags.value;
      const tags = rtags.split(' ');
      const author = user?.displayName;
      const authorEmail = user?.email;
      const authorPhoto = user?.photoURL;
      const status = 'pending';
      const isPremium = 'no';
      const viewCount = 0;
      const postedDate = getTime();
      const articleInfo = {
        title,
        articleCover,
        publisher,
        detail,
        tags,
        author,
        authorEmail,
        authorPhoto,
        status,
        isPremium,
        postedDate,
        viewCount
      }
      // console.log(articleInfo);

      axiosPublic.post('/articles', articleInfo)
      .then(res=>{
        if(res.data.insertedId){
          Swal.fire({
            title: "Success!",
            text: "Article Added!",
            icon: "success"
          });
          form.reset(); 
        }
      })
        

        
    }
    return (
        <div className="font-poppins" >
        
  <form onSubmit={handleAddArticle} className="card-body ">
    <h2 className="text-4xl font-bold font-play mt-32 text-center">Add an Article!</h2><br />
    <div className="grid grid-cols-2 gap-5">
    <div className="form-control">
      
      <input type="text" name="title" placeholder="Article Title" className="input input-bordered text-black " required />
    </div>
    <div className="form-control">
      
      <input type="text" name="articleCover"  placeholder="Cover Image URL" className="input input-bordered text-black" required />
      </div>
      <div className="form-control">
      
      <select className="select select-error w-full text-black" name='publisher' required>
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
     
      <textarea name="detail" className="textarea textarea-secondary text-black" placeholder="Article Description" required></textarea>
    </div>
    <div className="form-control mt-6">
      <button  className="btn text-black">Add Article</button>
    </div>
  </form>
</div>
   
    );
};

export default AddArticle;