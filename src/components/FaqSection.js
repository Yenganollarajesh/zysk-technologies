import React, { useState } from "react";
import "./FaqSection.css";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";


export default function FaqSection() {
    const [isAnswerVisible, setIsAnswerVisible] = useState({});
    const stillHaveQuestions= require('./images/Still have questions.png')

    const toggleAnswerVisibility = (index) => {
        setIsAnswerVisible(prevState => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };

    const faqData = [
        {
            question: "How does the product work?",
            answer: "Our product works by providing real-time analytics and insights to help you make data-driven decisions.",
        },
        {
            question: "What are the pricing plans?",
            answer: "We offer several pricing plans based on the features and level of support you need. Check our pricing page for more details.",
        },
        {
            question: "How do I contact customer support?",
            answer: "You can reach customer support via email at support@product.com or through the live chat option on our website.",
        },
    ];

    return (
        <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
            <div className="questions-container">
                <h1>Frequently Asked Questions</h1>
                <p>Everything you need to know about the product and billing.</p>
            </div>

            <div className="faq-list">
                {faqData.map((faq, index) => (
                    <div key={index} className="faq-item">
                        <div className="faq-question">
                            <p>{faq.question}</p>
                            <span 
                                className="faq-icon" 
                                onClick={() => toggleAnswerVisibility(index)}
                            >
                                {isAnswerVisible[index] ? <CiCircleMinus /> : <CiCirclePlus />}
                            </span>
                        </div>
                        {isAnswerVisible[index] && (
                            <div className="faq-answer">
                                <p>{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div className="stillHaveQuestions-container">
                 
                <img src={stillHaveQuestions} alt="stillHaveQuestions"/>
                 
                 
                <h1>Still have questions?</h1>
                <p>Can't find the answer you're looking for? Please chat to our friendly team.</p>
                <button>Get in touch</button>
            </div>
        </div>
    );
}
