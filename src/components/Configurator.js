import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BlancColorImage from '../assets/images/configurateur/couleurs/selection/blanc.jpg';
import blueColorImage from '../assets/images/configurateur/couleurs/selection/bleu.jpg';
import noirColorImage from '../assets/images/configurateur/couleurs/selection/noir.jpg';
import standardWheelImage from '../assets/images/configurateur/jantes/selection/jante-standard.jpg';
import premiumWheelImage from '../assets/images/configurateur/jantes/selection/jante-legende.jpg';
import BlancLegendeImage1 from '../assets/images/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-1.jpg'
import BlancLegendeImage2 from '../assets/images/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-2.jpg'
import BlancLegendeImage3 from '../assets/images/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-3.jpg'
import BlancLegendeImage4 from '../assets/images/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-4.jpg'
import BleuLegendeImage1 from '../assets/images/configurateur/modele/legende/modele_legende-couleur_bleu-jante_legende-1.jpg'
import BleuLegendeImage2 from '../assets/images/configurateur/modele/legende/modele_legende-couleur_bleu-jante_legende-2.jpg'
import BleuLegendeImage3 from '../assets/images/configurateur/modele/legende/modele_legende-couleur_bleu-jante_legende-3.jpg'
import BleuLegendeImage4 from '../assets/images/configurateur/modele/legende/modele_legende-couleur_bleu-jante_legende-4.jpg'
import NoirLegendeImage1 from '../assets/images/configurateur/modele/legende/modele_legende-couleur_noir-jante_legende-1.jpg'
import NoirLegendeImage2 from '../assets/images/configurateur/modele/legende/modele_legende-couleur_noir-jante_legende-2.jpg'
import NoirLegendeImage3 from '../assets/images/configurateur/modele/legende/modele_legende-couleur_noir-jante_legende-3.jpg'
import NoirLegendeImage4 from '../assets/images/configurateur/modele/legende/modele_legende-couleur_noir-jante_legende-4.jpg'
import BlancPureImage1 from '../assets/images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_serac (1).jpg'
import BlancPureImage2 from '../assets/images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_serac (2).jpg'
import BlancPureImage3 from '../assets/images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_serac (3).jpg'
import BlancPureImage4 from '../assets/images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_serac (4).jpg'
import BleuPureImage1 from '../assets/images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_serac (1).jpg'
import BleuPureImage2 from '../assets/images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_serac (2).jpg'
import BleuPureImage3 from '../assets/images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_serac (3).jpg'
import BleuPureImage4 from '../assets/images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_serac (4).jpg'
import NoirPureImage1 from '../assets/images/configurateur/modele/pure/modele_pure-couleur_noire-jante_serac (1).jpg'
import NoirPureImage2 from '../assets/images/configurateur/modele/pure/modele_pure-couleur_noire-jante_serac (2).jpg'
import NoirPureImage3 from '../assets/images/configurateur/modele/pure/modele_pure-couleur_noire-jante_serac (3).jpg'
import NoirPureImage4 from '../assets/images/configurateur/modele/pure/modele_pure-couleur_noire-jante_serac (4).jpg'
import { useLocation } from 'react-router-dom';
import '../styles/configurator.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { faUndo, faRedo, } from '@fortawesome/free-solid-svg-icons';
import IconeRoutation from '../assets/images/icone.png'

