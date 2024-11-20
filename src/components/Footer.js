import React from "react";
import './Footer.css';
import { AiOutlineCopyrightCircle } from "react-icons/ai";

export default function Footer() {
    const untitledUi = require("./images/Untitled Ul.png")
    const sections = [
        {
            title: "Product Heading",
            links: ["Overview", "Features", "Solutions New", "Tutorials", "Pricing", "Releases"]
        },
        {
            title: "Company",
            links: ["About us", "Careers", "Press", "News", "Media kit", "Contact"]
        },
        {
            title: "Resources",
            links: ["Blog", "Newsletter", "Events", "Help centre", "Tutorials", "Support"]
        },
        {
            title: "Use cases",
            links: ["Startups", "Enterprise", "Government", "SaaS centre", "Marketplaces", "Ecommerce"]
        },
        {
            title: "Social",
            links: ["Twitter", "Linkedin", "Facebook", "GitHub", "AngelList", "Dribbble"]
        },
        {
            title: "Legal",
            links: ["Terms", "Privacy", "Cookies", "Licenses", "Settings", "Contact"]
        }
    ];

    return (
        <div className="footer-main-container">
            <div className="footer-sections">
                {sections.map((section, index) => (
                    <div key={index} className="footer-section">
                        <h4>{section.title}</h4>
                        <ul>
                            {section.links.map((link, linkIndex) => (
                                <li key={linkIndex}>{link}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className="footer-bottom">
                <div className="footer-image">
                    <img src={untitledUi} alt="untitledUi" />
                    <h1>Untitled UI</h1>
                </div>
                <div className="footer-right">
                    <AiOutlineCopyrightCircle />
                    <p>2077 Untitled UL. All rights reserved</p>
                </div>
            </div>
        </div>
    );
}
