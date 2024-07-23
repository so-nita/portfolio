import React from 'react';
import '../styles/Content.css';

const Content = () => {
    return (
        <main className="main-content">
            <div className="container-fluid content">
                <div className="container container-1 d-flex align-items-center py-lg-5 h-25">
                    <div className='w-50 profile bg-light justify-content-center '>
                        <p color='#6193ff' className='fs-6'>Hi, there</p>
                        <p className='content-description'>
                            {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Passionate about technology and dedicated to creating innovative solutions.<br/>
                            I aim to make a positive impact through software development. */}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Our focus was on integrating new features and improving the user interface. One notable achievement was the release NameWrapper with ERC72 support, enabling users to create subdomains.
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