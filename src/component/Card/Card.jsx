import React from 'react';
import './Card.css'

const Card = ({ cart, removeShirt }) => {
    let massage;
    if (cart.length === 2) {
        massage = <p>Add some more product</p>
    }
    else {
        massage = <p>Aro koyekta add koren</p>
    }

    return (
        <div>
            <h4 className={` bold ${cart.length===2 ? 'skyblue' : 'purple'}`}>Ordered product : {cart.length}</h4>
            {massage}
            {cart.length < 4 ? <p className='purple'>Aro add koren na hole apni fokir</p> : <p> Besi besi kinen discount paben</p>}

            {
                cart.map(shirt => <p key={cart._id}>{shirt.name}
                    <button onClick={() => removeShirt(shirt._id)}>Remove</button>
                </p>)
            }

            {cart.length < 3 && <p className={cart.length===2 ? 'skyblue': 'bold'}>doule bonus paben na</p> }
            {
                cart.length > 15 || <p> acha jan</p>
            }
        </div>
    );
};

export default Card;