import React from "react";
import { Link } from 'react-router-dom';
import './Welcome.css';

const Welcome = () => {
    return(
        <>
            <div className="welcome-container">
                <div className="enter">
                <Link to='/Login' style={{ color:"black", textDecoration:"none", fontWeight:"bold" }}>Click here to Enter</Link>
                </div>   
            </div>
        </>
    );
};

export default Welcome;