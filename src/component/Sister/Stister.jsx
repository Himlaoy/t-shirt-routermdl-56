import React, { useContext } from 'react';
import { MonyContext } from '../GrandPa/GrandPa';

const Stister = () => {
    const [money, setMoney] =useContext(MonyContext)
    return (
        <div>
            <h2>Sister</h2>
            <p>amar didir ace : {money} tk</p>
            <button onClick={()=> setMoney(money + 1000)}>Press to get money</button>
            
        </div>
    );
};

export default Stister;