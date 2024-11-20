import React from 'react';
import './Socialproofsection.css';


export default function Socialproofsection() {
    const companies = [
        { image: require('./images/BOLTSHIFT.jpg'), name: 'Boltshift' },
        { image: require('./images/LIGHTBOX.png'), name: 'Lightbox' },
        { image: require('./images/FeatherDev.jpg'), name: 'FeatherDev' },
        { image: require('./images/Spherule.png'), name: 'Spherule' },
        { image: require('./images/GlobalBank.png'), name: 'GlobalBank' },
        { image: require('./images/Nietzsche.png'), name: 'Nietzsche' },
    ];

    return (
        <div className='socialproofsection-main-container'>
            <p>Join 400+ companies already growing</p>
            <div className="socialproofsection-container">
                {companies.map((company, index) => (
                    <div key={index}>
                        <img
                            src={company.image}
                            alt={company.name}
                        />
                        <h1>{company.name}</h1>
                    </div>
                ))}
            </div>
        </div>
    );
}
