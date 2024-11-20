// import React from "react";
// import "./FaqSection.css"

// export default function FaqSection() {
//     return (
//         <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
//             <div className='questions-container'>
//                 <h1>Frequently asked questions</h1>
//                 <p>Everything you need to know about the product and billing.</p>
//             </div>
//             <div>
//                 /* i want faq questions left side and rightside one + icon when i clicked on + icon the question answer should be visible and the + icon should change to - icon when clicked on - icon only question should visible - icon chage to + icon 
//             </div>
//         </div>
        
//     )
// }




import React, { useState } from "react";
import "./FaqSection.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCirclePlus, faCircleMinus } from '@fortawesome/free-solid-svg-icons';
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";


export default function FaqSection() {
    // State to track whether the answer is visible
    const [isAnswerVisible, setIsAnswerVisible] = useState({});
    const stillHaveQuestions= require('./images/Still have questions.png')

    // Function to toggle visibility of an answer
    const toggleAnswerVisibility = (index) => {
        setIsAnswerVisible(prevState => ({
            ...prevState,
            [index]: !prevState[index], // Toggle the visibility for the clicked question
        }));
    };

    // FAQ questions and answers data
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
