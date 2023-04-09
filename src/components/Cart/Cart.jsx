import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveFromCart }) => {

    let message;
    if (cart.length === 0) {
        message = <p>Please add some products.</p>
    }
    else {
        message = <div>
            <p>Bololoxxx</p>
            <p>Thanks for wasting money</p>
        </div>
    }


    return (
        <div>
            <h2 className={cart.length === 1 ? 'blue' : 'red'}>Order summary:{cart.length}</h2>
            <p className={`bold ${cart.length === 4 ? 'yellow' : 'orange'}`}>something to buy</p>
            {
                cart.length > 2 ? <span className='purple'>Aro Kino</span> : <span>Fokira</span>
            }
            {message}
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                >{tshirt.name} <button
                    onClick={() => handleRemoveFromCart(tshirt._id)}
                >Remove</button></p>)
            }
            {
                cart.length === 2 && <p>Double bonanza!!</p>
            }
            {
                cart.length === 3 || <h3>Tinta to hoilo nah</h3>
            }
        </div>
    );
};

export default Cart;