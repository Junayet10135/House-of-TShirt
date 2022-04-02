import React from 'react';
import Brother from '../Brother/Brother';
import MySelf from '../Myself/MySelf';
import Stster from '../SIster/Stster';

const Father = ({ house, Ornament}) => {
    return (
        <div>
           <h2>Father</h2> 
           <p>House: {house}</p>
            <div style={{ display: 'flex'}} >
                <MySelf
                    house={house}
                    Ornament={Ornament}
                ></MySelf>
                <Brother
                    house={house}
                ></Brother>
                <Stster
                    house={house}
                ></Stster>
           </div>
        </div>
    );
};

export default Father;