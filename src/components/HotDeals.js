import React from 'react';
import './HotDeals.css';

// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Product from './SingleProduct';

import Carousel from 'react-elastic-carousel';

import rusticBedroom from '../assets/images/look3-rusticbedroom.jpg';
import livingRoom from '../assets/images/look1-livingroom.jpg';
import blueLivingRoom from '../assets/images/look2-livingroom-bluewhite.jpg';
import kitchen from '../assets/images/look5-kitchen.jpg';
import smallOutdoor from '../assets/images/look4-small-outdoor.jpg';
import lighting from '../assets/images/lighting.jpg';
import { Link } from 'react-router-dom';



export default function HotDeals() {

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 500, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 }
    ];

    return (
        <div className='hot-deals'>

            <div className='hot-deals-title-arrows'>

                <div className='hot-deals-title'>
                    <p>Shop top rated products...</p>
                </div>

            </div>


            <div className='hot-deals-cards'>
                <Carousel 
                    breakPoints={breakPoints}
                    pagination={false}
                    >

                    <div className='product1'>

                        <img className='card1' src={rusticBedroom} />
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

                    <div className='product2'>
                        <img className='card2' src={livingRoom} />
                        <Link to="/SingleProduct">
                            <div>
                                <h2>Product Name</h2>
                            </div>
                            <div>
                                <h2>Price</h2>
                            </div>
                            <div>
                                <h2>Buy and Stars</h2>
                            </div>
                        </Link>

                    </div>

                    <div className='product3'>
                        <img className='card3' src={blueLivingRoom} />
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

                    <div className='product4'>
                        <img className='card4' src={kitchen} />
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

                    <div className='product5'>
                        <img className='card5' src={smallOutdoor} />
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

                    <div className='product6'>
                        <img className='card6' src={lighting} />
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
                </Carousel>
            </div>


        </div>
    );
}