import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/reserver.css'
function Reserver() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  // Récupérer les données des paramètres de l'URL
  const selectedOptions = JSON.parse(queryParams.get('selectedOptions'));
  const selectedOptionsAcc = JSON.parse(queryParams.get('selectedOptionsAcc'));
  const selectedColor = queryParams.get('selectedColor');
  const colorPrice = queryParams.get('colorPrice');
  const selectedWheel = queryParams.get('selectedWheel');
  const wheelPrice = queryParams.get('wheelPrice');
  const selectedSellerie = queryParams.get('selectedSellerie');
  const selleriePrice = queryParams.get('selleriePrice');
  const selectedVersion = queryParams.get('selectedVersion');
  const basePrice = queryParams.get('basePrice');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Ici, vous pouvez ajouter la logique pour traiter les données du formulaire
    // par exemple, envoyer les données à un backend pour traitement
    console.log("Formulaire soumis !");
  };

  return (
    <div className='row'>
      <div className="reservation-summary col-md-6 ">
        <h1 className='reserverh1'>Récapitulatif de votre réservation :</h1>
        <ul className='mx-3'>
          <li>Version {selectedVersion}: {basePrice}€</li>
          <li>Couleur {selectedColor}: {colorPrice}€</li>
          <li>Jantes {selectedWheel}:{wheelPrice}€</li>
          <li>Sellerie {selectedSellerie}:{selleriePrice}€</li>          
          {/* Display selected accessory options */}
          <h6>Equipements:</h6>
          {Object.entries(selectedOptionsAcc).map(([category, options]) => (
            Array.isArray(options) && options.map((option, index) => (
             
              <li key={index}>
                {option.name}: {option.price}€
              </li>
            ))
          ))}
          {/* Display selected equipment options */}
          <h6>Accessoires:</h6>
          {Object.entries(selectedOptions).map(([category, options]) => (
            Array.isArray(options) && options.map((option, index) => (
              <li key={index}>
                {option.name}: {option.price}€
              </li>
            ))
          ))}
        </ul>
      </div>
     < div className=' col-md-6'>
      <div className='form-container mb-5 mt-5'>
        <h1 className='reserverh1'>Réserver</h1>

        {/* Formulaire de réservation */}
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nom">Nom :</label>
            <input type="text" id="nom" name="nom" />
          </div>
          <div>
            <label htmlFor="email">Email :</label>
            <input type="email" id="email" name="email" />
          </div>
          <div>
            <label htmlFor="telephone">Téléphone :</label>
            <input type="tel" id="telephone" name="telephone" />
          </div>
          <div>
            <label htmlFor="message">Message :</label>
            <textarea id="message" name="message"></textarea>
          </div>
          <button type="submit">Envoyer</button>
        </form>
      </div>
      </div>
    </div>
  );
}

export default Reserver;
