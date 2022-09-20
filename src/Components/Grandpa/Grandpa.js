import React, { useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import "./Grandpa.css";

const Grandpa = () => {
    const [house, setHouse] = useState(1);
    
    const ornament = "Diamond Ring";


    const handleBuyHouse = () => {
        const newHouse = house + 1;
        setHouse(newHouse);
    }
    return (
        <div className="grandpa">
            <h4>Grandpa</h4>
            <button onClick={handleBuyHouse}>Buy A House</button>
            <p>House: {house}</p>
            <section className="grandpa-child">
                <Father house={house} ornament={ornament}></Father>
                <Uncle house={house}></Uncle>
                <Aunty house={house}></Aunty>
            </section>
        </div>
    );
};

export default Grandpa;