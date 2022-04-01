import React, { useState } from 'react';
import './Home.css'
import Cart from '../Cart/Cart';
import useTShirts from '../hooks/useTShirts';
import TShirt from '../TShirt/TShirt';

const Home = () => {
    const [tShirts, setTShirts] = useTShirts();
    const [cart, setCart] = useState([]);

    const handleAddToCart =(selectedItem)=>{
        const exists = cart.find(tShirt => tShirt._id === selectedItem._id);

        if(!exists){
            const newCart = [...cart, selectedItem];
            setCart(newCart);
        }
        else{
            alert('Item ta ekbar disos bhai');
        }
        
    }

    const handleRemoveFromCart = (selectedItem) =>{
        const rest = cart.filter(tShirt => tShirt._id !== selectedItem._id);
        setCart(rest);
    }

    return (
        <div className='home-container'>
            
            <div className="tshirt-container">
            
            {
                tShirts.map(tShirt => <TShirt
                    key = {tShirt._id}
                    tShirt = {tShirt}
                    handleAddToCart={handleAddToCart}
                ></TShirt>)
            }

            </div>
            <div className="cart-container">
                <Cart
                cart = {cart}
                key={cart._id}
                handleRemoveFromCart={handleRemoveFromCart}
                >
                </Cart>
            </div>
        </div>
    );
};

export default Home;