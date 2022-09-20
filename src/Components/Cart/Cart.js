import React from 'react';

const Cart = ({ cart, handleRemoveFromCart }) => {
    // element variable 

    let command;
    if(cart.length === 0){
        command = <div>
            <h4>Ohh kipta, khoroc kor</h4>
            <p>Kinos na kn</p>
        </div>
    }
    else if (cart.length === 1){
        command = <p>Please do more shopping. If you buy more than 5 item you will get a foregin trip.</p>
    }
    else if (cart.length === 6) {
        command = <p> You will get your trip as soon as possible</p>
    }
    else {
        <p>Thanks for shopping</p>
    }
    return (
        <div>
            <h4>Cart Selected: {cart.length}</h4>
            {command}
            {
                cart.map(tShirt => <div>
                    <h3>Name: {tShirt.name}</h3>
                    <p>Price: {tShirt.price}</p>
                    <button onClick={() => handleRemoveFromCart(tShirt)}>X</button>
                </div>)
            }
        </div>
    );
};

export default Cart;