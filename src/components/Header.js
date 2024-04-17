import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import logo from '../assets/images/pngwing.com_1.png';
import VideoHeader from '../assets/video/videoHeader.mp4';
import '../styles/header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
function Header() {
    const cartItemsCount = useSelector(state => state.cart.items.length);

    // Variants pour l'animation du logo au survol
    const logoVariants = {
        hover: {
            scale: 1.1, // Zoom de 10% au survol
            transition: {
                duration: 0.3, // Durée de l'animation en secondes
                ease: 'easeInOut', // Courbe d'animation
            },
        },
    };

    // Variants pour l'animation du menu de navigation
    const navVariants = {
        hidden: {
            opacity: 0,
            y: -20,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: 0.5, // Délai avant l'apparition du menu
            },
        },
    };

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <Navbar expand="lg" style={{ backgroundColor: '#caced1' }}>
                <Container>
                    <Link to="/">
                        <motion.img
                            className='logo'
                            src={logo}
                            alt="Logo"
                            variants={logoVariants}
                            whileHover="hover" // Déclenche l'animation au survol
                        />
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <motion.div
                        className="collapse navbar-collapse"
                        id="basic-navbar-nav"
                        variants={navVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <Nav className="me-auto">
                            <Nav.Link href="/Configurator">Configurateur</Nav.Link>
                            <Nav.Link href="/Summary">Récapitulatif</Nav.Link>
                            <NavDropdown title="MODELES" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Pure</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Legende</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.3">Nouveau Modèle</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav.Link href="/find-dealer">
                            <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: '5px' }} />
                            Trouver Nous
                        </Nav.Link>

                    </motion.div>
                </Container>
            </Navbar>

            {/* <div className="item">
                <video autoPlay muted loop width="100%" height="auto" className="media">
                    <source src={VideoHeader} type="video/mp4" />
                </video>
            </div> */}
        </motion.div>
    );
}

export default Header;
