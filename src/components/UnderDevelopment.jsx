import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './..//index.css'; 


const UnderDevelopment = ({ sectionName = "this section" }) => {
    const navigate = useNavigate();
    const [currentTheme, setCurrentTheme] = useState('dark');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        setCurrentTheme(savedTheme);
        
        const handleStorageChange = () => {
            const updatedTheme = localStorage.getItem('theme') || 'dark';
            setCurrentTheme(updatedTheme);
        };
        
        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, []);

    const features = [
        { icon: '⚡', text: 'High performance' },
        { icon: '🎨', text: 'Modern design' },
        { icon: '🔒', text: 'Secure architecture' },
        { icon: '📱', text: 'Responsive layout' }
    ];

    return (
        <div className={`under-development-container ${currentTheme}-theme`}>
            <button
                className="under-development-back-button"
                onMouseEnter={(e) => {
                    e.currentTarget.classList.add('button-hover');
                    e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.classList.remove('button-hover');
                    e.currentTarget.style.transform = 'scale(1)';
                }}
                onClick={() => navigate('/')}
            >
                Back to Home
            </button>
            
            <div className="corner-accent"></div>
            
            <div className="icon-container">
                <div className="under-development-icon">✨</div>
            </div>
            
            <h1 className="under-development-title">Exciting Things Are Coming</h1>
            <p className="under-development-subtitle">
                We're currently crafting an exceptional experience for {sectionName}.
                Our team is working diligently to bring you innovative features
                and seamless functionality.
            </p>
            
            <div className="progress-container">
                <div className="progress-text">
                    <span>Development Progress</span>
                    <span>72%</span>
                </div>
                <div className="progress-bar">
                    <div className="progress-fill"></div>
                </div>
            </div>
            
            <div className="features-grid">
                {features.map((feature, index) => (
                    <div key={index} className="feature-item">
                        <span className="feature-icon">{feature.icon}</span>
                        <span>{feature.text}</span>
                    </div>
                ))}
            </div>
            
            <p className="contact-text">
                Have suggestions? We'd love to hear from you at{' '}
                <a href="mailto:izaid.dev@gmail.com" className="contact-link">
                    izaid.dev@gmail.com
                </a>
            </p>
        </div>
    );
};

export default UnderDevelopment;