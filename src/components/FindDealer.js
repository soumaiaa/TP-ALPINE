
import React, { useState, useEffect } from 'react';
function FindDealer() {

  return (
    <div className='row mt-3 mb-3'>
      <div  className='col-md-8 text-center'>
       <div id="map">
        <iframe style={{ width: '70%', height:'300px' }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2799.5875990004024!2d4.378487076701956!3d45.437814035198244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f5af5a4302d623%3A0x77b76af46a2f3e19!2sGarage404!5e0!3m2!1sfr!2sfr!4v1713797273710!5m2!1sfr!2sfr"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> 
      </div>
      </div>
      <div className='col-md-4'>
      <h2>Contact</h2>
      <p>ALPINE VOITURE</p>
      <p>alpine@gmail.com</p>
      <p>Garage-404</p>
      <p>8 Rue Tarentaize, 42000 Saint-Étienne</p>
      <p>0400000000</p>
     
      </div>
     
    </div>
  );
}

export default FindDealer;
