import React from 'react';
import './Featuressection.css';

export default function Featuressection() {
    const features = [
        {
            imgSrc: require('./images/Share.png'),
            alt: "Share",
            title: "Share team inboxes",
            description: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
        },
        {
            imgSrc: require('./images/Deliver.jpg'),
            alt: "Deliver",
            title: "Deliver instant answers",
            description: "An all-in-one customer service platform that helps you balance everything your customers need to be happy."
        },
        {
            imgSrc: require('./images/Manage.png'),
            alt: "Manage",
            title: "Manage your team with reports",
            description: "Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks."
        },
        {
            imgSrc: require('./images/Connect.jpg'),
            alt: "Connect",
            title: "Connect with customers",
            description: "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion."
        },
        {
            imgSrc: require('./images/Connect the tools.jpg'),
            alt: "ConnecTools",
            title: "Connect the tools you already use",
            description: "Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools."
        },
        {
            imgSrc: require('./images/people.png'),
            alt: "people",
            title: "Our people make the difference",
            description: "We're an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help."
        }
    ];

    return (
        <div className='featuressection-main-container'>
            <div className='featuressection-head'>
                <p>Features</p>
                <h1 style={{ textAlign: 'center', fontWeight: "600", fontSize: 20, marginBottom: 0 }}>
                    Analytics that feels like it's from the future
                </h1>
                <p style={{ textAlign: 'center', marginBottom: 50, width: "70%", color: "lightslategray" }}>
                    Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
                </p>
            </div>
            <div className="featuressection-container">
                {features.map((feature, index) => (
                    <div key={index}>
                        <img
                            src={feature.imgSrc}
                            alt={feature.alt}
                        />
                        <h1>{feature.title}</h1>
                        <p>{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
