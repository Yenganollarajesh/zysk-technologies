import React from "react";
import './Blogsection.css';
import { MdArrowOutward } from "react-icons/md"; 

export default function Blogsection() {
    const blogPosts = [
        {
            id: 1,
            image: require('./images/UX review presentations.jpg'),
            category: 'Design',
            title: 'UX review presentations',
            description: 'How do you create compelling presentations that wow your colleagues and impress your managers?',
            author: 'Olivia Rhye',
            date: '20 Jan 2024',
        },
        {
            id: 2,
            image: require("./images/Migrating.jpg"),
            category: 'Product',
            title: 'Migrating to Linear 101',
            description: 'Linear helps streamline    software projects, sprints, tasks, and bug tracking. Here\'s how to get started.',
            author: 'Phoenix Baker',
            date: '19 Jan 2024',
        },
        {
            id: 3,
            image: require("./images/Building your API stack2.jpg"),
            category: 'Software Engineering',
            title: 'Building your API stack',
            description: 'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.',
            author: 'Lana Steiner',
            date: '18 Jan 2024',
        }
    ];

    return (
        <div className="blog-section">
            <div className="blog-header">
                <div style={{display:"flex",flexDirection:"column",alignItems:"flex-start"}}>
                    <p className="header-subtitle">Our Blog</p>
                    <h1 className="header-title">Latest Blog Posts</h1>
                    <p className="header-description">Tools and strategies modern teams need to help their companies grow.</p>
                </div>
                <button className="view-all-button">View All Posts</button>
            </div>

            <div className="blog-content-container">
                {blogPosts.map((post) => (
                    <div key={post.id} className="blog-entry">
                        <img src={post.image} alt={post.title} />
                        <div>
                            <p><span className="category">{post.category}</span></p>
                            <div className="blog-header-info">
                                <h1>{post.title}</h1>
                                <span className="arrow-icon"><MdArrowOutward /></span>
                            </div>
                            <p>{post.description}</p>
                            <div className="some-review">
                                <img src={post.image} alt="Review" />
                                <div>
                                    <p>{post.author}</p>
                                    <p>{post.date}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button className="view-all-button mobile-button">View All Posts</button>
        </div>
    );
}
