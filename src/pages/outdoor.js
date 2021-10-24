import React, { useState, useEffect } from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';
import Carousel  from 'react-elastic-carousel';

import lightImage from '../assets/images/look6-decoration-light.jpg';



const Outdoor = (props) => {
    const [count, setCount] = useState(0);

    const breakPoints = [
        {width: 1, itemsToShow: 1},
        {width: 500, itemsToShow: 2},
        {width: 768, itemsToShow: 3},
        {width: 1200, itemsToShow: 4}
    ];
    

    return (
        <div>
            <h1>
                Outdoor...
            </h1>


            <p>2. You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>

            <div className='hot-deals-cards'>
                <Carousel breakPoints={breakPoints}>
                    <div className='product1'>
                        <img className='product1-img' src={lightImage} />
                        <div>
                            <h2>Product Name</h2>
                        </div>
                        <div>
                            <h2>Price</h2>
                        </div>
                        <div>
                            <h2>Buy and Stars</h2>
                        </div>
                    </div>

                    <div className='product1'>
                        <img className='product1-img' src={lightImage} />
                        <div>
                            <h2>Product Name</h2>
                        </div>
                        <div>
                            <h2>Price</h2>
                        </div>
                        <div>
                            <h2>Buy and Stars</h2>
                        </div>
                    </div>

                    <div className='product1'>
                        <img className='product1-img' src={lightImage} />
                        <div>
                            <h2>Product Name</h2>
                        </div>
                        <div>
                            <h2>Price</h2>
                        </div>
                        <div>
                            <h2>Buy and Stars</h2>
                        </div>
                    </div>

                    <div className='product1'>
                        <img className='product1-img' src={lightImage} />
                        <div>
                            <h2>Product Name</h2>
                        </div>
                        <div>
                            <h2>Price</h2>
                        </div>
                        <div>
                            <h2>Buy and Stars</h2>
                        </div>
                    </div>

                    <div className='product1'>
                        <img className='product1-img' src={lightImage} />
                        <div>
                            <h2>Product Name</h2>
                        </div>
                        <div>
                            <h2>Price</h2>
                        </div>
                        <div>
                            <h2>Buy and Stars</h2>
                        </div>
                    </div>

                    <div className='product1'>
                        <img className='product1-img' src={lightImage} />
                        <div>
                            <h2>Product Name</h2>
                        </div>
                        <div>
                            <h2>Price</h2>
                        </div>
                        <div>
                            <h2>Buy and Stars</h2>
                        </div>
                    </div>

                    {/* <div className='product2'>
                        <img className='card2' src={lightImage} />
                    </div>

                    <div className='product3'>
                        <img className='card3' src={lightImage} />
                    </div>

                    <div className='product4'>
                        <img className='card4' src={lightImage} />
                    </div>

                    <div className='product5'>
                        <img className='card5' src={lightImage} />
                    </div>

                    <div className='product6'>
                        <img className='card6' src={lightImage} />
                    </div> */}
                </Carousel>
            </div>
        </div>
    );
}

export default Outdoor;



