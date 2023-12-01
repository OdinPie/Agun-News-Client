import ReactModal from 'react-modal';
import Modal from 'react-modal';

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
const ReasonModal = ({isOpen, reason, onRequestClose, itemId}) => {
// const [axiosPublic] = useAxiosPublic();
// const [,refetch] = useArticles();
    // const handleDecline = (e) =>{
    //     e.preventDefault();
    //     const form = e.target;
    //     const reason = form.reason.value;
    //     console.log(reason);

    //     const updated = {
    //         status: 'declined',
    //         declineReason: reason
    //     }
    //     console.log(console.log(updated));
    //     axios.patch(`http://localhost:5000/decline/${itemId}`, updated)
    //     .then(res=>
    //         {   console.log(res);
    //             if(res.data.modifiedCount>0){
    //                 refetch();
    //             }

               
    //         })
    //     }
    return(
        <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
    >
      <div className='text-black'>
            <h3 className="font-bold text-lg">Reason : </h3><br />
            <p>{reason}</p>
      </div>
    </Modal>
   
    )
    
};

export default ReasonModal;