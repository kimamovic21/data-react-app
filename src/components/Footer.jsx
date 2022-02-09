import React from 'react';
import './FooterStyles.css';
import { FiMail } from 'react-icons/fi';
import { SiDatabricks } from 'react-icons/si';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
        <div className='footer'>
            
            <div className="container">

                <div className='top'>
                    <div className="logo-footer">
                        <SiDatabricks className='icon'/>
                        <h2>Secured.</h2>
                    </div>
                    <Link activeClass='active' 
                          to='top' 
                          spy={true}
                          smooth={true}
                          duration={500}>                   
                        <BsFillArrowUpCircleFill className='icon'/>
                    </Link>
                </div>

                <div className='col-container'>
                    <div className='col'>
                        <h3>Navigation</h3>
                        <p>Home</p>
                        <p>Data</p>
                        <p>Cloud</p>
                        <p>Contact</p>
                    </div>
                    <div className='col'>
                        <h3>My account</h3>
                        <p>Home</p>
                        <p>Data</p>
                        <p>Cloud</p>
                        <p>Contact</p>
                    </div>
                    <div className='col'>
                        <h3>Information</h3>
                        <p>Home</p>
                        <p>Data</p>
                        <p>Cloud</p>
                        <p>Contact</p>
                    </div>
                    <div className='col'>
                        <h3>Legal</h3>
                        <p>Home</p>
                        <p>Data</p>
                        <p>Cloud</p>
                        <p>Contact</p>
                    </div>

                    <form>
                        <h3>Join our team</h3>
                        <input type='email' 
                               placeholder='Enter your email'/>
                        <FiMail className='mail-icon'/>
                        <div className="social-group">
                            <FaInstagram className='social-icon'/>
                            <FaFacebook className='social-icon'/>
                            <FaLinkedin className='social-icon'/>
                            <FaTwitter className='social-icon'/>
                            <FaGithub className='social-icon'/>
                        </div>
                    </form>

                </div>   {/* className='col-container' */}

            </div>  {/* className="container" */}

        </div>  // className='footer'
    );
};

export default Footer;
