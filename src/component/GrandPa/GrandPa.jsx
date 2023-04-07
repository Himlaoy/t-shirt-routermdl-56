import React, { createContext } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './GrandPa.css'
const RingCont = createContext('gold')

const GrandPa = () => {

    const ring = 'Diamond'
    return (
        <div className='components-head'>
            <h1 className=''>GrandPa</h1>
            <section className='flex'>
                <Father></Father>
                <Uncle></Uncle>
                <Aunty ring={ring}></Aunty>
            </section>
        </div>
    );
};

export default GrandPa;