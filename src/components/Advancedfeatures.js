import React from 'react';
import './Advancedfeatures.css';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Advancedfeatures() {
    const featuresImg2 = require('./images/FeaturesImg2.png');
    const featuresImg3 = require('./images/featuresImg3.png');

    const features = [
        {
            img: require('./images/Share.png'),
            title: "Share team inboxes",
            description: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
        },
        {
            img: require('./images/Deliver.jpg'),
            title: "Deliver instant answers",
            description: "An all-in-one customer service platform that helps you balance everything your customers need and to be happy.",
        },
        {
            img: require('./images/Manage.png'),
            title: "Manage your team with reports",
            description: "Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drill down on the data in a couple clicks.",
        }
    ];

    return (
        <div className='advancedfeatures-main-container'>
            <div className='advancedfeatures-head'>
                <div className='features-heading'>
                    <p>Features</p>
                </div>
                <h1 style={{ textAlign: 'center', fontWeight: "600", fontSize: 20, marginBottom: 0 }}>
                    Cutting-edge features for advanced analytics
                </h1>
                <p style={{ textAlign: 'center', marginBottom: 50, width: "70%", color: "lightslategray" }}>
                    Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
                </p>
            </div>
            <div className='features-container'>
                <img className='features-img' src={featuresImg2} alt="featuresImg" />
            </div>
            <div className='features-container2'>
                <img className='features-img' src={featuresImg3} alt="featuresImg" />
            </div>

            <div className="advancedfeatures-container">
                {features.map((feature, index) => (
                    <div key={index}>
                        <img src={feature.img} alt={feature.title} />
                        <h1>{feature.title}</h1>
                        <p>{feature.description}</p>
                        <span className="learn-more">
                            Learn more <span className="arrow"><FontAwesomeIcon icon={faArrowRight} /></span>
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
