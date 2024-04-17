import React, { useEffect } from 'react';

function FindDealer() {
  const handleOrder = () => {
    // Ici, vous pouvez ajouter la logique pour passer une commande
    console.log('Order placed!');
  };

  useEffect(() => {
    // Initialiser la carte une fois que le composant est monté
    const google = window.google; // Assurez-vous que la bibliothèque Google Maps est chargée
    const map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 45.754070, lng: 4.828798 }, // Coordonnées du concessionnaire
      zoom: 15, // Niveau de zoom de la carte
    });

    // Ajouter un marqueur pour le concessionnaire
    new google.maps.Marker({
      position: { lat: 45.754070, lng: 4.828798 }, // Coordonnées du concessionnaire
      map: map,
      title: "Centre Alpine Villefranche-Sur-Saône", // Titre du marqueur
    });
  }, []);

  return (
    <div>
      <h2>Find a Dealer</h2>
      <p>Nearest Dealer to Your Location</p>
      <p>(99 kms)</p>
      <p>Centre Alpine Villefranche-Sur-Saône</p>
      <p>1057 Av. Edouard Herriot, 69400 Villefranche-sur-Saône</p>
      <p>0474063110</p>
      <button onClick={handleOrder}>Order Here</button>
      {/* Ajoutez ici la carte */}
      <div id="map" style={{ width: '100%', height: '400px' }}></div>
    </div>
  );
}

export default FindDealer;
