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

                        <MDBCol lg='2' md='2' sm='2' xs='6' className='mb-4 mb-md-0'>
                            <div>
                                <img src={image1} className='w-100 bg-image' />
                            </div>
                        </MDBCol>
                        <MDBCol lg='2' md='2' sm='2' xs='6' className='mb-4 mb-md-0'>
                            <div>
                                <img src={image2} className='w-100 bg-image' />

                            </div>
                        </MDBCol>
                        <MDBCol lg='2' md='2' sm='2' xs='6' className='mb-4 mb-md-0'>
                            <div>
                                <img src={image3} className='w-100 bg-image' />

                            </div>
                        </MDBCol>
                        <MDBCol lg='2' md='2' sm='2' xs='6' className='mb-4 mb-md-0'>
                            <div>
                                <img src={image4} className='w-100 bg-image' />

                            </div>
                        </MDBCol>
                        <MDBCol lg='2' md='2' sm='2' xs='6' className='mb-4 mb-md-0'>
                            <div>
                                <img src={image5} className='w-100 bg-image' />

                            </div>
                        </MDBCol>
                        <MDBCol lg='2' md='2' sm='2' xs='6' className='mb-4 mb-md-0'>
                            <div>
                                <img src={image6} className='w-100 bg-image' />
                            </div>
                        </MDBCol>

                    </MDBRow>
                </section>

                <section className='mb-4 mt-4 social-icons'>
                    <div className='row'>
                        <div className='m-1 social-button col-xs-2' style={{ backgroundColor: '#3b5998' }} >
                            <a className='a' href='https://www.facebook.com/'><FontAwesomeIcon icon={faFacebookF} className='social-icon' /></a>
                        </div>
                        <div className='m-1 social-button col-xs-2' style={{ backgroundColor: '#55acee' }} >
                            <a className='a' href='https://twitter.com/'><FontAwesomeIcon icon={faTwitter} className='social-icon' /></a>
                        </div>
                        <div className='m-1 social-button col-xs-2' style={{ backgroundColor: '#dd4b39' }} >
                            <a className='a' href='https://google.com'><FontAwesomeIcon icon={faGoogle} className='social-icon' /></a>
                        </div>
                        <div className='m-1 social-button col-xs-2' style={{ backgroundColor: '#ac2bac' }} >
                            <a className='a' href='https://www.instagram.com/'><FontAwesomeIcon icon={faInstagram} className='social-icon' /></a>
                        </div>
                        <div className='m-1 social-button col-xs-2' style={{ backgroundColor: '#0082ca' }} >
                            <a className='a' href='https://www.linkedin.com/'><FontAwesomeIcon icon={faLinkedinIn} className='social-icon' /></a>
                        </div>
                        <div className='m-1 social-button col-xs-2' style={{ backgroundColor: '#333333' }} >
                            <a className='a' href='https://github.com/'><FontAwesomeIcon icon={faGithub} className='social-icon' /></a>
                        </div>

                    </div>
                </section>
            </MDBContainer>

            <div className='text-center p-3 footer-text'>
                © 2024 Copyright:
                <a className='a' href='https://alpine.com/'>
                    TPalpine.com
                </a>
            </div>
        </MDBFooter>
    );
}

export default Footer;