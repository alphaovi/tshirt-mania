import React from 'react';
import "./TShirt.css"
const TShirt = ({tShirt, handleAddToCart}) => {
    const {name, price, picture} = tShirt;
    return (
        <div className="t-shirt">
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <p>Price: ${price}</p>
            <button onClick={() => handleAddToCart(tShirt)}>Add to Cart</button>
        </div>
    );
};

export default TShirt;