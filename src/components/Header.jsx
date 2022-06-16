import React from 'react';
import Innovation from '../assets/img/innovation.png';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  return (
    <>
        <header>
            <div className="container">
                <div className="header-content row">
                    <div className="col-xs-12 col-sm-5 col-md-5">
                        <h2 className="wow bounceIn animated" data-wow-delay=".40s">SPA SINGLE PAGE APPLICATION</h2>
                        <h3 className="wow bounceIn animated" data-wow-delay=".50s">REACT TUTORIAL</h3>
                        <p className="wow bounceIn animated" data-wow-delay=".60s">
                            A JavaScript library for building user interfaces
                        </p>
                        <p>
                            <div className="btn-free-download" data-wow-delay="1s">
                                <span>Free Download</span>
                                <FontAwesomeIcon className='fa-file-arrow-down' icon={faFileArrowDown} />
                            </div>
                        </p>
                        <h4>Image from <a href="https://pixabay.com/pt/users/freephotocc-2275370/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1280538">Free Photos</a> by <a href="https://pixabay.com/pt/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1280538">Pixabay</a></h4>
                    </div>
                    <div className="col-xs-12 col-sm-7 col-md-7 wow slideInLeft animated">
                        <a href="https://pixabay.com/pt/users/jarmoluk-143740/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=561388">
                        <img src={Innovation} alt="phones" /> 
                        </a>      
                    </div>
                </div>
            </div>
        </header>
    </>
  )
}
