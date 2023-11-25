import { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProvider';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import usePublishers from '../../Hooks/usePublishers';

const animatedComponents = makeAnimated();
const AddArticle = () => {
    
    const {user} = useContext(AuthContext);
    const publishers = usePublishers();
    console.log(publishers);
    const handleAddArticle = e =>{
      e.preventDefault();
      const form = e.target;
      const sname = form.sname.value;
      const spic = form.spic.value;
      const slocation = form.slocation.value;
      const price = form.price.value;
      const detail = form.detail.value;
      const displayName = user.displayName;
      const email = user.email;
      const photoURL = user.photoURL;

      const serviceInfo = {
        sname,
        spic,
        slocation,
        price,
        detail,
        displayName,
        email,
        photoURL}
        

        //axios post api
        // axios.post('https://bdbn-server.vercel.app/services',serviceInfo,{withCredentials: true} )
        // .then(res=>{
        //   if(res.data.insertedId){
        //     Swal.fire({
        //       title: "Good job!",
        //       text: "Service has been added!",
        //       icon: "success"
        //     });
        //   }
        // })
        // form.reset();
    }
    return (
        <div className="font-poppins" >
        
  <form onSubmit={handleAddArticle} className="card-body ">
    <h2 className="text-4xl font-bold font-play mt-32 text-center">Add an Article!</h2>
    {/* <p className="font-semibold">Want to contribute to the beauty community by giving your valuable review? Well wait no further! <br /> Just fillup this easy form and you are good to go!</p> */}
    <div className="grid grid-cols-2 gap-5">
    <div className="form-control">
      
      <input type="text" name="title" placeholder="Article Title" className="input input-bordered" required />
    </div>
    <div className="form-control">
      
      <input type="text" name="articleCover"  placeholder="Cover Image URL" className="input input-bordered" required />
      </div>
      <div className="form-control">
      
      <input type="text" name="type"  placeholder="Type of Product" className="input input-bordered" required />
    </div>
    <div className="form-control">
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      isMulti
      
    />
    </div>
    
    <div className="form-control">
      <label className="label">
        <span className="label-text">Photo URL</span>
      </label>
      <input type="text" name="photoURL"  placeholder="Enter photo URL" className="input input-bordered" required />
    </div>
    </div>
    
    <div className="form-control">
     
      <textarea name="detail" className="textarea textarea-secondary" placeholder="Article Description" required></textarea>
    </div>
    <div className="form-control mt-6">
      <button  className="btn text-black">Add Article</button>
    </div>
  </form>
</div>
   
    );
};

export default AddArticle;