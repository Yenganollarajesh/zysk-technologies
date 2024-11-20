import React from 'react';
import './Socialproofsection.css'; // Ensure you have a separate CSS file for styles

export default function Socialproofsection() {
    const Boltshift = require('./images/BOLTSHIFT.jpg')
    const Lightbox = require('./images/LIGHTBOX.png')
    const FeatherDev = require('./images/FeatherDev.jpg')
    const Spherule = require('./images/Spherule.png')
    const GlobalBank = require('./images/GlobalBank.png')
    const Nietzsche = require('./images/Nietzsche.png')

    return (
        <div className='socialproofsection-main-container'>
            <p>Join 400+ companies already growing</p>
            <div class="socialproofsection-container">
                <div>
                    <img
                        src={Boltshift}
                        alt="Profile"
                    />
                    <h1>Boltshift</h1>
                </div>
                <div>
                    <img 
                        src={Lightbox}
                        alt="Profile"
                    />
                    <h1>Lightbox</h1>
                </div>
                <div>
                    <img 
                        src={FeatherDev}
                        alt="Profile"
                    />
                    <h1>FeatherDev</h1>
                </div>
                <div>
                    <img 
                        src={Spherule}
                        alt="Profile"
                    />
                    <h1>Spherule</h1>
                </div>
                <div>
                    <img 
                        src={GlobalBank}
                        alt="Profile"
                    />
                    <h1>GlobalBank</h1>
                </div>
                <div>
                    <img 
                        src={Nietzsche}
                        alt="Profile"
                    />
                    <h1>Nietzsche</h1>
                </div>

            </div>

        </div>
    );
}
