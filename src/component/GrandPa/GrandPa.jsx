import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './GrandPa.css'
export const RingContext = createContext('gold')
export const MonyContext = createContext(0)

const GrandPa = () => {

    const [money, setMoney] = useState(0)

    const ring = 'Diamond'
    return (
        <div className='components-head'>
            <h1 className=''>GrandPa</h1>
            <p>GrandPa has money : {money} tk</p>
            <MonyContext.Provider value={[money, setMoney]}>
                <RingContext.Provider value='golden ring'>
                    <section className='flex'>
                        <Father></Father>
                        <Uncle></Uncle>
                        <Aunty ring={ring}></Aunty>
                    </section>
                </RingContext.Provider>
            </MonyContext.Provider>
        </div>
    );
};

export default GrandPa;