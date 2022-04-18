import React from 'react';
import './CheckoutProduct.css';
import {useStateValue} from './StateProvider';

function CheckoutProduct() {
    const [{basket}, dispatch] = useStateValue();
    
    const removeFromBasket = () => {
        dispatch ({       //dispatching action of below type
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }
    return (
        <div className='checkoutProduct'>  
                <img className='checkoutProduct_img' src={image} />
            <div className='checkoutProduct_info'>
                <p className='checkoutProduct_title'>{title}
                </p>
                <p className='checkoutProduct_price'>{title}
                <small>Rs.</small>
                <strong>{price}</strong>
                </p>
            <div className='checkoutProduct_rating'>
                {Array(rating)
                .fill()
                .map((_,i) => (
                <p>{star}</p>
                ))}
            </div>    
            <button onClick= {removeFromBasket}> 
                Remove from Basket 
            </button>
            </div>
        </div>
    )
}

export default CheckoutProduct
