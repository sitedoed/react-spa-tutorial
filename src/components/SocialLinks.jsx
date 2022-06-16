import './SocialLinks.css';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/fontawesome-free-brands';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function SocialLinks() {
  return (
    <div>
      <ul className='social-links'>
        <li>
            <a href="#index.html">
                <FontAwesomeIcon icon={faFacebook} />
            </a>
        </li>
        <li>
            <a href="#index.html">
                <FontAwesomeIcon icon={faTwitter} />
            </a>
        </li>
        <li>
            <a href="#index.html">
                <FontAwesomeIcon icon={faInstagram} />
            </a>
        </li>
        <li>
            <a href="#index.html">
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
        </li>
        <li>
            <a href="#index.html">
                <FontAwesomeIcon icon={faEnvelope} />
            </a>
        </li>
      </ul>
    </div>
  )
}
