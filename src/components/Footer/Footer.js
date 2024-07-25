import React from 'react';
import '../../styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer className="container bg-white w-100">
        <div className='row'>
            <span className='text-white'>Built by <p>© 2021 Borin Sonita</p></span>
            <div>
                <a className='text-white' href='https://github.com/so-nita/portfolio' ><FontAwesomeIcon icon={ faAngleRight }/>Source code - Github</a>
            </div>
            <div className='col-12'>

            </div>
        </div>
    </footer>
    )
}

export default Footer;