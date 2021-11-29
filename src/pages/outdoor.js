import React from 'react';
import './outdoor.css'

import Footer from '../components/Footer';
import OutdoorCategories from '../components/OutdoorCategories';


const Outdoor = () => {

    return (
        <div>
            <div className='outdoor'>
                <div className='line-before'></div>

                <div className='outdoor-title'>
                    <p>Outdoor Decor</p>
                </div>

                <div className='line-after'></div>


            </div>



            < OutdoorCategories />
            < Footer />

        </div>
    );
}

export default Outdoor;



