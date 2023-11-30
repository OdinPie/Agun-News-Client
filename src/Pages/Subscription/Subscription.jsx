import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const StripePromise = loadStripe('');
const Subscription = () => {
    return (
        <div>
            <Elements stripe={StripePromise}>
                 
            </Elements>
        </div>
    );
};

export default Subscription;