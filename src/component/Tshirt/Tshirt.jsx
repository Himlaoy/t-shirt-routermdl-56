import React from 'react';
import './Tshirt.css'

const Tshirt = ({tshirt, handleBtn}) => {
    // console.log(tshirt)
    const {name,picture,price,_id} = tshirt
    
    return (
        <div className='T-shirt-container'>
            <img src= {picture} alt="" />
            <p>Name: {name}</p>
            <p>Price : {price}</p>
            <button onClick={()=>handleBtn(tshirt)}>Buy now</button>
        </div>
    );
};

export default Tshirt;