import React from 'react';
import '../styles/Content.css';
import AboutMe from './AboutMe.js';   
import Experience from './Experience.js';   
import Footer from './Footer/Footer.js';

const Content = () => {
    return (
        <main className="main-content">
            <div className="container-fluid content p-0">
                <div className="container container-1 d-flex align-items-center py-lg-5 h-25">
                    <div className='w-50 profile justify-content-center '>
                        <p className='profile-title' > Hi there👋, my name is </p>
                        <h2 className='fs-1 profile-name text-white'> BORIN  SONITA</h2>
                        <p className='profile-description'>
                            {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Passionate about technology and dedicated to creating innovative solutions.<br/>
                            I aim to make a positive impact through software development. */}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Passionate about technology and dedicated to creating innovative solutions. I aim to make a positive impact through software development.
                        </p>
                    </div>
                </div>

                <AboutMe />
                <Experience />
                <Footer />
            </div>
        </main>
    );
};

export default Content;