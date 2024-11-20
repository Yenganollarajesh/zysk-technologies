import React from "react";
import './Testimonialsection.css';

export default function Testimonialsection() {
    const sisyphus = require('./images/Sisyphus.png');
    const candice = require('./images/Candice .png');

    return (
        <div className="testimonial-container">
            <div className="testimonial-header">
                <img src={sisyphus} alt="sisyphus" />
                <p>Sisyphus</p>
            </div>
            <h1 className="testimonial-title">We've been using Untitled to kick start every new project and can't imagine working without it.</h1> 
            <img src={candice} alt="candice" className="testimonial-image" />
            <p className="testimonial-name">Candice Wu</p>
            <p className="testimonial-position">Product Manager, Sisyphus</p>
        </div>
    );
}
