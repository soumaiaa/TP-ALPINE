
import React, { useState, useEffect } from 'react';
function FindDealer() {
  const handleOrder = () => {
    // Ajoutez votre logique ici pour passer une commande
    console.log('Order placed!');
  };

  useEffect(() => {
    // Vérifiez que window.google est défini et contient la propriété maps
    if (window.google && window.google.maps) {
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: 45.754070, lng: 4.828798 },
        zoom: 15,
      });
  
      new window.google.maps.Marker({
        position: { lat: 45.754070, lng: 4.828798 },
        map: map,
        title: "Centre Alpine Villefranche-Sur-Saône",
      });
    } else {
      // Gérez le cas où la bibliothèque Google Maps n'est pas chargée
      console.error('La bibliothèque Google Maps n\'est pas chargée.');
    }
  }, []);

  return (
    <div className='row mt-3 mb-3'>
      <div  className='col-md-8 text-center'>
       <div id="map">
        <iframe style={{ width: '70%', height:'300px' }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2799.5875990004024!2d4.378487076701956!3d45.437814035198244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f5af5a4302d623%3A0x77b76af46a2f3e19!2sGarage404!5e0!3m2!1sfr!2sfr!4v1713797273710!5m2!1sfr!2sfr"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> 
      </div>
      </div>
      <div className='col-md-4'>
      <h2>Find a Dealer</h2>
      <p>Nearest Dealer to Your Location</p>
      <p>(99 kms)</p>
      <p>Centre Alpine Villefranche-Sur-Saône</p>
      <p>1057 Av. Edouard Herriot, 69400 Villefranche-sur-Saône</p>
      <p>0474063110</p>
      <button className='btn' onClick={handleOrder}>Order Here</button>
      </div>
     
    </div>
  );
}

export default FindDealer;
