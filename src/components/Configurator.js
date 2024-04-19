import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BlancColorImage from '../assets/images/configurateur/couleurs/selection/blanc.jpg';
import blueColorImage from '../assets/images/configurateur/couleurs/selection/bleu.jpg';
import noirColorImage from '../assets/images/configurateur/couleurs/selection/noir.jpg';
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
import standardWheelImage from '../assets/images/configurateur/jantes/selection/jante-standard.jpg';
import seracWheelImage from '../assets/images/configurateur/jantes/selection/jante-serac.jpg';
import legendeWheelImage from '../assets/images/configurateur/jantes/selection/jante-legende.jpg';
import legendeBlancWheelImage from '../assets/images/configurateur/jantes/vues/couleur-blanc_jante-legende (2).jpg';
import legendeBleuWheelImage from '../assets/images/configurateur/jantes/vues/couleur-bleu_jante-legende (3).jpg';
import legendeNoirWheelImage from '../assets/images/configurateur/jantes/vues/couleur-noir_jante-legende (1).jpg';
import seracBlancWheelImage from '../assets/images/configurateur/jantes/vues/couleur-blanc_jante-serac (2).jpg';
import seracBleuWheelImage from '../assets/images/configurateur/jantes/vues/couleur-bleu_jante-serac (3).jpg';
import seracNoirWheelImage from '../assets/images/configurateur/jantes/vues/couleur-noir_jante-serac (1).jpg';
import standardBlancWheelImage from '../assets/images/configurateur/jantes/vues/couleur-blanc_jante-standard (2).jpg';
import standardBleuWheelImage from '../assets/images/configurateur/jantes/vues/couleur-bleu_jante-standard (3).jpg';
import standardNoirWheelImage from '../assets/images/configurateur/jantes/vues/couleur-noir_jante-standard (1).jpg';
import InterieurbrunImage1 from '../assets/images/configurateur/interieurs/vues/cuir-brun-1.jpg';
import InterieurbrunImage2 from '../assets/images/configurateur/interieurs/vues/cuir-brun-2.jpg';
import InterieurbrunImage3 from '../assets/images/configurateur/interieurs/vues/cuir-brun-3.jpg';
import InterieurnoirImage1 from '../assets/images/configurateur/interieurs/vues/cuir-noir-1.jpg';
import InterieurnoirImage2 from '../assets/images/configurateur/interieurs/vues/cuir-noir-2.jpg';
import InterieurnoirImage3 from '../assets/images/configurateur/interieurs/vues/cuir-noir-3.jpg';
import InterieurnoirDinamicImage1 from '../assets/images/configurateur/interieurs/vues/cuir-noir_dinamica-1.jpg';
import InterieurnoirDinamicImage2 from '../assets/images/configurateur/interieurs/vues/cuir-noir_dinamica-2.jpg';
import InterieurnoirDinamicImage3 from '../assets/images/configurateur/interieurs/vues/cuir-noir_dinamica-3.jpg';
import InterieurnoirPerforeImage1 from '../assets/images/configurateur/interieurs/vues/cuir-noir_perfore-1.jpg';
import InterieurnoirPerforeImage2 from '../assets/images/configurateur/interieurs/vues/cuir-noir_perfore-2.jpg';
import InterieurnoirPerforeImage3 from '../assets/images/configurateur/interieurs/vues/cuir-noir_perfore-3.jpg';
import CuirBrun from '../assets/images/configurateur/interieurs/selection/cuir-brun.jpg';
import CuirNoir from '../assets/images/configurateur/interieurs/selection/cuir-noir.jpg';
import CuirNoirDinamic from '../assets/images/configurateur/interieurs/selection/cuir-noir_dinamica.jpg';
import CuirNoirPerfore from '../assets/images/configurateur/interieurs/selection/cuir-noir_perfore.jpg';

import { useLocation } from 'react-router-dom';
import '../styles/configurator.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { faUndo, faRedo, } from '@fortawesome/free-solid-svg-icons';
import IconeRoutation from '../assets/images/icone.png'

