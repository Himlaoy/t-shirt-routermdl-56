import React, { useContext } from 'react';
import { RingContext } from '../GrandPa/GrandPa';

const Special = () => {
    const ring = useContext(RingContext)
    return (
        <div>
            <h2>Special</h2>
            <p><span>{ring}</span></p>
            
        </div>
    );
};

export default Special;