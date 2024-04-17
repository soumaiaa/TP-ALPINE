import React from 'react';
import { useSelector } from 'react-redux';

function Summary() {
  const selectedOptions = useSelector(state => state.vehicleConfig.selectedOptions);
  const totalPrice = useSelector(state => state.priceSummary.totalPrice);

  // Utilisez les données de selectedOptions et totalPrice pour afficher un récapitulatif

  return (
    <div>
      <h2>Récapitulatif</h2>
      {/* Contenu dynamique du récapitulatif */}
    </div>
  );
}

export default Summary;