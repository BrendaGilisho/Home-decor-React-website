import React from "react";
import './OutdoorCategories.css';

import { NavLink } from "react-router-dom";

import patioSet from '../assets/images/patio-set.jpg';
import patioSwing from '../assets/images/patio-swing.jpg';
import armChair from '../assets/images/grey-armchair.jpg';
import patioDining from '../assets/images/patio-dining.jpg';

import planters from '../assets/images/planters.jpg';
import hangingChair from '../assets/images/hanging-chair.jpg';
import firePit from '../assets/images/fire-pit.jpg';
import patioUmbrella from '../assets/images/patio-umbrella.jpg';

import hammock from '../assets/images/hammock.jpg';
import outdoorCushions from '../assets/images/outdoor-cushions.jpg';
import outdoorRugs from '../assets/images/outdoor-rugs.jpg';
import outdoorBench from '../assets/images/outdoor-bench.jpg';




export default function HolidayCategories() {
    return (
        <div>
            <div className='outdoor-main'>
                <div className='outdoor-container'>




                    <div className='categories'>
                        <div className='category-menu'>

                            <div className='shop-by-category'>
                                <div className='shop-by-category-title'>SHOP BY CATEGORY</div>
                                <NavLink to="notice" className='patio'>
                                    Patio Furniture
                                </NavLink>
                                <NavLink to="notice" className='gardening-lawn'>
                                    Gardening & Lawn
                                </NavLink>
                                <NavLink to="notice" className='grills-cooking'>
                                    Grills & Cooking
                                </NavLink>
                                <NavLink to="notice" className='outdoor-storage'>
                                    Outdoor Storage
                                </NavLink>
                                <NavLink to="notice" className='umbrellas-shade'>
                                    Umbrellas & Shade
                                </NavLink>
                                <NavLink to="notice" className='cushion-covers'>
                                    Cushion & Covers
                                </NavLink>
                                <NavLink to="notice" className='entertainment'>
                                    Entertainment
                                </NavLink>
                                <NavLink to="notice" className='beach-pool'>
                                    Beach & Pool
                                </NavLink>

                            </div>

                            <div className='shop-by-brand'>
                                <div className='shop-by-brand-title'>SHOP BY BRAND</div>
                                <NavLink to="notice" className='hn-outdoor'>
                                    HN Outdoor
                                </NavLink>
                                <NavLink to="notice" className='woodard'>
                                    Woodard
                                </NavLink>
                                <NavLink to="notice" className='design-toscano'>
                                    Design Toscano
                                </NavLink>
                                <NavLink to="notice" className='best-selling-home'>
                                    Best Selling Home
                                </NavLink>

                            </div>

                            <div className='shop-outdoor-by'>
                                <div className='shop-outdoor-by-title'>SHOP OUTDOOR BY</div>
                                <NavLink to="notice" className='new-product'>
                                    New Product
                                </NavLink>
                                <NavLink to="notice" className='top-selling'>
                                    Top Selling
                                </NavLink>
                                <NavLink to="notice" className='quick-shipping'>
                                    Quick Shipping
                                </NavLink>


                            </div>

                            <div className='shop-by-collection'>
                                <div className='shop-by-collection-title'>SHOP BY COLLECTION</div>
                                <NavLink to="notice" className='patio-collection'>
                                    Patio Furniture Collection
                                </NavLink>
                                <NavLink to="notice" className='garden-collection'>
                                    Garden & Decor Collection
                                </NavLink>


                            </div>

                        </div>
                    </div>



                    <div className='outdoor-living'>
                        <div className='outdoor-sample-pictures'>

                            <div className='outdoor-pics-row1'>
                                <div className='row1-pic1'>
                                    <div className='patio-sets'>
                                        <NavLink to="SingleProduct" >
                                            <img className='hanging-chair' src={patioSet} />
                                        </NavLink>
                                    </div>
                                    <div className='patio-set-name'>
                                        <NavLink to="SingleProduct" >
                                            Patio Conversion Sets
                                        </NavLink>
                                    </div>

                                </div>
                                <div className='row1-pic2'>
                                    <div className='patio-sets'>
                                        <NavLink to="SingleProduct" >
                                            <img className='hanging-chair' src={patioSwing} />
                                        </NavLink>
                                    </div>
                                    <div className='patio-set-name'>
                                        <NavLink to="SingleProduct" >
                                            Patio Swing
                                        </NavLink>
                                    </div>


                                </div>
                                <div className='row1-pic3'>
                                    <div className='patio-sets'>
                                        <NavLink to="SingleProduct" >
                                            <img className='hanging-chair' src={armChair} />
                                        </NavLink>
                                    </div>
                                    <div className='patio-set-name'>
                                        <NavLink to="SingleProduct" >
                                            Armchairs
                                        </NavLink>
                                    </div>


                                </div>
                                <div className='row1-pic4'>
                                    <div className='patio-sets'>
                                        <NavLink to="SingleProduct" >
                                            <img className='hanging-chair' src={patioDining} />
                                        </NavLink>
                                    </div>
                                    <div className='patio-set-name'>
                                        <NavLink to="SingleProduct" >
                                            Patio Dining
                                        </NavLink>
                                    </div>


                                </div>

                            </div>


                            <div className='outdoor-pics-row2'>
                                <div className='row1-pic1'>
                                    <div className='patio-sets'>
                                        <NavLink to="SingleProduct" >
                                            <img className='hanging-chair' src={planters} />
                                        </NavLink>
                                    </div>
                                    <div className='patio-set-name'>
                                        <NavLink to="SingleProduct" >
                                            Planters
                                        </NavLink>
                                    </div>

                                </div>
                                <div className='row1-pic2'>
                                    <div className='patio-sets'>
                                        <NavLink to="SingleProduct" >
                                            <img className='hanging-chair' src={hangingChair} />
                                        </NavLink>
                                    </div>
                                    <div className='patio-set-name'>
                                        <NavLink to="SingleProduct" >
                                            Hanging Chair
                                        </NavLink>
                                    </div>


                                </div>
                                <div className='row1-pic3'>
                                    <div className='patio-sets'>
                                        <NavLink to="SingleProduct" >
                                            <img className='hanging-chair' src={firePit} />
                                        </NavLink>
                                    </div>
                                    <div className='patio-set-name'>
                                        <NavLink to="SingleProduct" >
                                            Fire pits
                                        </NavLink>
                                    </div>


                                </div>
                                <div className='row1-pic4'>
                                    <div className='patio-sets'>
                                        <NavLink to="SingleProduct" >
                                            <img className='hanging-chair' src={patioUmbrella} />
                                        </NavLink>
                                    </div>
                                    <div className='patio-set-name'>
                                        <NavLink to="SingleProduct" >
                                            Patio Umbrella
                                        </NavLink>
                                    </div>


                                </div>

                            </div>
                            <div className='outdoor-pics-row3'>
                                <div className='row1-pic1'>
                                    <div className='patio-sets'>
                                        <NavLink to="SingleProduct" >
                                            <img className='hanging-chair' src={hammock} />
                                        </NavLink>
                                    </div>
                                    <div className='patio-set-name'>
                                        <NavLink to="SingleProduct" >
                                            Hammock
                                        </NavLink>
                                    </div>

                                </div>
                                <div className='row1-pic2'>
                                    <div className='patio-sets'>
                                        <NavLink to="SingleProduct" >
                                            <img className='hanging-chair' src={outdoorCushions} />
                                        </NavLink>
                                    </div>
                                    <div className='patio-set-name'>
                                        <NavLink to="SingleProduct" >
                                            Outdoor Cushions
                                        </NavLink>
                                    </div>


                                </div>
                                <div className='row1-pic3'>
                                    <div className='patio-sets'>
                                        <NavLink to="SingleProduct" >
                                            <img className='hanging-chair' src={outdoorRugs} />
                                        </NavLink>
                                    </div>
                                    <div className='patio-set-name'>
                                        <NavLink to="SingleProduct" >
                                            Outdoor Rugs
                                        </NavLink>
                                    </div>


                                </div>
                                <div className='row1-pic4'>
                                    <div className='patio-sets'>
                                        <NavLink to="SingleProduct" >
                                            <img className='hanging-chair' src={outdoorBench} />
                                        </NavLink>
                                    </div>
                                    <div className='patio-set-name'>
                                        <NavLink to="SingleProduct" >
                                            Outdoor Bench
                                        </NavLink>
                                    </div>


                                </div>


                            </div>

                            {/* <div className='outdoor-pics-row4'>
                                <div className='row1-pic1'>
                                    <div className='patio-sets'>
                                        <NavLink to="SingleProduct" >
                                            <img className='hanging-chair' src={hangingChair} />
                                        </NavLink>
                                    </div>
                                    <div className='patio-set-name'>
                                        <NavLink to="SingleProduct" >
                                            Patio Conversion Sets
                                        </NavLink>
                                    </div>

                                </div>
                                <div className='row1-pic2'>
                                    <div className='patio-sets'>
                                        <NavLink to="SingleProduct" >
                                            <img className='hanging-chair' src={hangingChair} />
                                        </NavLink>
                                    </div>
                                    <div className='patio-set-name'>
                                        <NavLink to="SingleProduct" >
                                            Patio Conversion Sets
                                        </NavLink>
                                    </div>


                                </div>
                                <div className='row1-pic3'>
                                    <div className='patio-sets'>
                                        <NavLink to="SingleProduct" >
                                            <img className='hanging-chair' src={hangingChair} />
                                        </NavLink>
                                    </div>
                                    <div className='patio-set-name'>
                                        <NavLink to="SingleProduct" >
                                            Patio Conversion Sets
                                        </NavLink>
                                    </div>


                                </div>
                                <div className='row1-pic4'>
                                    <div className='patio-sets'>
                                        <NavLink to="SingleProduct" >
                                            <img className='hanging-chair' src={hangingChair} />
                                        </NavLink>
                                    </div>
                                    <div className='patio-set-name'>
                                        <NavLink to="SingleProduct" >
                                            Patio Conversion Sets
                                        </NavLink>
                                    </div>


                                </div>

                            </div> */}

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}


