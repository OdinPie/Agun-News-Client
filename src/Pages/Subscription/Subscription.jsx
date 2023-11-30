import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckOutForm from './CheckOutForm';

const StripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Subscription = () => {
    return (
        <div>
            <h1 className='text-4xl font-bold font-play pt-40 text-center'>Subscription</h1><br /><br />
            <Elements stripe={StripePromise}>
                 <CheckOutForm></CheckOutForm>
            </Elements>
        </div>
    );
};

export default Subscription;