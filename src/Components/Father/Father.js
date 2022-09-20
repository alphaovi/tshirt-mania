import React from 'react';
import Brother from '../Brother/Brother';
import MySelf from '../MySelf/MySelf';
import Sister from '../Sister/Sister';
import "./Father.css";

const Father = ({ house, ornament }) => {
    return (
        <div className="father-container">
            <h4>Father</h4>
            <p>House: {house}</p>
            <div className="child">
                <MySelf house={house} ornament={ornament}></MySelf>
                <Brother house={house}></Brother>
                <Sister house={house}></Sister>
            </div>
        </div>
    );
};

export default Father;