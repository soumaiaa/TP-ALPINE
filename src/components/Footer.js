import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBIcon, MDBCol, MDBRipple, MDBBtn } from 'mdb-react-ui-kit'; // Importez les composants de MDB
import image1 from '../assets/images/configurateur/equipements/selection/conduite.jpg'
import image2 from '../assets/images/configurateur/equipements/selection/confort.jpg'
import image3 from '../assets/images/configurateur/equipements/selection/design.jpg'
import image4 from '../assets/images/configurateur/equipements/selection/media-nav.jpg'
import image5 from '../assets/images/configurateur/equipements/selection/perso-ext.jpg'
import image6 from '../assets/images/configurateur/equipements/selection/perso-int.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import '../styles/footer.css';
function Footer() {
    return (
        <MDBFooter className='text-center text-white' style={{ backgroundColor: '#caced1' }}>
            <MDBContainer className='p-4'>
                <section className=''>
                    <MDBRow>
                        <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
                            <MDBRipple
                                rippleColor='light'
                                className='bg-image hover-overlay shadow-1-strong rounded'
                            >
                                <img src={image1} className='w-100' />
                                <a href='#!'>
                                    <div
                                        className='mask'
                                        style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                                    ></div>
                                </a>
                            </MDBRipple>
                        </MDBCol>
                        <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
                            <MDBRipple
                                rippleColor='light'
                                className='bg-image hover-overlay shadow-1-strong rounded'
                            >
                                <img src={image2} className='w-100' />
                                <a href='#!'>
                                    <div
                                        className='mask'
                                        style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                                    ></div>
                                </a>
                            </MDBRipple>
                        </MDBCol>
                        <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
                            <MDBRipple
                                rippleColor='light'
                                className='bg-image hover-overlay shadow-1-strong rounded'
                            >
                                <img src={image3} className='w-100' />
                                <a href='#!'>
                                    <div
                                        className='mask'
                                        style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                                    ></div>
                                </a>
                            </MDBRipple>
                        </MDBCol>
                        <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
                            <MDBRipple
                                rippleColor='light'
                                className='bg-image hover-overlay shadow-1-strong rounded'
                            >
                                <img src={image4} className='w-100' />
                                <a href='#!'>
                                    <div
                                        className='mask'
                                        style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                                    ></div>
                                </a>
                            </MDBRipple>
                        </MDBCol>
                        <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
                            <MDBRipple
                                rippleColor='light'
                                className='bg-image hover-overlay shadow-1-strong rounded'
                            >
                                <img src={image5} className='w-100' />
                                <a href='#!'>
                                    <div
                                        className='mask'
                                        style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                                    ></div>
                                </a>
                            </MDBRipple>
                        </MDBCol>
                        <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
                            <MDBRipple
                                rippleColor='light'
                                className='bg-image hover-overlay shadow-1-strong rounded'
                            >
                                <img src={image6} className='w-100' />
                                <a href='#!'>
                                    <div
                                        className='mask'
                                        style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                                    ></div>
                                </a>
                            </MDBRipple>
                        </MDBCol>
                    </MDBRow>
                </section>
            </MDBContainer>
            <MDBContainer className='p-4 pb-0'>
                <section className='mb-4 social-icons'>
                    <MDBBtn className='m-1 social-button' style={{ backgroundColor: '#3b5998' }} href='#!'>
                        <FontAwesomeIcon icon={faFacebookF} className='social-icon' />
                    </MDBBtn>
                    <MDBBtn className='m-1 social-button' style={{ backgroundColor: '#55acee' }} href='#!'>
                        <FontAwesomeIcon icon={faTwitter} className='social-icon' />
                    </MDBBtn>
                    <MDBBtn className='m-1 social-button' style={{ backgroundColor: '#dd4b39' }} href='#!'>
                        <FontAwesomeIcon icon={faGoogle} className='social-icon' />
                    </MDBBtn>
                    <MDBBtn className='m-1 social-button' style={{ backgroundColor: '#ac2bac' }} href='#!'>
                        <FontAwesomeIcon icon={faInstagram} className='social-icon' />
                    </MDBBtn>
                    <MDBBtn className='m-1 social-button' style={{ backgroundColor: '#0082ca' }} href='#!'>
                        <FontAwesomeIcon icon={faLinkedinIn} className='social-icon' />
                    </MDBBtn>
                    <MDBBtn className='m-1 social-button' style={{ backgroundColor: '#333333' }} href='#!'>
                        <FontAwesomeIcon icon={faGithub} className='social-icon' />
                    </MDBBtn>
                </section>
            </MDBContainer>

            <div className='text-center p-3 footer-text'>
                © 2024 Copyright:
                <a className='text-white' href='https://mdbootstrap.com/'>
                    TPalpine.com
                </a>
            </div>
        </MDBFooter>
    );
}

export default Footer;