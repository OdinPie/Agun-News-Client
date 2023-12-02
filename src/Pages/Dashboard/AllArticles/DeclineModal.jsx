import ReactModal from 'react-modal';
import Modal from 'react-modal';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import useArticles from '../../../Hooks/useArticles';
import axios from 'axios';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

Modal.setAppElement('#root');
const DeclineModal = ({isOpen, onRequestClose, itemId}) => {
// const [axiosPublic] = useAxiosPublic();
const [,refetch] = useArticles();
    const handleDecline = (e) =>{
        e.preventDefault();
        const form = e.target;
        const reason = form.reason.value;
        console.log(reason);

        const updated = {
            status: 'declined',
            declineReason: reason
        }
        console.log(console.log(updated));
        axios.patch(`https://agun-news-server.vercel.app/decline/${itemId}`, updated)
        .then(res=>
            {   console.log(res);
                if(res.data.modifiedCount>0){
                    refetch();
                }

               
            })
        }
    return(
        <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
    >
      <div className='text-black'>
            <h3 className="font-bold text-lg">State Reason</h3><br />
            <form onSubmit={handleDecline} method="dialog">
            <textarea name='reason' className="textarea textarea-error w-full"></textarea>
                <button className="btn">Decline</button>
            </form>
      </div>
    </Modal>
   
    )
    
};

export default DeclineModal;