function Configurator() {
  const location = useLocation();
  const [selectedVersion, setSelectedVersion] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const queryParams = new URLSearchParams(location.search);
  const basePrice = parseInt(queryParams.get('price') || 0);
  const [wheelPrice, setWheelPrice] = useState(0);
  const [colorPrice, setColorPrice] = useState(0);
  const [selleriePrice, setSelleriePrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0); // Modifier le prix total selon les besoins
  const [selectedWheel, setSelectedWheel] = useState('standard'); // Définir 'standard' comme jante par défaut
  const [showWheelOptions, setShowWheelOptions] = useState(false);
  const version = queryParams.get('version');
  const [selectedSellerie, setSelectedSellerie] = useState(
    version === 'pure' ? 'CuirNoirDinamic' : 'CuirNoir'
  );
  const [showSellerieOptions, setShowSellerieOptions] = useState(false);

  useEffect(() => {
    console.log('Version sélectionnée:', version);
  }, [version]);
  const [selectedColor, setSelectedColor] = useState(
    version === 'pure' ? 'blanc' : 'noir'
  );
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const versionQueryParam = searchParams.get('version');
    if (versionQueryParam) {
      setSelectedVersion(versionQueryParam);
    }
  }, [location.search]);
  const [currentSellerieIndex, setCurrentSellerieIndex] = useState(0);
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


  const wheelImages = {
    blanc: {
      standard: standardBlancWheelImage,
      serac: seracBlancWheelImage,
      legende: legendeBlancWheelImage,
    },
    bleu: {
      standard: standardBleuWheelImage,
      serac: seracBleuWheelImage,
      legende: legendeBleuWheelImage,
    },
    noir: {
      standard: standardNoirWheelImage,
      serac: seracNoirWheelImage,
      legende: legendeNoirWheelImage,
    },
  };

  useEffect(() => {
    const colorPriceByVersion = {
      blanc: 0,
      bleu: 1800,
      noir: 840,
    };
    setColorPrice(colorPriceByVersion[selectedColor] || 0);
  }, [selectedColor]);

  useEffect(() => {
    let wheelPrice = 0;
  
    // Modifier le switch pour afficher les prix en fonction de la roue sélectionnée
    switch (selectedWheel) {
      case 'standard':
        wheelPrice = 0;
        break;
      case 'serac':
        wheelPrice = 1000;
        break;
      case 'legende':
        wheelPrice = 0;
        break;
      default:
        wheelPrice = 0;
    }
  
    setWheelPrice(wheelPrice);
  }, [selectedWheel]);
  const selleriePrices = {
    CuirBrun: { price: 800, name: 'Cuir Brun' },
    CuirNoir: { price: 0, name: 'Cuir Noir' },
    CuirNoirDinamic: { price: 0, name: 'Cuir Noir et Dinamica' },
    CuirNoirPerfore: { price: 800, name: 'Cuir Noir Perforé' },
  };
  // Effet pour mettre à jour le prix total en fonction de la version sélectionnée
  useEffect(() => {
    let versionPrice = basePrice;;
    // Calculer le prix total en ajoutant le prix de la couleur, le prix des jantes et le prix de la sellerie au prix de la version
    const newTotalPrice = versionPrice + colorPrice + wheelPrice + selleriePrice;
    // Mettre à jour le prix total en ajoutant le prix de la version
    // Mettre à jour l'état du prix total avec la valeur calculée
    setTotalPrice(newTotalPrice);
  }, [selectedVersion, basePrice, colorPrice, wheelPrice, selleriePrice]);
  // Utilisez le nom de la version comme bon vous semble
  useEffect(() => {
    const selleriePriceByType = {
      CuirBrun: 800,
      CuirNoir: 0,
      CuirNoirDinamic: 0,
      CuirNoirPerfore: 800,
    };
    setSelleriePrice(selleriePriceByType[selectedSellerie] || 0);
  }, [selectedSellerie]);

  useEffect(() => {
    const newTotalPrice = basePrice + colorPrice + wheelPrice + selleriePrice;
    setTotalPrice(newTotalPrice);
  }, [basePrice, colorPrice, wheelPrice, selleriePrice]);



  const handleColorChange = (color) => {
    setSelectedColor(color);
    setCurrentImageIndex(0);

  };
  const handleNextButtonClick = () => {
    setShowWheelOptions(true);
  };

  const handleWheelChange = (wheel) => {
    setSelectedWheel(wheel);

  };

  // Fonction pour afficher les options de sellerie une fois que la jante a été sélectionnée
  const handleNextButtonWheelClick = () => {
    setShowSellerieOptions(true);
  };
  const sellerieImages = {
    CuirBrun: [InterieurbrunImage1, InterieurbrunImage2, InterieurbrunImage3],
    CuirNoir: [InterieurnoirImage1, InterieurnoirImage2, InterieurnoirImage3],
    CuirNoirDinamic: [InterieurnoirDinamicImage1, InterieurnoirDinamicImage2, InterieurnoirDinamicImage3],
    CuirNoirPerfore: [InterieurnoirPerforeImage1, InterieurnoirPerforeImage2, InterieurnoirPerforeImage3],
  };
  // Déclaration des options de sellerie en fonction de la version sélectionnée
  let sellerieOptions = [];
  if (selectedVersion === 'pure') {
    sellerieOptions = ['CuirNoirDinamic', 'CuirNoirPerfore'];
  } else if (selectedVersion === 'legende') {
    sellerieOptions = ['CuirNoir', 'CuirBrun'];
  }
  const handleSellerieSelect = (sellerie) => {
    setSelectedSellerie(sellerie);
    setCurrentSellerieIndex(0); // Réinitialiser l'index lors de la sélection d'une nouvelle sellerie

  };
  const handleRotateLeftSellerie = () => {
    setCurrentSellerieIndex((prevIndex) => (prevIndex - 1 + sellerieImages[selectedSellerie].length) % sellerieImages[selectedSellerie].length);
  };

  const handleRotateRightSellerie = () => {
    setCurrentSellerieIndex((prevIndex) => (prevIndex + 1) % sellerieImages[selectedSellerie].length);
  };



  const handleRotateLeft = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images[selectedColor].pure.length) % images[selectedColor].pure.length);
  };

  const handleRotateRight = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images[selectedColor].pure.length);
  };

  return (
    <div>
      <div className="configurator-container d-flex align-items-center">
        <h1 >vous avez choisie une version: {selectedVersion}</h1>
        {/* partie couleur  */}
        <h1>COULEUR</h1>
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
          <div className='col-md-4 text-center'>
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
        <div className="text-center mb-5">
          <h2>Prix Total: {totalPrice}€</h2>
        </div>
      </div>

      <div className='text-center mb-5'>
        {selectedColor && (
          <button className='btn' onClick={handleNextButtonClick}>Suivant</button>
        )}
      </div>
      {selectedColor && showWheelOptions && (
        <>
          <h1>Jante</h1>

          <div className='row text-center jante'>
            <div className='col-md-3'>
              <div className='row'>
                <div className='col-md-8'>
                  <button className="wheel-button" onClick={() => handleWheelChange('standard')}>
                    <img className="wheel-image" src={standardWheelImage} alt="Standard Wheel" />
                  </button>
                  <h2 >Standard</h2>
                  <p>Prix: 0€</p>
                </div>
                <div className='col-md-8' >
                  <button className="wheel-button" onClick={() => handleWheelChange('serac')}>
                    <img className="wheel-image" src={seracWheelImage} alt="Serac Wheel" />
                  </button>
                  <h2>Serac</h2>
                  <p>Prix: 1000€</p>
                </div>
               
                  {/* Ajoutez la condition pour rendre le bouton "Legende" disponible uniquement si la version sélectionnée est "legende" */}
                  {selectedVersion === 'legende' && (
                     <div className='col-md-8'>
                    <button className="wheel-button" onClick={() => handleWheelChange('legende')}>
                      <img className="wheel-image" src={legendeWheelImage} alt="Legende Wheel" />
                    </button>
                    <h2>Legende</h2>
                  <p>Prix: 0€</p>
                </div>
                  )}
               
              </div>
            </div>
            <div className="col-md-7 mt-5">
              <img className=' wheel-images' src={wheelImages[selectedColor][selectedWheel]} alt="Selected Wheel" onClick={() => handleWheelChange(selectedWheel)} />
            </div>
            <div className="text-center mb-5">
              <h2>Prix Total: {totalPrice}€</h2>
            </div>
          </div>

          {/* Bouton "Suivant" pour afficher les options de sellerie */}
          <div className='text-center mb-5'>
            <button className='btn' onClick={handleNextButtonWheelClick}>Suivant</button>
          </div>

        </>
      )}


      {/* Options de sellerie */}

      {selectedColor && showSellerieOptions && (
        <div className="sellerie-options">
          <h1>INTERIEUR</h1>
          <div className='row text-center mb-5 mt-5'>
            <div className='col-md-8'>
              <div className="sellerie-image-container">
                {selectedSellerie && (
                  <div className="sellerie-image">
                    <img className='wheel-images m-3' src={sellerieImages[selectedSellerie][currentSellerieIndex]} alt={selectedSellerie} />
                  </div>
                )}
                <div className="mt-3">
                  <FontAwesomeIcon icon={faUndo} onClick={handleRotateLeftSellerie} />
                  <img className='icone360' src={IconeRoutation} onClick={handleRotateLeftSellerie} />
                  <FontAwesomeIcon icon={faRedo} onClick={handleRotateRightSellerie} />
                </div>
              </div>
            </div>

            <div className='col-md-4'>
              <div className='row'>
                {sellerieOptions.map((sellerieOption) => (
                  <div className='col-md-8' key={sellerieOption}>
                    <button className="color-button" onClick={() => handleSellerieSelect(sellerieOption)}>
                      <img className="color-image" src={sellerieOption === 'CuirBrun' ? CuirBrun : sellerieOption === 'CuirNoir' ? CuirNoir : sellerieOption === 'CuirNoirDinamic' ? CuirNoirDinamic : CuirNoirPerfore} alt={sellerieOption} />
                    </button>
                    <h2>{selleriePrices[sellerieOption].name}</h2>
                    <p>Prix: {selleriePrices[sellerieOption].price}€</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="text-center mb-5">
            <h2>Prix Total: {totalPrice}€</h2>
          </div>
        </div>

      )}
    </div>



  );
}

export default Configurator;