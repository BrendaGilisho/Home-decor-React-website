import React, { useState, useEffect } from 'react';

import './SingleProduct.css'
import livingRoom from '../assets/images/look1-livingroom.jpg';
import { Link } from 'react-router-dom';

export default function SingleProduct() {
    const [count, setCount] = useState(0);

    return (
        <div className='products'>
            <div className='productImage'>
                <img className='item' src={livingRoom} />
            </div>
            <div className='product-description'>
                <div>Title</div>
                <div>Price ...............</div>

                <div className='total-purchases'>
                    <button className='minus-btn' onClick={() => setCount(count - 1)}>
                        -
                    </button>

                    <div className='count'>{count}</div>

                    <button className='add-btn'  onClick={() => setCount(count + 1)}>
                        +
                    </button>

                    <p>(1 item(s) added)</p>
                </div>
                <div >
                    <Link to='/Cart'>
                        <button className='add-to-cart'>Add to Cart</button>
                    </Link>
                </div>
            </div>

        </div>
    );
}