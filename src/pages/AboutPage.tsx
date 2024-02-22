import React from 'react';

const AboutPage: React.FC = () => {
    return (
        <div className="min-w-screen min-h-screen flex flex-col items-center justify-center bg-white">
            <h1>About Me</h1>
            <p>Welcome to my page! Here's a little bit about me:</p>
            <ul>
                <li>Name: John Doe</li>
                <li>Age: 30</li>
                <li>Location: New York City</li>
                <li>Occupation: Software Developer</li>
                <li>Hobbies: Reading, hiking, and playing guitar</li>
            </ul>
        </div>
    );
};

export default AboutPage;