function Configurator() {
  const location = useLocation();
  const [selectedVersion, setSelectedVersion] = useState('');
  const [selectedColor, setSelectedColor] = useState('bleu');
  const [selectedWheel, setSelectedWheel] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const queryParams = new URLSearchParams(location.search);
  const version = queryParams.get('version');
  const basePrice = parseInt(queryParams.get('price') || 0);
  const [wheelPrice, setWheelPrice] = useState(0); // Définir wheelPrice avec une valeur initiale de 0

  // Définir setColorPrice pour mettre à jour le prix de la couleur sélectionnée
  const [colorPrice, setColorPrice] = useState(0);
  
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const version = searchParams.get('version');
    if (version) {
      setSelectedVersion(version);
    }
  }, [location.search]);

  // Définissez les images disponibles pour chaque couleur et chaque version
  const images = {
    blanc: {
      pure: [BlancPureImage1, BlancPureImage2, BlancPureImage3, BlancPureImage4],
      legende: [BlancLegendeImage1, BlancLegendeImage2, BlancLegendeImage3, BlancLegendeImage4],
    },
    bleu: {
      pure: [BleuPureImage1, BleuPureImage2, BleuPureImage3, BleuPureImage4],
      legende: [BleuLegendeImage1, BleuLegendeImage2, BleuLegendeImage3, BleuLegendeImage4],
    },
    noir: {
      pure: [NoirPureImage1, NoirPureImage2, NoirPureImage3, NoirPureImage4],
      legende: [NoirLegendeImage1, NoirLegendeImage2, NoirLegendeImage3, NoirLegendeImage4],
    },
  };
  
    // Calcul du prix total
    const [totalPrice, setTotalPrice] = useState(basePrice);
    useEffect(() => {
      const colorPrice = {
        blanc: 0,
        bleu: 1800,
        noir: 840,
      }; // Prix de l'option de couleur sélectionnée
      // const wheelPrice = ...; // Prix de l'option de jantes sélectionnée
      const newTotalPrice = basePrice + colorPrice + wheelPrice;
      setTotalPrice(newTotalPrice);
    }, [basePrice, selectedColor, selectedWheel]);
  

  const handleColorChange = (color) => {
    setSelectedColor(color);
    setCurrentImageIndex(0); // Réinitialisez l'index de l'image lorsque la couleur est changée
    let colorPrice = 0;
    switch (color) {
      case 'blanc':
        colorPrice = 0;
        break;
      case 'bleu':
        colorPrice = 1800;
        break;
      case 'noir':
        colorPrice = 840;
        break;
      default:
        colorPrice = 0;
    }
    setColorPrice(colorPrice); // Mise à jour du prix de la couleur sélectionnée
  };
  
 
  const handleRotateLeft = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images[selectedColor].pure.length) % images[selectedColor].pure.length);
  };

  const handleRotateRight = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images[selectedColor].pure.length);
  };
// Mettre à jour le prix total en fonction du prix de la couleur sélectionnée et du prix des jantes sélectionnées
// const newTotalPrice = basePrice + colorPrice + wheelPrice;
// setTotalPrice(newTotalPrice);
  return (
    <div className="configurator-container">
      {/* partie couleur  */}
      <h1>Sélection de la couleur de la voiture :</h1>
      {/* Afficher l'image de voiture correspondante avec rotation à 360 degrés */}
      <div className='row'>
      <div className='col-md-8 text-center'>
      <div className="car-image-container">
        <div className="car-image">
          {selectedColor && (
            <img src={images[selectedColor].pure[currentImageIndex]} alt="Voiture" />
          )}
        </div>
        <div className="image-navigation">
          <FontAwesomeIcon icon={faUndo} onClick={handleRotateLeft} />
          <img className='icone360' src={IconeRoutation} onClick={handleRotateLeft} />
          <FontAwesomeIcon icon={faRedo} onClick={handleRotateRight} />
        </div>
      </div>
      </div>

      {/* Afficher les boutons de sélection de couleur avec des images plus petites */}
      <div className='col-md-4'>
      <div className="color-selection ">
        <div className='row'>
          <div className='col-md-8'>
        <button className="color-button" onClick={() => handleColorChange('blanc')}>
          <img className="color-image" src={BlancColorImage} alt="Blanc" />
        </button>
        <h2>Blanc</h2>
        <p>Prix: 0€ </p>
        </div>

        <div className='col-md-8'>
        <button className="color-button" onClick={() => handleColorChange('bleu')}>
          <img className="color-image" src={blueColorImage} alt="Bleu" />
        </button>
        <h2>Bleu</h2>
        <p>Prix: 1800€ </p>
        </div>
        <div className='col-md-8'>
        <button className="color-button" onClick={() => handleColorChange('noir')}>
          <img className="color-image" src={noirColorImage} alt="Noir" />
        </button>
        <h2>Noir</h2>
        <p>Prix: 840€ </p>
        </div>
        </div>
      </div>
      </div>
      </div>
    </div>
  );
}

export default Configurator;
