import React, { useState } from 'react';
import './Header.css';

import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import Socialproofsection from "./Socialproofsection"
import Featuressection from "./Featuressection"
import Testimonialsection from "./Testimonialsection"
import Advancedfeatures from "./Advancedfeatures"
import FaqSection from "./FaqSection"
import Blogsection from "./Blogsection"
import CtaSection from "./CtaSection"
import Footer from "./Footer"



const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    const profile = require('./images/rajesh photo.jpeg');

    const untitledUi = require("./images/Untitled Ul.png")
    const stats = require('./images/Hero header section.png')
    const stats2 = require('./images/Screenshot 2024-11-19 233531.png')

    return (
        <div>
            <header className="header">
                <div className="header-left">

                    <div className="header-profile">
                        <img
                            className="profile-photo1"
                            src={untitledUi}
                            alt="Profile"
                        />
                        <p className="message">Untitled Message</p>
                    </div>


                    <nav className={`navigation ${menuOpen ? 'open' : ''}`}>
                        <ul>
                            <li><a href="#home"  >Home</a></li>
                            <li><a href="#products"  >Products</a></li>
                            <li><a href="#resources"  >Resources</a></li>
                            <li><a href="#pricing"  >Pricing</a></li>
                        </ul>
                    </nav>
                </div>


                <div className="menu-icon" onClick={handleMenuToggle}>
                    <span className="hamburger-icon">☰</span>
                </div>


                <div className="header-right">
                    <img
                        className="profile-photo"
                        src={profile}
                        alt="Profile"
                    />
                </div>
            </header>

            <div className="content">
                <div className="content-box">
                    <div className="inner-box">
                        <p className='contentpara'>New Feature</p>
                    </div>
                    <p className='contentpara'>Check out the team dashboard   <FontAwesomeIcon icon={faArrowRight} /></p>
                </div>
                <div className='analytics-container'>
                    <h1>Beautiful analytics to grow smarter</h1>
                    <p>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
                </div>
                <div className='signup-container'>
                    <button className='demo-button'> <FontAwesomeIcon icon={faPlayCircle} /> Demo</button>
                    <button className='signup-button'>Sign Up</button>
                </div>
                <div className='stats-container'>
                    <img
                        className='stats-img'
                        src={stats}
                        alt="stats"
                    />
                </div>
                <div className='stats-container2'>
                    <img
                        className='stats-img'
                        src={stats2}
                        alt="stats"
                    />
                </div>
                <Socialproofsection />
                <Featuressection />
                <Testimonialsection />
                <Advancedfeatures />
                <FaqSection />
                <Blogsection />
                <CtaSection />
                <Footer />
            </div>
        </div>
    );
};

export default Header;
