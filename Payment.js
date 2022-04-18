import React, {useState} from 'react';
import './Payment.css';
import checkoutProduct from './CheckoutProduct';
import {useStateValue} from './StateProvider';
import {Link} from 'react-router-dom'; 
import { useElements, useStripe } from '@stripe/react-stripe-js';
import { CardElement, useStripe, useElements} from '@stripe/react-stripe-js';


function Payment() {
    const [{basket}, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);

    const handleSubmit = e => {              //handleSubmit takes an event and does stuff

    }

    const handleChange = event => {             
                   //listen for changes in the cardElement 
                   //and display any errors as customer enters card details
                   setDisabled(event.empty);
                   setError(event.error ? event.error.message : "")
    }

    return (
        <div className='payment'>
            <div className='paymentContainer'>
                <h1>
                  Checkout (<Link to ='/checkout'>{basket?.length} items
                  </Link>)
                </h1>
                <div className='paymentSection'>
                    <div className='paymentTitle'>
                    <h3>Delivery Address</h3>
                    </div>

                <div className='paymentAddress'>
                    <p>{user?.email}</p>
                    <p>add line1</p>
                    <p>add line2</p>
                </div>
                </div>
                <div className='paymentSection'>
                    <div className='paymentTitle'>
                    <h3>review items and delivery</h3>
                    </div>
                    <div className='payment_items'>
                    {basket.map( item => (
                        <checkoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating} 
                        />
                    ))}
                    </div>
                </div>
                <div className='paymentSection'>
                    <div className='paymentTitle'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className='paymentDetails'>
                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange}/>
                  
                    <div className='payment_priceContainer'></div>
                    </form>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default Payment
