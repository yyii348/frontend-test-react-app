import React from 'react';
import './CartItem.css';

function CartItem(props) {
    const cartItem = props.cartItems;

    return (
            <div className='shop-cart'>
                {cartItem.map((item) => (
                    <ul key={item.id}>
                        <div className='Cart-details'>
                            <img src={item.imageURL} alt='item-Logo' height='auto' width='37%' object-fit='contain'/>
                            <div className='Shopping-cart'>
                                <p className='item-title'>{item.title}</p>
                                <p className='item-price'>{item.count} x   ${item.price}</p>
                                <p className='item-size'>Size: {item.size}</p>
                            </div>
                        </div>
                    </ul>
                ))}
            </div>
    )
}

export default CartItem