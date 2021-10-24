import React from 'react';
import './Banner.css'
import banner from '../assets/images/banner.jpg';

export default function Banner() {
    const bannerFit =[
        {width:1, width:100}
    ];
    return(
        <div className='banner' bannerFit={bannerFit}>
            <img className="banner-img" alt='banner' src={banner} />
        </div>
    );
}