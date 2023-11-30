import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';

const CheckOutForm = () => {

    const stripe = useStripe();
    const elements = useElements();
    const axiosPublic = useAxiosPublic();
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSubmit = async (e) =>{
        e.preventDefault();
        
        if(!stripe || !elements){
            return;
        }

        const card = elements.getElement(CardElement);

        if(card==null){
            return ;
        }

        const {error,paymentMethod} = await stripe.createPaymentMethod({
            type : 'card',
            card
        });

        if (error) {
            console.log('[error]', error);
          } else {
            console.log('[PaymentMethod]', paymentMethod);
            console.log(paymentMethod.created);
            const time = paymentMethod.created;
            const currdate = new Date(1000*time);
            const prevTime = new Date(currdate);
            // console.log('current time' + currdate);
            // currdate.setSeconds(currdate.getSeconds()+360);
            // console.log('after 1 min: ', currdate);

            const form = e.target;
            const duration = form.duration.value;
            if(duration=='1 minute (5 USD)'){
            
            currdate.setSeconds(currdate.getSeconds()+60);
            
                const updatedInfo = {
                    premiumDuration: "1 minute",
                    premiumTaken: 'yes',
                    takenDate: prevTime,
                    expiredDate: currdate
                }
                console.log(updatedInfo);
                axiosPublic.patch(`/updatepremiumuser?email=${user.email}`,updatedInfo)
                .then(res=>{
                    console.log(res.data);
                    if(res.data.modifiedCount){
                        Swal.fire({
                        title: "Good job!",
                        text: "You have a subscription now!",
                        icon: "success"
                        });
                    }

                    navigate('/');
                })
                
            }
            else if(duration=='5 days (15 USD)'){
            currdate.setDate(currdate.getDate()+5);
            
                const updatedInfo = {
                    premiumDuration: "5 days",
                    premiumTaken: 'yes',
                    takenDate: prevTime,
                    expiredDate: currdate

                }
                console.log(updatedInfo);
                axiosPublic.patch(`/updatepremiumuser?email=${user.email}`,updatedInfo)
                .then(res=>{
                    console.log(res.data);
                    if(res.data.modifiedCount){
                        Swal.fire({
                        title: "Good job!",
                        text: "You have a subscription now!",
                        icon: "success"
                        });
                    }

                    navigate('/');
                })
            }   
            else if(duration=='10 Days (25 USD)'){
            currdate.setDate(currdate.getDate()+10);
            
                const updatedInfo = {
                    premiumDuration: "10 days",
                    premiumTaken: 'yes',
                    takenDate: prevTime,
                    expiredDate: currdate

                }
                console.log(updatedInfo);
                axiosPublic.patch(`/updatepremiumuser?email=${user.email}`,updatedInfo)
                .then(res=>{
                    console.log(res.data);
                    if(res.data.modifiedCount){
                        Swal.fire({
                        title: "Good job!",
                        text: "You have a subscription now!",
                        icon: "success"
                        });
                    }

                    navigate('/');
                })
            }   
          }
          
    }
    return (
        <form className='max-w-5xl mx-auto' onSubmit={handleSubmit}>
            <CardElement
                options={{
                style: {
                    base: {
                    fontSize: '16px',
                    color: '#fff',
                    '::placeholder': {
                        color: '#aab7c4',
                    },
                    },
                    invalid: {
                    color: '#9e2146',
                    },
                },
                }}
            />
            <select name='duration' className="select select-error w-full max-w-xs text-black">
            <option disabled selected>Choose Duration</option>
            <option>1 minute (5 USD)</option>
            <option>5 days (15 USD)</option>
            <option>10 Days (25 USD)</option>
            </select>
      <button className='btnPrimary w-full my-5' type="submit" disabled={!stripe}>
        Pay
      </button>
        </form>
    );
};

export default CheckOutForm;