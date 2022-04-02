import React from 'react';
import Special from '../Special/Special';

const MySelf = ({ house, Ornament }) => {
    return (
        <div>
            <h2>My Self</h2>
            <p>House: {house}</p>
            <Special
            house = {house}
            Ornament={Ornament}
            ></Special>
        </div>
    );
};

export default MySelf;