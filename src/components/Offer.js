import React from 'react';
import './Offer.css';

import OfferImage from '../assets/images/offer-image.jpg'


export default function Offer(){
    return(
        <div className='offer-container'>
            <img className='offer-img' src={OfferImage} />

        </div>
    );
}