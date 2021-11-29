import React from 'react';
import './Banner.css'
import banner2 from '../assets/images/banner3.jpg';

export default function Banner() {
    
    return (
        <div>
            <div className='banner2' >
                <img className="banner2-img"  alt='banner2' src={banner2} />
            </div>

            <div className='text-on-image'>
                <h3>Welcome to Home Decor</h3>
                <p>We have all you need. Just ask or look around</p>
                <button>SHOP NOW</button>
            </div>
        </div>


    );
}