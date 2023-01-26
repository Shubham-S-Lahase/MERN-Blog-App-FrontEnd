import React from "react";
import './AsideInfo.css';

const AsideInfo = () => {
    return(
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <h2><u><b>About Us</b></u></h2>
                    <p className="p1">
                        <b>Live in curiosity!</b>
                    </p>
                    <img src={require('./logo.jpg')} alt="app-logo"/>
                    <p className="p2">Discover stories, thinking, and expertise from writers on any topic.</p>
                </div>
                <div className="flip-card-back">
                    <img src={require('./mypic.JPG')} alt="" />
                    <h3>Designed and made by:</h3>
                    <h1><u>Shubham Lahase</u></h1>
                </div>
            </div>
        </div>
    );
};

export default AsideInfo;

