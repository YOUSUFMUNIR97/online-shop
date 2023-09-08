import React from 'react';
import Banner from '../Banner/Banner';
import Food from '../Product/Product';
/**
 * Homepage provides Home page design and things
 * these components only works in homepage
 */
const Homepage = () => {
    return (
        <div>
            <Banner/>
            <Food/>
        </div>
    );
};

export default Homepage;