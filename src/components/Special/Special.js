import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = ({ Ornament }) => {
    const ring = useContext(RingContext);
    return (
        <div>
            <h2>Special</h2>
            <p>Gift:{Ornament}</p>
            <p>Gift Form Grandpa: {ring}</p>
        </div>
    );
};

export default Special;