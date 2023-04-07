import React from 'react';
import Cousin from '../Cousin/Cousin';

const Aunty = ({hasFriend,ring}) => {
    return (
        <div>
            <h2>Aunty</h2>
            <Cousin>Abir</Cousin>
            <Cousin hasFriend={true}  ring={ring}>Nabir</Cousin>
        </div>
    );
};

export default Aunty;