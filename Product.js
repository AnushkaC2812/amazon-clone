import React from 'react';
import './Product.css';

function Product(id, title, price, image, rating) {
    const [state, dispatch] = useStateValue();
    const addToBasket = () => {
        //dispatch the item into the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                price: price,
                image: image,
                rating: rating,
            },
        });
    };
    return (
        <div className='product'>
            <div className='product_info'>
                <p>{title}</p>
                <p className='product_price'>
                    <strong>Rs.</strong>
                    <small>{price}</small>
                </p>
                <div className='product_rating'>
                    {Array(rating)
                       .fill()
                       .map((_, i) => (
                        <p>star emoji</p>
                       ))
                       }
                </div>
            </div>
            <img 
                src = {image}
                alt = ""
            />
            <button onClick={addToBasket}> add to basket </button>
        </div>
    )
}

export default Product
