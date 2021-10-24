import React, { useState, useEffect } from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css";

import Footer from '../components/Footer';


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

            < Footer />
        </div>
    );
}

export default Outdoor;



