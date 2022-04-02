import React, { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'

export const RingContext = createContext('diamond');

const Grandpa = () => {
    const [house, setHouse] =useState(1);

    const Ornament = 'Diamond Ring';
    const handleNewHouse =()=>{
        const newHouseCount = house + 1;
        setHouse(newHouseCount);
    }
    return (
        <RingContext.Provider value='gold ring'>
            <div style={{ border: '2px solid goldenrod' }}>
                <h2>Grandpa</h2>
                <button
                    onClick={handleNewHouse}
                >Buy a new house</button>
                <p>House: {house}</p>
                <div className='grandpa'>
                    <Father
                        house={house}
                        Ornament={Ornament}
                    ></Father>
                    <Uncle
                        house={house}
                    ></Uncle>
                    <Aunty
                        house={house}
                    ></Aunty>
                </div>
            </div>
        </RingContext.Provider>
    );
};

export default Grandpa;