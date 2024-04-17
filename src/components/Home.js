import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from '../assets/images/sources-homepage/A110/Alpine-A110-1.jpg';
import image2 from '../assets/images/sources-homepage/galerie/A110_LEGENDE_9.jpg';
import image3 from '../assets/images/sources-homepage/galerie/A110_LEGENDE_1.jpg';
import image4 from '../assets/images/sources-homepage/galerie/A110_LEGENDE_5.jpg';
import image5 from '../assets/images/sources-homepage/galerie/A110_PURE_4.jpg';
import image6 from '../assets/images/sources-homepage/galerie/A110_PURE_6.jpg';
import image7 from '../assets/images/configurateur/modele/legende/modele_legende-couleur_noir-jante_legende-1.jpg';
import image8 from '../assets/images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_serac (1).jpg';
import imagecaro1 from '../assets/images/sources-homepage/galerie/A110_PE_1.jpg';
import imagecaro2 from '../assets/images/sources-homepage/galerie/A110_PE_7.jpg';
import imagecaro3 from '../assets/images/sources-homepage/galerie/A110_PE_9.jpg';
import imagecaro4 from '../assets/images/sources-homepage/galerie/A110_PURE_8.jpg';
import imagecaro5 from '../assets/images/sources-homepage/design/Visuel_3_desktop.jpg';
import videofin1 from '../assets/video/Center-of-gravity-FR_LOW.mov';
import videofin2 from '../assets/video/Alpine-Milan-HomePage-1680x951-950-non-possible-v3-12072021.mp4';
import videofin3 from '../assets/video/videoHeader.mp4';
import video from '../assets/video/MOTEUR_CINEMAGRAPH-.mov';
import { motion } from 'framer-motion';
import '../styles/home.css';

const Home = () => {
  return (
    <main>
      <div className="parallax-section">
        <section className='backheader container-md text-center'>
          <div className='row'>
            <div className='col-md-6'></div>
            <div className='bien col-md-6'>
              <h1 className='text'>Alpine, réinventée</h1>
              <p className='text'>Avec l'intelligence artificielle, une technologie de capot transparent révolutionnaire et un design intuitif, c'est une toute nouvelle Alpine que vous n'avez jamais vue auparavant</p>
              <Link to="/version-selection" className="btn">Voir Plus</Link>
            </div>
          </div>
        </section>
        {/* Banner Section */}
        <section className="banner-section section">
          <div className="banner-content">
            <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
              Découvrez la sensation de conduire avec Alpine.
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>
              Explorez notre gamme de véhicules et personnalisez votre expérience de conduite dès aujourd'hui.
            </motion.p>
            <Link to="/configurator" className="btn">Commencer la configuration</Link>
          </div>
        </section>
        <div className="back2">
        </div>


        {/* Image Section */}
        <section className="image-section section">
          <div className="image-container">
            <img src={image7} alt="Image 1" />
            <div className="image-overlay">
              <h2>ALPINE LEGENDE</h2>
              <p>58 500€</p>
            </div>
          </div>
          <div className="image-container">
            <img src={image8} alt="Image 2" />
            <div className="image-overlay">
              <h2>ALPINE PURE</h2>
              <p>54 700€</p>
            </div>
          </div>
        </section>
        {/* Nouvelle Section */}
        <section className="new-section">
          <div className="row">
            <div className="col-md-5 text-center">
              <motion.div className="new-section-content text-center" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <h2>Performance in Your hands</h2>
                <table>
                  <tbody>
                    <tr>
                      <td>Maximum speed on track</td>
                      <td>155 mph</td>
                    </tr>
                    <tr>
                      <td>0 to 62 mph</td>
                      <td>4.5 s</td>
                    </tr>
                    <tr>
                      <td>Gear change time</td>
                      <td>260 ms</td>
                    </tr>
                  </tbody>
                </table>
              </motion.div>
            </div>
            <div className="col-md-7">
              <motion.div className="video-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}>
                <video autoPlay loop muted className="section-video">
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
      {/* Carousel Section */}
      
        <section className="carousel-section section text-center">
          <Carousel showArrows={true} showStatus={false} infiniteLoop={true} autoPlay={true} interval={5000} emulateTouch={true}>
            <div>
              <img src={image2} alt="Carousel Image 1" />
              {/* <p>Description de l'image 3</p> */}
            </div>
            <div>
              <img src={image3} alt="Carousel Image 2" />
              {/* <p>Description de l'image 3</p> */}
            </div>
            <div>
              <img src={image4} alt="Carousel Image 3" />
              {/* <p>Description de l'image 3</p> */}
            </div>
            <div>
              <img src={image5} alt="Carousel Image 4" />
              {/* <p>Description de l'image 3</p> */}
            </div>
            <div>
              <img src={image6} alt="Carousel Image 5" />
              {/* <p>Description de l'image 3</p> */}
            </div>
            <div>
              <img src={imagecaro1} alt="Carousel Image 1" />
              {/* <p>Description de l'image 3</p> */}
            </div>
            <div>
              <img src={imagecaro2} alt="Carousel Image 2" />
              {/* <p>Description de l'image 3</p> */}
            </div>
            <div>
              <img src={imagecaro3} alt="Carousel Image 3" />
              {/* <p>Description de l'image 3</p> */}
            </div>
            <div>
              <img src={imagecaro4} alt="Carousel Image 4" />
              {/* <p>Description de l'image 3</p> */}
            </div>
           

          </Carousel>
        </section>
        <div className="parallax-section2">
        {/* Nouvelle Section */}
        <section className="new-section2">
          <div className="new-section-content banner-content">
          <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
             Structure
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>
            Avec seulement 1 102 kg sur la balance, le rapport poids-puissance de l'A110 est tout simplement remarquable. Aucune pierre n'a été laissée non retournée dans la quête de légèreté, du choix des matériaux aux accessoires, aux sièges et aux jantes.
            </motion.p>
         
            <Link to="/configurator" className="btn">Voir Plus</Link>
          </div> 
        </section>
        <section className='backheader'>
        </section>
        </div>
        {/* Additional Content Section */}
        
        <section className="additional-content section">
          <motion.div className="content-item" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }}>
            <video autoPlay loop muted>
              <source src={videofin1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p>Explorez notre dernière collection de véhicules.</p>
            <Link to="/latest-collection" className="btn">Voir la collection</Link>
          </motion.div>
          <motion.div className="content-item" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.5 }}>
            <video autoPlay loop muted>
              <source src={videofin2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p>Découvrez nos offres spéciales pour les nouveaux acheteurs.</p>
            <Link to="/special-offers" className="btn">Voir les offres</Link>
          </motion.div>
          <motion.div className="content-item" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 2 }}>
            <video autoPlay loop muted>
              <source src={videofin3} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p>Lisez les témoignages de nos clients satisfaits.</p>
            <Link to="/testimonials" className="btn">Voir les témoignages</Link>
          </motion.div>
        </section>
       
    
    </main>
  );
}

export default Home;

