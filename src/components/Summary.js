import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function Summary({ selectedOptions, basePrice, colorPrice, wheelPrice, selleriePrice }) {
  // Calculate total price
  const [totalPrice, setTotalPrice] = useState(0);
  const [showOptions, setShowOptions] = useState(false);
  useEffect(() => {
    let totalPrice = basePrice + colorPrice + wheelPrice + selleriePrice;
    for (const category in selectedOptions) {
      selectedOptions[category].forEach(option => {
        totalPrice += option.price;
      });
    }
    setTotalPrice(totalPrice);
  }, [selectedOptions, basePrice, colorPrice, wheelPrice, selleriePrice]);
  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };


  return (
    <div className="summary row" style={{ position: 'fixed', bottom: 0, left: 0,borderRadius:'50% 50% 50% 0', backgroundColor: ' rgba(25, 83, 137, 0.657)',color: 'white', padding: '20px' }}>
    <div>
      
    <h6 className='text-center'>Total: {totalPrice}€</h6>
    <h2 className='text-center'> <FontAwesomeIcon icon={faShoppingCart}  onClick={toggleOptions} /></h2>
  
    {showOptions && (
      <ul>
         <li>Prix de base: {basePrice}€</li>
         <li>Couleur: {colorPrice}€</li>
         <li>Jantes:{wheelPrice}€</li>
         <li>Sellerie:{selleriePrice}€</li>
        {Object.entries(selectedOptions).map(([category, options]) => (         
              Array.isArray(options) && options.map((option, index) => (              
            <li key={index}>
            
              {option.name}: {option.price}€
            </li>
          ))
        ))}
       
      </ul>
    )}
  </div>

  </div>
  );
}

export default Summary;
