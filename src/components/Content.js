import React from 'react';
import '../styles/Content.css';

const Content = () => {
    return (
        <main className="main-content">
            <div className="container-fluid content">
                <div className="container container-1 d-flex align-items-center py-lg-5 h-25">
                    <div className='w-50 profile bg-light justify-content-center '>
                        <p color='#6193ff' className='fs-6'>Hi there, I'm Borin Sonita! 👋</p>
                        <p className='content-description'>
                            {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Passionate about technology and dedicated to creating innovative solutions.<br/>
                            I aim to make a positive impact through software development. */}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Passionate about technology and dedicated to creating innovative solutions. I aim to make a positive impact through software development.
                        </p>
                    </div>
                </div>
                <div className="container container-2 bg-dark" style={{ height: 500 }}>

                </div>
            </div>
        </main>
    );
};

export default Content;