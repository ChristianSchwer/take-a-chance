import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
    return (
        <div className='footer-container'>
          <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
              You want to tell us something?
            </p>
            <p className='footer-subscription-text'>
              Contact us:
            </p>
            <div className='footer-input-area'>
              <form>
                <div>
                  <label className='footer-label' htmlFor='name'> Name </label>
                  <input 
                    id='name'
                    type='text' 
                    name='name' 
                    placeholder='Your Name' 
                    className='footer-input' 
                  />
                </div>
                <div>
                  <label className='footer-label' htmlFor='email'> E-Mail </label>
                  <input 
                    id='email'
                    type='email' 
                    name='email' 
                    placeholder='Your Email' 
                    className='footer-input' 
                  />
                </div>
                <div>
                  <label className='footer-label' htmlFor='message'> Massage </label>
                  <textarea 
                    id='message'
                    rows='6' 
                    name='message' 
                    placeholder='Your Message' 
                    className='footer-input' 
                  />
                </div>
              </form>
            </div>
          </section>
          <section className='footer-links'>
            <div className='footer-links-wrap'>
              <div className='footer-logo'>
                <Link to='/' className='social-logo'>
                  LOGO <i className='fab fa-typo3' />
                </Link>
              </div>
              <div className='social-icons'>
                <Link className='social-icon-link instagram'
                  to={'//www.instagram.com/schwer_christian/'}
                  target='_blank'
                  aria-label='Instagram'
                  >
                    <i className='fab fa-instagram'></i>
                </Link>
                <Link className='social-icon-link facebook'
                  to='/'
                  target='_blank'
                  aria-label='Facebook'
                  >
                    <i className='fab fa-facebook'></i>
                </Link>
                <Link className='social-icon-link twitter'
                  to='/'
                  aria-label='Twitter'
                  >
                    <i className="fab fa-twitter"></i>
                </Link>
              </div>
              <div className='footer-links-item'>
                <Link to='/' className='footer-link'>
                  Imprint
                </Link>
                <Link to='/' className='footer-link'>
                  Privacy
                </Link>
              </div>
            </div>
          </section>
        </div>
    )
}
