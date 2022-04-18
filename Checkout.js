import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import {useStateValue} from './StateProvider';

function Checkout() {
    const [{basket}, dispatch] = useStateValue();  //pulling items from basket
    return (
        <div className='checkout'>
            <div className='checkout_left'>
                 <img  className='checkout_ad' 
                      src = " "
                      alt=""/>
                 <div> 
                     <h3>Hello, {user.email}</h3>
                     <h2 className='checkout_title'>Your Shopping Basket</h2>

                  {basket.map(item => (
                      <CheckoutProduct
                      id = {item.id}
                      title = {title.id}
                      image = {image.id}
                      price = {price.id}
                      rating = {rating.id}
                      />
                      )) }
                 </div>
            </div>

            <div className='checkout_right'>
                     <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
